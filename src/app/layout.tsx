import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingLine from "@/components/FloatingLine";
import ScrollReveal from "@/components/ScrollReveal";
import TabTitle from "@/components/TabTitle";
import PageBackground from "@/components/PageBackground";

export const metadata: Metadata = {
  title: "百無禁忌研究所 — 人生顧問・法事服務・感情修復",
  description:
    "人生本來就有無限可能。百無禁忌研究所提供人生顧問、法事服務、感情修復，先好好把心裡那團迷霧釐清，看見問題之後就不是那麼困難。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;500;600;700&family=Noto+Sans+TC:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div id="app" style={{ position: "relative", zIndex: 1 }}>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingLine />
        </div>
        <ScrollReveal />
        <TabTitle />
      </body>
    </html>
  );
}
