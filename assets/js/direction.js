/**
 * VOLTCARE — Layout Direction System (LTR / RTL)
 * Strictly switches layout direction ONLY. All content remains in English.
 * Persists in localStorage under 'voltcare_dir'.
 * Silent toggle (no toast notifications).
 * Displays 'RTL' when in LTR mode (click to switch to RTL) and 'LTR' when in RTL mode.
 */
(function () {
  const STORAGE_KEY = 'voltcare_dir';

  function getSavedDirection() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'rtl' || saved === 'ltr') {
        return saved;
      }
    } catch (e) {
      // Ignore storage errors
    }
    return 'ltr';
  }

  function applyDirection(dir) {
    document.documentElement.dir = dir;
    document.documentElement.lang = 'en';
    updateDirectionButtons(dir);
  }

  function updateDirectionButtons(dir) {
    const nextActionLabel = dir === 'ltr' ? 'RTL' : 'LTR';
    const toggles = document.querySelectorAll('[data-dir-toggle]');
    toggles.forEach((btn) => {
      const badge = btn.querySelector('[data-dir-label]');
      if (badge) {
        badge.textContent = nextActionLabel;
      } else {
        btn.textContent = nextActionLabel;
      }
      btn.setAttribute('aria-label', `Switch layout direction to ${nextActionLabel}`);
      btn.setAttribute('title', `Switch layout to ${nextActionLabel}`);
    });
  }

  function toggleDirection() {
    const current = document.documentElement.dir === 'rtl' ? 'rtl' : 'ltr';
    const next = current === 'ltr' ? 'rtl' : 'ltr';
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {
      // Ignore storage errors
    }
    applyDirection(next);
  }

  // Apply immediately to avoid layout flash
  const initialDir = getSavedDirection();
  document.documentElement.dir = initialDir;
  document.documentElement.lang = 'en';

  document.addEventListener('DOMContentLoaded', () => {
    updateDirectionButtons(document.documentElement.dir || initialDir);
    document.querySelectorAll('[data-dir-toggle]').forEach((btn) => {
      btn.addEventListener('click', toggleDirection);
    });
  });

  window.VoltCareDirection = {
    getDirection: () => document.documentElement.dir || 'ltr',
    setDirection: (d) => {
      const clean = d === 'rtl' ? 'rtl' : 'ltr';
      try { localStorage.setItem(STORAGE_KEY, clean); } catch (e) {}
      applyDirection(clean);
    },
    toggle: toggleDirection
  };
})();
