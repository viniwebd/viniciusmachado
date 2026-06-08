import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { NavBar } from "@/components/NavBar";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vinicius Machado — Web Designer",
  description:
    "Web Designer especialista em WordPress. Criando experiências digitais que convertem — sites rápidos, bonitos e otimizados para resultados reais.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={dmSans.variable}>
      <body className="font-sans antialiased">
        <SmoothScroll />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
