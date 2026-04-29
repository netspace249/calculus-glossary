// ===== DOM Elements =====
const topicNav = document.getElementById('topicNav');
const welcomeScreen = document.getElementById('welcomeScreen');
const topicDetail = document.getElementById('topicDetail');
const topicTitle = document.getElementById('topicTitle');
const topicDescription = document.getElementById('topicDescription');
const termsGrid = document.getElementById('termsGrid');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const searchGrid = document.getElementById('searchGrid');
const noResults = document.getElementById('noResults');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalTerm = document.getElementById('modalTerm');
const modalPhonetic = document.getElementById('modalPhonetic');
const modalDefinition = document.getElementById('modalDefinition');
const modalExample = document.getElementById('modalExample');
const modalExampleSection = document.getElementById('modalExampleSection');
const modalRelated = document.getElementById('modalRelated');
const modalRelatedSection = document.getElementById('modalRelatedSection');
const modalVietnamese = document.getElementById('modalVietnamese');
const btnPronounce = document.getElementById('btnPronounce');

let currentTerm = null;
let allTerms = [];

// ===== Initialize =====
function init() {
    // Build flat list of all terms with topic info
    GLOSSARY_DATA.topics.forEach(topic => {
        topic.terms.forEach(term => {
            allTerms.push({ ...term, topicId: topic.id, topicName: topic.name });
        });
    });

    renderTopicNav();
    setupEventListeners();
}

// ===== Render Topic Navigation =====
function renderTopicNav() {
    topicNav.innerHTML = GLOSSARY_DATA.topics.map(topic => `
        <button class="topic-btn" data-topic="${topic.id}">
            <span class="topic-emoji">${topic.emoji}</span>
            <span>${topic.name}</span>
            <span class="topic-count">${topic.terms.length}</span>
        </button>
    `).join('');
}

// ===== Show Topic =====
function showTopic(topicId) {
    const topic = GLOSSARY_DATA.topics.find(t => t.id === topicId);
    if (!topic) return;

    // Update active button
    document.querySelectorAll('.topic-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.topic === topicId);
    });

    // Hide welcome & search, show topic detail
    welcomeScreen.style.display = 'none';
    searchResults.style.display = 'none';
    topicDetail.style.display = 'block';

    topicTitle.textContent = topic.emoji + ' ' + topic.name;
    topicDescription.textContent = topic.description;

    termsGrid.innerHTML = topic.terms.map(term => createTermCard(term, topic.name)).join('');

    // Clear search
    searchInput.value = '';
}

// ===== Create Term Card HTML =====
function createTermCard(term, topicName) {
    return `
        <div class="term-card" data-term="${encodeURIComponent(term.term)}">
            <h3>${term.term}</h3>
            <div class="term-phonetic">${term.phonetic}</div>
            ${term.vietnamese ? `<div class="term-vietnamese">🇻🇳 ${term.vietnamese}</div>` : ''}
            <p>${term.definition}</p>
            <div class="card-footer">
                <span class="topic-tag">${topicName || ''}</span>
                <button class="btn-speak-small" data-speak="${term.term}" title="Pronounce">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                    </svg>
                </button>
            </div>
        </div>
    `;
}

// ===== Open Term Modal =====
function openModal(termName) {
    const term = allTerms.find(t => t.term === termName);
    if (!term) return;

    currentTerm = term;
    modalTerm.textContent = term.term;
    modalPhonetic.textContent = term.phonetic;
    modalDefinition.textContent = term.definition;

    if (term.vietnamese) {
        modalVietnamese.style.display = 'block';
        modalVietnamese.innerHTML = '<span class="vn-flag">🇻🇳</span> ' + term.vietnamese;
    } else {
        modalVietnamese.style.display = 'none';
    }

    if (term.example) {
        modalExampleSection.style.display = 'block';
        modalExample.textContent = term.example;
    } else {
        modalExampleSection.style.display = 'none';
    }

    if (term.related && term.related.length > 0) {
        modalRelatedSection.style.display = 'block';
        modalRelated.innerHTML = term.related.map(r => {
            const exists = allTerms.some(t => t.term === r);
            return `<button class="related-tag${exists ? '' : ' disabled'}" data-related="${r}">${r}</button>`;
        }).join('');
    } else {
        modalRelatedSection.style.display = 'none';
    }

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ===== Close Modal =====
function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    currentTerm = null;
}

