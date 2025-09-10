"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/shared/projectCard";
import Button from "@/components/ui/button";

const CompletedProject = () => {
  // Örnek tamamlanan projeler
  const completedProjects = [
    {
      id: 1,
      title: "E-Ticaret Platformu",
      description:
        "Modern ve kullanıcı dostu e-ticaret çözümü. React ve Node.js teknolojileri kullanılarak geliştirildi. Kapsamlı ürün kataloğu, güvenli ödeme sistemi ve kullanıcı yönetimi özellikleri içerir.",
      imageUrl: "/images/defaultImage.png",
      githubUrl: "https://github.com/hsdostim/ecommerce",
      projectUrl: "https://demo-ecommerce.hsdostim.com",
    },
    {
      id: 2,
      title: "Mobil Fintech Uygulaması",
      description:
        "Güvenli ve hızlı para transferi sağlayan mobil bankacılık uygulaması. React Native ile cross-platform geliştirildi. Biyometrik kimlik doğrulama ve gelişmiş güvenlik özellikleri.",
      imageUrl: "/images/defaultImage.png",
      githubUrl: "https://github.com/hsdostim/fintech-app",
      projectUrl: "#",
    },
    {
      id: 3,
      title: "AI Görüntü Analizi Sistemi",
      description:
        "Makine öğrenmesi algoritmaları kullanarak görüntü tanıma ve analiz yapan yapay zeka sistemi. Medikal görüntülerin analizi ve otomatik tanı desteği sağlar.",
      imageUrl: "/images/defaultImage.png",
      githubUrl: "https://github.com/hsdostim/ai-vision",
      projectUrl: "https://ai-vision.hsdostim.com",
    },
    {
      id: 4,
      title: "IoT Akıllı Ev Sistemi",
      description:
        "Arduino ve Raspberry Pi kullanılarak geliştirilen kapsamlı akıllı ev otomasyon sistemi. Aydınlatma, güvenlik ve iklim kontrolü özellikleri içerir.",
      imageUrl: "/images/defaultImage.png",
      githubUrl: "https://github.com/hsdostim/smart-home",
      projectUrl: "#",
    },
    {
      id: 5,
      title: "Blockchain Voting System",
      description:
        "Güvenli ve şeffaf oylama sistemi. Ethereum blockchain teknolojisi kullanılarak geliştirildi. Manipüle edilemez oy kayıtları ve gerçek zamanlı sonuç takibi.",
      imageUrl: "/images/defaultImage.png",
      githubUrl: "https://github.com/hsdostim/blockchain-voting",
      projectUrl: "https://voting.hsdostim.com",
    },
    {
      id: 6,
      title: "Video Konferans Platformu",
      description:
        "WebRTC teknolojisi kullanılarak geliştirilen gerçek zamanlı video konferans uygulaması. Ekran paylaşımı, chat ve kayıt özellikleri ile tam teşekküllü toplantı çözümü.",
      imageUrl: "/images/defaultImage.png",
      githubUrl: "https://github.com/hsdostim/video-conference",
      projectUrl: "https://meet.hsdostim.com",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-0 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="font-advent-pro text-4xl md:text-6xl font-bold mb-6">
            Tamamlanan <span className="text-secondary">Projeler</span>
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-8">
            HSD OSTIMTECH topluluğu olarak tamamladığımız projelerimizi
            keşfedin. Her proje, öğrencilerimizin teknik becerilerini
            geliştirdiği değerli deneyimlerdir.
          </p>

          {/* İstatistikler */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800">
              <div className="text-3xl font-bold text-secondary mb-2">12+</div>
              <div className="text-neutral-300">Tamamlanan Proje</div>
            </div>
            <div className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800">
              <div className="text-3xl font-bold text-secondary mb-2">50+</div>
              <div className="text-neutral-300">Katılımcı Öğrenci</div>
            </div>
            <div className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800">
              <div className="text-3xl font-bold text-secondary mb-2">6</div>
              <div className="text-neutral-300">Farklı Kategori</div>
            </div>
          </div>
        </motion.div>

        {/* Projeler Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {completedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                githubUrl={project.githubUrl}
                projectUrl={project.projectUrl}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompletedProject;
