# VOLTCARE — Battery & Auto Electrical Repair Shop (Project 58)

**Tagline:** *Powering Every Journey.*  
**Brand Category:** Battery & Auto Electrical Specialists  
**Project Type:** Multi-Page Automotive Battery & Electrical Service Website (26 Public Pages, Dashboard-Free)

---

## 1. Project Overview

**VOLTCARE** is a complete, responsive, multi-page public website built for an automotive battery and electrical repair workshop. It is designed to help vehicle owners identify electrical or starting symptoms, explore specialist diagnostic and repair services, review transparent indicative pricing, and submit structured service booking or technical enquiries.

Key capabilities communicated across the site:
- Electronic automotive battery testing and state-of-health inspection.
- Specification-matched car battery replacement and terminal care.
- Systematic electrical diagnostics (parasitic drain, voltage drop, and fault tracing).
- Automotive wiring harness, connector, fuse, and relay inspection and repair.
- Alternator and charging system output, regulator, and diode ripple checks.
- Starter motor and starting circuit diagnostics.
- Exterior and interior vehicle lighting and auxiliary electrical accessory repair.

---

## 2. VOLTCARE Brand Identity & Color System

### Selected Palette: VOLTCARE AUTOMOTIVE PREMIUM

#### Primary Palette
| Color | Hex | Usage |
|---|---|---|
| Midnight Navy | `#172A3A` | Primary brand color |
| Electric Amber | `#F2A93B` | Primary accent and CTA |
| Cool Silver | `#DCE4EA` | Supporting surfaces |
| Ice White | `#F5F7F9` | Main light background |
| Steel Blue | `#354B5C` | Secondary brand color |

#### Supporting Palette
| Color | Hex | Usage |
|---|---|---|
| Pure White | `#FFFFFF` | Elevated surfaces |
| Deep Navy | `#101D29` | Dark emphasis |
| Slate Grey | `#627384` | Secondary text |
| Light Steel | `#EAF0F4` | Soft card backgrounds |
| Border Grey | `#D9E1E7` | Borders and dividers |
| Charcoal | `#242C33` | Main text |
| Muted Grey | `#7D8994` | Supporting text |
| Success Green | `#3E8C69` | Success states |
| Warning Orange | `#D99432` | Warning states |
| Error Red | `#C74B45` | Error states |

### Light Theme CSS Variables (`:root, [data-theme="light"]`)
```css
:root,
[data-theme="light"] {
  --color-primary: #172A3A;
  --color-primary-hover: #223C50;
  --color-primary-soft: #E5ECF1;
  --color-secondary: #354B5C;
  --color-secondary-hover: #293D4C;
  --color-secondary-soft: #EAF0F4;
  --color-accent: #F2A93B;
  --color-accent-hover: #DC9228;
  --color-accent-soft: #FFF0D5;
  --color-background: #F5F7F9;
  --color-surface: #FFFFFF;
  --color-surface-elevated: #FFFFFF;
  --color-surface-muted: #EAF0F4;
  --color-text: #242C33;
  --color-text-secondary: #627384;
  --color-text-muted: #8995A0;
  --color-border: #D9E1E7;
  --color-border-strong: #C5D0D9;
  --color-success: #3E8C69;
  --color-warning: #D99432;
  --color-error: #C74B45;
  --shadow-soft: 0 8px 28px rgba(23, 42, 58, 0.06);
  --shadow-card: 0 12px 35px rgba(23, 42, 58, 0.10);
}
```

