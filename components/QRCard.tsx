"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import QRCode from "qrcode";

interface QRCardProps {
  title: string;
  url: string;
}

const QRCard = ({ title, url }: QRCardProps) => {
  const t = useTranslations("qrCard");
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const generateQR = async () => {
      try {
        const dataUrl = await QRCode.toDataURL(url, {
          width: 192,
          margin: 2,
          color: {
            dark: "#000000",
            light: "#FFFFFF",
          },
          errorCorrectionLevel: "M",
        });
        setQrCodeDataUrl(dataUrl);
        setLoading(false);
      } catch (error) {
        console.error("Error generating QR code:", error);
        setLoading(false);
      }
    };

    generateQR();
  }, [url]);

  return (
    <div className="bg-[#1a1a1a] rounded-2xl shadow-xl p-8 border border-[#2a2a2a] hover:border-[#fe9927] transition-all duration-300 group">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-white mb-6 group-hover:text-[#fe9927] transition-colors">
          {title}
        </h3>

        <div className="bg-white p-6 rounded-xl mb-6 inline-block">
          {loading ? (
            <div className="flex items-center justify-center w-48 h-48">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-800"></div>
            </div>
          ) : (
            <img
              src={qrCodeDataUrl}
              alt={`QR Code for ${title}`}
              className="w-48 h-48"
            />
          )}
        </div>

        <div className="text-left mb-6 bg-[#0f0f0f] p-4 rounded-lg border border-[#2a2a2a]">
          <p className="text-sm font-semibold text-[#fe9927] mb-2">
            {t("howToScan")}
          </p>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>{t("step1")}</li>
            <li>{t("step2")}</li>
            <li>{t("step3")}</li>
            <li>{t("step4")}</li>
          </ul>
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full bg-[#fe9927] hover:bg-[#ff8800] text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-[#fe9927]/30 hover:shadow-[#fe9927]/50 transform hover:scale-105"
        >
          {t("openDocument")} →
        </a>
      </div>
    </div>
  );
};

export default QRCard;
