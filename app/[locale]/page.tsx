"use client";

import { Button } from "@/components/shadcn/button";
import QRCodeGenerator from "@/components/QRCodeGenerator";
import Tooltip from "@/components/Tooltip";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { pdfDocuments } from "@/lib/pdf-config";
import { useTranslations } from "next-intl";
import { Header } from "@/components/layout/Header";

export default function Page() {
  const t = useTranslations();

  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          {t("hero.title")}
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          {t("hero.subtitle")}
        </p>
        <div className="flex justify-center gap-4">
          <Tooltip content={t("tooltips.shopComingSoon")} disabled>
            <Button
              size="lg"
              disabled
              className="bg-blue-400/50 backdrop-blur-md border border-blue-300/30 text-white cursor-not-allowed disabled:opacity-75 disabled:transform-none disabled:shadow-none relative overflow-hidden group"
            >
              <span className="relative z-10">{t("hero.shopNow")}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Button>
          </Tooltip>
          <Tooltip content={t("tooltips.learnMoreComingSoon")} disabled>
            <Button
              variant="outline"
              size="lg"
              disabled
              className="border-gray-400/50 text-gray-600 cursor-not-allowed backdrop-blur-md disabled:opacity-75 disabled:transform-none disabled:shadow-none !bg-white/30 relative overflow-hidden group"
            >
              <span className="relative z-10">{t("hero.learnMore")}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Button>
          </Tooltip>
        </div>
      </div>

      <div className="backdrop-blur-md bg-white/70 border border-gray-200/50 rounded-2xl shadow-lg p-8 mb-12">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            {t("qrSection.title")}
          </h3>
          <p className="text-gray-600">{t("qrSection.subtitle")}</p>
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
            <svg
              className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors duration-300"
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
          <h4 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">
            {t("features.fastDelivery.title")}
          </h4>
          <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
            {t("features.fastDelivery.description")}
          </p>
        </div>

        <div className="backdrop-blur-md bg-white/60 border border-gray-200/50 rounded-xl p-6 text-center hover:bg-white/90 hover:border-gray-300/70 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-pointer group">
          <div className="w-12 h-12 bg-green-100 backdrop-blur-md rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:bg-green-200 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            <svg
              className="w-6 h-6 text-green-600 group-hover:text-green-700 transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">
            {t("features.qualityProducts.title")}
          </h4>
          <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
            {t("features.qualityProducts.description")}
          </p>
        </div>

        <div className="backdrop-blur-md bg-white/60 border border-gray-200/50 rounded-xl p-6 text-center hover:bg-white/90 hover:border-gray-300/70 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-pointer group">
          <div className="w-12 h-12 bg-purple-100 backdrop-blur-md rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:bg-purple-200 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            <svg
              className="w-6 h-6 text-purple-600 group-hover:text-purple-700 transition-colors duration-300"
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
          <h4 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">
            {t("features.support.title")}
          </h4>
          <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
            {t("features.support.description")}
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="backdrop-blur-md bg-gradient-to-r from-blue-100/60 to-purple-100/60 border border-gray-200/50 rounded-2xl shadow-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">
          {t("cta.title")}
        </h3>
        <p className="text-gray-600 mb-6">{t("cta.subtitle")}</p>
        <Tooltip content={t("tooltips.contactFormComingSoon")} disabled>
          <Button
            size="lg"
            disabled
            className="bg-blue-400/50 backdrop-blur-md border border-blue-300/30 text-white cursor-not-allowed disabled:opacity-75 disabled:transform-none disabled:shadow-none relative overflow-hidden group"
          >
            <span className="relative z-10">{t("cta.button")}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </Button>
        </Tooltip>
      </div>
    </>
  );
}
