import "swiper/css";
import "swiper/css/pagination";
import { I18nProvider } from "../i18/i18Context";
import "./font.css";
import "./globals.css";
import Metadata from "./metadata";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <Metadata />
      <body>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
