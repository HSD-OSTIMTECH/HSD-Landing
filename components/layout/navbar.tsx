
import React, { useState } from "react";
import Button from "../ui/button";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import LoginModal from "../modals/loginModal";
import RegisterModal from "../modals/registerModal";

interface NavbarProps {
  isLogin: boolean;
  onOpenLogin?: () => void;
}

const Navbar = ({ isLogin, onOpenLogin }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const linkStyle =
    "text-neutral-400 hover:text-white hover:bg-primary/30 hover:border hover:border-primary hover:shadow-xs hover:shadow-secondary hover:-translate-y-1 transition-all px-3 py-1 rounded-md";

  // LoginModal altındaki Hemen Kayıt Ol'a tıklanınca
  const handleOpenRegister = () => {
    setShowLogin(false);
    setTimeout(() => setShowRegister(true), 200); // animasyon için kısa gecikme
  };

  // RegisterModal altındaki Hemen Giriş Yap'a tıklanınca
  const handleOpenLogin = () => {
    setShowRegister(false);
    setTimeout(() => setShowLogin(true), 200);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-3xl py-8 font-poppins px-5 sm:px-0">
        {/* ÜST BAR */}
        <div className="max-w-7xl container mx-auto flex items-center justify-between">
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
            <a href="/about" className={linkStyle}>
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
            <a href="/gallery" className={linkStyle}>
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
              <Button variant="outline" onClick={onOpenLogin}>Giriş Yap</Button>
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
              className="absolute left-4 right-4 top-16 z-50 mt-3 flex flex-col gap-2 bg-black/90 backdrop-blur-2xl border border-neutral-800 p-4 rounded-xl shadow-lg md:hidden"
            >
              <a href="/about" className={linkStyle}>
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
              <a href="/gallery" className={linkStyle}>
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
                <Button variant="outline" className="w-full mt-3" onClick={onOpenLogin}>
                  Giriş Yap
                </Button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Login Modal */}
      <AnimatePresence>
        {showLogin && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="z-[9999]"
          >
            <LoginModal onClose={() => setShowLogin(false)}>
              {/* Hemen Kayıt Ol'a tıklanınca register modal açılır */}
            </LoginModal>
            {/* Hemen Kayıt Ol linkini override etmek için portal benzeri bir çözüm: */}
            <style>{`.login-modal-register-link { cursor:pointer; color: #e11d48; font-weight:600; }`}</style>
            <script dangerouslySetInnerHTML={{
              __html: `
              setTimeout(() => {
                const link = document.querySelector('.login-modal-register-link');
                if(link){ link.onclick = ${handleOpenRegister.toString()}; }
              }, 100);
            `}} />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Register Modal */}
      <AnimatePresence>
        {showRegister && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="z-[9999]"
          >
            <RegisterModal onClose={() => setShowRegister(false)} />
            {/* Hemen Giriş Yap linkini override etmek için portal benzeri bir çözüm: */}
            <style>{`.register-modal-login-link { cursor:pointer; color: #2563eb; font-weight:600; }`}</style>
            <script dangerouslySetInnerHTML={{
              __html: `
              setTimeout(() => {
                const link = document.querySelector('.register-modal-login-link');
                if(link){ link.onclick = ${handleOpenLogin.toString()}; }
              }, 100);
            `}} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
