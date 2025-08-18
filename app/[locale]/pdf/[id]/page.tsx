import { notFound } from 'next/navigation';
import PDFViewer from '@/components/PDFViewer';
import { getPDFById } from '@/lib/pdf-config';

interface PageProps {
  params: Promise<{
    locale: string;
    id: string;
  }>;
}

export default async function PDFPage({ params }: PageProps) {
  const { id } = await params;
  
  // Check if document exists
  const document = getPDFById(id);
  
  if (!document) {
    notFound();
  }

  return <PDFViewer documentId={id} />;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const document = getPDFById(id);
  
  if (!document) {
    return {
      title: 'Document Not Found',
    };
  }

  return {
    title: document.title,
    description: document.description || `View ${document.title}`,
  };
}
