# Reanty. - Modern Real Estate Agency

> A pixel-perfect, responsive web application for a modern real estate platform, meticulously crafted from the Figma design specification using pure HTML5, CSS3, and Vanilla JavaScript.

---

## 📖 Overview

**Reanty** is a high-performance, responsive landing page for a modern real estate agency. The project showcases property listings, commercial services, dream living spaces, city portfolios, client testimonials, and interactive contact forms. 

Built with clean architecture principles, zero external framework dependencies, and strict adherence to semantic web standards.

---

## ✨ Key Features

- **🎯 High-Fidelity Figma Conversion**: Pixel-perfect implementation matching typography, color tokens, element overlays, and decorative accents.
- **📱 4-Tier Standard Responsive Architecture**:
  - `> 1024px`: Desktop & Large screens (Spacious luxury editorial feel).
  - `<= 1024px`: Landscape Tablets & Small Laptops (2-column grids, optimized padding).
  - `<= 768px`: Portrait Tablets & Phablets (1-column cards, mobile drawer menu).
  - `<= 576px`: Mobile Phones Portrait (Bootstrap `sm` standard, touch-friendly proportions, compact paddings).
- **🔄 Stepped Tabs Controller (DRY & Reusable)**:
  - Synchronized numeric indicator with sliding indicator bar via CSS variables.
  - Interactive tab switches for both **Hero Section** and **Today Sells Properties**.
  - Instant zero-latency image crossfade with preloaded image assets.
- **📂 Dynamic Property Category Filtering**:
  - Filter property cards across *All*, *Apartment*, *Villa*, and *Land* categories with smooth fade animations.
- **💬 Testimonials Carousel**:
  - Interactive slider showcasing client feedback with synchronized avatar, quote, author name, and occupation.
- **📬 Interactive Forms & Toast Notifications**:
  - Handlers for Newsletter Strip, Footer Subscription, and Contact inquiries with feedback toast popups.
- **🧭 Mobile Drawer Navigation**:
  - Off-canvas navigation drawer with animated hamburger toggle and backdrop click-to-dismiss.

---

## 🛠️ Technology Stack

- **HTML5**: Semantic elements (`<header>`, `<aside>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **CSS3**:
  - Modern Box-Sizing & CSS Reset (`css/reset.css`).
  - CSS Variables & Design Tokens (HSL & Hex palette, typography scales, easing transitions).
  - Modern layouts via **CSS Flexbox** and **CSS Grid**.
  - Proportional scaling with `clamp()`, `minmax()`, and `aspect-ratio`.
- **JavaScript (ES6+)**:
  - Modular, reusable event controllers (`initSteppedTabs`, form submission handlers).
  - Zero external dependencies (No jQuery, No Bootstrap, No Tailwind).

---

## 📁 Project Structure

```text
reanty-real-estate/
├── index.html              # Main HTML markup with semantic sectioning
├── css/
│   ├── reset.css           # Clean modern CSS reset
│   └── style.css           # Design tokens, section styles, and responsive queries
├── js/
│   └── main.js             # Interactive controllers and DOM logic
├── assets/
│   ├── icons/              # Vector SVG icons matching Figma specs
│   └── images/             # Optimized JPG & PNG photography assets
├── .gitignore              # Ignored OS and temporary files
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

No build tools or package managers required. You only need a modern web browser.

### Local Development

1. **Clone the repository**:
   ```bash
   git clone git@github.com:Kynguyen-IT/test-reanty-real-estate.git
   cd test-reanty-real-estate
   ```

2. **Serve the project**:
   - **Option 1 (Python)**:
     ```bash
     python3 -m http.server 8080
     ```
     Then navigate to `http://localhost:8080/`.

   - **Option 2 (VS Code Live Server)**:
     Right-click `index.html` and select **"Open with Live Server"**.

   - **Option 3 (Directly)**:
     Double-click `index.html` to open it directly in your browser.

---

## 🎨 Design System & Colors

| Token | Value | Description |
| :--- | :--- | :--- |
| **Primary Orange** | `#FF5A3C` | Brand accent, CTA buttons, active indicators |
| **Dark Heading** | `#071C1F` | Headlines and high-contrast titles |
| **Body Text** | `#616E7C` / `#899AA2` | Subtitles, descriptions, and body copy |
| **Dark Navy** | `#171B2A` | Footer background and high-depth surfaces |
| **Light Gray Surface** | `#F3F6F7` / `#F8FAFC` | Form cards, input backgrounds, and card surfaces |

---

## 👨‍💻 Author

- **GitHub**: [@Kynguyen-IT](https://github.com/Kynguyen-IT)
