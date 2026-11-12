#!/usr/bin/env python3
"""
enrich_glossary_with_translations.py - Enriquece glossary_data.json con traducciones pedagógicas
al español y pistas contextuales para cada frase de ejemplo.
"""

import json
import re
from pathlib import Path

# Diccionario especializado de traducciones pedagógicas para términos y oraciones frecuentes
# de las 4 unidades de Inglés Técnico de Formación Profesional
TRANSLATIONS_MAP = {
    # Unit 1
    "ud1_acknowledgment": [
        "Por favor, envíe un [reconocimiento] oficial en cuanto se fusione la pull request.",
        "El cliente dio un [reconocimiento] especial a nuestro equipo de soporte técnico.",
        "No recibimos ningún [reconocimiento] del servidor remoto tras enviar la petición."
    ],
    "ud1_automated_testing": [
        "Implementar [pruebas automatizadas] nos ayudó a detectar errores antes de desplegar a producción.",
        "Nuestra canalización CI/CD activa [pruebas automatizadas] en cada commit de git.",
        "Los desarrolladores pasan menos tiempo depurando gracias a las [pruebas automatizadas] robustas."
    ],
    "ud1_backup_generators": [
        "Cuando la red eléctrica de la ciudad colapsó, los [generadores de reserva] del centro de datos arrancaron de inmediato.",
        "El mantenimiento rutinario garantiza que los [generadores de reserva] estén listos ante apagones repentinos.",
        "La sala de servidores del hospital depende de [generadores de reserva] diésel para mantener el tiempo de actividad continuo."
    ],
    "ud1_belief": [
        "Es nuestra [creencia/convicción] de equipo que la entrega continua mejora la estabilidad del código.",
        "La satisfacción del cliente reforzó nuestra [creencia/confianza] en la metodología ágil.",
        "Su firme [creencia/convicción] en el software de código abierto inspiró a todo el departamento."
    ],
    "ud1_challenging": [
        "Refactorizar esta base de código monolítico heredado fue una tarea extremadamente [desafiante/compleja].",
        "Migrar millones de registros activos de la base de datos resultó ser [desafiante/complejo].",
        "Resolver errores de concurrencia distribuida siempre es [desafiante/complejo] para desarrolladores junior."
    ],
    "ud1_code_freeze": [
        "El arquitecto principal declaró una estricta [congelación de código] una semana antes del lanzamiento.",
        "Durante la [congelación de código], los ingenieros solo solucionan bloqueos críticos de producción.",
        "Por favor, comitead todas las ramas de funcionalidades antes de medianoche, cuando comienza la [congelación de código]."
    ],
    "ud1_coding_phase": [
        "Tras la aprobación de los requisitos, nuestro sprint pasa a la [fase de codificación].",
        "La [fase de codificación] requirió tres semanas de desarrollo intensivo.",
        "Las revisiones de código deben realizarse continuamente a lo largo de la [fase de codificación]."
    ],
    "ud1_conventions": [
        "Nuestro equipo de desarrollo sigue estrictas [convenciones] de nombrado PEP 8.",
        "Seguir [convenciones] de código limpio facilita enormemente la colaboración en equipo.",
        "Ella presentó una ponencia sobre ciberseguridad en [congresos/convenciones] internacionales de desarrollo."
    ],
    "ud1_core_functionalities": [
        "Antes de lanzar funciones adicionales, debemos probar todas las [funciones principales].",
        "La autenticación y el cifrado de datos representan las [funciones principales] de nuestra app en la nube.",
        "Cualquier fallo en las [funciones principales] impedirá que la versión pase a producción."
    ],
    "ud1_cost_effective": [
        "Pasar a infraestructura serverless en la nube demostró ser una solución muy [rentable/económica].",
        "Automatizar tareas repetitivas de TI es una estrategia [rentable] para las empresas modernas.",
        "El software de código abierto ofrece una alternativa muy [rentable] frente a costosas herramientas privativas."
    ],
    "ud1_cutting_edge": [
        "Nuestra empresa tecnológica desarrolla algoritmos de aprendizaje automático [innovadores/de vanguardia].",
        "La granja de servidores utiliza hardware de refrigeración líquida por inmersión [de vanguardia].",
        "Los ingenieros se forman en metodologías DevOps [de vanguardia] para aumentar la velocidad de entrega."
    ],
    "ud1_delight": [
        "Ofrecer una interfaz de usuario intuitiva causará [placer/deleite] a nuestros clientes empresariales.",
        "El rápido tiempo de respuesta del nuevo microservicio fue un auténtico [deleite/placer] de ver.",
        "Fue un verdadero [placer/deleite] colaborar con ingenieros de sistemas tan competentes."
    ],
    "ud1_embracing_change": [
        "[Aceptar el cambio] es esencial al migrar de sistemas locales heredados a la nube.",
        "Los equipos ágiles modernos triunfan al [aceptar el cambio] en lugar de resistirse a él.",
        "Los líderes tecnológicos exitosos guían a sus organizaciones [aceptando el cambio] con confianza."
    ],
    "ud1_enhance": [
        "Añadimos capas de caché para [mejorar/aumentar] el rendimiento general de la aplicación web.",
        "La autenticación multifactor ayuda a [mejorar/reforzar] la seguridad de las cuentas de usuario.",
        "La última actualización de firmware conseguirá [mejorar] la estabilidad del router de red."
    ],
    "ud1_evidence": [
        "Los registros de auditoría de red proporcionaron [pruebas/evidencia] clara de un escaneo de puertos no autorizado.",
        "No hay [evidencia/prueba] empírica de que esta optimización de consultas causara la ralentización.",
        "El administrador de sistemas recopiló [pruebas] forenses tras el incidente de seguridad."
    ],
    "ud1_firewall": [
        "El [cortafuegos] corporativo bloqueó múltiples intentos de conexión sospechosos.",
        "Asegúrate de que el puerto 8080 esté abierto en la configuración del [cortafuegos] interno.",
        "Un [cortafuegos] de última generación inspecciona los paquetes de datos en la capa de aplicación."
    ],
    "ud1_formality": [
        "La comunicación por correo electrónico con clientes corporativos requiere un alto nivel de [formalidad].",
        "Firmar el acuerdo de confidencialidad no es un mero trámite de [formalidad]; es legalmente vinculante.",
        "Aunque nuestra reunión diaria es informal, las demos ante clientes mantienen una estricta [formalidad]."
    ],
    "ud1_foster": [
        "La programación en parejas ayuda a [fomentar/promover] el intercambio de conocimientos en el equipo.",
        "Los hackatones están diseñados para [fomentar/impulsar] la innovación y la resolución creativa de problemas.",
        "Una buena documentación técnica ayuda a [fomentar] la autonomía entre los desarrolladores junior."
    ],
    "ud1_inquire": [
        "Me pondré en contacto con el administrador de bases de datos para [preguntar/indagar] sobre la política de copias.",
        "Los clientes suelen [preguntar/consultar] con frecuencia sobre el cumplimiento de la privacidad antes de contratar.",
        "Deberías [preguntar/indagar] si la API admite webhooks asíncronos."
    ],
    "ud1_insights": [
        "Los paneles de control de monitorización aportan valiosas [perspectivas/conocimientos] sobre el tráfico de usuarios.",
        "El análisis de datos ofrece [conocimientos/perspectivas] prácticas para optimizar el gasto en la nube.",
        "El arquitecto sénior compartió interesantes [conocimientos/perspectivas] sobre el desacoplamiento de microservicios."
    ],
    "ud1_judgment": [
        "Los ingenieros sénior confían en su [criterio/juicio] técnico a la hora de elegir patrones de arquitectura.",
        "A mi [criterio/juicio] profesional, migrar inmediatamente a GraphQL conlleva un riesgo excesivo.",
        "Las decisiones críticas de producción requieren un [criterio] de ingeniería sereno y equilibrado."
    ],
    "ud1_key_milestones": [
        "Lanzar la versión beta para junio es uno de nuestros [hitos/objetivos clave].",
        "El gestor de proyectos monitorizó todos los [hitos clave] en el panel de Jira.",
        "Celebrar los [hitos clave] alcanzados mantiene motivado al equipo de desarrollo."
    ],
    "ud1_kicked_in": [
        "Cuando el servidor principal se cayó, el mecanismo de tolerancia a fallos [empezó a hacer efecto/se activó] de inmediato.",
        "La limitación automática de peticiones [empezó a actuar] en cuanto la API recibió 10.000 solicitudes por segundo.",
        "En cuanto subió la temperatura, la refrigeración auxiliar del centro de datos [entró en acción]."
    ],
    "ud1_misunderstanding": [
        "Una documentación clara de la API evita cualquier [malentendido] entre desarrolladores frontend y backend.",
        "Un pequeño [malentendido] relativo al objetivo del sprint retrasó el lanzamiento un día.",
        "Detallar minuciosamente las historias de usuario ayuda a evitar [malentendidos] con los analistas."
    ],
    "ud1_monitoring": [
        "La [supervisión/monitorización] en tiempo real de CPU y RAM nos avisa antes de que las fugas de memoria tiren los servidores.",
        "Prometheus y Grafana son herramientas populares para la [supervisión/monitorización] de infraestructuras.",
        "La [supervisión] continua de registros es necesaria para detectar intrusiones de seguridad con rapidez."
    ],
    "ud1_network": [
        "La [red] de la oficina fue actualizada para admitir conexiones de fibra óptica de 10 Gigabits.",
        "Un ataque distribuido de denegación de servicio (DDoS) saturó la [red] corporativa.",
        "Los túneles de [red] privada virtual (VPN) permiten un acceso remoto seguro al personal."
    ],
    "ud1_onward_and_upward": [
        "Tras superar la crisis del despliegue, la empresa emergente fue [adelante y hacia arriba / viento en popa].",
        "Con la nueva ronda de financiación cerrada, todo va [hacia arriba y adelante] para nuestro equipo de software.",
        "Completamos el hito de refactorización y seguimos avanzando [adelante y hacia arriba]."
    ],
    "ud1_open_minded": [
        "Un buen arquitecto de software se mantiene [de mente abierta] ante pilas tecnológicas alternativas.",
        "Tener una actitud [de mente abierta] durante las revisiones de código fomenta el debate constructivo.",
        "Necesitamos un enfoque [de mente abierta] al reevaluar nuestros sistemas heredados."
    ],
    "ud1_outage": [
        "El inesperado [corte de servicio/apagón] de DNS impidió que los usuarios accedieran a nuestra web durante una hora.",
        "La investigación posterior reveló que un error humano provocó la [caída del servicio/interrupción] en la nube.",
        "Configuramos balanceadores de carga redundantes para minimizar el impacto de cualquier [corte/caída de servicio]."
    ],
    "ud1_overall_strategy": [
        "Migrar a microservicios en contenedores forma parte de nuestra [estrategia general].",
        "El director de tecnología presentó la [estrategia general] a cinco años ante la junta directiva.",
        "Nuestra [estrategia general] se centra en la automatización, la seguridad y la comodidad del desarrollador."
    ],
    "ud1_phased_implementation": [
        "Adoptamos una estrategia de [implementación por fases] para reducir el riesgo operativo de la migración.",
        "La actualización del sistema ERP se ejecutó mediante una [implementación por fases] de tres meses.",
        "Durante una [implementación por fases], inicialmente solo el 10% de los usuarios recibe la nueva función."
    ],
    "ud1_power_fluctuations": [
        "El hardware delicado de servidores debe protegerse contra [variaciones de potencia/voltaje] inesperadas.",
        "El SAI (UPS) filtra pequeñas [variaciones de potencia] antes de que la electricidad llegue al rack.",
        "Las bruscas [variaciones de potencia] durante la tormenta hicieron que varios equipos se reiniciaran."
    ],
    "ud1_power_surge": [
        "La caída de un rayo provocó una grave [sobretensión / pico de tensión] que dañó los puertos del switch.",
        "Conecte siempre los equipos de servidor a protectores certificados contra [sobretensiones].",
        "Los disyuntores del centro de datos saltaron inmediatamente cuando se produjo la [sobretensión]."
    ],
    "ud1_practical_tips": [
        "El ingeniero sénior compartió varios [consejos prácticos] para depurar JavaScript asíncrono.",
        "Este manual de seguridad proporciona [consejos prácticos] para configurar claves SSH.",
        "Aquí tienes cinco [consejos prácticos] para optimizar la indexación en bases de datos PostgreSQL."
    ],
    "ud1_rationale": [
        "¿Cuál es la [justificación/lógica] arquitectónica para dividir esta base de datos en fragmentos?",
        "El desarrollador principal explicó la [justificación/lógica] para descatalogar los antiguos endpoints REST.",
        "Documentar la [justificación] técnica ayuda a los futuros programadores a entender el código."
    ],
    "ud1_recurring_issue": [
        "El agotamiento de memoria en el clúster de Redis se ha convertido en un [problema recurrente].",
        "La lógica de reintento automático ayudó a mitigar este [problema recurrente] en los procesos en segundo plano.",
        "Necesitamos una solución arquitectónica permanente en lugar de parchear este [asunto recurrente] cada semana."
    ],
    "ud1_relief": [
        "Fue un gran [alivio] cuando todas las pruebas automatizadas de extremo a extremo pasaron limpiamente.",
        "Saber que existen copias de seguridad externas proporciona un inmenso [alivio] al equipo de operaciones.",
        "Solucionar la vulnerabilidad crítica de día cero trajo un enorme [alivio] al personal de seguridad."
    ],
    "ud1_rerouting_power": [
        "La unidad inteligente de distribución logró [redirigir la energía] rodeando la línea defectuosa.",
        "[Redirigir la energía] durante el mantenimiento programado evitó cualquier caída de los servidores.",
        "Los conmutadores automáticos gestionan el [redireccionamiento de energía] cuando salta un interruptor."
    ],
    "ud1_scalability": [
        "El autoescalado de pods en Kubernetes ofrece una excelente [escalabilidad] horizontal.",
        "La base de datos se rediseñó para garantizar una alta [escalabilidad] durante las ventas de Black Friday.",
        "Las arquitecturas de microservicios son muy apreciadas por las empresas gracias a su [escalabilidad]."
    ],
    "ud1_scalable": [
        "Necesitamos una solución de almacenamiento altamente [escalable] para guardar petabytes de registros.",
        "Las arquitecturas en la nube están diseñadas para ser naturalmente [escalables] según la demanda.",
        "Escribir servicios backend sin estado hace que tu aplicación web sea fácilmente [escalable]."
    ],
    "ud1_server_room": [
        "Solo los administradores autorizados con tarjeta biométrica pueden entrar a la [sala de servidores].",
        "La temperatura dentro de la [sala de servidores] debe mantenerse estrictamente entre 18 y 22 grados.",
        "Se han instalado sistemas de extinción por gas en toda la [sala de servidores] de la empresa."
    ],
    "ud1_settings": [
        "Abra la consola de administración para revisar los [ajustes / la configuración] predeterminada de red.",
        "Puede activar o desactivar el modo oscuro en los [ajustes / opciones] de su perfil de usuario.",
        "El desarrollador modificó los [ajustes / variables] de entorno antes de desplegar en preproducción."
    ],
    "ud1_streamlining": [
        "Adoptar la integración continua se tradujo en una [optimización/simplificación] de todo nuestro ciclo de entrega.",
        "[Optimizar/simplificar] los trámites de bienvenida ayuda a los nuevos programadores a comitear código el primer día.",
        "La retrospectiva del sprint se centró en [simplificar/optimizar] el flujo de reporte de fallos."
    ],
    "ud1_supporting": [
        "El arquitecto sénior se dedica a [dar apoyo / respaldar] a los desarrolladores junior durante el sprint.",
        "Mantenemos varias librerías [de apoyo / secundarias] junto con nuestra aplicación web principal.",
        "El equipo de soporte técnico hace un trabajo extraordinario [ayudando / dando soporte] a empleados remotos."
    ],
    "ud1_thrilled": [
        "El equipo estuvo [entusiasmado/emocionado] cuando el cliente aprobó la versión final de producción.",
        "Ella estaba [entusiasmada] tras ser ascendida a Ingeniera Sénior de Infraestructura.",
        "Nos quedamos [entusiasmados] con los positivos resultados de rendimiento obtenidos en las pruebas de carga."
    ],
    "ud1_updating": [
        "[Actualizar] las dependencias con regularidad es fundamental para parchear vulnerabilidades de seguridad.",
        "El esquema de la base de datos se bloqueó mientras se estaban [actualizando] los registros de clientes.",
        "Asegúrate de reiniciar el servicio del servidor tras [actualizar] los archivos de configuración."
    ],
    "ud1_user_acceptance_testing": [
        "La aplicación web superó el control de calidad interno y ahora está en [pruebas de aceptación del usuario (UAT)].",
        "Los responsables de negocio descubrieron dos discrepancias en el flujo durante las [pruebas de aceptación (UAT)].",
        "La firma de aprobación de las [pruebas de aceptación (UAT)] es legalmente obligatoria antes del despliegue público."
    ],
    "ud1_versatile": [
        "Python es un lenguaje excepcionalmente [versátil] utilizado en desarrollo web, ciencia de datos y DevOps.",
        "Los contenedores Docker ofrecen un entorno [versátil] para desplegar aplicaciones heterogéneas.",
        "Un ingeniero de sistemas [versátil] es capaz de gestionar tanto redes en la nube como bases de datos."
    ],
    "ud1_viewpoint": [
        "Desde un [punto de vista] de seguridad, guardar claves de API en texto plano en GitHub es catastrófico.",
        "El diseñador frontend abordó el problema desde el [punto de vista] de la experiencia de usuario.",
        "Durante la revisión de arquitectura, se anima a cada programador a expresar su [punto de vista]."
    ],
    "ud1_well_being": [
        "Prevenir el agotamiento de los programadores es esencial para el [bienestar] a largo plazo del equipo.",
        "Las políticas de teletrabajo flexible mejoraron notablemente el [bienestar] de los empleados.",
        "El mobiliario ergonómico de oficina favorece el [bienestar] físico de los desarrolladores."
    ],
    "ud1_workflow": [
        "Las reglas de protección de ramas en Git imponen un [flujo de trabajo] coherente para la revisión de código.",
        "Automatizar la creación de tickets agilizó nuestro [flujo de trabajo] de atención al cliente de TI.",
        "GitHub Actions permite definir [flujos de trabajo] automatizados de CI/CD mediante archivos YAML."
    ],

    # Unit 2
    "ud2_acknowledging": [
        "Al [reconocer / tener en cuenta] los comentarios de los usuarios a tiempo, mejoramos la nota de nuestra app.",
        "El ingeniero de soporte comenzó la llamada [reconociendo / validando] la frustración del cliente.",
        "El servidor respondió [confirmando / reconociendo] la recepción de los paquetes de datos de telemetría."
    ],
    "ud2_assist": [
        "Nuestro chatbot automatizado puede [ayudar/asistir] a los usuarios en las solicitudes de restablecimiento de contraseña.",
        "El administrador sénior de bases de datos se ofreció a [ayudar] con la compleja consulta SQL.",
        "Enviamos a un ingeniero junior para [asistir/ayudar] a los clientes presenciales en la configuración del hardware."
    ],
    "ud2_assurance": [
        "El acuerdo de nivel de servicio (SLA) ofrece la [garantía / seguridad] de un 99,9% de disponibilidad de red.",
        "Los ingenieros de [garantía] de calidad (QA) prueban rigurosamente cada compilación antes del lanzamiento.",
        "El proveedor de la nube ofreció firmes [garantías] sobre la soberanía y el cumplimiento normativo de los datos."
    ],
    "ud2_capabilities": [
        "La nueva unidad de procesamiento gráfico amplía nuestras [capacidades/posibilidades] en aprendizaje automático.",
        "Los navegadores modernos poseen avanzadas [capacidades] de WebAssembly para ejecución a alta velocidad.",
        "Evaluamos las [capacidades / características] de seguridad de varias plataformas cloud de la competencia."
    ],
    "ud2_cloud_service_provider": [
        "AWS, Microsoft Azure y Google Cloud son, cada uno de ellos, un importante [proveedor de servicios en la nube].",
        "Nuestra startup eligió un [proveedor de servicios en la nube] europeo para cumplir con el RGPD.",
        "Migrar las copias de seguridad a un [proveedor en la nube] fiable garantiza una gran resistencia ante desastres."
    ],
    "ud2_confident": [
        "El responsable de calidad está [seguro/convencido] de que el último parche corrige la condición de carrera.",
        "Los desarrolladores ganaron [seguridad/confianza] al desplegar en viernes gracias a los tests automatizados.",
        "Estamos [seguros/convencidos] de que esta arquitectura soportará sin problemas el tráfico del Black Friday."
    ],
    "ud2_delve": [
        "Vamos a [indagar/profundizar] más en los volcados de memoria para identificar la causa raíz de la caída.",
        "Los ingenieros deben [indagar/investigar] en el código heredado para diagnosticar las fugas de memoria.",
        "El equipo de ciberseguridad va a [indagar/analizar a fondo] los sospechosos registros de acceso al servidor."
    ],
    "ud2_dive_in": [
        "Antes de ponernos a escribir código, vamos a [sumergirnos / profundizar] en la especificación técnica de la API.",
        "Se anima a los nuevos miembros del equipo a [adentrarse / sumergirse] e inspeccionar el repositorio en GitHub.",
        "Vamos a [profundizar] en los archivos de configuración de red durante el taller de mañana por la mañana."
    ],
    "ud2_drop_by": [
        "Pásate [a visitar / por] mi mesa con total libertad si necesitas ayuda para resolver conflictos de fusión en Git.",
        "El técnico de sistemas prometió [pasar por aquí / visitar] esta tarde para instalar el nuevo disco SSD.",
        "¿Podrías [pasarte por] la sala de servidores para comprobar que el LED de encendido está en verde?"
    ],
    "ud2_engagement": [
        "Las reuniones diarias participativas aumentan el [compromiso/implicación] del equipo y la claridad del proyecto.",
        "Las métricas de [interacción/participación] de usuarios aumentaron un 40% tras lanzar el nuevo panel móvil.",
        "La consultora firmó un [compromiso/contrato] de seis meses para supervisar la migración a la nube."
    ],
    "ud2_facial_recognition": [
        "El nuevo torno de seguridad de la oficina utiliza [reconocimiento facial] para permitir el acceso al edificio.",
        "La autenticación en teléfonos inteligentes ha popularizado el [reconocimiento facial] como bloqueo biométrico.",
        "Defensores de la privacidad expresaron su preocupación por el uso municipal de [reconocimiento facial] en vías públicas."
    ],
    "ud2_features": [
        "El próximo lanzamiento principal incluye varias interesantes [características/funciones] de accesibilidad.",
        "Los gestores de producto priorizan las [características/funciones] solicitadas por los clientes en el backlog.",
        "Las [funciones] de seguridad, como la autenticación en dos pasos, nunca deben ser opcionales."
    ],
    "ud2_feedback": [
        "Los [comentarios / la retroalimentación] de los usuarios en la fase beta nos ayudaron a rediseñar la barra de navegación.",
        "Los [comentarios constructivos] durante las revisiones de código ayudan a todos los programadores a mejorar.",
        "Enviamos una encuesta de satisfacción para recoger la [opinión/retroalimentación] de los clientes sobre la actualización."
    ],
    "ud2_foundation": [
        "Un dominio sólido de las estructuras de datos es el [fundamento/pilar] de una buena ingeniería de software.",
        "La normalización de bases de datos relacionales sienta la [base/fundamento] para la integridad de los datos.",
        "La seguridad debe construirse en la [base/fundamento] misma de cualquier infraestructura en la nube."
    ],
    "ud2_frustrating": [
        "Tener que lidiar con errores de software intermitentes e imposibles de reproducir es muy [frustrante].",
        "Los procesos de compilación lentos resultan enormemente [frustrantes] para los desarrolladores.",
        "Los mensajes de error confusos de una API son muy [frustrantes] para los desarrolladores externos."
    ],
    "ud2_implications": [
        "Debemos examinar las [implicaciones/consecuencias] legales antes de almacenar datos de usuarios en servidores extranjeros.",
        "Descatalogar este endpoint público de la API conlleva grandes [implicaciones] para las aplicaciones móviles.",
        "¿Cuáles son las [implicaciones] financieras de migrar nuestra base de datos a un nivel empresarial?"
    ],
    "ud2_intrusion_attempts": [
        "El sistema de detección de intrusiones registró más de 500 [intentos de intrusión] procedentes de botnets.",
        "Limitar la frecuencia de peticiones de login ayuda a bloquear [intentos de intrusión] por fuerza bruta.",
        "Los ingenieros de seguridad analizan los repetidos [intentos de intrusión] para proteger el perímetro."
    ],
    "ud2_migrate": [
        "Nuestra empresa decidió [migrar/trasladar] su backend monolítico a funciones serverless en AWS Lambda.",
        "Hicieron falta cuarenta y ocho horas para [migrar/transferir] con seguridad el clúster de base de datos de producción.",
        "Las grandes empresas contratan especialistas en la nube para [migrar] sus aplicaciones heredadas sin cortes."
    ],
    "ud2_on_screen_instructions": [
        "Siga atentamente las [instrucciones en pantalla] para configurar su token de autenticación en dos factores.",
        "El asistente de instalación del sistema operativo proporciona claras [instrucciones en pantalla] paso a paso.",
        "Si la configuración del software falla, lea las [instrucciones en pantalla] para ver sugerencias de resolución."
    ],
    "ud2_oversight": [
        "La arquitectura técnica requiere una cuidadosa [supervisión] de ingeniería para no acumular deuda técnica.",
        "Olvidar cifrar las contraseñas de usuario en la base de datos de pruebas fue un grave [descuido/omisión].",
        "La [supervisión] del cumplimiento normativo garantiza que el software financiero cumpla las leyes de seguridad."
    ],
    "ud2_paraphrasing": [
        "Al confirmar los requisitos del cliente, [parafrasear] sus peticiones garantiza un entendimiento mutuo.",
        "Los buenos comunicadores técnicos recurren al [parafraseo / a parafrasear] para explicar conceptos complejos.",
        "[Parafrasear] durante las reuniones scrum evita malentendidos sobre el alcance de las tareas."
    ],
    "ud2_power_surge": [
        "Una fuerte tormenta provocó una [sobretensión / pico eléctrico] que averió los conmutadores de red.",
        "Conecte siempre el equipamiento crítico a regletas de protección contra [sobretensiones].",
        "Los sistemas de protección saltaron instantáneamente al detectar una repentina [sobretensión]."
    ],
    "ud2_promotes": [
        "El despliegue continuo [promueve/fomenta] una cultura de versiones pequeñas, frecuentes y seguras.",
        "El departamento de ingeniería [promueve/fomenta] activamente la diversidad y la contratación inclusiva.",
        "Escribir código modular [promueve/favorece] la reutilización en múltiples proyectos de clientes."
    ],
    "ud2_recap": [
        "Al final de la demostración del sprint, el responsable de producto ofreció un rápido [resumen/repaso].",
        "Hagamos un breve [resumen/repaso] de los pasos de configuración del cortafuegos antes de aplicarlos.",
        "La documentación técnica comienza con un útil [resumen/recapitulación] de las novedades de la versión."
    ],
    "ud2_rerouting": [
        "El conmutador de red inició un [reenrutamiento] dinámico para evitar la línea de fibra óptica congestionada.",
        "El [reenrutamiento] por DNS redirigió a los usuarios internacionales al centro de datos regional más cercano.",
        "El [reenrutamiento] automatizado evita caídas cuando un proveedor de internet sufre un corte de fibra."
    ],
    "ud2_scheduled_backup": [
        "La base de datos ejecuta una [copia de seguridad programada / respaldo programado] cada noche a las 02:00 UTC.",
        "Nunca desactives la rutina de [copia de seguridad programada], ya que es vital para la recuperación ante desastres.",
        "Nuestro almacenamiento en la nube comprueba automáticamente la integridad de cada [copia programada]."
    ],
    "ud2_security_settings": [
        "Revise la [configuración de seguridad] de su navegador para bloquear cookies de seguimiento de terceros.",
        "El administrador del sistema actualizó la [configuración de seguridad] SSH para impedir el acceso con contraseña a root.",
        "Se aplicó una [configuración de seguridad] más estricta a todos los portátiles tras el intento de phishing."
    ],
    "ud2_solution_oriented": [
        "Los líderes técnicos valoran a los desarrolladores que muestran una actitud [orientada a soluciones] ante los incidentes.",
        "En lugar de buscar culpables, el análisis posterior a la caída del servidor estuvo totalmente [orientado a soluciones].",
        "Un enfoque [orientado a soluciones] es clave al negociar plazos ajustados en proyectos con clientes."
    ],
    "ud2_straightforward": [
        "Desplegar este sitio web estático en Netlify es algo extraordinariamente [sencillo / directo / claro].",
        "La documentación de la API ofrece un tutorial claro y [sencillo / directo] para principiantes.",
        "Ampliar la memoria RAM en este chasis de servidor es un procedimiento rápido y [sencillo / directo]."
    ],
    "ud2_stunning": [
        "Las capacidades de renderizado 4K del nuevo motor gráfico son [impresionantes/asombrosas].",
        "El panel de visualización de datos generó unos gráficos interactivos [impresionantes].",
        "Lograr cero segundos de inactividad durante la migración del centro de datos fue una hazaña [impresionante]."
    ],
    "ud2_sustaining": [
        "[Mantener/sostener] un alto rendimiento bajo mucha carga requiere una eficiente caché de base de datos.",
        "La fundación de código abierto está comprometida con [mantener/sostener] el desarrollo continuo de Linux.",
        "Las buenas prácticas de ingeniería son cruciales para [mantener/sostener] el ritmo del equipo a largo plazo."
    ],
    "ud2_thoroughly": [
        "El equipo de auditoría de seguridad examinó el código fuente [minuciosamente / a fondo] buscando inyecciones.",
        "Pruebe siempre los scripts de migración de base de datos [a fondo / minuciosamente] en pruebas antes de producción.",
        "El equipo de calidad documentó [minuciosamente / al detalle] los pasos para reproducir el fallo."
    ],

    # Unit 3
    "ud3_additional_perks": [
        "El seguro médico gratuito y las suscripciones al gimnasio son [beneficios adicionales / ventajas extra] habituales en startups.",
        "El horario de teletrabajo flexible se considera una de las [ventajas adicionales] más valoradas por los desarrolladores.",
        "Los empleados reciben generosos [beneficios adicionales], incluyendo una asignación anual para equipamiento."
    ],
    "ud3_backup_and_sync": [
        "Configura la herramienta de [copia de seguridad y sincronización] en la nube para proteger tu proyecto.",
        "Google Drive y Dropbox proporcionan funciones automáticas de [copia de seguridad y sincronización].",
        "El software falló, pero gracias a la [copia de seguridad y sincronización], no se perdió ninguna nota de trabajo."
    ],
    "ud3_check_for_updates": [
        "Haz clic en el menú de ayuda y selecciona [buscar actualizaciones] para comprobar si hay una versión nueva.",
        "Los gestores de paquetes de Linux suelen [buscar actualizaciones] antes de instalar las dependencias necesarias.",
        "Nuestra política de seguridad exige que los sistemas operativos [busquen actualizaciones] cada mañana."
    ],
    "ud3_compensation_package": [
        "El puesto de DevOps sénior ofrece un atractivo [paquete de compensación/retribución] que incluye acciones.",
        "Durante las negociaciones de contratación, los desarrolladores evalúan todo el [paquete de compensación], no solo el sueldo.",
        "Nuestra empresa revisó su [paquete de compensación/beneficios] para seguir siendo competitiva atrayendo talento."
    ],
    "ud3_current_software_version": [
        "Puedes consultar tu [versión actual del software] escribiendo el comando 'docker --version' en el terminal.",
        "Asegúrate de que tu [versión actual del software] sea compatible con los nuevos controladores de base de datos.",
        "La vulnerabilidad de seguridad solo afecta a instalaciones anteriores a la [versión actual del software]."
    ],
    "ud3_inferential_comprehension": [
        "Leer entre líneas en informes técnicos avanzados requiere una buena [comprensión inferencial].",
        "Los exámenes de nivel superior evalúan la [comprensión inferencial] en lugar de la simple memorización de datos.",
        "La [comprensión inferencial] ayuda a los programadores a anticipar casos límite al leer los requisitos."
    ],
    "ud3_know_your_worth": [
        "Al negociar tarifas como desarrollador freelance, es crucial [conocer tu valor].",
        "Los programadores experimentados [conocen su valor] en el competitivo mercado tecnológico actual.",
        "Los orientadores profesionales aconsejan a los ingenieros [conocer su valor] antes de acudir a entrevistas de salario."
    ],
    "ud3_multitasking": [
        "Los procesadores multinúcleo modernos destacan en la [multitarea] por hardware sin perder rendimiento.",
        "Aunque a los humanos nos cuesta la [multitarea] cognitiva, los núcleos del sistema operativo están hechos para ella.",
        "La oferta de empleo destaca la capacidad de [multitarea] eficiente y las habilidades de gestión del tiempo."
    ],
    "ud3_outlines": [
        "El ingeniero de software preparó [esquemas/borradores] detallados antes de comenzar con el diseño de la arquitectura.",
        "Revise los [esquemas/resúmenes] del proyecto para comprender el calendario de entregas y las fases del sprint.",
        "Los [esquemas] de las asignaturas ayudan a los estudiantes de informática a planificar su calendario de estudio."
    ],
    "ud3_reports": [
        "La agencia de pruebas de penetración presentó completos [informes] de vulnerabilidades.",
        "Los sistemas de monitorización automatizada generan [informes] semanales de tiempo de actividad y latencia.",
        "Los [informes] de errores enviados en GitHub siempre deben incluir pasos claros para reproducirlos."
    ],
    "ud3_restart": [
        "Tras aplicar los parches del kernel, el administrador de sistemas tuvo que [reiniciar] el nodo.",
        "Si el proceso en segundo plano se queda bloqueado, por favor [reinicie] el servicio con systemctl.",
        "Un rápido [reinicio] del router de red solucionó el problema de pérdida de paquetes."
    ],
    "ud3_retirement_plans": [
        "Muchas empresas tecnológicas ofrecen aportaciones complementarias a los [planes de jubilación/pensiones] de sus empleados.",
        "Recursos Humanos explicó el sistema de pensiones y los [planes de jubilación] voluntarios durante la acogida.",
        "Invertir pronto en [planes de jubilación] patrocinados por la empresa aporta seguridad financiera a largo plazo."
    ],
    "ud3_safety_standards": [
        "Los técnicos del centro de datos deben cumplir rigurosamente las [normas de seguridad] eléctricas y físicas.",
        "El cumplimiento de la norma ISO 27001 certifica que la organización respeta estrictas [normas de seguridad].",
        "No respetar las [normas de seguridad] laboral puede acarrear graves sanciones legales y riesgos personales."
    ],
    "ud3_summary": [
        "El arquitecto principal abrió la presentación con un [resumen] ejecutivo de la remodelación técnica.",
        "En [resumen], adoptar pruebas unitarias automatizadas redujo a la mitad los errores en producción.",
        "Cada capítulo del manual técnico concluye con un práctico [resumen] del vocabulario aprendido."
    ],
    "ud3_troubleshooting": [
        "Los ingenieros de redes pasaron la tarde dedicados a la [resolución de problemas / diagnóstico] de la latencia en la VPN.",
        "La documentación oficial contiene una valiosa sección de preguntas frecuentes y guía de [resolución de problemas].",
        "El [diagnóstico y resolución metódica de problemas] es una de las habilidades más valoradas en un administrador."
    ],
    "ud3_work_schedule": [
        "Nuestra empresa admite un [horario de trabajo] flexible, permitiendo rendir en los momentos de mayor productividad.",
        "El [horario de trabajo] de guardia 24/7 rota semanalmente entre todos los ingenieros de fiabilidad.",
        "Consulta el calendario de equipo para ver tu [horario de trabajo] asignado durante la ventana de mantenimiento."
    ],

    # Unit 4
    "ud4_abbreviations": [
        "El lenguaje técnico está lleno de confusas [abreviaturas/siglas] de tres letras como DNS, CDN y API.",
        "La guía de estilo aconseja a los autores definir las [abreviaturas] en su primera aparición en el texto.",
        "Los programadores junior deben familiarizarse con las [abreviaturas] habituales en redes de ordenadores."
    ],
    "ud4_align": [
        "Las hojas de ruta del producto deben [alinearse/coordinarse] estrechamente con los objetivos del negocio.",
        "Las reuniones diarias ayudan a los miembros del equipo a [alinear/coordinar] sus esfuerzos para el sprint.",
        "Asegúrate de que los estilos del frontend se [alineen] con el sistema de diseño compartido de la empresa."
    ],
    "ud4_campaign_management": [
        "El departamento de marketing utiliza herramientas de software para la [gestión de campañas] digitales.",
        "Los paneles de analítica hacen que la [gestión de campañas] de correo electrónico se base mucho más en datos.",
        "Una eficaz [gestión de campañas] requiere supervisar las tasas de apertura, clics y retención de usuarios."
    ],
    "ud4_colleague": [
        "Le pedí a mi [colega/compañero de trabajo] sénior que revisara mi pull request antes de fusionar a la rama principal.",
        "Ella colaboró con un [colega/compañero] extranjero en la publicación sobre inteligencia artificial.",
        "Tratar a cada [colega/compañero de trabajo] con respeto genera una cultura de ingeniería saludable."
    ],
    "ud4_concise": [
        "Escriba mensajes de commit claros y [concisos/breves] que expliquen el motivo del cambio en el código.",
        "La documentación técnica debe ser [concisa/precisa] y evitar palabrería innecesaria.",
        "Su presentación fue [concisa/breve], empleando solo diez minutos en explicar la compleja solución."
    ],
    "ud4_correspondence": [
        "Mantenga siempre un tono educado y profesional en la [correspondencia/comunicación escrita] oficial con clientes.",
        "La empresa archiva toda la [correspondencia] técnica por motivos legales y de cumplimiento normativo.",
        "Las políticas de seguridad prohíben enviar contraseñas en texto claro a través de la [correspondencia] por email."
    ],
    "ud4_emphasizing": [
        "El ponente comenzó [haciendo hincapié en / destacando] la importancia crítica del cifrado de extremo a extremo.",
        "Nuestro director técnico está constantemente [haciendo hincapié en / destacando] la calidad del código sobre la prisa.",
        "[Haciendo hincapié en] el aprendizaje continuo, la empresa tecnológica retiene a sus mejores programadores."
    ],
    "ud4_enthusiasm": [
        "El desarrollador junior abordó la difícil tarea de depuración con enorme [entusiasmo/ganas].",
        "Su [entusiasmo] por colaborar en proyectos de código abierto motivó a todo el equipo de ingenieros.",
        "Los clientes agradecieron el visible [entusiasmo] del equipo durante la demostración de la aplicación."
    ],
    "ud4_execute": [
        "Ejecute este script bash en el terminal como administrador para [ejecutar/lanzar] la copia de seguridad.",
        "El planificador del sistema operativo se encargará de [ejecutar] primero los hilos de mayor prioridad.",
        "Nuestro equipo de DevOps logró [ejecutar/llevar a cabo] la conmutación por error de la base de datos sin fallos."
    ],
    "ud4_expression_of_interest": [
        "Nuestra agencia tecnológica presentó una [expresión de interés / manifestación de interés] formal para el concurso público.",
        "Los candidatos deben enviar su currículum y una [carta de motivación / expresión de interés] al responsable de contratación.",
        "La plataforma de compras recibió decenas de [expresiones de interés] de empresas de servicios informáticos."
    ],
    "ud4_follow_up": [
        "Enviaré un correo electrónico mañana para [hacer un seguimiento / dar seguimiento] al ticket de soporte abierto.",
        "Asegúrate de [hacer un seguimiento / contactar de nuevo] con el cliente tras desplegar el parche de software.",
        "Un proceso organizado de [seguimiento] evita que los fallos informados queden olvidados."
    ],
    "ud4_proposal": [
        "El arquitecto de sistemas presentó una detallada [propuesta] para el rediseño mediante microservicios.",
        "Los accionistas aceptaron por unanimidad la [propuesta] presupuestaria para renovar los servidores de almacenamiento.",
        "Cada empresa proveedora debe entregar su [propuesta] de consultoría de software antes de la fecha límite."
    ],
    "ud4_requirements": [
        "Recopile con atención los [requisitos] del usuario antes de escribir una sola línea de código en el backend.",
        "Este servidor corporativo cumple todos los [requisitos] mínimos de hardware para virtualización.",
        "Cambiar los [requisitos] a mitad de un sprint puede descuadrar los plazos de entrega del equipo."
    ],
    "ud4_retention": [
        "Ofrecer salarios competitivos mejoró notablemente la [retención] de ingenieros y talento tecnológico.",
        "Las normativas de privacidad fijan el plazo máximo de [retención / conservación] de los registros de usuarios.",
        "La [retención] de usuarios aumentó significativamente tras solucionar la lentitud de carga de la web."
    ],
    "ud4_strategic_planning": [
        "Una [planificación estratégica] a largo plazo es indispensable para modernizar infraestructuras de TI heredadas.",
        "La junta directiva se reunió durante dos días para llevar a cabo la [planificación estratégica] de inversiones en nube.",
        "Una buena [planificación estratégica] evita acumular deuda técnica mientras se alcanzan los objetivos del mercado."
    ],
    "ud4_tailor": [
        "Podemos [adaptar/personalizar] nuestra plataforma de software para ajustarla a los flujos de trabajo de su empresa.",
        "[Adapte/personalice] siempre su currículum y carta de presentación a los requisitos concretos de la vacante.",
        "Los temas personalizados de CSS permiten a los clientes [adaptar/ajustar] el portal web a su imagen corporativa."
    ],
    "ud4_track_record": [
        "Nuestro arquitecto principal cuenta con un impresionante [historial/trayectoria] de migraciones con cero inactividad.",
        "Los clientes confían en nuestra consultora de software gracias a nuestro demostrado [historial] de fiabilidad.",
        "Una [trayectoria / un historial] demostrable en proyectos de código abierto ayuda a destacar en las entrevistas."
    ]
}

