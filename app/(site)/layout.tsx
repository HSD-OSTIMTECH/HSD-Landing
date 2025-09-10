import React from "react";
import Navbar from "@/components/layout/site/navbar";
import Footer from "@/components/layout/site/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        <div className="flex min-h-screen flex-col">
          <Navbar isLogin={false} />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
