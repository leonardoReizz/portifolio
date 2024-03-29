import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "./components/Sidebar";

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
    <html lang="en">
      <body
        className={`${inter.className} bg-zinc-950 text-white  flex flex-col items-center justify-start`}
      >
        <div className="w-full h-full">
          <Sidebar />
          <div className="w-full h-full flex items-start justify-center  mt-[70px]">
            <div className="w-full h-full max-w-5xl p-4 ">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
