// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// FAQ Accordion
const faqToggles = document.querySelectorAll('.faq-toggle');

faqToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const faqItem = toggle.parentElement;
        
        // Close all other FAQ items
        faqToggles.forEach(otherToggle => {
            if (otherToggle !== toggle) {
                otherToggle.parentElement.classList.remove('active');
            }
        });
        
        // Toggle current FAQ item
        faqItem.classList.toggle('active');
    });
});

// Booking Form Submission
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Collect form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            date: document.getElementById('date').value,
            service: document.getElementById('service').value,
            notes: document.getElementById('notes').value,
            timestamp: new Date().toISOString()
        };

        // Display confirmation message
        alert('Thank you! Your booking request has been sent. We will contact you at ' + formData.phone + ' to confirm your appointment.');
        console.log('Booking data:', formData);
        bookingForm.reset();
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
