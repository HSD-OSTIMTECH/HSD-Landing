import React, { useState } from "react";

const achievements = [
  { label: "Başarımlar", active: true },
  { label: "Sertifikalar", active: false },
  { label: "Katılanan Etkinlikler", active: false },
];


const Profile = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-black">
      {/* Üst görsel */}
      <div className="w-full h-40 md:h-56 lg:h-64 relative overflow-hidden">
        <img
          src="/images/defaultImage.png"
          alt="Profile Header"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 mt-[-80px] relative z-10 px-2 sm:px-4">
        {/* Sol Kart */}
        <div className="bg-neutral-900 rounded-3xl p-6 sm:p-8 w-full max-w-xs flex flex-col items-center shadow-lg border border-neutral-800 mx-auto lg:mx-0">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden mb-4">
            <img
              src="/avatars/defaultAvatar.png"
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-white text-xl sm:text-2xl font-advent-pro font-semibold mb-1 text-center">
            Poyraz Avsever
          </h2>
          <div className="text-neutral-400 font-poppins mb-2 text-center">
            Yazılım Mühendisliği
          </div>
          <div className="text-neutral-300 font-poppins text-center text-base mb-4">
            Selam ben Poyraz! HSD Core Team'de üyeyim. Yazılıma ve tasarıma ilgi duyuyorum
          </div>
          <div className="flex gap-3 mb-4 flex-wrap justify-center">
            <a href="#" className="text-white text-xl hover:text-primary">
              <i className="ri-linkedin-fill" />
            </a>
            <a href="#" className="text-white text-xl hover:text-primary">
              <i className="ri-github-fill" />
            </a>
            <a href="#" className="text-white text-xl hover:text-primary">
              <i className="ri-mail-fill" />
            </a>
            <a href="#" className="text-white text-xl hover:text-primary">
              <i className="ri-camera-fill" />
            </a>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="bg-primary/30 border border-primary text-white px-3 py-1 rounded-full text-xs sm:text-sm font-poppins">
              Core Team
            </span>
            <span className="bg-blue-700/30 border border-blue text-white px-3 py-1 rounded-full text-xs sm:text-sm font-poppins">
              Proje Ekibi
            </span>
            <span className="bg-neutral-800/30 border border-neutral-800 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-poppins">
              Üye
            </span>
            <span className="bg-green-700/30 border border-green-700 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-poppins">
              Sosyal Medya Ekibi
            </span>
          </div>
        </div>

        {/* Sağ İçerik */}
        <div className="flex-1 w-full">
          {/* Tablar */}
          <div className="flex flex-wrap gap-2 my-8 justify-center lg:justify-start">
            {achievements.map((tab, idx) => (
              <button
                key={tab.label}
                className={`px-4 sm:px-6 py-2 rounded-lg font-poppins text-base transition-colors ${
                  activeTab === idx
                    ? "bg-primary text-white"
                    : "bg-neutral-900 text-white"
                }`}
                onClick={() => setActiveTab(idx)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {/* İçerik */}
          <div className="flex flex-col gap-4 items-center justify-center min-h-[120px]">
            <p className="text-neutral-400 font-poppins text-base text-center">
              Şuan için bir içerik bulunmuyor. Lütfen daha sonra tekrar kontrol edin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
