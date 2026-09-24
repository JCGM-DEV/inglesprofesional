// ═══════════════════════════════════════════════════════════════
// data.js — Complete bilingual content from all 4 PDF units
// ═══════════════════════════════════════════════════════════════

const UNITS = {
  // ─── UNIT 1 ───────────────────────────────────────────────────
  1: {
    nav: { en: "Unit 1: Present & Past", es: "Unidad 1: Presente y Pasado" },
    icon: "fa-solid fa-book",
    theory: {
      en: `
<div class="card"><h3><i class="fa-solid fa-book-open"></i> 1.1 Present Simple</h3>
<p>Used for <strong>general/habitual actions</strong> and <strong>universal truths</strong>. Third-person singular adds <strong>-s</strong>.</p>
<h4>✅ Affirmative</h4>
<p>Subject + base verb &nbsp;→&nbsp; <em>I eat breakfast every morning.</em></p>
<p>3rd person: Subject + verb + <strong>s</strong> &nbsp;→&nbsp; <em>She works in an office.</em></p>
<h4>❌ Negative</h4>
<p>Subject + <strong>don't / doesn't</strong> + base verb &nbsp;→&nbsp; <em>I don't eat breakfast. / She doesn't work.</em></p>
<h4>❓ Interrogative</h4>
<p><strong>Do / Does</strong> + Subject + base verb? &nbsp;→&nbsp; <em>Do you live in New York? / Does he go to the gym?</em></p>
</div>

<div class="card"><h3><i class="fa-solid fa-spinner"></i> 1.1 Present Continuous</h3>
<p>Used for actions <strong>happening right now</strong> or <strong>temporary</strong> actions.</p>
<h4>✅ Affirmative</h4>
<p>Subject + am/is/are + verb-<strong>ing</strong> &nbsp;→&nbsp; <em>I am eating lunch right now.</em></p>
<h4>❌ Negative</h4>
<p>Subject + am not/isn't/aren't + verb-ing &nbsp;→&nbsp; <em>They are not studying.</em></p>
<h4>❓ Interrogative</h4>
<p>Am/Is/Are + Subject + verb-ing? &nbsp;→&nbsp; <em>Are you eating lunch right now?</em></p>
</div>

<div class="card"><h3><i class="fa-solid fa-clock-rotate-left"></i> 1.2 Past Simple</h3>
<p>Used for <strong>completed actions</strong> at a specific point in the past.</p>
<h4>✅ Affirmative</h4>
<p>Regular: Subject + verb + <strong>-ed</strong> &nbsp;→&nbsp; <em>I visited Paris last summer.</em></p>
<p>Irregular: no fixed rule &nbsp;→&nbsp; <em>He went to the store. / They ate pizza.</em></p>
<h4>❌ Negative</h4>
<p>Subject + <strong>didn't</strong> + base verb &nbsp;→&nbsp; <em>I didn't visit Paris.</em></p>
<h4>❓ Interrogative</h4>
<p><strong>Did</strong> + Subject + base verb? &nbsp;→&nbsp; <em>Did you visit Paris last summer?</em></p>
</div>

<div class="card"><h3><i class="fa-solid fa-hourglass-half"></i> 1.2 Past Continuous</h3>
<p>Used for actions <strong>in progress</strong> in the past.</p>
<h4>✅ Affirmative</h4>
<p>Subject + <strong>was/were</strong> + verb-ing &nbsp;→&nbsp; <em>I was reading a book when the phone rang.</em></p>
<h4>❌ Negative</h4>
<p>Subject + wasn't/weren't + verb-ing &nbsp;→&nbsp; <em>They weren't playing soccer.</em></p>
<h4>❓ Interrogative</h4>
<p>Was/Were + Subject + verb-ing? &nbsp;→&nbsp; <em>Were you reading a book?</em></p>
</div>

<div class="card"><h3><i class="fa-solid fa-check-double"></i> 1.3 Present Perfect Simple</h3>
<p>Describes actions <strong>relevant to the present</strong>, completed actions, and life <strong>experiences</strong>.</p>
<h4>✅ Affirmative</h4>
<p>Subject + <strong>have/has</strong> + past participle &nbsp;→&nbsp; <em>I have visited Paris several times.</em></p>
<h4>❌ Negative</h4>
<p>Subject + haven't/hasn't + past participle &nbsp;→&nbsp; <em>She hasn't finished her homework.</em></p>
<div class="example-box">⚠️ <strong>NEVER</strong> in negatives: <em>I have <strong>never</strong> eaten sushi.</em> (verb stays affirmative because "never" is already negative)</div>
<h4>❓ Interrogative</h4>
<p>Have/Has + Subject + past participle? &nbsp;→&nbsp; <em>Have you had lunch today?</em></p>
<div class="example-box">⚠️ <strong>EVER</strong> in questions: <em>Have you <strong>ever</strong> traveled to Europe?</em></div>
</div>

<div class="card"><h3><i class="fa-solid fa-arrows-spin"></i> 1.3 Present Perfect Continuous</h3>
<p>Emphasizes the <strong>duration</strong> of an action started in the past continuing into the present.</p>
<h4>✅ Affirmative</h4>
<p>Subject + have/has + <strong>been</strong> + verb-ing &nbsp;→&nbsp; <em>I have been reading for two hours.</em></p>
<h4>❌ Negative</h4>
<p>Subject + haven't/hasn't + been + verb-ing &nbsp;→&nbsp; <em>She hasn't been studying all morning.</em></p>
<h4>❓ Interrogative</h4>
<p>Have/Has + Subject + been + verb-ing? &nbsp;→&nbsp; <em>Has she been studying all morning?</em></p>
</div>

<div class="card"><h3><i class="fa-solid fa-handshake"></i> 2. Effective & Formal Communication</h3>
<h4>Greetings</h4>
<ul>
<li>"Hello" / "Hi" — universal, formal & informal</li>
<li>"Good morning / afternoon / evening" — time-specific</li>
<li>"How are you?" — shows interest politely</li>
</ul>
<h4>Receptions</h4>
<ul>
<li>"Nice to meet you" — first meeting</li>
<li>"It's a pleasure to see you again" — reuniting</li>
<li>"Welcome to our team / event" — professional setting</li>
</ul>
<h4>Farewells</h4>
<ul>
<li>"Goodbye" / "Farewell" — standard</li>
<li>"Nice talking to you" — informal, friendly</li>
<li>"See you later" — hope of future encounters</li>
</ul>
</div>

<div class="card"><h3><i class="fa-solid fa-user-tie"></i> 2.2 Politeness & Formality</h3>
<h4>Politeness expressions</h4>
<ul>
<li><strong>Please</strong> — to make requests</li>
<li><strong>Thank you</strong> — express gratitude</li>
<li><strong>You're welcome</strong> — response to "thank you"</li>
<li><strong>Excuse me</strong> — get someone's attention</li>
<li><strong>Pardon me</strong> — ask someone to repeat</li>
<li><strong>I'm sorry</strong> — apologize</li>
<li><strong>May I?</strong> — seek permission politely</li>
</ul>
<h4>Formality</h4>
<ul>
<li>Use titles: Mr., Mrs., Miss, Sir, Madam</li>
<li>Address by last name: "Mr. Smith", "Dr. Johnson"</li>
</ul>
</div>

<div class="card"><h3><i class="fa-solid fa-magnifying-glass"></i> 2.3 Seeking Clarification, Repetition & Confirmation</h3>
<h4>Clarification</h4>
<div class="example-box">"Could you please explain that in more detail?"<br>"I need more information to fully grasp the situation."</div>
<h4>Repetition</h4>
<div class="example-box">"I'm sorry, could you repeat the last part?"<br>"Could you kindly repeat the key points?"</div>
<h4>Confirmation</h4>
<div class="example-box">"Just to make sure I understood correctly, you mean…"<br>"If I understand correctly, you're saying that…"</div>
</div>

<div class="card"><h3><i class="fa-solid fa-lightbulb"></i> 2.4 Main & Secondary Ideas</h3>
<p><strong>Main Ideas</strong> = central points or key takeaways (thesis).</p>
<p><strong>Secondary Ideas</strong> = supporting points that give evidence or context.</p>
<div class="example-box"><strong>Main:</strong> "The new security protocol enhances our network's safety."<br><strong>Secondary:</strong> "It uses advanced encryption, real-time threat detection, and simplifies authentication."</div>
</div>

<div class="card"><h3><i class="fa-solid fa-comment-dots"></i> 2.5 Opinions, Preferences, Tastes & Complaints</h3>
<h4>Opinions</h4>
<div class="example-box">"In my opinion, implementing a remote work policy would enhance work-life balance."</div>
<h4>Preferences</h4>
<div class="example-box">"I have a preference for using Google Workspace because it integrates well."</div>
<h4>Tastes</h4>
<div class="example-box">"My taste in design leans towards a clean and modern aesthetic."</div>
<h4>Complaints</h4>
<div class="example-box">"I've received complaints about delayed response time. I suggest we implement a ticketing system."</div>
</div>

<div class="card"><h3><i class="fa-solid fa-envelope"></i> 2.6 Handling Messages</h3>
<h4>Email Etiquette</h4>
<p>Focused subject line, concise language, professional tone, proper formatting, proofread.</p>
<h4>Instant Messaging</h4>
<p>Brevity & clarity. Use emojis correctly. Maintain professional tone.</p>
<h4>In-Person Communication</h4>
<p>Body language matters: maintain eye contact, active listening.</p>
<h4>Phone Calls</h4>
<p>Start with clear greeting + your name. Listen, don't interrupt. Voicemails: clear, short, include next step.</p>
</div>`,

      es: `
<div class="card"><h3><i class="fa-solid fa-book-open"></i> 1.1 Presente Simple</h3>
<p>Se usa para <strong>acciones generales/habituales</strong> y <strong>verdades universales</strong>. La tercera persona singular añade <strong>-s</strong>.</p>
<h4>✅ Afirmativa</h4>
<p>Sujeto + verbo base &nbsp;→&nbsp; <em>I eat breakfast every morning.</em> <span class="translation">(Desayuno cada mañana)</span></p>
<p>3ª persona: Sujeto + verbo + <strong>s</strong> &nbsp;→&nbsp; <em>She works in an office.</em> <span class="translation">(Ella trabaja en una oficina)</span></p>
<h4>❌ Negativa</h4>
<p>Sujeto + <strong>don't / doesn't</strong> + verbo base &nbsp;→&nbsp; <em>I don't eat breakfast.</em> <span class="translation">(No desayuno)</span></p>
<h4>❓ Interrogativa</h4>
<p><strong>Do / Does</strong> + Sujeto + verbo base? &nbsp;→&nbsp; <em>Do you live in New York?</em> <span class="translation">(¿Vives en Nueva York?)</span></p>
</div>

<div class="card"><h3><i class="fa-solid fa-spinner"></i> 1.1 Presente Continuo</h3>
<p>Se usa para acciones que <strong>ocurren ahora mismo</strong> o acciones <strong>temporales</strong>.</p>
<h4>✅ Afirmativa</h4>
<p>Sujeto + am/is/are + verbo-<strong>ing</strong> &nbsp;→&nbsp; <em>I am eating lunch right now.</em> <span class="translation">(Estoy almorzando ahora mismo)</span></p>
<h4>❌ Negativa</h4>
<p>Sujeto + am not/isn't/aren't + verbo-ing &nbsp;→&nbsp; <em>They are not studying.</em> <span class="translation">(No están estudiando)</span></p>
<h4>❓ Interrogativa</h4>
<p>Am/Is/Are + Sujeto + verbo-ing? &nbsp;→&nbsp; <em>Are you eating lunch?</em> <span class="translation">(¿Estás almorzando?)</span></p>
</div>

<div class="card"><h3><i class="fa-solid fa-clock-rotate-left"></i> 1.2 Pasado Simple</h3>
<p>Se usa para <strong>acciones completadas</strong> en un momento específico del pasado.</p>
<h4>✅ Afirmativa</h4>
<p>Regular: Sujeto + verbo + <strong>-ed</strong> &nbsp;→&nbsp; <em>I visited Paris last summer.</em> <span class="translation">(Visité París el verano pasado)</span></p>
<p>Irregular: sin regla fija &nbsp;→&nbsp; <em>He went to the store.</em> <span class="translation">(Fue a la tienda)</span></p>
<h4>❌ Negativa</h4>
<p>Sujeto + <strong>didn't</strong> + verbo base &nbsp;→&nbsp; <em>I didn't visit Paris.</em> <span class="translation">(No visité París)</span></p>
<h4>❓ Interrogativa</h4>
<p><strong>Did</strong> + Sujeto + verbo base? &nbsp;→&nbsp; <em>Did you visit Paris?</em> <span class="translation">(¿Visitaste París?)</span></p>
</div>

<div class="card"><h3><i class="fa-solid fa-hourglass-half"></i> 1.2 Pasado Continuo</h3>
<p>Se usa para acciones <strong>en progreso</strong> en el pasado.</p>
<h4>✅ Afirmativa</h4>
<p>Sujeto + <strong>was/were</strong> + verbo-ing &nbsp;→&nbsp; <em>I was reading a book when the phone rang.</em> <span class="translation">(Estaba leyendo cuando sonó el teléfono)</span></p>
<h4>❌ Negativa</h4>
<p>Sujeto + wasn't/weren't + verbo-ing &nbsp;→&nbsp; <em>They weren't playing.</em> <span class="translation">(No estaban jugando)</span></p>
<h4>❓ Interrogativa</h4>
<p>Was/Were + Sujeto + verbo-ing? &nbsp;→&nbsp; <em>Were you reading?</em> <span class="translation">(¿Estabas leyendo?)</span></p>
</div>

<div class="card"><h3><i class="fa-solid fa-check-double"></i> 1.3 Presente Perfecto Simple</h3>
<p>Describe acciones <strong>relevantes en el presente</strong>, acciones completadas y <strong>experiencias vitales</strong>.</p>
<h4>✅ Afirmativa</h4>
<p>Sujeto + <strong>have/has</strong> + participio pasado &nbsp;→&nbsp; <em>I have visited Paris.</em> <span class="translation">(He visitado París)</span></p>
<h4>❌ Negativa</h4>
<p>Sujeto + haven't/hasn't + participio &nbsp;→&nbsp; <em>She hasn't finished.</em> <span class="translation">(No ha terminado)</span></p>
<div class="example-box">⚠️ <strong>NEVER</strong> en negativas: <em>I have <strong>never</strong> eaten sushi.</em> <span class="translation">(Nunca he comido sushi — el verbo queda afirmativo porque "never" ya es negativo)</span></div>
<h4>❓ Interrogativa</h4>
<p>Have/Has + Sujeto + participio? &nbsp;→&nbsp; <em>Have you had lunch?</em> <span class="translation">(¿Has almorzado?)</span></p>
<div class="example-box">⚠️ <strong>EVER</strong> en preguntas: <em>Have you <strong>ever</strong> traveled to Europe?</em> <span class="translation">(¿Alguna vez has viajado a Europa?)</span></div>
</div>

<div class="card"><h3><i class="fa-solid fa-arrows-spin"></i> 1.3 Presente Perfecto Continuo</h3>
<p>Enfatiza la <strong>duración</strong> de una acción que empezó en el pasado y continúa hasta el presente.</p>
<h4>✅ Afirmativa</h4>
<p>Sujeto + have/has + <strong>been</strong> + verbo-ing &nbsp;→&nbsp; <em>I have been reading for two hours.</em> <span class="translation">(He estado leyendo durante dos horas)</span></p>
<h4>❌ Negativa</h4>
<p>Sujeto + haven't/hasn't + been + verbo-ing &nbsp;→&nbsp; <em>She hasn't been studying.</em> <span class="translation">(No ha estado estudiando)</span></p>
<h4>❓ Interrogativa</h4>
<p>Have/Has + Sujeto + been + verbo-ing? &nbsp;→&nbsp; <em>Has she been studying?</em> <span class="translation">(¿Ha estado estudiando?)</span></p>
</div>

<div class="card"><h3><i class="fa-solid fa-handshake"></i> 2. Comunicación Efectiva y Formal</h3>
<h4>Saludos (Greetings)</h4>
<ul>
<li>"Hello" / "Hi" — universal, formal e informal</li>
<li>"Good morning / afternoon / evening" — según la hora</li>
<li>"How are you?" — muestra interés educadamente <span class="translation">(¿Cómo estás?)</span></li>
</ul>
<h4>Recepciones</h4>
<ul>
<li>"Nice to meet you" — primera vez <span class="translation">(Encantado/a de conocerte)</span></li>
<li>"It's a pleasure to see you again" — reencuentro <span class="translation">(Es un placer verte de nuevo)</span></li>
<li>"Welcome to our team" — entorno profesional <span class="translation">(Bienvenido/a a nuestro equipo)</span></li>
</ul>
<h4>Despedidas (Farewells)</h4>
<ul>
<li>"Goodbye" / "Farewell" — estándar <span class="translation">(Adiós)</span></li>
<li>"Nice talking to you" — informal <span class="translation">(Ha sido agradable hablar contigo)</span></li>
<li>"See you later" — esperanza de futuro encuentro <span class="translation">(Hasta luego)</span></li>
</ul>
</div>

<div class="card"><h3><i class="fa-solid fa-user-tie"></i> 2.2 Cortesía y Formalidad</h3>
<h4>Expresiones de cortesía</h4>
<ul>
<li><strong>Please</strong> — para pedir algo <span class="translation">(Por favor)</span></li>
<li><strong>Thank you</strong> — expresar gratitud <span class="translation">(Gracias)</span></li>
<li><strong>You're welcome</strong> — respuesta a "thank you" <span class="translation">(De nada)</span></li>
<li><strong>Excuse me</strong> — llamar la atención <span class="translation">(Disculpe)</span></li>
<li><strong>Pardon me</strong> — pedir que repitan <span class="translation">(Perdone)</span></li>
<li><strong>I'm sorry</strong> — disculparse <span class="translation">(Lo siento)</span></li>
<li><strong>May I?</strong> — pedir permiso educadamente <span class="translation">(¿Puedo?)</span></li>
</ul>
<h4>Formalidad</h4>
<ul>
<li>Usar títulos: Mr., Mrs., Miss, Sir, Madam</li>
<li>Dirigirse por apellido: "Mr. Smith", "Dr. Johnson"</li>
</ul>
</div>

<div class="card"><h3><i class="fa-solid fa-magnifying-glass"></i> 2.3 Pedir Aclaraciones, Repetición y Confirmación</h3>
<h4>Aclaración</h4>
<div class="example-box">"Could you please explain that in more detail?" <span class="translation">(¿Podría explicar eso con más detalle?)</span></div>
<h4>Repetición</h4>
<div class="example-box">"Could you kindly repeat the key points?" <span class="translation">(¿Podría repetir los puntos clave?)</span></div>
<h4>Confirmación</h4>
<div class="example-box">"Just to make sure I understood correctly, you mean…" <span class="translation">(Solo para asegurarme de que entendí bien, quieres decir…)</span></div>
</div>

<div class="card"><h3><i class="fa-solid fa-lightbulb"></i> 2.4 Ideas Principales y Secundarias</h3>
<p><strong>Ideas Principales</strong> = puntos centrales o conclusiones clave (tesis).</p>
<p><strong>Ideas Secundarias</strong> = puntos de apoyo que dan evidencia o contexto.</p>
<div class="example-box"><strong>Principal:</strong> "The new security protocol enhances our network's safety." <span class="translation">(El nuevo protocolo mejora la seguridad)</span><br><strong>Secundaria:</strong> "Uses advanced encryption, real-time threat detection…" <span class="translation">(Usa cifrado avanzado, detección en tiempo real…)</span></div>
</div>

<div class="card"><h3><i class="fa-solid fa-comment-dots"></i> 2.5 Opiniones, Preferencias, Gustos y Quejas</h3>
<h4>Opiniones (Opinions)</h4>
<div class="example-box">"In my opinion…" <span class="translation">(En mi opinión…)</span> / "I believe that…" <span class="translation">(Creo que…)</span></div>
<h4>Preferencias (Preferences)</h4>
<div class="example-box">"I have a preference for…" <span class="translation">(Tengo preferencia por…)</span> / "I prefer…" <span class="translation">(Prefiero…)</span></div>
<h4>Gustos (Tastes)</h4>
<div class="example-box">"My taste in design leans towards…" <span class="translation">(Mi gusto en diseño tiende hacia…)</span></div>
<h4>Quejas (Complaints)</h4>
<div class="example-box">"I suggest we implement a ticketing system." <span class="translation">(Sugiero que implementemos un sistema de tickets)</span></div>
</div>

<div class="card"><h3><i class="fa-solid fa-envelope"></i> 2.6 Manejo de Mensajes</h3>
<h4>Email</h4><p>Asunto claro, lenguaje conciso, tono profesional, revisar antes de enviar.</p>
<h4>Mensajería Instantánea</h4><p>Brevedad y claridad. Emojis con cuidado. Tono profesional.</p>
<h4>Comunicación Presencial</h4><p>Lenguaje corporal importa: contacto visual, escucha activa.</p>
<h4>Llamadas Telefónicas</h4><p>Empieza con saludo claro + tu nombre. Escucha sin interrumpir. Buzón de voz: claro, breve, incluye siguiente paso.</p>
</div>`
    },

    exercises: {
      en: `
<div class="card"><h3><i class="fa-solid fa-list-check"></i> Quiz: Verb Tenses</h3>
<p><strong>Q1:</strong> Which sentence uses the Present Continuous correctly?</p>
<button class="quiz-option" onclick="checkQuiz(this,false,'u1q1')">A) I am eating breakfast every morning.</button>
<button class="quiz-option" onclick="checkQuiz(this,true,'u1q1')">B) I am eating lunch right now.</button>

<p class="mt-4"><strong>Q2:</strong> "I ___ Paris several times." (Present Perfect)</p>
<button class="quiz-option" onclick="checkQuiz(this,true,'u1q2')">A) have visited</button>
<button class="quiz-option" onclick="checkQuiz(this,false,'u1q2')">B) visited</button>
<button class="quiz-option" onclick="checkQuiz(this,false,'u1q2')">C) am visiting</button>

<p class="mt-4"><strong>Q3:</strong> "She ___ all morning." (Present Perfect Continuous)</p>
<button class="quiz-option" onclick="checkQuiz(this,false,'u1q3')">A) has studied</button>
<button class="quiz-option" onclick="checkQuiz(this,true,'u1q3')">B) has been studying</button>

<p class="mt-4"><strong>Q4:</strong> "I ___ a book when the phone ___." (Past Continuous + Past Simple)</p>
<button class="quiz-option" onclick="checkQuiz(this,true,'u1q4')">A) was reading / rang</button>
<button class="quiz-option" onclick="checkQuiz(this,false,'u1q4')">B) read / was ringing</button>

<p class="mt-4"><strong>Q5:</strong> "Have you ___ traveled to Europe?" — the word that goes in the blank is:</p>
<button class="quiz-option" onclick="checkQuiz(this,true,'u1q5')">A) ever</button>
<button class="quiz-option" onclick="checkQuiz(this,false,'u1q5')">B) never</button>
</div>

<div class="card"><h3><i class="fa-solid fa-pen-nib"></i> Fill in the Blanks</h3>
<p>Type the correct word and click "Check".</p>

<p class="mt-3">1. She ___ in an office. (Present Simple, 3rd person of "work")</p>
<input class="fill-input" id="fill-u1-1" placeholder="..."> <button class="check-btn" onclick="checkFill('fill-u1-1','works')">Check</button>
<div class="feedback-msg" id="fb-fill-u1-1"></div>

<p class="mt-3">2. They ___ playing soccer at 3 o'clock yesterday. (Past Continuous)</p>
<input class="fill-input" id="fill-u1-2" placeholder="..."> <button class="check-btn" onclick="checkFill('fill-u1-2','were')">Check</button>
<div class="feedback-msg" id="fb-fill-u1-2"></div>

<p class="mt-3">3. I have ___ eaten sushi. (negative experience = "never")</p>
<input class="fill-input" id="fill-u1-3" placeholder="..."> <button class="check-btn" onclick="checkFill('fill-u1-3','never')">Check</button>
<div class="feedback-msg" id="fb-fill-u1-3"></div>
</div>

<div class="card"><h3><i class="fa-solid fa-comments"></i> Quiz: Communication</h3>
<p><strong>Q6:</strong> What is the correct polite request?</p>
<button class="quiz-option" onclick="checkQuiz(this,false,'u1q6')">A) Tell me that again.</button>
<button class="quiz-option" onclick="checkQuiz(this,true,'u1q6')">B) Could you kindly repeat the key points?</button>

<p class="mt-4"><strong>Q7:</strong> Which is a confirmation phrase?</p>
<button class="quiz-option" onclick="checkQuiz(this,true,'u1q7')">A) "Just to make sure I understood correctly, you mean…"</button>
<button class="quiz-option" onclick="checkQuiz(this,false,'u1q7')">B) "I'm sorry, could you repeat that?"</button>
</div>`,
      es: `
<div class="card"><h3><i class="fa-solid fa-list-check"></i> Quiz: Tiempos Verbales</h3>
<p><strong>P1:</strong> ¿Qué frase usa el Presente Continuo correctamente?</p>
<button class="quiz-option" onclick="checkQuiz(this,false,'u1q1')">A) I am eating breakfast every morning.</button>
<button class="quiz-option" onclick="checkQuiz(this,true,'u1q1')">B) I am eating lunch right now. <span class="translation">(Estoy almorzando ahora)</span></button>

<p class="mt-4"><strong>P2:</strong> "I ___ Paris several times." (Presente Perfecto)</p>
<button class="quiz-option" onclick="checkQuiz(this,true,'u1q2')">A) have visited <span class="translation">(he visitado)</span></button>
<button class="quiz-option" onclick="checkQuiz(this,false,'u1q2')">B) visited</button>
<button class="quiz-option" onclick="checkQuiz(this,false,'u1q2')">C) am visiting</button>

<p class="mt-4"><strong>P3:</strong> "She ___ all morning." (Presente Perfecto Continuo)</p>
<button class="quiz-option" onclick="checkQuiz(this,false,'u1q3')">A) has studied</button>
<button class="quiz-option" onclick="checkQuiz(this,true,'u1q3')">B) has been studying <span class="translation">(ha estado estudiando)</span></button>

<p class="mt-4"><strong>P4:</strong> "I ___ a book when the phone ___." (Pasado Continuo + Pasado Simple)</p>
<button class="quiz-option" onclick="checkQuiz(this,true,'u1q4')">A) was reading / rang <span class="translation">(estaba leyendo / sonó)</span></button>
<button class="quiz-option" onclick="checkQuiz(this,false,'u1q4')">B) read / was ringing</button>

<p class="mt-4"><strong>P5:</strong> "Have you ___ traveled to Europe?" — la palabra del hueco es:</p>
<button class="quiz-option" onclick="checkQuiz(this,true,'u1q5')">A) ever <span class="translation">(alguna vez)</span></button>
<button class="quiz-option" onclick="checkQuiz(this,false,'u1q5')">B) never <span class="translation">(nunca — se usa en negativas)</span></button>
</div>

<div class="card"><h3><i class="fa-solid fa-pen-nib"></i> Rellenar Huecos</h3>
<p>Escribe la palabra correcta y pulsa "Comprobar".</p>

<p class="mt-3">1. She ___ in an office. <span class="translation">(Presente Simple, 3ª persona de "work")</span></p>
<input class="fill-input" id="fill-u1-1" placeholder="..."> <button class="check-btn" onclick="checkFill('fill-u1-1','works')">Comprobar</button>
<div class="feedback-msg" id="fb-fill-u1-1"></div>

<p class="mt-3">2. They ___ playing soccer yesterday. <span class="translation">(Pasado Continuo — was/were)</span></p>
<input class="fill-input" id="fill-u1-2" placeholder="..."> <button class="check-btn" onclick="checkFill('fill-u1-2','were')">Comprobar</button>
<div class="feedback-msg" id="fb-fill-u1-2"></div>

<p class="mt-3">3. I have ___ eaten sushi. <span class="translation">(experiencia negativa = "never")</span></p>
<input class="fill-input" id="fill-u1-3" placeholder="..."> <button class="check-btn" onclick="checkFill('fill-u1-3','never')">Comprobar</button>
<div class="feedback-msg" id="fb-fill-u1-3"></div>
</div>

<div class="card"><h3><i class="fa-solid fa-comments"></i> Quiz: Comunicación</h3>
<p><strong>P6:</strong> ¿Cuál es la petición educada correcta?</p>
<button class="quiz-option" onclick="checkQuiz(this,false,'u1q6')">A) Tell me that again. <span class="translation">(Dímelo otra vez — demasiado directo)</span></button>
<button class="quiz-option" onclick="checkQuiz(this,true,'u1q6')">B) Could you kindly repeat the key points? <span class="translation">(¿Podría repetir los puntos clave?)</span></button>

<p class="mt-4"><strong>P7:</strong> ¿Cuál es una frase de confirmación?</p>
<button class="quiz-option" onclick="checkQuiz(this,true,'u1q7')">A) "Just to make sure I understood correctly…" <span class="translation">(Para asegurarme de que entendí bien…)</span></button>
<button class="quiz-option" onclick="checkQuiz(this,false,'u1q7')">B) "I'm sorry, could you repeat that?" <span class="translation">(Es repetición, no confirmación)</span></button>
</div>`
    },

    flashcards: {
      en: [
        ["Acknowledgment","Recognition / acceptance"],
        ["Backup generators","Reserve power generators"],
        ["Code freeze","No more code changes allowed"],
        ["Core functionalities","Main features"],
        ["Cost-effective","Good value for money"],
        ["Cutting-edge","Innovative, state-of-the-art"],
        ["Enhance","To improve, make better"],
        ["Firewall","Network security barrier"],
        ["Foster","To promote, encourage"],
        ["Insight","Deep understanding"],
        ["Key milestones","Important goals"],
        ["Misunderstanding","Wrong interpretation"],
        ["Network","A system of connected computers"],
        ["Scalability","Ability to grow and adapt"],
        ["Streamlining","Making a process more efficient"],
        ["Workflow","The sequence of tasks in a process"]
      ],
      es: [
        ["Acknowledgment","Reconocimiento / aceptación"],
        ["Backup generators","Generadores de reserva"],
        ["Code freeze","Congelación de código (no más cambios)"],
        ["Core functionalities","Funciones principales"],
        ["Cost-effective","Buena relación coste-eficacia"],
        ["Cutting-edge","Innovador/a, de última generación"],
        ["Enhance","Mejorar, aumentar"],
        ["Firewall","Cortafuegos (barrera de seguridad de red)"],
        ["Foster","Fomentar, promover"],
        ["Insight","Conocimiento profundo"],
        ["Key milestones","Objetivos clave"],
        ["Misunderstanding","Malentendido"],
        ["Network","Red (sistema de ordenadores conectados)"],
        ["Scalability","Adaptabilidad, capacidad de crecer"],
        ["Streamlining","Optimización de procesos"],
        ["Workflow","Flujo de trabajo"]
      ]
    }
  },

  // ─── UNIT 2 ───────────────────────────────────────────────────
  2: {
    nav: { en: "Unit 2: Pronouns & Conditionals", es: "Unidad 2: Pronombres y Condicionales" },
    icon: "fa-solid fa-users",
    theory: {
      en: `
<div class="card"><h3><i class="fa-solid fa-user-tag"></i> 1. Personal Pronouns</h3>
<h4>Subject Pronouns</h4><p>I, You, He, She, It, We, They</p>
<h4>Object Pronouns</h4><p>Me, You, Him, Her, It, Us, Them</p>
<div class="example-box">My mom loves <strong>me</strong>. / They want to join <strong>us</strong> for dinner.</div>
<h4>Possessive Adjectives (need a noun)</h4><p>My, Your, His, Her, Its, Our, Their</p>
<h4>Possessive Pronouns (stand alone)</h4><p>Mine, Yours, His, Hers, Its, Ours, Theirs</p>
<div class="example-box"><strong>My</strong> car is blue. <strong>Yours</strong> is red. (we already know the noun "car")</div>
<h4>Reflexive Pronouns (subject = object)</h4><p>Myself, Yourself, Himself, Herself, Itself, Ourselves, Yourselves, Themselves</p>
<div class="example-box">I hurt <strong>myself</strong> while cooking. / Have you ever asked <strong>yourself</strong> why?</div>
<h4>Relative Pronouns</h4>
<ul>
<li><strong>Who</strong> — for people: <em>The person who called you is waiting.</em></li>
<li><strong>Whom</strong> — for people (object): <em>The student, whom I admire, won the award.</em></li>
<li><strong>Which</strong> — for animals/things: <em>The book, which is on the table, is mine.</em></li>
<li><strong>That</strong> — for people/animals/things (flexible): <em>The car that is parked outside is mine.</em></li>
<li><strong>Whose</strong> — possession: <em>The woman whose bag was lost has found it.</em></li>
</ul>
</div>

<div class="card"><h3><i class="fa-solid fa-code-branch"></i> 1.1 Conditionals</h3>
<h4>First Conditional — Real / Very Likely</h4>
<p><strong>Structure:</strong> If + present simple, will + base verb</p>
<div class="example-box">If it rains tomorrow, we <strong>will</strong> stay at home.<br>If you study hard, you <strong>will</strong> pass the exam.<br>If she calls me, I <strong>will</strong> answer.</div>
<h4>Second Conditional — Hypothetical / Unreal</h4>
<p><strong>Structure:</strong> If + past simple, would + base verb</p>
<div class="example-box">If I won the lottery, I <strong>would</strong> travel around the world.<br>If he studied more, he <strong>would</strong> get better grades.<br>If they invited us, we <strong>would</strong> bring a gift.</div>
</div>

<div class="card"><h3><i class="fa-solid fa-phone"></i> 2.1 Communication Dynamics</h3>
<h4>Initiating Conversations</h4>
<div class="example-box">"Hello, this is [Your Name]. How are you today?"<br>"I'm calling to discuss [topic]."</div>
<h4>Maintaining Conversations</h4>
<div class="example-box">"I understand your perspective. Could you elaborate on [point]?"<br>"How do you address [issue] in your department?"</div>
<h4>Concluding Conversations</h4>
<div class="example-box">"To recap, we've discussed [key points]."<br>"Thank you for your time. I will follow up by [date]."</div>
<h4>In Different Environments</h4>
<p><strong>Phone:</strong> "Thank you for the conversation. I'll send a follow-up email."</p>
<p><strong>Presentations:</strong> "Good morning, everyone. I'm excited to talk about [topic]."</p>
<p><strong>Job Interviews:</strong> "Hello, it's a pleasure to be here. I look forward to discussing my qualifications."</p>
</div>

<div class="card"><h3><i class="fa-solid fa-face-frown-open"></i> 2.2 Handling Complaints</h3>
<ol>
<li><strong>Empathy:</strong> "I understand how frustrating this must be."</li>
<li><strong>Active Listening:</strong> "Could you please share more details?"</li>
<li><strong>Clarification:</strong> "If I understand correctly, you are saying…"</li>
<li><strong>Solution-Oriented:</strong> "Let's work together to resolve this."</li>
<li><strong>Offer Alternatives:</strong> "We could try solution A or B. What do you think?"</li>
<li><strong>Apologize:</strong> "I apologize for any inconvenience."</li>
<li><strong>Follow-Up:</strong> "We will follow up within [time]."</li>
<li><strong>Appreciation:</strong> "Thank you for bringing this to our attention."</li>
</ol>
<h4>The R.E.S.O.L.V.E. Model</h4>
<ul>
<li><strong>R</strong> — Recognize the Issue</li>
<li><strong>E</strong> — Empathize with the Customer</li>
<li><strong>S</strong> — Strategize a Solution</li>
<li><strong>O</strong> — Own the Problem</li>
<li><strong>L</strong> — Learn and Improve</li>
<li><strong>V</strong> — Verify Customer Satisfaction</li>
<li><strong>E</strong> — Evaluate and Adapt</li>
</ul>
</div>`,

      es: `
<div class="card"><h3><i class="fa-solid fa-user-tag"></i> 1. Pronombres Personales</h3>
<h4>Sujeto</h4><p>I <span class="translation">(Yo)</span>, You <span class="translation">(Tú)</span>, He <span class="translation">(Él)</span>, She <span class="translation">(Ella)</span>, It <span class="translation">(Ello)</span>, We <span class="translation">(Nosotros)</span>, They <span class="translation">(Ellos)</span></p>
<h4>Objeto</h4><p>Me, You, Him, Her, It, Us, Them</p>
<div class="example-box">My mom loves <strong>me</strong>. <span class="translation">(Mi madre me quiere)</span></div>
<h4>Adjetivos Posesivos (necesitan sustantivo)</h4><p>My <span class="translation">(Mi)</span>, Your <span class="translation">(Tu)</span>, His <span class="translation">(Su-él)</span>, Her <span class="translation">(Su-ella)</span>, Its, Our <span class="translation">(Nuestro)</span>, Their <span class="translation">(Su-ellos)</span></p>
<h4>Pronombres Posesivos (van solos)</h4><p>Mine <span class="translation">(Mío)</span>, Yours <span class="translation">(Tuyo)</span>, His, Hers, Its, Ours <span class="translation">(Nuestro)</span>, Theirs <span class="translation">(Suyo-ellos)</span></p>
<div class="example-box"><strong>My</strong> car is blue. <strong>Yours</strong> is red. <span class="translation">(Mi coche es azul. El tuyo es rojo)</span></div>
<h4>Reflexivos (sujeto = objeto)</h4><p>Myself <span class="translation">(a mí mismo)</span>, Yourself, Himself, Herself, Itself, Ourselves, Yourselves, Themselves</p>
<div class="example-box">I hurt <strong>myself</strong>. <span class="translation">(Me hice daño a mí mismo)</span></div>
<h4>Pronombres Relativos</h4>
<ul>
<li><strong>Who</strong> — personas: <em>The person who called…</em> <span class="translation">(La persona que llamó…)</span></li>
<li><strong>Whom</strong> — personas (objeto): <em>The student, whom I admire…</em> <span class="translation">(El estudiante, al que admiro…)</span></li>
<li><strong>Which</strong> — animales/cosas: <em>The book, which is on the table…</em> <span class="translation">(El libro, que está en la mesa…)</span></li>
<li><strong>That</strong> — personas/animales/cosas (flexible)</li>
<li><strong>Whose</strong> — posesión: <em>The woman whose bag…</em> <span class="translation">(La mujer cuyo bolso…)</span></li>
</ul>
</div>

<div class="card"><h3><i class="fa-solid fa-code-branch"></i> 1.1 Condicionales</h3>
<h4>Primer Condicional — Real / Muy Probable</h4>
<p><strong>Estructura:</strong> If + presente simple, will + verbo base</p>
<div class="example-box">If it rains tomorrow, we will stay at home. <span class="translation">(Si llueve mañana, nos quedaremos en casa)</span></div>
<h4>Segundo Condicional — Hipotético / Irreal</h4>
<p><strong>Estructura:</strong> If + pasado simple, would + verbo base</p>
<div class="example-box">If I won the lottery, I would travel. <span class="translation">(Si ganara la lotería, viajaría)</span><br>If he studied more, he would get better grades. <span class="translation">(Si estudiara más, sacaría mejores notas)</span></div>
</div>

<div class="card"><h3><i class="fa-solid fa-phone"></i> 2.1 Dinámica de Comunicación</h3>
<h4>Iniciar Conversaciones</h4>
<div class="example-box">"Hello, this is [Name]. How are you today?" <span class="translation">(Hola, soy [Nombre]. ¿Cómo estás hoy?)</span></div>
<h4>Mantener Conversaciones</h4>
<div class="example-box">"I understand your perspective. Could you elaborate?" <span class="translation">(Entiendo tu perspectiva. ¿Podrías profundizar?)</span></div>
<h4>Concluir Conversaciones</h4>
<div class="example-box">"To recap, we've discussed [key points]." <span class="translation">(En resumen, hemos discutido…)</span><br>"Thank you for your time." <span class="translation">(Gracias por tu tiempo)</span></div>
</div>

<div class="card"><h3><i class="fa-solid fa-face-frown-open"></i> 2.2 Manejo de Quejas</h3>
<ol>
<li><strong>Empatía:</strong> "I understand how frustrating this must be." <span class="translation">(Entiendo lo frustrante que debe ser)</span></li>
<li><strong>Escucha Activa:</strong> "Could you please share more details?" <span class="translation">(¿Podría dar más detalles?)</span></li>
<li><strong>Aclaración:</strong> "If I understand correctly, you are saying…" <span class="translation">(Si entiendo bien, estás diciendo…)</span></li>
<li><strong>Orientación a Soluciones:</strong> "Let's work together to resolve this." <span class="translation">(Trabajemos juntos para resolverlo)</span></li>
<li><strong>Ofrecer Alternativas:</strong> "We could try solution A or B." <span class="translation">(Podríamos probar la solución A o B)</span></li>
<li><strong>Disculparse:</strong> "I apologize for any inconvenience." <span class="translation">(Me disculpo por las molestias)</span></li>
<li><strong>Seguimiento:</strong> "We will follow up within [time]." <span class="translation">(Haremos seguimiento en [tiempo])</span></li>
<li><strong>Agradecimiento:</strong> "Thank you for bringing this to our attention." <span class="translation">(Gracias por informarnos)</span></li>
</ol>
<h4>Modelo R.E.S.O.L.V.E.</h4>
<ul>
<li><strong>R</strong> — Recognize <span class="translation">(Reconocer el problema)</span></li>
<li><strong>E</strong> — Empathize <span class="translation">(Empatizar con el cliente)</span></li>
<li><strong>S</strong> — Strategize <span class="translation">(Estrategar una solución)</span></li>
<li><strong>O</strong> — Own <span class="translation">(Asumir el problema)</span></li>
<li><strong>L</strong> — Learn <span class="translation">(Aprender y mejorar)</span></li>
<li><strong>V</strong> — Verify <span class="translation">(Verificar satisfacción del cliente)</span></li>
<li><strong>E</strong> — Evaluate <span class="translation">(Evaluar y adaptar)</span></li>
</ul>
</div>`
    },

    exercises: {
      en: `
<div class="card"><h3><i class="fa-solid fa-list-check"></i> Quiz: Pronouns</h3>
<p><strong>Q1:</strong> "The book, ___ is on the table, is mine." Which relative pronoun?</p>
<button class="quiz-option" onclick="checkQuiz(this,false,'u2q1')">A) who</button>
<button class="quiz-option" onclick="checkQuiz(this,true,'u2q1')">B) which</button>
<button class="quiz-option" onclick="checkQuiz(this,false,'u2q1')">C) whom</button>

<p class="mt-4"><strong>Q2:</strong> "My car is blue. ___ is red." Choose the possessive pronoun.</p>
<button class="quiz-option" onclick="checkQuiz(this,false,'u2q2')">A) Your</button>
<button class="quiz-option" onclick="checkQuiz(this,true,'u2q2')">B) Yours</button>

<p class="mt-4"><strong>Q3:</strong> "I hurt ___." (reflexive)</p>
<button class="quiz-option" onclick="checkQuiz(this,true,'u2q3')">A) myself</button>
<button class="quiz-option" onclick="checkQuiz(this,false,'u2q3')">B) me</button>
</div>

<div class="card"><h3><i class="fa-solid fa-list-check"></i> Quiz: Conditionals</h3>
<p><strong>Q4:</strong> Complete the 2nd Conditional: "If he studied more, he ___ better grades."</p>
<button class="quiz-option" onclick="checkQuiz(this,false,'u2q4')">A) will get</button>
<button class="quiz-option" onclick="checkQuiz(this,true,'u2q4')">B) would get</button>

<p class="mt-4"><strong>Q5:</strong> "If it rains tomorrow, we ___ stay at home." (1st Conditional)</p>
<button class="quiz-option" onclick="checkQuiz(this,true,'u2q5')">A) will</button>
<button class="quiz-option" onclick="checkQuiz(this,false,'u2q5')">B) would</button>
</div>

<div class="card"><h3><i class="fa-solid fa-list-check"></i> Quiz: Complaints</h3>
<p><strong>Q6:</strong> The 'E' in R.E.S.O.L.V.E. stands for:</p>
<button class="quiz-option" onclick="checkQuiz(this,true,'u2q6')">A) Empathize with the Customer</button>
<button class="quiz-option" onclick="checkQuiz(this,false,'u2q6')">B) Explain the problem</button>

<p class="mt-4"><strong>Q7:</strong> Which is an example of solution-oriented language?</p>
<button class="quiz-option" onclick="checkQuiz(this,false,'u2q7')">A) "That's not our responsibility."</button>
<button class="quiz-option" onclick="checkQuiz(this,true,'u2q7')">B) "Let's work together to resolve this issue."</button>
</div>

<div class="card"><h3><i class="fa-solid fa-pen-nib"></i> Fill in the Blanks</h3>
<p class="mt-3">1. The woman ___ bag was lost has found it. (relative pronoun for possession)</p>
<input class="fill-input" id="fill-u2-1" placeholder="..."> <button class="check-btn" onclick="checkFill('fill-u2-1','whose')">Check</button>
<div class="feedback-msg" id="fb-fill-u2-1"></div>

<p class="mt-3">2. If I won the lottery, I ___ travel around the world.</p>
<input class="fill-input" id="fill-u2-2" placeholder="..."> <button class="check-btn" onclick="checkFill('fill-u2-2','would')">Check</button>
<div class="feedback-msg" id="fb-fill-u2-2"></div>
</div>`,
      es: `
<div class="card"><h3><i class="fa-solid fa-list-check"></i> Quiz: Pronombres</h3>
<p><strong>P1:</strong> "The book, ___ is on the table, is mine." <span class="translation">(El libro, ___ está en la mesa, es mío)</span></p>
<button class="quiz-option" onclick="checkQuiz(this,false,'u2q1')">A) who <span class="translation">(personas)</span></button>
<button class="quiz-option" onclick="checkQuiz(this,true,'u2q1')">B) which <span class="translation">(cosas/animales ✓)</span></button>
<button class="quiz-option" onclick="checkQuiz(this,false,'u2q1')">C) whom <span class="translation">(personas como objeto)</span></button>

<p class="mt-4"><strong>P2:</strong> "My car is blue. ___ is red." <span class="translation">(Mi coche es azul. ___ es rojo)</span></p>
<button class="quiz-option" onclick="checkQuiz(this,false,'u2q2')">A) Your <span class="translation">(adjetivo posesivo, necesita sustantivo)</span></button>
<button class="quiz-option" onclick="checkQuiz(this,true,'u2q2')">B) Yours <span class="translation">(pronombre posesivo, va solo ✓)</span></button>

<p class="mt-4"><strong>P3:</strong> "I hurt ___." <span class="translation">(Me hice daño a mí ___)</span></p>
<button class="quiz-option" onclick="checkQuiz(this,true,'u2q3')">A) myself <span class="translation">(reflexivo ✓)</span></button>
<button class="quiz-option" onclick="checkQuiz(this,false,'u2q3')">B) me <span class="translation">(pronombre objeto)</span></button>
</div>

<div class="card"><h3><i class="fa-solid fa-list-check"></i> Quiz: Condicionales</h3>
<p><strong>P4:</strong> 2º Condicional: "If he studied more, he ___ better grades."</p>
<button class="quiz-option" onclick="checkQuiz(this,false,'u2q4')">A) will get <span class="translation">(1er condicional)</span></button>
<button class="quiz-option" onclick="checkQuiz(this,true,'u2q4')">B) would get <span class="translation">(2º condicional ✓)</span></button>

<p class="mt-4"><strong>P5:</strong> 1er Condicional: "If it rains tomorrow, we ___ stay at home."</p>
<button class="quiz-option" onclick="checkQuiz(this,true,'u2q5')">A) will <span class="translation">(1er condicional ✓)</span></button>
<button class="quiz-option" onclick="checkQuiz(this,false,'u2q5')">B) would <span class="translation">(2º condicional)</span></button>
</div>

<div class="card"><h3><i class="fa-solid fa-list-check"></i> Quiz: Quejas</h3>
<p><strong>P6:</strong> La 'E' inicial de R.E.S.O.L.V.E. significa:</p>
<button class="quiz-option" onclick="checkQuiz(this,true,'u2q6')">A) Empathize <span class="translation">(Empatizar con el cliente ✓)</span></button>
<button class="quiz-option" onclick="checkQuiz(this,false,'u2q6')">B) Explain <span class="translation">(Explicar)</span></button>

<p class="mt-4"><strong>P7:</strong> ¿Qué frase está orientada a soluciones?</p>
<button class="quiz-option" onclick="checkQuiz(this,false,'u2q7')">A) "That's not our responsibility." <span class="translation">(No es nuestra responsabilidad — no es constructivo)</span></button>
<button class="quiz-option" onclick="checkQuiz(this,true,'u2q7')">B) "Let's work together to resolve this." <span class="translation">(Trabajemos juntos para resolver esto ✓)</span></button>
</div>

<div class="card"><h3><i class="fa-solid fa-pen-nib"></i> Rellenar Huecos</h3>
<p class="mt-3">1. The woman ___ bag was lost has found it. <span class="translation">(pronombre relativo de posesión)</span></p>
<input class="fill-input" id="fill-u2-1" placeholder="..."> <button class="check-btn" onclick="checkFill('fill-u2-1','whose')">Comprobar</button>
<div class="feedback-msg" id="fb-fill-u2-1"></div>

<p class="mt-3">2. If I won the lottery, I ___ travel around the world.</p>
<input class="fill-input" id="fill-u2-2" placeholder="..."> <button class="check-btn" onclick="checkFill('fill-u2-2','would')">Comprobar</button>
<div class="feedback-msg" id="fb-fill-u2-2"></div>
</div>`
    },

    flashcards: {
      en: [
        ["Acknowledging","Recognizing, accepting"],
        ["Assurance","A guarantee"],
        ["Capabilities","Abilities, skills"],
        ["Delve","To investigate deeply"],
        ["Engagement","Involvement, commitment"],
        ["Feedback","Response, comments"],
        ["Foundation","Base, core"],
        ["Frustrating","Annoying, irritating"],
        ["Implications","Consequences"],
        ["Oversight","Supervision / a mistake"],
        ["Paraphrasing","Rephrasing in your own words"],
        ["Recap","To summarize"],
        ["Solution-Oriented","Focused on finding solutions"],
        ["Straightforward","Direct, easy to understand"],
        ["Stunning","Impressive, amazing"],
        ["Thoroughly","Completely, carefully"]
      ],
      es: [
        ["Acknowledging","Reconocer, aceptar"],
        ["Assurance","Garantía"],
        ["Capabilities","Capacidades, habilidades"],
        ["Delve","Indagar, investigar en profundidad"],
        ["Engagement","Compromiso, participación"],
        ["Feedback","Retroalimentación, comentarios"],
        ["Foundation","Fundamento, base"],
        ["Frustrating","Frustrante, irritante"],
        ["Implications","Implicaciones, consecuencias"],
        ["Oversight","Supervisión / un descuido"],
        ["Paraphrasing","Parafrasear (poner en tus propias palabras)"],
        ["Recap","Resumir, recapitular"],
        ["Solution-Oriented","Orientado a soluciones"],
        ["Straightforward","Directo, claro, fácil de entender"],
        ["Stunning","Impresionante, asombroso"],
        ["Thoroughly","Minuciosamente, a fondo"]
      ]
    }
  },

  // ─── UNIT 3 ───────────────────────────────────────────────────
  3: {
    nav: { en: "Unit 3: Modals & Tech Docs", es: "Unidad 3: Modales y Docs. Técnicos" },
    icon: "fa-solid fa-file-contract",
    theory: {
      en: `
<div class="card"><h3><i class="fa-solid fa-wand-magic-sparkles"></i> 1. Modal Verbs</h3>
<h4>CAN — ability, possibility, permission, request</h4>
<ul>
<li>Ability: <em>She can speak three languages.</em></li>
<li>Possibility: <em>It can rain later.</em></li>
<li>Permission: <em>Can I borrow your pen?</em></li>
<li>Request: <em>Can you help me?</em></li>
<li>Negative: <strong>can't</strong></li>
</ul>
<h4>COULD — polite/formal, past ability</h4>
<ul>
<li>Polite request: <em>Could you please pass the salt?</em></li>
<li>Past ability: <em>When I was younger, I could run very fast.</em></li>
<li>Negative: <strong>couldn't</strong></li>
</ul>
<h4>MAY — possibility, formal permission</h4>
<ul>
<li>Possibility: <em>It may rain tomorrow.</em></li>
<li>Permission: <em>May I come in?</em></li>
<li>Negative: <strong>may not</strong></li>
</ul>
<h4>MIGHT — lower probability</h4>
<ul><li><em>He might be at the party, but I'm not sure.</em></li><li>Negative: <strong>might not</strong></li></ul>
<h4>MUST — necessity, strong obligation, strong assumption</h4>
<ul>
<li>Necessity: <em>You must finish your homework.</em></li>
<li>Assumption: <em>The door is open, so he must be inside.</em></li>
<li>Negative: <strong>mustn't</strong></li>
</ul>
<h4>SHOULD — advice, suggestion, obligation</h4>
<ul>
<li>Advice: <em>You should see a doctor if the pain persists.</em></li>
<li>Obligation: <em>Students should attend all classes.</em></li>
<li>Negative: <strong>shouldn't</strong></li>
</ul>
</div>

<div class="card"><h3><i class="fa-solid fa-sitemap"></i> 2.1 Organization of Technical Texts</h3>
<ul>
<li><strong>Indices:</strong> Comprehensive list of topics + page numbers.</li>
<li><strong>Titles & Headings:</strong> Divide text into meaningful sections, show hierarchy.</li>
<li><strong>Tables:</strong> Organized sets of data for comparison and patterns.</li>
<li><strong>Outlines:</strong> Hierarchical overview of main topics and subtopics.</li>
<li><strong>Graphics:</strong> Charts, graphs, diagrams to visually represent info.</li>
</ul>
</div>

<div class="card"><h3><i class="fa-solid fa-file-lines"></i> 2.2 Types of Professional Documents</h3>
<ul>
<li><strong>Manuals:</strong> Detailed info on product/process operation and maintenance.</li>
<li><strong>Instructions:</strong> Step-by-step guidance for a specific task.</li>
<li><strong>Reports:</strong> Findings from research, analysis, or investigations.</li>
<li><strong>Safety Standards:</strong> Rules ensuring safety of individuals/equipment.</li>
<li><strong>Protocols:</strong> Standardized procedures (scientific/medical).</li>
<li><strong>Policies & Procedures:</strong> Guidelines for employee conduct.</li>
<li><strong>Contracts:</strong> Legal docs with terms and conditions between parties.</li>
</ul>
</div>

<div class="card"><h3><i class="fa-solid fa-magnifying-glass-arrow-right"></i> 2.3 Localization & Selection of Information</h3>
<h4>1. Quick Reading (Skimming)</h4>
<p>Rapid overview: glance at headings, first/last sentences. Get the overall theme without every detail.</p>
<h4>2. Focused Reading (Scanning)</h4>
<p>In-depth examination of specific sections to extract details, statistics, examples.</p>
<p class="mt-3"><strong>Benefits:</strong> Time efficiency, improved retention, enhanced comprehension.</p>
</div>

<div class="card"><h3><i class="fa-solid fa-book-reader"></i> 2.4 Comprehension & Text Analysis</h3>
<h4>3 Levels of Comprehension</h4>
<ul>
<li><strong>Literal:</strong> Surface-level meaning (who, what, when, where, why)</li>
<li><strong>Inferential:</strong> Drawing conclusions from implied details</li>
<li><strong>Evaluative:</strong> Forming opinions about validity, reliability, relevance</li>
</ul>
<h4>Detailed Analysis</h4>
<ul>
<li>Analyzing structure (intro, body, conclusion)</li>
<li>Identifying tone & style (formal vs informal)</li>
<li>Exploring language devices (metaphors, similes, symbolism)</li>
</ul>
<h4>Synthesis & Summary</h4>
<p>Combine info from different sources; condensing main ideas; paraphrasing vs. plagiarism.</p>
</div>

<div class="card"><h3><i class="fa-solid fa-laptop-code"></i> 2.5 Understanding Job Offers</h3>
<ul>
<li><strong>Position & Responsibilities:</strong> Role, day-to-day tasks, goals.</li>
<li><strong>Compensation Package:</strong> Salary, bonuses, benefits, perks.</li>
<li><strong>Work Schedule & Location:</strong> Hours, flexibility, remote options.</li>
<li><strong>Company Culture:</strong> Mission, values, work environment.</li>
<li><strong>Growth Opportunities:</strong> Training, mentorship, advancement.</li>
<li><strong>Job Security:</strong> Company reputation, contract terms.</li>
<li><strong>Benefits & Perks:</strong> Health, retirement, gym, flex hours.</li>
<li><strong>Negotiation:</strong> Know your worth, prioritize your needs.</li>
</ul>
</div>`,

      es: `
<div class="card"><h3><i class="fa-solid fa-wand-magic-sparkles"></i> 1. Verbos Modales</h3>
<h4>CAN — habilidad, posibilidad, permiso, petición</h4>
<ul>
<li>Habilidad: <em>She can speak three languages.</em> <span class="translation">(Sabe hablar 3 idiomas)</span></li>
<li>Posibilidad: <em>It can rain later.</em> <span class="translation">(Puede llover luego)</span></li>
<li>Permiso: <em>Can I borrow your pen?</em> <span class="translation">(¿Puedo usar tu bolígrafo?)</span></li>
<li>Negativo: <strong>can't</strong></li>
</ul>
<h4>COULD — más educado/formal, habilidad pasada</h4>
<ul>
<li>Petición educada: <em>Could you please pass the salt?</em> <span class="translation">(¿Podrías pasar la sal?)</span></li>
<li>Habilidad pasada: <em>I could run very fast.</em> <span class="translation">(Podía correr muy rápido)</span></li>
<li>Negativo: <strong>couldn't</strong></li>
</ul>
<h4>MAY — posibilidad, permiso formal</h4>
<ul>
<li><em>May I come in?</em> <span class="translation">(¿Puedo pasar?)</span></li>
<li>Negativo: <strong>may not</strong></li>
</ul>
<h4>MIGHT — probabilidad más baja</h4>
<ul><li><em>He might be at the party.</em> <span class="translation">(Puede que esté en la fiesta, no estoy seguro)</span></li></ul>
<h4>MUST — necesidad, obligación fuerte, suposición fuerte</h4>
<ul>
<li>Necesidad: <em>You must finish your homework.</em> <span class="translation">(Debes terminar tus deberes)</span></li>
<li>Suposición: <em>He must be inside.</em> <span class="translation">(Debe de estar dentro)</span></li>
<li>Negativo: <strong>mustn't</strong></li>
</ul>
<h4>SHOULD — consejo, sugerencia, obligación</h4>
<ul>
<li>Consejo: <em>You should see a doctor.</em> <span class="translation">(Deberías ver a un médico)</span></li>
<li>Negativo: <strong>shouldn't</strong></li>
</ul>
</div>

<div class="card"><h3><i class="fa-solid fa-sitemap"></i> 2.1 Organización de Textos Técnicos</h3>
<ul>
<li><strong>Índices:</strong> Lista de temas + números de página.</li>
<li><strong>Títulos y Encabezados:</strong> Dividen el texto en secciones con jerarquía.</li>
<li><strong>Tablas:</strong> Datos organizados para comparar y encontrar patrones.</li>
<li><strong>Esquemas (Outlines):</strong> Vista jerárquica de temas principales y subtemas.</li>
<li><strong>Gráficos:</strong> Tablas, gráficos, diagramas para representar info visualmente.</li>
</ul>
</div>

<div class="card"><h3><i class="fa-solid fa-file-lines"></i> 2.2 Tipos de Documentos Profesionales</h3>
<ul>
<li><strong>Manuales:</strong> Info detallada sobre operación y mantenimiento.</li>
<li><strong>Instrucciones:</strong> Guía paso a paso para una tarea concreta.</li>
<li><strong>Informes (Reports):</strong> Hallazgos de investigación o análisis.</li>
<li><strong>Normas de Seguridad:</strong> Reglas para proteger personas/equipos.</li>
<li><strong>Protocolos:</strong> Procedimientos estandarizados (ciencia/medicina).</li>
<li><strong>Políticas y Procedimientos:</strong> Directrices para empleados.</li>
<li><strong>Contratos:</strong> Documentos legales con términos y condiciones.</li>
</ul>
</div>

<div class="card"><h3><i class="fa-solid fa-magnifying-glass-arrow-right"></i> 2.3 Localización y Selección de Información</h3>
<h4>1. Lectura Rápida (Skimming)</h4>
<p>Vistazo rápido: encabezados, primera/última frase de párrafos. Captar el tema general sin cada detalle.</p>
<h4>2. Lectura Enfocada (Scanning)</h4>
<p>Examen en profundidad de secciones específicas para extraer detalles, estadísticas, ejemplos.</p>
<p class="mt-3"><strong>Beneficios:</strong> Eficiencia temporal, mejor retención, comprensión mejorada.</p>
</div>

<div class="card"><h3><i class="fa-solid fa-book-reader"></i> 2.4 Comprensión y Análisis de Textos</h3>
<h4>3 Niveles de Comprensión</h4>
<ul>
<li><strong>Literal:</strong> Significado superficial (quién, qué, cuándo, dónde, por qué)</li>
<li><strong>Inferencial:</strong> Sacar conclusiones de detalles implícitos</li>
<li><strong>Evaluativa:</strong> Formar opiniones sobre validez, fiabilidad, relevancia</li>
</ul>
<h4>Análisis Detallado</h4>
<ul>
<li>Analizar estructura (introducción, cuerpo, conclusión)</li>
<li>Identificar tono y estilo (formal vs informal)</li>
<li>Explorar recursos literarios (metáforas, símiles, simbolismo)</li>
</ul>
<h4>Síntesis y Resumen</h4>
<p>Combinar info de diferentes fuentes; condensar ideas principales; parafrasear vs. plagiar.</p>
<div class="example-box"><strong>Parafrasear:</strong> Reescribir en tus propias palabras con atribución.<br><strong>Plagiar:</strong> Copiar sin dar crédito. <span class="translation">(¡Nunca hagas esto!)</span></div>
</div>

<div class="card"><h3><i class="fa-solid fa-laptop-code"></i> 2.5 Entender Ofertas de Empleo</h3>
<ul>
<li><strong>Puesto y Responsabilidades:</strong> Rol, tareas diarias, objetivos.</li>
<li><strong>Paquete de Compensación:</strong> Salario, bonus, beneficios.</li>
<li><strong>Horario y Ubicación:</strong> Horas, flexibilidad, trabajo remoto.</li>
<li><strong>Cultura de Empresa:</strong> Misión, valores, ambiente laboral.</li>
<li><strong>Oportunidades de Crecimiento:</strong> Formación, mentoría, ascenso.</li>
<li><strong>Seguridad Laboral:</strong> Reputación de empresa, términos de contrato.</li>
<li><strong>Beneficios y Extras:</strong> Salud, jubilación, gimnasio, horario flexible.</li>
<li><strong>Negociación:</strong> Conoce tu valor, prioriza tus necesidades.</li>
</ul>
</div>`
    },

    exercises: {
      en: `
<div class="card"><h3><i class="fa-solid fa-list-check"></i> Quiz: Modal Verbs</h3>
<p><strong>Q1:</strong> Which modal expresses a strong obligation?</p>
<button class="quiz-option" onclick="checkQuiz(this,false,'u3q1')">A) May</button>
<button class="quiz-option" onclick="checkQuiz(this,true,'u3q1')">B) Must</button>
<button class="quiz-option" onclick="checkQuiz(this,false,'u3q1')">C) Should</button>

<p class="mt-4"><strong>Q2:</strong> "Could you please pass the salt?" — what does COULD express here?</p>
<button class="quiz-option" onclick="checkQuiz(this,true,'u3q2')">A) Polite request</button>
<button class="quiz-option" onclick="checkQuiz(this,false,'u3q2')">B) Past ability</button>

<p class="mt-4"><strong>Q3:</strong> "___ I come in?" (most formal)</p>
<button class="quiz-option" onclick="checkQuiz(this,false,'u3q3')">A) Can</button>
<button class="quiz-option" onclick="checkQuiz(this,true,'u3q3')">B) May</button>

<p class="mt-4"><strong>Q4:</strong> "You ___ see a doctor." (advice)</p>
<button class="quiz-option" onclick="checkQuiz(this,false,'u3q4')">A) must</button>
<button class="quiz-option" onclick="checkQuiz(this,true,'u3q4')">B) should</button>
</div>

<div class="card"><h3><i class="fa-solid fa-list-check"></i> Quiz: Technical Docs</h3>
<p><strong>Q5:</strong> Quick reading (Skimming) is best for:</p>
<button class="quiz-option" onclick="checkQuiz(this,true,'u3q5')">A) Grasping the overall theme quickly.</button>
<button class="quiz-option" onclick="checkQuiz(this,false,'u3q5')">B) Finding a specific statistic.</button>

<p class="mt-4"><strong>Q6:</strong> Which document provides step-by-step guidance for a task?</p>
<button class="quiz-option" onclick="checkQuiz(this,false,'u3q6')">A) Report</button>
<button class="quiz-option" onclick="checkQuiz(this,true,'u3q6')">B) Instructions</button>

<p class="mt-4"><strong>Q7:</strong> "Inferential Comprehension" means:</p>
<button class="quiz-option" onclick="checkQuiz(this,false,'u3q7')">A) Understanding the literal text.</button>
<button class="quiz-option" onclick="checkQuiz(this,true,'u3q7')">B) Drawing conclusions from implied details.</button>
</div>

<div class="card"><h3><i class="fa-solid fa-pen-nib"></i> Fill in the Blanks</h3>
<p class="mt-3">1. You ___ finish your homework before going out. (strong obligation)</p>
<input class="fill-input" id="fill-u3-1" placeholder="..."> <button class="check-btn" onclick="checkFill('fill-u3-1','must')">Check</button>
<div class="feedback-msg" id="fb-fill-u3-1"></div>

<p class="mt-3">2. He ___ be at the party, but I'm not sure. (low probability)</p>
<input class="fill-input" id="fill-u3-2" placeholder="..."> <button class="check-btn" onclick="checkFill('fill-u3-2','might')">Check</button>
<div class="feedback-msg" id="fb-fill-u3-2"></div>
</div>`,
      es: `
<div class="card"><h3><i class="fa-solid fa-list-check"></i> Quiz: Verbos Modales</h3>
<p><strong>P1:</strong> ¿Qué modal expresa una obligación fuerte?</p>
<button class="quiz-option" onclick="checkQuiz(this,false,'u3q1')">A) May <span class="translation">(posibilidad/permiso)</span></button>
<button class="quiz-option" onclick="checkQuiz(this,true,'u3q1')">B) Must <span class="translation">(necesidad/obligación fuerte ✓)</span></button>
<button class="quiz-option" onclick="checkQuiz(this,false,'u3q1')">C) Should <span class="translation">(consejo/sugerencia)</span></button>

<p class="mt-4"><strong>P2:</strong> "Could you please pass the salt?" — ¿qué expresa COULD aquí?</p>
<button class="quiz-option" onclick="checkQuiz(this,true,'u3q2')">A) Petición educada <span class="translation">(Polite request ✓)</span></button>
<button class="quiz-option" onclick="checkQuiz(this,false,'u3q2')">B) Habilidad pasada</button>

<p class="mt-4"><strong>P3:</strong> "___ I come in?" <span class="translation">(la forma más formal)</span></p>
<button class="quiz-option" onclick="checkQuiz(this,false,'u3q3')">A) Can <span class="translation">(informal)</span></button>
<button class="quiz-option" onclick="checkQuiz(this,true,'u3q3')">B) May <span class="translation">(formal ✓)</span></button>

<p class="mt-4"><strong>P4:</strong> "You ___ see a doctor." <span class="translation">(consejo)</span></p>
<button class="quiz-option" onclick="checkQuiz(this,false,'u3q4')">A) must <span class="translation">(obligación)</span></button>
<button class="quiz-option" onclick="checkQuiz(this,true,'u3q4')">B) should <span class="translation">(consejo ✓)</span></button>
</div>

<div class="card"><h3><i class="fa-solid fa-list-check"></i> Quiz: Documentos Técnicos</h3>
<p><strong>P5:</strong> La lectura rápida (Skimming) es mejor para:</p>
<button class="quiz-option" onclick="checkQuiz(this,true,'u3q5')">A) Captar el tema general rápidamente. ✓</button>
<button class="quiz-option" onclick="checkQuiz(this,false,'u3q5')">B) Encontrar una estadística específica. <span class="translation">(eso es Scanning)</span></button>

<p class="mt-4"><strong>P6:</strong> ¿Qué documento da guía paso a paso?</p>
<button class="quiz-option" onclick="checkQuiz(this,false,'u3q6')">A) Report <span class="translation">(Informe)</span></button>
<button class="quiz-option" onclick="checkQuiz(this,true,'u3q6')">B) Instructions <span class="translation">(Instrucciones ✓)</span></button>

<p class="mt-4"><strong>P7:</strong> "Comprensión Inferencial" significa:</p>
<button class="quiz-option" onclick="checkQuiz(this,false,'u3q7')">A) Entender el texto literal.</button>
<button class="quiz-option" onclick="checkQuiz(this,true,'u3q7')">B) Sacar conclusiones de detalles implícitos. ✓</button>
</div>

<div class="card"><h3><i class="fa-solid fa-pen-nib"></i> Rellenar Huecos</h3>
<p class="mt-3">1. You ___ finish your homework. <span class="translation">(obligación fuerte)</span></p>
<input class="fill-input" id="fill-u3-1" placeholder="..."> <button class="check-btn" onclick="checkFill('fill-u3-1','must')">Comprobar</button>
<div class="feedback-msg" id="fb-fill-u3-1"></div>

<p class="mt-3">2. He ___ be at the party, but I'm not sure. <span class="translation">(probabilidad baja)</span></p>
<input class="fill-input" id="fill-u3-2" placeholder="..."> <button class="check-btn" onclick="checkFill('fill-u3-2','might')">Comprobar</button>
<div class="feedback-msg" id="fb-fill-u3-2"></div>
</div>`
    },

    flashcards: {
      en: [
        ["Additional Perks","Extra benefits beyond salary"],
        ["Compensation Package","Total pay + benefits"],
        ["Inferential Comprehension","Understanding implied meaning"],
        ["Know Your Worth","Understand your value in the market"],
        ["Multitasking","Doing multiple tasks at once"],
        ["Outlines","Hierarchical summary of text structure"],
        ["Reports","Documents with findings from research"],
        ["Troubleshooting","Solving problems / fixing issues"],
        ["Safety Standards","Rules to ensure safety"],
        ["Retirement Plans","Savings plans for after career"],
        ["Work Schedule","Your working hours plan"],
        ["Settings","Configuration options"]
      ],
      es: [
        ["Additional Perks","Ventajas adicionales más allá del salario"],
        ["Compensation Package","Paquete de compensación (salario + beneficios)"],
        ["Inferential Comprehension","Comprensión inferencial (entender lo implícito)"],
        ["Know Your Worth","Conoce tu valor (en el mercado laboral)"],
        ["Multitasking","Multitarea (hacer varias tareas a la vez)"],
        ["Outlines","Esquemas (resumen jerárquico de estructura)"],
        ["Reports","Informes (documentos con hallazgos)"],
        ["Troubleshooting","Resolución de problemas"],
        ["Safety Standards","Normas de seguridad"],
        ["Retirement Plans","Planes de jubilación"],
        ["Work Schedule","Horario de trabajo"],
        ["Settings","Configuración, ajustes"]
      ]
    }
  },

  // ─── UNIT 4 ───────────────────────────────────────────────────
  4: {
    nav: { en: "Unit 4: Future & Job Docs", es: "Unidad 4: Futuro y Empleo" },
    icon: "fa-solid fa-briefcase",
    theory: {
      en: `
<div class="card"><h3><i class="fa-solid fa-calendar-days"></i> 1. Future Tenses</h3>
<h4>WILL — predictions, promises, offers</h4>
<p>Structure: Subject + <strong>will</strong> + base verb &nbsp;|&nbsp; Negative: <strong>won't</strong></p>
<ul>
<li>Prediction: <em>In five years the president will be a woman.</em></li>
<li>Promise: <em>I will help you with your homework.</em></li>
<li>Offer: <em>Will you come to the party?</em></li>
</ul>
<h4>BE GOING TO — intentions/plans based on evidence</h4>
<p>Structure: Subject + am/is/are + <strong>going to</strong> + base verb</p>
<ul>
<li>Intention: <em>I am going to study Law.</em></li>
<li>Prediction with evidence: <em>It's going to be a great movie.</em></li>
</ul>
<h4>PRESENT SIMPLE (as future) — scheduled events</h4>
<div class="example-box"><em>The train leaves at 9 am tomorrow.</em> (timetable/schedule)</div>
<h4>PRESENT CONTINUOUS (as future) — arrangements/plans</h4>
<div class="example-box"><em>We are meeting for lunch at 12 PM.</em> (arranged, immediate)</div>
<h4>⚡ BE GOING TO vs PRESENT CONTINUOUS</h4>
<p><strong>Be going to:</strong> intentions (could be cancelled) → <em>I am going to start a new project.</em></p>
<p><strong>Present continuous:</strong> fixed arrangements (already scheduled) → <em>We are meeting for dinner at 7 PM.</em> (we have a reservation)</p>
<div class="example-box">⚠️ In many cases they are <strong>interchangeable</strong> without significant meaning change.</div>
</div>

<div class="card"><h3><i class="fa-solid fa-file-signature"></i> 2.1 Documents for Job Placement</h3>
<h4>CURRICULUM VITAE (CV)</h4>
<ul>
<li><strong>Contact Info:</strong> Name, phone, email, LinkedIn</li>
<li><strong>Objective/Summary:</strong> Brief career goals statement</li>
<li><strong>Education:</strong> In reverse chronological order</li>
<li><strong>Work Experience:</strong> Achievements + responsibilities</li>
<li><strong>Skills:</strong> Technical and soft skills</li>
<li><strong>Achievements & Awards</strong></li>
<li><strong>References:</strong> Optional or "available upon request"</li>
</ul>
<div class="example-box"><strong>Objective example:</strong> "Dedicated marketing professional with 5+ years of experience, seeking a challenging role to leverage creativity."</div>
<h4>COVER LETTER</h4>
<ul>
<li><strong>Contact Info + Date</strong></li>
<li><strong>Salutation:</strong> "Dear Mr./Mrs. [Name],"</li>
<li><strong>Introduction:</strong> State the position + how you learned about it</li>
<li><strong>Body:</strong> Highlight skills + how they align with the job</li>
<li><strong>Closing:</strong> Gratitude + call to action + sign off</li>
</ul>
<div class="example-box"><strong>Intro:</strong> "I am writing to express my interest in the Marketing Manager position."<br><strong>Closing:</strong> "Thank you for considering my application. I look forward to discussing how my skills align with your needs."</div>
<h4>JOB APPLICATION RESPONSE</h4>
<ul>
<li>Express gratitude: "Thank you for offering me the position…"</li>
<li>Confirm acceptance + show enthusiasm</li>
<li>Provide details (start date, docs)</li>
<li>Reiterate appreciation</li>
</ul>
</div>

<div class="card"><h3><i class="fa-solid fa-envelope"></i> 2.2 Email Etiquette</h3>
<h4>Courtesy Formulas</h4>
<ul>
<li><strong>Salutation:</strong> "Dear Mr./Mrs./Ms. Smith," or "Dear [Name],"</li>
<li><strong>Gratitude:</strong> "Thank you for your prompt response."</li>
<li><strong>Polite Requests:</strong> "Could you please provide more details about…"</li>
<li><strong>Closing:</strong> "Best regards," / "Sincerely,"</li>
</ul>
<h4>Formality Rules</h4>
<ul>
<li>Use formal language: "I am writing to inquire about…"</li>
<li>Avoid informal expressions ("Hey", emojis, abbreviations)</li>
<li>Be clear and concise</li>
</ul>
<h4>Other Telematic Communication</h4>
<p><strong>Fax:</strong> Sends documents over telephone lines (scanned → signals → printed).</p>
<p><strong>Telex:</strong> Old electronic text messaging over phone lines (replaced by email).</p>
<p><strong>Telegram:</strong> Messages in Morse code over telegraph wires (rarely used now).</p>
</div>

<div class="card"><h3><i class="fa-solid fa-building"></i> 2.3 Professional Job Terminology</h3>
<ul>
<li><strong>Job Posting:</strong> Public announcement of an open position</li>
<li><strong>Resume:</strong> Concise document summarizing qualifications</li>
<li><strong>Interview:</strong> Formal discussion to assess suitability</li>
<li><strong>HR:</strong> Human Resources — manages personnel & recruitment</li>
<li><strong>Onboarding:</strong> Integrating a new employee into the workplace</li>
<li><strong>Reference Check:</strong> Verifying qualifications with previous employers</li>
<li><strong>Recruitment Agency:</strong> Company that finds candidates for jobs</li>
<li><strong>Job Board:</strong> Online platform for posting/applying to jobs</li>
<li><strong>Salary Negotiation:</strong> Discussing and agreeing on compensation</li>
<li><strong>Job Fair:</strong> Event where employers and seekers meet</li>
<li><strong>Layoff:</strong> Termination due to organizational changes</li>
<li><strong>Workforce Planning:</strong> Strategic planning for right talent</li>
<li><strong>Retention:</strong> Keeping employees engaged</li>
<li><strong>Job Description:</strong> Detailed outline of duties & qualifications</li>
<li><strong>Background Check:</strong> Investigating candidate's history</li>
<li><strong>Contract-to-Hire:</strong> Temporary with possibility of permanent</li>
<li><strong>Remote Work:</strong> Working from locations other than the office</li>
</ul>
</div>`,

      es: `
<div class="card"><h3><i class="fa-solid fa-calendar-days"></i> 1. Tiempos Futuros</h3>
<h4>WILL — predicciones, promesas, ofertas</h4>
<p>Estructura: Sujeto + <strong>will</strong> + verbo base &nbsp;|&nbsp; Negativo: <strong>won't</strong></p>
<ul>
<li>Predicción: <em>The president will be a woman.</em> <span class="translation">(La presidenta será una mujer)</span></li>
<li>Promesa: <em>I will help you.</em> <span class="translation">(Te ayudaré)</span></li>
<li>Oferta: <em>Will you come to the party?</em> <span class="translation">(¿Vendrás a la fiesta?)</span></li>
</ul>
<h4>BE GOING TO — intenciones/planes basados en evidencia</h4>
<p>Estructura: Sujeto + am/is/are + <strong>going to</strong> + verbo base</p>
<ul>
<li>Intención: <em>I am going to study Law.</em> <span class="translation">(Voy a estudiar Derecho)</span></li>
<li>Predicción con evidencia: <em>It's going to rain.</em> <span class="translation">(Va a llover — veo nubes negras)</span></li>
</ul>
<h4>PRESENTE SIMPLE (como futuro) — eventos programados</h4>
<div class="example-box"><em>The train leaves at 9 am.</em> <span class="translation">(El tren sale a las 9 — horario fijo)</span></div>
<h4>PRESENTE CONTINUO (como futuro) — acuerdos/planes fijos</h4>
<div class="example-box"><em>We are meeting for lunch at 12 PM.</em> <span class="translation">(Quedamos para almorzar a las 12 — ya está acordado)</span></div>
<h4>⚡ BE GOING TO vs PRESENTE CONTINUO</h4>
<p><strong>Be going to:</strong> intenciones (podrían cancelarse) → <em>I am going to start a project.</em></p>
<p><strong>Presente continuo:</strong> acuerdos fijos (ya programados) → <em>We are meeting at 7 PM.</em> <span class="translation">(tenemos reserva)</span></p>
<div class="example-box">⚠️ En muchos casos son <strong>intercambiables</strong> sin cambio significativo de significado.</div>
</div>

<div class="card"><h3><i class="fa-solid fa-file-signature"></i> 2.1 Documentos para Búsqueda de Empleo</h3>
<h4>CURRICULUM VITAE (CV)</h4>
<ul>
<li><strong>Datos de contacto:</strong> Nombre, teléfono, email, LinkedIn</li>
<li><strong>Objetivo/Resumen:</strong> Declaración breve de metas profesionales</li>
<li><strong>Educación:</strong> En orden cronológico inverso</li>
<li><strong>Experiencia Laboral:</strong> Logros + responsabilidades</li>
<li><strong>Habilidades:</strong> Técnicas y blandas (soft skills)</li>
<li><strong>Logros y Premios</strong></li>
<li><strong>Referencias:</strong> Opcional o "disponibles bajo petición"</li>
</ul>
<h4>COVER LETTER <span class="translation">(Carta de Presentación)</span></h4>
<ul>
<li><strong>Saludo:</strong> "Dear Mr./Mrs. [Nombre],"</li>
<li><strong>Introducción:</strong> Indicar puesto + cómo te enteraste</li>
<li><strong>Cuerpo:</strong> Destacar habilidades + cómo encajan con el puesto</li>
<li><strong>Cierre:</strong> Agradecimiento + llamada a la acción + despedida</li>
</ul>
<div class="example-box"><strong>Intro:</strong> "I am writing to express my interest in…" <span class="translation">(Escribo para expresar mi interés en…)</span><br><strong>Cierre:</strong> "Thank you for considering my application." <span class="translation">(Gracias por considerar mi solicitud)</span></div>
<h4>JOB APPLICATION RESPONSE <span class="translation">(Respuesta a Oferta de Empleo)</span></h4>
<ul>
<li>Expresar gratitud: "Thank you for offering me the position…" <span class="translation">(Gracias por ofrecerme el puesto…)</span></li>
<li>Confirmar aceptación + mostrar entusiasmo</li>
<li>Dar detalles (fecha inicio, documentos)</li>
<li>Reiterar agradecimiento</li>
</ul>
</div>

<div class="card"><h3><i class="fa-solid fa-envelope"></i> 2.2 Etiqueta de Email</h3>
<h4>Fórmulas de Cortesía</h4>
<ul>
<li><strong>Saludo:</strong> "Dear Mr./Mrs. Smith," <span class="translation">(Estimado/a Sr./Sra. Smith)</span></li>
<li><strong>Gratitud:</strong> "Thank you for your prompt response." <span class="translation">(Gracias por su pronta respuesta)</span></li>
<li><strong>Peticiones Educadas:</strong> "Could you please provide more details?" <span class="translation">(¿Podría proporcionar más detalles?)</span></li>
<li><strong>Despedida:</strong> "Best regards," / "Sincerely," <span class="translation">(Atentamente / Cordialmente)</span></li>
</ul>
<h4>Reglas de Formalidad</h4>
<ul>
<li>Usar lenguaje formal: "I am writing to inquire about…" <span class="translation">(Escribo para preguntar sobre…)</span></li>
<li>Evitar expresiones informales ("Hey", emojis, abreviaturas)</li>
<li>Ser claro y conciso</li>
</ul>
<h4>Otros medios telemáticos</h4>
<p><strong>Fax:</strong> Envía documentos por línea telefónica (escanea → señales → imprime).</p>
<p><strong>Telex:</strong> Mensajes de texto electrónicos antiguos por línea telefónica (reemplazado por email).</p>
<p><strong>Telegrama:</strong> Mensajes en código Morse por cables telegráficos (casi en desuso).</p>
</div>

<div class="card"><h3><i class="fa-solid fa-building"></i> 2.3 Terminología Profesional de Empleo</h3>
<ul>
<li><strong>Job Posting:</strong> Anuncio público de puesto vacante <span class="translation">(Oferta de empleo)</span></li>
<li><strong>Resume:</strong> Documento conciso con cualificaciones <span class="translation">(Currículum)</span></li>
<li><strong>Interview:</strong> Discusión formal para evaluar idoneidad <span class="translation">(Entrevista)</span></li>
<li><strong>HR:</strong> Human Resources <span class="translation">(Recursos Humanos)</span></li>
<li><strong>Onboarding:</strong> Integrar nuevo empleado <span class="translation">(Incorporación)</span></li>
<li><strong>Reference Check:</strong> Verificar cualificaciones <span class="translation">(Verificación de referencias)</span></li>
<li><strong>Recruitment Agency:</strong> Empresa que busca candidatos <span class="translation">(Agencia de empleo)</span></li>
<li><strong>Job Board:</strong> Plataforma online de empleo <span class="translation">(Portal de empleo)</span></li>
<li><strong>Salary Negotiation:</strong> Negociación salarial</li>
<li><strong>Job Fair:</strong> Evento de empleo <span class="translation">(Feria de empleo)</span></li>
<li><strong>Layoff:</strong> Despido por reestructuración</li>
<li><strong>Retention:</strong> Retención de empleados</li>
<li><strong>Job Description:</strong> Descripción del puesto</li>
<li><strong>Background Check:</strong> Verificación de antecedentes</li>
<li><strong>Contract-to-Hire:</strong> Contrato temporal con posibilidad de permanente</li>
<li><strong>Remote Work:</strong> Teletrabajo</li>
</ul>
</div>`
    },

    exercises: {
      en: `
<div class="card"><h3><i class="fa-solid fa-list-check"></i> Quiz: Future Tenses</h3>
<p><strong>Q1:</strong> A prediction based on clear present evidence uses:</p>
<button class="quiz-option" onclick="checkQuiz(this,false,'u4q1')">A) Will</button>
<button class="quiz-option" onclick="checkQuiz(this,true,'u4q1')">B) Be going to</button>

<p class="mt-4"><strong>Q2:</strong> "The train ___ at 9 am tomorrow." (scheduled event)</p>
<button class="quiz-option" onclick="checkQuiz(this,true,'u4q2')">A) leaves (Present Simple)</button>
<button class="quiz-option" onclick="checkQuiz(this,false,'u4q2')">B) will leave</button>

<p class="mt-4"><strong>Q3:</strong> "We ___ for dinner at 7 PM." (fixed arrangement, we have a reservation)</p>
<button class="quiz-option" onclick="checkQuiz(this,true,'u4q3')">A) are meeting (Present Continuous)</button>
<button class="quiz-option" onclick="checkQuiz(this,false,'u4q3')">B) meet</button>

<p class="mt-4"><strong>Q4:</strong> "I ___ help you." (promise)</p>
<button class="quiz-option" onclick="checkQuiz(this,true,'u4q4')">A) will</button>
<button class="quiz-option" onclick="checkQuiz(this,false,'u4q4')">B) am going to</button>
</div>

<div class="card"><h3><i class="fa-solid fa-list-check"></i> Quiz: Job Documents & Email</h3>
<p><strong>Q5:</strong> A cover letter should include:</p>
<button class="quiz-option" onclick="checkQuiz(this,true,'u4q5')">A) Salutation, Introduction, Body, Closing</button>
<button class="quiz-option" onclick="checkQuiz(this,false,'u4q5')">B) Only your Contact Info and Skills</button>

<p class="mt-4"><strong>Q6:</strong> Which is a formal way to start an email?</p>
<button class="quiz-option" onclick="checkQuiz(this,false,'u4q6')">A) "Hey, what's up?"</button>
<button class="quiz-option" onclick="checkQuiz(this,true,'u4q6')">B) "Dear Mr. Smith,"</button>

<p class="mt-4"><strong>Q7:</strong> "Onboarding" means:</p>
<button class="quiz-option" onclick="checkQuiz(this,true,'u4q7')">A) Integrating a new employee into the workplace.</button>
<button class="quiz-option" onclick="checkQuiz(this,false,'u4q7')">B) Firing an employee.</button>

<p class="mt-4"><strong>Q8:</strong> What is a "Contract-to-Hire"?</p>
<button class="quiz-option" onclick="checkQuiz(this,false,'u4q8')">A) A permanent contract from day one.</button>
<button class="quiz-option" onclick="checkQuiz(this,true,'u4q8')">B) Temporary employment with possibility of becoming permanent.</button>
</div>

<div class="card"><h3><i class="fa-solid fa-pen-nib"></i> Fill in the Blanks</h3>
<p class="mt-3">1. I am ___ to study Law. (intention with "going")</p>
<input class="fill-input" id="fill-u4-1" placeholder="..."> <button class="check-btn" onclick="checkFill('fill-u4-1','going')">Check</button>
<div class="feedback-msg" id="fb-fill-u4-1"></div>

<p class="mt-3">2. She is ___ to London next week. (fixed arrangement, present continuous of "fly")</p>
<input class="fill-input" id="fill-u4-2" placeholder="..."> <button class="check-btn" onclick="checkFill('fill-u4-2','flying')">Check</button>
<div class="feedback-msg" id="fb-fill-u4-2"></div>

<p class="mt-3">3. I ___ help you with your homework. (promise)</p>
<input class="fill-input" id="fill-u4-3" placeholder="..."> <button class="check-btn" onclick="checkFill('fill-u4-3','will')">Check</button>
<div class="feedback-msg" id="fb-fill-u4-3"></div>
</div>`,
      es: `
<div class="card"><h3><i class="fa-solid fa-list-check"></i> Quiz: Tiempos Futuros</h3>
<p><strong>P1:</strong> Una predicción basada en evidencia presente clara usa:</p>
<button class="quiz-option" onclick="checkQuiz(this,false,'u4q1')">A) Will <span class="translation">(opinión/intuición)</span></button>
<button class="quiz-option" onclick="checkQuiz(this,true,'u4q1')">B) Be going to <span class="translation">(evidencia presente ✓)</span></button>

<p class="mt-4"><strong>P2:</strong> "The train ___ at 9 am tomorrow." <span class="translation">(evento programado)</span></p>
<button class="quiz-option" onclick="checkQuiz(this,true,'u4q2')">A) leaves (Presente Simple) ✓</button>
<button class="quiz-option" onclick="checkQuiz(this,false,'u4q2')">B) will leave</button>

<p class="mt-4"><strong>P3:</strong> "We ___ for dinner at 7 PM." <span class="translation">(acuerdo fijo, tenemos reserva)</span></p>
<button class="quiz-option" onclick="checkQuiz(this,true,'u4q3')">A) are meeting (Presente Continuo) ✓</button>
<button class="quiz-option" onclick="checkQuiz(this,false,'u4q3')">B) meet</button>

<p class="mt-4"><strong>P4:</strong> "I ___ help you." <span class="translation">(promesa)</span></p>
<button class="quiz-option" onclick="checkQuiz(this,true,'u4q4')">A) will <span class="translation">(promesa ✓)</span></button>
<button class="quiz-option" onclick="checkQuiz(this,false,'u4q4')">B) am going to</button>
</div>

<div class="card"><h3><i class="fa-solid fa-list-check"></i> Quiz: Documentos de Empleo y Email</h3>
<p><strong>P5:</strong> Una carta de presentación debe incluir:</p>
<button class="quiz-option" onclick="checkQuiz(this,true,'u4q5')">A) Saludo, Introducción, Cuerpo, Cierre ✓</button>
<button class="quiz-option" onclick="checkQuiz(this,false,'u4q5')">B) Solo info de contacto y habilidades</button>

<p class="mt-4"><strong>P6:</strong> ¿Cuál es la forma formal de iniciar un email?</p>
<button class="quiz-option" onclick="checkQuiz(this,false,'u4q6')">A) "Hey, what's up?" <span class="translation">(demasiado informal)</span></button>
<button class="quiz-option" onclick="checkQuiz(this,true,'u4q6')">B) "Dear Mr. Smith," <span class="translation">(Estimado Sr. Smith ✓)</span></button>

<p class="mt-4"><strong>P7:</strong> "Onboarding" significa:</p>
<button class="quiz-option" onclick="checkQuiz(this,true,'u4q7')">A) Integrar a un nuevo empleado. <span class="translation">(Incorporación ✓)</span></button>
<button class="quiz-option" onclick="checkQuiz(this,false,'u4q7')">B) Despedir a un empleado.</button>

<p class="mt-4"><strong>P8:</strong> ¿Qué es un "Contract-to-Hire"?</p>
<button class="quiz-option" onclick="checkQuiz(this,false,'u4q8')">A) Un contrato permanente desde el día uno.</button>
<button class="quiz-option" onclick="checkQuiz(this,true,'u4q8')">B) Contrato temporal con posibilidad de convertirse en permanente. ✓</button>
</div>

<div class="card"><h3><i class="fa-solid fa-pen-nib"></i> Rellenar Huecos</h3>
<p class="mt-3">1. I am ___ to study Law. <span class="translation">(intención con "going")</span></p>
<input class="fill-input" id="fill-u4-1" placeholder="..."> <button class="check-btn" onclick="checkFill('fill-u4-1','going')">Comprobar</button>
<div class="feedback-msg" id="fb-fill-u4-1"></div>

<p class="mt-3">2. She is ___ to London next week. <span class="translation">(acuerdo fijo, presente continuo de "fly")</span></p>
<input class="fill-input" id="fill-u4-2" placeholder="..."> <button class="check-btn" onclick="checkFill('fill-u4-2','flying')">Comprobar</button>
<div class="feedback-msg" id="fb-fill-u4-2"></div>

<p class="mt-3">3. I ___ help you with your homework. <span class="translation">(promesa)</span></p>
<input class="fill-input" id="fill-u4-3" placeholder="..."> <button class="check-btn" onclick="checkFill('fill-u4-3','will')">Comprobar</button>
<div class="feedback-msg" id="fb-fill-u4-3"></div>
</div>`
    },

    flashcards: {
      en: [
        ["Abbreviations","Short forms of words"],
        ["Campaign management","Planning and running marketing campaigns"],
        ["Colleague","A coworker"],
        ["Concise","Short and clear"],
        ["Correspondence","Written communication (letters, emails)"],
        ["Enthusiasm","Strong excitement or passion"],
        ["Expression of interest","A formal statement of wanting a job"],
        ["Follow up","To check on progress after initial contact"],
        ["Proposal","A formal plan or suggestion"],
        ["Requirements","What is needed or demanded"],
        ["Retention","Keeping employees in the company"],
        ["Strategic planning","Long-term planning for goals"],
        ["Tailor","To customize for specific needs"],
        ["Track record","Past history of achievements"],
        ["Job Posting","Public announcement of a job opening"],
        ["Onboarding","Process of integrating a new hire"],
        ["Layoff","Termination due to company changes"],
        ["Remote Work","Working from outside the office"]
      ],
      es: [
        ["Abbreviations","Abreviaturas (formas cortas)"],
        ["Campaign management","Gestión de campañas (de marketing)"],
        ["Colleague","Colega de trabajo"],
        ["Concise","Conciso (corto y claro)"],
        ["Correspondence","Correspondencia (cartas, emails)"],
        ["Enthusiasm","Entusiasmo (pasión)"],
        ["Expression of interest","Expresión de interés (por un puesto)"],
        ["Follow up","Seguimiento (comprobar progreso)"],
        ["Proposal","Propuesta (plan formal)"],
        ["Requirements","Requisitos (lo que se necesita)"],
        ["Retention","Retención (mantener empleados)"],
        ["Strategic planning","Planificación estratégica"],
        ["Tailor","Adaptar (personalizar)"],
        ["Track record","Historial (de logros)"],
        ["Job Posting","Oferta de empleo (anuncio público)"],
        ["Onboarding","Incorporación (integrar nuevo empleado)"],
        ["Layoff","Despido (por reestructuración)"],
        ["Remote Work","Teletrabajo (trabajar fuera de la oficina)"]
      ]
    }
  }
};
