'use client';

import { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import { getQRCodeUrl } from '@/lib/pdf-config';
import { FileText } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

interface QRCodeGeneratorProps {
  documentId: string;
  title: string;
  description?: string;
}

export default function QRCodeGenerator({ documentId, title, description }: QRCodeGeneratorProps) {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const t = useTranslations();
  const locale = useLocale();  useEffect(() => {
    const generateQR = async () => {
      try {
        const url = getQRCodeUrl(documentId, locale);
        console.log('Generated QR URL:', url); // Debug log
        
        const qrDataUrl = await QRCode.toDataURL(url, {
          width: 256, // Larger size for better scanning
          margin: 4,  // More margin for better recognition
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          },
          errorCorrectionLevel: 'M', // Medium error correction
          type: 'image/png'
        });
        setQrCodeUrl(qrDataUrl);
        setLoading(false);
      } catch (error) {
        console.error('Error generating QR code:', error);
        setLoading(false);
      }
    };

    generateQR();
  }, [documentId, locale]);return (
    <div className="backdrop-blur-md bg-white/60 border border-gray-200/50 rounded-xl p-6 text-center hover:bg-white/80 transition-all duration-300 shadow-lg">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-gray-600 mb-4">{description}</p>
      )}
        {loading ? (
        <div className="flex items-center justify-center h-48">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-400"></div>
        </div>
      ) : (
        <div className="space-y-4">          <div className="flex justify-center">
            <a 
              href={getQRCodeUrl(documentId, locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:scale-105 transition-all duration-300 transform hover:rotate-1 hover:shadow-xl"
              title={`Click to open ${title} or scan with your phone`}
            >
              <div className="p-4 bg-white rounded-xl shadow-lg hover:shadow-2xl hover:bg-gray-50 transition-all duration-300 border border-gray-100 hover:border-gray-200">
                <img 
                  src={qrCodeUrl} 
                  alt={`QR Code for ${title}`} 
                  className="w-full h-auto transition-all duration-300 hover:contrast-110"
                />
              </div>
            </a>
          </div>
            <div className="space-y-3">
            <p className="text-xs text-gray-700 font-medium">
              {t('qrCard.howToScan')}
            </p>
            <div className="text-xs text-gray-600 space-y-1">
              <p>{t('qrCard.step1')}</p>
              <p>{t('qrCard.step2')}</p>
              <p>{t('qrCard.step3')}</p>
              <p>{t('qrCard.step4')}</p>
            </div>            <div className="pt-2 border-t border-gray-200/50">
              <a
                href={getQRCodeUrl(documentId, locale)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white/40 border-gray-300 text-gray-700 hover:bg-white/90 hover:text-gray-900 hover:border-gray-400 hover:shadow-md backdrop-blur-md transition-all duration-300 transform hover:scale-[1.02] group inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md border focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                <FileText className="h-3 w-3 transition-transform duration-300 group-hover:scale-110" />
                {t('qrCard.openDocument')}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
