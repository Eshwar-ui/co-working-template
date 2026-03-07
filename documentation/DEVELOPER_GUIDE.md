# Developer Guide: HTML Template Standards & Architecture

This document outlines the technical standards, architecture, and quality requirements for developing and maintaining professional HTML templates, as defined in our **"HTML Template Development Guide" PDF**.

---

## 1. Technical Architecture

### Directory Structure
To maintain scalability and reusability, all templates MUST follow this standardized structure:

```text
├── assets/
│   ├── css/       # Global styles, variables, dark mode
│   ├── js/        # Modular JS, dashboard logic, library configs
│   └── images/    # Optimized images and SVGs
├── components/    # Reusable fragments (Navbar, Footer, UI Cards)
├── layouts/       # Common page structures (Auth, Dashboard, Landing)
├── pages/         # Feature-rich inner pages
└── index.html     # Main entry point (Home-1)
```

### Code Quality Standards
- **HTML**: Use semantic HTML5 elements (`<header>`, `<main>`, `<article>`, `<section>`, `<footer>`). Ensure proper heading hierarchy (`h1` -> `h6`).
- **CSS**: Leverage CSS variables for theme customization. Use a modular approach (e.g., utility-first with Tailwind or component-based CSS).
- **JavaScript**: Use modern ES6+ syntax. Maintain a modular structure to avoid global scope pollution.
- **Performance**: Compress all images. Minify CSS/JS for production.

---

## 2. Design & UI Principles

### Visual Standards
- **Grid System**: Use a 12-column responsive grid (Max width 1200px-1400px).
- **Spacing**: Scale based on 4px/8px increments for consistent vertical rhythm.
- **Typography**: Limit to 2-3 Google Fonts. Use Inter or similar modern sans-serifs.
- **Color System**: Define primary, secondary, and accent colors as variables for easy white-labeling.

### Mandatory Features
- **Responsive Design**: Mobile-first approach for all screen sizes (Mobile < 640px, Tablet < 1024px).
- **Dark/Light Mode**: Toggle functionality with system preference detection.
- **RTL Support**: Full compatibility for right-to-left layout languages.
- **Accessibility**: Aim for WCAG 2.1 AA compliance (alt text, ARIA labels, contrast ratios).

---

## 3. Integrations & Functional Requirements

### Essential Integrations
1. **Forms**: Client-side validation is required. Compatibility with Netlify Forms/Formspree.
2. **Newsletter**: Placeholder structure for Mailchimp/ConvertKit signup forms.
3. **Maps**: Dynamic markers via Google Maps or Leaflet API placeholders.
4. **Analytics**: Pre-configured snippets for Google Analytics/GTM.

### SEO & Performance Targets
- **Meta Tags**: Unique title (60 chars) and description (155 chars) per page.
- **Structured Data**: JSON-LD scripts for breadcrumbs and products.
- **Performance**:
  - PageSpeed Score: **90+**
  - Largest Contentful Paint (LCP): **< 2.5s**
  - First Input Delay (FID): **< 100ms**

---

## 4. Quality Assurance Checklist

Before final delivery, every template must pass these checks:
- [ ] No browser console errors.
- [ ] All forms provide success/fail feedback.
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge).
- [ ] Mobile navigation usability.
- [ ] Accessibility: Keyboard focus visible on all interactive elements.
- [ ] W3C HTML Validation (using online validator).

---

> [!NOTE]
> For co-working spaces specifically, the guide classifies this as a **"Booking & Service-Based"** template, requiring a feature-rich admin dashboard and real-time availability placeholders.
