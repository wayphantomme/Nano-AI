// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'white';
        navbar.style.boxShadow = 'none';
    }
});

// Auto-sliding text animation
const sliderTrack = document.querySelector('.slide-track');
const originalContent = sliderTrack.innerHTML;
sliderTrack.innerHTML = originalContent + originalContent;

// Level cards hover effect
document.querySelectorAll('.level').forEach(level => {
    level.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.transition = 'transform 0.3s ease';
    });

    level.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});