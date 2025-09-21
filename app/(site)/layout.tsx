import React from "react";
import Navbar from "@/components/layout/site/navbar";
import Footer from "@/components/layout/site/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Navbar isLogin={false} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
