"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

const questions = [
  {
    q: "HSD OSTIMTECH nedir?",
    a: "HSD OSTIMTECH, OSTİM Teknik Üniversitesi bünyesinde faaliyet gösteren bir öğrenci topluluğudur. Yazılım, teknoloji ve inovasyon odaklı etkinlikler ve projeler düzenler.",
  },
  {
    q: "Topluluğa nasıl üye olabilirim?",
    a: 'Ana sayfadaki "Hemen Üye Ol" butonuna tıklayarak veya profil sayfanızdan kayıt formunu doldurarak topluluğa üye olabilirsiniz.',
  },
  {
    q: "Etkinliklere kimler katılabilir?",
    a: "Etkinliklerimize OSTİM Teknik Üniversitesi öğrencileri başta olmak üzere tüm ilgililer katılabilir.",
  },
  {
    q: "Projeler nasıl yürütülüyor?",
    a: "Projeler, topluluk üyelerinin katılımıyla oluşturulan ekipler tarafından yürütülür. Proje detayları ve katılım için projeler sayfasını inceleyebilirsiniz.",
  },
  {
    q: "Şifremi unuttum, ne yapmalıyım?",
    a: 'Giriş ekranındaki "Şifreni mi unuttun?" bağlantısına tıklayarak şifre sıfırlama işlemini başlatabilirsiniz.',
  },
  {
    q: "Duyuruları nereden takip edebilirim?",
    a: 'Tüm güncel duyurulara "Duyurular" sayfasından ulaşabilirsiniz.',
  },
  {
    q: "Topluluk yönetimiyle nasıl iletişime geçebilirim?",
    a: "İletişim sayfasındaki formu doldurarak veya sosyal medya hesaplarımızdan bize ulaşabilirsiniz.",
  },
];

const Faq = () => {
  const [search, setSearch] = useState("");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const filtered = questions.filter(
    (q) =>
      q.q.toLowerCase().includes(search.toLowerCase()) ||
      q.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-advent-pro mb-4">
            <span className="text-white">Sıkça Sorulan </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Sorular
            </span>
          </h1>

          <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto mb-8">
            Merak ettiğiniz soruların cevaplarını burada bulabilirsiniz
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Soru ara..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-6 py-4 pl-12 rounded-xl border border-neutral-700 bg-neutral-900/50 backdrop-blur-sm text-white focus:outline-none focus:border-primary/50 placeholder:text-neutral-400 transition-colors"
              />
              <Icon
                icon="mdi:magnify"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 text-xl"
              />
            </div>
          </div>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-neutral-400 py-12"
            >
              <Icon
                icon="mdi:help-circle-outline"
                className="text-4xl mb-4 mx-auto"
              />
              <p>Aramanıza uygun bir soru bulunamadı.</p>
            </motion.div>
          )}

          {filtered.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800/50 rounded-xl overflow-hidden hover:border-primary/30 transition-colors"
            >
              <motion.button
                className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none group"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-primary/90 transition-colors">
                  {item.q}
                </h3>
                <motion.div
                  animate={{ rotate: openIdx === idx ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="text-primary text-xl flex-shrink-0 ml-4"
                >
                  <Icon icon="mdi:chevron-down" />
                </motion.div>
              </motion.button>

              <AnimatePresence initial={false}>
                {openIdx === idx && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.4, 0, 0.2, 1],
                      opacity: { duration: 0.2 },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-neutral-800/50">
                      <div className="pt-4 text-neutral-300 leading-relaxed">
                        {item.a}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="bg-neutral-900/30 backdrop-blur-sm border border-neutral-800/50 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-2xl font-bold text-primary mb-2 font-advent-pro">
                  {questions.length}
                </div>
                <div className="text-neutral-300 text-sm">Toplam Soru</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2 font-advent-pro">
                  {filtered.length}
                </div>
                <div className="text-neutral-300 text-sm">Bulunan Sonuç</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2 font-advent-pro">
                  24/7
                </div>
                <div className="text-neutral-300 text-sm">Destek</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Faq;
