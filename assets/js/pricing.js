/**
 * VOLTCARE — Central Configurable Service Pricing Guide
 * All displayed amounts are clearly marked as illustrative and configurable.
 * Business owners can update PRICING_CONFIG below in one central place.
 */
(function () {
  const PRICING_CONFIG = {
    currencySymbol: '$',
    statusLabel: 'Illustrative / Configurable Estimate',
    disclaimer:
      'Displayed prices are indicative examples and may vary depending on vehicle type, parts requirements, and inspection findings. A final estimate should be confirmed before work begins.',
    categories: [
      {
        id: 'battery-services',
        title: 'Battery Services',
        code: 'GRP-BAT',
        description: 'Testing, terminal care, and battery replacement labour estimates (battery unit cost depends on vehicle specification).',
        items: [
          {
            id: 'prc-bat-health',
            name: 'Battery Health Check',
            priceRange: 'From $25 (Illustrative)',
            summary: 'Electronic state-of-charge, open-circuit voltage, and cranking conductance evaluation.',
            includes: 'Includes digital battery load test report and terminal visual check.',
            bookingService: 'Battery Testing'
          },
          {
            id: 'prc-bat-inspect',
            name: 'Battery Inspection',
            priceRange: '$25 – $40 (Illustrative)',
            summary: 'Complete physical inspection of battery casing, tray security, hold-down bracket, and cable condition.',
            includes: 'Includes state-of-charge measurement and charging voltage check.',
            bookingService: 'Battery Testing'
          },
          {
            id: 'prc-bat-replace-labour',
            name: 'Battery Replacement Labour',
            priceRange: '$35 – $75 Labour (Illustrative)',
            summary: 'Removal of old battery, terminal cleaning, installation of compatible battery unit, and system verification.',
            includes: 'Labour estimate only; battery unit priced separately according to vehicle specifications.',
            bookingService: 'Battery Replacement'
          },
          {
            id: 'prc-bat-terminal',
            name: 'Terminal Cleaning and Inspection',
            priceRange: '$25 – $45 (Illustrative)',
            summary: 'Neutralization of terminal corrosion, contact surface cleaning, and protective treatment.',
            includes: 'Includes positive and negative clamp tightening and voltage-drop check.',
            bookingService: 'Battery Maintenance'
          }
        ]
      },
      {
        id: 'electrical-diagnostics',
        title: 'Electrical Diagnostics',
        code: 'GRP-DIAG',
        description: 'Structured diagnostic testing to identify the cause behind electrical faults before repair work is quoted.',
        items: [
          {
            id: 'prc-diag-basic',
            name: 'Basic Electrical Inspection',
            priceRange: 'From $45 (Illustrative)',
            summary: 'Initial circuit check for fuse failures, relay operation, and primary power distribution.',
            includes: 'Includes baseline battery voltage and fuse block inspection.',
            bookingService: 'Electrical Diagnostics'
          },
          {
            id: 'prc-diag-charging',
            name: 'Battery and Charging System Diagnostic',
            priceRange: '$50 – $80 (Illustrative)',
            summary: 'Combined evaluation of battery load capacity, alternator output under load, and starting draw.',
            includes: 'Includes diode ripple check and primary charging cable voltage-drop measurement.',
            bookingService: 'Electrical Diagnostics'
          },
          {
            id: 'prc-diag-fault',
            name: 'Electrical Fault Inspection',
            priceRange: '$65 – $120 (Illustrative)',
            summary: 'In-depth troubleshooting for parasitic battery drain, intermittent circuit cutouts, or warning lights.',
            includes: 'Includes multimeter circuit testing and diagnostic findings summary.',
            bookingService: 'Electrical Diagnostics'
          }
        ]
      },
      {
        id: 'wiring-repairs',
        title: 'Wiring and Electrical Repairs',
        code: 'GRP-WIR',
        description: 'Targeted inspection and repair of automotive harnesses, connectors, lighting circuits, and accessory feeds.',
        items: [
          {
            id: 'prc-wir-inspect',
            name: 'Wiring Inspection',
            priceRange: 'From $50 (Illustrative)',
            summary: 'Continuity, short-to-ground, and connector pin inspection for a specific affected vehicle circuit.',
            includes: 'Includes visual loom inspection and resistance testing.',
            bookingService: 'Wiring Repair'
          },
          {
            id: 'prc-wir-connect',
            name: 'Basic Electrical Connection Repair',
            priceRange: '$45 – $95 (Illustrative)',
            summary: 'Restoration of damaged wire ends, corroded multi-plug terminals, or loose chassis ground points.',
            includes: 'Includes automotive-grade terminal crimp and protective insulation.',
            bookingService: 'Wiring Repair'
          },
          {
            id: 'prc-wir-lighting',
            name: 'Lighting Circuit Inspection',
            priceRange: '$35 – $70 (Illustrative)',
            summary: 'Fault tracing for non-working headlights, tail lights, brake lights, or turn signal circuits.',
            includes: 'Includes socket voltage check, ground test, and relay/fuse inspection.',
            bookingService: 'Lighting and Accessories'
          },
          {
            id: 'prc-wir-accessory',
            name: 'Accessory Wiring Inspection',
            priceRange: '$45 – $85 (Illustrative)',
            summary: 'Inspection of 12V cabin power sockets, horn circuits, wiper feeds, and auxiliary electrical wiring.',
            includes: 'Includes circuit protection check and repair recommendation.',
            bookingService: 'Lighting and Accessories'
          }
        ]
      },
      {
        id: 'alternator-starter',
        title: 'Alternator and Starter Services',
        code: 'GRP-ALT-STR',
        description: 'Evaluation of starting and charging assemblies to distinguish component failure from battery or cable faults.',
        items: [
          {
            id: 'prc-alt-inspect',
            name: 'Alternator Inspection',
            priceRange: '$40 – $70 (Illustrative)',
            summary: 'Testing of alternator charging voltage, current output under load, and belt drive condition.',
            includes: 'Includes voltage regulator response check and B+ cable drop test.',
            bookingService: 'Alternator Inspection'
          },
          {
            id: 'prc-str-inspect',
            name: 'Starter Motor Inspection',
            priceRange: '$40 – $70 (Illustrative)',
            summary: 'Starting circuit evaluation including solenoid trigger signal, cable drop, and starter current draw.',
            includes: 'Includes battery cranking check to rule out weak battery symptoms.',
            bookingService: 'Starter Motor Inspection'
          },
          {
            id: 'prc-chg-checks',
            name: 'Charging System Checks',
            priceRange: 'From $40 (Illustrative)',
            summary: 'Comprehensive charging loop inspection covering battery charge acceptance, alternator, and grounds.',
            includes: 'Includes loaded voltage regulation test and inspection report.',
            bookingService: 'Alternator Inspection'
          }
        ]
      }
    ]
  };

  function resolveBookingUrl(serviceName) {
    const isSubpage = window.location.pathname.includes('/pages/');
    const base = isSubpage ? 'book-service.html' : 'pages/book-service.html';
    return `${base}?service=${encodeURIComponent(serviceName)}`;
  }

  function initPricingGuide() {
    const container = document.getElementById('pricing-guide-container');
    if (!container) return;

    const filterButtons = document.querySelectorAll('[data-pricing-filter]');
    const disclaimerEls = document.querySelectorAll('[data-pricing-disclaimer]');
    let selectedCategory = 'all';

    disclaimerEls.forEach((el) => {
      el.textContent = PRICING_CONFIG.disclaimer;
    });

    function renderPricing() {
      const groups =
        selectedCategory === 'all'
          ? PRICING_CONFIG.categories
          : PRICING_CONFIG.categories.filter((c) => c.id === selectedCategory);

      container.innerHTML = groups
        .map(
          (group) => `
          <div class="mb-12 last:mb-0">
            <div class="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-theme">
              <div>
                <span class="tech-badge mb-2">${group.code}</span>
                <h2 class="font-heading text-xl sm:text-2xl font-bold text-theme-main">${group.title}</h2>
                <p class="text-sm text-theme-secondary mt-1">${group.description}</p>
              </div>
              <span class="tech-badge-amber">${PRICING_CONFIG.statusLabel}</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              ${group.items
                .map(
                  (item) => `
                  <article class="vc-card">
                    <div class="vc-card-body">
                      <div class="mb-2">
                        <span class="inline-block font-mono-tech text-xs font-bold px-2.5 py-1 rounded bg-accent-soft text-theme-main border border-amber-500/30">${item.priceRange}</span>
                      </div>
                      <h3 class="font-heading text-lg font-bold text-theme-main mb-2">${item.name}</h3>
                      <p class="text-sm text-theme-secondary mb-4">${item.summary}</p>
                      <div class="p-3 rounded-lg bg-theme-muted border border-theme text-xs text-theme-secondary mb-4">
                        <strong class="text-theme-main">Scope Note:</strong> ${item.includes}
                      </div>
                      <div class="vc-card-footer border-t border-theme">
                        <span class="font-mono-tech text-xs text-theme-muted">Subject to vehicle inspection</span>
                        <a href="${resolveBookingUrl(item.bookingService)}" class="btn-amber text-xs py-2 px-3.5">Book This Service</a>
                      </div>
                    </div>
                  </article>
                `
                )
                .join('')}
            </div>
          </div>
        `
        )
        .join('');
    }

    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        selectedCategory = btn.getAttribute('data-pricing-filter') || 'all';
        filterButtons.forEach((b) => {
          const isMatch = b.getAttribute('data-pricing-filter') === selectedCategory;
          b.className = isMatch ? 'btn-amber text-xs py-2 px-4' : 'btn-outline text-xs py-2 px-4';
        });
        renderPricing();
      });
    });

    renderPricing();
  }

  document.addEventListener('DOMContentLoaded', initPricingGuide);

  window.VoltCarePricing = PRICING_CONFIG;
})();
