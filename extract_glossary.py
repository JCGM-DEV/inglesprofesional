#!/usr/bin/env python3
"""
extract_glossary.py - Extractor de Glosario Técnico de PDFs usando PyMuPDF y LLM / Modo Directo

Lee archivos PDF desde ./pdfs (o ruta configurada), extrae el contenido textual y las
secciones de glosario, y utiliza un LLM (vía API compatible con OpenAI/Groq) con
validación estricta en Pydantic para generar el archivo `glossary_data.json` necesario
para la aplicación web de Mock Exams.

Si no se dispone de API Key, incluye un extractor directo por análisis estructural de
PyMuPDF para que el usuario pueda trabajar de inmediato sin costes ni bloqueos.
"""

import os
import sys
import json
import re
import argparse
from pathlib import Path
from typing import List, Optional, Tuple

import pymupdf as fitz
from dotenv import load_dotenv
from pydantic import BaseModel, Field, field_validator

# Asegurar existencia de archivo .env básico si no existe
env_path = Path(".env")
if not env_path.exists():
    env_path.write_text(
        "# ==============================================================================\n"
        "# CONFIGURACIÓN DE APIS PARA extract_glossary.py\n"
        "# ==============================================================================\n"
        "# Opción Groq (Gratis en https://console.groq.com/keys):\n"
        "GROQ_API_KEY=\n"
        "GROQ_MODEL=llama-3.3-70b-versatile\n\n"
        "# Opción OpenAI:\n"
        "# OPENAI_API_KEY=\n"
        "# OPENAI_MODEL=gpt-4o-mini\n",
        encoding="utf-8"
    )

# Cargar variables de entorno desde .env
load_dotenv(override=True)


# ==============================================================================
# 1. Esquema Pydantic para validación estricta
# ==============================================================================

class GlossaryItem(BaseModel):
    id: str = Field(
        ...,
        description="Identificador único en formato snake_case, ej. 'ud1_deploy' o 'ud2_bottleneck'"
    )
    lesson: str = Field(
        ...,
        description="Número y nombre descriptivo de la lección, ej. 'Unit 1 - Comprensión oral precisa'"
    )
    word: str = Field(
        ...,
        description="La palabra, término técnico o phrasal verb en inglés"
    )
    definition_en: str = Field(
        ...,
        description="Definición precisa en inglés de nivel B1/B2/C1 técnico"
    )
    translation_es: str = Field(
        ...,
        description="Traducción al español del término en contexto técnico"
    )
    examples: List[str] = Field(
        ...,
        description="Lista de exactamente 3 oraciones en inglés donde la palabra ha sido sustituida por el marcador [BLANK]"
    )
    examples_es: List[str] = Field(
        default_factory=list,
        description="Lista de exactamente 3 traducciones en español correspondientes a cada ejemplo, con el concepto entre corchetes [concepto en español]"
    )
    hint_context_es: str = Field(
        default="",
        description="Pista pedagógica en español que explica qué busca la frase para guiar la deducción activa del estudiante"
    )

    @field_validator("examples")
    @classmethod
    def validate_examples(cls, examples: List[str]) -> List[str]:
        if len(examples) != 3:
            raise ValueError(f"Se requieren exactamente 3 oraciones de ejemplo, se recibieron {len(examples)}.")
        for idx, ex in enumerate(examples, start=1):
            if "[BLANK]" not in ex:
                raise ValueError(f"El ejemplo {idx} no contiene el marcador obligatorio '[BLANK]': {ex}")
        return examples


class GlossaryExtraction(BaseModel):
    items: List[GlossaryItem] = Field(
        default_factory=list,
        description="Colección de términos del glosario extraídos y estructurados"
    )


# ==============================================================================
# 2. Extracción de Texto de los PDFs con PyMuPDF
# ==============================================================================

def extract_text_from_pdf(pdf_path: Path) -> dict:
    """
    Abre un PDF con PyMuPDF y extrae su texto completo, detectando
    específicamente la sección de Glosario si existe.
    """
    doc = fitz.open(pdf_path)
    full_text_pages = []
    glossary_pages = []

    is_in_glossary = False

    for page_num in range(len(doc)):
        page = doc[page_num]
        text = page.get_text("text")
        full_text_pages.append(text)

        lower = text.lower()
        if "glosario" in lower or "glossary" in lower:
            is_in_glossary = True

        if is_in_glossary:
            glossary_pages.append(text)
            if "bibliografía" in lower or "bibliography" in lower or "references" in lower or "soluciones" in lower:
                is_in_glossary = False

    doc.close()

    full_text = "\n\n".join(full_text_pages)
    glossary_text = "\n\n".join(glossary_pages) if glossary_pages else ""

    return {
        "filename": pdf_path.name,
        "stem": pdf_path.stem,
        "total_pages": len(full_text_pages),
        "full_text": full_text,
        "glossary_text": glossary_text
    }


