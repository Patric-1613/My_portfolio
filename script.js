// Initialize Lucide Icons
lucide.createIcons();

// Smooth Scroll for Anchor Links (Polymorphic fallback if needed, but CSS handles most)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Animation (Intersection Observer)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-up').forEach(el => {
    observer.observe(el);
});

// Navbar background on scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
        header.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.5)';
    } else {
        header.style.background = 'rgba(10, 10, 10, 0.8)';
        header.style.boxShadow = 'none';
    }
});

// Resume Modal Logic
const resumeModal = document.getElementById('resumeModal');
const resumeTriggers = document.querySelectorAll('.resume-trigger');
const closeModal = document.querySelector('.close-modal');

resumeTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        resumeModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
});

const closeResumeModal = () => {
    resumeModal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
};

closeModal.addEventListener('click', closeResumeModal);

// Close modal on outside click
resumeModal.addEventListener('click', (e) => {
    if (e.target === resumeModal) {
        closeResumeModal();
    }
});
