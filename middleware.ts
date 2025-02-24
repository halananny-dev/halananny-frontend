import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './src/i18n/config';

// Get all public routes that should be internationalized
export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always'
});

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … or
    // - /_next/... or
    // - /api/... or
    // - /static/... or
    // - /favicon.ico or
    // - /robots.txt
    '/((?!api|_next|_vercel|static|.*\..*|robots\.txt|favicon\.ico).*)',
  ]
};
