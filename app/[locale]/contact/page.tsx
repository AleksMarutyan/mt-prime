import { getTranslations } from "next-intl/server";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default async function ContactPage() {
  const t = await getTranslations("contact");

  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#252525] to-[#2a2a2a] py-16">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#fe9927] rounded-full opacity-10 blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {t("title")}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t("getInTouch")}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Company Info Card */}
            <div className="bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#fe9927] rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-black" />
                </div>
                {t("companyInfo")}
              </h2>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    {t("companyAddress")}
                  </p>
                  <p className="text-white leading-relaxed">
                    143 Av. Francis Tonner
                    <br />
                    06150 Cannes La Bocca
                    <br />
                    France
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Methods Card */}
            <div className="bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#fe9927] rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-black" />
                </div>
                {t("getInTouch")}
              </h2>

              <div className="space-y-6">
                {/* Email 1 - Shop */}
                <a
                  href="mailto:mtprime.fourniture@gmail.com"
                  className="flex items-start gap-4 p-4 rounded-lg bg-[#0f0f0f] border border-[#2a2a2a] hover:border-[#fe9927] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-[#fe9927]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#fe9927] transition-colors">
                    <Mail className="w-6 h-6 text-[#fe9927] group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">
                      {t("emailShop")}
                    </p>
                    <p className="text-white font-medium group-hover:text-[#fe9927] transition-colors">
                      mtprime.fourniture@gmail.com
                    </p>
                  </div>
                </a>

                {/* Email 2 - Logistics */}
                <a
                  href="mailto:mtprimelogistique@gmail.com"
                  className="flex items-start gap-4 p-4 rounded-lg bg-[#0f0f0f] border border-[#2a2a2a] hover:border-[#fe9927] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-[#fe9927]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#fe9927] transition-colors">
                    <Mail className="w-6 h-6 text-[#fe9927] group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">
                      {t("emailLogistics")}
                    </p>
                    <p className="text-white font-medium group-hover:text-[#fe9927] transition-colors">
                      mtprimelogistique@gmail.com
                    </p>
                  </div>
                </a>

                {/* Phone 1 */}
                <a
                  href="tel:+33744770802"
                  className="flex items-start gap-4 p-4 rounded-lg bg-[#0f0f0f] border border-[#2a2a2a] hover:border-[#fe9927] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-[#fe9927]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#fe9927] transition-colors">
                    <Phone className="w-6 h-6 text-[#fe9927] group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{t("phone1")}</p>
                    <p className="text-white font-medium group-hover:text-[#fe9927] transition-colors">
                      +33 7 44 77 08 02
                    </p>
                  </div>
                </a>

                {/* Phone 2 */}
                <a
                  href="tel:+33766990205"
                  className="flex items-start gap-4 p-4 rounded-lg bg-[#0f0f0f] border border-[#2a2a2a] hover:border-[#fe9927] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-[#fe9927]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#fe9927] transition-colors">
                    <Phone className="w-6 h-6 text-[#fe9927] group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{t("phone2")}</p>
                    <p className="text-white font-medium group-hover:text-[#fe9927] transition-colors">
                      +33 7 66 99 02 05
                    </p>
                  </div>
                </a>

                {/* Business Hours */}
                <div className="flex items-start gap-4 p-4 rounded-lg bg-[#0f0f0f] border border-[#2a2a2a]">
                  <div className="w-12 h-12 bg-[#fe9927]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#fe9927]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">
                      {t("businessHours")}
                    </p>
                    <p className="text-white">
                      {t("businessHoursSchedule")}
                      <br />
                      {t("saturdaySchedule")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Info Card */}
            <div className="bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                {t("legalInfo")}
              </h2>
              <div className="space-y-3 text-gray-400">
                <p>
                  <strong className="text-[#fe9927]">VAT:</strong> FR82 980 891
                  345
                </p>
                <p>
                  <strong className="text-[#fe9927]">SIREN:</strong> 980 891 345
                </p>
                <p>
                  <strong className="text-[#fe9927]">SIRET:</strong> 980 891 345
                  00012
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Placeholder */}
          <div className="lg:sticky lg:top-8 h-fit">
            <div className="bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                {t("formComingSoon")}
              </h2>

              <div className="bg-gradient-to-br from-[#fe9927]/10 to-[#fe9927]/5 border border-[#fe9927]/20 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-[#fe9927] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-black" />
                </div>
                <p className="text-gray-300 mb-6">{t("formDescription")}</p>
                <div className="flex flex-col gap-3">
                  <a
                    href="mailto:mtprime.fourniture@gmail.com"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#fe9927] hover:bg-[#ff8800] text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg shadow-[#fe9927]/20 hover:shadow-[#fe9927]/40"
                  >
                    <Mail className="w-5 h-5" />
                    {t("emailShopButton")}
                  </a>
                  <a
                    href="mailto:mtprimelogistique@gmail.com"
                    className="w-full inline-flex items-center justify-center gap-2 border-2 border-[#fe9927] text-[#fe9927] hover:bg-[#fe9927] hover:text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                    {t("emailLogisticsButton")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
