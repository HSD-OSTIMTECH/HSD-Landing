"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const HSD = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-neutral-800/30 backdrop-blur-sm border border-neutral-700/50 rounded-full px-4 py-2"
            >
              <Icon icon="mdi:school" className="text-primary text-sm" />
              <span className="text-sm font-medium text-neutral-300 font-poppins">
                Küresel Program
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-advent-pro"
            >
              <span className="text-white">Huawei Student </span>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Developers
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-neutral-300 font-poppins leading-relaxed"
            >
              Teknoloji tutkusunu paylaşan üniversite öğrencilerine öğrenme
              ortamı sağlayan küresel program
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-8 px-4 sm:px-0">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
          >
            {/* Left Side - Content */}
            <div className="space-y-6">
              <div className="space-y-4 text-lg text-neutral-300 font-poppins leading-relaxed">
                <p>
                  <span className="text-primary">
                    Huawei Student Developers (HSD)
                  </span>
                  , teknoloji ve yazılım tutkusunu paylaşan üniversite
                  öğrencilerine; eğitimler ve etkinliklerle öğrenme ortamı
                  sağlayarak bilgi ve deneyimlerini geliştirme fırsatı sunan
                  küresel bir programdır.
                </p>
                <p>
                  Program, dünya çapında teknoloji alanında kendini geliştirmek
                  isteyen öğrencileri bir araya getirerek, onlara modern
                  teknolojiler hakkında kapsamlı eğitimler ve pratik deneyimler
                  sunmaktadır.
                </p>
                <p>
                  Huawei'nin küresel uzmanlığı ve kaynaklarıyla desteklenen bu
                  program, öğrencilerin kariyerlerinde önemli adımlar atmalarını
                  sağlamaktadır.
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative"
            >
              <img
                src="/images/defaultImage.png"
                alt="Huawei Student Developers Program"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <img
                src="/images/defaultImage.png"
                alt="HSD Program Faydaları"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 bg-neutral-800/30 backdrop-blur-sm border border-neutral-700/50 rounded-full px-4 py-2">
                <Icon icon="mdi:star" className="text-primary text-sm" />
                <span className="text-sm font-medium text-neutral-300 font-poppins">
                  Program Faydaları
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold font-advent-pro text-white">
                Neden{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  HSD?
                </span>
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                    <Icon icon="mdi:check" className="text-primary text-sm" />
                  </div>
                  <div>
                    <p className="text-neutral-300 font-poppins">
                      En güncel teknolojiler ve sektör trendleri hakkında
                      derinlemesine bilgi
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                    <Icon icon="mdi:check" className="text-primary text-sm" />
                  </div>
                  <div>
                    <p className="text-neutral-300 font-poppins">
                      Huawei ve partner şirketlerde staj ve kariyer imkanları
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                    <Icon icon="mdi:check" className="text-primary text-sm" />
                  </div>
                  <div>
                    <p className="text-neutral-300 font-poppins">
                      Deneyimli profesyonellerden birebir rehberlik ve destek
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                    <Icon icon="mdi:check" className="text-primary text-sm" />
                  </div>
                  <div>
                    <p className="text-neutral-300 font-poppins">
                      Gerçek dünya problemlerine çözüm geliştirme deneyimi
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HSD;
