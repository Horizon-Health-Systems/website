document.addEventListener("DOMContentLoaded", function () {
    
    // Select only the menu links
    const menuLinks = document.querySelectorAll(".nav-links a");

    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Remove 'clicked-blue' from all other menu links
            menuLinks.forEach(l => l.classList.remove("clicked-blue"));
            
            // Add 'clicked-blue' only to the clicked menu item
            this.classList.add("clicked-blue");
        });
    });

});

// Mobile Navigation Toggle
const menu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');

menu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menu.classList.toggle('is-active');
});

// Smooth Scrolling for Anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Reveal Effect (Intersection Observer)
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => observer.observe(el));

// Form Submission (Mock)
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you, Beyana will reach out to you soon!');
    contactForm.reset();
});
