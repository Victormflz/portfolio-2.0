// GSAP Animations - with fallback to ensure content is always visible
document.addEventListener('DOMContentLoaded', function() {
    // Check if GSAP is loaded
    if (typeof gsap !== 'undefined') {
        try {
            // Register ScrollTrigger plugin
            gsap.registerPlugin(ScrollTrigger);
            
            // === HERO ANIMATIONS ===
            
            // Set initial hidden state for animated elements
            gsap.set(['.hero h1', '.hero-label', '.hero-subtitle', '.profile-image'], {
                opacity: 0
            });
            
            gsap.set(['.cta-group .btn-primary', '.cta-group .btn-secondary'], {
                opacity: 0,
                scale: 0.8
            });
            
            // Simple fade-in for hero elements
            gsap.to('.hero h1', {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power3.out",
                delay: 0.1,
                clearProps: 'all'
            });
            
            // Hero label animation
            gsap.to('.hero-label', {
                opacity: 1,
                duration: 0.5,
                ease: "power3.out",
                clearProps: 'all'
            });
            
            // Subtitle animation
            gsap.to('.hero-subtitle', {
                opacity: 1,
                duration: 0.5,
                ease: "power3.out",
                delay: 0.2,
                clearProps: 'all'
            });
            
            // CTA buttons - animate together with stagger and bounce
            gsap.to(['.cta-group .btn-primary', '.cta-group .btn-secondary'], {
                opacity: 1,
                scale: 1,
                duration: 0.4,
                stagger: 0.1,
                ease: "back.out(1.5)",
                delay: 0.25,
                clearProps: 'all'
            });
            
            // Profile image
            gsap.to('.profile-image', {
                opacity: 1,
                scale: 1,
                duration: 0.6,
                ease: "power3.out",
                delay: 0.15,
                clearProps: 'all'
            });
            
            // Parallax effect on scroll (only if ScrollTrigger is available)
            if (typeof ScrollTrigger !== 'undefined') {
                gsap.to('.profile-container', {
                    y: 50,
                    scrollTrigger: {
                        trigger: '.hero',
                        start: 'top top',
                        end: 'bottom top',
                        scrub: 1
                    }
                });
                vercel                
                // === BACKGROUND ANIMATIONS ===
                
                // Animate gradient orbs with slow, continuous movement
                gsap.to('.bg-orb-1', {
                    x: -100,
                    y: 100,
                    duration: 20,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut'
                });
                
                gsap.to('.bg-orb-2', {
                    x: 80,
                    y: -80,
                    duration: 25,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut'
                });
                
                gsap.to('.bg-orb-3', {
                    scale: 1.2,
                    duration: 15,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut'
                });
                
                // Subtle parallax on grid based on scroll
                gsap.to('.bg-grid', {
                    y: -200,
                    scrollTrigger: {
                        trigger: 'body',
                        start: 'top top',
                        end: 'bottom top',
                        scrub: 1
                    }
                });
                
                // Mouse movement parallax effect (very subtle)
                document.addEventListener('mousemove', (e) => {
                    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
                    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
                    
                    gsap.to('.bg-orb-1', {
                        x: moveX * 2,
                        y: moveY * 2,
                        duration: 2,
                        ease: 'power2.out'
                    });
                    
                    gsap.to('.bg-orb-2', {
                        x: -moveX * 1.5,
                        y: -moveY * 1.5,
                        duration: 2,
                        ease: 'power2.out'
                    });
                });
                
                // === SCROLL REVEAL ANIMATIONS ===
                
                // Animate section headers
                gsap.utils.toArray('.section-header').forEach(header => {
                    gsap.from(header.querySelector('.section-label'), {
                        opacity: 0,
                        y: 20,
                        duration: 0.5,
                        ease: "power3.out",
                        clearProps: 'all',
                        scrollTrigger: {
                            trigger: header,
                            start: 'top 80%',
                            toggleActions: 'play none none none'
                        }
                    });
                    
                    gsap.from(header.querySelector('.section-title'), {
                        opacity: 0,
                        y: 20,
                        duration: 0.5,
                        delay: 0.05,
                        ease: "power3.out",
                        clearProps: 'all',
                        scrollTrigger: {
                            trigger: header,
                            start: 'top 80%',
                            toggleActions: 'play none none none'
                        }
                    });
                    
                    const description = header.querySelector('.section-description');
                    if (description) {
                        gsap.from(description, {
                            opacity: 0,
                            y: 20,
                            duration: 0.5,
                            delay: 0.1,
                            ease: "power3.out",
                            clearProps: 'all',
                            scrollTrigger: {
                                trigger: header,
                                start: 'top 80%',
                                toggleActions: 'play none none none'
                            }
                        });
                    }
                });
                
                // Animate service cards with stagger
                gsap.from('.service-card', {
                    opacity: 0,
                    y: 40,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power3.out",
                    clearProps: 'all',
                    scrollTrigger: {
                        trigger: '.services-grid',
                        start: 'top 75%',
                        toggleActions: 'play none none none'
                    }
                });
                
                // Animate project cards with stagger
                gsap.from('.project-card', {
                    opacity: 0,
                    y: 40,
                    scale: 0.95,
                    duration: 0.6,
                    stagger: 0.12,
                    ease: "power3.out",
                    clearProps: 'all',
                    scrollTrigger: {
                        trigger: '.projects-grid',
                        start: 'top 75%',
                        toggleActions: 'play none none none'
                    }
                });
                
                // Animate testimonial cards with advanced stagger
                gsap.utils.toArray('.testimonial-card').forEach((card, index) => {
                    const timeline = gsap.timeline({
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 80%',
                            toggleActions: 'play none none none'
                        }
                    });
                    
                    // Card container fade and slide up
                    timeline.from(card, {
                        opacity: 0,
                        y: 50,
                        duration: 0.5,
                        ease: "power3.out"
                    });
                    
                    // Quote icon bounce
                    timeline.from(card.querySelector('.quote-icon'), {
                        scale: 0,
                        rotation: -180,
                        duration: 0.4,
                        ease: "back.out(2)",
                        clearProps: 'all'
                    }, "-=0.3");
                    
                    // Testimonial text fade in
                    timeline.from(card.querySelector('.testimonial-text'), {
                        opacity: 0,
                        y: 20,
                        duration: 0.5,
                        ease: "power2.out",
                        clearProps: 'all'
                    }, "-=0.2");
                    
                    // Author section slide from left
                    timeline.from(card.querySelector('.testimonial-author'), {
                        opacity: 0,
                        x: -30,
                        duration: 0.4,
                        ease: "power2.out",
                        clearProps: 'all'
                    }, "-=0.2");
                    
                    // Avatar pop
                    timeline.from(card.querySelector('.author-avatar'), {
                        scale: 0,
                        duration: 0.3,
                        ease: "back.out(2)",
                        clearProps: 'all'
                    }, "-=0.3");
                });
                
                // Animate contact form
                gsap.from('.contact-form', {
                    opacity: 0,
                    x: -30,
                    duration: 0.6,
                    ease: "power3.out",
                    clearProps: 'all',
                    scrollTrigger: {
                        trigger: '.contact-container',
                        start: 'top 75%',
                        toggleActions: 'play none none none'
                    }
                });
                
                gsap.from('.contact-info', {
                    opacity: 0,
                    x: 30,
                    duration: 0.6,
                    ease: "power3.out",
                    clearProps: 'all',
                    scrollTrigger: {
                        trigger: '.contact-container',
                        start: 'top 75%',
                        toggleActions: 'play none none none'
                    }
                });
            }
        } catch (error) {
            console.log('GSAP animation error:', error);
            // Ensure all elements are visible if animation fails
            const elements = document.querySelectorAll('.hero h1, .hero-label, .hero-subtitle, .cta-group .btn-primary, .cta-group .btn-secondary, .profile-image');
            elements.forEach(el => {
                if (el) {
                    el.style.opacity = '1';
                    el.style.transform = 'none';
                }
            });
        }
    } else {
        // GSAP not loaded - ensure all content is visible
        console.log('GSAP not loaded, showing all content');
    }
}); // Close GSAP DOMContentLoaded