### Dark Theme CSS Variables (`[data-theme="dark"]`)
```css
[data-theme="dark"] {
  --color-primary: #D8E3EB;
  --color-primary-hover: #FFFFFF;
  --color-primary-soft: #314354;
  --color-secondary: #AFC1CD;
  --color-secondary-hover: #D1DEE6;
  --color-secondary-soft: #2B3B49;
  --color-accent: #FFC363;
  --color-accent-hover: #FFD18A;
  --color-accent-soft: #483923;
  --color-background: #111B24;
  --color-surface: #1B2935;
  --color-surface-elevated: #243441;
  --color-surface-muted: #2B3C49;
  --color-text: #F2F5F7;
  --color-text-secondary: #BAC8D2;
  --color-text-muted: #91A1AE;
  --color-border: #354957;
  --color-border-strong: #4B6271;
  --color-success: #8FCBA9;
  --color-warning: #F0BD68;
  --color-error: #E88B82;
  --shadow-soft: 0 8px 30px rgba(0, 0, 0, 0.20);
  --shadow-card: 0 12px 35px rgba(0, 0, 0, 0.30);
}
```

---

## 3. Typography & Technology Stack

### Typography (Google Fonts)
- **Headings:** `Sora` (600, 700, 800)
- **Body Copy:** `Inter` (400, 500, 600, 700)
- **Technical Labels & Codes:** `Roboto Mono` (400, 500, 600, 700)

### Strict Technology Stack
- **HTML5** (semantic markup with standalone embedded navbar and footer in every page)
- **Tailwind CSS** via CDN
- **Custom CSS** (`assets/css/style.css`)
- **Vanilla JavaScript** (`assets/js/*.js`)
- **Lucide Icons** via CDN + inline SVGs
- **Google Fonts**

No frameworks (React, Vue, Angular, Next.js, Bootstrap, jQuery), no build step, and no `package.json` dependencies are used.

---

## 4. Project Folder Structure

```text
voltcare/
│
├── index.html
├── robots.txt
├── sitemap.xml
├── README.md
│
├── pages/
│   ├── home-2.html
│   ├── about.html
│   ├── services.html
│   ├── service-details.html
│   ├── battery-services.html
│   ├── battery-replacement.html
│   ├── electrical-diagnostics.html
│   ├── wiring-repair.html
│   ├── alternator-repair.html
│   ├── starter-motor-repair.html
│   ├── car-lighting.html
│   ├── battery-maintenance.html
│   ├── pricing-guide.html
│   ├── vehicle-types.html
│   ├── how-it-works.html
│   ├── faq.html
│   ├── contact.html
│   ├── book-service.html
│   ├── gallery.html
│   ├── blog.html
│   ├── blog-details.html
│   ├── privacy-policy.html
│   ├── terms.html
│   ├── 404.html
│   └── coming-soon.html
│
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   ├── main.js
    │   ├── navigation.js
    │   ├── theme.js
    │   ├── direction.js
    │   ├── services.js
    │   ├── pricing.js
    │   ├── booking.js
    │   ├── forms.js
    │   ├── gallery.js
    │   └── animations.js
    └── images/
        ├── logo/
        ├── hero/
        ├── batteries/
        ├── diagnostics/
        ├── wiring/
        ├── alternator/
        ├── starter-motor/
        ├── lighting/
        ├── maintenance/
        ├── vehicles/
        ├── workshop/
        ├── technicians/
        ├── gallery/
        └── blog/
```

---

## 5. Complete Page List (26 Pages)

