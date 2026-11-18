/**
 * VOLTCARE — Scroll Animations & Back-to-Top Control
 * Respects prefers-reduced-motion.
 */
(function () {
  function initAnimations() {
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealItems = document.querySelectorAll('.reveal-on-scroll');

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealItems.forEach((el) => el.classList.add('is-revealed'));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
      );
      revealItems.forEach((el) => observer.observe(el));
    }

    // Back to top button
    const backToTopBtn = document.querySelector('[data-back-to-top]');
    if (backToTopBtn) {
      window.addEventListener(
        'scroll',
        () => {
          if (window.scrollY > 420) {
            backToTopBtn.classList.add('is-visible');
          } else {
            backToTopBtn.classList.remove('is-visible');
          }
        },
        { passive: true }
      );

      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });
      });
    }
  }

  document.addEventListener('DOMContentLoaded', initAnimations);
})();

