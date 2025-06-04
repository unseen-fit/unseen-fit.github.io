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
    const logoImage = document.querySelector('.logo-image');
    const navLinksElements = document.querySelectorAll('.nav-links a');
    const hamburgerSpans = document.querySelectorAll('.hamburger span');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', function () {
        const currentScrollY = window.scrollY;
        console.log('Scroll position:', currentScrollY); // Debug logging

        if (currentScrollY > 100) {
            console.log('Switching to dark theme with white logo'); // Debug logging
            // Dark background when scrolled with white logo
            nav.style.background = 'rgba(0, 0, 0, 0.95)';
            nav.style.backdropFilter = 'blur(20px)';
            nav.style.webkitBackdropFilter = 'blur(20px)';
            nav.style.borderBottomColor = 'rgba(255, 255, 255, 0.1)';

            // Change logo to white version
            if (logoImage) {
                console.log('Changing logo to white:', logoImage.src); // Debug logging
                logoImage.src = 'Media/LogoWhite.png';
                console.log('Logo changed to:', logoImage.src); // Debug logging
            } else {
                console.log('Logo image element not found'); // Debug logging
            }

            // Change text colors to white
            navLinksElements.forEach(link => {
                link.style.color = 'rgba(255, 255, 255, 0.8)';
            });

            hamburgerSpans.forEach(span => {
                span.style.background = 'white';
            });
        } else {
            console.log('Switching to light theme with black logo'); // Debug logging
            // Light background at top with black logo
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
            nav.style.backdropFilter = 'blur(20px)';
            nav.style.webkitBackdropFilter = 'blur(20px)';
            nav.style.borderBottomColor = 'var(--gray-200)';

            // Change logo to black version
            if (logoImage) {
                console.log('Changing logo to black:', logoImage.src); // Debug logging
                logoImage.src = 'Media/LogoBlack.png';
                console.log('Logo changed to:', logoImage.src); // Debug logging
            } else {
                console.log('Logo image element not found'); // Debug logging
            }

            // Change text colors back to original
            navLinksElements.forEach(link => {
                link.style.color = '';
            });

            hamburgerSpans.forEach(span => {
                span.style.background = '';
            });
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

    // Email capture form handling
    const emailForms = document.querySelectorAll('#early-access-form, #final-email-form');

    emailForms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            const button = this.querySelector('button[type="submit"]');
            const originalButtonText = button.textContent;

            // Show loading state
            button.textContent = 'Subscribing...';
            button.disabled = true;

            // Simulate API call (replace with actual API endpoint)
            setTimeout(() => {
                // Here you would normally send the email to your backend
                console.log('Email captured:', email);

                // Show success state
                button.textContent = 'Success! Check your email';
                button.style.background = 'var(--gray-800)';

                // Store in localStorage to track conversions
                localStorage.setItem('unseenfit_prelaunch_email', email);
                localStorage.setItem('unseenfit_prelaunch_date', new Date().toISOString());

                // Reset form after delay
                setTimeout(() => {
                    emailInput.value = '';
                    button.textContent = originalButtonText;
                    button.disabled = false;
                    button.style.background = '';

                    // Show thank you message
                    showThankYouMessage();
                }, 3000);
            }, 1000);
        });
    });

    // Thank you message function
    function showThankYouMessage() {
        const message = document.createElement('div');
        message.className = 'thank-you-message';
        message.innerHTML = `
            <div class="message-content">
                <h3>You're on the list!</h3>
                <p>You'll be the first to get 50% off when we launch.</p>
            </div>
        `;
        document.body.appendChild(message);

        setTimeout(() => {
            message.classList.add('show');
        }, 100);

        setTimeout(() => {
            message.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(message);
            }, 500);
        }, 4000);
    }

    // Countdown timer
    function initCountdown() {
        const countdownElement = document.querySelector('.countdown-timer');
        if (!countdownElement) return;

        // Set launch date (30 days from now for demo)
        const launchDate = new Date();
        launchDate.setDate(launchDate.getDate() + 30);
        launchDate.setHours(9, 0, 0, 0); // 9 AM launch time

        function updateCountdown() {
            const now = new Date();
            const diff = launchDate - now;

            if (diff <= 0) {
                countdownElement.innerHTML = '<h3>We are LIVE on Kickstarter!</h3>';
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `
                <div class="countdown-item">
                    <span class="countdown-number">${days}</span>
                    <span class="countdown-label">Days</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-number">${String(hours).padStart(2, '0')}</span>
                    <span class="countdown-label">Hours</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-number">${String(minutes).padStart(2, '0')}</span>
                    <span class="countdown-label">Minutes</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-number">${String(seconds).padStart(2, '0')}</span>
                    <span class="countdown-label">Seconds</span>
                </div>
            `;
        }

        updateCountdown();
        setInterval(updateCountdown, 1000);
    }

    initCountdown();

    // Check if user already subscribed
    const subscribedEmail = localStorage.getItem('unseenfit_prelaunch_email');
    if (subscribedEmail) {
        const formNotes = document.querySelectorAll('.form-note');
        formNotes.forEach(note => {
            note.innerHTML = `You're already on the list with ${subscribedEmail}`;
            note.style.color = 'var(--gray-600)';
        });
    }

    // Animate badges on scroll
    const badges = document.querySelectorAll('.badge');
    const badgeObserver = new IntersectionObserver(function (entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }, index * 100);
            }
        });
    }, { threshold: 0.5 });

    badges.forEach(badge => {
        badge.style.opacity = '0';
        badge.style.transform = 'translateY(20px) scale(0.9)';
        badge.style.transition = 'all 0.6s ease';
        badgeObserver.observe(badge);
    });

    // FAQ item animations
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        observer.observe(item);
    });
});

