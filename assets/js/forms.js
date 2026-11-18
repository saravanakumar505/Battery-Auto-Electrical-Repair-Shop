/**
 * VOLTCARE — Contact Form Validation, FAQ Search/Filters & Blog Search/Filters
 */
(function () {
  // 1. Contact Form Handler
  function initContactForm() {
    const form = document.getElementById('voltcare-contact-form');
    if (!form) return;

    const feedbackBox = document.getElementById('contact-form-feedback');
    const submitBtn = document.getElementById('ct-submit-btn');
    const resetBtn = document.getElementById('ct-reset-btn');

    function setError(inputId, errorId, msg) {
      const inp = document.getElementById(inputId);
      const err = document.getElementById(errorId);
      if (inp) {
        if (msg) {
          inp.classList.add('is-invalid');
          inp.setAttribute('aria-invalid', 'true');
        } else {
          inp.classList.remove('is-invalid');
          inp.removeAttribute('aria-invalid');
        }
      }
      if (err) {
        if (msg) {
          err.textContent = msg;
          err.classList.add('is-visible');
        } else {
          err.textContent = '';
          err.classList.remove('is-visible');
        }
      }
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      const name = (document.getElementById('ct-full-name')?.value || '').trim();
      const phone = (document.getElementById('ct-phone')?.value || '').trim();
      const email = (document.getElementById('ct-email')?.value || '').trim();
      const make = (document.getElementById('ct-vehicle-make')?.value || '').trim();
      const model = (document.getElementById('ct-vehicle-model')?.value || '').trim();
      const enquiryType = (document.getElementById('ct-enquiry-type')?.value || '').trim();
      const subject = (document.getElementById('ct-subject')?.value || '').trim();
      const message = (document.getElementById('ct-message')?.value || '').trim();
      const consent = document.getElementById('ct-consent')?.checked;

      if (name.length < 2) {
        setError('ct-full-name', 'err-ct-full-name', 'Please enter your full name.');
        valid = false;
      } else {
        setError('ct-full-name', 'err-ct-full-name', '');
      }

      const cleanPhone = phone.replace(/[\s\-().+]/g, '');
      if (!/^\d{7,15}$/.test(cleanPhone)) {
        setError('ct-phone', 'err-ct-phone', 'Please enter a valid phone number (7–15 digits).');
        valid = false;
      } else {
        setError('ct-phone', 'err-ct-phone', '');
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setError('ct-email', 'err-ct-email', 'Please enter a valid email address.');
        valid = false;
      } else {
        setError('ct-email', 'err-ct-email', '');
      }

      if (!make) {
        setError('ct-vehicle-make', 'err-ct-vehicle-make', 'Please enter your vehicle make.');
        valid = false;
      } else {
        setError('ct-vehicle-make', 'err-ct-vehicle-make', '');
      }

      if (!model) {
        setError('ct-vehicle-model', 'err-ct-vehicle-model', 'Please enter your vehicle model.');
        valid = false;
      } else {
        setError('ct-vehicle-model', 'err-ct-vehicle-model', '');
      }

      if (!enquiryType) {
        setError('ct-enquiry-type', 'err-ct-enquiry-type', 'Please select an enquiry category.');
        valid = false;
      } else {
        setError('ct-enquiry-type', 'err-ct-enquiry-type', '');
      }

      if (subject.length < 3) {
        setError('ct-subject', 'err-ct-subject', 'Please enter a clear subject line.');
        valid = false;
      } else {
        setError('ct-subject', 'err-ct-subject', '');
      }

      if (message.length < 10) {
        setError('ct-message', 'err-ct-message', 'Please enter your enquiry message (at least 10 characters).');
        valid = false;
      } else {
        setError('ct-message', 'err-ct-message', '');
      }

      if (!consent) {
        setError('ct-consent', 'err-ct-consent', 'Please confirm consent to process your enquiry details.');
        valid = false;
      } else {
        setError('ct-consent', 'err-ct-consent', '');
      }

      if (!valid) {
        if (feedbackBox) {
          feedbackBox.className = 'p-4 rounded-lg border border-red-500/40 bg-red-500/10 text-sm text-theme-main mb-6';
          feedbackBox.innerHTML = '<strong>Form Incomplete:</strong> Please check the highlighted fields below and try again.';
          feedbackBox.classList.remove('hidden');
        }
        return;
      }

      const originalBtnHtml = submitBtn ? submitBtn.innerHTML : 'Send Enquiry';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="font-mono-tech text-xs">VALIDATING ENQUIRY...</span>';
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHtml;
        }
        if (feedbackBox) {
          feedbackBox.className = 'p-5 rounded-lg border-s-accent bg-accent-soft text-sm text-theme-main mb-6';
          feedbackBox.innerHTML = `
            <p class="font-heading font-bold text-base mb-1">Enquiry Validated &amp; Prepared</p>
            <p>Thank you, <strong>${name.replace(/</g, '&lt;')}</strong>. Your frontend enquiry regarding <strong>${enquiryType.replace(/</g, '&lt;')}</strong> (${make.replace(/</g, '&lt;')} ${model.replace(/</g, '&lt;')}) has been formatted. Note: Actual message delivery requires backend or email service integration by the business owner.</p>
          `;
          feedbackBox.classList.remove('hidden');
        }
        if (window.VoltCareToast) {
          window.VoltCareToast.show('Enquiry validated on frontend.');
        }
      }, 600);
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        form.reset();
        document.querySelectorAll('#voltcare-contact-form .is-invalid').forEach((el) => el.classList.remove('is-invalid'));
        document.querySelectorAll('#voltcare-contact-form .vc-error-text').forEach((el) => {
          el.textContent = '';
          el.classList.remove('is-visible');
        });
        if (feedbackBox) feedbackBox.classList.add('hidden');
        if (window.VoltCareToast) {
          window.VoltCareToast.show('Contact form reset.');
        }
      });
    }
  }

  // 2. Interactive FAQ Page Filter, Search & Expand/Collapse All
  function initFaqInteractive() {
    const faqContainer = document.getElementById('faq-accordion-list');
    if (!faqContainer) return;

    const searchInput = document.getElementById('faq-search-input');
    const categoryBtns = document.querySelectorAll('[data-faq-category]');
    const expandAllBtn = document.getElementById('faq-expand-all');
    const collapseAllBtn = document.getElementById('faq-collapse-all');
    const emptyState = document.getElementById('faq-empty-state');
    const items = Array.from(faqContainer.querySelectorAll('.vc-accordion-item'));

    let currentCategory = 'all';
    let searchTerm = '';

    function filterFaqs() {
      let visibleCount = 0;
      const q = searchTerm.trim().toLowerCase();

      items.forEach((item) => {
        const itemCat = item.getAttribute('data-faq-item-category') || '';
        const text = item.textContent.toLowerCase();
        const catMatch = currentCategory === 'all' || itemCat === currentCategory;
        const searchMatch = !q || text.includes(q);

        if (catMatch && searchMatch) {
          item.classList.remove('hidden');
          visibleCount++;
        } else {
          item.classList.add('hidden');
        }
      });

      if (emptyState) {
        if (visibleCount === 0) {
          emptyState.classList.remove('hidden');
        } else {
          emptyState.classList.add('hidden');
        }
      }
    }

    categoryBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        currentCategory = btn.getAttribute('data-faq-category') || 'all';
        categoryBtns.forEach((b) => {
          const isMatch = b.getAttribute('data-faq-category') === currentCategory;
          b.className = isMatch ? 'btn-amber text-xs py-2 px-3.5' : 'btn-outline text-xs py-2 px-3.5';
        });
        filterFaqs();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value || '';
        filterFaqs();
      });
    }

    if (expandAllBtn) {
      expandAllBtn.addEventListener('click', () => {
        items.forEach((item) => {
          if (!item.classList.contains('hidden')) {
            item.classList.add('is-active');
            const trigger = item.querySelector('.vc-accordion-trigger');
            if (trigger) trigger.setAttribute('aria-expanded', 'true');
          }
        });
      });
    }

    if (collapseAllBtn) {
      collapseAllBtn.addEventListener('click', () => {
        items.forEach((item) => {
          item.classList.remove('is-active');
          const trigger = item.querySelector('.vc-accordion-trigger');
          if (trigger) trigger.setAttribute('aria-expanded', 'false');
        });
      });
    }
  }

  // 3. Blog Journal Search & Category Filtering
  function initBlogFilters() {
    const blogGrid = document.getElementById('blog-articles-grid');
    if (!blogGrid) return;

    const searchInput = document.getElementById('blog-search-input');
    const categoryBtns = document.querySelectorAll('[data-blog-category]');
    const cards = Array.from(blogGrid.querySelectorAll('[data-article-category]'));
    const emptyMsg = document.getElementById('blog-empty-state');

    let activeCat = 'all';
    let query = '';

    function updateBlogView() {
      let shown = 0;
      const q = query.trim().toLowerCase();

      cards.forEach((card) => {
        const cat = card.getAttribute('data-article-category') || '';
        const text = card.textContent.toLowerCase();
        const matchesCat = activeCat === 'all' || cat === activeCat;
        const matchesQuery = !q || text.includes(q);
        if (matchesCat && matchesQuery) {
          card.classList.remove('hidden');
          shown++;
        } else {
          card.classList.add('hidden');
        }
      });

      if (emptyMsg) {
        emptyMsg.classList.toggle('hidden', shown > 0);
      }
    }

    categoryBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        activeCat = btn.getAttribute('data-blog-category') || 'all';
        categoryBtns.forEach((b) => {
          const isSelected = b.getAttribute('data-blog-category') === activeCat;
          b.className = isSelected ? 'btn-amber text-xs py-2 px-3.5' : 'btn-outline text-xs py-2 px-3.5';
        });
        updateBlogView();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        query = e.target.value || '';
        updateBlogView();
      });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    initContactForm();
    initFaqInteractive();
    initBlogFilters();
  });
})();

