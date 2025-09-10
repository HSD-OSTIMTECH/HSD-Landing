
import React from 'react';
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer className="w-full text-white font-poppins border-t border-gray">
      <div className="max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 md:grid-cols-5 gap-8">

        <div className="md:col-span-2 pr-16">
          <h2 className="text-lg md:text-xl font-semibold mb-6">Bütün Güncellemelerden Haberdar Kalın</h2>

          <div className="flex items-center justify-between mt-4 py-2">
            <input placeholder="E-Posta Adresiniz" className="placeholder:text-base placeholder:md:text-lg focus:outline-none" />
            <Icon icon="hugeicons:arrow-up-right-01" className="text-primary text-2xl md:text-3xl" />
          </div>

          <div className="border-b border-gray mb-3" />

          <p className="text-xs md:text-sm text-neutral-300">
            Bültenimize abone olun ve ayrıcalıklı avantajlarla dolu bir dünyanın kapılarını aralayın. En yeni projelerimizi, özel etkinliklerimizi, ve heyecan verici güncellemelerimizden ilk siz haberdar olun.
          </p>

        </div>

        <div>
          <h3 className="text-base font-semibold mb-2">Etkinlikler</h3>
          <ul className="space-y-1">
            <li><a href="/events" className="hover:underline">Etkinlikler</a></li>
            <li><a href="/announcements" className="hover:underline">Duyurular</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-base font-semibold mb-2">Bilgi Al</h3>
          <ul className="space-y-1">
            <li><a href="/faq" className="hover:underline">SSS</a></li>
            <li><a href="/contact" className="hover:underline">İletişime Geç</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-base font-semibold mb-2">Topluluk</h3>
          <ul className="space-y-1">
            <li><a href="/about" className="hover:underline">Hakkımızda</a></li>
            <li><a href="/projects" className="hover:underline">Projelerimiz</a></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between border-t border-gray">

        <span className="text-xs md:text-sm">© 2025 Tüm Haklar Saklıdır</span>
        <div className="flex gap-4 my-2 md:my-0">
          <a href="/terms" className="text-xs md:text-sm hover:underline">Kullanım Şartları</a>
          <a href="/privacy" className="text-xs md:text-sm hover:underline">Gizlilik</a>
          <a href="/cookies" className="text-xs md:text-sm hover:underline">Çerezler</a>
        </div>
        <div className="flex gap-3">
          <a href="#" aria-label="Instagram">
            <Icon icon="hugeicons:instagram" className="text-secondary text-3xl hover:rotate-[360deg] transition-all duration-500" />
          </a>
          <a href="#" aria-label="Medium">
            <Icon icon="hugeicons:medium-square" className="text-secondary text-3xl hover:rotate-[360deg] transition-all duration-500" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <Icon icon="hugeicons:linkedin-01" className="text-secondary text-3xl hover:rotate-[360deg] duration-500" />
          </a>
          <a href="#" aria-label="YouTube">
            <Icon icon="hugeicons:youtube" className="text-secondary text-3xl hover:rotate-[360deg] transition-all duration-500" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;