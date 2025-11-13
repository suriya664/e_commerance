# The Gild Store – Luxury E-Commerce Template

The Gild Store is a premium multi-page HTML template tailored for Indian luxury e-commerce brands, boutique houses, and enterprise digital teams. The system includes a full front-facing site, blog, shop, service pages, and a matching admin dashboard. The theme embraces ivory, onyx, and gold accents, elegant typography, and responsive layouts.

## Features

- **Front-End Pages**: Multiple home layouts, about, services, product listing, product detail, blog, contact, pricing, authentication, coming soon, and 404.
- **E-Commerce Flow**: Filterable product grid, detailed product view with gallery, cart, and checkout experiences.
- **Admin Dashboard**: Overview analytics, product management, orders, users, messaging hub, reports with Chart.js, and settings.
- **Design System**: Playfair Display headings, Inter body text, golden accent gradient buttons, timeline services, testimonials, and premium imagery.
- **Theme Options**: Light/dark mode toggle, RTL support, responsive breakpoints, and mobile navigation.
- **Animations**: AOS-powered scroll animations, smooth scrolling, hover effects, and lazy-loaded imagery.

## Structure

```
the-gild-store/
├─ index.html                      # Home Page 1 (General)
├─ home-boutique.html              # Home Page 2 (Boutique)
├─ about.html                      # About & Legacy
├─ services/
│   ├─ index.html                  # Services Overview
│   └─ details.html                # Concierge Details
├─ shop/
│   ├─ index.html                  # Storefront Grid
│   ├─ product-details.html        # Product Detail View
│   ├─ cart.html                   # Shopping Cart
│   └─ checkout.html               # Checkout & Payment
├─ blog/
│   ├─ index.html                  # Journal Listing
│   └─ post.html                   # Article Detail
├─ contact.html                    # Contact & Map
├─ pricing.html                    # Pricing Tiers
├─ login.html                      # Login Page
├─ register.html                   # Registration Request
├─ coming-soon.html                # Coming Soon Countdown
├─ 404.html                        # Error Page
├─ dashboard/
│   ├─ index.html                  # Admin Overview
│   ├─ products.html               # Product Management
│   ├─ orders.html                 # Orders & Logistics
│   ├─ users.html                  # Clients & Roles
│   ├─ messages.html               # Concierge Inbox
│   ├─ reports.html                # Analytics & Charts
│   └─ settings.html               # Configuration
├─ assets/
│   ├─ css/
│   │   ├─ style.css               # Core Styles
│   │   ├─ responsive.css          # Responsive Rules
│   │   └─ dark-mode.css           # Dark Theme Overrides
│   ├─ js/
│   │   ├─ main.js                 # Front-end Interactions
│   │   ├─ aos.js                  # AOS Initializer
│   │   ├─ dashboard.js            # Dashboard Logic
│   │   └─ theme-toggle.js         # Theme & RTL Toggle
│   ├─ images/                     # Placeholder folders for imagery
│   ├─ fonts/                      # Host webfont files if needed
│   └─ models/                     # Optional 3D assets
```

## Getting Started

1. **Install dependencies**  
   The template relies on CDN references for Bootstrap 5, Remix Icons, AOS, Isotope, Chart.js, and jQuery. No build steps are required out of the box.

2. **Open in Browser**  
   Serve the project from any static server. Example using `http-server`:
   ```bash
   npx http-server .
   ```

3. **Customize Imagery**  
   Replace placeholders in `assets/images/` with royalty-free images (Unsplash/Pexels/Pixabay). Ensure consistent aspect ratios (heroes 16:9, cards 4:3, portraits 3:4).

4. **Brand Settings**  
   - Update brand name, tagline, and footer in `settings.html`.
   - Update favicon and logos as desired.
   - Adjust color palette, typography, or spacing within `assets/css/style.css`.

## JavaScript Highlights

- `main.js`: Smooth scrolling, mobile menu, Isotope filtering fallback, lazy loading, countdown logic.
- `theme-toggle.js`: Light/dark mode toggle with localStorage persistence and RTL switch.
- `dashboard.js`: Sidebar toggle and Chart.js demos for dashboard charts.
- `aos.js`: Wrapper for initializing AOS animations.

## Notes

- For production, host fonts locally in `assets/fonts/` or continue using Google Fonts.
- If removing CDNs, replace them with locally hosted assets and update paths.
- Ensure `golden-dust.png` or similar texture assets are added to `assets/images/hero/` as used in backgrounds.

## License

The Gild Store is provided as a premium template starter. Verify licensing of third-party images and fonts before commercial use. Replace imagery with your own licensed media before distribution.


