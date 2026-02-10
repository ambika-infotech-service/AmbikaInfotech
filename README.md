# Ambika Infotech - Professional IT Services Website

A modern, production-ready website for Ambika Infotech, an IT services business. Built with Angular 21, Bootstrap 5, and TypeScript following industry best practices.

## 🚀 Features

- **Modern Angular Architecture**: Built with Angular 21 using standalone components
- **Responsive Design**: Mobile-first approach using Bootstrap 5
- **SEO Optimized**: Proper meta tags, semantic HTML, and page titles
- **Fast & Performant**: Lazy-loaded routes and optimized assets
- **Accessible**: WCAG AA compliant with proper ARIA attributes
- **Professional UI/UX**: Clean, modern design with smooth animations
- **Contact Form**: Reactive forms with validation
- **Type-Safe**: Full TypeScript implementation with strict mode

## 📋 Pages

1. **Home** - Hero section, services overview, company highlights, and call-to-action
2. **Services** - Detailed information about all IT services offered
3. **About** - Company story, mission, vision, values, and team
4. **Contact** - Professional contact form with validation and contact information

## 🛠️ Tech Stack

- **Framework**: Angular 21
- **Styling**: Bootstrap 5.3.8 + Custom SCSS
- **Icons**: Bootstrap Icons
- **Forms**: Angular Reactive Forms
- **Routing**: Angular Router with lazy loading
- **TypeScript**: 5.9.2

## 📦 Prerequisites

- Node.js (v18 or higher)
- npm (v10 or higher)

## 🔧 Installation & Setup

1. **Clone or navigate to the project**
   ```bash
   cd AmbikaInfotech
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

   The application will open at `http://localhost:4200/`

## 🏗️ Build for Production

1. **Create production build**
   ```bash
   npm run build
   ```

   Build artifacts will be stored in the `dist/` directory, optimized for production.

2. **Build output location**
   ```
   dist/ambika-infotech/browser/
   ```

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header.ts          # Navigation header
│   │   └── footer.ts          # Site footer
│   ├── pages/
│   │   ├── home.ts           # Home page
│   │   ├── services.ts       # Services page
│   │   ├── about.ts          # About page
│   │   └── contact.ts        # Contact page with form
│   ├── app.ts                # Root component
│   ├── app.html              # Main template
│   ├── app.routes.ts         # Route definitions
│   └── app.config.ts         # App configuration
├── styles.scss               # Global styles & Bootstrap config
└── index.html               # Main HTML file with SEO meta tags
```

## 🎨 Design Features

- **Color Scheme**: Professional blue (#0d6efd) and grey tones
- **Typography**: Clean, readable fonts (Segoe UI family)
- **Layout**: Container-based responsive grid system
- **Components**: Reusable card components with hover effects
- **Animations**: Subtle transitions for enhanced UX
- **Icons**: Bootstrap Icons for consistent visual language

## 🔍 SEO Optimization

- Semantic HTML5 structure
- Meta descriptions and keywords
- Open Graph tags for social media sharing
- Twitter Card meta tags
- Proper heading hierarchy (H1-H6)
- Alt text for images (when added)
- Sitemap ready structure
- Mobile-friendly design

## ♿ Accessibility

- WCAG AA compliant
- Proper ARIA labels and roles
- Keyboard navigation support
- Focus management
- Sufficient color contrast
- Screen reader friendly
- Form labels and error messages

## 📱 Responsive Breakpoints

- **Mobile**: < 576px
- **Tablet**: 576px - 768px
- **Desktop**: 768px - 992px
- **Large Desktop**: > 992px

## 🔐 Contact Form

The contact form includes:
- Client-side validation
- Required field indicators
- Email format validation
- Success/error feedback
- Loading states

**Note**: Currently uses simulated submission. To connect to a backend:

1. Create an API endpoint for form submissions
2. Update the `onSubmit()` method in [contact.ts](src/app/pages/contact.ts)
3. Replace the `setTimeout` simulation with an actual HTTP call

Example:
```typescript
// In contact.ts, inject HttpClient and replace simulation with:
this.http.post('/api/contact', this.contactForm.value).subscribe({
  next: () => this.submitSuccess.set(true),
  error: () => this.submitError.set(false)
});
```

## 🚀 Deployment

### Option 1: Static Hosting (Netlify, Vercel, GitHub Pages)

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist/ambika-infotech/browser/` directory

3. Configure redirects for Angular routing (example for Netlify):
   Create `_redirects` file in `public/`:
   ```
   /*    /index.html   200
   ```

### Option 2: Traditional Web Server (Apache, Nginx)

1. Build the project
2. Copy contents of `dist/ambika-infotech/browser/` to web server root
3. Configure server to redirect all routes to `index.html`

#### Nginx Configuration Example:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

#### Apache Configuration Example (.htaccess):
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## 🎯 Customization Guide

### Update Company Information

1. **Contact Details**: Edit [footer.ts](src/app/components/footer.ts) and [contact.ts](src/app/pages/contact.ts)
2. **Company Name**: Search and replace "Ambika Infotech" throughout the project
3. **Services**: Modify the services array in [home.ts](src/app/pages/home.ts) and [services.ts](src/app/pages/services.ts)
4. **About Content**: Update [about.ts](src/app/pages/about.ts) with actual company information

### Styling Changes

1. **Colors**: Update CSS variables in [styles.scss](src/styles.scss)
   ```scss
   :root {
     --primary-color: #0d6efd;  // Change primary color
     --secondary-color: #2c3e50; // Change secondary color
   }
   ```

2. **Typography**: Update font-family in [styles.scss](src/styles.scss)

### Add New Pages

1. Create new component in `src/app/pages/`
2. Add route in [app.routes.ts](src/app/app.routes.ts)
3. Add navigation link in [header.ts](src/app/components/header.ts)

## 📊 Performance Optimization

- Lazy-loaded routes for faster initial load
- OnPush change detection strategy
- Optimized images (when added, use `NgOptimizedImage`)
- Minified production builds
- Tree-shaking for unused code removal

## 🔮 Future Enhancements

- [ ] Blog/News section
- [ ] Client testimonials slider
- [ ] Portfolio/Case studies page
- [ ] Live chat integration
- [ ] Multi-language support (i18n)
- [ ] Dark mode toggle
- [ ] Backend API integration
- [ ] Analytics integration (Google Analytics, etc.)
- [ ] Service request tracking system
- [ ] Client portal

## 🐛 Troubleshooting

**Port 4200 already in use:**
```bash
ng serve --port 4300
```

**Build errors:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Angular CLI not found:**
```bash
npm install -g @angular/cli
```

## 📝 License

This project is intended for Ambika Infotech business use.

## 👥 Support

For questions or support:
- Email: info@ambikainfotech.com
- Phone: +1 (234) 567-890

---

**Built with ❤️ using Angular 21 and Bootstrap 5**

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
