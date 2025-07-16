// Mouse tracking tilt effect for mystical heading cards
export function initializeTiltEffect() {
  const cards = document.querySelectorAll('.mystical-heading-card');
  
  cards.forEach(card => {
    // Add mouse move listener
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate center position
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calculate rotation values (max 15 degrees)
      const rotateX = ((y - centerY) / centerY) * -15;
      const rotateY = ((x - centerX) / centerX) * 15;
      
      // Apply transformation
      card.style.transform = `
        translateY(-12px) 
        scale(1.05) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg)
        perspective(1000px)
      `;
    });
    
    // Reset on mouse leave
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1) rotateX(0) rotateY(0)';
    });
    
    // Add subtle parallax effect to content
    const content = card.querySelector('h1, h2, h3, h4, h5, h6');
    if (content) {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Subtle parallax movement for content
        const moveX = ((x - centerX) / centerX) * 5;
        const moveY = ((y - centerY) / centerY) * 5;
        
        content.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
      
      card.addEventListener('mouseleave', () => {
        content.style.transform = 'translate(0, 0)';
      });
    }
  });
}

// Initialize when DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initializeTiltEffect);
  
  // Also initialize on page navigation (for SPA routing)
  window.addEventListener('load', initializeTiltEffect);
}
