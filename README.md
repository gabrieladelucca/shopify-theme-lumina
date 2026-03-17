# Lumina — Custom Shopify Theme

A custom Shopify theme built for a skincare brand, demonstrating real-world Liquid templating, responsive design, and Shopify theme architecture best practices.

## 🛍️ Theme Preview

![Lumina Theme](https://via.placeholder.com/1200x600/f5f0eb/c9a96e?text=Lumina+Skincare+Theme)

## 🛠️ Built With

- Liquid (Shopify templating language)
- HTML5 & CSS3
- JavaScript (ES6+)
- Shopify Theme Architecture 2.0

## ✨ Features

- Fully customizable via Shopify Theme Editor
- Responsive design for mobile, tablet and desktop
- Product page with variant selector and quantity control
- Dynamic image gallery on product page
- Customer reviews section with star ratings
- Newsletter subscription in footer
- Clean, modern UI optimized for skincare/beauty brands

## 📁 Theme Structure
```
shopify-theme-lumina/
├── assets/
│   ├── theme.css        # All theme styles with CSS variables
│   └── theme.js         # Interactive components
├── config/
│   └── settings_schema.json  # Theme editor settings
├── layout/
│   └── theme.liquid     # Main layout wrapper
├── sections/
│   ├── header.liquid    # Sticky header with navigation
│   ├── footer.liquid    # Footer with newsletter form
│   ├── hero.liquid      # Customizable hero banner
│   ├── product-template.liquid  # Full product page
│   └── reviews.liquid   # Customer reviews section
├── snippets/
│   └── product-card.liquid  # Reusable product card
└── templates/
    ├── index.json        # Homepage template
    └── product.json      # Product page template
```

## 🎯 Key Technical Highlights

- **Liquid templating:** Dynamic content rendering with loops, conditionals, and filters
- **Schema settings:** All sections are fully customizable via Shopify's Theme Editor
- **Variant handling:** Product variants with sold-out states managed in Liquid and JavaScript
- **CSS architecture:** Custom properties (variables) for easy brand theming
- **Performance:** Lazy loading images, deferred JavaScript

## 🚀 How to Install

1. Download or clone this repository
2. Zip the theme folder
3. In your Shopify admin, go to **Online Store → Themes → Upload theme**
4. Upload the zip file and preview

## 👩‍💻 Author

**Gabriela de Lucca**
Frontend & Shopify Developer
[GitHub](https://github.com/gabrieladelucca) · [LinkedIn](https://www.linkedin.com/in/gabriela-de-lucca-moreira-9b641b143/)