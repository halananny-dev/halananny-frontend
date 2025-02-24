import "./globals.css";
import "swiper/css/pagination";
import 'swiper/css';

export const metadata = {
  title: "Hala Nanny",
  description: "Find the perfect nanny for your family",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
