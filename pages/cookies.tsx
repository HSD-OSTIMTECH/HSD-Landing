import React from "react";
import { Icon } from "@iconify/react";

const Cookies = () => (
  <section className="max-w-7xl mx-auto py-20 px-4 flex flex-col gap-10">
    <div className="flex flex-col items-center gap-2">
      <Icon icon="hugeicons:cookie" className="text-primary text-5xl mb-2" />
      <h1 className="text-4xl sm:text-5xl font-advent-pro font-bold text-center">Çerez Politikası</h1>
      <p className="text-neutral-400 text-lg text-center max-w-2xl mt-2">
        Bu web sitesi, kullanıcı deneyimini geliştirmek ve hizmetlerimizi sunmak için çerezler kullanır.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Çerez Nedir? */}
      <div className="bg-neutral-900 rounded-2xl border border-neutral-800 shadow-lg p-8 flex flex-col gap-4">
        <div className="flex items-center gap-3 mb-2">
          <Icon icon="hugeicons:info-circle" className="text-primary text-2xl" />
          <h2 className="text-xl font-semibold text-white">Çerez Nedir?</h2>
        </div>
        <p className="text-neutral-300">Çerezler, web siteleri tarafından tarayıcınıza kaydedilen küçük metin dosyalarıdır. Ziyaret ettiğiniz sitelerin sizi tanımasını ve tercihlerinizi hatırlamasını sağlar.</p>
      </div>
      {/* Kullanım Amaçları */}
      <div className="bg-neutral-900 rounded-2xl border border-neutral-800 shadow-lg p-8 flex flex-col gap-4">
        <div className="flex items-center gap-3 mb-2">
          <Icon icon="hugeicons:target-01" className="text-primary text-2xl" />
          <h2 className="text-xl font-semibold text-white">Kullanım Amaçları</h2>
        </div>
        <ul className="list-disc list-inside text-neutral-300 space-y-2">
          <li>Site işlevselliğini sağlamak</li>
          <li>Kullanıcı tercihlerini hatırlamak</li>
          <li>Analiz ve performans ölçümü yapmak</li>
        </ul>
      </div>
      {/* Çerezleri Yönetme */}
      <div className="bg-neutral-900 rounded-2xl border border-neutral-800 shadow-lg p-8 flex flex-col gap-4 md:col-span-2">
        <div className="flex items-center gap-3 mb-2">
          <Icon icon="hugeicons:settings-01" className="text-primary text-2xl" />
          <h2 className="text-xl font-semibold text-white">Çerezleri Yönetme</h2>
        </div>
        <p className="text-neutral-300">Tarayıcı ayarlarından çerezleri silebilir veya engelleyebilirsiniz. Ancak bu, bazı özelliklerin çalışmamasına neden olabilir. Çerez tercihlerinizi istediğiniz zaman değiştirebilirsiniz.</p>
      </div>
    </div>
    <div className="text-center text-neutral-500 text-sm mt-8">
      Son güncelleme: Temmuz 2025
    </div>
  </section>
);

export default Cookies;
