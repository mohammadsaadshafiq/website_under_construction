// Enhanced Starry Sky Background
document.addEventListener('DOMContentLoaded', function() {
    // Function to generate dynamic stars
    function createStarryBackground() {
      // Only create stars if in dark mode
      if (document.body.classList.contains('light-mode')) return;
      
      const starContainers = document.querySelectorAll('.starry-background');
      
      starContainers.forEach(container => {
        // Create stars container if it doesn't exist
        let starsContainer = container.querySelector('.stars-container');
        if (!starsContainer) {
          starsContainer = document.createElement('div');
          starsContainer.className = 'stars-container';
          container.appendChild(starsContainer);
        }
        
        // Clear existing stars
        starsContainer.innerHTML = '';
        
        // Create stars layer
        const stars = document.createElement('div');
        stars.className = 'stars';
        starsContainer.appendChild(stars);
        
        // Create twinkle stars
        const twinkleStars = document.createElement('div');
        twinkleStars.className = 'twinkle-stars';
        
        // Add twinkling stars
        for (let i = 0; i < 5; i++) {
          const star = document.createElement('div');
          star.className = 'twinkle-star';
          star.style.top = `${Math.random() * 100}%`;
          star.style.left = `${Math.random() * 100}%`;
          star.style.animationDelay = `${Math.random() * 5}s`;
          twinkleStars.appendChild(star);
        }
        starsContainer.appendChild(twinkleStars);
        
        // Create shooting stars
        for (let i = 0; i < 2; i++) {
          const shootingStar = document.createElement('div');
          shootingStar.className = 'shooting-star';
          shootingStar.style.top = `${10 + Math.random() * 60}%`;
          shootingStar.style.animationDelay = `${i * 5 + Math.random() * 5}s`;
          shootingStar.style.transform = `rotate(-${10 + Math.random() * 20}deg)`;
          starsContainer.appendChild(shootingStar);
        }
        
        // Create satellite
        const satellite = document.createElement('div');
        satellite.className = 'satellite';
        
        const satelliteTrail = document.createElement('div');
        satelliteTrail.className = 'satellite-trail';
        satellite.appendChild(satelliteTrail);
        
        starsContainer.appendChild(satellite);
      });
    }
    
    // Initialize starry backgrounds
    createStarryBackground();
    
    // Recreate stars when theme changes
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      themeToggle.addEventListener('change', createStarryBackground);
    }
    
    // Add starry background class to sections that should have it
    const sectionsWithStars = [
      document.querySelector('.header'),
      document.querySelector('.service'),
      document.querySelector('.newsletter')
    ];
    
    sectionsWithStars.forEach(section => {
      if (section && !section.classList.contains('starry-background')) {
        section.classList.add('starry-background');
      }
    });
    
    // Create stars on window resize (responsive adjustment)
    let resizeTimer;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(createStarryBackground, 200);
    });
    
    // Add subtle parallax effect for stars when scrolling
    window.addEventListener('scroll', function() {
      if (document.body.classList.contains('light-mode')) return;
      
      const scrollPosition = window.pageYOffset;
      const starsLayers = document.querySelectorAll('.stars');
      const twinkleStars = document.querySelectorAll('.twinkle-stars');
      
      starsLayers.forEach(layer => {
        layer.style.transform = `translateY(${scrollPosition * 0.05}px)`;
      });
      
      twinkleStars.forEach(layer => {
        layer.style.transform = `translateY(${scrollPosition * 0.03}px)`;
      });
    });
  });