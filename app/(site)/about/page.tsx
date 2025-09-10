"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Introduction Section with Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
          >
            {/* Left Side - Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-advent-pro text-white">
                HSD OSTİMTECH
              </h2>
              <div className="space-y-4 text-lg text-neutral-300 font-poppins leading-relaxed">
                <p>
                  <strong className="text-primary">HSD OSTİMTECH</strong>{" "}
                  (Huawei Student Developers Ostim Teknik Üniversitesi), Ostim
                  Teknik Üniversitesi bünyesinde kurulmuş bir öğrenci
                  topluluğudur.
                </p>
                <p>
                  Teknoloji dünyasına tutkuyla bağlı öğrencilerin bir araya
                  geldiği platformumuzda, yazılım geliştirme, mobil uygulamalar,
                  web teknolojileri ve yenilikçi projeler üzerine çalışmalar
                  yürütüyoruz.
                </p>
                <p>
                  Topluluğumuz, öğrencilerin teknik becerilerini
                  geliştirmelerine, sektör deneyimi kazanmalarına ve
                  birbirlerinden öğrenmelerine olanak sağlayan bir ortam
                  sunmaktadır.
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
                alt="HSD OSTİMTECH Topluluk"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              {/* Optional overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </motion.div>

          {/* Three Cards Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon
                    icon="mdi:code-braces"
                    className="text-primary text-2xl"
                  />
                </div>
                <h3 className="text-xl font-bold font-advent-pro text-white">
                  Geliştirme Odaklı
                </h3>
              </div>
              <p className="text-neutral-300 font-poppins leading-relaxed">
                Modern teknolojiler kullanarak kullanıcı dostu ve etkili
                çözümler geliştiriyor, öğrencilerin pratik deneyim kazanmasını
                sağlıyoruz.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6 hover:border-secondary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Icon
                    icon="mdi:account-group"
                    className="text-secondary text-2xl"
                  />
                </div>
                <h3 className="text-xl font-bold font-advent-pro text-white">
                  Topluluk Ruhu
                </h3>
              </div>
              <p className="text-neutral-300 font-poppins leading-relaxed">
                Bilgi paylaşımı, iş birliği ve karşılıklı öğrenme ilkeleriyle
                güçlü bir topluluk ağı oluşturuyor, herkesin gelişimine katkı
                sağlıyoruz.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon
                    icon="mdi:lightbulb-on"
                    className="text-primary text-2xl"
                  />
                </div>
                <h3 className="text-xl font-bold font-advent-pro text-white">
                  İnovasyon
                </h3>
              </div>
              <p className="text-neutral-300 font-poppins leading-relaxed">
                Yaratıcı düşünce ve yenilikçi yaklaşımlarla sektörde fark
                yaratan projeler geliştiriyor, geleceğin teknolojilerini
                şekillendiriyoruz.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 bg-neutral-800/30 backdrop-blur-sm border border-neutral-700/50 rounded-full px-4 py-2">
                <Icon icon="mdi:telescope" className="text-primary text-sm" />
                <span className="text-sm font-medium text-neutral-300 font-poppins">
                  Vizyonumuz
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold font-advent-pro text-white">
                Geleceği{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Şekillendiren
                </span>{" "}
                Teknoloji Liderleri
              </h2>

              <div className="space-y-4 text-lg text-neutral-300 font-poppins leading-relaxed">
                <p>
                  Teknoloji dünyasında öncü olan, yenilikçi çözümler üreten ve
                  toplumsal değişime katkı sağlayan bir öğrenci topluluğu olmayı
                  hedefliyoruz.
                </p>
                <p>
                  Dijital dönüşümün merkezinde yer alarak, gençlerin teknoloji
                  alanındaki potansiyellerini ortaya çıkarmak ve onları
                  geleceğin teknoloji liderleri haline getirmek vizyonumuzun
                  temelini oluşturuyor.
                </p>
                <p>
                  Küresel teknoloji ekosisteminde tanınan, saygın ve etkili bir
                  topluluk olarak, sürdürülebilir inovasyon kültürünü
                  yaygınlaştırmayı amaçlıyoruz.
                </p>
              </div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <img
                src="/images/defaultImage.png"
                alt="Vizyon - Geleceğin Teknoloji Liderleri"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
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
              className="relative order-2 lg:order-1"
            >
              <img
                src="/images/defaultImage.png"
                alt="Misyon - Teknoloji Eğitimi ve İnovasyon"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent rounded-2xl"></div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6 order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 bg-neutral-800/30 backdrop-blur-sm border border-neutral-700/50 rounded-full px-4 py-2">
                <Icon icon="mdi:target" className="text-secondary text-sm" />
                <span className="text-sm font-medium text-neutral-300 font-poppins">
                  Misyonumuz
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold font-advent-pro text-white">
                Teknoloji ile{" "}
                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  Güçlendirme
                </span>{" "}
                ve Eğitim
              </h2>

              <div className="space-y-4 text-lg text-neutral-300 font-poppins leading-relaxed">
                <p>
                  Öğrencilere kapsamlı teknoloji eğitimi sunarak, onların teorik
                  bilgilerini pratik deneyimlerle desteklemek ve sektörde
                  ihtiyaç duyulan becerileri kazandırmak misyonumuzun
                  merkezindedir.
                </p>
                <p>
                  İnovasyon odaklı projeler geliştirerek, öğrencilerin
                  yaratıcılığını ve problem çözme yeteneklerini artırmak, aynı
                  zamanda onları gerçek dünya teknoloji sorunlarıyla tanıştırmak
                  hedefliyoruz.
                </p>
                <p>
                  Topluluk üyelerinin kişisel ve profesyonel gelişimini
                  destekleyerek, onları teknoloji sektöründe başarılı kariyerler
                  inşa etmeye hazırlamak en temel görevimizdir.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
