"use client";
import React from "react";
import { motion } from "framer-motion";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Ayın Sosyal Medya Ekibi Seçildik",
      description:
        "Sosyal medya ekibimizin başarılı çalışmaları ve yaratıcı içerikleri ile ayın en başarılı sosyal medya ekibi ödülünü aldık.",
      date: "Eylül 2025",
      category: "Sosyal Medya",
      month: "09",
      year: "2025",
    },
    {
      id: 2,
      title: "Ayın Medium Yazarı Seçilen Ahmet",
      description:
        "Topluluk üyemiz Ahmet, kaliteli teknik içerikleri ve etkili yazma tarzı ile ayın Medium yazarı seçildi.",
      date: "Ağustos 2025",
      category: "İçerik Üretimi",
      month: "08",
      year: "2025",
    },
  ];

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
            <span className="text-white">Başarı </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Hikayelerimiz
            </span>
          </h1>

          <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            Topluluğumuzun elde ettiği önemli başarılar ve kazanımlar
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-neutral-600/50 to-transparent"></div>

          {/* Achievement Items */}
          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:gap-8`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-black z-10">
                  <div className="absolute inset-0 bg-primary rounded-full animate-pulse opacity-50"></div>
                </div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0
                      ? "md:text-right md:pr-8"
                      : "md:text-left md:pl-8"
                  }`}
                >
                  <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                    {/* Date Badge */}
                    <div
                      className={`inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-3 py-1 mb-4 ${
                        index % 2 === 0 ? "md:ml-auto" : ""
                      }`}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-primary text-xs font-medium">
                        {achievement.date}
                      </span>
                    </div>

                    {/* Category */}
                    <p
                      className={`text-neutral-400 text-sm font-medium mb-2 ${
                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      {achievement.category}
                    </p>

                    {/* Title */}
                    <h3
                      className={`text-xl font-bold text-white mb-3 font-advent-pro ${
                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      {achievement.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`text-neutral-300 leading-relaxed ${
                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      {achievement.description}
                    </p>
                  </div>
                </div>

                {/* Large Date Display - Desktop Only */}
                <div
                  className={`hidden md:block w-2/12 ${
                    index % 2 === 0 ? "md:pl-8" : "md:pr-8"
                  }`}
                >
                  <div
                    className={`${
                      index % 2 === 0 ? "text-left" : "text-right"
                    }`}
                  >
                    <div className="text-3xl font-bold text-primary font-advent-pro">
                      {achievement.month}
                    </div>
                    <div className="text-lg text-neutral-400 font-medium">
                      {achievement.year}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="bg-neutral-900/30 backdrop-blur-sm border border-neutral-800/50 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-2xl font-bold text-primary mb-2 font-advent-pro">
                  {achievements.length}
                </div>
                <div className="text-neutral-300 text-sm">Toplam Başarı</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2 font-advent-pro">
                  2025
                </div>
                <div className="text-neutral-300 text-sm">Aktif Yıl</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2 font-advent-pro">
                  {new Set(achievements.map((a) => a.category)).size}
                </div>
                <div className="text-neutral-300 text-sm">Farklı Kategori</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;
