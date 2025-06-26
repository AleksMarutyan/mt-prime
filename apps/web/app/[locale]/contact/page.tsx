"use client"

import { useTranslations } from 'next-intl';
import InteractiveMap from '@/components/InteractiveMap';

export default function ContactPage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('contact.getInTouch')}
            </p>
          </div>

          {/* Contact Information */}
          <div className="backdrop-blur-md bg-white/70 border border-gray-200/50 rounded-2xl shadow-lg p-8">
            {/* Email Section */}
            <div className="mb-8">
              <div className="space-y-3">
                <div className="backdrop-blur-md bg-white/50 border border-gray-200/60 rounded-lg p-4 hover:bg-white/70 transition-colors">
                  <p className="text-sm text-gray-600 mb-1">Furniture</p>
                  <a 
                    href="mailto:mtprime.fourniture@gmail.com" 
                    className="text-blue-600 hover:text-blue-700 font-medium transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    mtprime.fourniture@gmail.com
                  </a>
                </div>
                <div className="backdrop-blur-md bg-white/50 border border-gray-200/60 rounded-lg p-4 hover:bg-white/70 transition-colors">
                  <p className="text-sm text-gray-600 mb-1">Logistics</p>
                  <a 
                    href="mailto:mtprimelogistique@gmail.com" 
                    className="text-blue-600 hover:text-blue-700 font-medium transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    mtprimelogistique@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Section */}
            <div className="mb-8">
              <div className="space-y-3">
                <div className="backdrop-blur-md bg-white/50 border border-gray-200/60 rounded-lg p-4 hover:bg-white/70 transition-colors">
                  <p className="text-sm text-gray-600 mb-1">Primary</p>
                  <a 
                    href="tel:+33744770802" 
                    className="text-green-600 hover:text-green-700 font-medium transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +33 7 44 77 08 02
                  </a>
                </div>
                <div className="backdrop-blur-md bg-white/50 border border-gray-200/60 rounded-lg p-4 hover:bg-white/70 transition-colors">
                  <p className="text-sm text-gray-600 mb-1">Secondary</p>
                  <a 
                    href="tel:+33766990205" 
                    className="text-green-600 hover:text-green-700 font-medium transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +33 7 66 99 02 05
                  </a>
                </div>
              </div>
            </div>

            {/* Location Section with Interactive Map */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-700 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Location
              </h3>
              
              {/* Interactive Map Component */}
              <InteractiveMap 
                address={t('footer.address')}
                className="w-full"
              />
            </div>

            {/* Quick Contact CTA */}
            <div className="backdrop-blur-md bg-gradient-to-r from-blue-50/50 to-purple-50/50 border border-blue-200/30 rounded-lg p-6 text-center">
              <h4 className="text-lg font-semibold mb-3 text-gray-800">Ready to Work Together?</h4>
              <p className="text-gray-600 mb-4 text-sm">
                Contact us today to discuss your logistics and supply needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a 
                  href="mailto:mtprime.fourniture@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Email
                </a>
                <a 
                  href="tel:+33744770802"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
