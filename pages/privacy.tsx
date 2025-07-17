import React from "react";
import { Icon } from "@iconify/react";

const Privacy = () => (
    <section className="max-w-7xl mx-auto py-20 px-4 flex flex-col gap-10">
        <div className="flex flex-col items-center gap-2">
            <Icon icon="hugeicons:lock-01" className="text-primary text-5xl mb-2" />
            <h1 className="text-4xl sm:text-5xl font-advent-pro font-bold text-center">Gizlilik Politikası</h1>
            <p className="text-neutral-400 text-lg text-center max-w-2xl mt-2">
                Gizliliğiniz bizim için önemlidir. Bu politika, hangi bilgileri topladığımızı ve nasıl kullandığımızı açıklar.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Toplanan Bilgiler */}
            <div className="bg-neutral-900 rounded-2xl border border-neutral-800 shadow-lg p-8 flex flex-col gap-4">
                <div className="flex items-center gap-3 mb-2">
                    <Icon icon="hugeicons:database-01" className="text-primary text-2xl" />
                    <h2 className="text-xl font-semibold text-white">Toplanan Bilgiler</h2>
                </div>
                <ul className="list-disc list-inside text-neutral-300 space-y-2">
                    <li>Kullanıcıdan alınan ad, e-posta ve mesaj gibi bilgiler.</li>
                    <li>Çerezler ve analiz araçları ile toplanan teknik veriler.</li>
                </ul>
            </div>
            {/* Bilgi Kullanımı */}
            <div className="bg-neutral-900 rounded-2xl border border-neutral-800 shadow-lg p-8 flex flex-col gap-4">
                <div className="flex items-center gap-3 mb-2">
                    <Icon icon="hugeicons:send-01" className="text-primary text-2xl" />
                    <h2 className="text-xl font-semibold text-white">Bilgi Kullanımı</h2>
                </div>
                <p className="text-neutral-300">Toplanan bilgiler yalnızca iletişim, hizmet geliştirme ve kullanıcı deneyimini iyileştirme amacıyla kullanılır.</p>
            </div>
            {/* Üçüncü Taraflarla Paylaşım */}
            <div className="bg-neutral-900 rounded-2xl border border-neutral-800 shadow-lg p-8 flex flex-col gap-4">
                <div className="flex items-center gap-3 mb-2">
                    <Icon icon="hugeicons:users-group" className="text-primary text-2xl" />
                    <h2 className="text-xl font-semibold text-white">Üçüncü Taraflarla Paylaşım</h2>
                </div>
                <p className="text-neutral-300">Kişisel bilgileriniz izniniz olmadan üçüncü taraflarla paylaşılmaz. Yasal zorunluluklar dışında bilgileriniz gizli tutulur.</p>
            </div>
            {/* Güvenlik */}
            <div className="bg-neutral-900 rounded-2xl border border-neutral-800 shadow-lg p-8 flex flex-col gap-4">
                <div className="flex items-center gap-3 mb-2">
                    <Icon icon="hugeicons:shield-keyhole" className="text-primary text-2xl" />
                    <h2 className="text-xl font-semibold text-white">Güvenlik</h2>
                </div>
                <p className="text-neutral-300">Verilerinizin güvenliği için teknik ve idari önlemler alınmaktadır. Ancak internet üzerinden iletilen verilerin tam güvenliği garanti edilemez.</p>
            </div>
        </div>
        <div className="text-center text-neutral-500 text-sm mt-8">
            Son güncelleme: Temmuz 2025
        </div>
    </section>
);

export default Privacy;
