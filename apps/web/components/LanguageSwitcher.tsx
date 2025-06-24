'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { routing } from '@/lib/i18n/routing';
import { Globe, Check } from 'lucide-react';
import { useState, useTransition } from 'react';

const localeNames = {
  en: 'English',
  fr: 'Français', 
  it: 'Italiano'
};

// Simple flag components using CSS
const FlagIcon = ({ locale, className = "" }: { locale: string, className?: string }) => {
  return (
    <div className={`w-6 h-4 rounded border border-gray-300/50 overflow-hidden shadow-sm transition-transform duration-200 ${className}`}>      {locale === 'en' && (
        <div className="w-full h-full relative bg-blue-800">
          {/* Union Jack - Corrected diagonal lines */}
          
          <div className="absolute inset-0">
            <svg width="100%" height="100%" viewBox="0 0 24 16" className="absolute inset-0">
              <rect width="24" height="16" fill="#012169"/>
              
              {/* White diagonals (St. Andrew) */}
              <path d="M0,0 L24,16 M24,0 L0,16" stroke="white" strokeWidth="2.5"/>
              
              {/* Red diagonals (St. Patrick) - extending to corners */}
              <path d="M0,0 L11,8" stroke="#C8102E" strokeWidth="1.2"/>
              <path d="M13,8 L24,16" stroke="#C8102E" strokeWidth="1.2"/>
              <path d="M24,0 L13,8" stroke="#C8102E" strokeWidth="1.2"/>
              <path d="M11,8 L0,16" stroke="#C8102E" strokeWidth="1.2"/>
              
              {/* White cross base */}
              <path d="M0,8 L24,8 M12,0 L12,16" stroke="white" strokeWidth="3"/>
              
              {/* Red cross (St. George) */}
              <path d="M0,8 L24,8 M12,0 L12,16" stroke="#C8102E" strokeWidth="1.8"/>
            </svg>
          </div>
        </div>
      )}
      {locale === 'fr' && (
        <div className="w-full h-full flex">
          <div className="w-1/3 bg-blue-600"></div>
          <div className="w-1/3 bg-white"></div>
          <div className="w-1/3 bg-red-500"></div>
        </div>
      )}
      {locale === 'it' && (
        <div className="w-full h-full flex">
          <div className="w-1/3 bg-green-600"></div>
          <div className="w-1/3 bg-white"></div>
          <div className="w-1/3 bg-red-500"></div>
        </div>
      )}
    </div>
  );
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const t = useTranslations();const switchLocale = (newLocale: string) => {
    console.log('switchLocale called with:', newLocale, 'current locale:', locale);
    
    setIsOpen(false);
    
    if (newLocale === locale) {
      console.log('Same locale, not switching');
      return;
    }

    // Direct navigation without transition for debugging
    const currentPath = window.location.pathname;
    let newPath = `/${newLocale}`;
    
    // If we're not on the root path, preserve the path structure
    if (currentPath !== '/' && !currentPath.startsWith(`/${locale}`)) {
      newPath = `/${newLocale}${currentPath}`;
    } else if (currentPath.startsWith(`/${locale}`)) {
      // Replace the locale part
      const pathAfterLocale = currentPath.substring(`/${locale}`.length);
      newPath = `/${newLocale}${pathAfterLocale}`;
    }
    
    console.log('Navigating from', currentPath, 'to', newPath);
    window.location.href = newPath;
  };

  return (
    <div className="relative z-50">      <button
        onClick={() => {
          console.log('Globe button clicked, isOpen:', isOpen);
          setIsOpen(!isOpen);
        }}
        disabled={isPending}
        title="Change language / Changer de langue / Cambia lingua"
        className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:text-gray-900 transition-all duration-200 backdrop-blur-md bg-white/60 border border-gray-200/50 rounded-lg hover:bg-white/80 hover:border-gray-300/60 disabled:opacity-50 hover:shadow-md"
      >        {isPending ? (
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-400"></div>
        ) : (
          <FlagIcon locale={locale} />
        )}
        <span className="hidden sm:inline font-medium">{localeNames[locale as keyof typeof localeNames]}</span>
        <span className="sm:hidden text-xs font-medium opacity-75">{locale.toUpperCase()}</span>
        <svg 
          className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}          <div className="absolute right-0 mt-2 py-1 w-48 backdrop-blur-md bg-white/95 border border-gray-200/50 rounded-lg shadow-2xl z-50">
            {/* Header */}            <div className="px-4 py-2 border-b border-gray-100/50">
              <div className="flex items-center gap-2 text-xs text-gray-500 font-medium uppercase tracking-wider">
                <Globe className="h-3 w-3" />
                <span>{t('common.chooseLanguage')}</span>
              </div>
            </div>            {routing.locales.map((loc) => (
              <button
                key={loc}
                onClick={() => {
                  console.log('Language button clicked:', loc);
                  switchLocale(loc);
                }}
                disabled={isPending}
                className={`w-full px-4 py-3 text-left text-sm hover:bg-gray-100/50 transition-all duration-200 flex items-center gap-3 disabled:opacity-50 group ${
                  loc === locale ? 'bg-blue-50/70 text-blue-900 font-medium' : 'text-gray-700 hover:text-gray-900'
                }`}
              >                <div className="flex-shrink-0">
                  <FlagIcon locale={loc} className="group-hover:scale-110" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium">{localeNames[loc as keyof typeof localeNames]}</div>
                  <div className="text-xs opacity-60 uppercase tracking-wide">{loc}</div>
                </div>
                {loc === locale && (
                  <div className="flex-shrink-0">
                    <Check className="w-4 h-4 text-blue-600" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
