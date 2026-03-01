# MT PRIME Ecommerce Website 🚀

A modern, mobile-friendly ecommerce website with glassmorphism design, QR code PDF viewer, and full internationalization support.

## ✨ Features

- 🎨 **Glassmorphism Design** - Modern glass-like UI with backdrop blur effects
- 📱 **Mobile-First** - Fully responsive design optimized for all devices
- 🔗 **QR Code Generator** - Generate QR codes for PDF documents
- 📄 **PDF Viewer** - Advanced PDF viewer with zoom, navigation, and download
- 🌍 **Internationalization** - Support for English, French, and Italian
- 🏳️ **Language Switcher** - Beautiful dropdown with flag icons
- 💬 **Custom Tooltips** - Smart positioning tooltip system
- ⚡ **Performance** - Built with Next.js 15 and optimized for speed

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with shadcn/ui
- **PDF Handling**: react-pdf
- **QR Codes**: qrcode
- **Internationalization**: next-intl
- **Build System**: Turborepo monorepo
- **Package Manager**: pnpm

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- pnpm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd ecommerce-website

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Development URLs

- Main site: http://localhost:3000
- English: http://localhost:3000/en
- French: http://localhost:3000/fr
- Italian: http://localhost:3000/it

## 📦 Project Structure

```
ecommerce-website/
├── apps/
│   └── web/                 # Main Next.js application
│       ├── app/
│       │   ├── [locale]/    # Internationalized routes
│       │   └── layout.tsx   # Root layout
│       ├── components/      # React components
│       ├── lib/            # Utilities and configuration
│       ├── messages/       # Translation files
│       └── public/         # Static assets
├── packages/
│   ├── ui/                 # Shared UI components
│   ├── eslint-config/      # ESLint configuration
│   └── typescript-config/  # TypeScript configuration
└── turbo.json             # Turborepo configuration
```

## 🌐 Deployment to Vercel

### Option 1: One-Click Deploy (Recommended)

