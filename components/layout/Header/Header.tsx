"use client";

import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import LanguageSwitcher from "../../LanguageSwitcher";
import Tooltip from "../../Tooltip";

export function Header() {
  const t = useTranslations();
  const pathname = usePathname();
  const locale = useLocale();

  // Helper function to check if current page is active
  const isActive = (path: string) => {
    // Remove locale prefix for comparison
    const currentPath = pathname.replace(/^\/[a-z]{2}/, "") || "/";
    return (
      currentPath === path || (path !== "/" && currentPath.startsWith(path))
    );
  };

  // Helper function to get localized link
  const getLocalizedPath = (path: string) => {
    return `/${locale}${path}`;
  };

  // Active link styles
  const getLinkClassName = (path: string) => {
    const baseClass =
      "transition-all duration-300 relative px-4 py-2 rounded-lg font-medium";
    const inactiveClass =
      "text-gray-300 hover:text-[#fe9927] hover:bg-[#101119]";
    const activeClass =
      "text-[#fe9927] bg-[#101119] shadow-lg shadow-[#fe9927]/20";

    return `${baseClass} ${isActive(path) ? activeClass : inactiveClass}`;
  };

  return (
    <header className="relative z-50 bg-[#1a1a1a] border-b border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <Link
              href={getLocalizedPath("/")}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <img
                alt="MT PRIME Logo"
                src="/logo-clean.svg"
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center space-x-1">
              <Link
                href={getLocalizedPath("/delivery")}
                className={getLinkClassName("/delivery")}
              >
                {t("navigation.delivery")}
              </Link>

              <Link
                href={getLocalizedPath("/shop")}
                className={getLinkClassName("/shop")}
              >
                {t("navigation.shop")}
              </Link>

              <Link
                href={getLocalizedPath("/products")}
                className={getLinkClassName("/products")}
              >
                {t("navigation.catalogs")}
              </Link>

              <Link
                href={getLocalizedPath("/contact")}
                className={getLinkClassName("/contact")}
              >
                {t("navigation.contact")}
              </Link>
            </nav>

            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
