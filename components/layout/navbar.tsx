import React from "react";
import Button from "../ui/button";

interface NavbarProps {
  isLogin: boolean;
}

const Navbar = ({ isLogin }: NavbarProps) => {
  const linkStyle =
    "text-neutral-400 hover:text-white hover:bg-primary/30 hover:shadow-secondary hover:shadow-xs hover:-translate-y-1 transition-all duration-300 px-3 py-1 rounded-md";

  return (
    <nav className="max-w-7xl container translate mx-auto py-8 flex items-center justify-between font-poppins">
      <a href="/">
        <img src="/images/logo.png" alt="logo for navbar" />
      </a>

      <div className="flex items-center gap-3">
        <a href="/aboout" className={linkStyle}>
          Hakkımızda
        </a>
        <a href="/projects" className={linkStyle}>
          Projelerimiz
        </a>
        <a href="/events" className={linkStyle}>
          Etkinlikler
        </a>
        <a href="/announcements" className={linkStyle}>
          Duyurular
        </a>
        <a href="/announcements" className={linkStyle}>
          Galeri
        </a>
      </div>

      {isLogin ? (
        <a href="/profile" className={linkStyle}>
          Profil
        </a>
      ) : (
        <Button variant="outline">Giriş Yap</Button>
      )}
    </nav>
  );
};

export default Navbar;
