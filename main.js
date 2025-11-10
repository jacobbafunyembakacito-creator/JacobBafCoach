/* ===================== */
/* MENU HAMBURGER */
/* ===================== */
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

/* ===================== */
/* LOGIN - SHOW / HIDE PASSWORD */
/* ===================== */
const togglePassword = document.querySelector('.toggle-password');
const passwordInput = document.querySelector('#password');

togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
});

/* ===================== */
/* LANGUAGES SWITCHER */
/* ===================== */
const languageSwitcher = document.getElementById('language-switcher');

const contentText = {
    en: {
        homeTitle: "I'm Jacob BAF Coach",
        homeText: "I'm passionate about inspiration and personal development. Here I share motivational videos, inspiring content and powerful texts.",
        joinBtn: "JOIN US",
        aboutTitle: "ABOUT ME",
        blueprintTitle: "BLUEPRINT",
        servicesTitle: "SERVICES",
        contactTitle: "CONTACT",
        contactPlaceholder: "Enter your name, email or phone",
        contactSend: "Send Message"
    },
    fr: {
        homeTitle: "Je suis Jacob BAF Coach",
        homeText: "Je suis passionné par l'inspiration et le développement personnel. Ici je partage des vidéos motivantes, du contenu inspirant et des textes puissants.",
        joinBtn: "REJOIGNEZ-NOUS",
        aboutTitle: "À PROPOS DE MOI",
        blueprintTitle: "PLAN D'ACTION",
        servicesTitle: "SERVICES",
        contactTitle: "CONTACT",
        contactPlaceholder: "Entrez votre nom, email ou téléphone",
        contactSend: "Envoyer"
    },
    es: {
        homeTitle: "Soy Jacob BAF Coach",
        homeText: "Apasionado por la inspiración y el desarrollo personal. Aquí comparto vídeos motivadores, contenido inspirador y textos poderosos.",
        joinBtn: "ÚNETE",
        aboutTitle: "SOBRE MÍ",
        blueprintTitle: "PLAN DE ACCIÓN",
        servicesTitle: "SERVICIOS",
        contactTitle: "CONTACTO",
        contactPlaceholder: "Ingresa tu nombre, correo o teléfono",
        contactSend: "Enviar"
    }
};

languageSwitcher.addEventListener('change', () => {
    const lang = languageSwitcher.value;
    document.getElementById('home-title').textContent = contentText[lang].homeTitle;
    document.getElementById('home-text').textContent = contentText[lang].homeText;
    document.getElementById('join-btn').textContent = contentText[lang].joinBtn;
    document.getElementById('about-title').textContent = contentText[lang].aboutTitle;
    document.getElementById('blueprint-title').textContent = contentText[lang].blueprintTitle;
    document.getElementById('services-title').textContent = contentText[lang].servicesTitle;
    document.getElementById('contact-title').textContent = contentText[lang].contactTitle;
    document.getElementById('contact-placeholder').setAttribute('placeholder', contentText[lang].contactPlaceholder);
    document.getElementById('contact-send').textContent = contentText[lang].contactSend;
});

/* ===================== */
/* SEARCH FUNCTIONALITY */
/* ===================== */
const searchInput = document.querySelector('.srch');
searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if(section.textContent.toLowerCase().includes(filter)){
            section.style.display = '';
        } else {
            section.style.display = 'none';
        }
    });
});

/* ===================== */
/* SMOOTH SCROLL FOR NAV LINKS */
/* ===================== */
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);
        if(targetSection){
            targetSection.scrollIntoView({behavior: 'smooth'});
        }
        // Close menu on mobile after click
        if(navLinks.classList.contains('active')){
            navLinks.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        // Toggle nav menu
        navLinks.classList.toggle('active');
        
        // Animate hamburger
        hamburger.classList.toggle('active');
    });
});
/* ===================== */
/* CONTACT FORM SUBMISSION (FAKE) */
/* ===================== */
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', e => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    contactForm.reset();
});
