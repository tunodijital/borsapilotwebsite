import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BorsaPilot | Learn markets by doing",
  description:
    "BorsaPilot — Piyasayı deneyerek öğren. Learn markets by doing with real market data and virtual capital.",
  keywords: ["BorsaPilot", "market simulation", "piyasa simülasyonu", "virtual portfolio", "financial learning"],
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
