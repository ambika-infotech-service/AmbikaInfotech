# Website Customization Guide

This guide helps you customize the Ambika Infotech website to match your branding and business needs.

## Table of Contents
1. [Brand Identity](#brand-identity)
2. [Content Updates](#content-updates)
3. [Styling & Design](#styling--design)
4. [Adding Features](#adding-features)
5. [SEO Optimization](#seo-optimization)

---

## Brand Identity

### 1. Company Logo

**Add your logo to the header:**

Edit `src/app/components/header.ts`:

```typescript
// Replace the icon with an image
<a class="navbar-brand fw-bold text-primary" routerLink="/">
  <img src="/assets/logo.png" alt="Ambika Infotech" height="40">
  Ambika Infotech
</a>
```

**Logo requirements:**
- Format: PNG with transparent background
- Size: Approximately 40-50px height
- Location: `public/assets/logo.png`

### 2. Favicon & Touch Icons

Replace these files in `public/`:
- `favicon.ico` (32x32px)
- `apple-touch-icon.png` (180x180px)

**Tools to create favicons:**
- [Favicon.io](https://favicon.io/)
- [RealFaviconGenerator](https://realfavicongenerator.net/)

### 3. Colors

Edit `src/styles.scss`:

```scss
:root {
  --primary-color: #0d6efd;      // Main brand color (buttons, links)
  --secondary-color: #2c3e50;    // Dark text color
  --accent-color: #3498db;       // Accent highlights
  --text-dark: #2c3e50;          // Body text
  --text-light: #6c757d;         // Secondary text
  --bg-light: #f8f9fa;           // Light background
}
```

**Color scheme tips:**
- Use a color picker from your logo
- Test contrast ratios (aim for 4.5:1 minimum)
- Keep it professional (avoid too many colors)

### 4. Fonts

Edit `src/styles.scss`:

```scss
body {
  font-family: 'Your Font', 'Segoe UI', sans-serif;
}

// Add Google Fonts in src/index.html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

## Content Updates

### Home Page

**File:** `src/app/pages/home.ts`

**1. Hero Section:**
```typescript
// Update headline and tagline (in template section)
<h1>Your Custom Headline</h1>
<p class="lead">Your unique value proposition</p>
```

**2. Statistics:**
```typescript
// Update trust indicators
<div class="col-4">
  <h3>15+</h3>
  <p>Years Experience</p>
</div>
```

**3. Services Overview:**
```typescript
services = [
  {
    icon: 'bi bi-your-icon',
    title: 'Your Service',
    description: 'Service description'
  },
  // Add more services
];
```

**4. Technologies:**
```typescript
technologies = [
  'Technology 1',
  'Technology 2',
  // Add your tech stack
];
```

### Services Page

**File:** `src/app/pages/services.ts`

**Update services array:**
```typescript
services: Service[] = [
  {
    icon: 'bi bi-icon-name',
    title: 'Service Name',
    description: 'Detailed service description...',
    features: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
      // Add all features
    ]
  },
  // Add more services
];
```

**Icons:** Browse [Bootstrap Icons](https://icons.getbootstrap.com/)

### About Page

**File:** `src/app/pages/about.ts`

**1. Update statistics:**
```typescript
stats = [
  {
    icon: 'bi bi-calendar-check',
    number: '15+',
    label: 'Years in Business'
  },
  // Update with your actual numbers
];
```

**2. Update values:**
```typescript
values = [
  {
    icon: 'bi bi-star',
    title: 'Your Value',
    description: 'Description of this value...'
  },
  // Add your core values
];
```

**3. Update company story:**
Edit the template section with your actual company history and mission.

### Contact Page

**File:** `src/app/pages/contact.ts`

**1. Update contact information:**
```typescript
// In the template section, update:
<a href="mailto:your@email.com">your@email.com</a>
<a href="tel:+1234567890">+1 (234) 567-890</a>
<a href="https://wa.me/1234567890">WhatsApp Support</a>
```

**2. Customize service options:**
```typescript
// Update the select options in the template
<option value="your-service">Your Service Name</option>
```

**3. Connect to backend API:**
```typescript
// Replace setTimeout simulation with actual API call
import { HttpClient } from '@angular/common/http';

private http = inject(HttpClient);

onSubmit(): void {
  if (this.contactForm.invalid) return;

  this.isSubmitting.set(true);

  this.http.post('/api/contact', this.contactForm.value).subscribe({
    next: () => {
      this.submitSuccess.set(true);
      this.contactForm.reset();
      this.isSubmitting.set(false);
    },
    error: () => {
      this.submitError.set(true);
      this.isSubmitting.set(false);
    }
  });
}
```

### Footer

**File:** `src/app/components/footer.ts`

**Update all contact information and social links:**
```typescript
// In the template section, update:
<a href="https://linkedin.com/company/yourcompany">LinkedIn</a>
<a href="mailto:your@email.com">your@email.com</a>
```

---

## Styling & Design

### Button Styles

**File:** `src/styles.scss`

```scss
.btn-primary {
  padding: 0.75rem 2rem;
  font-weight: 500;
  border-radius: 0.375rem;
  // Customize as needed
}

// Add custom button variant
.btn-custom {
  background-color: #your-color;
  color: white;

  &:hover {
    background-color: #darker-shade;
  }
}
```

### Card Styles

```scss
.card {
  border-radius: 1rem;  // More rounded
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);  // Stronger shadow
}
```

### Animation Speed

```scss
// Adjust global animation speed
* {
  transition: all 0.2s ease;  // Faster (default is 0.3s)
}
```

### Custom Section Background

```scss
.custom-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 5rem 0;
}
```

---

## Adding Features

### Add Image Gallery

1. **Install lightbox:**
```bash
npm install ngx-lightbox
```

2. **Create gallery component:**
```bash
ng generate component components/gallery
```

3. **Add to route:**
```typescript
// In app.routes.ts
{
  path: 'gallery',
  loadComponent: () => import('./components/gallery').then(m => m.GalleryComponent)
}
```

### Add Blog Section

1. **Create blog structure:**
```bash
ng generate component pages/blog
ng generate component pages/blog-post
```

2. **Create blog service:**
```bash
ng generate service services/blog
```

3. **Implement blog listing and detail pages**

### Add Client Testimonials

**In home.ts or dedicated testimonials component:**

```typescript
testimonials = [
  {
    name: 'John Doe',
    company: 'ABC Corp',
    text: 'Excellent service and support!',
    image: '/assets/testimonials/john.jpg'
  },
  // Add more testimonials
];
```

**Template:**
```html
<section class="section bg-light">
  <div class="container">
    <h2>What Our Clients Say</h2>
    <div class="row">
      @for (testimonial of testimonials; track testimonial.name) {
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <p>"{{ testimonial.text }}"</p>
              <h6>{{ testimonial.name }}</h6>
              <small>{{ testimonial.company }}</small>
            </div>
          </div>
        </div>
      }
    </div>
  </div>
</section>
```

---

## SEO Optimization

### Update Meta Tags

**File:** `src/index.html`

```html
<title>Your Company - Your Tagline</title>
<meta name="description" content="Your unique 150-160 character description">
<meta name="keywords" content="keyword1, keyword2, keyword3">
```

### Page-Specific Titles

**Already configured in:** `src/app/app.routes.ts`

Update titles for each route:
```typescript
{
  path: '',
  title: 'Home - Your Company Name'
}
```

### Add Structured Data

Add in `src/index.html` before closing `</head>`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ambika Infotech",
  "url": "https://ambikainfotech.online",
  "logo": "https://ambikainfotech.online/assets/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-234-567-890",
    "contactType": "Customer Service"
  },
  "sameAs": [
    "https://facebook.com/yourpage",
    "https://twitter.com/yourhandle",
    "https://linkedin.com/company/yourcompany"
  ]
}
</script>
```

### Generate Sitemap

1. **Install sitemap generator:**
```bash
npm install --save-dev angular-cli-ghpages
```

2. **Create sitemap manually** in `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ambikainfotech.online/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://ambikainfotech.online/services</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- Add all pages -->
</urlset>
```

---

## Image Optimization

### Add Images

**Recommended structure:**
```
public/assets/
├── images/
│   ├── hero-bg.jpg
│   ├── services/
│   ├── team/
│   └── clients/
├── icons/
└── logo.png
```

### Use Images in Components

```typescript
// In component template
<img
  ngSrc="/assets/images/hero-bg.jpg"
  alt="Description"
  width="1200"
  height="600"
  priority>
```

**Note:** Import `NgOptimizedImage` in component:
```typescript
import { NgOptimizedImage } from '@angular/common';

@Component({
  imports: [NgOptimizedImage],
  // ...
})
```

### Image Optimization Tips

1. **Compress images:** Use [TinyPNG](https://tinypng.com/)
2. **Use WebP format** when possible
3. **Provide responsive images** with srcset
4. **Lazy load** non-critical images

---

## Analytics Integration

### Google Analytics

1. **Add to `src/index.html` before `</head>`:**
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

2. **Track events in components:**
```typescript
// Track button clicks
onClick() {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'contact_form_submit', {
      event_category: 'engagement',
      event_label: 'Contact Form'
    });
  }
}
```

---

## Testing Checklist

After customization, test:

- [ ] All pages load correctly
- [ ] Navigation works on mobile
- [ ] Contact form submits properly
- [ ] All links are updated
- [ ] Images load and display correctly
- [ ] Colors match your brand
- [ ] Content is accurate
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Cross-browser compatible

---

## Need Help?

- **Documentation:** [README.md](README.md)
- **Deployment:** [DEPLOYMENT.md](DEPLOYMENT.md)
- **Quick Start:** [QUICKSTART.md](QUICKSTART.md)

---

**Happy customizing! 🎨**
