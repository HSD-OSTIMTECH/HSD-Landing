"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Button from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-black text-white py-20 lg:py-32">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-neutral-800/30 backdrop-blur-sm border border-neutral-700/50 rounded-full px-4 py-2"
          >
            <Icon icon="mdi:rocket-launch" className="text-primary text-sm" />
            <span className="text-sm font-medium text-neutral-300 font-poppins">
              Öğrenci Topluluğu
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-advent-pro">
              <span className="block text-white">Huawei Student Developers</span>
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                OSTIM Teknik Üniversitesi
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto font-poppins"
          >
            Harika etkinlikleri kaçırmamak için hemen giriş yap, sen de bu
            etkinliklerde yer al! Modern teknolojiler eğitimi ve networking
            platformumuzla geleceğini şekillendir.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              variant="primary"
              className="px-8 py-3 font-poppins font-semibold"
            >
              Giriş Yap
            </Button>

            <Button
              variant="outline"
              className="px-8 py-3 font-poppins font-semibold"
            >
              <Icon icon="mdi:play-circle" className="text-lg mr-2" />
              Tanıtım Videosu
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center justify-center gap-8 pt-8"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-primary font-advent-pro">
                150+
              </div>
              <div className="text-sm text-neutral-400 font-poppins">
                Aktif Üye
              </div>
            </div>
            <div className="w-px h-12 bg-neutral-700/50" />
            <div className="text-center">
              <div className="text-2xl font-bold text-primary font-advent-pro">
                50+
              </div>
              <div className="text-sm text-neutral-400 font-poppins">Proje</div>
            </div>
            <div className="w-px h-12 bg-neutral-700/50" />
            <div className="text-center">
              <div className="text-2xl font-bold text-primary font-advent-pro">
                5
              </div>
              <div className="text-sm text-neutral-400 font-poppins">
                Yıl Deneyim
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
