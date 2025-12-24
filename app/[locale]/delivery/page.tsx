import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function HomePage() {
  const t = await getTranslations("homepage");

  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#252525] to-[#2a2a2a]">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#fe9927] rounded-full opacity-10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#fe9927] rounded-full opacity-5 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {t("hero.title")}
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto text-gray-300">
              {t("hero.tagline")}
            </p>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-400">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#fe9927] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#ff8800] transition-all duration-300 shadow-lg shadow-[#fe9927]/30 hover:shadow-[#fe9927]/50 transform hover:scale-105">
                  {t("hero.getQuote")}
                </button>
              </Link>
              <Link href="/products">
                <button className="border-2 border-[#fe9927] text-[#fe9927] px-8 py-3 rounded-lg font-semibold hover:bg-[#fe9927] hover:text-black transition-all duration-300 transform hover:scale-105">
                  {t("hero.viewCatalogs")}
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#fe9927] to-transparent"></div>
      </div>

      {/* Main Services Section - 4 Core Activities */}
      <div className="py-16 lg:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {t("services.title")}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t("services.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 1. Transport Routier */}
            <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#2a2a2a] hover:border-[#fe9927] transition-all duration-300 group text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#fe9927] to-[#ff8800] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#fe9927]/30 group-hover:shadow-[#fe9927]/50 transition-all transform group-hover:scale-110">
                <svg
                  className="w-10 h-10 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#fe9927] transition-colors">
                {t("services.roadTransport.title")}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {t("services.roadTransport.description")}
              </p>
              <ul className="text-left space-y-2 text-sm text-gray-400">
                <li className="flex items-start">
                  <span className="text-[#fe9927] mr-2 flex-shrink-0">•</span>
                  <span>{t("services.roadTransport.feature1")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fe9927] mr-2 flex-shrink-0">•</span>
                  <span>{t("services.roadTransport.feature2")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fe9927] mr-2 flex-shrink-0">•</span>
                  <span>{t("services.roadTransport.feature3")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fe9927] mr-2 flex-shrink-0">•</span>
                  <span>{t("services.roadTransport.feature4")}</span>
                </li>
              </ul>
            </div>

            {/* 2. Import-Export */}
            <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#2a2a2a] hover:border-[#fe9927] transition-all duration-300 group text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#fe9927] to-[#ff8800] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#fe9927]/30 group-hover:shadow-[#fe9927]/50 transition-all transform group-hover:scale-110">
                <svg
                  className="w-10 h-10 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#fe9927] transition-colors">
                {t("services.importExport.title")}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {t("services.importExport.description")}
              </p>
              <ul className="text-left space-y-2 text-sm text-gray-400">
                <li className="flex items-start">
                  <span className="text-[#fe9927] mr-2 flex-shrink-0">•</span>
                  <span>{t("services.importExport.feature1")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fe9927] mr-2 flex-shrink-0">•</span>
                  <span>{t("services.importExport.feature2")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fe9927] mr-2 flex-shrink-0">•</span>
                  <span>{t("services.importExport.feature3")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fe9927] mr-2 flex-shrink-0">•</span>
                  <span>{t("services.importExport.feature4")}</span>
                </li>
              </ul>
            </div>

            {/* 3. Logistique & Supervision */}
            <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#2a2a2a] hover:border-[#fe9927] transition-all duration-300 group text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#fe9927] to-[#ff8800] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#fe9927]/30 group-hover:shadow-[#fe9927]/50 transition-all transform group-hover:scale-110">
                <svg
                  className="w-10 h-10 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#fe9927] transition-colors">
                {t("services.logistics.title")}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {t("services.logistics.description")}
              </p>
              <ul className="text-left space-y-2 text-sm text-gray-400">
                <li className="flex items-start">
                  <span className="text-[#fe9927] mr-2 flex-shrink-0">•</span>
                  <span>{t("services.logistics.feature1")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fe9927] mr-2 flex-shrink-0">•</span>
                  <span>{t("services.logistics.feature2")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fe9927] mr-2 flex-shrink-0">•</span>
                  <span>{t("services.logistics.feature3")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fe9927] mr-2 flex-shrink-0">•</span>
                  <span>{t("services.logistics.feature4")}</span>
                </li>
              </ul>
            </div>

            {/* 4. Achat Vente Véhicules */}
            <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#2a2a2a] hover:border-[#fe9927] transition-all duration-300 group text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#fe9927] to-[#ff8800] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#fe9927]/30 group-hover:shadow-[#fe9927]/50 transition-all transform group-hover:scale-110">
                <svg
                  className="w-10 h-10 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#fe9927] transition-colors">
                {t("services.vehicles.title")}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {t("services.vehicles.description")}
              </p>
              <ul className="text-left space-y-2 text-sm text-gray-400">
                <li className="flex items-start">
                  <span className="text-[#fe9927] mr-2 flex-shrink-0">•</span>
                  <span>{t("services.vehicles.feature1")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fe9927] mr-2 flex-shrink-0">•</span>
                  <span>{t("services.vehicles.feature2")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fe9927] mr-2 flex-shrink-0">•</span>
                  <span>{t("services.vehicles.feature3")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fe9927] mr-2 flex-shrink-0">•</span>
                  <span>{t("services.vehicles.feature4")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-[#151515] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {t("whyChooseUs.title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#fe9927] to-[#ff8800] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#fe9927]/30 group-hover:shadow-[#fe9927]/50 transition-all transform group-hover:scale-110">
                <svg
                  className="w-10 h-10 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {t("whyChooseUs.authorized.title")}
              </h3>
              <p className="text-gray-400">
                {t("whyChooseUs.authorized.description")}
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#fe9927] to-[#ff8800] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#fe9927]/30 group-hover:shadow-[#fe9927]/50 transition-all transform group-hover:scale-110">
                <svg
                  className="w-10 h-10 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {t("whyChooseUs.reliable.title")}
              </h3>
              <p className="text-gray-400">
                {t("whyChooseUs.reliable.description")}
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#fe9927] to-[#ff8800] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#fe9927]/30 group-hover:shadow-[#fe9927]/50 transition-all transform group-hover:scale-110">
                <svg
                  className="w-10 h-10 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {t("whyChooseUs.experienced.title")}
              </h3>
              <p className="text-gray-400">
                {t("whyChooseUs.experienced.description")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#fe9927] to-[#ff8800] py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-xl text-black/80 mb-8">{t("cta.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-black text-white hover:bg-[#1c1c1c] font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                {t("cta.getQuote")}
              </button>
            </Link>
            <Link href="/products">
              <button className="border-2 border-black text-black hover:bg-black hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                {t("cta.viewCatalogs")}
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Company Info Footer */}
      <div className="bg-[#0f0f0f] py-12 border-t border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p className="mb-2">
              <strong className="text-white">
                {t("companyInfo.legalName")}
              </strong>
            </p>
            <p className="text-sm">{t("companyInfo.address")}</p>
            <p className="text-sm">{t("companyInfo.registration")}</p>
            <p className="text-sm mt-2">{t("companyInfo.authorization")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
