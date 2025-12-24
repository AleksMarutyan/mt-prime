"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const t = useTranslations("contact");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        {t("title")}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-[#1a1a1a] p-8 rounded-2xl border border-[#2a2a2a]"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            {t("nameLabel")}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="w-full px-4 py-3 bg-[#0f0f0f] border border-[#2a2a2a] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#fe9927] focus:border-transparent transition-all"
            value={formData.name}
            onChange={handleInputChange}
            placeholder={t("namePlaceholder")}
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            {t("emailLabel")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full px-4 py-3 bg-[#0f0f0f] border border-[#2a2a2a] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#fe9927] focus:border-transparent transition-all"
            value={formData.email}
            onChange={handleInputChange}
            placeholder={t("emailPlaceholder")}
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            {t("messageLabel")}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-3 bg-[#0f0f0f] border border-[#2a2a2a] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#fe9927] focus:border-transparent transition-all"
            value={formData.message}
            onChange={handleInputChange}
            placeholder={t("messagePlaceholder")}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#fe9927] hover:bg-[#ff8800] text-black font-semibold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg shadow-[#fe9927]/30 hover:shadow-[#fe9927]/50 transform hover:scale-105"
        >
          {t("submitButton")}
        </button>
      </form>
    </div>
  );
};

export default Contact;
