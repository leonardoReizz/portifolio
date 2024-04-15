import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className="dark">
      <body
        className={`${inter.className} dark:bg-zinc-950/95 bg-zinc-950/5 text-white  flex flex-col items-center justify-start overflow-hidden`}
      >
        {/* <Sidebar /> */}
        <div className="w-full h-full flex items-start justify-center">
          <div className="w-full h-screen">{children}</div>
        </div>
      </body>
    </html>
  );
}