1. `index.html` — Primary Homepage (13 content sections + standalone Navbar & Footer)
2. `pages/home-2.html` — Alternative Diagnostic Specialist Homepage
3. `pages/about.html` — About VOLTCARE, Mission, Philosophy & Workshop Environment
4. `pages/services.html` — Interactive 10-Service Directory with Search & Category Filters
5. `pages/service-details.html` — Dynamic Service Specification Viewer (`?service=...`)
6. `pages/battery-services.html` — Complete Battery Testing, Inspection & Terminal Care Overview
7. `pages/battery-replacement.html` — Specification-Matched Battery Replacement & Compatibility Guide
8. `pages/electrical-diagnostics.html` — Vehicle Electrical Diagnostics & Parasitic Drain Testing
9. `pages/wiring-repair.html` — Automotive Wiring Harness, Connector & Fuse Box Repair
10. `pages/alternator-repair.html` — Alternator Inspection, Voltage Regulation & Charging Checks
11. `pages/starter-motor-repair.html` — Starter Motor & Starting Circuit Inspection
12. `pages/car-lighting.html` — Headlights, Tail Lights, Indicators & Electrical Accessories
13. `pages/battery-maintenance.html` — Preventive Battery & Terminal Maintenance
14. `pages/pricing-guide.html` — Transparent Indicative Pricing Guide (Central JS Config)
15. `pages/vehicle-types.html` — Supported Vehicle Categories (Hatchbacks, Sedans, SUVs, MUVs, Commercial Vans)
16. `pages/how-it-works.html` — 6-Step Customer Service & Inspection Timeline
17. `pages/faq.html` — Interactive FAQ with Search, 9 Category Filters & Expand/Collapse
18. `pages/contact.html` — Contact Placeholders, Map Container & Validated Enquiry Form
19. `pages/book-service.html` — Dedicated Vehicle Service Booking Request Form & Summary Generator
20. `pages/gallery.html` — 9-Category Workshop Photography Grid & Interactive Lightbox
21. `pages/blog.html` — Technical Automotive Journal with Search & Category Filters
22. `pages/blog-details.html` — Article Reader (`?article=...`) with Related Articles
23. `pages/privacy-policy.html` — Privacy Policy Template (Marked for Owner Review)
24. `pages/terms.html` — Terms & Conditions Template (Marked for Owner & Legal Review)
25. `pages/404.html` — Branded 404 Error Page
26. `pages/coming-soon.html` — Branded Coming Soon Page

---

## 6. How to Run Locally

1. **Direct Browser Open:** Double-click `index.html` in the root folder to open the website directly in any modern browser.
2. **Local Static Server (Optional):**
   ```bash
   python -m http.server 8080
   ```
   Then visit `http://localhost:8080`.

---

## 7. Key Frontend Systems & Behavior

- **Theme Switching (`assets/js/theme.js`):** Defaults to Light theme (or respects OS `prefers-color-scheme` on first visit), persists in `localStorage` (`voltcare_theme`), and applies before first paint to prevent theme flash.
- **RTL/LTR Direction (`assets/js/direction.js`):** Toggles `document.documentElement.dir` between `ltr` and `rtl` while keeping `lang="en"` and **all content strictly in English**. Persists in `localStorage` (`voltcare_dir`).
- **Service Directory & Details (`assets/js/services.js`):** Central `SERVICES_DATA` array powers category filtering, keyword search on `pages/services.html`, and individual service specifications on `pages/service-details.html?service=<id>`.
- **Pricing Configuration (`assets/js/pricing.js`):** Central `PRICING_CONFIG` object holds all illustrative service rates and the mandatory pricing disclaimer.
- **Booking Form (`assets/js/booking.js`):** Validates required fields, phone, email, vehicle year, and prevents past appointment dates. Automatically preselects the service when navigated via `book-service.html?service=...`. Generates an on-screen request summary with the clear notice: *"Your service request has been prepared. Appointment confirmation requires a connected booking system or direct business follow-up."* Does not store personal or vehicle data in `localStorage`.
- **Contact Form (`assets/js/forms.js`):** Validates all required fields, email, phone, and consent checkbox, with loading state and reset button.

---

## 8. Backend Integration & Owner Customization Checklist

Before publishing the website for a live workshop, complete these steps:

1. **Replace Contact & Location Placeholders:** Search for `[Configure` across `index.html`, `pages/*.html`, `sitemap.xml`, and `robots.txt` to insert the real workshop street address, phone number, email address, opening hours, social media links, and production domain.
2. **Update Service Prices:** Edit `PRICING_CONFIG` in `assets/js/pricing.js` (and the preview cards in `index.html` / `pages/home-2.html`) with the workshop's confirmed labour and inspection rates.
3. **Connect Form Endpoints:** Connect `#voltcare-booking-form` (`assets/js/booking.js`) and `#voltcare-contact-form` (`assets/js/forms.js`) to your backend API, CRM, or transactional email service.
4. **Legal Review:** Review and customize `pages/privacy-policy.html` and `pages/terms.html` with qualified legal counsel.

