// Get navigation links
const navLinks = document.querySelectorAll('.nav-links a');

// Handle navigation clicks
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Get the target section and scroll to it
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
    
    themeToggle.addEventListener('click', () => {
        // Add transition class to body
        document.body.style.transition = 'all 0.5s ease';
        
        // Toggle dark mode
        document.body.classList.toggle('dark-mode');
        
        // Toggle icon with animation
        themeIcon.style.transition = 'transform 0.5s ease';
        themeIcon.style.transform = 'rotate(360deg)';
        
        setTimeout(() => {
            if (document.body.classList.contains('dark-mode')) {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
                localStorage.setItem('theme', 'dark');
            } else {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
                localStorage.setItem('theme', 'light');
            }
            themeIcon.style.transform = 'rotate(0deg)';
        }, 250);
    });
}); 