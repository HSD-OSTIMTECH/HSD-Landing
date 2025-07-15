import React from "react";
import { Icon } from "@iconify/react";
import Button from "../ui/button";

const links = [
  { 
    label: "Profil", 
    icon: "hugeicons:location-user-01", 
    href: "/profile" 
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
  return (
    <aside className="bg-neutral-900 rounded-2xl p-6 w-full max-w-xs h-[500px] shadow-lg border border-neutral-800 flex flex-col gap-6">
      {/* Profil */}
      <div className="flex flex-col items-center gap-2 mb-2">
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
      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-white font-poppins text-base hover:bg-primary/10 transition-colors"
          >
            <Icon icon={link.icon} className="text-xl text-primary" />
            <span>{link.label}</span>
          </a>
        ))}
      </nav>

      <div className="mt-6 border-t border-neutral-800 pt-4 flex flex-col gap-2">
        <Button>Çıkış Yap</Button>
      </div>
    </aside>
  );
};

export default SettingsSidebar;
