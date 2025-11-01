// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 64; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNavigation() {
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('text-primary', 'font-semibold');
                link.classList.add('text-gray-700');
                
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.remove('text-gray-700');
                    link.classList.add('text-primary', 'font-semibold');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);
window.addEventListener('load', highlightNavigation);

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Animate skill cards on scroll
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
        observer.observe(card);
    });

    // Animate project cards on scroll
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease-out ${index * 0.15}s, transform 0.6s ease-out ${index * 0.15}s`;
        observer.observe(card);
    });
});

// Contact form handling
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simulate form submission (in real app, you'd send to a server)
    console.log('Form submitted:', { name, email, message });
    
    // Show success message
    formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
    formMessage.className = 'mt-4 text-center text-green-600 font-semibold';
    formMessage.classList.remove('hidden');
    
    // Reset form
    contactForm.reset();
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.classList.add('hidden');
    }, 5000);
});

// Add scroll-to-top button functionality
let scrollToTopButton;

function createScrollToTopButton() {
    scrollToTopButton = document.createElement('button');
    scrollToTopButton.innerHTML = '↑';
    scrollToTopButton.className = 'fixed bottom-8 right-8 bg-primary text-white w-12 h-12 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 opacity-0 pointer-events-none';
    scrollToTopButton.style.transition = 'opacity 0.3s ease-in-out';
    scrollToTopButton.setAttribute('aria-label', 'Scroll to top');
    
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    document.body.appendChild(scrollToTopButton);
}

function toggleScrollToTopButton() {
    if (window.scrollY > 300) {
        scrollToTopButton.style.opacity = '1';
        scrollToTopButton.style.pointerEvents = 'auto';
    } else {
        scrollToTopButton.style.opacity = '0';
        scrollToTopButton.style.pointerEvents = 'none';
    }
}

// Initialize scroll-to-top button
window.addEventListener('load', () => {
    createScrollToTopButton();
    toggleScrollToTopButton();
});

window.addEventListener('scroll', toggleScrollToTopButton);

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const heroSection = document.getElementById('home');
    const scrollPosition = window.scrollY;
    heroSection.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Console message for curious developers
console.log('%cHello Developer! 👋', 'color: #3b82f6; font-size: 20px; font-weight: bold;');
console.log('%cLike what you see? Let\'s connect!', 'color: #8b5cf6; font-size: 16px;');
