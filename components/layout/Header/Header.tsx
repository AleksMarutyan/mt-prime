"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import LanguageSwitcher from "../../LanguageSwitcher";
import Tooltip from "../../Tooltip";

export function Header() {
  const t = useTranslations();
  const pathname = usePathname();

  // Helper function to check if current page is active
  const isActive = (path: string) => {
    // Remove locale prefix for comparison
    const currentPath = pathname.replace(/^\/[a-z]{2}/, "") || "/";
    return (
      currentPath === path || (path !== "/" && currentPath.startsWith(path))
    );
  };

  // Active link styles
  const getLinkClassName = (path: string) => {
    const baseClass =
      "transition-all duration-300 relative px-3 py-2 rounded-lg";
    const inactiveClass = "text-gray-700 hover:text-gray-900 hover:bg-white/40";
    const activeClass = "text-blue-600 bg-blue-50 shadow-sm font-medium";

    return `${baseClass} ${isActive(path) ? activeClass : inactiveClass}`;
  };

  return (
    <header className="relative z-50">
      <div className="backdrop-blur-md bg-white/60 border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <img
                  alt="MT PRIME Logo"
                  src="/logo-clean.svg"
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <nav className="hidden md:flex items-center space-x-2">
                <Link href="/" className={getLinkClassName("/")}>
                  {t("navigation.home")}
                </Link>

                <Link
                  href="/products"
                  className={getLinkClassName("/products")}
                >
                  {t("navigation.products")}
                </Link>

                <Link href="/contact" className={getLinkClassName("/contact")}>
                  {t("navigation.contact")}
                </Link>

                <Tooltip content={t("tooltips.servicesComingSoon")}>
                  <button
                    disabled
                    className="text-gray-500 cursor-not-allowed transition-all duration-300 relative disabled:opacity-50 px-3 py-2 rounded-lg"
                  >
                    {t("navigation.services")}
                  </button>
                </Tooltip>

                <Tooltip content={t("tooltips.aboutComingSoon")}>
                  <button
                    disabled
                    className="text-gray-500 cursor-not-allowed transition-all duration-300 relative disabled:opacity-50 px-3 py-2 rounded-lg"
                  >
                    {t("navigation.about")}
                  </button>
                </Tooltip>
              </nav>

              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
