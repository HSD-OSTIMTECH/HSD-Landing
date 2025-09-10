import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

const questions = [
    {
        q: 'HSD OSTIMTECH nedir?',
        a: 'HSD OSTIMTECH, OSTİM Teknik Üniversitesi bünyesinde faaliyet gösteren bir öğrenci topluluğudur. Yazılım, teknoloji ve inovasyon odaklı etkinlikler ve projeler düzenler.'
    },
    {
        q: 'Topluluğa nasıl üye olabilirim?',
        a: 'Ana sayfadaki “Hemen Üye Ol” butonuna tıklayarak veya profil sayfanızdan kayıt formunu doldurarak topluluğa üye olabilirsiniz.'
    },
    {
        q: 'Etkinliklere kimler katılabilir?',
        a: 'Etkinliklerimize OSTİM Teknik Üniversitesi öğrencileri başta olmak üzere tüm ilgililer katılabilir.'
    },
    {
        q: 'Projeler nasıl yürütülüyor?',
        a: 'Projeler, topluluk üyelerinin katılımıyla oluşturulan ekipler tarafından yürütülür. Proje detayları ve katılım için projeler sayfasını inceleyebilirsiniz.'
    },
    {
        q: 'Şifremi unuttum, ne yapmalıyım?',
        a: 'Giriş ekranındaki “Şifreni mi unuttun?” bağlantısına tıklayarak şifre sıfırlama işlemini başlatabilirsiniz.'
    },
    {
        q: 'Duyuruları nereden takip edebilirim?',
        a: 'Tüm güncel duyurulara “Duyurular” sayfasından ulaşabilirsiniz.'
    },
    {
        q: 'Topluluk yönetimiyle nasıl iletişime geçebilirim?',
        a: 'İletişim sayfasındaki formu doldurarak veya sosyal medya hesaplarımızdan bize ulaşabilirsiniz.'
    },
];

const Faq = () => {
    const [search, setSearch] = useState('');
    const [openIdx, setOpenIdx] = useState<number | null>(null);

    const filtered = questions.filter(q =>
        q.q.toLowerCase().includes(search.toLowerCase()) ||
        q.a.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className="min-h-[70vh] max-w-3xl mx-auto py-20 px-4 flex flex-col gap-10">
            <h1 className="text-3xl sm:text-4xl font-advent-pro font-bold text-center mb-2">Sıkça Sorulan Sorular</h1>
            <div className="flex justify-center mb-6">
                <input
                    type="text"
                    placeholder="Soru ara..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="w-full max-w-md px-5 py-3 rounded-full border border-neutral-700 bg-neutral-900 text-white focus:outline-none focus:border-primary placeholder:text-neutral-400 shadow-md"
                />
            </div>
            <div className="flex flex-col gap-4">
                {filtered.length === 0 && (
                    <div className="text-center text-neutral-400 py-8">Aramanıza uygun bir soru bulunamadı.</div>
                )}
                {filtered.map((item, idx) => (
                    <div key={idx} className="rounded-xl bg-neutral-900 border border-neutral-800 overflow-hidden shadow-sm">
                        <button
                            className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold text-white focus:outline-none group"
                            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                            aria-expanded={openIdx === idx}
                        >
                            <span>{item.q}</span>
                            <motion.span
                                animate={{ rotate: openIdx === idx ? 180 : 0 }}
                                transition={{ duration: 0.22 }}
                                className="ml-2 text-primary text-2xl flex items-center"
                            >
                                <Icon icon="hugeicons:circle-arrow-down-01" />
                            </motion.span>
                        </button>
                        <AnimatePresence initial={false}>
                            {openIdx === idx && (
                                <motion.div
                                    key="content"
                                    initial={{ scaleY: 0.95, opacity: 0, originY: 0 }}
                                    animate={{ scaleY: 1, opacity: 1, originY: 0 }}
                                    exit={{ scaleY: 0.95, opacity: 0, originY: 0 }}
                                    transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
                                    className="px-6 pb-5 text-base text-neutral-300"
                                    style={{ willChange: 'transform, opacity' }}
                                >
                                    {item.a}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faq;