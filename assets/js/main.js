/**
 * VOLTCARE — Main Application Bootstrapper
 * Initializes Accordions, Toast Notifications, Lucide Icons, and Blog Detail Switcher.
 */
(function () {
  // Toast Notification Utility
  const ToastManager = {
    container: null,
    ensureContainer() {
      if (!this.container) {
        this.container = document.querySelector('.vc-toast-container');
        if (!this.container) {
          this.container = document.createElement('div');
          this.container.className = 'vc-toast-container';
          this.container.setAttribute('aria-live', 'polite');
          document.body.appendChild(this.container);
        }
      }
      return this.container;
    },
    show(message, duration = 3200) {
      const root = this.ensureContainer();
      const toast = document.createElement('div');
      toast.className = 'vc-toast';
      toast.innerHTML = `
        <div class="text-xs font-medium text-theme-main">${message}</div>
        <button type="button" class="text-theme-muted hover:text-theme-main text-xs font-bold px-1" aria-label="Dismiss notification">✕</button>
      `;
      const closeBtn = toast.querySelector('button');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => toast.remove());
      }
      root.appendChild(toast);
      setTimeout(() => {
        if (toast.parentNode) toast.remove();
      }, duration);
    }
  };

  window.VoltCareToast = ToastManager;

  // Generic Accordion Toggle
  function initAccordions() {
    document.querySelectorAll('.vc-accordion-trigger').forEach((trigger) => {
      trigger.addEventListener('click', () => {
        const item = trigger.closest('.vc-accordion-item');
        if (!item) return;
        const isOpen = item.classList.contains('is-active');
        item.classList.toggle('is-active', !isOpen);
        trigger.setAttribute('aria-expanded', String(!isOpen));
      });
    });
  }

  // Dynamic Blog Detail Hydration (blog-details.html?article=...)
  const BLOG_ARTICLES = {
    'battery-warning-signs': {
      title: '6 Early Warning Signs Your Vehicle Battery Needs Professional Testing',
      category: 'Battery Care',
      date: 'October 14, 2026',
      author: 'VOLTCARE Technical Editorial Team',
      image: '../assets/images/blog/blog-battery-warning-signs.jpg',
      alt: 'Technician inspecting an automotive battery inside a vehicle engine compartment',
      lead: 'An automotive battery rarely fails without giving subtle electrical clues first. Understanding how slow cranking, dimming lights, and terminal corrosion develop helps drivers schedule preventive testing before getting stranded.',
      body: `
        <h2 class="font-heading text-2xl font-bold text-theme-main mt-8 mb-3">1. Slow or Laboured Engine Cranking</h2>
        <p class="text-theme-secondary mb-4">When you turn the ignition key or press the start button, the starter motor draws a substantial surge of current from the battery. If the engine cranks noticeably slower than normal, the battery's available cranking conductance may be reduced, or high resistance may be present at the terminal clamps.</p>
        <h2 class="font-heading text-2xl font-bold text-theme-main mt-8 mb-3">2. Dashboard Battery or Charging System Light</h2>
        <p class="text-theme-secondary mb-4">The battery-shaped indicator on your instrument cluster monitors charging system voltage rather than the battery alone. If it illuminates while driving, the alternator, drive belt, or charging circuit may not be maintaining proper system voltage—causing the vehicle to run purely on reserve battery power.</p>
        <h2 class="font-heading text-2xl font-bold text-theme-main mt-8 mb-3">3. Frequent Short Trips and Parasitic Discharge</h2>
        <p class="text-theme-secondary mb-4">Short urban journeys often do not give the alternator enough run time to replenish the energy used during starting, especially when headlights, cabin blowers, and heated glass are active. A professional state-of-health test separates a deeply discharged battery that merely needs bench charging from one with degraded internal plates.</p>
        <h2 class="font-heading text-2xl font-bold text-theme-main mt-8 mb-3">Why Proper Diagnostic Testing Matters</h2>
        <p class="text-theme-secondary mb-4">Because battery, starter motor, and alternator faults share similar symptoms, replacing a battery without testing the charging loop can leave the underlying problem unresolved. A structured workshop inspection checks resting voltage, load capacity, terminal voltage drop, and charging output together.</p>
      `
    },
    'alternator-vs-battery': {
      title: 'Battery vs. Alternator Faults: How Technicians Isolate the Real Cause',
      category: 'Charging Systems',
      date: 'September 28, 2026',
      author: 'VOLTCARE Technical Editorial Team',
      image: '../assets/images/blog/blog-alternator-vs-battery.jpg',
      alt: 'Automotive alternator component and electrical charging terminals',
      lead: 'A flat battery in the morning does not automatically mean the battery itself is defective. Here is how automotive electrical technicians distinguish between a failing battery and an underperforming alternator.',
      body: `
        <h2 class="font-heading text-2xl font-bold text-theme-main mt-8 mb-3">The Partnership Between Battery and Alternator</h2>
        <p class="text-theme-secondary mb-4">The battery provides the initial high-current surge to crank the engine and stabilizes voltage across vehicle electronics. Once the engine is running, the alternator takes over to power lighting, ignition, fuel delivery, and cabin systems while recharging the battery.</p>
        <h2 class="font-heading text-2xl font-bold text-theme-main mt-8 mb-3">Signs Pointing Toward the Alternator</h2>
        <p class="text-theme-secondary mb-4">If a vehicle starts after a jump-start but stalls shortly after the jumper cables are removed, or if headlights fluctuate in brightness with engine RPM, the charging circuit or alternator voltage regulator requires inspection.</p>
        <h2 class="font-heading text-2xl font-bold text-theme-main mt-8 mb-3">Voltage Drop and Diode Ripple Testing</h2>
        <p class="text-theme-secondary mb-4">During a charging system diagnostic, technicians measure output under electrical load and check AC ripple across the rectifier bridge, as well as checking for resistance in the B+ charging cable and engine ground strap.</p>
      `
    },
    'parasitic-battery-drain': {
      title: 'Understanding Overnight Parasitic Battery Drain in Modern Vehicles',
      category: 'Electrical Diagnostics',
      date: 'September 10, 2026',
      author: 'VOLTCARE Technical Editorial Team',
      image: '../assets/images/blog/blog-parasitic-battery-drain.jpg',
      alt: 'Digital multimeter measuring electrical voltage and current on a vehicle battery',
      lead: 'When a healthy battery repeatedly goes flat after the car sits parked for a day or two, an excessive parasitic current draw is often keeping a circuit or control module awake.',
      body: `
        <h2 class="font-heading text-2xl font-bold text-theme-main mt-8 mb-3">Normal Standby Current vs. Excessive Drain</h2>
        <p class="text-theme-secondary mb-4">Modern vehicles maintain small standby currents for keyless entry receivers, alarm systems, and clock memory. However, if a relay sticks closed, a glovebox or boot lamp remains lit, or an electronic module fails to enter sleep mode, the battery can discharge overnight.</p>
        <h2 class="font-heading text-2xl font-bold text-theme-main mt-8 mb-3">How Technicians Trace a Parasitic Draw</h2>
        <p class="text-theme-secondary mb-4">Rather than pulling fuses at random—which can wake up networked modules—technicians allow the vehicle electronics to power down and measure millivolt drop across fuse test points to isolate the exact circuit drawing current.</p>
      `
    },
    'starter-motor-symptoms': {
      title: 'Single Click or Slow Crank? Diagnosing Starter Motor Circuit Problems',
      category: 'Starting Problems',
      date: 'August 22, 2026',
      author: 'VOLTCARE Technical Editorial Team',
      image: '../assets/images/blog/blog-starter-motor-symptoms.jpg',
      alt: 'Automotive starter motor and solenoid assembly',
      lead: 'When turning the key produces a click without cranking the engine, the fault could be a weak battery, a corroded ground strap, a faulty starter relay, or a worn starter solenoid.',
      body: `
        <h2 class="font-heading text-2xl font-bold text-theme-main mt-8 mb-3">Rapid Clicking vs. Single Heavy Click</h2>
        <p class="text-theme-secondary mb-4">Rapid chattering clicks often indicate that system voltage drops too low as soon as the solenoid engages—frequently caused by a discharged battery or oxidized battery clamps. A single solid click with strong battery voltage often points to high resistance inside the starter solenoid contacts or brushes.</p>
        <h2 class="font-heading text-2xl font-bold text-theme-main mt-8 mb-3">Checking the Starting Circuit Before Replacing Parts</h2>
        <p class="text-theme-secondary mb-4">A complete starter inspection verifies battery cranking capacity, ignition S-terminal trigger voltage, and voltage drop along the main positive cable and engine block ground before recommending starter motor repair or replacement.</p>
      `
    }
  };

  function initBlogDetailView() {
    const titleEl = document.getElementById('blog-detail-title');
    if (!titleEl) return;

    const params = new URLSearchParams(window.location.search);
    const slug = params.get('article') || 'battery-warning-signs';
    const article = BLOG_ARTICLES[slug] || BLOG_ARTICLES['battery-warning-signs'];

    const catEl = document.getElementById('blog-detail-category');
    const dateEl = document.getElementById('blog-detail-date');
    const authorEl = document.getElementById('blog-detail-author');
    const imgEl = document.getElementById('blog-detail-image');
    const leadEl = document.getElementById('blog-detail-lead');
    const bodyEl = document.getElementById('blog-detail-body');

    titleEl.textContent = article.title;
    if (catEl) catEl.textContent = article.category;
    if (dateEl) dateEl.textContent = article.date;
    if (authorEl) authorEl.textContent = article.author;
    if (imgEl) {
      imgEl.src = article.image;
      imgEl.alt = article.alt;
    }
    if (leadEl) leadEl.textContent = article.lead;
    if (bodyEl) bodyEl.innerHTML = article.body;
  }

  document.addEventListener('DOMContentLoaded', () => {
    initAccordions();
    initBlogDetailView();
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  });
})();

