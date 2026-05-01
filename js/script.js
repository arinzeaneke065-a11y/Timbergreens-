// ==========================================
// Mobile Menu Toggle
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }
});

// ==========================================
// Contact Form Handling
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validate form
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }

            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Create mailto link with form data
            const subject = encodeURIComponent('Website Inquiry from ' + name);
            const body = encodeURIComponent(
                'Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message
            );

            // Open default email client
            window.location.href = `mailto:marcusrodrigo1960@gmail.com?subject=${subject}&body=${body}`;

            // Reset form
            contactForm.reset();

            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
        });
    }
});

// ==========================================
// Smooth Scroll Enhancement
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                const offsetTop = target.offsetTop - 80; // Adjust for sticky header

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ==========================================
// Lazy Load Images
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    // Check if Intersection Observer is supported
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });

        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => imageObserver.observe(img));
    }
});

// ==========================================
// Active Navigation Link Highlighting
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
});

// ==========================================
// Scroll-to-Top Animation on Page Load
// ==========================================
window.addEventListener('load', function() {
    window.scrollTo(0, 0);
});

// ==========================================
// Add Loading Animation
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = '1';
});

body {
    opacity: 0;
    animation: fadeIn 0.3s ease-in forwards;
}

@keyframes fadeIn {
    to {
        opacity: 1;
    }
}
