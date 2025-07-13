import React, { useState } from "react";
import Button from "../ui/button";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  isLogin: boolean;
}

const Navbar = ({ isLogin }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle =
    "text-neutral-400 hover:text-white hover:bg-primary/30 hover:border hover:border-primary hover:shadow-xs hover:shadow-secondary hover:-translate-y-1 transition-all px-3 py-1 rounded-md";

  return (
    <nav className="max-w-7xl container mx-auto py-8 px-4 font-poppins">
      {/* ÜST BAR */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="/">
          <img
            src="/images/logo.png"
            alt="logo for navbar"
            className="w-28 sm:w-32"
          />
        </a>

        {/* Orta Linkler (desktop only) */}
        <div className="hidden md:flex items-center gap-4">
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

        {/* Sağ Butonlar */}
        <div className="hidden md:flex items-center gap-4">
          {isLogin ? (
            <div className="flex items-center gap-4">
              <a href="/settings">
                <Icon
                  icon="hugeicons:setting-07"
                  className="text-white w-6 h-6"
                />
              </a>
              <a href="/profile">
                <img
                  src="/avatars/defaultAvatar.png"
                  alt="avatar"
                  className="w-8 h-8 rounded-full"
                />
              </a>
            </div>
          ) : (
            <Button variant="outline">Giriş Yap</Button>
          )}
        </div>

        {/* Hamburger Menü (mobile only) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <Icon
              icon={menuOpen ? "mdi:close" : "mdi:menu"}
              className="text-white w-7 h-7"
            />
          </button>
        </div>
      </div>

      {/* MOBİL MENÜ - Animasyonlu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mt-5 flex flex-col gap-2 bg-dark border border-white/10 p-4 rounded-xl"
          >
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

            {isLogin ? (
              <div className="flex items-center justify-between mt-3 px-1">
                <a href="/settings">
                  <Icon
                    icon="hugeicons:setting-07"
                    className="text-white w-6 h-6"
                  />
                </a>
                <a href="/profile">
                  <img
                    src="/avatars/defaultAvatar.png"
                    alt="avatar"
                    className="w-8 h-8 rounded-full"
                  />
                </a>
              </div>
            ) : (
              <Button variant="outline" className="w-full mt-3">
                Giriş Yap
              </Button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
