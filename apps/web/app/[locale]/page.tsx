"use client"

import { Button } from "@workspace/ui/components/button"
import QRCodeGenerator from "@/components/QRCodeGenerator"
import Tooltip from "@/components/Tooltip"
import LanguageSwitcher from "@/components/LanguageSwitcher"
import { pdfDocuments } from "@/lib/pdf-config"
import { useTranslations } from 'next-intl'

export default function Page() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-purple-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>      {/* Header */}
      <header className="relative z-50">
        <div className="backdrop-blur-md bg-white/60 border-b border-gray-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">              <div className="flex items-center gap-3">
                <img 
                  src="/logo-clean.svg" 
                  alt="MT PRIME Logo" 
                  className="h-10 w-auto"
                />
              </div>
              <div className="flex items-center gap-4">
                <nav className="hidden md:flex space-x-8">
                  <Tooltip content={t('tooltips.productsComingSoon')} disabled>
                    <button 
                      disabled
                      className="text-gray-500 cursor-not-allowed transition-all duration-300 relative disabled:opacity-70"
                    >
                      {t('navigation.products')}
                    </button>
                  </Tooltip>
                  <Tooltip content={t('tooltips.servicesComingSoon')} disabled>
                    <button 
                      disabled
                      className="text-gray-500 cursor-not-allowed transition-all duration-300 relative disabled:opacity-70"
                    >
                      {t('navigation.services')}
                    </button>
                  </Tooltip>
                  <Tooltip content={t('tooltips.aboutComingSoon')} disabled>
                    <button 
                      disabled
                      className="text-gray-500 cursor-not-allowed transition-all duration-300 relative disabled:opacity-70"
                    >
                      {t('navigation.about')}
                    </button>
                  </Tooltip>
                  <a 
                    href="/contact"
                    className="text-gray-700 hover:text-gray-900 transition-all duration-300 relative"
                  >
                    {t('navigation.contact')}
                  </a>
                </nav>
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {t('hero.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <div className="flex justify-center gap-4">
            <Tooltip content={t('tooltips.shopComingSoon')} disabled>
              <Button 
                size="lg" 
                disabled
                className="bg-blue-400/50 backdrop-blur-md border border-blue-300/30 text-white cursor-not-allowed disabled:opacity-75 disabled:transform-none disabled:shadow-none relative overflow-hidden group"
              >
                <span className="relative z-10">{t('hero.shopNow')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Button>
            </Tooltip>
            <Tooltip content={t('tooltips.learnMoreComingSoon')} disabled>
              <Button 
                variant="outline" 
                size="lg"
                disabled
                className="border-gray-400/50 text-gray-600 cursor-not-allowed backdrop-blur-md disabled:opacity-75 disabled:transform-none disabled:shadow-none !bg-white/30 relative overflow-hidden group"
              >
                <span className="relative z-10">{t('hero.learnMore')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Button>
            </Tooltip>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-200/50 rounded-2xl shadow-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {t('qrSection.title')}
            </h3>
            <p className="text-gray-600">
              {t('qrSection.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pdfDocuments.map((doc) => (
              <QRCodeGenerator
                key={doc.id}
                documentId={doc.id}
                title={doc.title}
                description={doc.description}
              />
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="backdrop-blur-md bg-white/60 border border-gray-200/50 rounded-xl p-6 text-center hover:bg-white/90 hover:border-gray-300/70 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-pointer group">
            <div className="w-12 h-12 bg-blue-100 backdrop-blur-md rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-200 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <svg className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">{t('features.fastDelivery.title')}</h4>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{t('features.fastDelivery.description')}</p>
          </div>

          <div className="backdrop-blur-md bg-white/60 border border-gray-200/50 rounded-xl p-6 text-center hover:bg-white/90 hover:border-gray-300/70 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-pointer group">
            <div className="w-12 h-12 bg-green-100 backdrop-blur-md rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:bg-green-200 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <svg className="w-6 h-6 text-green-600 group-hover:text-green-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">{t('features.qualityProducts.title')}</h4>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{t('features.qualityProducts.description')}</p>
          </div>

          <div className="backdrop-blur-md bg-white/60 border border-gray-200/50 rounded-xl p-6 text-center hover:bg-white/90 hover:border-gray-300/70 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-pointer group">
            <div className="w-12 h-12 bg-purple-100 backdrop-blur-md rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:bg-purple-200 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <svg className="w-6 h-6 text-purple-600 group-hover:text-purple-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 1 0 0 19.5 9.75 9.75 0 0 0 0-19.5Z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">{t('features.support.title')}</h4>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{t('features.support.description')}</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="backdrop-blur-md bg-gradient-to-r from-blue-100/60 to-purple-100/60 border border-gray-200/50 rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">{t('cta.title')}</h3>
          <p className="text-gray-600 mb-6">
            {t('cta.subtitle')}
          </p>
          <Tooltip content={t('tooltips.contactFormComingSoon')} disabled>
            <Button 
              size="lg" 
              disabled
              className="bg-blue-400/50 backdrop-blur-md border border-blue-300/30 text-white cursor-not-allowed disabled:opacity-75 disabled:transform-none disabled:shadow-none relative overflow-hidden group"
            >
              <span className="relative z-10">{t('cta.button')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Button>
          </Tooltip>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 backdrop-blur-md bg-gray-100/60 border-t border-gray-200/50 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Main Footer Links */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h5 className="text-lg font-semibold mb-4 text-gray-800">{t('footer.companyName')}</h5>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('footer.companyDescription')}
              </p>
            </div>
            <div>
              <h6 className="font-semibold mb-4 text-gray-800">{t('footer.quickLinks')}</h6>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Tooltip content={t('tooltips.productsPageComingSoon')} disabled>
                    <button disabled className="text-gray-500 cursor-not-allowed disabled:opacity-70 hover:text-gray-600 transition-colors">
                      {t('footer.links.products')}
                    </button>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip content={t('tooltips.servicesPageComingSoon')} disabled>
                    <button disabled className="text-gray-500 cursor-not-allowed disabled:opacity-70 hover:text-gray-600 transition-colors">
                      {t('footer.links.services')}
                    </button>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip content={t('tooltips.aboutPageComingSoon')} disabled>
                    <button disabled className="text-gray-500 cursor-not-allowed disabled:opacity-70 hover:text-gray-600 transition-colors">
                      {t('footer.links.aboutUs')}
                    </button>
                  </Tooltip>
                </li>
                <li>
                  <a href="/contact" className="text-gray-700 hover:text-gray-900 transition-colors">
                    {t('footer.links.contact')}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4 text-gray-800">{t('footer.contact')}</h6>
              <div className="space-y-3">
                {/* Email Section */}
                <div>
                  <div className="space-y-1">
                    <a href="mailto:mtprime.fourniture@gmail.com" className="text-gray-700 hover:text-gray-900 text-sm transition-colors flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      mtprime.fourniture@gmail.com
                    </a>
                    <a href="mailto:mtprimelogistique@gmail.com" className="text-gray-700 hover:text-gray-900 text-sm transition-colors flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      mtprimelogistique@gmail.com
                    </a>
                  </div>
                </div>
                
                {/* Phone Section */}
                <div>
                  <div className="space-y-1">
                    <a href="tel:+33744770802" className="text-gray-700 hover:text-gray-900 text-sm transition-colors flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      +33 7 44 77 08 02
                    </a>
                    <a href="tel:+33766990205" className="text-gray-700 hover:text-gray-900 text-sm transition-colors flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      +33 7 66 99 02 05
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h6 className="font-semibold mb-4 text-gray-800">{t('footer.connect')}</h6>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Tooltip content={t('tooltips.facebookComingSoon')} disabled>
                    <button disabled className="text-gray-700 hover:text-gray-900 cursor-not-allowed disabled:opacity-70 transition-colors flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      {t('footer.links.facebook')}
                    </button>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip content={t('tooltips.twitterComingSoon')} disabled>
                    <button disabled className="text-gray-700 hover:text-gray-900 cursor-not-allowed disabled:opacity-70 transition-colors flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                      {t('footer.links.twitter')}
                    </button>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip content={t('tooltips.instagramComingSoon')} disabled>
                    <button disabled className="text-gray-700 hover:text-gray-900 cursor-not-allowed disabled:opacity-70 transition-colors flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.291C3.85 14.437 3.185 12.78 3.185 11.016c0-1.297.49-2.448 1.291-3.323.801-.875 1.97-1.54 3.734-1.54 1.297 0 2.448.49 3.323 1.291.801.875 1.54 2.026 1.54 3.572 0 1.297-.49 2.448-1.291 3.323-.875.801-2.026 1.649-3.333 1.649zm7.83-1.604a5.9 5.9 0 01-1.663.664c-.875.219-1.75.328-2.625.328-1.297 0-2.448-.49-3.323-1.291C7.367 14.21 6.702 12.553 6.702 10.789c0-1.297.49-2.448 1.291-3.323.875-.801 2.026-1.54 3.734-1.54 1.297 0 2.448.49 3.323 1.291.801.875 1.54 2.026 1.54 3.572 0 .875-.109 1.75-.328 2.625a5.9 5.9 0 01-.883 1.97z"/>
                        <circle cx="12.012" cy="12.012" r="3.578"/>
                        <circle cx="16.9" cy="7.9" r="1.4"/>
                      </svg>
                      {t('footer.links.instagram')}
                    </button>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip content={t('tooltips.linkedinComingSoon')} disabled>
                    <button disabled className="text-gray-700 hover:text-gray-900 cursor-not-allowed disabled:opacity-70 transition-colors flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      {t('footer.links.linkedin')}
                    </button>
                  </Tooltip>
                </li>
              </ul>
              
              {/* Newsletter signup placeholder */}
              <div className="mt-6 p-3 backdrop-blur-md bg-white/50 border border-gray-300/50 rounded-lg">
                <h6 className="font-semibold mb-2 text-gray-800 text-sm">Stay Updated</h6>
                <p className="text-xs text-gray-600 mb-3">Get notified when we launch new features!</p>
                <Tooltip content="📧 Newsletter signup coming soon!" disabled>
                  <button 
                    disabled 
                    className="w-full text-xs py-2 px-3 bg-gray-100/50 text-gray-500 rounded border border-gray-300/50 cursor-not-allowed disabled:opacity-70"
                  >
                    Subscribe to Newsletter
                  </button>
                </Tooltip>
              </div>
            </div>
          </div>
          
          {/* Company Details Section - Bottom Row */}
          <div className="border-t border-gray-200/50 pt-6">
            <div className="backdrop-blur-md bg-white/40 border border-gray-200/60 rounded-lg p-6">
              <div className="flex items-start gap-4 mb-6">
                <svg className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">{t('footer.companyAddress')}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{t('footer.address')}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Tooltip content={t('tooltips.vatTooltip')} disabled>
                  <div className="flex items-center gap-3 p-3 rounded bg-white/50 hover:bg-white/70 transition-colors cursor-help">
                    <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <p className="text-xs font-medium text-gray-600 uppercase tracking-wide mb-1">VAT</p>
                      <p className="text-xs text-gray-800 font-mono">FR82 980 891 345</p>
                    </div>
                  </div>
                </Tooltip>
                
                <Tooltip content={t('tooltips.sirenTooltip')} disabled>
                  <div className="flex items-center gap-3 p-3 rounded bg-white/50 hover:bg-white/70 transition-colors cursor-help">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <div>
                      <p className="text-xs font-medium text-gray-600 uppercase tracking-wide mb-1">SIREN</p>
                      <p className="text-xs text-gray-800 font-mono">980 891 345</p>
                    </div>
                  </div>
                </Tooltip>
                
                <Tooltip content={t('tooltips.siretTooltip')} disabled>
                  <div className="flex items-center gap-3 p-3 rounded bg-white/50 hover:bg-white/70 transition-colors cursor-help">
                    <svg className="w-4 h-4 text-purple-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                    <div>
                      <p className="text-xs font-medium text-gray-600 uppercase tracking-wide mb-1">SIRET</p>
                      <p className="text-xs text-gray-800 font-mono">980 891 345 00012</p>
                    </div>
                  </div>
                </Tooltip>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200/50 mt-8 pt-6 text-center text-sm text-gray-600">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