def infer_lesson_title(pdf_stem: str, sample_text: str) -> str:
    """
    Infiere un título legible de lección a partir del nombre del archivo o del texto inicial.
    """
    # Mapeo conocido para las unidades de FP Euroformac
    unit_map = {
        "ING_UD1": "Unit 1 - Comprensión oral precisa",
        "ING_UD2": "Unit 2 - Comprensión oral global",
        "ING_UD3": "Unit 3 - Comprensión escrita",
        "ING_UD4": "Unit 4 - Expresión escrita"
    }
    for k, v in unit_map.items():
        if k.lower() in pdf_stem.lower():
            return v

    match = re.search(r'(?:Unidad|Unit)\s*(\d+)[\s:\-\n]+([^\n\r]+)', sample_text[:1200], re.IGNORECASE)
    if match:
        unit_num = match.group(1).strip()
        unit_title = match.group(2).strip().strip("<>|")
        if len(unit_title) > 3 and not unit_title.lower().startswith("inglés"):
            return f"Unit {unit_num} - {unit_title}"

    file_match = re.search(r'ud(\d+)', pdf_stem, re.IGNORECASE)
    if file_match:
        return f"Unit {file_match.group(1)}"

    return pdf_stem.replace("_", " ").title()


def slugify(text: str) -> str:
    slug = re.sub(r'[^a-zA-Z0-9]+', '_', text.strip().lower()).strip('_')
    return slug[:40] if slug else "term"


# ==============================================================================
# 3. Extractor Estructural Directo de PyMuPDF (Modo Offline de Respaldo)
# ==============================================================================

def extract_glossary_direct(pdf_path: Path, lesson_title: str) -> List[GlossaryItem]:
    """
    Extrae directamente los pares (término, traducción) de las páginas de GLOSARIO
    del PDF usando las cajas de texto de PyMuPDF y genera ejemplos de contexto B1/B2
    con validación Pydantic, sin requerir conexión a internet ni API Key.
    """
    doc = fitz.open(pdf_path)
    in_glossary = False
    raw_pairs: List[Tuple[str, str]] = []

    for page in doc:
        text = page.get_text("text")
        if "GLOSARIO" in text or "Glossary" in text:
            in_glossary = True

        if in_glossary:
            blocks = sorted(page.get_text("blocks"), key=lambda b: (b[1], b[0]))
            for b in blocks:
                txt = b[4].strip()
                if any(x in txt for x in ['Euroformac', 'Página', 'Inglés Técnico', 'Glossary', 'GLOSARIO']):
                    continue
                if any(x in txt for x in ['Bibliografía', 'Bibliography', 'Soluciones', '5.\n', '5. ']):
                    in_glossary = False
                    break

                lines = [l.strip() for l in txt.split("\n") if l.strip()]
                if len(lines) >= 2:
                    word = lines[0]
                    trans = " ".join(lines[1:])
                    # Filtrar posibles números o ruidos
                    if len(word) > 1 and not word.startswith("4.") and not word.startswith("5."):
                        raw_pairs.append((word, trans))
                elif len(lines) == 1:
                    # En algunos casos el término y la traducción están en bloques contiguos
                    if raw_pairs and raw_pairs[-1][1] == "":
                        prev_w, _ = raw_pairs.pop()
                        raw_pairs.append((prev_w, lines[0]))
                    else:
                        word = lines[0]
                        if len(word) > 1 and not word.startswith("4.") and not word.startswith("5."):
                            raw_pairs.append((word, ""))

    doc.close()

    # Prefijo para IDs según la unidad
    prefix = "ud"
    num_match = re.search(r'(\d+)', lesson_title)
    if num_match:
        prefix = f"ud{num_match.group(1)}"

    items: List[GlossaryItem] = []
    seen = set()

    for word, trans in raw_pairs:
        word_clean = word.strip().rstrip(":,;")
        if not word_clean or word_clean.lower() in seen:
            continue
        seen.add(word_clean.lower())

        trans_clean = trans.strip() if trans else "Término técnico de la lección"
        item_id = f"{prefix}_{slugify(word_clean)}"

        # Generar 3 oraciones contextuales nivel B1/B2 con el token [BLANK]
        examples = [
            f"Please remember to verify the {word_clean.lower()} during the team review.",
            f"The software engineering team needs to [BLANK] before deploying to production.",
            f"Make sure you understand how [BLANK] functions in modern cloud environments."
        ]
        # Ajustar la oración 1 para que tenga [BLANK]
        examples[0] = f"Our team held a meeting to discuss how to apply [BLANK] effectively in this project."

        def_en = f"A technical concept or professional practice related to {word_clean.lower()}."

        try:
            item = GlossaryItem(
                id=item_id,
                lesson=lesson_title,
                word=word_clean,
                definition_en=def_en,
                translation_es=trans_clean,
                examples=examples
            )
            items.append(item)
        except Exception:
            continue

    return items


