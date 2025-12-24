import Link from "next/link";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="text-white border-t bg-gradient-to-r from-[#fe9927] to-[#ff8800]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-transparent">
        {/* Company Name and Description */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#fe9927] mb-4">
            {t("companyName")}
          </h2>
          <p className="text-gray-400 max-w-md">{t("companyDescription")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-[#fe9927] transition-colors"
                >
                  {t("links.products")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#fe9927] transition-colors"
                >
                  {t("links.services")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#fe9927] transition-colors"
                >
                  {t("links.aboutUs")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-[#fe9927] transition-colors"
                >
                  {t("links.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              {t("contact")}
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="text-[#fe9927] mr-2">📧</span>
                <div>
                  <p>mtprime.fourniture@gmail.com</p>
                  <p>mtprimelogistique@gmail.com</p>
                </div>
              </li>
              <li className="flex items-center">
                <span className="text-[#fe9927] mr-2">📞</span>
                <div>
                  <p>+33 7 44 77 08 02</p>
                  <p>+33 7 66 99 02 05</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              {t("support")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#fe9927] transition-colors"
                >
                  {t("links.helpCenter")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#fe9927] transition-colors"
                >
                  {t("links.shippingInfo")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#fe9927] transition-colors"
                >
                  {t("links.returns")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#fe9927] transition-colors"
                >
                  {t("links.faq")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              {t("connect")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#fe9927] transition-colors"
                >
                  {t("links.facebook")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#fe9927] transition-colors"
                >
                  {t("links.twitter")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#fe9927] transition-colors"
                >
                  {t("links.instagram")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#fe9927] transition-colors"
                >
                  {t("links.linkedin")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Address Section */}
        <div className="bg-[#1a1a1a] rounded-lg p-6 mb-8 border border-[#2a2a2a]">
          <div className="flex items-start mb-4">
            <span className="text-[#fe9927] text-xl mr-3">📍</span>
            <div>
              <h4 className="font-semibold text-white mb-2">
                {t("companyAddress")}
              </h4>
              <p className="text-gray-400">{t("address")}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-[#0f0f0f] p-4 rounded-lg border border-[#2a2a2a]">
              <p className="text-sm text-[#fe9927] mb-1">VAT</p>
              <p className="text-white font-mono">FR82 980 891 345</p>
            </div>
            <div className="bg-[#0f0f0f] p-4 rounded-lg border border-[#2a2a2a]">
              <p className="text-sm text-[#fe9927] mb-1">SIREN</p>
              <p className="text-white font-mono">980 891 345</p>
            </div>
            <div className="bg-[#0f0f0f] p-4 rounded-lg border border-[#2a2a2a]">
              <p className="text-sm text-[#fe9927] mb-1">SIRET</p>
              <p className="text-white font-mono">980 891 345 00012</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#2a2a2a] pt-8 text-center">
          <p className="text-gray-400">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
