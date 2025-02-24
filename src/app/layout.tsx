import "swiper/css";
import "swiper/css/pagination";
import { I18nProvider } from "../i18/i18Context";
import "./globals.css";

export const metadata = {
  title: "Hala Nanny",
  description: "Find the perfect nanny for your family",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale?: string };
}) {
  const locale = params?.locale || "en";

  return (
    <html>
      <head>
        <title>{metadata.title}</title>
      </head>
      <body>
        <I18nProvider defaultLocale={locale}>{children}</I18nProvider>
      </body>
    </html>
  );
}