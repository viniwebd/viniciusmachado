import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ClarityAnalytics } from "@/components/ClarityAnalytics";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://viniciusmachado.com";
const SITE_TITLE = "Vinicius Machado — Web Designer";
const SITE_DESCRIPTION =
  "Freelancer com cerca de 3 anos de experiência em web design e UI, ajudando marcas a transformar ideias em sites e produtos digitais bonitos e funcionais.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Vinicius Machado",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="bg-white font-sans text-black antialiased">
        <ClarityAnalytics />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
