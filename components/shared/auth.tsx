"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Button from "@/components/ui/button";

const Auth = () => {
  return (
    <div className="min-h-[70vh] bg-black text-white flex items-center justify-center">
      <div className="max-w-md mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-20 h-20 mx-auto bg-red-500/20 rounded-full flex items-center justify-center border border-red-500/30">
              <Icon
                icon="mdi:lock-outline"
                className="w-10 h-10 text-red-400"
              />
            </div>
          </motion.div>

          {/* Başlık */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-advent-pro text-3xl md:text-4xl font-bold mb-4"
          >
            Erişim <span className="text-red-400">Engellendi</span>
          </motion.h1>

          {/* Açıklama */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8"
          >
            <p className="text-xl text-neutral-300 mb-4">
              Bu sayfaya erişmek için giriş yapmanız gerekir.
            </p>
            <p className="text-neutral-400">
              Lütfen HSD OSTIMTECH hesabınızla giriş yapın veya yeni bir hesap
              oluşturun.
            </p>
          </motion.div>

          {/* Butonlar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              as="link"
              href="/login"
              variant="primary"
              className="flex items-center gap-2"
            >
              <Icon icon="mdi:login" className="w-4 h-4" />
              Giriş Yap
            </Button>
            <Button
              as="link"
              href="/register"
              variant="outline"
              className="flex items-center gap-2"
            >
              <Icon icon="mdi:account-plus" className="w-4 h-4" />
              Hesap Oluştur
            </Button>
          </motion.div>

          {/* Geri Dön Linki */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 pt-6 border-t border-neutral-800"
          >
            <Button
              as="link"
              href="/"
              variant="outline"
              className="text-neutral-400 hover:text-white text-sm flex items-center gap-2 mx-auto"
            >
              <Icon icon="mdi:arrow-left" className="w-4 h-4" />
              Ana Sayfaya Dön
            </Button>
          </motion.div>

          {/* Ek Bilgi */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-6 p-4 bg-neutral-900/50 rounded-lg border border-neutral-800"
          >
            <div className="flex items-start gap-3">
              <Icon
                icon="mdi:information-outline"
                className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0"
              />
              <div className="text-left">
                <p className="text-sm text-neutral-300 mb-1">
                  <strong>HSD OSTIMTECH Üyesi misiniz?</strong>
                </p>
                <p className="text-xs text-neutral-400">
                  Topluluk üyelerinin erişebileceği özel içerikler ve projeler
                  için giriş yapın.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Auth;
