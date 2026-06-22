import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mercado Querido | Próximamente en Verano 2027",
  description:
    "Mercado Querido será un marketplace curado de compradores y vendedores para productos hechos o diseñados en México: artesanía, alimentos regionales y artículos vintage.",
  openGraph: {
    title: "Mercado Querido",
    description:
      "Un marketplace curado para lo hecho o diseñado en México. Próximamente en Verano 2027.",
    type: "website",
    locale: "es_MX",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07162c",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX">
      <body>{children}</body>
    </html>
  );
}
