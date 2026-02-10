# Deployment Guide - Ambika Infotech Website

This document provides detailed instructions for deploying the Ambika Infotech website to various hosting platforms.

## Table of Contents
1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Build for Production](#build-for-production)
3. [Deployment Options](#deployment-options)
4. [Environment Configuration](#environment-configuration)
5. [Post-Deployment](#post-deployment)

---

## Pre-Deployment Checklist

Before deploying, ensure you have:

- [ ] Updated all contact information (email, phone, etc.)
- [ ] Customized company content in all pages
- [ ] Tested the contact form functionality
- [ ] Verified all links work correctly
- [ ] Optimized and added company images/logos
- [ ] Updated meta tags and SEO information
- [ ] Tested on multiple devices and browsers
- [ ] Set up analytics (if needed)
- [ ] Configured backend API (if contact form requires it)
- [ ] Created favicon and touch icons

---

## Build for Production

1. **Create optimized production build:**
   ```bash
   npm run build
   ```

2. **Output location:**
   ```
   dist/ambika-infotech/browser/
   ```

3. **Build verification:**
   - Check that `dist/` folder contains all necessary files
   - Verify file sizes are optimized
   - Test the build locally before deploying

4. **Local testing of production build:**
   ```bash
   # Install a simple HTTP server
   npm install -g http-server

   # Serve the production build
   cd dist/ambika-infotech/browser
   http-server -p 8080
   ```

   Visit `http://localhost:8080` to test

---

## Deployment Options

### Option 1: Netlify (Recommended for Beginners)

**Advantages:**
- Automatic deployments from Git
- Free SSL certificates
- CDN included
- Easy configuration

**Steps:**

1. **Install Netlify CLI (optional):**
   ```bash
   npm install -g netlify-cli
   ```

2. **Create `netlify.toml` in project root:**
   ```toml
   [build]
     command = "npm run build"
     publish = "dist/ambika-infotech/browser"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

3. **Deploy via Netlify Dashboard:**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `dist/ambika-infotech/browser`
   - Click "Deploy site"

4. **Or deploy via CLI:**
   ```bash
   npm run build
   netlify deploy --prod
   ```

---

### Option 2: Vercel

**Advantages:**
- Excellent performance
- Automatic HTTPS
- Git integration
- Free tier available

**Steps:**

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Create `vercel.json` in project root:**
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": "dist/ambika-infotech/browser",
     "rewrites": [
       {
         "source": "/(.*)",
         "destination": "/index.html"
       }
     ]
   }
   ```

3. **Deploy:**
   ```bash
   npm run build
   vercel --prod
   ```

---

### Option 3: Firebase Hosting

**Advantages:**
- Google infrastructure
- Free SSL
- CDN
- Easy rollbacks

**Steps:**

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase:**
   ```bash
   firebase login
   ```

3. **Initialize Firebase:**
   ```bash
   firebase init hosting
   ```

   Configuration:
   - Public directory: `dist/ambika-infotech/browser`
   - Single-page app: Yes
   - Overwrite index.html: No

4. **Deploy:**
   ```bash
   npm run build
   firebase deploy
   ```

---

### Option 4: GitHub Pages

**Advantages:**
- Free hosting
- Integrated with GitHub
- Custom domains supported

**Steps:**

1. **Install Angular CLI GitHub Pages:**
   ```bash
   npm install -g angular-cli-ghpages
   ```

2. **Build and deploy:**
   ```bash
   npm run build -- --base-href /repository-name/
   npx angular-cli-ghpages --dir=dist/ambika-infotech/browser
   ```

3. **Configure GitHub repository:**
   - Go to Settings → Pages
   - Source: gh-pages branch
   - Save

---

### Option 5: AWS S3 + CloudFront

**Advantages:**
- Highly scalable
- Full AWS integration
- Professional deployment

**Steps:**

1. **Create S3 bucket:**
   - Bucket name: ambika-infotech.com
   - Enable static website hosting
   - Set index document: index.html
   - Set error document: index.html

2. **Upload files:**
   ```bash
   npm run build
   aws s3 sync dist/ambika-infotech/browser/ s3://your-bucket-name
   ```

3. **Configure CloudFront:**
   - Create distribution
   - Origin: Your S3 bucket
   - Default root object: index.html
   - Configure custom error responses:
     - 404 → /index.html (200 status)
     - 403 → /index.html (200 status)

4. **SSL Certificate:**
   - Request certificate in AWS Certificate Manager
   - Add to CloudFront distribution

---

### Option 6: Traditional Web Server (Nginx/Apache)

#### Nginx Configuration

1. **Copy files to server:**
   ```bash
   scp -r dist/ambika-infotech/browser/* user@server:/var/www/ambika-infotech/
   ```

2. **Configure Nginx** (`/etc/nginx/sites-available/ambika-infotech`):
   ```nginx
   server {
       listen 80;
       server_name ambikainfotech.com www.ambikainfotech.com;
       root /var/www/ambika-infotech;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }

       # Cache static assets
       location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }

       # Gzip compression
       gzip on;
       gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
   }
   ```

3. **Enable site and restart:**
   ```bash
   sudo ln -s /etc/nginx/sites-available/ambika-infotech /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

4. **SSL with Let's Encrypt:**
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d ambikainfotech.com -d www.ambikainfotech.com
   ```

#### Apache Configuration

1. **Copy files to server:**
   ```bash
   scp -r dist/ambika-infotech/browser/* user@server:/var/www/html/
   ```

2. **Create `.htaccess` in document root:**
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>

   # Enable Gzip compression
   <IfModule mod_deflate.c>
     AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
   </IfModule>

   # Cache static assets
   <IfModule mod_expires.c>
     ExpiresActive On
     ExpiresByType image/jpg "access plus 1 year"
     ExpiresByType image/jpeg "access plus 1 year"
     ExpiresByType image/gif "access plus 1 year"
     ExpiresByType image/png "access plus 1 year"
     ExpiresByType text/css "access plus 1 month"
     ExpiresByType application/javascript "access plus 1 month"
   </IfModule>
   ```

3. **Enable mod_rewrite:**
   ```bash
   sudo a2enmod rewrite
   sudo systemctl restart apache2
   ```

---

## Environment Configuration

### Domain Configuration

1. **Update DNS records:**
   - Type A: Points to server IP
   - Type CNAME: www → root domain

2. **Update base href (if deploying to subdirectory):**
   ```bash
   npm run build -- --base-href /subdirectory/
   ```

### Environment Variables

For backend API integration, create environment files:

**src/environments/environment.prod.ts:**
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://api.ambikainfotech.com',
  contactFormEndpoint: '/api/contact'
};
```

Build with production environment:
```bash
npm run build -- --configuration production
```

---

## Post-Deployment

### 1. Verification Checklist

- [ ] Website loads correctly
- [ ] All pages are accessible
- [ ] Navigation works properly
- [ ] Contact form submits successfully
- [ ] All links work (internal and external)
- [ ] Mobile responsiveness verified
- [ ] SSL certificate is active
- [ ] SEO meta tags are present

### 2. Performance Testing

- Run Google PageSpeed Insights
- Test with GTmetrix
- Verify Core Web Vitals

### 3. SEO Setup

- Submit sitemap to Google Search Console
- Configure robots.txt
- Set up Google Analytics
- Configure Google My Business

### 4. Monitoring

**Setup monitoring tools:**
- Uptime monitoring (UptimeRobot, Pingdom)
- Error tracking (Sentry)
- Analytics (Google Analytics, Plausible)

### 5. Backup Strategy

- Set up automated backups
- Document restoration process
- Test backup restoration

---

## Troubleshooting

### Issue: 404 Errors on Page Refresh

**Solution:** Ensure server redirects are configured (see deployment option instructions)

### Issue: Blank Page After Deployment

**Solutions:**
1. Check browser console for errors
2. Verify base-href is correct
3. Check that all files were uploaded
4. Clear browser cache

### Issue: Styles Not Loading

**Solutions:**
1. Check that CSS files are in dist folder
2. Verify base-href configuration
3. Check Content-Type headers

### Issue: Slow Loading

**Solutions:**
1. Enable Gzip compression
2. Configure CDN
3. Optimize images
4. Enable caching

---

## Continuous Deployment

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2

    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'

    - name: Install dependencies
      run: npm ci

    - name: Build
      run: npm run build

    - name: Deploy to Netlify
      uses: netlify/actions/cli@master
      env:
        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
      with:
        args: deploy --dir=dist/ambika-infotech/browser --prod
```

---

## Security Considerations

1. **HTTPS:** Always use HTTPS in production
2. **Security Headers:** Configure in server/CDN
3. **API Keys:** Never commit sensitive keys
4. **CORS:** Configure properly if using backend API
5. **Rate Limiting:** Implement for contact form
6. **Content Security Policy:** Add CSP headers

---

## Support

For deployment assistance:
- Email: info@ambikainfotech.com
- Documentation: See README.md

---

**Last Updated:** February 2026
