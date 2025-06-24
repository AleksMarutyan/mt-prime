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
