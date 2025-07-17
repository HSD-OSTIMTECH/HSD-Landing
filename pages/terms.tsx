import React from "react";
import { Icon } from "@iconify/react";

const Terms = () => (
  <section className="max-w-7xl mx-auto py-20 px-4 flex flex-col gap-10">
    <div className="flex flex-col items-center gap-2">
      <Icon icon="hugeicons:document-text" className="text-primary text-5xl mb-2" />
      <h1 className="text-4xl sm:text-5xl font-advent-pro font-bold text-center">Kullanım Şartları</h1>
      <p className="text-neutral-400 text-lg text-center max-w-2xl mt-2">
        Web sitemizi kullanmadan önce lütfen bu şartları dikkatlice okuyunuz. Sitemizi kullanarak bu şartları kabul etmiş sayılırsınız.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Genel Kurallar */}
      <div className="bg-neutral-900 rounded-2xl border border-neutral-800 shadow-lg p-8 flex flex-col gap-4">
        <div className="flex items-center gap-3 mb-2">
          <Icon icon="hugeicons:shield-check" className="text-primary text-2xl" />
          <h2 className="text-xl font-semibold text-white">Genel Kurallar</h2>
        </div>
        <ul className="list-disc list-inside text-neutral-300 space-y-2">
          <li>Siteyi yalnızca yasal ve etik amaçlarla kullanabilirsiniz.</li>
          <li>İçeriklerin izinsiz kopyalanması, çoğaltılması veya dağıtılması yasaktır.</li>
          <li>Diğer kullanıcıların haklarına ve gizliliğine saygı gösterilmelidir.</li>
        </ul>
      </div>
      {/* Fikri Mülkiyet */}
      <div className="bg-neutral-900 rounded-2xl border border-neutral-800 shadow-lg p-8 flex flex-col gap-4">
        <div className="flex items-center gap-3 mb-2">
          <Icon icon="hugeicons:copyright" className="text-primary text-2xl" />
          <h2 className="text-xl font-semibold text-white">Fikri Mülkiyet</h2>
        </div>
        <p className="text-neutral-300">Site üzerindeki tüm içeriklerin (metin, görsel, logo, tasarım vb.) hakları saklıdır. İzinsiz kullanılamaz, kopyalanamaz veya çoğaltılamaz.</p>
      </div>
      {/* Sorumluluk Reddi */}
      <div className="bg-neutral-900 rounded-2xl border border-neutral-800 shadow-lg p-8 flex flex-col gap-4">
        <div className="flex items-center gap-3 mb-2">
          <Icon icon="hugeicons:info-circle" className="text-primary text-2xl" />
          <h2 className="text-xl font-semibold text-white">Sorumluluk Reddi</h2>
        </div>
        <p className="text-neutral-300">Site içeriği yalnızca bilgilendirme amaçlıdır. Sunulan bilgilerin doğruluğu ve güncelliği garanti edilmez. Kullanıcılar, sitedeki bilgilere dayanarak aldıkları kararlardan kendileri sorumludur.</p>
      </div>
      {/* Değişiklikler ve Güncellemeler */}
      <div className="bg-neutral-900 rounded-2xl border border-neutral-800 shadow-lg p-8 flex flex-col gap-4">
        <div className="flex items-center gap-3 mb-2">
          <Icon icon="hugeicons:refresh" className="text-primary text-2xl" />
          <h2 className="text-xl font-semibold text-white">Değişiklikler ve Güncellemeler</h2>
        </div>
        <p className="text-neutral-300">Kullanım şartları önceden haber verilmeksizin değiştirilebilir. Güncellemeleri takip etmek kullanıcının sorumluluğundadır. Değişiklikler bu sayfada yayınlandığı anda geçerli olur.</p>
      </div>
    </div>
    <div className="text-center text-neutral-500 text-sm mt-8">
      Son güncelleme: Temmuz 2025
    </div>
  </section>
);

export default Terms;
