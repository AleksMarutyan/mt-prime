'use client';

import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { getPDFById, getPDFUrl } from '@/lib/pdf-config';
import { Button } from '@workspace/ui/components/button';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download, BookOpen, FileText } from 'lucide-react';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewerProps {
  documentId: string;
}

export default function PDFViewer({ documentId }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'all' | 'single'>('single'); // Default to single page for large PDFs
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [loadedPages, setLoadedPages] = useState<Set<number>>(new Set()); // Track loaded pages
  const [pagesInView, setPagesInView] = useState<Set<number>>(new Set([1])); // Track pages in viewport

  const document = getPDFById(documentId);
  useEffect(() => {
    // Detect mobile device and set appropriate defaults
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // Set initial scale based on screen size for better mobile experience
      if (mobile) {
        if (window.innerWidth < 400) {
          setScale(0.5); // Extra small screens (very small phones)
        } else if (window.innerWidth < 600) {
          setScale(0.6); // Small phones
        } else {
          setScale(0.7); // Larger phones/small tablets
        }
      } else {
        setScale(1.0); // Normal scale for desktop
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!document) {
      setError('Document not found');
      setLoading(false);
    }
  }, [document]);
  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
    setError(null);
    
    // For large PDFs (>20 pages), automatically switch to single page view
    if (numPages > 20) {
      setViewMode('single');
    }
    
    // Mark first page as loaded
    setLoadedPages(new Set([1]));
  };

  const onDocumentLoadError = (error: Error) => {
    console.error('PDF load error:', error);
    setError('Failed to load PDF document. The file might be too large or corrupted.');
    setLoading(false);
  };

  // Function to determine which pages should be rendered based on viewport
  const getVisiblePages = () => {
    if (viewMode === 'single') {
      return [pageNumber];
    } else {
      // For 'all' view, render only pages near current page to save memory
      const range = isMobile ? 2 : 3; // Render fewer pages on mobile
      const start = Math.max(1, pageNumber - range);
      const end = Math.min(numPages, pageNumber + range);
      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    }
  };

  const goToPrevPage = () => {
    setPageNumber(prev => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber(prev => Math.min(prev + 1, numPages));
  };

  const zoomIn = () => {
    setScale(prev => Math.min(prev + 0.2, 3.0));
  };
  const zoomOut = () => {
    setScale(prev => Math.max(prev - 0.2, 0.5));
  };

  const toggleViewMode = () => {
    setViewMode(prev => prev === 'all' ? 'single' : 'all');
  };
  const scrollToPage = (pageNum: number) => {
    setPageNumber(pageNum);
    if (viewMode === 'all') {
      const pageElement = window.document.getElementById(`page-${pageNum}`);
      if (pageElement) {
        pageElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };
  const downloadPDF = () => {
    if (document) {
      const link = window.document.createElement('a');
      link.href = getPDFUrl(document.filename);
      link.download = document.filename;
      link.click();
    }
  };

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  if (!document) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Document Not Found</h1>
          <p className="text-gray-600">The requested document could not be found.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 backdrop-blur-md bg-white/10 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 sm:py-4 gap-3">
            <div className="min-w-0 flex-1">
              <h1 className="text-lg sm:text-xl font-semibold text-white break-words">
                {document.title}
              </h1>
              {document.description && (
                <p className="text-xs sm:text-sm text-white/80 mt-1 break-words leading-relaxed">
                  {document.description}
                </p>
              )}
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <Button
                variant="outline"
                size="sm"
                onClick={downloadPDF}
                className="flex items-center gap-1 text-xs sm:text-sm px-2 py-1.5 h-8 sm:h-9 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-md"
              >
                <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden xs:inline sm:inline">Download</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={toggleViewMode}
                className="flex items-center gap-1 text-xs sm:text-sm px-2 py-1.5 h-8 sm:h-9 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-md"
              >
                {viewMode === 'all' ? <BookOpen className="h-3 w-3 sm:h-4 sm:w-4" /> : <FileText className="h-3 w-3 sm:h-4 sm:w-4" />}
                <span className="hidden xs:inline sm:inline">
                  {viewMode === 'all' ? 'Single' : 'All'}
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>      {/* Controls */}
      <div className="relative z-10 backdrop-blur-md bg-white/5 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 sm:py-3 gap-2 sm:gap-0">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              {viewMode === 'single' && (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={goToPrevPage}
                    disabled={pageNumber <= 1}
                    className="h-8 w-8 p-0 sm:h-9 sm:w-auto sm:px-3 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-md"
                  >
                    <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                  <span className="text-xs sm:text-sm text-white px-2 py-1 bg-white/10 backdrop-blur-md rounded border border-white/20">
                    {pageNumber}/{numPages}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={goToNextPage}
                    disabled={pageNumber >= numPages}
                    className="h-8 w-8 p-0 sm:h-9 sm:w-auto sm:px-3 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-md"
                  >
                    <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </>
              )}
              {viewMode === 'all' && (
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm text-white">
                    All {numPages} pages
                  </span>
                  <select
                    value={pageNumber}
                    onChange={(e) => scrollToPage(Number(e.target.value))}
                    className="text-xs sm:text-sm bg-white/10 backdrop-blur-md border border-white/20 rounded px-2 py-1 h-8 sm:h-9 text-white"
                  >
                    {Array.from({ length: numPages }, (_, i) => i + 1).map((page) => (
                      <option key={page} value={page} className="text-gray-900">
                        Page {page}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
            <div className="flex items-center gap-2 justify-center sm:justify-end">
              <Button
                variant="outline"
                size="sm"
                onClick={zoomOut}
                disabled={scale <= 0.5}
                className="h-8 w-8 p-0 sm:h-9 sm:w-auto sm:px-3 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-md"
              >
                <ZoomOut className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
              <span className="text-xs sm:text-sm text-white min-w-[45px] sm:min-w-[60px] text-center px-2 py-1 bg-white/10 backdrop-blur-md rounded border border-white/20">
                {Math.round(scale * 100)}%
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={zoomIn}
                disabled={scale >= 3.0}
                className="h-8 w-8 p-0 sm:h-9 sm:w-auto sm:px-3 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-md"
              >
                <ZoomIn className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>      {/* PDF Viewer */}
      <div className="relative z-10 flex-1 flex justify-center py-4 sm:py-8">
        <div className="max-w-4xl w-full px-2 sm:px-4">
          {loading && (
            <div className="flex items-center justify-center h-64 sm:h-96">
              <div className="text-center backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-8">
                <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-white/50 mx-auto mb-4"></div>
                <p className="text-sm sm:text-base text-white">Loading PDF...</p>
              </div>
            </div>
          )}
          
          <div className="flex justify-center">
            <Document
              file={getPDFUrl(document.filename)}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={null}
              className="w-full"
            >              {viewMode === 'single' ? (
                <div className="w-full flex justify-center items-center">
                  <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-4 shadow-2xl">
                    <div className="flex justify-center items-center">
                      <Page
                        pageNumber={pageNumber}
                        scale={scale}
                        className="max-w-full rounded-lg overflow-hidden"
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        width={isMobile ? Math.min(window.innerWidth - 64, 800) : undefined}
                      />
                    </div>
                  </div>
                </div>) : (
                <div className="space-y-6 w-full">
                  {Array.from({ length: numPages }, (_, i) => i + 1).map((page) => (
                    <div key={page} id={`page-${page}`} className="relative w-full flex justify-center items-center">
                      <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-4 shadow-2xl max-w-4xl w-full">
                        <div className="absolute -top-2 left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium z-10">
                          Page {page}
                        </div>
                        <div className="flex justify-center items-center mt-2">
                          <Page
                            pageNumber={page}
                            scale={scale}
                            className="max-w-full rounded-lg overflow-hidden"
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                            width={isMobile ? Math.min(window.innerWidth - 64, 800) : undefined}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Document>
          </div>
        </div>
      </div>
    </div>
  );
}
