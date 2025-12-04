// State
let currentPage = 'home';

// DOM Elements
const app = document.getElementById('app');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('.page-section');
const modal = document.getElementById('message-modal');

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    loadHomeContent();
    loadDirectory();
    loadEvents();
    loadB2B();
    setupModal();

    // Start quote rotation
    setInterval(rotateQuote, 5000);
});

// Navigation Logic
function setupNavigation() {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            navigateTo(page);
        });
    });
}

function navigateTo(pageId) {
    // Update State
    currentPage = pageId;

    // Update UI - Nav
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === pageId) {
            link.classList.add('active');
        }
    });

    // Update UI - Sections
    sections.forEach(section => {
        section.classList.add('hidden');
        section.classList.remove('active');
    });

    const targetSection = document.getElementById(pageId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
        targetSection.classList.add('active');
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

// Message Service
const MessageService = {
    getMessages: () => {
        return JSON.parse(localStorage.getItem('detroit_rise_messages') || '[]');
    },
    sendMessage: (businessId, message) => {
        const messages = MessageService.getMessages();
        messages.push({
            id: Date.now(),
            businessId,
            message,
            timestamp: new Date().toISOString()
        });
        localStorage.setItem('detroit_rise_messages', JSON.stringify(messages));
        return true;
    }
};

// Modal Logic
function openMessageModal(businessId) {
    const modal = document.getElementById('message-modal'); // Changed to message-modal
    const business = businesses.find(b => b.id === businessId);
    document.getElementById('modal-business-name').innerText = business ? business.name : 'Business'; // Changed to modal-business-name
    modal.dataset.businessId = businessId;
    modal.classList.remove('hidden'); // Use class for hidden
}

function closeMessageModal() {
    document.getElementById('message-modal').classList.add('hidden'); // Use class for hidden
    document.getElementById('message-input').value = ''; // Changed to message-input
}

function sendMessage() {
    const modal = document.getElementById('message-modal'); // Changed to message-modal
    const businessId = parseInt(modal.dataset.businessId);
    const message = document.getElementById('message-input').value; // Changed to message-input

    if (!message.trim()) {
        alert('Please enter a message.');
        return;
    }

    if (MessageService.sendMessage(businessId, message)) {
        alert('Message sent successfully!'); // In a real app, use a toast
        closeMessageModal();
    }
}

// Scroll Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

function initAnimations() {
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Home Content
function loadHomeContent() {
    const surgeGrid = document.getElementById('surge-grid');
    const surgeBusinesses = businesses.filter(b => b.tier === 'surge');

    surgeGrid.innerHTML = surgeBusinesses.map(createBusinessCard).join('');
}

let currentQuoteIndex = 0;
function rotateQuote() {
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');

    // Simple fade effect could be added here
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    const quote = quotes[currentQuoteIndex];

    quoteText.textContent = `"${quote.text}"`;
    quoteAuthor.textContent = `- ${quote.author}`;
}

// Directory Content
function loadDirectory() {
    const directoryGrid = document.getElementById('directory-grid');
    directoryGrid.innerHTML = businesses.map(createBusinessCard).join('');

    // Search functionality
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = businesses.filter(b =>
            b.name.toLowerCase().includes(term) ||
            b.category.toLowerCase().includes(term)
        );
        directoryGrid.innerHTML = filtered.map(createBusinessCard).join('');
    });
}

function createBusinessCard(business) {
    return `
        <div class="business-card reveal" onclick="viewProfile(${business.id})">
            <div class="card-img" style="background-image: url('${business.image}')"></div>
            <div class="card-content">
                <span class="card-category">${business.category}</span>
                <h3>${business.name}</h3>
                <p>${business.description.substring(0, 60)}...</p>
            </div>
        </div>
    `;
}

// Profile Logic
window.viewProfile = function (id) {
    const business = businesses.find(b => b.id === id);
    if (!business) return;

    const profileContent = document.getElementById('profile-content');

    const galleryHtml = business.gallery.length > 0
        ? `<div class="gallery-grid">
            ${business.gallery.map(img => `<div class="gallery-item"><img src="${img}" alt="Gallery"></div>`).join('')}
           </div>`
        : '';

    profileContent.innerHTML = `
        <div class="profile-header">
            <img src="${business.image}" alt="${business.name}" class="profile-img">
            <div>
                <span class="card-category">${business.category}</span>
                <h1>${business.name}</h1>
                <p>${business.description}</p>
                <button class="cta-btn" style="margin-top: 1rem; font-size: 0.9rem; padding: 0.8rem 1.5rem;" onclick="openMessageModal('${business.name}')">
                    <i class="fas fa-envelope"></i> Message Business
                </button>
            </div>
        </div>
        ${galleryHtml}
    `;

    navigateTo('profile');
}

// Events Logic
function loadEvents() {
    const eventsGrid = document.getElementById('events-grid');
    if (!eventsGrid) return;

    eventsGrid.innerHTML = events.map(event => `
        <div class="event-card reveal">
            <div class="card-img" style="background-image: url('${event.image}'); height: 200px;">
                <div class="event-date">${event.date}</div>
            </div>
            <div class="event-content">
                <h3>${event.title}</h3>
                <div class="event-location"><i class="fas fa-map-marker-alt"></i> ${event.location}</div>
                <p style="margin-bottom: 1rem; color: var(--text-muted); font-size: 0.9rem;">${event.description}</p>
                <button class="event-btn">RSVP Now</button>
            </div>
        </div>
    `).join('');
}

// B2B Logic
function loadB2B() {
    const reqList = document.getElementById('requests-list');
    const offerList = document.getElementById('barter-list');

    reqList.innerHTML = b2bData.requests.map(item => `
        <div class="b2b-item">
            <h4>${item.title}</h4>
            <small>Posted by: ${item.business}</small>
        </div>
    `).join('');

    offerList.innerHTML = b2bData.offers.map(item => `
        <div class="b2b-item" style="border-left-color: var(--accent-gold)">
            <h4>${item.title}</h4>
            <small>Posted by: ${item.business}</small>
        </div>
    `).join('');
}

// Modal Logic
function setupModal() {
    const closeBtn = document.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.classList.add('hidden');
        }
    }
}

window.openMessageModal = function (businessName) {
    document.getElementById('modal-business-name').textContent = businessName;
    modal.classList.remove('hidden');
}
