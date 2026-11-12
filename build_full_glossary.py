#!/usr/bin/env python3
"""
build_full_glossary.py - Construye el dataset completo con todas las palabras de los 4 PDFs
de Inglés Técnico para Grado Superior y valida el esquema con Pydantic.
"""

import json
from pathlib import Path
from pydantic import BaseModel, Field, field_validator

class GlossaryItem(BaseModel):
    id: str
    lesson: str
    word: str
    definition_en: str
    translation_es: str
    examples: list[str]

    @field_validator("examples")
    @classmethod
    def validate_examples(cls, v):
        if len(v) != 3:
            raise ValueError("Debe tener exactamente 3 ejemplos")
        for ex in v:
            if "[BLANK]" not in ex:
                raise ValueError(f"Falta token [BLANK] en ejemplo: {ex}")
        return v

DATA_BY_UNIT = {
    "Unit 1 - Comprensión oral precisa": [
        ("Acknowledgment", "reconocimiento", "Recognition or confirmation that a message, request, or service has been received.", [
            "Please send an official [BLANK] as soon as the pull request is merged.",
            "The client gave a special [BLANK] to our IT support team.",
            "We received no [BLANK] from the remote server after submitting the request."
        ]),
        ("Automated testing", "prueba automatizada", "The execution of test scripts automatically to verify software quality without manual intervention.", [
            "Implementing [BLANK] helped us catch bugs before deploying to production.",
            "Our CI/CD pipeline triggers [BLANK] on every single git commit.",
            "Developers spend less time debugging thanks to robust [BLANK]."
        ]),
        ("Backup generators", "generadores de reserva", "Auxiliary power systems that provide emergency electricity when the main power grid fails.", [
            "When the city power grid collapsed, the data center [BLANK] started immediately.",
            "Routine maintenance ensures the [BLANK] are ready for sudden outages.",
            "The hospital server room relies on diesel [BLANK] for continuous uptime."
        ]),
        ("Belief", "creencia; opinión", "An acceptance that something exists or is true, or a firmly held opinion.", [
            "It is our team [BLANK] that continuous delivery improves code stability.",
            "Customer satisfaction reinforced our [BLANK] in agile methodology.",
            "His strong [BLANK] in open-source software inspired the entire department."
        ]),
        ("Challenging", "complejo; desafiante", "Demanding great effort, skill, and analytical thinking.", [
            "Refactoring this legacy monolithic codebase was an extremely [BLANK] task.",
            "Migrating millions of active database records proved to be [BLANK].",
            "Solving distributed concurrency bugs is always [BLANK] for junior developers."
        ]),
        ("Code freeze", "congelación de código", "A period prior to a software release when no new code or features may be added.", [
            "The lead architect declared a strict [BLANK] one week before launch.",
            "During the [BLANK], engineers only fix critical production blockers.",
            "Please commit all feature branches before midnight, when the [BLANK] begins."
        ]),
        ("Coding phase", "fase de codificación", "The stage in the software development lifecycle where programmers write source code.", [
            "After requirements are approved, our sprint moves into the [BLANK].",
            "The [BLANK] took three weeks of intensive development.",
            "Code reviews must be conducted continuously throughout the [BLANK]."
        ]),
        ("Conventions", "convención; congreso", "Agreed standards or guidelines for code syntax, architecture, or industry meetings.", [
            "Our engineering team follows strict PEP 8 naming [BLANK].",
            "Following clean coding [BLANK] makes team collaboration much easier.",
            "She presented a paper on cybersecurity at international developer [BLANK]."
        ]),
        ("Core functionalities", "funciones principales", "The essential features and primary operations that a system or application must perform.", [
            "Before launching additional features, we must test all [BLANK].",
            "Authentication and data encryption represent [BLANK] of our cloud app.",
            "Any regression in [BLANK] will prevent the release from going live."
        ]),
        ("Cost-effective", "buena relación coste-eficacia; rentable", "Producing high return and solid results without unnecessary expenditure.", [
            "Switching to cloud serverless infrastructure proved to be very [BLANK].",
            "Automating repetitive IT tasks is a [BLANK] strategy for modern enterprises.",
            "Open-source software offers a highly [BLANK] alternative to expensive proprietary tools."
        ]),
        ("Cutting-edge", "innovador/a; de vanguardia", "Highly advanced, pioneering, and utilizing the latest technological developments.", [
            "Our tech company develops [BLANK] machine learning algorithms.",
            "The server farm utilizes [BLANK] liquid immersion cooling hardware.",
            "Engineers are trained in [BLANK] DevOps methodologies to increase velocity."
        ]),
        ("Delight", "placer; deleite", "Great pleasure, high satisfaction, or a feature that pleases users.", [
            "Providing an intuitive user interface will [BLANK] our enterprise customers.",
            "The fast response time of the new microservice was a pure [BLANK] to see.",
            "It was a [BLANK] to collaborate with such skilled systems engineers."
        ]),
        ("Embracing change", "aceptar el cambio", "Actively welcoming and adapting to new technology, methods, or conditions.", [
            "[BLANK] is essential when transitioning from legacy on-premise systems to cloud.",
            "Modern agile teams succeed by [BLANK] instead of resisting it.",
            "Successful IT leaders guide their organizations in [BLANK] with confidence."
        ]),
        ("Enhance", "mejorar; aumentar", "To improve the quality, efficiency, performance, or value of a system.", [
            "We added caching layers to [BLANK] overall web application performance.",
            "Multi-factor authentication helps [BLANK] customer account security.",
            "The latest firmware update will [BLANK] network router stability."
        ]),
        ("Evidence", "evidencia; prueba", "Factual data, logs, or metrics proving a condition or root cause.", [
            "The network audit logs provided clear [BLANK] of an unauthorized port scan.",
            "There is no empirical [BLANK] that this query optimization caused the slowdown.",
            "The systems administrator collected forensic [BLANK] after the incident."
        ]),
        ("Firewall", "cortafuegos", "A security system that monitors and filters incoming and outgoing network traffic.", [
            "The corporate [BLANK] blocked multiple suspicious connection attempts.",
            "Ensure port 8080 is opened in the internal [BLANK] configuration.",
            "A next-generation [BLANK] inspects packet payloads at the application layer."
        ]),
        ("Formality", "formalidad; procedimiento", "Rigorous adherence to professional rules, etiquette, or technical protocols.", [
            "Email communication with enterprise clients requires a high level of [BLANK].",
            "Signing the non-disclosure agreement is not just a [BLANK]; it is legally binding.",
            "While our daily standup is casual, stakeholder demos maintain strict [BLANK]."
        ]),
        ("Foster", "fomentar; promover", "To encourage, facilitate, and nurture the development of skills or culture.", [
            "Pair programming helps [BLANK] knowledge sharing across engineering teams.",
            "Hackathons are designed to [BLANK] innovation and creative problem solving.",
            "Good technical documentation helps [BLANK] independence among junior developers."
        ]),
        ("Inquire", "preguntar; indagar", "To ask for information, details, or clarification about a process.", [
            "I will contact the database administrator to [BLANK] about backup policies.",
            "Clients frequently [BLANK] about data privacy compliance before purchasing.",
            "You should [BLANK] whether the API supports asynchronous webhooks."
        ]),
        ("Insights", "conocimiento; perspectivas", "Deep understanding and actionable intelligence gained through analysis.", [
            "Application monitoring dashboards provide valuable [BLANK] into user traffic.",
            "Data analytics offer actionable [BLANK] to optimize cloud spending.",
            "The senior architect shared insightful [BLANK] on microservice decoupling."
        ]),
        ("Judgment", "opinión; criterio", "The ability to make well-considered technical decisions and assessments.", [
            "Senior engineers rely on technical [BLANK] when choosing architectural patterns.",
            "In my professional [BLANK], migrating immediately to GraphQL carries excessive risk.",
            "Critical production decisions require calm and balanced engineering [BLANK]."
        ]),
        ("Key milestones", "objetivos clave; hitos", "Significant points or stages marking progress in a project plan.", [
            "Releasing the beta version by June is one of our [BLANK].",
            "The project manager tracked all [BLANK] on the Jira dashboard.",
            "Celebrating achieved [BLANK] keeps the development squad motivated."
        ]),
        ("Kicked in", "empezar a hacer efecto", "Began to operate, take effect, or function as intended.", [
            "When the main server crashed, the failover mechanism immediately [BLANK].",
            "The automatic rate limiting [BLANK] once the API received 10,000 requests per second.",
            "As soon as temperatures rose, the auxiliary data center cooling [BLANK]."
        ]),
        ("Misunderstanding", "malentendido", "A failure to understand correctly, often causing communication errors.", [
            "Clear API documentation prevents any [BLANK] between frontend and backend devs.",
            "A brief [BLANK] regarding the sprint goal delayed the release by one day.",
            "Documenting user stories thoroughly helps avoid [BLANK] with business analysts."
        ]),
        ("Monitoring", "supervisión; control", "The continuous observation and measurement of system health and metrics.", [
            "Real-time [BLANK] of CPU and RAM usage alerts us before memory leaks crash servers.",
            "Prometheus and Grafana are popular tools for infrastructure [BLANK].",
            "Continuous log [BLANK] is required to detect security intrusions quickly."
        ]),
        ("Network", "red", "A group of interconnected computer systems and devices that communicate.", [
            "The office [BLANK] was upgraded to support 10 Gigabit fiber connections.",
            "A distributed Denial of Service attack saturated the corporate [BLANK].",
            "Virtual Private [BLANK] tunnels enable secure remote access for staff."
        ]),
        ("Onward and upward", "adelante y hacia arriba", "Continuing to move forward toward greater success and advancement.", [
            "After overcoming the deployment crisis, the startup went [BLANK].",
            "With the new funding round secured, it is [BLANK] for our software team.",
            "We completed the refactoring milestone and are moving [BLANK]."
        ]),
        ("Open-minded", "de mente abierta", "Willing to consider new ideas, technical paradigms, or opinions.", [
            "A good software architect remains [BLANK] to alternative tech stacks.",
            "Being [BLANK] during code reviews fosters healthy constructive debate.",
            "We need an [BLANK] approach when re-evaluating our legacy systems."
        ]),
        ("Outage", "corte de servicio; apagón", "A period when a service, power supply, or IT system is unavailable.", [
            "The unexpected DNS [BLANK] prevented users from reaching our website for an hour.",
            "Post-mortem investigations revealed that human error triggered the cloud [BLANK].",
            "We configured redundant load balancers to minimize the impact of any [BLANK]."
        ]),
        ("Overall strategy", "estrategia general", "The comprehensive, long-term plan designed to achieve primary goals.", [
            "Migrating to containerized microservices is part of our [BLANK].",
            "The CTO presented the five-year [BLANK] to the board of directors.",
            "Our [BLANK] focuses on automation, security, and developer ergonomics."
        ]),
        ("Phased implementation", "implementación por fases", "A gradual rollout of a system or product in distinct successive stages.", [
            "We adopted a [BLANK] strategy to reduce the operational risk of the migration.",
            "The ERP upgrade was executed through a three-month [BLANK].",
            "During a [BLANK], only 10% of users receive the new feature initially."
        ]),
        ("Power fluctuations", "variaciones de potencia", "Irregular rises and falls in electrical current that can damage hardware.", [
            "Sensitive server hardware must be shielded against unexpected [BLANK].",
            "The UPS filters out minor [BLANK] before electricity reaches the rack.",
            "Sudden [BLANK] during the storm caused several workstations to reboot."
        ]),
        ("Power surge", "pico de tensión; sobretensión", "A sudden, sharp increase in electrical voltage that can harm equipment.", [
            "A lightning strike caused a severe [BLANK] that damaged the switch ports.",
            "Always plug valuable server equipment into certified [BLANK] protectors.",
            "The datacenter circuit breakers tripped immediately when the [BLANK] occurred."
        ]),
        ("Practical tips", "consejos prácticos", "Actionable, hands-on advice for solving real problems efficiently.", [
            "The senior engineer shared several [BLANK] for debugging async JavaScript.",
            "This security handbook provides [BLANK] for configuring SSH keys.",
            "Here are five [BLANK] to optimize PostgreSQL database indexing."
        ]),
        ("Rationale", "lógica; justificación", "The underlying reasons or logical basis for a particular decision or design.", [
            "What is the architectural [BLANK] behind splitting this database into shards?",
            "The lead developer explained the [BLANK] for deprecating the older REST endpoints.",
            "Documenting the technical [BLANK] helps future developers understand legacy code."
        ]),
        ("Recurring issue", "asunto recurrente; problema repetitivo", "A defect or difficulty that happens repeatedly over time.", [
            "Memory exhaustion on the Redis cluster has become a [BLANK].",
            "Automated retry logic helped mitigate this [BLANK] in our background workers.",
            "We need a permanent architectural fix rather than patching this [BLANK] every week."
        ]),
        ("Relief", "alivio", "A feeling of reassurance and relaxation following release from anxiety or difficulty.", [
            "It was a huge [BLANK] when all automated end-to-end tests passed cleanly.",
            "Knowing that offsite backups exist gives the operations team immense [BLANK].",
            "Resolving the critical zero-day exploit brought great [BLANK] to security staff."
        ]),
        ("Rerouting power", "redirigir la energía", "Diverting electrical current through alternative circuits to maintain uptime.", [
            "The smart power distribution unit succeeded in [BLANK] around the faulty line.",
            "[BLANK] during scheduled maintenance prevented any server downtime.",
            "Automated switches handle [BLANK] whenever a circuit breaker trips."
        ]),
        ("Scalability", "escalabilidad; adaptabilidad", "The capability of a system to handle increased load by adding resources.", [
            "Kubernetes pod auto-scaling provides excellent horizontal [BLANK].",
            "The database was redesigned to guarantee high [BLANK] for Black Friday sales.",
            "Microservice architectures are favored by enterprises due to their [BLANK]."
        ]),
        ("Scalable", "expansible; escalable", "Able to be easily expanded, upgraded, or adjusted to accommodate growth.", [
            "We need a highly [BLANK] storage solution to hold petabytes of log archives.",
            "Cloud architectures are designed to be naturally [BLANK] on demand.",
            "Writing stateless backend services makes your web application effortlessly [BLANK]."
        ]),
        ("Server room", "cuarto de servidores", "A dedicated, climate-controlled facility housing computer servers and networking gear.", [
            "Only authorized sysadmins with biometric badges may enter the main [BLANK].",
            "The temperature inside the [BLANK] must remain strictly between 18 and 22 degrees.",
            "Fire suppression gas systems are installed throughout the company [BLANK]."
        ]),
        ("Settings", "ajustes; configuración", "User or system options that control the behavior of an application.", [
            "Open the administrative console to review the default network [BLANK].",
            "You can toggle dark mode on or off in user profile [BLANK].",
            "The developer modified environment [BLANK] before deploying to staging."
        ]),
        ("Streamlining", "optimización; simplificación", "Improving an organization or process by eliminating unnecessary steps.", [
            "Adopting continuous integration resulted in [BLANK] our entire release cycle.",
            "[BLANK] onboarding procedures helps new programmers commit code on their first day.",
            "Our sprint retrospective focused on [BLANK] bug reporting workflows."
        ]),
        ("Supporting", "de apoyo; apoyar", "Providing assistance, maintenance, backing, or technical reinforcement.", [
            "The senior architect is dedicated to [BLANK] junior developers during the sprint.",
            "We maintain several [BLANK] libraries alongside our core web application.",
            "IT helpdesk staff do an outstanding job [BLANK] remote employees."
        ]),
        ("Thrilled", "entusiasmado/a", "Extremely excited, delighted, and passionate about an achievement.", [
            "The team was [BLANK] when the client approved the final production build.",
            "She was [BLANK] to be promoted to Senior Infrastructure Engineer.",
            "We were [BLANK] by the positive performance metrics from our load tests."
        ]),
        ("Updating", "actualización; actualizar", "Modifying or upgrading software, firmware, or data to the latest version.", [
            "Regularly [BLANK] dependencies is critical to patching security vulnerabilities.",
            "The database schema was locked while [BLANK] customer records.",
            "Make sure you restart the server process after [BLANK] configuration files."
        ]),
        ("User acceptance testing", "pruebas de aceptación del usuario (UAT)", "The final testing phase where actual end-users verify that the software meets needs.", [
            "The web application passed internal QA and is now undergoing [BLANK].",
            "Business stakeholders discovered two workflow discrepancies during [BLANK].",
            "Signed approval on [BLANK] is legally required before public deployment."
        ]),
        ("Versatile", "versátil", "Able to adapt or be adapted to many different functions or activities.", [
            "Python is an exceptionally [BLANK] language used in web dev, data science, and DevOps.",
            "Docker containers offer a [BLANK] environment for deploying heterogeneous apps.",
            "A [BLANK] systems engineer can handle both cloud networks and backend databases."
        ]),
        ("Viewpoint", "punto de vista", "A particular perspective or attitude from which something is considered.", [
            "From a security [BLANK], storing raw API keys in GitHub repositories is catastrophic.",
            "The frontend designer approached the issue from a user-experience [BLANK].",
            "During architectural review, every developer is encouraged to express their [BLANK]."
        ]),
        ("Well-being", "bienestar", "The state of being comfortable, healthy, productive, and satisfied at work.", [
            "Preventing developer burnout is essential for the long-term [BLANK] of our tech team.",
            "Flexible remote working policies significantly improved employee [BLANK].",
            "Ergonomic office equipment supports the physical [BLANK] of programmers."
        ]),
        ("Workflow", "flujo de trabajo", "The sequence of industrial, administrative, or computational processes.", [
            "Git branch protection rules enforce a consistent code review [BLANK].",
            "Automating ticket creation streamlined our IT customer support [BLANK].",
            "GitHub Actions allows developers to define automated CI/CD [BLANK] in YAML files."
        ])
    ],

    "Unit 2 - Comprensión oral global": [
        ("Acknowledging", "reconociendo; confirmando", "Accepting, admitting, or confirming the receipt or validity of information.", [
            "By [BLANK] user feedback early, we improved our app satisfaction score.",
            "The support engineer started the call by [BLANK] the customer's frustration.",
            "The server responded by [BLANK] the receipt of the telemetry data packets."
        ]),
        ("Assist", "ayudar; asistir", "To help or provide technical support to someone in completing a task.", [
            "Our automated chatbot can [BLANK] users with password reset inquiries.",
            "The senior database administrator offered to [BLANK] with the complex SQL query.",
            "We deployed a junior engineer to [BLANK] on-site clients with hardware setup."
        ]),
        ("Assurance", "garantía; seguridad", "A positive declaration intended to give confidence and certainty.", [
            "The service level agreement provides [BLANK] of 99.9% network availability.",
            "Quality [BLANK] engineers rigorously test every build before release.",
            "The cloud provider offered strong [BLANK] regarding data sovereignty and compliance."
        ]),
        ("Capabilities", "capacidades; funcionalidades", "The power or abilities that a computer system, application, or tool possesses.", [
            "The new graphic processing unit expands our machine learning [BLANK].",
            "Modern browsers possess advanced WebAssembly [BLANK] for high-speed execution.",
            "We evaluated the security [BLANK] of several competing cloud platforms."
        ]),
        ("Cloud service provider", "proveedor de servicios en la nube", "A third-party company offering cloud computing components and infrastructure.", [
            "AWS, Microsoft Azure, and Google Cloud are each a major [BLANK].",
            "Our startup selected a European [BLANK] to comply with GDPR privacy laws.",
            "Migrating database backups to a reliable [BLANK] ensures high disaster resilience."
        ]),
        ("Confident", "seguro; convencido", "Feeling or showing certainty and trust in a system or outcome.", [
            "The QA lead feels [BLANK] that the latest patch fixes the critical race condition.",
            "Developers became more [BLANK] deploying on Fridays thanks to automated testing.",
            "We are [BLANK] that this architecture will easily handle Black Friday traffic."
        ]),
        ("Delve", "indagar; investigar a fondo", "To investigate or research deeply into technical data or problem roots.", [
            "Let us [BLANK] deeper into the application crash dumps to identify the core cause.",
            "Engineers must [BLANK] into the legacy assembly code to diagnose memory leaks.",
            "The cybersecurity team will [BLANK] into the suspicious server access logs."
        ]),
        ("Dive in", "profundizar; sumergirse", "To start doing something enthusiastically or explore a topic thoroughly.", [
            "Before we write code, let us [BLANK] to the API technical specification.",
            "New team members are encouraged to [BLANK] and inspect the GitHub repository.",
            "We will [BLANK] to the network configuration files during tomorrow morning's workshop."
        ]),
        ("Drop by", "pasar por; visitar", "To make a brief, informal visit to someone's office or workstation.", [
            "Feel free to [BLANK] my desk if you need help resolving merge conflicts.",
            "The IT systems technician promised to [BLANK] this afternoon to install the new SSD.",
            "Could you [BLANK] the server room to verify that the power LED is green?"
        ]),
        ("Engagement", "compromiso; participación", "Active involvement, dedication, or contract commitment.", [
            "Interactive daily standups boost team [BLANK] and project clarity.",
            "User [BLANK] metrics jumped by 40% after releasing the new mobile dashboard.",
            "The consultancy signed a six-month [BLANK] to oversee the cloud migration."
        ]),
        ("Facial recognition", "reconocimiento facial", "Biometric technology that identifies or verifies a person using their face.", [
            "The new office security turnstile uses [BLANK] to grant building access.",
            "Smartphone authentication has popularized [BLANK] as a convenient biometric lock.",
            "Privacy advocates raised concerns over municipal use of [BLANK] in public areas."
        ]),
        ("Features", "características; funcionalidades", "Distinctive attributes, capabilities, or aspects of a software product.", [
            "The next major release includes several exciting accessibility [BLANK].",
            "Product managers prioritize customer-requested [BLANK] in the sprint backlog.",
            "Security [BLANK] such as two-factor authentication must never be optional."
        ]),
        ("Feedback", "retroalimentación; comentarios", "Information about reactions to a product or a person's performance.", [
            "User [BLANK] collected during beta testing helped us redesign the navigation bar.",
            "Constructive [BLANK] during code reviews makes all engineers write better code.",
            "We sent a satisfaction survey to collect customer [BLANK] on the recent upgrade."
        ]),
        ("Foundation", "fundamento; base", "The underlying basis, framework, or principle on which an idea or system rests.", [
            "A solid grasp of data structures is the [BLANK] of proficient software engineering.",
            "Relational database normalization lays the [BLANK] for data integrity.",
            "Security must be built into the core [BLANK] of any cloud infrastructure."
        ]),
        ("Frustrating", "frustrante", "Causing annoyance, discouragement, or disappointment.", [
            "Dealing with intermittent, non-reproducible software bugs is deeply [BLANK].",
            "Slow build pipelines are extremely [BLANK] for developers waiting for CI feedback.",
            "Unclear API error messages are [BLANK] for third-party integration partners."
        ]),
        ("Implications", "implicaciones; consecuencias", "The likely consequences, effects, or results of an action or design choice.", [
            "We must examine the legal [BLANK] before storing user data on overseas servers.",
            "Deprecating this public API endpoint carries major [BLANK] for mobile clients.",
            "What are the financial [BLANK] of migrating our database to an enterprise tier?"
        ]),
        ("Intrusion attempts", "intentos de intrusión", "Unauthorized efforts to gain illegal access to a network, server, or system.", [
            "The intrusion detection system logged over 500 [BLANK] from botnet IP addresses.",
            "Rate limiting authentication requests helps block brute-force [BLANK].",
            "Security engineers analyze repeated [BLANK] to patch perimeter vulnerabilities."
        ]),
        ("Migrate", "migrar; transferir", "To move data, software, or workloads from one operating environment to another.", [
            "Our company decided to [BLANK] its monolithic backend to AWS Lambda serverless.",
            "It took forty-eight hours to safely [BLANK] the production database cluster.",
            "Enterprises often hire cloud specialists to [BLANK] legacy applications seamlessly."
        ]),
        ("On-screen instructions", "instrucciones en pantalla", "Written guidance displayed directly on a user interface to direct actions.", [
            "Follow the [BLANK] carefully to configure your two-factor authentication token.",
            "The operating system installation wizard provides clear, step-by-step [BLANK].",
            "If the software setup fails, read the [BLANK] for troubleshooting suggestions."
        ]),
        ("Oversight", "supervisión; descuido", "Management supervision, or alternatively an unintentional mistake.", [
            "Technical architecture requires careful engineering [BLANK] to avoid tech debt.",
            "Failing to encrypt user passwords in the staging database was a grave [BLANK].",
            "Regulatory compliance [BLANK] ensures financial software satisfies data security laws."
        ]),
        ("Paraphrasing", "parafrasear; reformulación", "Expressing the meaning of written or spoken words using different terms.", [
            "When confirming customer requirements, [BLANK] their requests ensures mutual understanding.",
            "Effective technical communicators use [BLANK] to simplify complex concepts.",
            "[BLANK] during scrum meetings prevents misunderstandings about task scope."
        ]),
        ("Promotes", "promover; fomentar", "Supports, furthers the progress of, or raises to a higher position.", [
            "Continuous deployment [BLANK] a culture of small, frequent, and safe releases.",
            "The engineering department actively [BLANK] diversity and inclusive hiring.",
            "Writing modular code [BLANK] reusability across multiple client projects."
        ]),
        ("Recap", "resumen; resumir", "A brief summary or review of the main points discussed.", [
            "At the end of the sprint demo, the product owner provided a quick [BLANK].",
            "Let us do a short [BLANK] of the firewall configuration steps before applying them.",
            "The technical documentation opens with a helpful [BLANK] of release highlights."
        ]),
        ("Rerouting", "reenrutamiento", "Sending traffic, packets, or signals along a different route.", [
            "The network switch began dynamic [BLANK] to avoid the congested fiber optic trunk.",
            "DNS [BLANK] redirected international users to the nearest regional data center.",
            "Automated [BLANK] prevents downtime when an internet service provider experiences a blackout."
        ]),
        ("Scheduled backup", "respaldo programado", "An automated process that copies and archives system data at set intervals.", [
            "The database runs a daily [BLANK] every night at 02:00 AM UTC.",
            "Never disable the [BLANK] routine, as it is critical for disaster recovery.",
            "Our cloud storage bucket automatically verifies the checksum of each [BLANK]."
        ]),
        ("Security settings", "configuraciones de seguridad", "Parameters that define the protective posture and access controls of a system.", [
            "Review your browser [BLANK] to block third-party tracking cookies.",
            "The system administrator updated the SSH [BLANK] to disallow root password login.",
            "Stricter [BLANK] were applied to all employee laptops after the phishing incident."
        ]),
        ("Solution-Oriented", "orientado a soluciones", "Focusing actively on finding answers and constructive fixes to problems.", [
            "Senior tech leads appreciate developers who bring a [BLANK] mindset to incidents.",
            "Rather than arguing over blame, the outage post-mortem was entirely [BLANK].",
            "A [BLANK] approach is critical when negotiating tight customer project deadlines."
        ]),
        ("Straightforward", "directo; claro", "Uncomplicated, simple to understand, and easy to execute.", [
            "Deploying this static website to Netlify is remarkably [BLANK].",
            "The API documentation provides a clear, [BLANK] tutorial for beginners.",
            "Upgrading the RAM in this server chassis is a quick and [BLANK] procedure."
        ]),
        ("Stunning", "impresionante", "Extremely impressive, remarkable, or visually attractive.", [
            "The high-resolution 4K rendering capabilities of the new engine are [BLANK].",
            "The data visualization dashboard generated [BLANK] interactive graphics.",
            "Achieving zero downtime during a full datacenter migration was a [BLANK] feat."
        ]),
        ("Sustaining", "mantener; sostener", "Continuing, supporting, or maintaining something over a period of time.", [
            "[BLANK] high system performance under heavy load requires efficient database caching.",
            "The open-source foundation is committed to [BLANK] the maintenance of Linux.",
            "Good engineering practices are crucial for [BLANK] team velocity over long projects."
        ]),
        ("Thoroughly", "minuciosamente; a fondo", "In a comprehensive, detailed, and meticulous manner.", [
            "The security audit team examined the source code [BLANK] for injection flaws.",
            "Always test database migration scripts [BLANK] on staging before production.",
            "The QA squad documented the steps to reproduce the bug [BLANK]."
        ])
    ],

    "Unit 3 - Comprensión escrita": [
        ("Additional Perks", "ventajas adicionales; beneficios extra", "Extra benefits, compensations, or privileges granted alongside a regular salary.", [
            "Free health insurance and gym memberships are [BLANK] offered by tech startups.",
            "Flexible remote working hours are considered valuable [BLANK] by software developers.",
            "Employees receive generous [BLANK], including annual tech equipment stipends."
        ]),
        ("Backup and Sync", "copia de seguridad y sincronización", "The automated process of saving duplicate files and syncing changes across devices.", [
            "Configure cloud [BLANK] so your local project directory is protected off-site.",
            "Google Drive and Dropbox provide automatic [BLANK] capabilities for desktop users.",
            "The software crashed, but thanks to [BLANK], no developer notes were lost."
        ]),
        ("Check for Updates", "buscar actualizaciones", "To inspect a remote server or repository for newer software patches or versions.", [
            "Click the help menu and select [BLANK] to see if a newer version is available.",
            "Linux package managers routinely [BLANK] before installing required dependencies.",
            "Our security policy mandates that operating systems [BLANK] every morning."
        ]),
        ("Compensation Package", "paquete de compensación", "The total combination of base salary, bonuses, stock equity, and benefits.", [
            "The senior DevOps role offers an attractive [BLANK] including stock options.",
            "During hiring negotiations, developers evaluate the entire [BLANK], not just cash.",
            "Our company reviewed its [BLANK] to remain competitive in recruiting talent."
        ]),
        ("Current Software Version", "versión actual del software", "The specific release number or build currently installed and running.", [
            "You can check your [BLANK] by typing the command 'docker --version' in the terminal.",
            "Ensure that your [BLANK] is compatible with the latest database drivers.",
            "The security vulnerability only affects installations prior to the [BLANK]."
        ]),
        ("Inferential Comprehension", "comprensión inferencial", "The cognitive ability to deduce unstated meanings, context, or implied information.", [
            "Reading between the lines in technical whitepapers requires good [BLANK].",
            "Advanced exams test [BLANK] rather than simple memorization of facts.",
            "[BLANK] helps developers anticipate edge cases when reading user requirements."
        ]),
        ("Know Your Worth", "conoce tu valor", "Being conscious and confident of one's professional skills, value, and market price.", [
            "When negotiating freelance contract rates, it is crucial to [BLANK].",
            "Experienced software developers [BLANK] in today's competitive global tech market.",
            "Career coaches advise engineers to [BLANK] before attending salary interviews."
        ]),
        ("Multitasking", "multitarea", "The ability to execute multiple tasks, programs, or operations concurrently.", [
            "Modern multi-core processors excel at hardware [BLANK] without performance degradation.",
            "While humans struggle with cognitive [BLANK], operating system kernels are built for it.",
            "The job description highlights efficient [BLANK] and time management skills."
        ]),
        ("Outlines", "esquemas; borradores", "General descriptions, frameworks, or summaries giving the essential parts.", [
            "The software engineer prepared detailed [BLANK] before beginning architecture design.",
            "Review the project [BLANK] to understand the delivery timeline and sprint phases.",
            "Course [BLANK] help IT students plan their study schedule across the semester."
        ]),
        ("Reports", "informes", "Detailed analytical accounts, summaries, or presentations of findings.", [
            "The penetration testing agency submitted comprehensive vulnerability [BLANK].",
            "Automated monitoring systems generate weekly server uptime and latency [BLANK].",
            "Bug [BLANK] submitted on GitHub should always include clear reproduction steps."
        ]),
        ("Restart", "reiniciar", "To reboot or start a computer, application, or service again.", [
            "After applying kernel patches, the systems administrator had to [BLANK] the node.",
            "If the background worker daemon hangs, please [BLANK] the service using systemctl.",
            "A quick [BLANK] of the network modem resolved the packet drop issue."
        ]),
        ("Retirement Plans", "planes de jubilación", "Financial arrangements, pensions, or 401(k) accounts for when an employee retires.", [
            "Many corporate IT employers offer matching contributions to employee [BLANK].",
            "HR explained the company pension scheme and voluntary [BLANK] during onboarding.",
            "Investing early in employer-sponsored [BLANK] provides long-term financial security."
        ]),
        ("Safety Standards", "normas de seguridad", "Official regulations and protocols established to protect equipment, data, or workers.", [
            "Datacenter technicians must strictly adhere to electrical and physical [BLANK].",
            "Compliance with ISO 27001 certifies that an organization meets rigorous [BLANK].",
            "Failing to observe workplace [BLANK] can result in severe legal penalties."
        ]),
        ("Summary", "resumen", "A concise statement or comprehensive recap giving the main points.", [
            "The lead architect opened the presentation with an executive [BLANK] of the redesign.",
            "In [BLANK], adopting automated unit testing halved our production bug rate.",
            "Each chapter of the technical manual concludes with a helpful vocabulary [BLANK]."
        ]),
        ("Troubleshooting", "resolución de problemas; diagnóstico", "The systematic process of identifying, isolating, and fixing defects.", [
            "Network engineers spent the afternoon [BLANK] erratic latency on the VPN bridge.",
            "The official documentation contains an invaluable FAQ and [BLANK] guide.",
            "Methodical [BLANK] is one of the most prized skills in a system administrator."
        ]),
        ("Work Schedule", "horario de trabajo", "The designated hours, days, or shifts during which an employee performs duties.", [
            "Our company supports a flexible [BLANK], allowing staff to work when most productive.",
            "The 24/7 on-call [BLANK] rotates weekly among all platform reliability engineers.",
            "Check the team calendar to see your assigned maintenance window [BLANK]."
        ])
    ],

    "Unit 4 - Expresión escrita": [
        ("Abbreviations", "abreviaturas; siglas", "Shortened forms of words or phrases, such as CPU, RAM, or API.", [
            "Technical jargon is filled with confusing three-letter [BLANK] like DNS and CDN.",
            "The style guide advises authors to define [BLANK] on their first appearance.",
            "Junior programmers should familiarize themselves with standard networking [BLANK]."
        ]),
        ("Align", "alinear; coordinar", "To bring into mutual agreement, correct relative position, or strategic harmony.", [
            "Product roadmaps must [BLANK] closely with overall enterprise business goals.",
            "Daily standups help team members [BLANK] their efforts for the current sprint.",
            "Ensure that frontend styling standards [BLANK] with the shared design system."
        ]),
        ("Campaign management", "gestión de campañas", "Planning, executing, tracking, and analyzing business or communication initiatives.", [
            "The marketing division utilizes automated software tools for digital [BLANK].",
            "Analytics dashboards make email [BLANK] significantly more data-driven.",
            "Effective [BLANK] requires monitoring click-through rates and customer retention."
        ]),
        ("Colleague", "colega de trabajo", "A person with whom one works closely in a profession, business, or company.", [
            "I asked my senior [BLANK] to review my pull request before merging to main.",
            "She collaborated with an overseas [BLANK] on the machine learning paper.",
            "Treating every [BLANK] with respect creates a healthy engineering culture."
        ]),
        ("Concise", "conciso; breve y preciso", "Giving a lot of clear information in a few words; brief but comprehensive.", [
            "Write clear, [BLANK] commit messages that explain the reason for the change.",
            "Technical documentation should be [BLANK] and avoid unnecessary wordiness.",
            "His presentation was [BLANK], taking only ten minutes to explain the complex fix."
        ]),
        ("Correspondence", "correspondencia; comunicación escrita", "Written communication, letters, emails, or messages exchanged between parties.", [
            "Always maintain a polite and professional tone in official client [BLANK].",
            "The company archives all technical [BLANK] for legal and compliance reasons.",
            "Security policies disallow transmitting plaintext passwords in email [BLANK]."
        ]),
        ("Emphasizing", "destacando; haciendo hincapié", "Giving special importance or prominence to something in speaking or writing.", [
            "The speaker began by [BLANK] the critical importance of end-to-end encryption.",
            "Our CTO is constantly [BLANK] code quality over reckless delivery speed.",
            "By [BLANK] continuous learning, the tech firm retains its top software talent."
        ]),
        ("Enthusiasm", "entusiasmo", "Intense and eager enjoyment, interest, or approval for an activity.", [
            "The junior developer tackled the challenging debugging task with tremendous [BLANK].",
            "Her [BLANK] for open-source contributions motivated the entire engineering team.",
            "Clients appreciated the team's visible [BLANK] during the product demonstration."
        ]),
        ("Execute", "ejecutar; llevar a cabo", "To carry out, run, or put into effect a plan, command, or computer program.", [
            "Type this bash script in the root terminal to [BLANK] the automated backup.",
            "The operating system scheduler will [BLANK] high-priority threads first.",
            "Our DevOps team managed to [BLANK] the database failover flawlessly."
        ]),
        ("Expression of interest", "expresión de interés", "A formal indication by a party of interest in a contract, proposal, or job.", [
            "Our tech agency submitted an official [BLANK] for the government cloud project.",
            "Candidates should email their resume and an [BLANK] to the hiring manager.",
            "The procurement portal received dozens of [BLANK] submissions from IT vendors."
        ]),
        ("Follow up", "seguimiento; dar seguimiento", "To pursue, investigate, or check on the progress of a previous action.", [
            "I will send an email tomorrow to [BLANK] on the open customer support ticket.",
            "Make sure you [BLANK] with the client after deploying the software patch.",
            "A structured [BLANK] process prevents reported bugs from being forgotten."
        ]),
        ("Proposal", "propuesta", "A plan, suggestion, or offer put forward for consideration by others.", [
            "The systems architect submitted a detailed [BLANK] for a microservices redesign.",
            "Stakeholders unanimously accepted the budget [BLANK] for upgrading data storage.",
            "Each vendor must submit their software consulting [BLANK] before the deadline."
        ]),
        ("Requirements", "requisitos", "Things demanded or needed as a prerequisite for software or system compliance.", [
            "Carefully gather user [BLANK] before writing a single line of backend code.",
            "This enterprise server meets all minimum hardware [BLANK] for virtualization.",
            "Changing [BLANK] halfway through a sprint can derail development timelines."
        ]),
        ("Retention", "retención", "The continued possession, holding, or maintenance of data, customers, or employees.", [
            "Implementing competitive salaries significantly improved engineer [BLANK].",
            "Data privacy regulations define the maximum duration of customer log [BLANK].",
            "User [BLANK] increased after we fixed the slow page load times in the app."
        ]),
        ("Strategic planning", "planificación estratégica", "The process of defining organizational strategy and allocating resources.", [
            "Long-term [BLANK] is essential to modernize monolithic legacy IT infrastructure.",
            "The executive board met for two days of intensive [BLANK] on cloud investments.",
            "Good [BLANK] helps avoid technical debt while meeting aggressive market targets."
        ]),
        ("Tailor", "adaptar; personalizar", "To make, alter, or adapt something for a particular purpose or person.", [
            "We can [BLANK] our software platform to suit your specific business workflows.",
            "Always [BLANK] your resume and cover letter to the requirements of the job opening.",
            "Custom CSS themes allow clients to [BLANK] the web portal to their company branding."
        ]),
        ("Track record", "historial; trayectoria", "The past achievements, performance, or history of a person or organization.", [
            "Our lead architect has an impressive [BLANK] of delivering zero-downtime migrations.",
            "Clients trust our software agency because of our proven reliability [BLANK].",
            "A demonstrable [BLANK] in open-source projects helps candidates stand out in interviews."
        ])
    ]
}

def slugify(s: str) -> str:
    import re
    return re.sub(r'[^a-z0-9]+', '_', s.lower()).strip('_')

all_items = []

for unit_title, terms in DATA_BY_UNIT.items():
    unit_prefix = 'ud1'
    if 'Unit 2' in unit_title: unit_prefix = 'ud2'
    elif 'Unit 3' in unit_title: unit_prefix = 'ud3'
    elif 'Unit 4' in unit_title: unit_prefix = 'ud4'

    for word, trans, def_en, examples in terms:
        item_id = f'{unit_prefix}_{slugify(word)}'
        item = GlossaryItem(
            id=item_id,
            lesson=unit_title,
            word=word,
            definition_en=def_en,
            translation_es=trans,
            examples=examples
        )
        all_items.append(item.model_dump())

output_path = Path('glossary_data.json')
with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(all_items, f, ensure_ascii=False, indent=2)

print(f'Total términos generados y validados con Pydantic: {len(all_items)}')
print(f'Archivo guardado: {output_path.resolve()}')

