"use client";

import { useTranslations } from "next-intl";
import QRCodeGenerator from "./QRCodeGenerator";
import { pdfDocuments } from "@/lib/pdf-config";

const QRCodeSection = () => {
  const t = useTranslations();

  return (
    <div className="py-16 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {t("qrSection.title")}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t("qrSection.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pdfDocuments.map((pdf) => (
            <QRCodeGenerator
              key={pdf.id}
              documentId={pdf.id}
              title={pdf.title}
              description={pdf.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QRCodeSection;
