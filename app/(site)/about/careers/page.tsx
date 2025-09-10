'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Careers = () => {
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
            <span className="text-white">Yönetim Ekibine </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Katılın
            </span>
          </h1>
          
          <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            Teknoloji ve inovasyonun merkezi olan topluluğumuzda kariyer fırsatlarını keşfedin
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          {/* Status Card */}
          <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-12 mb-12">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-neutral-600 to-neutral-700 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-4 font-advent-pro">
                Alımlar Henüz Açık Değil
              </h2>
              
              <p className="text-neutral-300 leading-relaxed max-w-xl mx-auto mb-8">
                Şu anda yeni pozisyonlar için alım sürecimiz devam etmemektedir. 
                Gelecekteki fırsatlardan haberdar olmak için bizi takip etmeye devam edin.
              </p>
            </div>

            {/* Disabled Apply Button */}
            <button
              disabled
              className="px-8 py-4 bg-neutral-700 text-neutral-400 rounded-xl font-semibold cursor-not-allowed transition-all duration-300 mb-6"
            >
              Başvuru Kapalı
            </button>

            <p className="text-sm text-neutral-400">
              Alım süreci açıldığında bu sayfa güncellenecektir
            </p>
          </div>

          {/* Future Opportunities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            <div className="bg-neutral-900/30 backdrop-blur-sm border border-neutral-800/50 rounded-xl p-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 font-advent-pro">
                Gelişim Fırsatları
              </h3>
              <p className="text-neutral-300 text-sm">
                Kişisel ve profesyonel gelişim için birçok fırsat
              </p>
            </div>

            <div className="bg-neutral-900/30 backdrop-blur-sm border border-neutral-800/50 rounded-xl p-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 font-advent-pro">
                Takım Çalışması
              </h3>
              <p className="text-neutral-300 text-sm">
                Dinamik ve yenilikçi ekiplerle çalışma imkanı
              </p>
            </div>

            <div className="bg-neutral-900/30 backdrop-blur-sm border border-neutral-800/50 rounded-xl p-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 font-advent-pro">
                İnovasyon
              </h3>
              <p className="text-neutral-300 text-sm">
                Teknoloji alanında yenilikçi projelerde yer alma
              </p>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm border border-neutral-800/50 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4 font-advent-pro">
              Haberdar Olmak İster Misiniz?
            </h3>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Yeni pozisyonlar açıldığında ilk siz haberdar olun. 
              Sosyal medya hesaplarımızı takip ederek güncel kalın.
            </p>
            
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl transition-colors"
              >
                LinkedIn'de Takip Et
              </a>
              <a
                href="#"
                className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl transition-colors"
              >
                Instagram'da Takip Et
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Careers