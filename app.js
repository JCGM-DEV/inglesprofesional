// ═══════════════════════════════════════════════════════════════
// app.js — Main application logic (no template literals issues)
// ═══════════════════════════════════════════════════════════════

let currentLang = 'es'; // Start in Spanish for the user
let currentUnit = 1;
let currentTab = 'theory';
let answeredQuestions = {};

// ──── DOM References ────
const navLinksContainer = document.getElementById('nav-links');
const contentArea = document.getElementById('content-area');
const headerTitle = document.getElementById('header-title');
const headerDesc = document.getElementById('header-desc');
const langToggle = document.getElementById('lang-toggle');
const langLabel = document.getElementById('lang-label');
const tabsContainer = document.getElementById('tabs-container');
const progressBar = document.getElementById('global-progress');
const progressText = document.getElementById('progress-text');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const sidebar = document.getElementById('sidebar');

// ──── Initialize ────
function init() {
    renderNav();
    bindNavClicks();
    bindTabClicks();
    loadUnit(1);
    updateLangButton();
}

// ──── Render sidebar nav ────
function renderNav() {
    var html = '';
    for (var id in UNITS) {
        var u = UNITS[id];
        var activeClass = (parseInt(id) === currentUnit) ? ' class="active"' : '';
        html += '<li' + activeClass + ' data-unit="' + id + '"><i class="' + u.icon + '"></i> <span>' + u.nav[currentLang] + '</span></li>';
    }
    navLinksContainer.innerHTML = html;
    bindNavClicks();
}

// ──── Bind nav clicks ────
function bindNavClicks() {
    var items = navLinksContainer.querySelectorAll('li');
    items.forEach(function(item) {
        item.addEventListener('click', function() {
            loadUnit(parseInt(this.getAttribute('data-unit')));
            // Close mobile sidebar
            sidebar.classList.remove('open');
        });
    });
}

// ──── Bind tab clicks ────
function bindTabClicks() {
    var tabs = tabsContainer.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            currentTab = this.getAttribute('data-tab');
            tabs.forEach(function(t) { t.classList.remove('active'); });
            this.classList.add('active');
            renderContent();
        });
    });
}

// ──── Load a unit ────
function loadUnit(unitId) {
    currentUnit = unitId;
    renderNav();
    updateHeader();
    renderContent();
    updateProgress();
}

// ──── Update header ────
function updateHeader() {
    if (currentLang === 'es') {
        headerTitle.textContent = '¡Bienvenido a Tech English Mastery!';
        headerDesc.textContent = 'Tu plataforma interactiva para dominar el inglés profesional en el sector IT.';
    } else {
        headerTitle.textContent = 'Welcome to Tech English Mastery!';
        headerDesc.textContent = 'Your interactive journey to professional English in the IT sector.';
    }

    // Update tab labels
    var tabLabels = {
        theory: { en: 'Theory', es: 'Teoría' },
        exercises: { en: 'Exercises', es: 'Ejercicios' },
        flashcards: { en: 'Flashcards', es: 'Tarjetas' }
    };
    var tabs = tabsContainer.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
        var key = tab.getAttribute('data-tab');
        var icon = tab.querySelector('i');
        var iconHtml = icon ? icon.outerHTML + ' ' : '';
        tab.innerHTML = iconHtml + tabLabels[key][currentLang];
    });
}

// ──── Render content area ────
function renderContent() {
    var unit = UNITS[currentUnit];
    if (!unit) return;

    if (currentTab === 'theory') {
        contentArea.innerHTML = unit.theory[currentLang];
    } else if (currentTab === 'exercises') {
        contentArea.innerHTML = unit.exercises[currentLang];
    } else if (currentTab === 'flashcards') {
        renderFlashcards(unit.flashcards[currentLang]);
    }

    // Fade-in animation
    contentArea.style.animation = 'none';
    contentArea.offsetHeight; // trigger reflow
    contentArea.style.animation = 'fadeIn 0.4s ease';
}

