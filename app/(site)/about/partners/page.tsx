"use client";
import React from "react";
import { motion } from "framer-motion";

const Partners = () => {
  const partners = [
    {
      id: 1,
      logo: "/partners/ostim.png",
      name: "Ostim Teknik Üniversitesi",
      href: "https://ostimteknik.edu.tr",
    },
    {
      id: 2,
      logo: "/partners/teknopark.png",
      name: "Ostim Teknopark",
      href: "https://ostimteknopark.com.tr",
    },
    {
      id: 3,  
      logo: "/partners/hsd.png",
      name: "Huawei HSD Programı",
      href: "https://developer.huawei.com/consumer/en/programs/hsd/",
    },
    {
      id: 4,
      logo: "/partners/ostimsanayi.png",
      name: "Ostim Sanayi Bölgesi",
      href: "https://www.ostim.org.tr/",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-advent-pro mb-4">
            <span className="text-white">Destekçi </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Kurumlarımız
            </span>
          </h1>

          <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            Topluluğumuza destek veren ve büyümemize katkıda bulunan değerli
            kurumlar
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="group"
            >
              <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 hover:bg-neutral-900/70">
                {/* Logo Container */}
                <div className="flex items-center justify-center h-24">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <div className="bg-neutral-900/30 backdrop-blur-sm border border-neutral-800/50 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-2xl font-bold text-primary mb-2 font-advent-pro">
                  {partners.length}
                </div>
                <div className="text-neutral-300 text-sm">Destekçi Kurum</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2 font-advent-pro">
                  2+
                </div>
                <div className="text-neutral-300 text-sm">Yıllık Destek</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2 font-advent-pro">
                  100%
                </div>
                <div className="text-neutral-300 text-sm">Güven & Destek</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Partners;
