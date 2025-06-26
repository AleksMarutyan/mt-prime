import { redirect } from 'next/navigation';

export default async function PDFPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  redirect(`/en/pdf/${id}`);
}