// ──── Flashcards ────
function renderFlashcards(cards) {
    var title = currentLang === 'es' ? 'Vocabulario — Haz clic en cada tarjeta para ver la traducción' : 'Vocabulary — Click each card to flip it';
    var html = '<div class="card"><h3><i class="fa-solid fa-clone"></i> ' + title + '</h3><div class="flashcard-grid">';

    cards.forEach(function(card, i) {
        html += '<div class="flashcard" onclick="flipCard(this)" id="fc-' + currentUnit + '-' + i + '">';
        html += '<div class="fc-front">' + card[0] + '</div>';
        html += '<div class="fc-back">' + card[1] + '</div>';
        html += '<div class="fc-hint">' + (currentLang === 'es' ? 'Toca para voltear' : 'Click to flip') + '</div>';
        html += '</div>';
    });

    html += '</div></div>';
    contentArea.innerHTML = html;
}

function flipCard(el) {
    el.classList.toggle('flipped');
}

// ──── Quiz checker ────
function checkQuiz(button, isCorrect, qId) {
    if (answeredQuestions[qId]) return;
    answeredQuestions[qId] = true;

    var parent = button.parentElement;
    // Find all buttons for this question
    var allBtns = parent.querySelectorAll('button.quiz-option');
    var questionBtns = [];
    allBtns.forEach(function(btn) {
        var onclick = btn.getAttribute('onclick');
        if (onclick && onclick.indexOf(qId) !== -1) {
            questionBtns.push(btn);
        }
    });

    if (isCorrect) {
        button.classList.add('correct');
        button.innerHTML += (currentLang === 'es' ? ' ✅ ¡Correcto!' : ' ✅ Correct!');
    } else {
        button.classList.add('incorrect');
        button.innerHTML += (currentLang === 'es' ? ' ❌ Incorrecto' : ' ❌ Incorrect');
    }

    questionBtns.forEach(function(btn) {
        btn.disabled = true;
    });

    updateProgress();
}

// ──── Fill-in checker ────
function checkFill(inputId, correctAnswer) {
    var input = document.getElementById(inputId);
    var fb = document.getElementById('fb-' + inputId);
    if (!input || !fb) return;

    var userAnswer = input.value.trim().toLowerCase();
    var correct = correctAnswer.toLowerCase();

    if (userAnswer === correct) {
        input.classList.remove('incorrect-input');
        input.classList.add('correct-input');
        fb.className = 'feedback-msg ok';
        fb.textContent = currentLang === 'es' ? '✅ ¡Correcto! Bien hecho.' : '✅ Correct! Well done.';
        answeredQuestions[inputId] = true;
    } else {
        input.classList.remove('correct-input');
        input.classList.add('incorrect-input');
        fb.className = 'feedback-msg fail';
        fb.textContent = (currentLang === 'es' ? '❌ Incorrecto. La respuesta es: ' : '❌ Incorrect. The answer is: ') + correctAnswer;
    }

    updateProgress();
}

// ──── Progress tracker ────
function updateProgress() {
    var total = Object.keys(answeredQuestions).length;
    var totalPossible = 40; // approximate total exercises
    var pct = Math.min(Math.round((total / totalPossible) * 100), 100);
    progressBar.style.width = pct + '%';
    progressText.textContent = total + ' / ' + totalPossible + (currentLang === 'es' ? ' ejercicios' : ' exercises');
}

// ──── Language toggle ────
langToggle.addEventListener('click', function() {
    currentLang = (currentLang === 'en') ? 'es' : 'en';
    updateLangButton();
    renderNav();
    updateHeader();
    renderContent();
    updateProgress();
});

function updateLangButton() {
    if (currentLang === 'es') {
        langLabel.textContent = 'Switch to English';
    } else {
        langLabel.textContent = 'Cambiar a Español';
    }
}

// ──── Mobile menu ────
mobileMenuBtn.addEventListener('click', function() {
    sidebar.classList.toggle('open');
});

// ──── Start ────
init();
