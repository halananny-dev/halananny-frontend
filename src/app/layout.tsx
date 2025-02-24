import "swiper/css";
import "swiper/css/pagination";
import { I18nProvider } from "../i18/i18Context";
import "./globals.css";
import "./font.css";

export const metadata = {
  title: "Hala Nanny",
  description: "Find the perfect nanny for your family",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <head>
        <title>{metadata.title}</title>
      </head>
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
