/**
 * VOLTCARE — Workshop & Service Gallery System
 * Category filtering, responsive lightbox modal, Previous/Next navigation,
 * Escape-key support, click-outside handling, and touch swipe controls.
 */
(function () {
  function initGallery() {
    const galleryGrid = document.getElementById('voltcare-gallery-grid');
    if (!galleryGrid) return;

    const filterBtns = document.querySelectorAll('[data-gallery-filter]');
    const items = Array.from(galleryGrid.querySelectorAll('[data-gallery-item]'));
    const lightbox = document.getElementById('vc-gallery-lightbox');
    const lightboxImg = document.getElementById('vc-lightbox-img');
    const lightboxTitle = document.getElementById('vc-lightbox-title');
    const lightboxCategory = document.getElementById('vc-lightbox-category');
    const lightboxCounter = document.getElementById('vc-lightbox-counter');
    const prevBtn = document.getElementById('vc-lightbox-prev');
    const nextBtn = document.getElementById('vc-lightbox-next');
    const closeBtn = document.getElementById('vc-lightbox-close');

    let activeCategory = 'all';
    let visibleItems = [...items];
    let currentIndex = 0;

    function updateFilter(cat) {
      activeCategory = cat;
      visibleItems = [];
      items.forEach((item) => {
        const itemCat = item.getAttribute('data-gallery-category') || '';
        if (cat === 'all' || itemCat === cat) {
          item.classList.remove('hidden');
          visibleItems.push(item);
        } else {
          item.classList.add('hidden');
        }
      });

      filterBtns.forEach((btn) => {
        const isCurrent = btn.getAttribute('data-gallery-filter') === cat;
        btn.className = isCurrent ? 'btn-amber text-xs py-2 px-3.5' : 'btn-outline text-xs py-2 px-3.5';
      });
    }

    function openLightbox(index) {
      if (!lightbox || visibleItems.length === 0) return;
      currentIndex = (index + visibleItems.length) % visibleItems.length;
      const target = visibleItems[currentIndex];
      const img = target.querySelector('img');
      const title = target.getAttribute('data-gallery-title') || (img ? img.alt : '');
      const cat = target.getAttribute('data-gallery-category') || 'Workshop';

      if (lightboxImg && img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
      }
      if (lightboxTitle) lightboxTitle.textContent = title;
      if (lightboxCategory) lightboxCategory.textContent = cat;
      if (lightboxCounter) lightboxCounter.textContent = `${currentIndex + 1} / ${visibleItems.length}`;

      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      if (!lightbox) return;
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    function stepLightbox(delta) {
      if (visibleItems.length === 0) return;
      openLightbox(currentIndex + delta);
    }

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        updateFilter(btn.getAttribute('data-gallery-filter') || 'all');
      });
    });

    items.forEach((item) => {
      item.addEventListener('click', () => {
        const idx = visibleItems.indexOf(item);
        if (idx !== -1) {
          openLightbox(idx);
        }
      });
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const idx = visibleItems.indexOf(item);
          if (idx !== -1) openLightbox(idx);
        }
      });
    });

    if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); stepLightbox(-1); });
    if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); stepLightbox(1); });
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

    if (lightbox) {
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
          closeLightbox();
        }
      });
    }

    document.addEventListener('keydown', (e) => {
      if (!lightbox || !lightbox.classList.contains('is-open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') stepLightbox(-1);
      if (e.key === 'ArrowRight') stepLightbox(1);
    });

    // Touch swipe support for mobile lightbox
    let touchStartX = 0;
    if (lightbox) {
      lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });
      lightbox.addEventListener('touchend', (e) => {
        const diff = e.changedTouches[0].screenX - touchStartX;
        if (Math.abs(diff) > 45) {
          stepLightbox(diff < 0 ? 1 : -1);
        }
      }, { passive: true });
    }
  }

  document.addEventListener('DOMContentLoaded', initGallery);
})();