// ===== Pronounce Term =====
function pronounce(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.85;
        utterance.pitch = 1;

        // Try to find an English voice
        const voices = window.speechSynthesis.getVoices();
        const englishVoice = voices.find(v => v.lang.startsWith('en') && v.name.includes('Female'))
            || voices.find(v => v.lang.startsWith('en-US'))
            || voices.find(v => v.lang.startsWith('en'));
        if (englishVoice) {
            utterance.voice = englishVoice;
        }

        // Visual feedback
        btnPronounce.classList.add('speaking');
        utterance.onend = () => btnPronounce.classList.remove('speaking');
        utterance.onerror = () => btnPronounce.classList.remove('speaking');

        window.speechSynthesis.speak(utterance);
    } else {
        alert('Sorry, your browser does not support text-to-speech.');
    }
}

// ===== Search =====
function handleSearch(query) {
    query = query.trim().toLowerCase();

    if (!query) {
        searchResults.style.display = 'none';
        // Show welcome or last topic
        if (!document.querySelector('.topic-btn.active')) {
            welcomeScreen.style.display = 'block';
            topicDetail.style.display = 'none';
        } else {
            topicDetail.style.display = 'block';
        }
        return;
    }

    welcomeScreen.style.display = 'none';
    topicDetail.style.display = 'none';
    searchResults.style.display = 'block';

    // Deactivate topic buttons
    document.querySelectorAll('.topic-btn').forEach(btn => btn.classList.remove('active'));

    const results = allTerms.filter(term =>
        term.term.toLowerCase().includes(query) ||
        term.definition.toLowerCase().includes(query) ||
        (term.example && term.example.toLowerCase().includes(query))
    );

    if (results.length > 0) {
        noResults.style.display = 'none';
        searchGrid.innerHTML = results.map(term => createTermCard(term, term.topicName)).join('');
    } else {
        noResults.style.display = 'block';
        searchGrid.innerHTML = '';
    }
}

// ===== Event Listeners =====
function setupEventListeners() {
    // Topic navigation
    topicNav.addEventListener('click', (e) => {
        const btn = e.target.closest('.topic-btn');
        if (btn) showTopic(btn.dataset.topic);
    });

    // Term card clicks
    document.addEventListener('click', (e) => {
        // Speak button on card
        const speakBtn = e.target.closest('.btn-speak-small');
        if (speakBtn) {
            e.stopPropagation();
            const text = speakBtn.dataset.speak;
            if (text) {
                window.speechSynthesis.cancel();
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.lang = 'en-US';
                utterance.rate = 0.85;
                const voices = window.speechSynthesis.getVoices();
                const englishVoice = voices.find(v => v.lang.startsWith('en-US')) || voices.find(v => v.lang.startsWith('en'));
                if (englishVoice) utterance.voice = englishVoice;
                window.speechSynthesis.speak(utterance);
            }
            return;
        }

        // Term card
        const card = e.target.closest('.term-card');
        if (card) {
            const termName = decodeURIComponent(card.dataset.term);
            openModal(termName);
            return;
        }

        // Related tag in modal
        const relatedTag = e.target.closest('.related-tag');
        if (relatedTag && !relatedTag.classList.contains('disabled')) {
            const relatedName = relatedTag.dataset.related;
            closeModal();
            setTimeout(() => openModal(relatedName), 300);
            return;
        }
    });

    // Modal close
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // Pronounce button
    btnPronounce.addEventListener('click', () => {
        if (currentTerm) pronounce(currentTerm.term);
    });

    // Search
    let searchTimeout;
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => handleSearch(searchInput.value), 250);
    });

    // Load voices (needed for some browsers)
    if ('speechSynthesis' in window) {
        window.speechSynthesis.getVoices();
        window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
    }
}

// ===== Handle Deep Link =====
function handleDeepLink() {
    const params = new URLSearchParams(window.location.search);
    const termParam = params.get('term');
    if (termParam) {
        const termName = decodeURIComponent(termParam);
        const term = allTerms.find(t => t.term.toLowerCase() === termName.toLowerCase());
        if (term) {
            // Show the topic that contains this term
            showTopic(term.topicId);
            // Open the modal after a short delay for rendering
            setTimeout(() => openModal(term.term), 300);
        }
    }
}

// ===== Start =====
document.addEventListener('DOMContentLoaded', () => {
    init();
    handleDeepLink();
});
