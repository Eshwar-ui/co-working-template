# HTML Template Quality Assurance Checklist

This checklist ensures that every template page meets the high standards of performance, accessibility, and clean code as specified in the **HTML Template Development Guide**.

---

## 1. Technical & Code Health
- [ ] **W3C Validation**: No major errors in HTML/CSS validators.
- [ ] **Console Logs**: All debug `console.log()` statements removed.
- [ ] **Broken Links**: Verified all anchor links and image URLs.
- [ ] **Image Optimization**: All images compressed (< 200KB) and have `alt` text.
- [ ] **Minification**: CSS and JS are minified for production.
- [ ] **Responsive Check**: No horizontal scroll on mobile (320px width).

## 2. Design & UX Compliance
- [ ] **Typography**: Font sizes consistent with design tokens.
- [ ] **Dark Mode**: No "flash" when toggling light/dark themes.
- [ ] **RTL Support**: Menu icons and layout directions flip correctly in RTL mode.
- [ ] **Loading States**: Skeletons or spinners visible for simulated dynamic content.
- [ ] **Hover Effects**: All interactive elements (buttons, cards) have hover states.

## 3. SEO & Metadata
- [ ] **Page Titles**: Unique and under 60 characters.
- [ ] **Meta Descriptions**: Unique and between 150-160 characters.
- [ ] **H1 Heading**: Exactly one `<h1>` per page.
- [ ] **Canonical Tags**: Link to self on production URL placeholders.
- [ ] **OG Tags**: Open Graph (Facebook/LinkedIn) and Twitter cards defined.

## 4. Functionality & Integrations
- [ ] **Forms**: Client-side validation active; custom success/error toast messages.
- [ ] **Navigation**: Sticky header behaves as expected on scroll.
- [ ] **Mobile Menu**: Closes when a link is clicked or clicking outside.
- [ ] **Third-party scripts**: Placeholders for Google Maps, Analytics, and Newsletters.

---

## Final Performance Targets
- **Lighthouse Performance Score**: > 90
- **Accessibility Score**: > 95
- **Best Practices Score**: > 100
- **SEO Score**: > 100
