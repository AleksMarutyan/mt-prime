import { notFound } from "next/navigation";
import { routing } from "@/lib/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import { QueryProvider } from "@/providers/query-provider";
import "../global.css";
import { ConditionalLayout } from "@/components/layout/Layout/Layout";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `https://mtprime.fr/${locale}`,
      languages: {
        en: "/en",
        fr: "/fr",
        it: "/it",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Get the messages for the current locale
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${fontSans.variable} ${fontMono.variable} bg-black`}
      suppressHydrationWarning
    >
      <head>
        <link rel="alternate" hrefLang="en" href="https://mtprime.fr/en" />
        <link rel="alternate" hrefLang="fr" href="https://mtprime.fr/fr" />
        <link rel="alternate" hrefLang="it" href="https://mtprime.fr/it" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://mtprime.fr/en"
        />
      </head>
      <body
        className={`${fontSans.className} bg-gradient-to-b from-black via-[#1a0a00] to-black text-white min-h-screen`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <QueryProvider>
            <Providers>
              <ConditionalLayout>{children}</ConditionalLayout>
            </Providers>
          </QueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