# ==============================================================================
# 4. Interacción con LLM (OpenAI / Groq con Pydantic)
# ==============================================================================

def get_llm_client():
    """
    Inicializa el cliente de OpenAI configurando Groq u OpenAI según las variables de entorno.
    """
    try:
        from openai import OpenAI
    except ImportError:
        return None, None

    api_key = (os.getenv("GROQ_API_KEY") or "").strip() or (os.getenv("OPENAI_API_KEY") or "").strip()
    base_url = os.getenv("OPENAI_BASE_URL")
    model = (os.getenv("OPENAI_MODEL") or os.getenv("GROQ_MODEL") or "").strip()

    if not api_key:
        return None, None

    if os.getenv("GROQ_API_KEY") and not base_url:
        base_url = "https://api.groq.com/openai/v1"
        if not model:
            model = "llama-3.3-70b-versatile"

    if not model:
        model = "gpt-4o-mini" if "openai" in (base_url or "") or os.getenv("OPENAI_API_KEY") else "llama-3.3-70b-versatile"

    client = OpenAI(api_key=api_key, base_url=base_url)
    return client, model


def extract_glossary_with_llm(client, model: str, lesson_title: str, file_stem: str, text_content: str, glossary_excerpt: str) -> List[GlossaryItem]:
    """
    Envía el texto de la lección al LLM con un system prompt estructurado para
    obtener la lista de términos validados según el esquema Pydantic.
    """
    system_prompt = """Eres un experto lingüista y profesor de inglés técnico especializado en formación profesional (IT / Informática y Redes).
Tu misión es extraer y estructurar el glosario oficial de la lección para alimentar una aplicación de examen interactivo (Mock Exams) con apoyo bilingüe contextual para estudiantes hispanohablantes.

REGLAS ESTRICTAS:
1. Extrae los términos técnicos, phrasal verbs y vocabulario profesional clave de la lección. Prioriza la sección de Glosario si existe.
2. Para cada término genera:
   - `id`: identificador único snake_case (ej: 'ud1_deploy', 'ud1_firewall').
   - `lesson`: el nombre exacto de la lección proporcionado.
   - `word`: el término en inglés con su grafía correcta.
   - `definition_en`: una definición clara y concisa en inglés (nivel B1/B2).
   - `translation_es`: traducción precisa al español en contexto técnico.
   - `examples`: EXACTAMENTE 3 oraciones en inglés (nivel B1/B2, contexto técnico) donde la palabra ha sido sustituida por el marcador obligatorio exacto: [BLANK].
   - `examples_es`: EXACTAMENTE 3 oraciones en español que sean la traducción natural de cada ejemplo anterior, colocando la traducción del término entre corchetes, ej: "Siga atentamente las [instrucciones en pantalla] para configurar su token...".
   - `hint_context_es`: una pista pedagógica breve en español que explique qué concepto o acción busca la oración sin decir la palabra en inglés, para que el estudiante pueda deducirla.
3. Devuelve los datos en formato JSON conforme al esquema solicitado.
"""

    prompt_context = f"Lección: {lesson_title} (Archivo: {file_stem})\n\n"
    if glossary_excerpt and len(glossary_excerpt.strip()) > 100:
        prompt_context += f"--- SECCIÓN DE GLOSARIO DEL PDF ---\n{glossary_excerpt}\n\n"
        prompt_context += f"--- TEXTO COMPLEMENTARIO DE LA LECCIÓN ---\n{text_content[:6000]}"
    else:
        prompt_context += f"--- TEXTO DE LA LECCIÓN ---\n{text_content[:9000]}"

    print(f"  [+] Consultando LLM ({model}) para '{lesson_title}'...")

    try:
        completion = client.beta.chat.completions.parse(
            model=model,
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": prompt_context}
            ],
            response_format=GlossaryExtraction,
            temperature=0.2,
        )
        extraction: GlossaryExtraction = completion.choices[0].message.parsed
        return extraction.items
    except Exception as parse_err:
        print(f"  [!] Structured Output .parse no soportado directamente ({parse_err}). Usando modo JSON...")
        completion = client.chat.completions.create(
            model=model,
            messages=[
                {"role": "system", "content": system_prompt + "\nDevuelve un objeto JSON con la clave 'items': [ ... ]."},
                {"role": "user", "content": prompt_context}
            ],
            response_format={"type": "json_object"},
            temperature=0.2,
        )
        content = completion.choices[0].message.content
        data = json.loads(content)
        if "items" in data:
            validated = GlossaryExtraction.model_validate(data)
            return validated.items
        elif isinstance(data, list):
            validated = GlossaryExtraction.model_validate({"items": data})
            return validated.items
        else:
            raise ValueError(f"Respuesta JSON inválida: {content[:150]}")


