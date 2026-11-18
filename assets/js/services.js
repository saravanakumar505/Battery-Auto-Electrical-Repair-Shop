/**
 * VOLTCARE — Structured Service Dataset & Interactive Filtering
 * Supports services.html, service-details.html, and homepage service previews.
 */
(function () {
  const SERVICES_DATA = [
    {
      id: 'battery-testing',
      name: 'Battery Testing',
      category: 'Battery Services',
      badge: 'SVC-BAT-01',
      shortDescription: 'Electronic state-of-health, state-of-charge, and load capacity evaluation for automotive starter and auxiliary batteries.',
      detailedDescription: 'A comprehensive battery evaluation measures resting terminal voltage, cranking conductance, and internal resistance under simulated load conditions. Rather than guessing whether a slow-cranking engine is caused by the battery or charging circuit, structured testing provides objective diagnostic measurements before recommending recharge or replacement.',
      image: 'assets/images/batteries/battery-health-check.jpg',
      alt: 'Technician performing digital battery load and voltage testing on a vehicle battery',
      pageLink: 'battery-services.html',
      pricingRef: 'Illustrative from $25 (Configurable)',
      durationNote: 'Subject to vehicle battery location and access',
      symptoms: [
        'Slow or hesitant engine cranking on cold mornings',
        'Dashboard battery or charging warning indicator illuminated',
        'Vehicle requires jump-starting after sitting overnight',
        'Electronic accessories resetting during engine start'
      ],
      inspectionProcedure: [
        'Visual check of battery casing, hold-down bracket, and terminal condition',
        'Digital open-circuit voltage and state-of-charge measurement',
        'Electronic conductance and cranking capacity evaluation',
        'Ripple and charging voltage check with engine running'
      ],
      repairSolutions: [
        'Controlled workshop battery recharging and re-testing where battery health permits',
        'Terminal cleaning and anti-corrosion treatment for high-resistance connections',
        'Battery replacement recommendation when internal cell degradation is confirmed'
      ],
      customerGuidance: 'Battery test results depend on current charge level and ambient temperature. Heavily discharged batteries may require bench charging before a definitive load test can be completed.',
      relatedIds: ['battery-replacement', 'battery-maintenance', 'charging-system-checks']
    },
    {
      id: 'battery-replacement',
      name: 'Battery Replacement',
      category: 'Battery Services',
      badge: 'SVC-BAT-02',
      shortDescription: 'Specification-matched battery selection, safe removal, terminal preparation, and post-installation charging verification.',
      detailedDescription: 'Modern vehicles require a battery that matches the manufacturer-specified physical group size, terminal orientation, reserve capacity, and chemistry (such as standard flooded, EFB, or AGM where equipped). Our replacement procedure includes terminal cleaning, secure mounting, and post-fitment charging system checks.',
      image: 'assets/images/batteries/car-battery-replacement.jpg',
      alt: 'Automotive battery installed securely inside a vehicle engine bay',
      pageLink: 'battery-replacement.html',
      pricingRef: 'Labour from $35 + Battery Unit (Illustrative)',
      durationNote: 'Varies by vehicle battery tray and cowl configuration',
      symptoms: [
        'Confirmed failed battery load test or internal cell short',
        'Repeated battery discharge despite a healthy charging system',
        'Swollen, cracked, or leaking battery housing',
        'Inability to hold charge after extended driving'
      ],
      inspectionProcedure: [
        'Verification of existing battery failure vs. parasitic drain or alternator fault',
        'Confirmation of required physical dimensions, hold-down type, and terminal polarity',
        'Inspection of main positive and ground cable ends for corrosion or fraying',
        'Post-installation charging voltage and starter draw verification'
      ],
      repairSolutions: [
        'Supply and installation of a specification-appropriate automotive battery',
        'Replacement of damaged terminal clamps or hold-down hardware',
        'Battery management system (BMS) reset where applicable and supported'
      ],
      customerGuidance: 'Exact battery pricing depends on your vehicle make, model, engine type, and start-stop system requirements. Always verify specifications before selecting a unit.',
      relatedIds: ['battery-testing', 'terminal-inspection', 'battery-maintenance']
    },
    {
      id: 'electrical-diagnostics',
      name: 'Electrical Diagnostics',
      category: 'Diagnostics',
      badge: 'SVC-DIAG-01',
      shortDescription: 'Systematic fault-finding for warning lights, parasitic battery drains, circuit drops, and intermittent electrical issues.',
      detailedDescription: 'Automotive electrical faults often share overlapping symptoms. A dead battery may stem from an overnight parasitic draw, a faulty relay, a high-resistance ground strap, or a failing alternator regulator. Our diagnostic process combines multimeter voltage-drop testing, circuit tracing, and control module scan data to isolate the root cause.',
      image: 'assets/images/diagnostics/multimeter-electrical-testing.jpg',
      alt: 'Technician testing automotive electrical voltage using a digital multimeter',
      pageLink: 'electrical-diagnostics.html',
      pricingRef: 'Illustrative from $65 (Configurable)',
      durationNote: 'Determined by circuit complexity and fault nature',
      symptoms: [
        'Battery drains repeatedly when the vehicle is parked for 24–48 hours',
        'Multiple dashboard warning indicators or erratic gauge behavior',
        'Blown fuses that fail again shortly after replacement',
        'Intermittent loss of power to cabin or engine-bay electronics'
      ],
      inspectionProcedure: [
        'Baseline battery, starting, and charging circuit health assessment',
        'Diagnostic scan for stored and pending electrical fault codes',
        'Parasitic current draw measurement after vehicle modules enter sleep mode',
        'Circuit-by-circuit voltage drop and ground integrity testing'
      ],
      repairSolutions: [
        'Targeted repair of the identified faulty circuit, relay, switch, or connector',
        'Isolation and correction of parasitic current draw sources',
        'Clear documentation of findings and repair estimate prior to work'
      ],
      customerGuidance: 'Electrical diagnostics identify the root cause of a fault. Complex or intermittent wiring faults may require extended testing time, which is always communicated before proceeding.',
      relatedIds: ['wiring-repair', 'battery-testing', 'charging-system-checks']
    },
    {
      id: 'wiring-repair',
      name: 'Wiring Inspection & Repair',
      category: 'Wiring & Circuits',
      badge: 'SVC-WIR-01',
      shortDescription: 'Inspection and restoration of damaged automotive harnesses, corroded connectors, fuse boxes, and ground straps.',
      detailedDescription: 'Heat cycling, vibration, moisture ingress, and chaffing can degrade insulation and corrode multi-pin connectors in vehicle wiring harnesses. We inspect circuits for continuity, short-to-ground, and excessive resistance, performing targeted harness repairs using automotive-grade terminals and protective looming.',
      image: 'assets/images/wiring/automotive-wiring-inspection.jpg',
      alt: 'Close view of an automotive fuse box and electrical wiring harness in an engine compartment',
      pageLink: 'wiring-repair.html',
      pricingRef: 'Illustrative from $55 (Configurable)',
      durationNote: 'Subject to harness accessibility and repair scope',
      symptoms: [
        'Flickering lights or accessories that cut out over bumps',
        'Visible damaged insulation, melted connectors, or brittle wiring',
        'Burning odour or overheated fuse block terminals',
        'Corrosion inside engine-bay or under-dash electrical plugs'
      ],
      inspectionProcedure: [
        'Visual and physical inspection of suspect wiring looms and routing paths',
        'End-to-end continuity and resistance measurements with a digital multimeter',
        'Fuse box, relay socket, and pin-tension inspection',
        'Verification of chassis and engine block ground points'
      ],
      repairSolutions: [
        'Sectional replacement of damaged wire runs with matching gauge conductor',
        'Connector de-pinning, terminal replacement, and weather-seal restoration',
        'Fuse and relay socket repair or replacement where thermally damaged'
      ],
      customerGuidance: 'Safe wiring repair requires proper circuit isolation and correct wire gauge matching. Temporary twisted-wire splices or unrated tape should never be used in automotive harnesses.',
      relatedIds: ['electrical-diagnostics', 'terminal-inspection', 'car-lighting']
    },
    {
      id: 'alternator-repair',
      name: 'Alternator Inspection & Repair',
      category: 'Charging & Starting',
      badge: 'SVC-ALT-01',
      shortDescription: 'Charging voltage regulation checks, diode ripple testing, drive belt inspection, and alternator repair or replacement.',
      detailedDescription: 'The alternator supplies electrical power while the engine is running and replenishes battery charge. If the voltage regulator, rectifier bridge, brushes, or pulley fail, the vehicle may suffer from undercharging, overcharging, or sudden electrical shutdown. We test alternator output under load before recommending repair or replacement.',
      image: 'assets/images/alternator/alternator-repair.jpg',
      alt: 'Automotive alternator assembly and charging system component',
      pageLink: 'alternator-repair.html',
      pricingRef: 'Inspection from $45 (Illustrative)',
      durationNote: 'Depends on engine bay mounting and belt layout',
      symptoms: [
        'Red battery icon remains illuminated while the engine is running',
        'Headlights brighten or dim noticeably as engine RPM changes',
        'Whining, grinding, or belt squeal from the front accessory drive',
        'New battery becomes discharged after driving'
      ],
      inspectionProcedure: [
        'Measurement of charging voltage at idle and elevated RPM under electrical load',
        'AC diode ripple evaluation to detect failing rectifier diodes',
        'Voltage drop test along the B+ charging cable and alternator ground path',
        'Drive belt tension, condition, and decoupler pulley inspection'
      ],
      repairSolutions: [
        'Voltage regulator, brush pack, or pulley service where supported by unit design',
        'Complete alternator replacement using a compatible unit for the vehicle',
        'Repair of high-resistance charging cables or fusible links'
      ],
      customerGuidance: 'A discharged battery and a faulty alternator often produce similar warning signs. Testing both components together prevents unnecessary parts replacement.',
      relatedIds: ['charging-system-checks', 'battery-testing', 'starter-motor-repair']
    },
    {
      id: 'starter-motor-repair',
      name: 'Starter Motor Inspection & Repair',
      category: 'Charging & Starting',
      badge: 'SVC-STR-01',
      shortDescription: 'Starting circuit evaluation, solenoid and relay testing, voltage drop checks, and starter motor repair or replacement.',
      detailedDescription: 'When turning the key or pressing the start button produces a single click, rapid clicking, or no response at all, the issue may lie in the battery, ignition switch, starter relay, neutral safety circuit, or the starter motor itself. We test command signals and current draw to pinpoint whether the starter assembly requires service.',
      image: 'assets/images/starter-motor/starter-motor-inspection.jpg',
      alt: 'Automotive starter motor and solenoid assembly prepared for inspection',
      pageLink: 'starter-motor-repair.html',
      pricingRef: 'Inspection from $45 (Illustrative)',
      durationNote: 'Varies by intake or exhaust manifold access',
      symptoms: [
        'Single loud click from the engine bay with no engine cranking',
        'Starter motor spins freely without engaging the engine flywheel',
        'Intermittent failure to crank when the engine is hot',
        'Sluggish cranking despite a fully charged and tested battery'
      ],
      inspectionProcedure: [
        'Confirmation of battery state-of-charge and cranking capacity first',
        'Voltage drop testing across main starter power cable and engine ground strap',
        'Verification of ignition start signal at the starter solenoid S-terminal',
        'Starter current draw measurement and pinion engagement evaluation'
      ],
      repairSolutions: [
        'Starter solenoid, brush, or drive assembly service where applicable',
        'Replacement of the starter motor assembly with a vehicle-matched unit',
        'Repair of corroded starter relay sockets, inhibit switches, or battery cables'
      ],
      customerGuidance: 'Starter motor symptoms frequently overlap with weak battery or corroded terminal issues. A starting circuit check verifies that power is actually reaching the starter before unit removal.',
      relatedIds: ['battery-testing', 'alternator-repair', 'terminal-inspection']
    },
    {
      id: 'car-lighting',
      name: 'Vehicle Lighting & Accessories',
      category: 'Lighting & Accessories',
      badge: 'SVC-LGT-01',
      shortDescription: 'Headlight, tail light, brake light, indicator, interior lighting, and auxiliary electrical circuit inspection and repair.',
      detailedDescription: 'Reliable exterior and interior lighting is critical for visibility and road safety. Whether a vehicle has a single non-working headlamp, a fast-flashing turn signal, a tail light ground fault, or an inoperative 12V accessory socket, we inspect bulbs, sockets, switches, relays, and wiring to restore dependable operation.',
      image: 'assets/images/lighting/vehicle-headlight-service.jpg',
      alt: 'Modern automotive headlight assembly inspected for electrical and lighting performance',
      pageLink: 'car-lighting.html',
      pricingRef: 'Illustrative from $30 (Configurable)',
      durationNote: 'Depends on headlamp housing and bumper access',
      symptoms: [
        'One or both low-beam or high-beam headlights not illuminating',
        'Dim, flickering, or yellowing headlamp output caused by voltage drop',
        'Rapid indicator blinking or non-functioning brake and reverse lights',
        'Socket melting or corrosion in tail lamp cluster connectors'
      ],
      inspectionProcedure: [
        'Inspection of all exterior and interior lighting functions',
        'Socket voltage and ground integrity check at the lamp connector',
        'Fuse, lighting relay, and stalk switch signal verification',
        'Connector pin and bulb holder thermal damage inspection'
      ],
      repairSolutions: [
        'Replacement of failed halogen or OEM-specified bulbs',
        'Repair or replacement of corroded lamp sockets and ground pigtails',
        'Diagnosis and repair of auxiliary 12V outlets, horn circuits, and wiper motors'
      ],
      customerGuidance: 'Replacement bulbs and lighting components should always conform to vehicle specifications and applicable local road regulations.',
      relatedIds: ['wiring-repair', 'electrical-diagnostics', 'terminal-inspection']
    },
    {
      id: 'battery-maintenance',
      name: 'Battery Maintenance',
      category: 'Battery Services',
      badge: 'SVC-BAT-03',
      shortDescription: 'Preventive battery care including terminal cleaning, anti-corrosion treatment, hold-down checks, and charge verification.',
      detailedDescription: 'Routine battery maintenance helps prevent unexpected no-start situations caused by sulfation, loose clamps, or acidic terminal buildup. During a maintenance visit, we clean terminal posts, secure hold-down brackets to reduce vibration damage, and verify charging voltage.',
      image: 'assets/images/maintenance/battery-maintenance-service.jpg',
      alt: 'Automotive battery clamps and charging maintenance check',
      pageLink: 'battery-maintenance.html',
      pricingRef: 'Illustrative from $25 (Configurable)',
      durationNote: 'Standard workshop maintenance check',
      symptoms: [
        'White, blue, or greenish powdery buildup around battery terminals',
        'Loose battery clamps that can be rotated by hand',
        'Vehicle used primarily for short urban trips with infrequent charging',
        'Seasonal preparation before extreme summer heat or winter cold'
      ],
      inspectionProcedure: [
        'Safe disconnection and neutralization of terminal surface corrosion',
        'Mechanical cleaning of battery posts and inner clamp contact surfaces',
        'Inspection of battery tray, hold-down clamp, and heat shield',
        'State-of-charge check and controlled top-up charging if required'
      ],
      repairSolutions: [
        'Application of protective terminal sealant and tightening to proper snugness',
        'Replacement of stretched or cracked battery terminal clamps',
        'Preventive recharge for batteries depleted by short-trip driving'
      ],
      customerGuidance: 'Always allow trained personnel with proper eye and skin protection to handle corroded battery terminals and electrolyte residues.',
      relatedIds: ['battery-testing', 'terminal-inspection', 'battery-replacement']
    },
    {
      id: 'terminal-inspection',
      name: 'Electrical Connection & Terminal Inspection',
      category: 'Wiring & Circuits',
      badge: 'SVC-WIR-02',
      shortDescription: 'High-amperage cable lug, battery clamp, main fuse block, and chassis ground connection cleaning and voltage-drop testing.',
      detailedDescription: 'Even a healthy battery and alternator cannot operate effectively if high resistance exists at the battery clamps, starter lugs, or chassis ground straps. We perform loaded voltage-drop tests across primary positive and negative connections to identify hidden resistance and restore clean metal-to-metal contact.',
      image: 'assets/images/batteries/battery-terminal-inspection.jpg',
      alt: 'Close-up of positive and negative automotive battery terminal clamps',
      pageLink: 'service-details.html?service=terminal-inspection',
      pricingRef: 'Illustrative from $30 (Configurable)',
      durationNote: 'Depends on cable routing and ground locations',
      symptoms: [
        'Intermittent total loss of electrical power when turning the ignition key',
        'Battery terminals feel warm to the touch after cranking the engine',
        'Visible green or white oxidation creeping into battery cable strands',
        'Starter clicks until battery clamps are wiggled'
      ],
      inspectionProcedure: [
        'Millivolt drop test across positive and negative battery connections under load',
        'Inspection of crimp lugs, fusible links, and main power distribution studs',
        'Engine-to-chassis and battery-to-body ground strap inspection',
        'Check for cable clamping integrity and post deformation'
      ],
      repairSolutions: [
        'Cleaning and resurfacing of high-current contact points',
        'Replacement of damaged battery terminal ends or ground straps',
        'Securing of loose main fuse block distribution nuts'
      ],
      customerGuidance: 'High-resistance connections can mimic a failed battery or starter motor. Inspecting terminals first is an effective step in accurate electrical diagnosis.',
      relatedIds: ['battery-maintenance', 'wiring-repair', 'starter-motor-repair']
    },
    {
      id: 'charging-system-checks',
      name: 'Charging System Checks',
      category: 'Charging & Starting',
      badge: 'SVC-ALT-02',
      shortDescription: 'End-to-end evaluation of alternator output, voltage regulation, belt drive condition, and battery charge acceptance.',
      detailedDescription: 'Modern vehicles often use smart or ECU-controlled charging systems that vary voltage output based on electrical demand, battery state, and driving conditions. Our charging system check evaluates regulator response, load performance, and wiring integrity across the entire charging loop.',
      image: 'assets/images/alternator/alternator-terminals-inspection.jpg',
      alt: 'Close-up inspection of automotive alternator electrical terminals and rear housing',
      pageLink: 'service-details.html?service=charging-system-checks',
      pricingRef: 'Illustrative from $40 (Configurable)',
      durationNote: 'Standard workshop diagnostic check',
      symptoms: [
        'Battery warning light flickers at idle or under heavy accessory load',
        'Headlights, blower fan, or wipers slow down when idling at traffic lights',
        'Repeated battery replacement within a short period',
        'Overcharging symptoms such as frequent bulb burnouts or battery overheating'
      ],
      inspectionProcedure: [
        'No-load and full-load charging voltage and amperage evaluation',
        'Inspection of alternator B+ terminal, sense wires, and multi-plug connector',
        'Check of serpentine belt condition, tensioner alignment, and pulley operation',
        'Evaluation of smart-charging control signals where applicable'
      ],
      repairSolutions: [
        'Repair of damaged alternator excitation or voltage-sense wiring',
        'Drive belt tension adjustment or replacement recommendation',
        'Alternator service or replacement when internal fault is verified'
      ],
      customerGuidance: 'Charging voltage varies by vehicle design and ambient temperature. Proper testing under electrical load is essential to verify regulator stability.',
      relatedIds: ['alternator-repair', 'battery-testing', 'electrical-diagnostics']
    }
  ];

  function resolveAssetPath(relPath) {
    const isSubpage = window.location.pathname.includes('/pages/');
    return isSubpage ? `../${relPath}` : relPath;
  }

  function resolvePagePath(pageFile) {
    const isSubpage = window.location.pathname.includes('/pages/');
    if (pageFile === 'index.html') {
      return isSubpage ? '../index.html' : 'index.html';
    }
    return isSubpage ? pageFile : `pages/${pageFile}`;
  }

  // Render filterable services grid on services.html
  function initServicesDirectory() {
    const grid = document.getElementById('services-directory-grid');
    if (!grid) return;

    const searchInput = document.getElementById('service-search-input');
    const filterBtns = document.querySelectorAll('[data-service-category]');
    const countLabel = document.getElementById('services-count-label');
    let activeCategory = 'all';
    let searchQuery = '';

    function renderGrid() {
      const filtered = SERVICES_DATA.filter((svc) => {
        const matchesCategory = activeCategory === 'all' || svc.category === activeCategory;
        const q = searchQuery.trim().toLowerCase();
        const matchesSearch =
          !q ||
          svc.name.toLowerCase().includes(q) ||
          svc.shortDescription.toLowerCase().includes(q) ||
          svc.category.toLowerCase().includes(q) ||
          svc.symptoms.some((s) => s.toLowerCase().includes(q));
        return matchesCategory && matchesSearch;
      });

      if (countLabel) {
        countLabel.textContent = `Showing ${filtered.length} of ${SERVICES_DATA.length} specialist services`;
      }

      if (filtered.length === 0) {
        grid.innerHTML = `
          <div class="col-span-full vc-card p-8 text-center">
            <p class="font-heading text-lg font-bold text-theme-main mb-2">No matching services found</p>
            <p class="text-theme-secondary text-sm mb-4">Try clearing your search filter or selecting "All Categories" to view all available electrical and battery services.</p>
            <div>
              <button type="button" id="reset-service-filters-btn" class="btn-amber">Reset Filters</button>
            </div>
          </div>
        `;
        const resetBtn = document.getElementById('reset-service-filters-btn');
        if (resetBtn) {
          resetBtn.addEventListener('click', () => {
            activeCategory = 'all';
            searchQuery = '';
            if (searchInput) searchInput.value = '';
            filterBtns.forEach((b) => {
              const isAll = b.getAttribute('data-service-category') === 'all';
              b.className = isAll ? 'btn-amber text-xs py-2 px-3.5' : 'btn-outline text-xs py-2 px-3.5';
            });
            renderGrid();
          });
        }
        return;
      }

      grid.innerHTML = filtered
        .map((svc) => {
          const imgSrc = resolveAssetPath(svc.image);
          const detailUrl = resolvePagePath(`service-details.html?service=${encodeURIComponent(svc.id)}`);
          const bookUrl = resolvePagePath(`book-service.html?service=${encodeURIComponent(svc.name)}`);
          return `
            <article class="vc-card">
              <div class="vc-card-media-4x3">
                <img src="${imgSrc}" alt="${svc.alt}" loading="lazy">
                <span class="absolute top-3 start-3 tech-badge bg-brand-navy text-white border-0">${svc.badge}</span>
              </div>
              <div class="vc-card-body">
                <div class="mb-2">
                  <span class="font-mono-tech text-xs font-semibold uppercase tracking-wider text-theme-accent">${svc.category}</span>
                </div>
                <h3 class="font-heading text-xl font-bold text-theme-main mb-2">${svc.name}</h3>
                <p class="text-theme-secondary text-sm mb-4">${svc.shortDescription}</p>
                <div class="bg-theme-muted rounded-lg p-3 mb-4 border border-theme">
                  <p class="text-xs font-semibold text-theme-main mb-1">Key Service Benefit:</p>
                  <p class="text-xs text-theme-secondary">${svc.repairSolutions[0]}</p>
                </div>
                <div class="vc-card-footer border-t border-theme">
                  <a href="${detailUrl}" class="btn-outline text-xs py-2 px-3.5">View Details</a>
                  <a href="${bookUrl}" class="btn-amber text-xs py-2 px-3.5">Book Service</a>
                </div>
              </div>
            </article>
          `;
        })
        .join('');
    }

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        activeCategory = btn.getAttribute('data-service-category') || 'all';
        filterBtns.forEach((b) => {
          const isMatch = b.getAttribute('data-service-category') === activeCategory;
          b.className = isMatch ? 'btn-amber text-xs py-2 px-3.5' : 'btn-outline text-xs py-2 px-3.5';
        });
        renderGrid();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value || '';
        renderGrid();
      });
    }

    renderGrid();
  }

  // Dynamic Service Details page hydration (service-details.html?service=...)
  function initServiceDetailsPage() {
    const detailContainer = document.getElementById('dynamic-service-detail-root');
    if (!detailContainer) return;

    const params = new URLSearchParams(window.location.search);
    const requestedId = params.get('service') || 'battery-testing';
    const currentService = SERVICES_DATA.find((s) => s.id === requestedId) || SERVICES_DATA[0];

    // Update switcher pills
    const switcherRoot = document.getElementById('service-detail-selector');
    if (switcherRoot) {
      switcherRoot.innerHTML = SERVICES_DATA.map((s) => {
        const isCurrent = s.id === currentService.id;
        return `<a href="service-details.html?service=${encodeURIComponent(s.id)}" class="${
          isCurrent ? 'btn-amber text-xs py-2 px-3' : 'btn-outline text-xs py-2 px-3'
        }">${s.name}</a>`;
      }).join('');
    }

    // Populate main elements
    const setElText = (id, text) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    };

    setElText('sd-badge', `${currentService.badge} • ${currentService.category}`);
    setElText('sd-title', currentService.name);
    setElText('sd-breadcrumb-current', currentService.name);
    setElText('sd-short-desc', currentService.shortDescription);
    setElText('sd-detailed-desc', currentService.detailedDescription);
    setElText('sd-pricing-ref', currentService.pricingRef);
    setElText('sd-duration-note', currentService.durationNote);
    setElText('sd-customer-guidance', currentService.customerGuidance);

    const heroImg = document.getElementById('sd-hero-image');
    if (heroImg) {
      heroImg.src = resolveAssetPath(currentService.image);
      heroImg.alt = currentService.alt;
    }

    const bookBtn = document.getElementById('sd-book-cta');
    if (bookBtn) {
      bookBtn.href = `book-service.html?service=${encodeURIComponent(currentService.name)}`;
    }

    const dedicatedLink = document.getElementById('sd-dedicated-page-link');
    if (dedicatedLink && currentService.pageLink && !currentService.pageLink.startsWith('service-details.html')) {
      dedicatedLink.href = currentService.pageLink;
      dedicatedLink.classList.remove('hidden');
    }

    const symptomsList = document.getElementById('sd-symptoms-list');
    if (symptomsList) {
      symptomsList.innerHTML = currentService.symptoms
        .map(
          (sym) => `
          <li class="flex items-start gap-3 p-3.5 rounded-lg bg-theme-muted border border-theme">
            <span class="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></span>
            <span class="text-sm text-theme-main">${sym}</span>
          </li>`
        )
        .join('');
    }

    const procedureList = document.getElementById('sd-procedure-list');
    if (procedureList) {
      procedureList.innerHTML = currentService.inspectionProcedure
        .map(
          (step, idx) => `
          <li class="flex items-start gap-3.5 p-4 rounded-lg bg-theme-surface border border-theme">
            <span class="font-mono-tech text-xs font-bold px-2.5 py-1 rounded bg-brand-navy text-amber-400 shrink-0">0${idx + 1}</span>
            <span class="text-sm text-theme-main">${step}</span>
          </li>`
        )
        .join('');
    }

    const solutionsList = document.getElementById('sd-solutions-list');
    if (solutionsList) {
      solutionsList.innerHTML = currentService.repairSolutions
        .map(
          (sol) => `
          <li class="flex items-start gap-3 p-3.5 rounded-lg bg-theme-surface border border-theme">
            <span class="text-emerald-600 font-bold">✓</span>
            <span class="text-sm text-theme-main">${sol}</span>
          </li>`
        )
        .join('');
    }

    // Related services
    const relatedGrid = document.getElementById('sd-related-grid');
    if (relatedGrid) {
      const relatedItems = currentService.relatedIds
        .map((rid) => SERVICES_DATA.find((s) => s.id === rid))
        .filter(Boolean);
      relatedGrid.innerHTML = relatedItems
        .map((rel) => {
          const relImg = resolveAssetPath(rel.image);
          return `
            <article class="vc-card">
              <div class="vc-card-media-4x3">
                <img src="${relImg}" alt="${rel.alt}" loading="lazy">
              </div>
              <div class="vc-card-body">
                <span class="font-mono-tech text-xs text-theme-accent uppercase">${rel.category}</span>
                <h3 class="font-heading text-lg font-bold text-theme-main mt-1 mb-2">${rel.name}</h3>
                <p class="text-sm text-theme-secondary mb-4">${rel.shortDescription}</p>
                <div class="vc-card-footer border-t border-theme">
                  <a href="service-details.html?service=${encodeURIComponent(rel.id)}" class="btn-outline text-xs py-2 px-3">View Details</a>
                  <a href="book-service.html?service=${encodeURIComponent(rel.name)}" class="btn-amber text-xs py-2 px-3">Book</a>
                </div>
              </div>
            </article>
          `;
        })
        .join('');
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    initServicesDirectory();
    initServiceDetailsPage();
  });

  window.VoltCareServices = {
    getAll: () => SERVICES_DATA,
    getById: (id) => SERVICES_DATA.find((s) => s.id === id)
  };
})();

