import React from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-950 text-white font-poppins border-t border-neutral-800">
      {/* Ana Footer İçeriği */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Topluluk Hakkında */}
          <div className="lg:col-span-2 flex flex-col gap-4 max-w-lg">
            <img src="/images/logo.png" alt="HSD Logo" className="w-36" />
            <p className="text-neutral-300 leading-relaxed text-sm">
              Ostim Teknik Üniversitesi'nde kurulmuş olan teknoloji
              topluluğumuz, öğrencilere modern teknolojiler eğitimi, networking
              platformu ve proje geliştirme imkanları sunmaktadır.
            </p>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <div className="space-y-4">
              <div>
                <h5 className="text-sm font-medium text-neutral-300 mb-2">
                  Hakkımızda
                </h5>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="/about/vision"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      Vizyonumuz & Misyonumuz
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about/team"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      Yönetim Kadrosu
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about/achievements"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      Başarılarımız
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about/partners"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      Destekçilerimiz
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about/careers"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      Ekip Katılım Başvurusu
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="text-sm font-medium text-neutral-300 mb-2">
                  Projeler
                </h5>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="/projects/ongoing"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      Devam Eden Projeler
                    </a>
                  </li>
                  <li>
                    <a
                      href="/projects/completed"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      Tamamlanan Projeler
                    </a>
                  </li>
                  <li>
                    <a
                      href="/projects/apply"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      Proje Katılma Başvurusu
                    </a>
                  </li>
                  <li>
                    <a
                      href="/projects/mentors"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      Mentorlar & Danışmanlar
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Etkinlikler & Topluluk */}
          <div>
            <div className="space-y-4">
              <div>
                <h5 className="text-sm font-medium text-neutral-300 mb-2">
                  Etkinlikler
                </h5>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="/events/upcoming"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      Yaklaşan Etkinlikler
                    </a>
                  </li>
                  <li>
                    <a
                      href="/events/workshops"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      Workshop & Seminerler
                    </a>
                  </li>
                  <li>
                    <a
                      href="/events/hackathons"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      Hackathonlar
                    </a>
                  </li>
                  <li>
                    <a
                      href="/events/meetups"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      Topluluk Buluşmaları
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="text-sm font-medium text-neutral-300 mb-2">
                  Topluluk
                </h5>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="/community/github"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      GitHub Organizasyonu
                    </a>
                  </li>
                  <li>
                    <a
                      href="/community/linkedin"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      LinkedIn Grubumuz
                    </a>
                  </li>
                  <li>
                    <a
                      href="/community/study-groups"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      Çalışma Grupları
                    </a>
                  </li>
                  <li>
                    <a
                      href="/gallery"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      Galeri
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="text-sm font-medium text-neutral-300 mb-2">
                  Blog & İçerik
                </h5>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="/blog/tech"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      Teknoloji Yazıları
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog/medium"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      Medium Yazılarımız
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog/tutorials"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      Tutorials & Rehberler
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog/career"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      Kariyer Tavsiyeleri
                    </a>
                  </li>
                </ul>
              </div>
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
              <a
                href="/policy/privacy"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                Gizlilik Politikası
              </a>
              <a
                href="/policy/terms"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                Kullanım Şartları
              </a>
              <a
                href="/policy/cookies"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                Çerez Politikası
              </a>
            </div>

            {/* Sosyal Medya */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com/hsdostim"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-800 hover:bg-primary/20 p-2 rounded-lg transition-all duration-300 group"
              >
                <Icon
                  icon="mdi:instagram"
                  className="text-neutral-400 group-hover:text-primary text-xl"
                />
              </a>
              <a
                href="https://linkedin.com/company/hsdostim"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-800 hover:bg-primary/20 p-2 rounded-lg transition-all duration-300 group"
              >
                <Icon
                  icon="mdi:linkedin"
                  className="text-neutral-400 group-hover:text-primary text-xl"
                />
              </a>
              <a
                href="https://medium.com/@hsdostim"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-800 hover:bg-primary/20 p-2 rounded-lg transition-all duration-300 group"
              >
                <Icon
                  icon="mdi:medium"
                  className="text-neutral-400 group-hover:text-primary text-xl"
                />
              </a>
              <a
                href="https://github.com/HSD-OSTIMTECH"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-800 hover:bg-primary/20 p-2 rounded-lg transition-all duration-300 group"
              >
                <Icon
                  icon="mdi:github"
                  className="text-neutral-400 group-hover:text-primary text-xl"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