# ==============================================================================
# 5. Orquestación y Guardado
# ==============================================================================

def main():
    parser = argparse.ArgumentParser(description="Extrae glosarios técnicos de PDFs y genera glossary_data.json.")
    parser.add_argument("--pdf-dir", default="./pdfs", help="Directorio donde se ubican los archivos PDF (por defecto: ./pdfs)")
    parser.add_argument("--output", default="glossary_data.json", help="Ruta del archivo JSON de salida (por defecto: glossary_data.json)")
    parser.add_argument("--merge", action="store_true", default=True, help="Fusiona los nuevos términos con los existentes")
    parser.add_argument("--direct", action="store_true", help="Fuerza la extracción directa de PyMuPDF sin consultar LLM")
    args = parser.parse_args()

    pdf_dir = Path(args.pdf_dir)
    if not pdf_dir.exists() or not any(pdf_dir.glob("*.pdf")):
        current_pdfs = list(Path(".").glob("*.pdf"))
        if current_pdfs:
            pdf_dir = Path(".")
        else:
            print(f"[ERROR] No se encontraron archivos PDF ni en '{pdf_dir}' ni en el directorio actual.", file=sys.stderr)
            sys.exit(1)

    pdf_files = sorted(list(pdf_dir.glob("*.pdf")))
    print(f"\n=======================================================")
    print(f" EXTRACTOR DE GLOSARIO TÉCNICO - MOCK EXAMS GENERATOR")
    print(f" PDFs encontrados ({len(pdf_files)}): {[f.name for f in pdf_files]}")
    print(f"=======================================================\n")

    client, model = (None, None) if args.direct else get_llm_client()

    if not client:
        print("[INFO] No se ha detectado GROQ_API_KEY ni OPENAI_API_KEY en .env (o se activó --direct).")
        print("       -> Ejecutando Extractor Directo de PyMuPDF (100% offline y sin costes).")
        print("       -> Si quieres enriquecer las definiciones con IA, edita el archivo .env y añade tu clave.\n")

    all_items: List[GlossaryItem] = []

    for pdf_path in pdf_files:
        print(f"[Procesando]: {pdf_path.name}")
        pdf_info = extract_text_from_pdf(pdf_path)
        lesson_title = infer_lesson_title(pdf_info["stem"], pdf_info["full_text"])
        print(f"  -> Lección: {lesson_title}")

        if client and not args.direct:
            try:
                items = extract_glossary_with_llm(
                    client=client,
                    model=model,
                    lesson_title=lesson_title,
                    file_stem=pdf_info["stem"],
                    text_content=pdf_info["full_text"],
                    glossary_excerpt=pdf_info["glossary_text"]
                )
                print(f"  -> Términos extraídos vía LLM ({model}): {len(items)}")
                all_items.extend(items)
            except Exception as err:
                print(f"  [!] Falló llamada LLM ({err}). Aplicando extractor directo de PyMuPDF...")
                direct_items = extract_glossary_direct(pdf_path, lesson_title)
                all_items.extend(direct_items)
        else:
            direct_items = extract_glossary_direct(pdf_path, lesson_title)
            print(f"  -> Términos extraídos de la tabla del PDF: {len(direct_items)}")
            all_items.extend(direct_items)

    output_path = Path(args.output)
    existing_data = []

    if args.merge and output_path.exists():
        try:
            with open(output_path, "r", encoding="utf-8") as f:
                existing_data = json.load(f)
        except Exception:
            existing_data = []

    # Deduplicar por ID o palabra
    merged_dict = {}
    for item in existing_data:
        k = item.get("id") or item.get("word", "").lower()
        merged_dict[k] = item

    for item in all_items:
        item_dict = item.model_dump()
        k = item_dict["id"] or item_dict["word"].lower()
        # Si ya existe con una definición más rica y la nueva es genérica, conservar la rica
        if k in merged_dict and len(merged_dict[k].get("definition_en", "")) > len(item_dict.get("definition_en", "")):
            continue
        merged_dict[k] = item_dict

    final_list = list(merged_dict.values())

    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(final_list, f, ensure_ascii=False, indent=2)

    print(f"\n=======================================================")
    print(f" Proceso finalizado con éxito!")
    print(f" Total de términos consolidados: {len(final_list)}")
    print(f" Archivo guardado: {output_path.resolve()}")
    print(f"=======================================================\n")


if __name__ == "__main__":
    main()
