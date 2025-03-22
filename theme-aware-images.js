// Theme-Aware Image Handler
document.addEventListener('DOMContentLoaded', function() {
    // Function to update images based on current theme
    function updateThemeImages() {
      const isDarkMode = !document.body.classList.contains('light-mode');
      
      // Process all images with data-dark-src or data-light-src attributes
      const themeAwareImages = document.querySelectorAll('img[data-dark-src], img[data-light-src]');
      
      themeAwareImages.forEach(img => {
        const darkSrc = img.getAttribute('data-dark-src');
        const lightSrc = img.getAttribute('data-light-src');
        const currentSrc = img.getAttribute('src');
        
        // Save the original src the first time
        if (!img.getAttribute('data-original-src')) {
          img.setAttribute('data-original-src', currentSrc);
        }
        
        // Only update if necessary
        if (isDarkMode && darkSrc && currentSrc !== darkSrc) {
          img.src = darkSrc;
        } else if (!isDarkMode && lightSrc && currentSrc !== lightSrc) {
          img.src = lightSrc;
        } else if (!isDarkMode && !lightSrc && img.getAttribute('data-original-src')) {
          // Revert to original if no light src specified
          img.src = img.getAttribute('data-original-src');
        }
      });
    }
    
    // Update images on initialization
    updateThemeImages();
    
    // Update images when theme changes
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      themeToggle.addEventListener('change', updateThemeImages);
    }
    
    // Add dark mode filters to certain images that might not look good in dark mode
    function applyImageFilters() {
      const isDarkMode = !document.body.classList.contains('light-mode');
      const regularImages = document.querySelectorAll('img:not([data-dark-src]):not(.no-filter)');
      
      regularImages.forEach(img => {
        if (isDarkMode) {
          // Apply subtle adjustments for dark mode
          img.style.filter = 'brightness(0.9) contrast(1.1)';
        } else {
          // Reset filters in light mode
          img.style.filter = 'none';
        }
      });
    }
    
    // Apply filters on initialization
    applyImageFilters();
    
    // Apply filters when theme changes
    if (themeToggle) {
      themeToggle.addEventListener('change', applyImageFilters);
    }
  });