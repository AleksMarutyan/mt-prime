"use client";

import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("hero");

  return (
    <div className="relative bg-gradient-to-br from-[#1a1a1a] via-[#252525] to-[#2a2a2a] text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#fe9927] rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#fe9927] rounded-full opacity-5 blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {t("title")}
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
            {t("description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#fe9927] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#ff8800] transition-all duration-300 shadow-lg shadow-[#fe9927]/30 hover:shadow-[#fe9927]/50 flex items-center justify-center transform hover:scale-105">
              {t("getStarted")}
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
            <button className="border-2 border-[#fe9927] text-[#fe9927] px-8 py-3 rounded-lg font-semibold hover:bg-[#fe9927] hover:text-black transition-all duration-300 transform hover:scale-105">
              {t("learnMore")}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#fe9927] to-transparent"></div>
    </div>
  );
};

export default Hero;
