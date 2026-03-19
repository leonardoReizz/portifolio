import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Leonardo Reis - Desenvolvedor Fullstack",
  description: "Desenvolvedor fullstack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.variable} font-sans flex justify-center`}>
        <div className="max-w-7xl">{children}</div>
        <Toaster theme="dark" />
      </body>
    </html>
  );
}