// Add CSS for email capture and animations
const additionalCSS = `
/* Thank you message */
.thank-you-message {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.9);
    background: white;
    padding: 48px;
    border-radius: var(--border-radius-large);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    z-index: 10000;
    opacity: 0;
    transition: all 0.3s ease;
    text-align: center;
}

.thank-you-message.show {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
}

.thank-you-message h3 {
    font-size: 1.75rem;
    margin-bottom: 12px;
}

.thank-you-message p {
    color: var(--text-secondary);
    font-size: var(--font-size-body);
}

@media (max-width: 768px) {
    .nav-links {
        position: fixed;
        top: 72px;
        left: 0;
        right: 0;
        background: rgba(21, 23, 23, 0.95);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        flex-direction: column;
        padding: 32px 24px;
        transform: translateY(-100%);
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 999;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .nav-links.active {
        transform: translateY(0);
        opacity: 1;
    }
    
    .nav-links a {
        padding: 16px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        font-size: 1.125rem;
        color: rgba(255, 255, 255, 0.8);
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

// Floating CTA Button Visibility
function handleFloatingCTA() {
    const floatingCTA = document.querySelector('.floating-cta');
    const heroSection = document.querySelector('.hero-section');
    const emailSection = document.querySelector('.email-section');

    if (!floatingCTA || !heroSection || !emailSection) return;

    const heroHeight = heroSection.offsetHeight;
    const emailSectionTop = emailSection.offsetTop;
    const scrollPosition = window.scrollY;

    // Show floating CTA after hero section, hide when near email section
    if (scrollPosition > heroHeight && scrollPosition < emailSectionTop - 200) {
        floatingCTA.classList.add('visible');
    } else {
        floatingCTA.classList.remove('visible');
    }
}

// Handle CTA button clicks
function handleCTAClicks() {
    const ctaButtons = document.querySelectorAll('.nav-cta-btn, .floating-cta-btn');
    const emailSection = document.querySelector('.email-section');

    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            if (emailSection) {
                emailSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });

                // Focus on email input after scroll
                setTimeout(() => {
                    const emailInput = emailSection.querySelector('input[type="email"]');
                    if (emailInput) {
                        emailInput.focus();
                    }
                }, 800);
            }
        });
    });
}

// Handle email form submissions
function handleEmailForms() {
    const emailForms = document.querySelectorAll('.hero-email-form, .email-form');

    emailForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const emailInput = form.querySelector('input[type="email"]');
            const submitButton = form.querySelector('button[type="submit"]');

            if (emailInput && submitButton) {
                const email = emailInput.value;

                if (email) {
                    // Show loading state
                    const originalText = submitButton.textContent;
                    submitButton.textContent = 'Joining...';
                    submitButton.disabled = true;

                    // Simulate API call (replace with actual endpoint)
                    setTimeout(() => {
                        submitButton.textContent = 'Joined! ✓';
                        submitButton.style.background = '#16a34a';

                        // Show success message
                        const formNote = form.parentElement.querySelector('.form-note, .hero-form-note');
                        if (formNote) {
                            formNote.textContent = 'Success! Check your email for confirmation.';
                            formNote.style.color = '#16a34a';
                        }

                        // Clear form
                        emailInput.value = '';

                        // Reset button after delay
                        setTimeout(() => {
                            submitButton.textContent = originalText;
                            submitButton.disabled = false;
                            submitButton.style.background = '';

                            if (formNote) {
                                formNote.textContent = formNote.textContent.includes('Join 5,000+')
                                    ? 'Join 5,000+ people already on the list • No spam, ever'
                                    : 'Join 5,000+ people already on the list • Free shipping • 30-day guarantee';
                                formNote.style.color = '';
                            }
                        }, 3000);
                    }, 1500);
                }
            }
        });
    });
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', function () {
    handleCTAClicks();
    handleEmailForms();

    // Set up scroll listener for floating CTA
    window.addEventListener('scroll', handleFloatingCTA);

    // Initial check
    handleFloatingCTA();
}); 