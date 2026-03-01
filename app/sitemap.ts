import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mtprime.fr";
  const locales = ["en", "fr", "it"];
  const pages = ["", "/shop", "/products", "/contact", "/delivery"];

  const routes: MetadataRoute.Sitemap = [];

  // Add root
  routes.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
    alternates: {
      languages: {
        en: `${baseUrl}/en`,
        fr: `${baseUrl}/fr`,
        it: `${baseUrl}/it`,
      },
    },
  });

  // Add all locale pages
  locales.forEach((locale) => {
    pages.forEach((page) => {
      routes.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "daily" : "weekly",
        priority: page === "" ? 1 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en${page}`,
            fr: `${baseUrl}/fr${page}`,
            it: `${baseUrl}/it${page}`,
          },
        },
      });
    });
  });

  return routes;
}
