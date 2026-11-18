/**
 * VOLTCARE — Service Booking Enquiry Form Handler
 * Frontend validation, past-date prevention, URL service prefill,
 * loading state, booking request summary, and reset functionality.
 * Does NOT store personal/vehicle details in localStorage.
 */
(function () {
  function initBookingForm() {
    const form = document.getElementById('voltcare-booking-form');
    if (!form) return;

    const dateInput = document.getElementById('bk-preferred-date');
    const serviceSelect = document.getElementById('bk-service-required');
    const summaryPanel = document.getElementById('booking-summary-panel');
    const summaryContent = document.getElementById('booking-summary-content');
    const feedbackBanner = document.getElementById('booking-feedback-banner');
    const submitBtn = document.getElementById('bk-submit-btn');
    const resetBtn = document.getElementById('bk-reset-btn');

    // Set minimum date to today
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const todayStr = `${yyyy}-${mm}-${dd}`;
    if (dateInput) {
      dateInput.setAttribute('min', todayStr);
    }

    // Preselect service from URL query parameter (?service=...)
    const params = new URLSearchParams(window.location.search);
    const preselectedService = params.get('service');
    if (preselectedService && serviceSelect) {
      const normalized = preselectedService.trim().toLowerCase();
      Array.from(serviceSelect.options).forEach((opt) => {
        if (opt.value.toLowerCase().includes(normalized) || normalized.includes(opt.value.toLowerCase())) {
          if (opt.value !== '') {
            serviceSelect.value = opt.value;
          }
        }
      });
    }

    function setFieldError(fieldId, errorId, message) {
      const field = document.getElementById(fieldId);
      const errEl = document.getElementById(errorId);
      if (field) {
        if (message) {
          field.classList.add('is-invalid');
          field.setAttribute('aria-invalid', 'true');
        } else {
          field.classList.remove('is-invalid');
          field.removeAttribute('aria-invalid');
        }
      }
      if (errEl) {
        if (message) {
          errEl.textContent = message;
          errEl.classList.add('is-visible');
        } else {
          errEl.textContent = '';
          errEl.classList.remove('is-visible');
        }
      }
    }

    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validatePhone(phone) {
      const cleaned = phone.replace(/[\s\-().+]/g, '');
      return /^\d{7,15}$/.test(cleaned);
    }

    function validateForm() {
      let valid = true;

      const fullName = (document.getElementById('bk-full-name')?.value || '').trim();
      const phone = (document.getElementById('bk-phone')?.value || '').trim();
      const email = (document.getElementById('bk-email')?.value || '').trim();
      const make = (document.getElementById('bk-vehicle-make')?.value || '').trim();
      const model = (document.getElementById('bk-vehicle-model')?.value || '').trim();
      const year = (document.getElementById('bk-vehicle-year')?.value || '').trim();
      const service = (document.getElementById('bk-service-required')?.value || '').trim();
      const mainProblem = (document.getElementById('bk-main-problem')?.value || '').trim();
      const description = (document.getElementById('bk-description')?.value || '').trim();
      const prefDate = (document.getElementById('bk-preferred-date')?.value || '').trim();
      const prefTime = (document.getElementById('bk-preferred-time')?.value || '').trim();

      if (fullName.length < 2) {
        setFieldError('bk-full-name', 'err-bk-full-name', 'Please enter your full name.');
        valid = false;
      } else {
        setFieldError('bk-full-name', 'err-bk-full-name', '');
      }

      if (!validatePhone(phone)) {
        setFieldError('bk-phone', 'err-bk-phone', 'Please enter a valid contact phone number (7–15 digits).');
        valid = false;
      } else {
        setFieldError('bk-phone', 'err-bk-phone', '');
      }

      if (!validateEmail(email)) {
        setFieldError('bk-email', 'err-bk-email', 'Please enter a valid email address.');
        valid = false;
      } else {
        setFieldError('bk-email', 'err-bk-email', '');
      }

      if (!make) {
        setFieldError('bk-vehicle-make', 'err-bk-vehicle-make', 'Please enter your vehicle make (e.g., Toyota, Ford).');
        valid = false;
      } else {
        setFieldError('bk-vehicle-make', 'err-bk-vehicle-make', '');
      }

      if (!model) {
        setFieldError('bk-vehicle-model', 'err-bk-vehicle-model', 'Please enter your vehicle model.');
        valid = false;
      } else {
        setFieldError('bk-vehicle-model', 'err-bk-vehicle-model', '');
      }

      const yearNum = parseInt(year, 10);
      const maxYear = today.getFullYear() + 1;
      if (!year || isNaN(yearNum) || yearNum < 1950 || yearNum > maxYear) {
        setFieldError('bk-vehicle-year', 'err-bk-vehicle-year', `Please enter a valid 4-digit vehicle year (1950–${maxYear}).`);
        valid = false;
      } else {
        setFieldError('bk-vehicle-year', 'err-bk-vehicle-year', '');
      }

      if (!service) {
        setFieldError('bk-service-required', 'err-bk-service-required', 'Please select the required service.');
        valid = false;
      } else {
        setFieldError('bk-service-required', 'err-bk-service-required', '');
      }

      if (!mainProblem) {
        setFieldError('bk-main-problem', 'err-bk-main-problem', 'Please select or enter the main symptom/problem.');
        valid = false;
      } else {
        setFieldError('bk-main-problem', 'err-bk-main-problem', '');
      }

      if (description.length < 10) {
        setFieldError('bk-description', 'err-bk-description', 'Please describe the symptoms briefly (at least 10 characters).');
        valid = false;
      } else {
        setFieldError('bk-description', 'err-bk-description', '');
      }

      if (!prefDate) {
        setFieldError('bk-preferred-date', 'err-bk-preferred-date', 'Please choose a preferred appointment date.');
        valid = false;
      } else if (prefDate < todayStr) {
        setFieldError('bk-preferred-date', 'err-bk-preferred-date', 'Preferred date cannot be in the past.');
        valid = false;
      } else {
        setFieldError('bk-preferred-date', 'err-bk-preferred-date', '');
      }

      if (!prefTime) {
        setFieldError('bk-preferred-time', 'err-bk-preferred-time', 'Please select a preferred time window.');
        valid = false;
      } else {
        setFieldError('bk-preferred-time', 'err-bk-preferred-time', '');
      }

      return valid;
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (feedbackBanner) {
        feedbackBanner.classList.add('hidden');
      }

      const isValid = validateForm();
      if (!isValid) {
        if (feedbackBanner) {
          feedbackBanner.className = 'p-4 rounded-lg border border-red-500/40 bg-red-500/10 text-sm text-theme-main mb-6';
          feedbackBanner.innerHTML = '<strong>Validation Error:</strong> Please review the highlighted fields below and correct any missing or invalid information.';
          feedbackBanner.classList.remove('hidden');
        }
        if (window.VoltCareToast) {
          window.VoltCareToast.show('Please complete all required booking fields.');
        }
        return;
      }

      // Show loading state
      const origText = submitBtn ? submitBtn.innerHTML : 'Submit Booking Request';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="font-mono-tech text-xs">PREPARING SERVICE REQUEST...</span>';
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = origText;
        }

        const data = {
          fullName: document.getElementById('bk-full-name')?.value.trim(),
          phone: document.getElementById('bk-phone')?.value.trim(),
          email: document.getElementById('bk-email')?.value.trim(),
          make: document.getElementById('bk-vehicle-make')?.value.trim(),
          model: document.getElementById('bk-vehicle-model')?.value.trim(),
          year: document.getElementById('bk-vehicle-year')?.value.trim(),
          fuel: document.getElementById('bk-fuel-type')?.value.trim() || 'Not specified',
          regNo: document.getElementById('bk-reg-number')?.value.trim() || 'Not provided',
          service: document.getElementById('bk-service-required')?.value.trim(),
          problem: document.getElementById('bk-main-problem')?.value.trim(),
          description: document.getElementById('bk-description')?.value.trim(),
          date: document.getElementById('bk-preferred-date')?.value.trim(),
          time: document.getElementById('bk-preferred-time')?.value.trim(),
          notes: document.getElementById('bk-additional-notes')?.value.trim() || 'None'
        };

        if (feedbackBanner) {
          feedbackBanner.className = 'p-5 rounded-lg border-s-accent bg-accent-soft text-sm text-theme-main mb-6';
          feedbackBanner.innerHTML = `
            <p class="font-heading font-bold text-base mb-1">Service Request Prepared</p>
            <p>Your service request has been prepared. Appointment confirmation requires a connected booking system or direct business follow-up.</p>
          `;
          feedbackBanner.classList.remove('hidden');
        }

        if (summaryPanel && summaryContent) {
          summaryContent.innerHTML = `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div class="p-3 rounded bg-theme-muted border border-theme">
                <span class="font-mono-tech text-xs text-theme-muted block">CUSTOMER</span>
                <strong class="text-theme-main">${escapeHtml(data.fullName)}</strong>
                <div class="text-xs text-theme-secondary mt-0.5">${escapeHtml(data.phone)} • ${escapeHtml(data.email)}</div>
              </div>
              <div class="p-3 rounded bg-theme-muted border border-theme">
                <span class="font-mono-tech text-xs text-theme-muted block">VEHICLE</span>
                <strong class="text-theme-main">${escapeHtml(data.year)} ${escapeHtml(data.make)} ${escapeHtml(data.model)}</strong>
                <div class="text-xs text-theme-secondary mt-0.5">Fuel: ${escapeHtml(data.fuel)} • Reg: ${escapeHtml(data.regNo)}</div>
              </div>
              <div class="p-3 rounded bg-theme-muted border border-theme">
                <span class="font-mono-tech text-xs text-theme-muted block">REQUESTED SERVICE</span>
                <strong class="text-theme-main">${escapeHtml(data.service)}</strong>
                <div class="text-xs text-theme-secondary mt-0.5">Issue: ${escapeHtml(data.problem)}</div>
              </div>
              <div class="p-3 rounded bg-theme-muted border border-theme">
                <span class="font-mono-tech text-xs text-theme-muted block">PREFERRED SCHEDULE</span>
                <strong class="text-theme-main">${escapeHtml(data.date)}</strong>
                <div class="text-xs text-theme-secondary mt-0.5">Window: ${escapeHtml(data.time)}</div>
              </div>
              <div class="sm:col-span-2 p-3 rounded bg-theme-muted border border-theme">
                <span class="font-mono-tech text-xs text-theme-muted block">SYMPTOM DESCRIPTION &amp; NOTES</span>
                <p class="text-theme-main text-xs mt-1">${escapeHtml(data.description)}</p>
                <p class="text-theme-secondary text-xs mt-1">Additional Notes: ${escapeHtml(data.notes)}</p>
              </div>
            </div>
          `;
          summaryPanel.classList.remove('hidden');
          summaryPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        if (window.VoltCareToast) {
          window.VoltCareToast.show('Service request summary generated.');
        }
      }, 650);
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        form.reset();
        document.querySelectorAll('#voltcare-booking-form .is-invalid').forEach((el) => el.classList.remove('is-invalid'));
        document.querySelectorAll('#voltcare-booking-form .vc-error-text').forEach((el) => {
          el.textContent = '';
          el.classList.remove('is-visible');
        });
        if (feedbackBanner) feedbackBanner.classList.add('hidden');
        if (summaryPanel) summaryPanel.classList.add('hidden');
        if (window.VoltCareToast) {
          window.VoltCareToast.show('Booking form cleared.');
        }
      });
    }
  }

  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  document.addEventListener('DOMContentLoaded', initBookingForm);
})();

