import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/button';

const mainMenus = [
  {
    label: "Projeler",
    icon: "hugeicons:modern-tv",
    color: "text-white",
    subLinks: [
      { label: "Proje Ekle", href: "/admin/projects/add" },
      { label: "Proje Düzenle", href: "/admin/projects/edit" },
    ],
  },
  {
    label: "Etkinlikler",
    icon: "hugeicons:calendar-01",
    color: "text-white",
    subLinks: [
      { label: "Etkinlik Ekle", href: "/admin/events/add" },
      { label: "Etkinlik Düzenle", href: "/admin/events/edit" },
    ],
  },
  {
    label: "Duyurular",
    icon: "hugeicons:megaphone-03",
    color: "text-white",
    subLinks: [
      { label: "Duyuru Ekle", href: "/admin/announcements/add" },
      { label: "Duyuru Düzenle", href: "/admin/announcements/edit" },
    ],
  },
  {
    label: "Galeri",
    icon: "hugeicons:image-03",
    color: "text-white",
    subLinks: [
      { label: "Fotoğraf Ekle", href: "/admin/gallery/add" },
      { label: "Fotoğraf Düzenle", href: "/admin/gallery/edit" },
    ],
  },
  {
    label: "Formlar",
    icon: "hugeicons:folder-attachment",
    color: "text-white",
    subLinks: [
      { label: "Form Ekle", href: "/admin/forms/add" },
      { label: "Form Düzenle", href: "/admin/forms/edit" },
      { label: "Formları İncele", href: "/admin/forms/manage" },
    ],
  },
];

const memberMenus = [
  {
    label: "Üyeler",
    icon: "hugeicons:user-list",
    href: "/admin/members",
  },
  {
    label: "Üye Onay",
    icon: "hugeicons:user-add-01",
    href: "/admin/members/approval",
  },
  {
    label: "Üye Düzenleme",
    icon: "hugeicons:user-edit-01",
    href: "/admin/members/edit",
  },
];

const AdminSidebar = () => {
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <aside className="bg-neutral-900 rounded-2xl p-4 w-full max-w-xs shadow-lg border border-neutral-800 flex flex-col h-full min-h-[90vh]">
      {/* Profil */}
      <div className="flex flex-col items-center gap-2 mb-4">
        <img
          src="/avatars/defaultAvatar.png"
          alt="Avatar"
          className="w-14 h-14 rounded-full object-cover border-2 border-primary"
        />
        <div className="text-white font-advent-pro text-xl font-semibold flex items-center gap-1">
          Hoş Geldin Poyraz <span className="text-lg">👋</span>
        </div>
      </div>

      <div className="text-neutral-400 text-xs font-poppins mb-2 px-2">
        Ana Menüler
      </div>
      <nav className="flex flex-col gap-1 mb-4">
        {mainMenus.map((menu) => (
          <div key={menu.label}>
            <button
              className="flex items-center w-full gap-3 px-4 py-2 rounded-lg text-white font-poppins text-base hover:bg-primary/10 transition-colors group"
              onClick={() => toggleMenu(menu.label)}
              type="button"
            >
              <Icon icon={menu.icon} className={`text-xl ${menu.color}`} />
              <span>{menu.label}</span>
              <Icon
                icon="hugeicons:arrow-down-01"
                className={`ml-auto text-lg transition-transform ${
                  openMenus[menu.label] ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {openMenus[menu.label] && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden pl-10"
                >
                  <div className="flex flex-col gap-1 py-1">
                    {menu.subLinks.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        className="block px-2 py-1 rounded text-neutral-300 hover:text-primary hover:bg-primary/10 text-sm transition-colors"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </nav>

      <div className="text-neutral-400 text-xs font-poppins mb-2 px-2">
        Üye Ayarları
      </div>
      <nav className="flex flex-col gap-1 mb-4">
        {memberMenus.map((menu) => (
          <a
            key={menu.label}
            href={menu.href}
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-white font-poppins text-base hover:bg-primary/10 transition-colors"
          >
            <Icon icon={menu.icon} className="text-xl text-white" />
            <span>{menu.label}</span>
          </a>
        ))}
      </nav>

      <div className="mt-auto flex flex-col gap-2">
        <a
          href="/admin/settings"
          className="flex items-center gap-3 px-4 py-2 rounded-lg text-white font-poppins text-base hover:bg-primary/10 transition-colors"
        >
          <Icon icon="hugeicons:settings-01" className="text-xl text-red-500" />
          <span>Ayarlar</span>
        </a>
        <Button
          type="button"
        >
          <Icon icon="hugeicons:logout-01" className="text-lg mr-2" />
          Çıkış Yap
        </Button>
      </div>
    </aside>
  );
};

export default AdminSidebar;