// Futuristic Navigation Interactions

document.addEventListener('DOMContentLoaded', function() {
    // Menu Toggle for Mobile
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Active Link Highlighting on Scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function highlightNavLink() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            }
        });
    });

    // Navbar Background on Scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 15, 0.98)';
            navbar.style.boxShadow = '0 5px 30px rgba(0, 217, 255, 0.2)';
        } else {
            navbar.style.background = 'rgba(10, 10, 15, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Parallax Effect for Hero Section
    const heroVisual = document.querySelector('.hero-visual');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        if (heroVisual && scrolled < window.innerHeight) {
            heroVisual.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });

    // Add Hover Sound Effect (Optional - Uncomment to enable)
    /*
    const navLinksAll = document.querySelectorAll('.nav-link, .cta-button, .hero-btn');
    navLinksAll.forEach(link => {
        link.addEventListener('mouseenter', function() {
            // You can add a subtle sound effect here
            console.log('Hover effect triggered');
        });
    });
    */

    // Intersection Observer for Animation on Scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    document.querySelectorAll('.hero-title, .hero-subtitle, .hero-buttons').forEach(el => {
        observer.observe(el);
    });

    // Dynamic Glow Effect on Mouse Move
    const gemDisplay = document.querySelector('.gem-display');
    
    if (gemDisplay) {
        gemDisplay.addEventListener('mousemove', function(e) {
            const rect = gemDisplay.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            gemDisplay.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        gemDisplay.addEventListener('mouseleave', function() {
            gemDisplay.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    }

    // Particle System Enhancement
    createParticles();

    function createParticles() {
        const bgAnimation = document.querySelector('.bg-animation');
        if (!bgAnimation) return;

        const particleCount = 20;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 2}px;
                height: ${Math.random() * 4 + 2}px;
                background: rgba(0, 217, 255, ${Math.random() * 0.5 + 0.2});
                border-radius: 50%;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                animation: float ${Math.random() * 10 + 10}s ease-in-out infinite;
                animation-delay: ${Math.random() * 5}s;
                box-shadow: 0 0 ${Math.random() * 10 + 5}px rgba(0, 217, 255, 0.5);
            `;
            bgAnimation.appendChild(particle);
        }

        // Add floating animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0%, 100% {
                    transform: translateY(0) translateX(0);
                    opacity: 0.3;
                }
                25% {
                    transform: translateY(-20px) translateX(10px);
                    opacity: 0.6;
                }
                50% {
                    transform: translateY(-10px) translateX(-10px);
                    opacity: 0.4;
                }
                75% {
                    transform: translateY(-30px) translateX(5px);
                    opacity: 0.7;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Add typing effect to brand tagline
    const tagline = document.querySelector('.brand-tagline');
    if (tagline) {
        const originalText = tagline.textContent;
        tagline.textContent = '';
        let charIndex = 0;

        function typeWriter() {
            if (charIndex < originalText.length) {
                tagline.textContent += originalText.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 100);
            }
        }

        // Start typing after a delay
        setTimeout(typeWriter, 1000);
    }

    console.log('✨ Futuristic Jewels of Asia - Ready to Shine!');
});
