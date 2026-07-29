import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar } from "@/components/NavBar";
import { SmoothScroll } from "@/components/SmoothScroll";
import { GradualBlur } from "@/components/GradualBlur";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vinicius Machado — Web Designer",
  description:
    "Freelancer com cerca de 3 anos de experiência em web design e UI, ajudando marcas a transformar ideias em sites e produtos digitais bonitos e funcionais.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="bg-white font-sans text-black antialiased">
        <SmoothScroll />
        <NavBar />
        {children}
        <GradualBlur />
      </body>
    </html>
  );
}
