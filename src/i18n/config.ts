export const defaultLocale = 'en';
export const locales = ['en', 'ar'];

export function getLocale(pathname: string) {
  const segments = pathname.split('/');
  const locale = segments[1];
  return locales.includes(locale) ? locale : defaultLocale;
}

export type Locale = (typeof locales)[number];
