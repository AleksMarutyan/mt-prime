"use client";

import Tooltip from "@/components/Tooltip";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  // Helper function to get localized link
  const getLocalizedPath = (path: string) => {
    return `/${locale}${path}`;
  };

  return (
    <footer className="relative z-10 bg-[#0f0f0f] border-t border-[#2a2a2a] mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Footer Links */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h5 className="text-lg font-semibold mb-4 text-white">
              {t("footer.companyName")}
            </h5>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t("footer.companyDescription")}
            </p>
          </div>
          <div>
            <h6 className="font-semibold mb-4 text-white">
              {t("footer.quickLinks")}
            </h6>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={getLocalizedPath("/delivery")}
                  className="text-gray-300 hover:text-[#fe9927] transition-colors"
                >
                  {t("navigation.delivery")}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedPath("/shop")}
                  className="text-gray-300 hover:text-[#fe9927] transition-colors"
                >
                  {t("navigation.shop")}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedPath("/products")}
                  className="text-gray-300 hover:text-[#fe9927] transition-colors"
                >
                  {t("navigation.catalogs")}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedPath("/contact")}
                  className="text-gray-300 hover:text-[#fe9927] transition-colors"
                >
                  {t("footer.links.contact")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold mb-4 text-white">
              {t("footer.contact")}
            </h6>
            <div className="space-y-3">
              {/* Email Section */}
              <div>
                <div className="space-y-1">
                  <a
                    href="mailto:mtprime.fourniture@gmail.com"
                    className="text-gray-300 hover:text-[#fe9927] text-sm transition-colors flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    mtprime.fourniture@gmail.com
                  </a>
                  <a
                    href="mailto:mtprimelogistique@gmail.com"
                    className="text-gray-300 hover:text-[#fe9927] text-sm transition-colors flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    mtprimelogistique@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone Section */}
              <div>
                <div className="space-y-1">
                  <a
                    href="tel:+33744770802"
                    className="text-gray-300 hover:text-[#fe9927] text-sm transition-colors flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    +33 7 44 77 08 02
                  </a>
                  <a
                    href="tel:+33766990205"
                    className="text-gray-300 hover:text-[#fe9927] text-sm transition-colors flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    +33 7 66 99 02 05
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h6 className="font-semibold mb-4 text-white">
              {t("footer.connect")}
            </h6>
            <ul className="space-y-2 text-sm">
              <li>
                <Tooltip content={t("tooltips.facebookComingSoon")} disabled>
                  <button
                    disabled
                    className="text-gray-400 hover:text-[#fe9927] cursor-not-allowed disabled:opacity-70 transition-colors flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    {t("footer.links.facebook")}
                  </button>
                </Tooltip>
              </li>
              <li>
                <Tooltip content={t("tooltips.twitterComingSoon")} disabled>
                  <button
                    disabled
                    className="text-gray-400 hover:text-[#fe9927] cursor-not-allowed disabled:opacity-70 transition-colors flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                    {t("footer.links.twitter")}
                  </button>
                </Tooltip>
              </li>
              <li>
                <Tooltip content={t("tooltips.instagramComingSoon")} disabled>
                  <button
                    disabled
                    className="text-gray-400 hover:text-[#fe9927] cursor-not-allowed disabled:opacity-70 transition-colors flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.291C3.85 14.437 3.185 12.78 3.185 11.016c0-1.297.49-2.448 1.291-3.323.801-.875 1.97-1.54 3.734-1.54 1.297 0 2.448.49 3.323 1.291.801.875 1.54 2.026 1.54 3.572 0 1.297-.49 2.448-1.291 3.323-.875.801-2.026 1.649-3.333 1.649zm7.83-1.604a5.9 5.9 0 01-1.663.664c-.875.219-1.75.328-2.625.328-1.297 0-2.448-.49-3.323-1.291C7.367 14.21 6.702 12.553 6.702 10.789c0-1.297.49-2.448 1.291-3.323.875-.801 2.026-1.54 3.734-1.54 1.297 0 2.448.49 3.323 1.291.801.875 1.54 2.026 1.54 3.572 0 .875-.109 1.75-.328 2.625a5.9 5.9 0 01-.883 1.97z" />
                      <circle cx="12.012" cy="12.012" r="3.578" />
                      <circle cx="16.9" cy="7.9" r="1.4" />
                    </svg>
                    {t("footer.links.instagram")}
                  </button>
                </Tooltip>
              </li>
              <li>
                <Tooltip content={t("tooltips.linkedinComingSoon")} disabled>
                  <button
                    disabled
                    className="text-gray-400 hover:text-[#fe9927] cursor-not-allowed disabled:opacity-70 transition-colors flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    {t("footer.links.linkedin")}
                  </button>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>

        {/* Company Details Section - Bottom Row */}
        <div className="border-t border-[#2a2a2a] pt-6">
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6">
            <div className="flex items-start gap-4 mb-6">
              <svg
                className="w-5 h-5 text-[#fe9927] mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div>
                <p className="text-sm font-medium text-white mb-1">
                  {t("footer.companyAddress")}
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {t("footer.address")}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Tooltip content={t("tooltips.vatTooltip")} disabled>
                <div className="flex items-center gap-3 p-3 rounded bg-[#252525] hover:bg-[#2a2a2a] transition-colors cursor-help border border-[#2a2a2a]">
                  <svg
                    className="w-4 h-4 text-blue-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <div>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1">
                      VAT
                    </p>
                    <p className="text-xs text-white font-mono">
                      FR82 980 891 345
                    </p>
                  </div>
                </div>
              </Tooltip>

              <Tooltip content={t("tooltips.sirenTooltip")} disabled>
                <div className="flex items-center gap-3 p-3 rounded bg-[#252525] hover:bg-[#2a2a2a] transition-colors cursor-help border border-[#2a2a2a]">
                  <svg
                    className="w-4 h-4 text-green-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <div>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1">
                      SIREN
                    </p>
                    <p className="text-xs text-white font-mono">980 891 345</p>
                  </div>
                </div>
              </Tooltip>

              <Tooltip content={t("tooltips.siretTooltip")} disabled>
                <div className="flex items-center gap-3 p-3 rounded bg-[#252525] hover:bg-[#2a2a2a] transition-colors cursor-help border border-[#2a2a2a]">
                  <svg
                    className="w-4 h-4 text-purple-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                  <div>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1">
                      SIRET
                    </p>
                    <p className="text-xs text-white font-mono">
                      980 891 345 00012
                    </p>
                  </div>
                </div>
              </Tooltip>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2a2a2a] mt-8 pt-6 text-center text-sm text-gray-400">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