def generate_sentence_hint(word: str, trans: str, def_en: str) -> str:
    """Genera una pista en español que explica qué busca la frase sin revelar la palabra en inglés."""
    return f"Busca el término técnico correspondiente a '{trans}'. En inglés significa: {def_en}"

def main():
    glossary_path = Path("glossary_data.json")
    if not glossary_path.exists():
        print("glossary_data.json no encontrado.")
        return

    data = json.load(open(glossary_path, encoding="utf-8"))
    enriched_count = 0

    for item in data:
        item_id = item.get("id", "")
        word = item.get("word", "")
        trans = item.get("translation_es", "")
        def_en = item.get("definition_en", "")

        # 1. Asignar traducciones pedagógicas si están en el mapa
        if item_id in TRANSLATIONS_MAP:
            item["examples_es"] = TRANSLATIONS_MAP[item_id]
            enriched_count += 1
        else:
            # Fallback inteligente: generar traducción con el término en español entre corchetes
            ex_es = []
            for ex in item.get("examples", []):
                # Sustituir [BLANK] por [traducción al español]
                translated_sample = ex.replace("[BLANK]", f"[{trans}]")
                ex_es.append(f"Contexto: {translated_sample}")
            item["examples_es"] = ex_es

        # 2. Generar pista en español para guiar la deducción
        item["hint_context_es"] = generate_sentence_hint(word, trans, def_en)

    with open(glossary_path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print(f"Glossary enriquecido con éxito. {enriched_count} términos con traducciones contextuales completas.")

if __name__ == "__main__":
    main()

