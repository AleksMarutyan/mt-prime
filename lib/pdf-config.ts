// PDF configuration and metadata
export interface PDFDocument {
  id: string;
  title: string;
  description?: string;
  filename: string;
  createdAt: string;
}

// PDF documents registry - you can add your PDFs here
export const pdfDocuments: PDFDocument[] = [
  {
    id: "saratoga",
    title: "Saratoga Document",
    description: "Saratoga product information and details",
    filename: "saratoga.pdf",
    createdAt: "2025-06-21"
  },
  {
    id: "sforza", 
    title: "Sforza Document",
    description: "Sforza product specifications and guide",
    filename: "sforza.pdf",
    createdAt: "2025-06-21"
  }
];

// Helper function to get PDF by ID
export function getPDFById(id: string): PDFDocument | undefined {
  return pdfDocuments.find(doc => doc.id === id);
}

// Helper function to get PDF URL
export function getPDFUrl(filename: string): string {
  return `/pdfs/${filename}`;
}

// QR Code generation URL helper
export function getQRCodeUrl(documentId: string, locale: string = 'en'): string {
  // Use environment variable or auto-detect based on environment
  let baseUrl: string;
  
  if (process.env.NEXT_PUBLIC_APP_URL) {
    baseUrl = process.env.NEXT_PUBLIC_APP_URL;
  } else if (typeof window !== 'undefined') {
    // Client-side: use current window location
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      baseUrl = `http://${window.location.hostname}:${window.location.port || '3000'}`;
    } else {
      baseUrl = window.location.origin;
    }
  } else {
    // Server-side fallback
    baseUrl = 'https://mt-prime-ecommerce.vercel.app';
  }
  
  // Ensure baseUrl doesn't end with slash and starts with http/https
  baseUrl = baseUrl.replace(/\/$/, '');
  if (!baseUrl.startsWith('http://') && !baseUrl.startsWith('https://')) {
    baseUrl = `https://${baseUrl}`;
  }
    const fullUrl = `${baseUrl}/${locale}/pdf/${documentId}`;
  
  // Validate the URL format one more time to ensure scanner compatibility
  try {
    new URL(fullUrl); // This will throw if URL is invalid
    console.log('Generated QR URL:', fullUrl); // Debug log
    return fullUrl;
  } catch (error) {
    console.error('Invalid URL generated:', fullUrl, error);
    // Fallback to a simple URL if there's an issue
    return `https://mt-prime-ecommerce.vercel.app/${locale}/pdf/${documentId}`;
  }
}
