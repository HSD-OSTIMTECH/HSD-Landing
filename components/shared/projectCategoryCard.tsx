import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

type ProjectCategoryCardProps = {
  title: string;
  imageUrl?: string;
  isSelected?: boolean;
  onClick?: () => void;
};

const ProjectCategoryCard: React.FC<ProjectCategoryCardProps> = ({
  title,
  imageUrl = "/images/defaultImage.png",
  isSelected = false,
  onClick = () => {},
}) => {
  return (
    <motion.button
      onClick={onClick}
      initial={false}
      animate={{
        scale: isSelected ? 1.03 : 1,
        borderColor: isSelected ? "#ef4444" : "#737373",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative bg-neutral-900 rounded-2xl border p-4 w-full font-poppins overflow-visible text-left cursor-pointer"
    >
      {/* Alt katmanlar */}
      <div className="absolute top-8 left-0 w-full h-36 bg-neutral-700 rounded-2xl opacity-60 z-0" />
      <div className="absolute top-14 left-0 w-full h-32 bg-neutral-600 rounded-2xl opacity-40 z-0" />

      {/* Asıl içerik */}
      <div className="relative z-10">
        <h3 className="text-white text-xl font-semibold mb-3">{title}</h3>

        <div className="relative">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-48 object-cover rounded-2xl"
          />

          {/* Kırmızı overlay */}
          <div className="absolute inset-0 bg-primary opacity-40 rounded-2xl pointer-events-none" />

          {/* Sağ alt ok ikonu */}
          <motion.div
            animate={{
              y: isSelected ? 6 : 0,
              rotate: isSelected ? 180 : 0,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute -bottom-7 right-6 bg-primary rounded-full w-16 h-16 flex items-center justify-center shadow-lg border-4 border-neutral-900 z-20"
          >
            <Icon
              icon="hugeicons:arrow-down-01"
              className="text-white text-3xl"
            />
          </motion.div>
        </div>
      </div>
    </motion.button>
  );
};

export default ProjectCategoryCard;
