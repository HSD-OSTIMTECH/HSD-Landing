import React, { useState } from 'react';
import Button from '../ui/button';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';

export type AnnouncementCardProps = {
  title: string;
  author: string;
  date: string;
  time: string;
  content: string;
};

const AnnouncementCard: React.FC<AnnouncementCardProps> = ({
  title,
  author,
  date,
  time,
  content,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-gray rounded-2xl p-4 w-full max-w-xl border border-neutral-800">
        <div className="bg-black h-full rounded-xl p-6 flex flex-col justify-between">
          <h2 className="font-advent-pro font-semibold text-white text-2xl md:text-3xl mb-4 leading-snug">
            {title}
          </h2>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2 font-poppins text-white text-base">
              <Icon icon="hugeicons:location-user-01" className='text-primary text-2xl'/>
              <span>{author}</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-4 font-poppins text-neutral-400 text-base">
              <span>
                {" "}
                <span className="font-semibold">Tarih:</span> {date}{" "}
              </span>
              <span>
                {" "}
                <span className="font-semibold">Saat:</span> {time}{" "}
              </span>
            </div>
            <Button variant="primary" onClick={() => setShowModal(true)}>
              Duyuru Detayları
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray rounded-2xl p-6 max-w-lg w-full border border-neutral-800 shadow-lg relative"
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <button
                className="absolute top-4 right-4 text-white text-xl font-bold cursor-pointer hover:text-secondary transition-colors"
                onClick={() => setShowModal(false)}
                aria-label="Kapat"
              >
                <Icon icon="mdi:close" />
              </button>
              <h2 className="font-advert-pro text-white text-2xl md:text-3xl mb-4 leading-snug">
                {title}
              </h2>
              <div className="font-poppins text-neutral-300 mb-4">{content}</div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                <div className="flex items-center gap-2 font-poppins text-white text-base">
                  <span className="text-primary">📌</span>
                  <span>{author}</span>
                </div>
                <div className="flex gap-4 font-poppins text-neutral-400 text-base">
                  <span>
                    <span className="font-semibold">Tarih:</span> {date}
                  </span>
                  <span>
                    <span className="font-semibold">Saat:</span> {time}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AnnouncementCard;