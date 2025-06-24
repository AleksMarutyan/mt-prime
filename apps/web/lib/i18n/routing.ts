import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'fr', 'it'],

  // Used when no locale matches
  defaultLocale: 'en',

  // The `pathnames` object maps internal pathnames to the external ones
  pathnames: {
    '/': '/',
    '/pdf/[slug]': {
      en: '/pdf/[slug]',
      fr: '/pdf/[slug]',
      it: '/pdf/[slug]'
    }
  }
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];
