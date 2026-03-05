// Initialize Lucide Icons
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    // Smooth scroll for in-page anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Scroll reveal animation
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    // Header style on scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (!header) return;
        if (window.scrollY > 50) {
            header.style.background = 'rgba(10, 10, 10, 0.95)';
            header.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.5)';
        } else {
            header.style.background = 'rgba(10, 10, 10, 0.8)';
            header.style.boxShadow = 'none';
        }
    });

    // Resume modal
    const resumeModal = document.getElementById('resumeModal');
    const resumeTriggers = document.querySelectorAll('.resume-trigger');
    const closeModalBtn = document.querySelector('.close-modal');

    const closeResumeModal = () => {
        if (!resumeModal) return;
        resumeModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    resumeTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            if (!resumeModal) return;
            resumeModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeResumeModal);
    }

    if (resumeModal) {
        resumeModal.addEventListener('click', (e) => {
            if (e.target === resumeModal) {
                closeResumeModal();
            }
        });
    }
});
