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
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 
                  (typeof window !== 'undefined' ? 
                    (window.location.hostname === 'localhost' ? 
                      `http://${window.location.hostname}:3000` : // Development with any IP
                      window.location.origin // Production or any other environment
                    ) : 'https://mt-prime-ecommerce.vercel.app' // Fallback for SSR
                  );
  return `${baseUrl}/${locale}/pdf/${documentId}`;
}