1. Fork this repository
2. Go to [vercel.com](https://vercel.com)
3. Import your forked repository
4. Vercel will automatically detect and deploy your Next.js app

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set production domain (optional)
vercel --prod
```

### Environment Variables

Set these in your Vercel dashboard:

- `NEXT_PUBLIC_BASE_URL`: Your production URL (e.g., https://mt-prime.vercel.app)
- `NODE_ENV`: production

## 📱 Mobile QR Code Testing

For testing QR codes on mobile devices during development:

1. Find your local IP address:

   ```bash
   # Windows
   ipconfig

   # Mac/Linux
   ifconfig
   ```

2. Update `lib/pdf-config.ts` with your IP:

   ```typescript
   const baseUrl = "http://YOUR_IP:3000"; // e.g., http://192.168.1.100:3000
   ```

3. Start dev server and scan QR codes from mobile devices on the same network

## 🔧 Configuration

### Adding New PDF Documents

Edit `apps/web/lib/pdf-config.ts`:

```typescript
export const pdfDocuments: PDFDocument[] = [
  {
    id: "new-doc",
    title: "New Document",
    description: "Description of your document",
    filename: "new-doc.pdf",
    createdAt: "2025-06-24",
  },
];
```

### Adding New Languages

1. Add locale to `apps/web/lib/i18n/routing.ts`
2. Create translation file in `apps/web/messages/`
3. Add flag CSS in `apps/web/components/LanguageSwitcher.tsx`

## 🎯 Production Checklist

- ✅ Build passes (`pnpm run build`)
- ✅ All PDF files in `public/pdfs/`
- ✅ Logo in `public/logo.png`
- ✅ Environment variables configured
- ✅ Custom domain configured (optional)
- ✅ Analytics configured (optional)

## 📊 Performance

The website is optimized for:

- **Core Web Vitals**: Excellent LCP, FID, and CLS scores
- **SEO**: Proper meta tags and structured data
- **Accessibility**: WCAG compliant
- **Mobile Performance**: Optimized for 3G networks

## 🛡️ Security

- ✅ CSP headers configured
- ✅ No sensitive data in client-side code
- ✅ HTTPS enforced in production
- ✅ XSS protection enabled

## 📞 Support

Built with ❤️ for MT PRIME by GitHub Copilot

---

## License

Private - All rights reserved to MT PRIME

# MT PRIME Logistique - Deployment Guide 🚀

## Production Domain: mtprime.fr

### 🌐 Vercel Deployment Steps

#### 1. **Deploy to Vercel**

```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

#### 2. **Configure Custom Domain (mtprime.fr)**

In your Vercel dashboard:

1. Go to your project settings
2. Navigate to **Domains**
3. Add `mtprime.fr` and `www.mtprime.fr`
4. Vercel will provide DNS records

#### 3. **DNS Configuration (OVHcloud)**

Based on your screenshot, add these DNS records in OVHcloud manager:

```
Type    Name              Value                           TTL
A       mtprime.fr        76.76.21.21 (Vercel IP)        Auto
CNAME   www               cname.vercel-dns.com.           Auto
```

**Get Vercel's IP from your dashboard** - It will show after adding the domain.

#### 4. **Environment Variables on Vercel**

Set these in your Vercel project settings → Environment Variables:

```
NEXT_PUBLIC_APP_URL=https://mtprime.fr
DATABASE_URL=<your-production-database-url>
```

#### 5. **Verify Domain**

After DNS propagation (can take up to 48 hours):

- Visit https://mtprime.fr
- Check all locales: /en, /fr, /it

### 📋 Pre-Deployment Checklist

- ✅ All URLs updated to mtprime.fr
- ✅ Sitemap configured
- ✅ robots.txt configured
- ✅ SEO metadata optimized
- ✅ DNS records ready
- ✅ Environment variables set

### 🔒 SSL Certificate

Vercel automatically provisions SSL certificates for custom domains. It may take a few minutes after adding the domain.

### 🧪 Testing

After deployment:

1. Test all language versions
2. Verify QR codes work
3. Check PDF viewer functionality
4. Test mobile responsiveness
5. Verify SEO with Google Search Console

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with shadcn/ui
- **Database**: Prisma
- **Internationalization**: next-intl
- **Package Manager**: pnpm

## 📦 Project Structure

```
mt-prime/
├── app/
│   ├── [locale]/           # Internationalized routes
│   ├── api/                # API routes
│   ├── layout.tsx          # Root layout
│   └── sitemap.ts          # SEO sitemap
├── components/             # React components
├── lib/                    # Utilities
├── messages/               # Translations (en, fr, it)
├── prisma/                 # Database schema
└── public/                 # Static assets
```

## 🚀 Local Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

### Development URLs

- Main: http://localhost:3000
- English: http://localhost:3000/en
- French: http://localhost:3000/fr
- Italian: http://localhost:3000/it

## 📱 Mobile Testing

For QR code testing on mobile devices:

1. Get your local IP address
2. Update `.env.local`:
   ```
   NEXT_PUBLIC_APP_URL=http://YOUR_IP:3000
   ```
3. Ensure mobile device is on same network

## 🔧 Configuration Files

- `vercel.json` - Vercel deployment config
- `.env.local` - Local environment variables
- `.env.example` - Template for environment variables
- `next.config.mjs` - Next.js configuration

## 📊 SEO Features

- ✅ Dynamic sitemap with all locales
- ✅ robots.txt for crawler instructions
- ✅ OpenGraph and Twitter cards
- ✅ JSON-LD structured data
- ✅ Hreflang tags for multilingual SEO
- ✅ Canonical URLs
- ✅ Meta descriptions and titles

## 🌍 Supported Languages

- 🇬🇧 English (en) - Default
- 🇫🇷 French (fr)
- 🇮🇹 Italian (it)

## 📞 Support

Built for MT PRIME Logistique
Professional Transport & Logistics Services in Cannes, France
Contact: +33 7 44 77 08 02

---

## License

Private - All rights reserved to MT PRIME Logistique
