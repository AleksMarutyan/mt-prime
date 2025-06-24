import createMiddleware from 'next-intl/middleware';
import { routing } from './lib/i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Match all pathnames except for
    // - ... if they contain a dot (likely a file)
    // - ... if they start with api, _next or _vercel
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};
