# Ctickers — Modern Custom Sticker Business Demo Website

A modern, responsive demo website built for **Ctickers** using React, Vite, and Tailwind CSS. Tailored for testing and submitting to the **Pinterest Developer Application**.

---

## 🎨 Pages & Features

1. **Home Page (`/`)**
   - Brand logo & playful sticker studio identity.
   - Hero section: *"Turn Your Ideas Into Stickers"* & *"Choose a design or create a custom sticker from your own photo."*
   - Interactive CTA buttons: *"Explore Stickers"* & *"Create Custom Sticker"*.
   - 3-step production overview, featured trending products, and customer testimonials.

2. **Stickers Catalog (`/stickers`)**
   - 12 dummy sticker products with images, categories, finish types, ratings, and pricing.
   - Interactive **Add to Cart** with animated feedback.
   - Search filter, category pills, and sort dropdown.

3. **Custom Sticker Studio (`/custom-sticker`)**
   - Image upload component with drag-and-drop & device file picker.
   - 4 built-in preset samples for instant testing.
   - Live render mockup with shape masks: **Die-cut**, **Circle**, **Square**, and **Kiss-cut**.
   - Customizer options:
     - **Size**: 2" x 2", 3" x 3", 4" x 4", 5" x 5"
     - **Shape**: Die-cut, Circle, Square, Kiss-cut
     - **Vinyl Finish**: High-Shine Glossy, Soft Matte, Rainbow Holographic Shimmer
     - **Quantity**: 10, 25, 50, 100, 200
   - Real-time dummy price calculator.
   - Custom item added directly to frontend demo cart.

4. **Pinterest Inspiration Gallery (`/inspiration`)**
   - Pinterest-style masonry grid layout with boards & tags.
   - Section title: *"Pinterest Inspiration"*.
   - Description: *"Find your favorite designs and turn them into stickers."*
   - **"Get This Sticker"** button on every card.
   - **Structured for future Pinterest API v5 integration**: Handled cleanly in [`src/services/pinterestService.js`](./src/services/pinterestService.js) with mock fallback and documented API endpoints.

5. **Privacy Policy (`/privacy`)**
   - Publicly accessible, comprehensive Privacy Policy formatted for Pinterest Developer App compliance.
   - Includes disclosures for user artwork rights, cookies, and third-party developer integrations.
   - Pre-configured with `_redirects`, `vercel.json`, and `404.html` so direct navigation works on Netlify, Vercel, and GitHub Pages.

6. **Contact Page (`/contact`)**
   - Official email: `support@ctickers.com`.
   - Instagram placeholder: `@ctickers_official`.
   - Interactive contact form with submission state.
   - Studio hours & FAQ accordion.

7. **Frontend Cart & Drawer**
   - Slide-over shopping drawer with badge counter.
   - Quantity increment/decrement, remove items, live subtotal.
   - Confetti celebration on demo checkout.

---

## 🛠️ Tech Stack

- **React 18**
- **Vite 6**
- **Tailwind CSS 3**
- **React Router 6**
- **Lucide Icons**
- **Canvas Confetti**

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run local development server
```bash
npm run dev
```

Visit: `http://localhost:5173`

### 3. Build for production
```bash
npm run build
```

### 4. Preview production build
```bash
npm run preview
```

---

## 🌐 Deployment for Pinterest Developer App Review

The project includes pre-configured routing rules:
- **Netlify / Cloudflare Pages**: Handled by [`public/_redirects`](./public/_redirects) (`/* /index.html 200`)
- **Vercel**: Handled by [`vercel.json`](./vercel.json) rewrite rule
- **GitHub Pages**: Handled by [`public/404.html`](./public/404.html) SPA redirector

Direct visits to `https://your-domain.com/privacy` will work out of the box.