// === Existing code continues below ===

// Language Toggle
let currentLang = 'es';

function toggleLanguage() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    const langBtn = document.querySelector('.lang-switch');
    langBtn.textContent = currentLang === 'es' ? 'EN' : 'ES';
    
    // Update all translatable elements
    document.querySelectorAll('[data-es]').forEach(el => {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = el.getAttribute('data-' + currentLang);
        } else {
            el.textContent = el.getAttribute('data-' + currentLang);
        }
    });
}

// Mobile Menu Toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
}

// Close mobile menu when clicking a link
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            const navLinks = document.querySelector('.nav-links');
            const menuToggle = document.querySelector('.menu-toggle');
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
});

// EmailJS Initialization
(function() {
    emailjs.init({
        publicKey: "Amqfsv_SSlZM5P7cs",
    });
})();

// Form Submission with EmailJS
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = document.getElementById('submitBtn');
        const successMsg = document.getElementById('successMessage');
        const errorMsg = document.getElementById('errorMessage');
        
        // Hide previous messages
        successMsg.classList.remove('show');
        errorMsg.classList.remove('show');
        
        // Disable button and show loading
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = currentLang === 'es' ? 
            'Enviando... <span class="loading-spinner"></span>' : 
            'Sending... <span class="loading-spinner"></span>';
        
        // Send email using EmailJS
        emailjs.sendForm('service_bbio25o', 'template_8h1wxlu', this)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                
                // Show success message
                successMsg.classList.add('show');
                
                // Reset form
                document.getElementById('contactForm').reset();
                
                // Re-enable button
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                
                // Hide success message after 8 seconds
                setTimeout(() => {
                    successMsg.classList.remove('show');
                }, 8000);
            }, function(error) {
                console.error('FAILED...', error);
                
                // Show error message
                errorMsg.classList.add('show');
                
                // Re-enable button
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                
                // Hide error message after 10 seconds
                setTimeout(() => {
                    errorMsg.classList.remove('show');
                }, 10000);
            });
    });
});

