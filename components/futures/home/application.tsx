"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Button from "@/components/ui/button";

const ApplicationCta = () => {
  return (
    <section className="bg-black text-white py-20 lg:py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full border border-primary/20"
            >
              <Icon icon="mdi:account-plus" className="text-2xl text-primary" />
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-advent-pro text-left"
            >
              <span className="text-white">Bize </span>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Katılmak İster Misin?
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-neutral-300 font-poppins leading-relaxed text-left"
            >
              Alımlar açık mı hemen öğren! Teknoloji dünyasında kariyerine yön
              vermek, yenilikçi projeler geliştirmek ve başarılı bir ekibin
              parçası olmak için doğru zamanda doğru yerdesin.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <Button as="link" href="/about/careers" variant="primary">
                Topluluğa Katıl
              </Button>
              <Button as="link" href="/about/careers" variant="outline">
                Yönetim Ekibi Başvuru Sorgulama
              </Button>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-6 border-t border-neutral-800/50"
            >
              <div className="flex items-center gap-6 text-sm text-neutral-400 font-poppins">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:clock-outline" className="text-primary" />
                  <span>7/24 Başvuru</span>
                </div>
                <div className="w-px h-4 bg-neutral-700"></div>
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:account-group" className="text-primary" />
                  <span>Dinamik Ekip</span>
                </div>
                <div className="w-px h-4 bg-neutral-700"></div>
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:rocket-launch" className="text-primary" />
                  <span>Hızlı Değerlendirme</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <img
                src="/images/defaultImage.png"
                alt="Teknoloji ve Kariyer"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              {/* Optional overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationCta;
