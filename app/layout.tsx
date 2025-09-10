// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title:
    "HSD Ostim Teknik Üniversitesi - Beraber Öğreniyor, Beraber Gelişiyoruz!",
  description:
    "HSD Ostim Topluluğu Resmi Web Sitesi. Beraber öğrendiğimiz bu toplulukta, projeler geliştiriyor ve etkinlikler düzenliyoruz. Sen de aramıza katılmak ister misin?",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
