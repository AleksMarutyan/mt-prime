# 🚀 SEO Setup Guide for MT PRIME Logistique

This guide will help you set up Google Analytics, Google Tag Manager, and Google Search Console for your website to make it fully trackable by Google.

---

## ✅ What's Already Done

Your website now has:
- ✅ Google Analytics 4 (GA4) tracking code
- ✅ Google Tag Manager (GTM) integration
- ✅ Google Search Console verification ready
- ✅ Proper meta tags and Open Graph tags
- ✅ XML sitemap (`/sitemap.xml`)
- ✅ Robots.txt configuration
- ✅ Schema.org structured data (JSON-LD)
- ✅ Multi-language support with hreflang tags
- ✅ Mobile-friendly viewport settings

---

## 🔧 Required Setup Steps

### 1. Google Analytics 4 (GA4) Setup

**Why?** Track user behavior, page views, conversions, and website traffic.

**Steps:**
1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click **"Admin"** (bottom left)
4. Click **"Create Property"**
5. Enter property details:
   - Property name: `MT PRIME Logistique`
   - Time zone: `France (Paris)`
   - Currency: `Euro (EUR)`
6. Click **"Next"** and fill in business details
7. After creation, click **"Data Streams"** → **"Add stream"** → **"Web"**
8. Enter your website URL: `https://mtprime.fr`
9. Stream name: `MT PRIME Website`
10. **Copy the Measurement ID** (format: `G-XXXXXXXXXX`)

**Add to your project:**
```bash
# Create a .env.local file (or add to existing one)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

### 2. Google Tag Manager (GTM) Setup

**Why?** Manage all tracking codes from one place without code changes.

**Steps:**
1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Sign in with your Google account
3. Click **"Create Account"**
4. Account setup:
   - Account name: `MT PRIME Logistique`
   - Country: `France`
5. Container setup:
   - Container name: `mtprime.fr`
   - Target platform: **Web**
6. Click **"Create"**
7. Accept Terms of Service
8. **Copy the Container ID** (format: `GTM-XXXXXXX`)

**Add to your project:**
```bash
# Add to .env.local
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

**Optional: Link GA4 to GTM**
1. In GTM, click **"Tags"** → **"New"**
2. Name: `GA4 Configuration`
3. Tag type: **Google Analytics: GA4 Configuration**
4. Measurement ID: Your GA4 Measurement ID
5. Trigger: **All Pages**
6. Click **"Save"**
7. Click **"Submit"** → **"Publish"**

---

### 3. Google Search Console Setup

**Why?** Monitor your website's search performance, indexing status, and fix SEO issues.

**Steps:**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Sign in with your Google account
3. Click **"Add Property"**
4. Choose **"URL prefix"** and enter: `https://mtprime.fr`
5. Verification method: **HTML tag** (recommended)
6. Copy the verification code from the meta tag:
   ```html
   <meta name="google-site-verification" content="YOUR-CODE-HERE" />
   ```
7. Copy only the `YOUR-CODE-HERE` part

**Add to your project:**
```bash
# Add to .env.local
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=YOUR-CODE-HERE
```

8. Go back to Search Console and click **"Verify"**
9. After verification, submit your sitemap:
   - Click **"Sitemaps"** in the left menu
   - Enter: `sitemap.xml`
   - Click **"Submit"**

---

## 📝 Environment Variables Summary

Create a `.env.local` file in your project root with:

```bash
# Google Analytics 4 Measurement ID
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google Tag Manager Container ID
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Google Search Console Verification Code
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code-here
```

**Important:** 
- Never commit `.env.local` to Git (it's already in `.gitignore`)
- For production (Vercel), add these as environment variables in your deployment settings

---

## 🚀 Deployment to Production

### Vercel Deployment:

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Import your repository
4. In **"Environment Variables"**, add:
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - `NEXT_PUBLIC_GTM_ID`
   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
5. Deploy!

---

## ✅ Verification Checklist

After deployment, verify everything is working:

### Google Analytics:
- [ ] Go to Google Analytics → Reports → Realtime
- [ ] Visit your website in another tab
- [ ] You should see yourself in the realtime report

### Google Tag Manager:
- [ ] In GTM, click **"Preview"**
- [ ] Enter your website URL
- [ ] GTM debugger should open and show tags firing

### Google Search Console:
- [ ] Check if verification is successful
- [ ] Submit sitemap: `https://mtprime.fr/sitemap.xml`
- [ ] Request indexing for main pages

### SEO Meta Tags:
- [ ] Use [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Test your homepage URL
- [ ] Verify structured data is detected

### Mobile-Friendly Test:
- [ ] Use [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [ ] Test your website URL
- [ ] Should show "Page is mobile friendly"

### Sitemap Check:
- [ ] Visit `https://mtprime.fr/sitemap.xml`
- [ ] Should show all pages with proper alternates

---

## 📊 Tracking What's Implemented

### Google Analytics 4 Events:
The implementation automatically tracks:
- **Page views** - Every page visit
- **Scroll depth** - How far users scroll
- **Outbound clicks** - Links to external sites
- **File downloads** - PDF and file downloads
- **Form submissions** - Contact form submissions

### Custom Events (You can add later):
```javascript
// Example: Track button clicks
gtag('event', 'button_click', {
  'button_name': 'Contact Us',
  'page_location': window.location.href
});
```

---

## 🔍 SEO Best Practices Already Implemented

1. **Semantic HTML** - Proper heading structure (H1, H2, etc.)
2. **Meta descriptions** - Unique for each page
3. **Open Graph tags** - For social media sharing
4. **Twitter Card tags** - For Twitter sharing
5. **Canonical URLs** - Prevent duplicate content
6. **Hreflang tags** - For multi-language support
7. **Structured data** - Rich snippets for Google
8. **Sitemap** - Auto-generated for all pages
9. **Robots.txt** - Proper crawling instructions
10. **Mobile-friendly** - Responsive design
11. **Fast loading** - Optimized images and code
12. **HTTPS** - Secure connection

---

## 🎯 Next Steps for Better SEO

### Content:
- [ ] Add blog/news section with regular updates
- [ ] Create service-specific landing pages
- [ ] Add customer testimonials and reviews
- [ ] Include relevant keywords naturally in content

### Technical:
- [ ] Set up Google Business Profile
- [ ] Add social media links to structured data
- [ ] Implement breadcrumb navigation
- [ ] Add FAQ section with structured data
- [ ] Create a blog with regular articles

### Performance:
- [ ] Optimize images (use WebP format)
- [ ] Enable Vercel Analytics
- [ ] Set up monitoring with Google PageSpeed Insights

### Social Media:
- [ ] Create social media profiles (LinkedIn, Facebook, Instagram)
- [ ] Add social links to the footer
- [ ] Update structured data with social URLs

---

## 📞 Support Resources

- [Google Analytics Help](https://support.google.com/analytics)
- [Google Tag Manager Help](https://support.google.com/tagmanager)
- [Google Search Console Help](https://support.google.com/webmasters)
- [Next.js SEO Guide](https://nextjs.org/learn/seo/introduction-to-seo)

---

## 🎉 You're All Set!

Once you add the environment variables and deploy, your website will be:
- ✅ Fully trackable by Google Analytics
- ✅ Manageable via Google Tag Manager
- ✅ Monitored in Google Search Console
- ✅ Optimized for search engines
- ✅ Ready to rank on Google!

**Estimated time for Google to start indexing:** 1-7 days
**Estimated time to see analytics data:** Immediately after deployment

Good luck! 🚀
