"use client";
import React from "react";
import { motion } from "framer-motion";

const Team = () => {
  // Ana başkan
  const president = {
    name: "Ahmet Yılmaz",
    title: "Genel Başkan",
    avatar: "/avatars/defaultAvatar.png",
  };

  // Grup başkanları ve ekipleri
  const departments = [
    {
      id: 1,
      name: "Yazılım & Proje",
      leader: {
        name: "Mehmet Demir",
        avatar: "/avatars/defaultAvatar.png",
      },
      members: [
        { name: "Ali Kaya", avatar: "/avatars/defaultAvatar.png" },
        { name: "Ayşe Şahin", avatar: "/avatars/defaultAvatar.png" },
        { name: "Fatma Özkan", avatar: "/avatars/defaultAvatar.png" },
      ],
    },
    {
      id: 2,
      name: "Sosyal Medya & İçerik",
      leader: {
        name: "Zeynep Aydın",
        avatar: "/avatars/defaultAvatar.png",
      },
      members: [
        { name: "Burak Çelik", avatar: "/avatars/defaultAvatar.png" },
        { name: "Seda Koç", avatar: "/avatars/defaultAvatar.png" },
        { name: "Emre Yıldız", avatar: "/avatars/defaultAvatar.png" },
      ],
    },
    {
      id: 3,
      name: "Araştırma & Medium",
      leader: {
        name: "Oğuz Arslan",
        avatar: "/avatars/defaultAvatar.png",
      },
      members: [
        { name: "Merve Güneş", avatar: "/avatars/defaultAvatar.png" },
        { name: "Deniz Öztürk", avatar: "/avatars/defaultAvatar.png" },
        { name: "Can Polat", avatar: "/avatars/defaultAvatar.png" },
      ],
    },
    {
      id: 4,
      name: "Etkinlik ve Sponsorluk",
      leader: {
        name: "Elif Karaca",
        avatar: "/avatars/defaultAvatar.png",
      },
      members: [
        { name: "Murat Doğan", avatar: "/avatars/defaultAvatar.png" },
        { name: "Gizem Yılmaz", avatar: "/avatars/defaultAvatar.png" },
        { name: "Barış Kılıç", avatar: "/avatars/defaultAvatar.png" },
      ],
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
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-advent-pro mb-4">
            <span className="text-white">2025-2026 </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Yönetim Ekibi
            </span>
          </h1>

          <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            Topluluğumuzu yöneten dinamik ekibimizle tanışın
          </p>
        </motion.div>

        {/* Ana Başkan */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center mb-16"
        >
          <div className="text-center">
            <img
              src={president.avatar}
              alt={president.name}
              className="w-20 h-20 rounded-full mx-auto mb-3 border-2 border-primary/30"
            />
            <h3 className="text-lg font-semibold text-white mb-1">
              {president.name}
            </h3>
            <p className="text-primary text-sm">{president.title}</p>
          </div>

          {/* Connecting Lines */}
          <div className="mt-8 mb-8">
            <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-neutral-600/50"></div>
            <div className="w-80 h-px bg-gradient-to-r from-transparent via-neutral-600/50 to-transparent"></div>
            <div className="flex justify-between w-80">
              <div className="w-px h-12 bg-gradient-to-b from-neutral-600/50 to-transparent"></div>
              <div className="w-px h-12 bg-gradient-to-b from-neutral-600/50 to-transparent"></div>
              <div className="w-px h-12 bg-gradient-to-b from-neutral-600/50 to-transparent"></div>
              <div className="w-px h-12 bg-gradient-to-b from-neutral-600/50 to-transparent"></div>
            </div>
          </div>
        </motion.div>

        {/* Department Leaders */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {departments.map((dept, index) => (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center"
            >
              {/* Department Title */}
              <h3 className="text-sm font-medium text-neutral-400 mb-6 font-advent-pro">
                {dept.name}
              </h3>

              {/* Department Leader */}
              <div className="mb-8">
                <img
                  src={dept.leader.avatar}
                  alt={dept.leader.name}
                  className="w-16 h-16 rounded-full mx-auto mb-3 border border-neutral-600"
                />
                <h4 className="text-white font-medium">{dept.leader.name}</h4>
                <p className="text-neutral-400 text-xs mt-1">Grup Başkanı</p>
              </div>

              {/* Connecting Line */}
              <div className="flex justify-center mb-6">
                <div className="w-px h-8 bg-gradient-to-b from-neutral-600/50 to-transparent"></div>
              </div>

              {/* Team Members */}
              <div className="space-y-4">
                {dept.members.map((member, memberIndex) => (
                  <motion.div
                    key={memberIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1 + memberIndex * 0.1 + 0.3,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center"
                  >
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-12 h-12 rounded-full mx-auto mb-2 border border-neutral-700"
                    />
                    <h5 className="text-neutral-300 text-sm">{member.name}</h5>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <div className="bg-neutral-900/30 backdrop-blur-sm border border-neutral-800/50 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <div className="text-xl font-bold text-primary mb-1">1</div>
                <div className="text-neutral-400 text-sm">Genel Başkan</div>
              </div>
              <div>
                <div className="text-xl font-bold text-primary mb-1">4</div>
                <div className="text-neutral-400 text-sm">Grup Başkanı</div>
              </div>
              <div>
                <div className="text-xl font-bold text-primary mb-1">12</div>
                <div className="text-neutral-400 text-sm">Ekip Üyesi</div>
              </div>
              <div>
                <div className="text-xl font-bold text-primary mb-1">17</div>
                <div className="text-neutral-400 text-sm">Toplam Yönetici</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;