// Smooth scroll with offset for fixed nav
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add advanced scroll effect to nav with GSAP - Always visible
const nav = document.querySelector('nav');
let lastScroll = 0;
let isScrolled = false;

// Create ScrollTrigger for nav animations
if (typeof gsap !== 'undefined') {
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Change nav style when scrolled down
        if (currentScroll > 50 && !isScrolled) {
            isScrolled = true;
            
            // Animate to scrolled state - NO padding changes, only visual effects
            gsap.to(nav, {
                background: 'rgba(10, 10, 15, 0.98)',
                duration: 0.3,
                ease: 'power2.out',
                onStart: () => {
                    nav.style.boxShadow = '0 8px 30px rgba(4, 120, 87, 0.15), 0 2px 10px rgba(0, 0, 0, 0.3)';
                    nav.style.borderBottom = '1px solid rgba(4, 120, 87, 0.2)';
                }
            });
            
        } else if (currentScroll <= 50 && isScrolled) {
            isScrolled = false;
            
            // Animate back to top state
            gsap.to(nav, {
                background: 'rgba(10, 10, 15, 0.95)',
                duration: 0.3,
                ease: 'power2.out',
                onStart: () => {
                    nav.style.boxShadow = 'none';
                    nav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
                }
            });
        }
        
        lastScroll = currentScroll;
    });
    
    // Add hover effect to nav links with GSAP
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.08,
                color: '#10b981',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        link.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                color: '#b0b0b0',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
    
    // Add subtle parallax effect to nav on scroll
    gsap.to(nav, {
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });
    
} else {
    // Fallback without GSAP
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
            nav.style.background = 'rgba(10, 10, 15, 0.98)';
        } else {
            nav.style.boxShadow = 'none';
            nav.style.background = 'rgba(10, 10, 15, 0.95)';
        }
    });
}
