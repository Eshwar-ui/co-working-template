# Customization Guide

This guide explains how to customize the CoWork Hub template to match your brand.

## 🎨 Global Colors (Tailwind CSS)
The template uses Tailwind CSS with custom configuration. To change the primary colors, locate the `<script>` tag in the `<head>` of your HTML files:

```javascript
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3F4E3F",       // Main Brand Color
        "primary-dark": "#2C362C", // Darker shade for hovers
        secondary: "#D4A373",      // Secondary/Accent Color
        accent: "#B3541E",
        earth: { 
          light: "#FDFCF0", 
          dark: "#1A1C1A", 
          card: "#242924" 
        },
      },
    },
  },
};
```
Change the Hex codes to your preferred colors. **Note**: You must update this script in every HTML file if you are not using a templating engine.

## ✍️ Typography
The template uses the **Inter** font from Google Fonts. To change the font:
1. Find the Google Fonts link in the `<head>`:
   `<link href="https://fonts.googleapis.com/css2?family=Inter:..." rel="stylesheet" />`
2. Replace it with your chosen font.
3. Update the `fontFamily` in the `tailwind.config` script.

## 🖼️ Content & Images
- **Images**: Located in `assets/images/`. Replace files here or update the `src` attribute in HTML. We recommend using **WebP** for performance.
- **Icons**: The template uses **FontAwesome 6.5.1**.
- **Logos**: Replace the SVG in the navbar or the `img` in the footer with your own.

---
[Back to README](../README.md)
