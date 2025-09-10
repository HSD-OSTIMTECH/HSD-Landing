'use client'
import React, { useState, useEffect } from "react";
import Button from "../../ui/button";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

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

  // Dropdown veri yapısı
  const dropdownData = {
    about: {
      title: "Hakkımızda",
      links: [
        { href: "/about", text: "Biz Kimiz" },
        { href: "/about/hsd", text: "HSD Nedir" },
        { href: "/about/team", text: "Yönetim Kadrosu" },
        { href: "/about/achievements", text: "Başarılarımız" },
        { href: "/about/partners", text: "Destekçilerimiz" },
        { href: "/about/careers", text: "Ekip Katılım Başvurusu" },
      ],
      cards: [
        {
          title: "Teknoloji Topluluğu",
          description:
            "Üniversite öğrencileri için modern teknolojiler eğitimi ve networking platformu.",
          image: "/images/defaultImage.png",
          gradient: "from-secondary/50 to-purple-900/50",
          badge: { text: "150+ Üye", color: "bg-secondary" },
          extra: "5 yıllık deneyim",
        },
        {
          title: "Eğitim Programları",
          description:
            "Sıfırdan ileri seviyeye programlama bootcamp'leri ve workshop'ları.",
          image: "/images/defaultImage.png",
          gradient: "from-green-900/50 to-teal-900/50",
          badge: { text: "Aktif", color: "bg-green-600" },
          extra: "20+ Program",
        },
      ],
    },
    projects: {
      title: "Projelerimiz",
      links: [
        { href: "/projects/ongoing", text: "Devam Eden Projeler" },
        { href: "/projects/completed", text: "Tamamlanan Projeler" },
        { href: "/projects/apply", text: "Proje Katılma Başvurusu" },
        { href: "/projects/mentors", text: "Mentorlar & Danışmanlar" },
        { href: "/projects/calendar", text: "Proje Takvimleri" },
        { href: "/projects/technologies", text: "Kullandığımız Teknolojiler" },
        { href: "/projects/suggestions", text: "Proje Öneri Kutusu" },
      ],
      cards: [
        {
          title: "E-Commerce Platform",
          description:
            "Modern web teknolojileri ile geliştirilmiş tam kapsamlı e-ticaret platformu projesi.",
          image: "/images/defaultImage.png",
          gradient: "from-green-900/50 to-secondary/50",
          badge: { text: "Aktif", color: "bg-green-600" },
          extra: "React, Node.js",
        },
        {
          title: "AI Chatbot",
          description:
            "Yapay zeka destekli müşteri hizmetleri chatbot sistemi. NLP ve machine learning kullanıyor.",
          image: "/images/defaultImage.png",
          gradient: "from-purple-900/50 to-pink-900/50",
          badge: { text: "Geliştirme", color: "bg-secondary" },
          extra: "Python, TensorFlow",
        },
      ],
    },
    events: {
      title: "Etkinlikler",
      links: [
        { href: "/events/upcoming", text: "Yaklaşan Etkinlikler" },
        { href: "/events/past", text: "Geçmiş Etkinlikler" },
        { href: "/events/workshops", text: "Workshop & Seminerler" },
        { href: "/events/hackathons", text: "Hackathonlar" },
        { href: "/events/meetups", text: "Topluluk Buluşmaları" },
        { href: "/events/conferences", text: "Konferanslar" },
        { href: "/events/submit", text: "Etkinlik Önerisi" },
      ],
      cards: [
        {
          title: "React Advanced Workshop",
          description:
            "Modern React pattern'leri, hooks optimizasyonu ve performance teknikleri üzerine 4 saatlik workshop.",
          gradient: "from-orange-900/50 to-red-900/50",
          icon: "mdi:calendar-star",
          iconColor: "text-orange-400",
          badge: { text: "Bu Hafta", color: "bg-orange-600" },
          date: "15 Ocak 2025",
          extra: "45 katılımcı",
          extraIcon: "mdi:account-group",
        },
        {
          title: "AI/ML Hackathon",
          description:
            "48 saatlik yapay zeka ve makine öğrenmesi konulu hackathon. Büyük ödüller ve networking fırsatları.",
          gradient: "from-cyan-900/50 to-secondary/50",
          icon: "mdi:trophy",
          iconColor: "text-cyan-400",
          badge: { text: "Gelecek Ay", color: "bg-cyan-600" },
          date: "22-24 Şubat",
          extra: "25.000₺ ödül",
          extraIcon: "mdi:gift",
        },
      ],
    },
    announcements: {
      title: "Duyurular",
      links: [
        { href: "/announcements/latest", text: "Son Duyurular" },
        { href: "/announcements/important", text: "Önemli Duyurular" },
        { href: "/announcements/events", text: "Etkinlik Duyuruları" },
        { href: "/announcements/academic", text: "Akademik Duyurular" },
        { href: "/announcements/job", text: "İş & Kariyer Fırsatları" },
        { href: "/announcements/archive", text: "Duyuru Arşivi" },
      ],
      cards: [
        {
          title: "Yeni Üyelik Dönem",
          description:
            "2025 Bahar dönem üyelik başvuruları açıldı. Son başvuru tarihi 30 Ocak.",
          gradient: "from-emerald-900/50 to-green-900/50",
          icon: "mdi:account-plus",
          iconColor: "text-emerald-400",
          badge: { text: "Önemli", color: "bg-red-600" },
          date: "10 Ocak 2025",
          extra: "Son 20 gün",
          extraIcon: "mdi:clock-alert",
        },
        {
          title: "Staj Programı",
          description:
            "Teknoloji şirketlerinde staj fırsatları. CV'nizi gönderin, değerlendirelim.",
          gradient: "from-indigo-900/50 to-purple-900/50",
          icon: "mdi:briefcase",
          iconColor: "text-indigo-400",
          badge: { text: "Fırsat", color: "bg-indigo-600" },
          date: "5 Ocak 2025",
          extra: "15 pozisyon",
          extraIcon: "mdi:account-multiple",
        },
      ],
    },
    blog: {
      title: "Blog",
      links: [
        { href: "/blog/tech", text: "Teknoloji Yazıları" },
        { href: "/blog/medium", text: "Medium Yazılarımız" },
        { href: "/blog/tutorials", text: "Tutorials & Rehberler" },
        { href: "/blog/news", text: "Teknoloji Haberleri" },
        { href: "/blog/career", text: "Kariyer Tavsiyeleri" },
        { href: "/blog/interviews", text: "Röportajlar" },
      ],
      cards: [
        {
          title: "React 19 Yenilikleri",
          description:
            "React 19'da gelen yeni özellikler ve geliştiriciler için pratik kullanım örnekleri.",
          image: "/images/defaultImage.png",
          gradient: "from-secondary/50 to-cyan-900/50",
          badge: { text: "Popüler", color: "bg-secondary" },
          date: "8 Ocak 2025",
          extra: "1.2K okuma",
          extraIcon: "mdi:eye",
        },
        {
          title: "AI Mühendisliği Yolculuğu",
          description:
            "Yapay zeka mühendisi olmak isteyen öğrenciler için kapsamlı roadmap ve kaynaklar.",
          image: "/images/defaultImage.png",
          gradient: "from-purple-900/50 to-pink-900/50",
          badge: { text: "Trending", color: "bg-purple-600" },
          date: "5 Ocak 2025",
          extra: "850 okuma",
          extraIcon: "mdi:trending-up",
        },
      ],
    },
    community: {
      title: "Topluluk",
      links: [
        { href: "/community/github", text: "GitHub Organizasyonu" },
        { href: "/community/linkedin", text: "LinkedIn Grubumuz" },
        { href: "/community/study-groups", text: "Çalışma Grupları" },
      ],
      cards: [
        {
          title: "Discord Topluluğu",
          description:
            "7/24 aktif Discord sunucumuzda diğer geliştiricilerle sohbet edin ve yardımlaşın.",
          gradient: "from-violet-900/50 to-purple-900/50",
          icon: "mdi:discord",
          iconColor: "text-violet-400",
          badge: { text: "Aktif", color: "bg-violet-600" },
          extra: "500+ üye online",
          extraIcon: "mdi:account-group",
        },
        {
          title: "Open Source Katkıları",
          description:
            "GitHub'da open source projelere katkıda bulunun. Deneyim kazanın ve portfolyonuzu güçlendirin.",
          gradient: "from-slate-900/50 to-gray-900/50",
          icon: "mdi:github",
          iconColor: "text-slate-400",
          badge: { text: "Katılım Açık", color: "bg-slate-600" },
          extra: "12 aktif proje",
          extraIcon: "mdi:source-branch",
        },
      ],
    },
  };

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
          className="absolute top-18 left-1/2 transform -translate-x-1/2 mt-2 w-screen bg-black backdrop-blur-lg border-b border-neutral-700 shadow-2xl overflow-hidden z-50"
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
              href="mailto:hello@hsd.com"
              className="hover:text-white transition-colors"
            >
              hello@hsdostim.com
            </a>
            <span>|</span>

            {/* Sosyal Medya İkonları */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/hsdostim"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Icon icon="mdi:instagram" className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/company/hsdostim"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Icon icon="mdi:linkedin" className="w-4 h-4" />
              </a>
              <a
                href="https://medium.com/@hsdostim"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Icon icon="mdi:medium" className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* MAIN NAV SECTION - Scroll'da Sticky */}
      <motion.nav
        className="bg-black/95 backdrop-blur-lg border-b border-neutral-800 font-poppins sticky top-0 z-30"
        initial={false}
        animate={{
          y: isScrolled ? -10 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-0 py-4 flex justify-between items-center relative">
          {/* Sol taraf - Logo */}
          <a href="/" className="flex items-center gap-3">
            <img src="/images/logo.png" alt="HSD Logo" className="h-8" />
          </a>

          {/* Orta Linkler (desktop only) */}
          <div className="hidden md:flex items-center gap-4">
            {/* Hakkımızda Dropdown */}
            <div className="dropdown-container">
              <button
                className={`${linkStyle} flex items-center gap-1`}
                onClick={() => handleDropdownClick("about")}
              >
                Hakkımızda
                <Icon
                  icon="hugeicons:arrow-down-01"
                  className={`w-4 h-4 transition-transform ${
                    aboutDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {renderMegaMenu(dropdownData.about, aboutDropdownOpen)}
            </div>

            {/* Projeler Dropdown */}
            <div className="dropdown-container">
              <button
                className={`${linkStyle} flex items-center gap-1`}
                onClick={() => handleDropdownClick("projects")}
              >
                Projeler
                <Icon
                  icon="hugeicons:arrow-down-01"
                  className={`w-4 h-4 transition-transform ${
                    projectsDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {renderMegaMenu(dropdownData.projects, projectsDropdownOpen)}
            </div>

            {/* Etkinlikler Dropdown */}
            <div className="dropdown-container">
              <button
                className={`${linkStyle} flex items-center gap-1`}
                onClick={() => handleDropdownClick("events")}
              >
                Etkinlikler
                <Icon
                  icon="hugeicons:arrow-down-01"
                  className={`w-4 h-4 transition-transform ${
                    eventsDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {renderMegaMenu(dropdownData.events, eventsDropdownOpen)}
            </div>

            {/* Duyurular Dropdown */}
            <div className="dropdown-container">
              <button
                className={`${linkStyle} flex items-center gap-1`}
                onClick={() => handleDropdownClick("announcements")}
              >
                Duyurular
                <Icon
                  icon="hugeicons:arrow-down-01"
                  className={`w-4 h-4 transition-transform ${
                    announcementsDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {renderMegaMenu(
                dropdownData.announcements,
                announcementsDropdownOpen
              )}
            </div>

            {/* Galeri */}
            <a href="/gallery" className={linkStyle}>
              Galeri
            </a>

            {/* Blog Dropdown */}
            <div className="dropdown-container">
              <button
                className={`${linkStyle} flex items-center gap-1`}
                onClick={() => handleDropdownClick("blog")}
              >
                Blog
                <Icon
                  icon="hugeicons:arrow-down-01"
                  className={`w-4 h-4 transition-transform ${
                    blogDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {renderMegaMenu(dropdownData.blog, blogDropdownOpen)}
            </div>

            {/* Topluluk Dropdown */}
            <div className="dropdown-container">
              <button
                className={`${linkStyle} flex items-center gap-1`}
                onClick={() => handleDropdownClick("community")}
              >
                Topluluk
                <Icon
                  icon="hugeicons:arrow-down-01"
                  className={`w-4 h-4 transition-transform ${
                    communityDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {renderMegaMenu(dropdownData.community, communityDropdownOpen)}
            </div>
          </div>

          {/* Sağ taraf - Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {!isLogin ? (
              <>
                <Button variant="outline" href="/login" as="link">
                  Giriş Yap
                </Button>
                <Button variant="primary" href="/register" as="link">
                  Kayıt Ol
                </Button>
              </>
            ) : (
              <div className="flex items-center gap-3">
                <a href="/profile/poyraz" className="flex items-center gap-2">
                  <img
                    src="/avatars/poyraz.png"
                    alt="Profil"
                    className="w-8 h-8 rounded-full border border-neutral-600"
                  />
                  <span className="text-white text-sm hidden lg:block">
                    Poyraz
                  </span>
                </a>
                <Button variant="outline">
                  <Icon icon="hugeicons:notification-02" className="w-5 h-5" />
                </Button>
                <Button variant="outline">
                  <Icon icon="hugeicons:settings-02" className="w-5 h-5" />
                </Button>
              </div>
            )}
          </div>

          {/* Mobile hamburger menu */}
          <div className="md:hidden">
            <Button variant="outline" onClick={() => setMenuOpen(!menuOpen)}>
              <Icon
                icon={menuOpen ? "hugeicons:cancel-01" : "hugeicons:menu-02"}
                className="w-6 h-6"
              />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black fixed inset-0 top-[73px] z-50 overflow-y-auto"
            >
              {/* Ana Menü */}
              {!mobileSubMenu && (
                <div className="p-6 space-y-4">
                  {/* Hakkımızda */}
                  <button
                    onClick={() => setMobileSubMenu("about")}
                    className="flex items-center justify-between w-full text-white text-lg py-2 hover:text-secondary transition-colors"
                  >
                    <span>Hakkımızda</span>
                    <Icon icon="hugeicons:arrow-right-01" className="w-5 h-5" />
                  </button>

                  {/* Projeler */}
                  <button
                    onClick={() => setMobileSubMenu("projects")}
                    className="flex items-center justify-between w-full text-white text-lg py-2 hover:text-secondary transition-colors"
                  >
                    <span>Projeler</span>
                    <Icon icon="hugeicons:arrow-right-01" className="w-5 h-5" />
                  </button>

                  {/* Etkinlikler */}
                  <button
                    onClick={() => setMobileSubMenu("events")}
                    className="flex items-center justify-between w-full text-white text-lg py-2 hover:text-secondary transition-colors"
                  >
                    <span>Etkinlikler</span>
                    <Icon icon="hugeicons:arrow-right-01" className="w-5 h-5" />
                  </button>

                  {/* Duyurular */}
                  <button
                    onClick={() => setMobileSubMenu("announcements")}
                    className="flex items-center justify-between w-full text-white text-lg py-2 hover:text-secondary transition-colors"
                  >
                    <span>Duyurular</span>
                    <Icon icon="hugeicons:arrow-right-01" className="w-5 h-5" />
                  </button>

                  {/* Galeri */}
                  <a
                    href="/gallery"
                    className="block text-white text-lg py-2 hover:text-secondary transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    Galeri
                  </a>

                  {/* Blog */}
                  <button
                    onClick={() => setMobileSubMenu("blog")}
                    className="flex items-center justify-between w-full text-white text-lg py-2 hover:text-secondary transition-colors"
                  >
                    <span>Blog</span>
                    <Icon icon="hugeicons:arrow-right-01" className="w-5 h-5" />
                  </button>

                  {/* Topluluk */}
                  <button
                    onClick={() => setMobileSubMenu("community")}
                    className="flex items-center justify-between w-full text-white text-lg py-2 hover:text-secondary transition-colors"
                  >
                    <span>Topluluk</span>
                    <Icon icon="hugeicons:arrow-right-01" className="w-5 h-5" />
                  </button>

                  {!isLogin ? (
                    <div className="pt-4 space-y-3">
                      <Button
                        variant="outline"
                        href="/login"
                        as="link"
                        className="w-full"
                      >
                        Giriş Yap
                      </Button>
                      <Button
                        variant="primary"
                        href="/register"
                        as="link"
                        className="w-full"
                      >
                        Kayıt Ol
                      </Button>
                    </div>
                  ) : (
                    <div className="pt-4">
                      <a
                        href="/profile/poyraz"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-800 transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        <img
                          src="/avatars/poyraz.png"
                          alt="Profil"
                          className="w-10 h-10 rounded-full border border-neutral-600"
                        />
                        <span className="text-white">Poyraz</span>
                      </a>
                    </div>
                  )}
                </div>
              )}

              {/* Alt Menü */}
              {mobileSubMenu && (
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.3 }}
                  className="p-6 space-y-4"
                >
                  {/* Geri Butonu */}
                  <button
                    onClick={() => setMobileSubMenu(null)}
                    className="flex items-center gap-3 text-white text-lg py-2 hover:text-secondary transition-colors mb-6"
                  >
                    <Icon icon="hugeicons:arrow-left-01" className="w-5 h-5" />
                    <span>Geri</span>
                  </button>

                  {/* Başlık */}
                  <h3 className="text-white font-bold text-xl mb-6">
                    {
                      dropdownData[mobileSubMenu as keyof typeof dropdownData]
                        ?.title
                    }
                  </h3>

                  {/* Linkler */}
                  <div className="space-y-3">
                    {dropdownData[
                      mobileSubMenu as keyof typeof dropdownData
                    ]?.links.map((link: any, index: number) => (
                      <a
                        key={index}
                        href={link.href}
                        className="block text-neutral-300 hover:text-white transition-colors py-2 text-base border-b border-neutral-800 pb-3"
                        onClick={() => {
                          setMenuOpen(false);
                          setMobileSubMenu(null);
                        }}
                      >
                        {link.text}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
