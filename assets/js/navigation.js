/**
 * VOLTCARE — Navigation System
 * Handles Desktop Dropdowns, Mobile Drawer, Expandable Mobile Submenus,
 * Sticky Header state, Active Navigation Links, Click-Outside & Escape Key.
 */
(function () {
  function initNavigation() {
    const header = document.querySelector('.site-header');
    const mobileToggle = document.querySelector('[data-mobile-menu-open]');
    const mobileClose = document.querySelector('[data-mobile-menu-close]');
    const mobileDrawer = document.querySelector('[data-mobile-drawer]');
    const mobileBackdrop = document.querySelector('[data-mobile-backdrop]');
    const dropdownWrappers = document.querySelectorAll('.nav-dropdown-wrapper');
    const mobileSubToggles = document.querySelectorAll('[data-mobile-sub-toggle]');

    // Sticky scroll state
    function handleScroll() {
      if (!header) return;
      if (window.scrollY > 16) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Desktop dropdown toggle on click/keyboard
    dropdownWrappers.forEach((wrapper) => {
      const trigger = wrapper.querySelector('[data-dropdown-trigger]');
      if (!trigger) return;
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isOpen = wrapper.classList.contains('is-open');
        dropdownWrappers.forEach((w) => {
          w.classList.remove('is-open');
          const t = w.querySelector('[data-dropdown-trigger]');
          if (t) t.setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          wrapper.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    });

    // Close dropdowns on outside click
    document.addEventListener('click', (e) => {
      dropdownWrappers.forEach((wrapper) => {
        if (!wrapper.contains(e.target)) {
          wrapper.classList.remove('is-open');
          const t = wrapper.querySelector('[data-dropdown-trigger]');
          if (t) t.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Mobile drawer open/close
    function openMobileMenu() {
      if (!mobileDrawer || !mobileBackdrop) return;
      mobileDrawer.classList.add('is-open');
      mobileBackdrop.classList.add('is-open');
      mobileDrawer.setAttribute('aria-hidden', 'false');
      if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
      if (!mobileDrawer || !mobileBackdrop) return;
      mobileDrawer.classList.remove('is-open');
      mobileBackdrop.classList.remove('is-open');
      mobileDrawer.setAttribute('aria-hidden', 'true');
      if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    if (mobileToggle) {
      mobileToggle.addEventListener('click', openMobileMenu);
    }
    if (mobileClose) {
      mobileClose.addEventListener('click', closeMobileMenu);
    }
    if (mobileBackdrop) {
      mobileBackdrop.addEventListener('click', closeMobileMenu);
    }

    // Mobile nested accordions
    mobileSubToggles.forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-mobile-sub-toggle');
        const panel = document.getElementById(targetId);
        const icon = btn.querySelector('.sub-chevron');
        if (!panel) return;
        const isHidden = panel.classList.contains('hidden');
        if (isHidden) {
          panel.classList.remove('hidden');
          btn.setAttribute('aria-expanded', 'true');
          if (icon) icon.style.transform = 'rotate(180deg)';
        } else {
          panel.classList.add('hidden');
          btn.setAttribute('aria-expanded', 'false');
          if (icon) icon.style.transform = '';
        }
      });
    });

    // Escape key closes dropdowns and mobile drawer
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        dropdownWrappers.forEach((wrapper) => {
          wrapper.classList.remove('is-open');
          const t = wrapper.querySelector('[data-dropdown-trigger]');
          if (t) t.setAttribute('aria-expanded', 'false');
        });
        closeMobileMenu();
      }
    });

    // Highlight active link based on current URL path
    const currentFile = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link, .dropdown-item').forEach((link) => {
      const href = link.getAttribute('href');
      if (!href) return;
      const targetFile = href.split('/').pop().split('?')[0].split('#')[0];
      if (targetFile === currentFile) {
        link.classList.add('active');
        const parentWrapper = link.closest('.nav-dropdown-wrapper');
        if (parentWrapper) {
          const trigger = parentWrapper.querySelector('.nav-link');
          if (trigger) trigger.classList.add('active');
        }
      }
    });
  }

  document.addEventListener('DOMContentLoaded', initNavigation);
})();

