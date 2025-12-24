import { getTranslations } from "next-intl/server";

export default async function ContactPage() {
  const t = await getTranslations("contact");

  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#252525] to-[#2a2a2a] py-16">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#fe9927] rounded-full opacity-10 blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white text-center mb-4">
            {t("title")}
          </h1>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#2a2a2a]">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="w-2 h-8 bg-[#fe9927] mr-3"></span>
              {t("companyInfo")}
            </h2>
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                <strong className="text-[#fe9927]">
                  {t("companyAddress")}
                </strong>
                <br />
                143 Av. Francis Tonner, 06150 Cannes La Bocca, France
              </p>
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4 flex items-center">
              <span className="w-2 h-6 bg-[#fe9927] mr-3"></span>
              {t("legalInfo")}
            </h3>
            <div className="space-y-2 text-gray-300">
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

          {/* Contact Form */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#2a2a2a]">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="w-2 h-8 bg-[#fe9927] mr-3"></span>
              {t("getInTouch")}
            </h2>
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-[#fe9927]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-[#fe9927]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {t("formComingSoon")}
              </h3>
              <p className="text-gray-400">{t("formDescription")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
