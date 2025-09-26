// Modern vanilla JS replacement for jQuery functionality

class IdentityPage {
  constructor() {
    this.init();
  }

  init() {
    this.setupPreloader();
    this.setupTooltips();
    this.setupCredits();
  }

  // Replace Preload.js functionality
  setupPreloader() {
    window.addEventListener('load', () => {
      document.body.classList.add('preload-complete');
    });
  }

  // Replace Tooltip.js functionality
  setupTooltips() {
    // Check if device supports touch events
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return; // Disable tooltips on touch devices
    }

    let tooltip = null;

    // Create tooltip after animations complete
    setTimeout(() => {
      tooltip = document.createElement('div');
      tooltip.className = 'tooltip hidden';

      const heroSection = document.querySelector('.section-hero');
      if (heroSection) {
        heroSection.appendChild(tooltip);
      }
    }, 3500);

    // Setup tooltip functionality for action links
    const actionLinks = document.querySelectorAll('.section-hero .actions > li > a');

    actionLinks.forEach(link => {
      // Move title to data-tooltip attribute
      const title = link.getAttribute('title');
      if (title && !link.getAttribute('data-tooltip')) {
        link.setAttribute('data-tooltip', title);
        link.removeAttribute('title'); // Prevent browser tooltip
      }

      // Add hover event listeners
      link.addEventListener('mouseenter', (e) => {
        if (!tooltip) return;

        const rect = link.getBoundingClientRect();
        const tooltipText = link.getAttribute('data-tooltip');

        tooltip.textContent = tooltipText;
        tooltip.style.top = `${rect.bottom + window.scrollY}px`;
        tooltip.style.left = `${rect.left + window.scrollX}px`;
        tooltip.classList.remove('hidden');
      });

      link.addEventListener('mouseleave', () => {
        if (!tooltip) return;
        tooltip.classList.add('hidden');
      });
    });
  }

  // Replace Credits.js functionality
  setupCredits() {
    const style = 'background: #ff00aa; padding: 3px; font-size: 13px; color: #ffffff';
    console.log('%cDesigned & developed by Fränz Friederes: https://fraenz.frieder.es', style);
    console.log('%cAnimations seasoned by Daniel Zat: http://danielzat.com', style);
    console.log('%cSource code under the MIT license: https://github.com/ffraenz/IdentityPage', style);
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new IdentityPage();
});

export default IdentityPage;