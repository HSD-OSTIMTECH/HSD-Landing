import React from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

const CoreTeamCard = () => {
    return (
      <motion.div className="w-72 h-72 perspective cursor-pointer">
        <motion.div
          className="relative w-full h-full"
          whileHover={{ rotateY: 180 }}
          transition={{ duration: 0.8 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front Side */}
          <div className="absolute w-full h-full backface-hidden rounded-md overflow-hidden">
            <img
              src="/avatars/defaultAvatar.png"
              alt="AvatarPhoto"
              className="w-full h-full object-cover"
            />
            <p className="absolute right-2 bottom-2 font-semibold text-white drop-shadow">
              Default Avatar
            </p>
          </div>

          {/* Back Side */}
          <div className="absolute w-full h-full bg-gradient-to-b from-primary to-secondary text-white p-4 rounded-md backface-hidden transform rotateY-180 flex flex-col justify-center items-center gap-2 text-center">
            <h3 className="text-lg font-bold">Default Avatar</h3>
            <p className="text-sm text-gray-300 break-words whitespace-normal max-w-56">
              Yazılım Mühendisliği - Teknoloji Departmanı.
            </p>
            <p className="text-xs text-neutral-100 w-full max-w-72 break-words whitespace-normal text-center">
              Passionate about creating beautiful and functional interfaces.
              Loves working with React and Tailwind CSS. Always learning.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Icon
                  icon="hugeicons:instagram"
                  className="text-2xl hover:rotate-[360deg] transition-all duration-300"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Icon
                  icon="hugeicons:medium-square"
                  className="text-2xl hover:rotate-[360deg] transition-all duration-300"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Icon
                  icon="hugeicons:linkedin-01"
                  className="text-2xl hover:rotate-[360deg] transition-all duration-300"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
}

export default CoreTeamCard
