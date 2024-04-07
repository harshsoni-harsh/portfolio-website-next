import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harsh Soni | Portfolio",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script src="https://kit.fontawesome.com/a90753689d.js" crossOrigin="anonymous" />
      <body className={inter.className}>
        <div className="flex justify-center items-center min-h-screen p-6 bg-gradient-to-b to-cyan-300 from-gray-950">
          <div className="pb-8 h-fit max-w-screen-xl space-y-12 flex flex-col max-sm:px-8 sm:px-16 py-5 text-white bg-gray-800 shadow-2xl rounded-3xl grow shadow-slate-950">
            <Navbar />
            {children}
          </div>
        </div></body>
    </html>
  );
}
