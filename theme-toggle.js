// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;
  
  // Check for saved theme preference or default to dark
  const storedTheme = 'dark';
  
  if (storedTheme === 'light') {
    body.classList.add('light-mode');
    themeToggle.checked = true;
  } else {
    // Default to dark theme
    body.classList.remove('light-mode');
    themeToggle.checked = false;
    localStorage.setItem('theme', 'dark');
  }
  
  // Toggle theme when the switch is clicked
  themeToggle.addEventListener('change', function() {
    if (this.checked) {
      // Enable light mode
      body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      // Enable dark mode (starry sky)
      body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
  });

  // Add animation class to elements when they enter viewport
  const animateElements = document.querySelectorAll('.service-category, .feature-card, .project-card, .blog-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  animateElements.forEach(element => {
    observer.observe(element);
  });
});

// Add a subtle parallax effect to the stars when scrolling
window.addEventListener('scroll', function() {
  const stars = document.querySelectorAll('.stars');
  const scrollPosition = window.scrollY;
  
  stars.forEach(starLayer => {
    starLayer.style.transform = `translateY(${scrollPosition * 0.1}px)`;
  });
});