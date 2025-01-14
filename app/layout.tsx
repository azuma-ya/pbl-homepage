import { cn } from "@/libs/utils";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

import Footer from "@/components/base/footer";
import Header from "@/components/base/header";

import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "Sequrity",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-pt-36 scroll-smooth">
      <body
        className={cn(
          notoSansJP.variable,
          "font-sans bg-image min-h-screen flex flex-col ",
        )}
        id="top"
      >
        <div className="fixed inset-x-0 z-50">
          <Header />
        </div>
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
