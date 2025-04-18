"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Cairo } from "next/font/google"; // ✅ استدعاء خط Cairo
import "../styles/index.css";

import { Providers } from "./providers";

// ✅ تحميل خط Cairo وتحديد الـ subsets والدوال
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"], // اختياري: أوزان متعددة
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="ar">
      <head />
      <body dir="rtl" className={`bg-[#FCFCFC] dark:bg-black ${cairo.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
