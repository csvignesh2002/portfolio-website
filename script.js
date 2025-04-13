// Function to add 3D hover effects to the sections
document.querySelectorAll('.card, .skill-card, .project-card').forEach(item => {
    item.addEventListener('mousemove', (e) => {
        let x = (e.clientX / window.innerWidth) * 100;
        let y = (e.clientY / window.innerHeight) * 100;
        item.style.transform = `perspective(800px) rotateX(${y - 50}deg) rotateY(${x - 50}deg)`;
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg)`;
    });
});

// Get the scroll-to-top button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Show the scroll-to-top button when the user scrolls down
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block"; // Show button
    } else {
        scrollToTopBtn.style.display = "none"; // Hide button
    }

    // Handle fade-in on scroll for sections and project cards
    document.querySelectorAll("section").forEach(section => {
        if (isInViewport(section)) {
            section.classList.add("visible", "fade-in-scroll");
        }
    });

    // Fade-in navbar on scroll
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('visible');
    } else {
        navbar.classList.remove('visible');
    }

    // Add zoom-in effect to project cards
    document.querySelectorAll('.project-card').forEach(card => {
        if (isInViewport(card)) {
            card.classList.add('visible', 'zoomInOnScroll');
        }
    });
});

// Scroll to the top when the button is clicked
scrollToTopBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scroll effect
    });
};

 