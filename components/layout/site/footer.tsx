import React from "react";
import { Icon } from "@iconify/react";
import {
  navigationData,
  socialMediaLinks,
  legalLinks,
} from "@/data/navigationData";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-950 text-white font-poppins border-t border-neutral-800">
      {/* Ana Footer İçeriği */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Topluluk Hakkında */}
          <div className="lg:col-span-1 flex flex-col gap-4 max-w-lg">
            <img src="/images/logo.png" alt="HSD Logo" className="w-36" />
            <p className="text-neutral-300 leading-relaxed text-sm">
              Ostim Teknik Üniversitesi'nde kurulmuş olan teknoloji topluluğumuz, öğrencilere modern teknolojiler eğitimi, networking platformu ve proje geliştirme imkanları sunmaktadır.
            </p>
          </div>
          {/* Hakkımızda Linkleri */}
          <div>
            <h5 className="text-sm font-medium text-neutral-300 mb-2">Hakkımızda</h5>
            <ul className="space-y-2 text-sm">
              {navigationData.about.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Diğer Linkler - Yakında */}
          <div className="flex flex-col gap-6">
            <div>
              <h5 className="text-sm font-medium text-neutral-300 mb-2">Projeler <span className="ml-2 px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">Yakında</span></h5>
            </div>
            <div>
              <h5 className="text-sm font-medium text-neutral-300 mb-2">Etkinlikler <span className="ml-2 px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">Yakında</span></h5>
            </div>
            <div>
              <h5 className="text-sm font-medium text-neutral-300 mb-2">Topluluk <span className="ml-2 px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">Yakında</span></h5>
            </div>
            <div>
              <h5 className="text-sm font-medium text-neutral-300 mb-2">Blog & İçerik <span className="ml-2 px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">Yakında</span></h5>
            </div>
          </div>
        </div>
      </div>

      {/* Alt Footer */}
      <div className="border-t border-neutral-800 bg-black">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-sm text-neutral-400">
              © 2025 HSD OSTİMTECH. Tüm hakları saklıdır.
            </div>

            {/* Yasal Linkler */}
            <div className="flex gap-6 text-sm">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </div>

            {/* Sosyal Medya */}
            <div className="flex gap-4">
              {Object.entries(socialMediaLinks).map(([key, href]) => {
                let icon = "";
                switch (key) {
                  case "instagram":
                    icon = "mdi:instagram";
                    break;
                  case "linkedin":
                    icon = "mdi:linkedin";
                    break;
                  case "medium":
                    icon = "mdi:medium";
                    break;
                  case "github":
                    icon = "mdi:github";
                    break;
                  case "email":
                    icon = "mdi:email";
                    break;
                  default:
                    icon = "mdi:link";
                }
                return (
                  <a
                    key={key}
                    href={key === "email" ? `mailto:${href}` : href}
                    target={key === "email" ? undefined : "_blank"}
                    rel={key === "email" ? undefined : "noopener noreferrer"}
                    className="bg-neutral-800 hover:bg-primary/20 p-2 rounded-lg transition-all duration-300 group"
                  >
                    <Icon
                      icon={icon}
                      className="text-neutral-400 group-hover:text-primary text-xl"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
