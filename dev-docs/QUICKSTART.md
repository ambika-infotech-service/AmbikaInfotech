# Quick Start Guide - Ambika Infotech Website

Get the Ambika Infotech website up and running in minutes!

## 🚀 Quick Setup (5 minutes)

### Step 1: Prerequisites
Ensure you have Node.js installed:
```bash
node --version  # Should be v18 or higher
npm --version   # Should be v10 or higher
```

If not installed, download from [nodejs.org](https://nodejs.org/)

### Step 2: Install Dependencies
```bash
cd AmbikaInfotech
npm install
```

### Step 3: Start Development Server
```bash
npm start
```

The website will open at `http://localhost:4200/`

**That's it! 🎉 The website is now running.**

---

## 📝 Customize Your Website

### Update Contact Information

**1. Email & Phone:**
Edit these files:
- `src/app/components/footer.ts` (lines with email/phone)
- `src/app/pages/contact.ts` (contact info section)

**2. Company Name:**
Search and replace "Ambika Infotech" throughout the project if needed.

### Modify Services

Edit `src/app/pages/services.ts`:
- Update the `services` array with your actual services
- Modify descriptions and features

### Update About Page

Edit `src/app/pages/about.ts`:
- Change company story
- Update stats (years, clients, projects)
- Modify mission, vision, and values

### Change Colors

Edit `src/styles.scss`:
```scss
:root {
  --primary-color: #0d6efd;  // Your brand color
  --secondary-color: #2c3e50; // Secondary color
}
```

---

## 🏗️ Build for Production

```bash
npm run build
```

Output will be in: `dist/ambika-infotech/browser/`

---

## 📦 Deploy

### Easiest: Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist/ambika-infotech/browser`
6. Click "Deploy"

**Done! Your site is live.** 🌐

For other deployment options, see [DEPLOYMENT.md](DEPLOYMENT.md)

---

## 🐛 Common Issues

**Port 4200 already in use:**
```bash
npm start -- --port 4201
```

**Build errors after pulling changes:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Page reloads show 404:**
Configure server redirects (see DEPLOYMENT.md)

---

## 📚 Project Structure

```
src/app/
├── components/
│   ├── header.ts    # Navigation
│   └── footer.ts    # Footer
├── pages/
│   ├── home.ts      # Home page
│   ├── services.ts  # Services
│   ├── about.ts     # About us
│   └── contact.ts   # Contact form
```

---

## ✅ Next Steps

1. ✨ **Customize content** - Update all text with your actual information
2. 🎨 **Add your logo** - Replace placeholder with company logo
3. 📸 **Add images** - Include relevant project images
4. 📧 **Setup email** - Connect contact form to email service
5. 🚀 **Deploy** - Launch your website
6. 📊 **Analytics** - Add Google Analytics
7. 🔍 **SEO** - Submit to Google Search Console

---

## 💡 Pro Tips

- Use Chrome DevTools to test responsive design
- Test contact form thoroughly before launch
- Optimize images before adding (use TinyPNG)
- Test on real mobile devices
- Get feedback before going live

---

## 📖 More Documentation

- **Full Documentation:** [README.md](README.md)
- **Deployment Guide:** [DEPLOYMENT.md](DEPLOYMENT.md)
- **Angular Docs:** [angular.dev](https://angular.dev)

---

## 🆘 Need Help?

**Email:** info@ambikainfotech.com
**Phone:** +1 (234) 567-890

---

**Happy building! 🚀**
