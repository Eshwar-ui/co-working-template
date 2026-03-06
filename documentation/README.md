# CoWork Hub — HTML Template Documentation

## Overview
CoWork Hub is a production-ready, multi-page HTML template designed for co-working spaces, business incubators, and shared workspace platforms. It includes two homepage variations, full inner pages, a member dashboard, and an admin panel.

---

## Tech Stack
| Technology | Usage |
|---|---|
| HTML5 | Semantic, accessible markup |
| Tailwind CSS (CDN) | Utility-first responsive styling |
| Custom CSS | Design tokens, dark mode, animations |
| JavaScript (Vanilla) | Interactivity, GSAP animations |
| GSAP | Scroll-triggered animations |
| Font Awesome | Icon library |
| Google Fonts (Inter) | Typography |

---

## File Structure

```
co-working-template/
├── index.html                  # Home 1 — Corporate modern
├── home-2.html                 # Home 2 — Startup community
├── assets/
│   ├── css/
│   │   ├── style.css           # Core styles & design tokens
│   │   └── dark-mode.css       # Dark mode overrides
│   ├── js/
│   │   ├── main.js             # Site-wide JS (navbar, preloader, GSAP)
│   │   └── dashboard.js        # Dashboard-specific JS
│   └── images/                 # Image assets (placeholder-ready)
├── pages/
│   ├── about.html              # About Us
│   ├── spaces.html             # Workspace Listings
│   ├── space-details.html      # Single Space Detail
│   ├── amenities.html          # Amenities Showcase
│   ├── pricing.html            # Pricing Plans
│   ├── membership.html         # Membership Application
│   ├── events.html             # Events Listing
│   ├── event-details.html      # Single Event Detail
│   ├── blog.html               # Blog Listing
│   ├── blog-details.html       # Single Blog Post
│   ├── gallery.html            # Photo Gallery
│   ├── contact.html            # Contact Page
│   ├── 404.html                # Error Page
│   ├── coming-soon.html        # Coming Soon / Maintenance
│   ├── dashboard/
│   │   ├── dashboard.html      # Member Dashboard Home
│   │   ├── bookings.html       # My Bookings
│   │   ├── invoices.html       # Invoice History
│   │   ├── profile.html        # Profile Settings
│   │   └── support.html        # Support Tickets
│   └── admin/
│       ├── admin-dashboard.html # Admin Dashboard
│       ├── manage-members.html  # Member Management
│       ├── manage-bookings.html # Booking Management
│       ├── manage-spaces.html   # Space Management
│       ├── revenue.html         # Revenue Analytics
│       └── settings.html        # Platform Settings
└── documentation/
    └── README.md               # This file
```

---

## Pages Overview

### Public Pages (16 pages)
1. **Home 1** (`index.html`) — Corporate modern layout with hero, stats, spaces, testimonials
2. **Home 2** (`home-2.html`) — Startup community layout with gradient hero, community focus
3. **About** — Company story, mission/vision/values, team members
4. **Spaces** — Workspace listings with filter bar and card grid
5. **Space Details** — Individual workspace with gallery, amenities, booking sidebar
6. **Amenities** — Full amenities showcase with hover effects
7. **Pricing** — Plan comparison with monthly/annual toggle, FAQ
8. **Membership** — Application form with plan selection
9. **Events** — Event listings with pagination
10. **Event Details** — Full event info with registration sidebar
11. **Blog** — Blog listing with category badges, author info
12. **Blog Details** — Full article with tags, sharing, author box
13. **Gallery** — Masonry photo gallery with lightbox
14. **Contact** — Contact form, info cards, map placeholder
15. **404** — Creative error page with gradient text
16. **Coming Soon** — Countdown timer, email signup

### Member Dashboard (5 pages)
- Dashboard overview, bookings, invoices, profile settings, support tickets

### Admin Dashboard (6 pages)
- Admin overview, member management, booking management, space management, revenue analytics, platform settings

---

## Features

### Design
- **Responsive** — Mobile-first, works on all screen sizes
- **Dark Mode** — Toggle between light and dark themes
- **RTL Support** — CSS variables for RTL layouts
- **Modern Design** — Glassmorphism, gradients, micro-animations
- **Consistent** — Shared navbar, footer, and design tokens across all pages

### Functionality
- Preloader animation
- Sticky navbar with scroll effects
- Mobile hamburger menu
- Dark/Light mode toggle with LocalStorage persistence
- Back-to-top button
- GSAP scroll-triggered animations
- Form validation (client-side)
- Dashboard sidebar with responsive toggle
- Notification & profile dropdowns
- Toast notifications
- Countdown timer (coming-soon page)

---

## Customization

### Colors
Edit the CSS custom properties in `assets/css/style.css`:
```css
:root {
  --primary: #6C63FF;
  --primary-dark: #5A52D5;
  --secondary: #00D4AA;
  --accent: #FF6B6B;
}
```

### Tailwind Colors
Update the Tailwind config in each HTML file's `<head>`:
```html
<script>
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#6C63FF',
        'primary-dark': '#5A52D5',
        secondary: '#00D4AA',
        accent: '#FF6B6B'
      }
    }
  }
}
</script>
```

### Typography
Change the font by updating the Google Fonts link and the `fontFamily` in Tailwind config.

### Images
Replace placeholder images in `assets/images/`. The template uses `onerror` handlers to gracefully degrade when images are missing.

---

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

---

## Credits
- **Tailwind CSS** — https://tailwindcss.com
- **Font Awesome** — https://fontawesome.com
- **GSAP** — https://greensock.com/gsap
- **Google Fonts** — https://fonts.google.com
- **Inter Font** — https://rsms.me/inter

---

## License
This template is part of a commercial template library. Please refer to your license agreement for usage terms.
