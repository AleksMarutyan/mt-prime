import { notFound } from "next/navigation";
import { routing } from "@/lib/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
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
    <html lang={locale} className={`${fontSans.variable} ${fontMono.variable}`}>
      <body>
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
