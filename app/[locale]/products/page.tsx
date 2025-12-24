"use client";

import { useTranslations } from "next-intl";
import QRCodeSection from "@/components/QRCodeSection";
import Link from "next/link";

export default function CatalogsPage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#252525] to-[#2a2a2a] py-16">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#fe9927] rounded-full opacity-10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#fe9927] rounded-full opacity-5 blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {t("qrSection.title")}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t("qrSection.subtitle")}
          </p>
        </div>
      </div>

      {/* QR Code Section */}
      <div className="py-16">
        <QRCodeSection />
      </div>

      {/* Features Section */}
      <div className="bg-[#151515] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {t("features.fastDelivery.title")}
              </h3>
              <p className="text-gray-400">
                {t("features.fastDelivery.description")}
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {t("features.qualityProducts.title")}
              </h3>
              <p className="text-gray-400">
                {t("features.qualityProducts.description")}
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
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 1 0 0 19.5 9.75 9.75 0 0 0 0-19.5Z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {t("features.support.title")}
              </h3>
              <p className="text-gray-400">
                {t("features.support.description")}
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
          <Link href="/contact">
            <button className="bg-black text-white hover:bg-[#1c1c1c] font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
              {t("cta.button")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
