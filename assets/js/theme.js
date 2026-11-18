/**
 * VOLTCARE — Theme System (Light / Dark Mode)
 * Initial default: Light theme (or system preference if no saved preference).
 * Persists in localStorage under 'voltcare_theme'.
 * Silent toggle (no toast notifications).
 */
(function () {
  const STORAGE_KEY = 'voltcare_theme';

  function getInitialTheme() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'light' || saved === 'dark') {
        return saved;
      }
    } catch (e) {
      // Ignore storage errors
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeButtons(theme);
  }

  function updateThemeButtons(theme) {
    const toggles = document.querySelectorAll('[data-theme-toggle]');
    toggles.forEach((btn) => {
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
      btn.setAttribute('title', theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
      const sunIcon = btn.querySelector('.theme-icon-sun');
      const moonIcon = btn.querySelector('.theme-icon-moon');
      const labelEl = btn.querySelector('.theme-toggle-label');
      if (sunIcon && moonIcon) {
        if (theme === 'dark') {
          sunIcon.classList.remove('hidden');
          moonIcon.classList.add('hidden');
        } else {
          sunIcon.classList.add('hidden');
          moonIcon.classList.remove('hidden');
        }
      }
      if (labelEl) {
        labelEl.textContent = theme === 'dark' ? 'Light' : 'Dark';
      }
    });
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {
      // Ignore storage errors
    }
    applyTheme(next);
  }

  // Apply immediately before DOM paint
  const initialTheme = getInitialTheme();
  document.documentElement.setAttribute('data-theme', initialTheme);

  document.addEventListener('DOMContentLoaded', () => {
    updateThemeButtons(document.documentElement.getAttribute('data-theme') || initialTheme);
    document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
      btn.addEventListener('click', toggleTheme);
    });
  });

  window.VoltCareTheme = {
    getTheme: () => document.documentElement.getAttribute('data-theme') || 'light',
    setTheme: (t) => {
      try { localStorage.setItem(STORAGE_KEY, t); } catch (e) {}
      applyTheme(t);
    },
    toggle: toggleTheme
  };
})();
