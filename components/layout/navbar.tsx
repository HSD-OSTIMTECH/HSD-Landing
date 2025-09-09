import React, { useState, useEffect } from "react";
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
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const linkStyle =
    "text-neutral-400 hover:text-white hover:bg-primary/30 hover:border hover:border-primary hover:shadow-xs hover:shadow-secondary hover:-translate-y-1 transition-all px-3 py-1 rounded-md";

  const dropdownLinkStyle =
    "block px-4 py-2 text-sm text-neutral-300 hover:text-white hover:bg-primary/20 transition-all rounded-md";

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

  // Dropdown dışına tıklandığında kapat
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (aboutDropdownOpen) {
        const target = event.target as HTMLElement;
        if (!target.closest(".dropdown-container")) {
          setAboutDropdownOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [aboutDropdownOpen]);

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // 50px scroll sonrası tetikle
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* TOP SECTION - Sabit Değil */}
      <motion.div
        className="w-full bg-neutral-900 border-b border-neutral-800 py-2 font-poppins overflow-hidden"
        initial={false}
        animate={{
          height: isScrolled ? 0 : "auto",
          opacity: isScrolled ? 0 : 1,
          paddingTop: isScrolled ? 0 : "0.5rem",
          paddingBottom: isScrolled ? 0 : "0.5rem",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="max-w-7xl container mx-auto flex items-center justify-between px-5 sm:px-0">
          {/* Sol Taraf - Duyuru */}
          <div className="flex items-center gap-2 text-sm">
            <Icon
              icon="hugeicons:announcement-02"
              className="text-primary w-4 h-4"
            />
            <span className="text-neutral-300 truncate">
              Yeni projelerimiz hakkında bilgi almak için Discord sunucumuza
              katılın!
            </span>
          </div>

          {/* Sağ Taraf - Dark/Light Mode & Dil */}
          <div className="flex items-center gap-3">
            <button className="text-neutral-400 hover:text-white transition-colors">
              <Icon icon="hugeicons:moon-02" className="w-5 h-5" />
            </button>
            <button className="text-neutral-400 hover:text-white transition-colors">
              <Icon icon="hugeicons:translate" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* ANA NAVBAR - Sabit */}
      <motion.nav
        className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-3xl py-8 font-poppins px-5 sm:px-0"
        initial={false}
        animate={{
          top: isScrolled ? "0px" : "48px",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
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
            {/* Hakkımızda Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                className={`${linkStyle} flex items-center gap-1`}
              >
                Hakkımızda
                <Icon
                  icon="hugeicons:arrow-down-01"
                  className={`w-4 h-4 transition-transform ${
                    aboutDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {aboutDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-lg border border-neutral-700 rounded-lg shadow-lg overflow-hidden"
                  >
                    <a href="/about/who-we-are" className={dropdownLinkStyle}>
                      Biz Kimiz?
                    </a>
                    <a href="/about/hsd" className={dropdownLinkStyle}>
                      HSD Hakkında
                    </a>
                    <a href="/about/core-team" className={dropdownLinkStyle}>
                      Core Team Üyeleri
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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
              <Button variant="outline" onClick={onOpenLogin}>
                Giriş Yap
              </Button>
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
              className="fixed inset-0 z-50 flex flex-col gap-4 bg-black h-screen w-screen backdrop-blur-2xl p-6 md:hidden"
              style={{ top: isScrolled ? "80px" : "144px" }} // Scroll durumuna göre top değeri
            >
              {/* Hakkımızda Alt Menüsü */}
              <div className="border-b border-neutral-800 pb-4 mb-2">
                <h3 className="text-white font-semibold mb-3">Hakkımızda</h3>
                <a
                  href="/about/who-we-are"
                  className={`${linkStyle} block mb-2 ml-4`}
                >
                  Biz Kimiz?
                </a>
                <a href="/about/hsd" className={`${linkStyle} block mb-2 ml-4`}>
                  HSD Hakkında
                </a>
                <a
                  href="/about/core-team"
                  className={`${linkStyle} block ml-4`}
                >
                  Core Team Üyeleri
                </a>
              </div>

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
                <div className="flex items-center justify-between mt-6 px-1">
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
                <Button
                  variant="outline"
                  className="w-full mt-6"
                  onClick={onOpenLogin}
                >
                  Giriş Yap
                </Button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

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
            <script
              dangerouslySetInnerHTML={{
                __html: `
              setTimeout(() => {
                const link = document.querySelector('.login-modal-register-link');
                if(link){ link.onclick = ${handleOpenRegister.toString()}; }
              }, 100);
            `,
              }}
            />
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
            <script
              dangerouslySetInnerHTML={{
                __html: `
              setTimeout(() => {
                const link = document.querySelector('.register-modal-login-link');
                if(link){ link.onclick = ${handleOpenLogin.toString()}; }
              }, 100);
            `,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
