import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Button from "../ui/button";

const links = [
  { 
    label: "Profil", 
    icon: "hugeicons:location-user-01", 
    href: "/settings" 
},
  {
    label: "Hesap Güvenliği",
    icon: "hugeicons:security",
    href: "/settings/security",
  },
  {
    label: "Tema Ayarları",
    icon: "hugeicons:three-d-move",
    href: "/settings/theme",
  },
  {
    label: "Bildirimler",
    icon: "hugeicons:notification-01",
    href: "/settings/notifications",
  },
];


const SettingsSidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button - always visible, position changes on desktop */}
      <button
        className="fixed top-6 left-4 lg:top-8 lg:left-8 z-50 bg-neutral-900 border border-neutral-800 rounded-full p-2 shadow-lg"
        onClick={() => setOpen(true)}
        aria-label="Ayarlar Menüsünü Aç"
      >
        <Icon icon="hugeicons:menu-01" className="text-2xl text-primary" />
      </button>

      {/* Sidebar - always drawer, both mobile and desktop */}
      <aside
        className={`
          bg-neutral-900 rounded-2xl p-4 sm:p-6 w-full max-w-[90vw] lg:max-w-xs shadow-lg border border-neutral-800 flex flex-col gap-4 sm:gap-6 mx-auto
          transition-transform duration-300
          fixed top-0 left-0 h-full z-50
          ${open ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Kapat butonu - her zaman */}
        <button
          className="absolute top-4 right-4 text-neutral-400 hover:text-red-500 text-2xl"
          onClick={() => setOpen(false)}
          aria-label="Menüyü Kapat"
        >
          <Icon icon="hugeicons:cancel-01" />
        </button>

        {/* Profil */}
        <div className="flex flex-col items-center gap-2 mb-2 mt-8 lg:mt-0">
          <img
            src="/avatars/defaultAvatar.png"
            alt="Avatar"
            className="w-16 h-16 rounded-full object-cover border-2 border-primary"
          />
          <div className="text-white font-advent-pro text-lg font-semibold">
            Hoş Geldin Poyraz <span className="text-xl">👋</span>
          </div>
          <div className="text-neutral-400 font-poppins text-sm">
            240205433@ostimtech.edu.tr
          </div>
        </div>

        {/* Linkler */}
        <nav className="flex flex-col gap-2 w-full">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-3 px-3 sm:px-4 py-2 rounded-lg text-white font-poppins text-base hover:bg-primary/10 transition-colors w-full"
              onClick={() => setOpen(false)}
            >
              <Icon icon={link.icon} className="text-xl text-primary" />
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        <div className="mt-4 sm:mt-6 border-t border-neutral-800 pt-4 flex flex-col gap-2 w-full">
          <Button className="w-full">Çıkış Yap</Button>
        </div>
      </aside>

      {/* Overlay - sidebar açıkken her zaman */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default SettingsSidebar;
