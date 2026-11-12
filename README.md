# VocabMaster - Technical English Mock Exams Generator & PDF Extractor

Sistema completo para el aprendizaje activo y entrenamiento de vocabulario técnico en inglés para estudiantes y profesionales de Formación Profesional e Informática.

Este proyecto se compone de dos herramientas complementarias:
1. **Single Page Application (`index.html`)**: Generador de exámenes interactivos de entrenamiento (Mock Exams) con feedback pedagógico inmediato, modos de práctica y persistencia local (`localStorage`).
2. **Script de Extracción (`extract_glossary.py`)**: Analizador inteligente con `PyMuPDF` y LLM (OpenAI / Groq) que extrae los glosarios de tus archivos PDF y genera el `glossary_data.json`.

---

## 🚀 1. Aplicación Web Local (`index.html`)

La SPA está construida con **HTML5, TailwindCSS CDN y Vanilla JavaScript (ES6+)** en un único archivo autónomo, con **Modo Oscuro nativo** para largas sesiones de estudio y **control completo mediante el teclado**.

### Cómo iniciar la aplicación
Puedes abrirla directamente en cualquier navegador web moderno:
- **Opción rápida:** Haz doble clic sobre `index.html` en tu explorador de archivos.
- **Opción recomendada (servidor local):**
  ```bash
  python3 -m http.server 8000
  ```
  Abre [http://localhost:8000](http://localhost:8000) en tu navegador. Esto permite que la web lea automáticamente el archivo `glossary_data.json` actualizado sin restricciones de CORS local.

### Características Principales
- **4 Modos de Entrenamiento:**
  1. **Fill in the Blank (Contexto):** Presenta una oración real en contexto técnico con el marcador `[BLANK]`. El usuario escribe la palabra exacta (con atajos para pedir pista de 1ª letra o definición).
  2. **Multiple Choice:** Muestra 4 opciones (1 correcta + 3 distractores aleatorios de la misma lección). Se puede responder haciendo clic o pulsando las teclas `1`, `2`, `3`, `4`.
  3. **Modo Mixto (Simulacro Real):** Alterna dinámicamente entre preguntas de texto libre y opción múltiple.
  4. **Solo Falladas (Repaso Inteligente):** Filtra y entrena únicamente aquellos términos en los que hayas cometido errores previos.
- **Motor de Aprendizaje Activo (Feedback Inmediato):**
  - Muestra una tarjeta tras cada respuesta con la **palabra correcta**, su **traducción al español**, su **definición en inglés** y la **frase completa resuelta con la palabra resaltada**.
  - Soporte de audio con la Web Speech API nativa (botón "Pronunciar").
  - Toggle configurable para corrección inmediata o continua.
- **Soporte Total de Teclado (Manos en el teclado):**
  - `Enter`: Validar respuesta / Avanzar a la siguiente pregunta.
  - `1`, `2`, `3`, `4`: Seleccionar opciones en Multiple Choice.
  - `H`: Solicitar pista (primera letra + número de caracteres).
  - `Escape`: Cerrar modales.
- **Persistencia en `localStorage`:**
  - Registra aciertos, fallos, rachas de estudio y precisión global.
  - Botón para importar cualquier `.json` externo y botón para reiniciar estadísticas.

---

## 🐍 2. Extractor de Glosario desde PDFs (`extract_glossary.py`)

Extrae automáticamente el vocabulario técnico de los archivos PDF ubicados en la carpeta `./pdfs` y genera o fusiona el archivo `glossary_data.json`.

### Requisitos y Configuración
1. Activa tu entorno virtual o instala los requerimientos:
   ```bash
   python3 -m venv .venv
   source .venv/bin/activate
   pip install -r requirements.txt
   ```

2. Configura tu API Key en un archivo `.env` (puedes copiar de `.env.example`):
   ```bash
   cp .env.example .env
   ```
   - **Opción gratuita con Groq (Recomendada):**
     ```ini
     GROQ_API_KEY=gsk_tu_clave_de_groq
     GROQ_MODEL=llama-3.3-70b-versatile
     ```
   - **Opción con OpenAI:**
     ```ini
     OPENAI_API_KEY=sk-proj-tu_clave_de_openai
     OPENAI_MODEL=gpt-4o-mini
     ```

### Ejecución del script
Coloca tus PDFs en la carpeta `./pdfs/` (ya se han copiado las unidades `ING_UD1.pdf`, `ING_UD2.pdf`, `ING_UD3.pdf`, `ING_UD4.pdf`) y ejecuta:

```bash
# Ejecutar con el entorno virtual
.venv/bin/python extract_glossary.py
```

El script:
1. Lee página a página cada PDF con `PyMuPDF`.
2. Detecta la sección "Glosario" o el vocabulario técnico clave.
3. Genera 3 oraciones de nivel B1/B2 con el marcador `[BLANK]` para cada término.
4. Valida estrictamente la estructura mediante `Pydantic`.
5. Guarda o actualiza el archivo `glossary_data.json` listo para ser consumido por `index.html`.

---

## 📂 Estructura de Datos (`glossary_data.json`)
Cada término cumple rigurosamente el esquema requerido:
```json
{
  "id": "ud1_deploy",
  "lesson": "Unit 1 - Hardware & DevOps",
  "word": "Deploy",
  "definition_en": "To release, install, or make a software application or system available for use.",
  "translation_es": "Desplegar, implementar",
  "examples": [
    "We need to [BLANK] the new microservice to production tonight.",
    "Automated CI/CD pipelines make it easy to [BLANK] updates several times a week.",
    "Did the engineering squad successfully [BLANK] the database patch?"
  ]
}
```

