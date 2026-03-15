# 🚀 Quick Google Tracking Setup

## ✅ What's Already Done

- Analytics tracking code installed
- Tag Manager integration ready
- Search Console verification ready
- `.env.local` file created

---

## 📋 What You Need To Do (3 Steps)

### **Step 1: Get Google Analytics ID** (5 minutes)

1. Go to: **https://analytics.google.com/**
2. Sign in with Google account
3. Click **"Admin"** (bottom left) → **"Create Property"**
4. Fill in:
   - Property name: `MT PRIME Logistique`
   - Time zone: `France (Paris)`
   - Currency: `EUR`
5. Click **"Data Streams"** → **"Add stream"** → **"Web"**
6. Enter: `https://mtprime.fr`
7. **COPY the Measurement ID** (looks like: `G-XXXXXXXXXX`)
8. Open `.env.local` and paste it:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

---

### **Step 2: Get Google Tag Manager ID** (5 minutes)

1. Go to: **https://tagmanager.google.com/**
2. Click **"Create Account"**
3. Fill in:
   - Account name: `MT PRIME Logistique`
   - Country: `France`
   - Container name: `mtprime.fr`
   - Platform: **Web**
4. **COPY the Container ID** (looks like: `GTM-XXXXXXX`)
5. Open `.env.local` and paste it:
   ```
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
   ```

---

### **Step 3: Get Search Console Verification** (5 minutes)

1. Go to: **https://search.google.com/search-console**
2. Click **"Add Property"** → **"URL prefix"**
3. Enter: `https://mtprime.fr`
4. Choose verification method: **"HTML tag"**
5. You'll see something like:
   ```html
   <meta name="google-site-verification" content="ABC123XYZ..." />
   ```
6. **COPY only the code part** (ABC123XYZ...)
7. Open `.env.local` and paste it:
   ```
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=ABC123XYZ...
   ```

---

## 🧪 Step 4: Test Locally

```bash
# Restart your dev server
pnpm dev
```

Visit: **http://localhost:3000**

Open browser console (F12) and check for:

- No errors about missing tracking IDs
- Google Analytics script loaded
- Google Tag Manager script loaded

---

## 🚀 Step 5: Deploy to Production

### For Vercel:

1. Push code to GitHub
2. Go to Vercel Dashboard → Your Project → **Settings** → **Environment Variables**
3. Add all three variables:
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - `NEXT_PUBLIC_GTM_ID`
   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
4. **Redeploy** your site

---

## ✅ Verify Everything Works

### After deployment, check:

1. **Google Analytics** (after 24h):

   - Go to Analytics → Reports → Realtime
   - Visit your website
   - You should see yourself in realtime report

2. **Google Search Console**:

   - Go back to verification page
   - Click **"Verify"**
   - Should show ✅ verified
   - Go to **Sitemaps** → Add: `sitemap.xml`

3. **Test SEO**:
   - Visit: https://search.google.com/test/rich-results
   - Enter: `https://mtprime.fr`
   - Should detect structured data ✅

---

## 📊 What You'll See After Setup

### Google Analytics Dashboard:

- Real-time visitor count
- Page views by URL
- Traffic sources (Google, direct, social)
- User location (countries, cities)
- Device types (mobile, desktop)

### Google Search Console:

- Search queries bringing traffic
- Click-through rates
- Indexing status
- Mobile usability issues
- Page speed metrics

---

## ⏱️ Timeline

- **Setup**: 15 minutes total
- **Analytics data**: Shows immediately
- **Google indexing**: 1-7 days
- **Search Console data**: 2-3 days

---

## 🆘 Troubleshooting

**Analytics not showing data?**

- Check `.env.local` has correct IDs
- Restart dev server after adding IDs
- Wait 24-48 hours for production data

**Search Console verification failed?**

- Make sure verification code is correct
- Redeploy after adding the code
- Try again after deployment completes

---

## 📞 Need Help?

Check the detailed guide: `SEO-SETUP-GUIDE.md`

---

**That's it! Your website will be fully trackable by Google.** 🎉
