"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const BentoSection = () => {
  const features = [
    {
      title: "Topluluk Yönetimi",
      description: "Üye kaydı, onayı ve yönetimi",
      icon: "mdi:account-group",
      stats: "150+ Aktif Üye",
      className: "lg:col-span-2 lg:row-span-2",
    },
    {
      title: "Etkinlik Organizasyonu",
      description: "Workshop, hackathon, seminer yönetimi",
      icon: "mdi:calendar-star",
      stats: "25+ Etkinlik",
      className: "lg:col-span-1 lg:row-span-1",
    },
    {
      title: "Proje Showcase",
      description: "Topluluk projelerinin sergilenmesi",
      icon: "mdi:rocket-launch",
      stats: "50+ Proje",
      className: "lg:col-span-1 lg:row-span-1",
    },
    {
      title: "Duyuru Sistemi",
      description: "Önemli bilgilendirmelerin üyelere ulaştırılması",
      icon: "mdi:bullhorn",
      stats: "7/24 Aktif",
      className: "lg:col-span-1 lg:row-span-1",
    },
    {
      title: "Eğitim Platformu",
      description: "Blog yazıları, rehberler ve öğrenme kaynakları",
      icon: "mdi:book-open-variant",
      stats: "100+ Kaynak",
      className: "lg:col-span-2 lg:row-span-1",
    },
    {
      title: "Modern Teknoloji",
      description: "Next.js 15, React 19, TypeScript ile geliştirildi",
      icon: "mdi:code-braces",
      stats: "2025 Teknoloji",
      className: "lg:col-span-1 lg:row-span-1",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto pb-24 px-4 sm:px-0">
      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`group relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:bg-neutral-900/70 ${feature.className}`}
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl border border-primary/20 mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <Icon icon={feature.icon} className="text-xl text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold font-advent-pro text-white mb-2 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-400 font-poppins text-sm leading-relaxed mb-4 flex-grow">
                {feature.description}
              </p>

              {/* Stats */}
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-medium text-primary font-poppins">
                  {feature.stats}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BentoSection;
