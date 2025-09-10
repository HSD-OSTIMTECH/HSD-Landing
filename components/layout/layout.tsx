import React from "react";

// Componenst
import Navbar from "./site/navbar";
import Footer from "./site/footer";

type LayoutProps = React.PropsWithChildren<{}>;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isLogin={false} />
      <main className="flex-grow my-24 z-0">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
