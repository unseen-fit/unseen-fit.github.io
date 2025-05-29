// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function () {
    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', function () {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background on scroll
    const nav = document.querySelector('.nav');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', function () {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 100) {
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
            nav.style.backdropFilter = 'blur(20px)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.9)';
        }

        // Hide/show navbar on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }

        lastScrollY = currentScrollY;
    });

    // Hero video handling
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        // Ensure video plays on mobile devices
        heroVideo.addEventListener('loadeddata', function () {
            this.play().catch(function (error) {
                console.log('Video autoplay failed:', error);
                // Show fallback background if video fails
                document.querySelector('.hero').style.background = 'linear-gradient(135deg, #171717 0%, #262626 100%)';
            });
        });

        // Pause video when not in viewport for performance
        const videoObserver = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    heroVideo.play().catch(e => console.log('Video play failed:', e));
                } else {
                    heroVideo.pause();
                }
            });
        }, { threshold: 0.1 });

        videoObserver.observe(heroVideo);
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-card, .spec-category, .showcase-text');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .nav-cta');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-2px)';
        });

        button.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });

    // Feature card interactions
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-4px)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        });
    });

    // Showcase image placeholder interactions
    const showcaseImage = document.querySelector('.showcase-image-placeholder');
    if (showcaseImage) {
        showcaseImage.addEventListener('mouseenter', function () {
            this.style.background = 'var(--gray-200)';
            this.style.transform = 'translateY(-2px)';
        });

        showcaseImage.addEventListener('mouseleave', function () {
            this.style.background = 'var(--gray-100)';
            this.style.transform = 'translateY(0)';
        });
    }

    // Performance optimization: Throttle scroll events
    let ticking = false;

    function updateOnScroll() {
        ticking = false;
    }

    window.addEventListener('scroll', function () {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    });

    // Add loading state management
    window.addEventListener('load', function () {
        document.body.classList.add('loaded');

        // Trigger hero content animation
        setTimeout(() => {
            const heroContent = document.querySelector('.hero-content');
            if (heroContent) {
                const heroElements = heroContent.querySelectorAll('h1, p, .hero-cta');
                heroElements.forEach((el, index) => {
                    setTimeout(() => {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                    }, index * 200);
                });
            }
        }, 500);
    });

    // Error handling for missing elements
    function safeQuerySelector(selector) {
        try {
            return document.querySelector(selector);
        } catch (error) {
            console.warn(`Element not found: ${selector}`);
            return null;
        }
    }

    // Add keyboard navigation support
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            // Close mobile menu if open
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    });

    // Add focus management for accessibility
    const focusableElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');

    focusableElements.forEach(element => {
        element.addEventListener('focus', function () {
            this.style.outline = '2px solid var(--gray-600)';
            this.style.outlineOffset = '2px';
        });

        element.addEventListener('blur', function () {
            this.style.outline = 'none';
        });
    });

    // Preload critical resources
    function preloadResources() {
        const resources = [
            'hero-video.mp4', // Video file
            // Add other critical resources here
        ];

        resources.forEach(resource => {
            if (resource.endsWith('.mp4')) {
                // Preload video
                const video = document.createElement('video');
                video.preload = 'metadata';
                video.src = resource;
            } else {
                // Preload other resources
                const link = document.createElement('link');
                link.rel = 'preload';
                link.href = resource;
                document.head.appendChild(link);
            }
        });
    }

    preloadResources();
});

// Add CSS for mobile navigation and hero animations
const additionalCSS = `
@media (max-width: 768px) {
    .nav-links {
        position: fixed;
        top: 72px;
        left: 0;
        right: 0;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(20px);
        flex-direction: column;
        padding: 32px 24px;
        transform: translateY(-100%);
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 999;
        border-bottom: 1px solid var(--gray-200);
    }
    
    .nav-links.active {
        transform: translateY(0);
        opacity: 1;
    }
    
    .nav-links a {
        padding: 16px 0;
        border-bottom: 1px solid var(--gray-200);
        font-size: 1.125rem;
    }
    
    .nav-cta {
        margin-top: 16px;
        width: 100%;
        text-align: center;
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
}

/* Hero content animation */
.hero-content h1,
.hero-content p,
.hero-content .hero-cta {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

/* Video fallback */
.hero-fallback {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #171717 0%, #262626 100%);
}

/* Ensure video covers properly on all devices */
@media (max-width: 768px) {
    .hero-video {
        object-position: center center;
    }
    
    .hero-title {
        font-size: clamp(2.5rem, 10vw, 4rem);
    }
    
    .hero-subtitle {
        font-size: 1.25rem;
    }
}
`;

// Inject additional CSS
const style = document.createElement('style');
style.textContent = additionalCSS;
document.head.appendChild(style); 