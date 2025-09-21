"use client";
import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import {
  navigationData,
  socialMediaLinks,
} from "../../../data/navigationData";

interface NavbarProps {
  isLogin: boolean;
}

const Navbar = ({ isLogin }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false);
  const [announcementsDropdownOpen, setAnnouncementsDropdownOpen] =
    useState(false);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);
  const [communityDropdownOpen, setCommunityDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState<string | null>(null);

  // Data'yı import edilen navigationData'dan alıyoruz
  const dropdownData = navigationData;

  const linkStyle =
    "text-neutral-400 hover:text-white transition-colors px-3 py-1 rounded-md";

  // Dropdown helper function
  const renderMegaMenu = (data: any, isOpen: boolean) => (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-16 left-1/2 transform -translate-x-1/2 mt-2 w-screen bg-black backdrop-blur-lg border-b border-neutral-700 shadow-2xl overflow-hidden z-50"
        >
          <div className="max-w-7xl mx-auto flex py-16">
            {/* Sol Taraf - Linkler */}
            <div className="w-1/2 pr-8">
              <div className="flex flex-col gap-x-8 gap-y-3">
                {data.links.map((link: any, index: number) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-neutral-300 hover:text-white transition-colors py-2 text-base"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>

            {/* Sağ Taraf - Kartlar */}
            <div className="grid grid-cols-2 gap-6">
              {data.cards.map((card: any, index: number) => (
                <div
                  key={index}
                  className="bg-neutral-800/40 backdrop-blur-md rounded-xl p-6 border border-neutral-700/50 hover:bg-neutral-800/60 transition-all duration-200 min-h-[280px]"
                >
                  {/* Kart içeriği */}
                  {card.image ? (
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                  ) : card.icon ? (
                    <div className="flex items-center gap-3 mb-4">
                      <Icon
                        icon={card.icon}
                        className={`${card.iconColor} text-3xl`}
                      />
                      <div>
                        <span
                          className={`${card.badge.color} text-white text-xs px-2 py-1 rounded`}
                        >
                          {card.badge.text}
                        </span>
                        {card.date && (
                          <p className="text-xs text-neutral-400 mt-1">
                            {card.date}
                          </p>
                        )}
                      </div>
                    </div>
                  ) : null}

                  {!card.icon && (
                    <div className="mb-4">
                      <span
                        className={`${card.badge.color} text-white text-xs px-2 py-1 rounded`}
                      >
                        {card.badge.text}
                      </span>
                      {card.date && (
                        <p className="text-xs text-neutral-400 mt-1">
                          {card.date}
                        </p>
                      )}
                    </div>
                  )}

                  <h4 className="text-white font-bold text-xl mb-3">
                    {card.title}
                  </h4>
                  <p className="text-neutral-300 text-sm mb-4 leading-relaxed">
                    {card.description}
                  </p>

                  <div className="flex items-center gap-2 mt-auto">
                    {card.extraIcon && (
                      <Icon
                        icon={card.extraIcon}
                        className={`${
                          card.iconColor || "text-neutral-400"
                        } text-sm`}
                      />
                    )}
                    <span className="text-xs text-neutral-400">
                      {card.extra}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Dropdown state yönetimi
  const dropdownStates = {
    about: aboutDropdownOpen,
    projects: projectsDropdownOpen,
    events: eventsDropdownOpen,
    announcements: announcementsDropdownOpen,
    blog: blogDropdownOpen,
    community: communityDropdownOpen,
  };

  const setDropdownState = (dropdown: string, state: boolean) => {
    switch (dropdown) {
      case "about":
        setAboutDropdownOpen(state);
        break;
      case "projects":
        setProjectsDropdownOpen(state);
        break;
      case "events":
        setEventsDropdownOpen(state);
        break;
      case "announcements":
        setAnnouncementsDropdownOpen(state);
        break;
      case "blog":
        setBlogDropdownOpen(state);
        break;
      case "community":
        setCommunityDropdownOpen(state);
        break;
    }
  };

  const handleDropdownClick = (dropdown: string) => {
    // Önce tüm dropdown'ları kapat
    Object.keys(dropdownStates).forEach((key) => {
      if (key !== dropdown) {
        setDropdownState(key, false);
      }
    });
    // Sonra hedef dropdown'ı toggle et
    setDropdownState(
      dropdown,
      !dropdownStates[dropdown as keyof typeof dropdownStates]
    );
  };

  // Dropdown dışına tıklandığında kapat
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".dropdown-container")) {
        Object.keys(dropdownStates).forEach((key) => {
          setDropdownState(key, false);
        });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // 50px scroll sonrası tetikle
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Responsive navbar: full-page burger menu on mobile
  const aboutLinks = navigationData.about.links;

  return (
    <>
      {/* TOP SECTION - Sabit Değil */}
      <motion.div
        className="w-screen bg-neutral-900 border-b border-neutral-800 py-2 font-poppins overflow-hidden z-[110]"
        initial={false}
        animate={{
          height: isScrolled ? 0 : "auto",
          opacity: isScrolled ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-0 flex justify-between items-center text-sm">
          <div className="text-neutral-400 hidden sm:block">
            Huawei Student Developers Ostim Teknik Üniversitesi
          </div>
          <div className="flex items-center gap-4 text-neutral-400">
            <a
              href={`mailto:${socialMediaLinks.email}`}
              className="hover:text-white transition-colors"
            >
              {socialMediaLinks.email}
            </a>
            <span>|</span>
            <div className="flex items-center gap-3">
              <a
                href={socialMediaLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Icon icon="mdi:instagram" className="w-4 h-4" />
              </a>
              <a
                href={socialMediaLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Icon icon="mdi:linkedin" className="w-4 h-4" />
              </a>
              <a
                href={socialMediaLinks.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Icon icon="mdi:medium" className="w-4 h-4" />
              </a>
              <a
                href={socialMediaLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Icon icon="mdi:github" className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ALT SECTION - Responsive Navbar */}
      <nav className="bg-black/95 backdrop-blur-lg border-b border-neutral-800 font-poppins sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-0 py-4 flex justify-between items-center">
          {/* Sol taraf - Logo */}
          <a href="/" className="flex items-center gap-3">
            <img src="/images/logo.png" alt="HSD Logo" className="h-8" />
          </a>
          {/* Sağ taraf - Linkler (desktop) */}
          <div className="hidden md:flex items-center gap-6">
            {aboutLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-neutral-400 hover:text-white transition-colors text-base font-medium"
              >
                {link.text}
              </a>
            ))}
          </div>
          {/* Burger menu (mobile) */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none"
            aria-label="Menüyü Aç"
            onClick={() => setMenuOpen(true)}
          >
            <Icon icon="mdi:menu" className="text-white text-2xl" />
          </button>
        </div>

        {/* Full-page mobile menu overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed top-0 left-0 w-screen h-screen bg-neutral-900 z-50 flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-800">
                <a href="/" className="flex items-center gap-3">
                  <img src="/images/logo.png" alt="HSD Logo" className="h-10" />
                </a>
                <button
                  className="p-2 rounded focus:outline-none"
                  aria-label="Menüyü Kapat"
                  onClick={() => setMenuOpen(false)}
                >
                  <Icon icon="mdi:close" className="text-white text-2xl" />
                </button>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center gap-6">
                {aboutLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    className="text-white text-xl font-bold py-2 px-6 rounded hover:bg-primary/10 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
