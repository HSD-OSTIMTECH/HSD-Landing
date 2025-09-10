import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl?: string;
  githubUrl?: string;
  projectUrl?: string;
  technologies?: string[];
  status?: "completed" | "ongoing" | "planned";
  teamSize?: number;
  duration?: string;
  category?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl = "/images/defaultImage.png",
  githubUrl = "#",
  projectUrl = "#",
  technologies = [],
  status = "completed",
  teamSize,
  duration,
  category,
}) => {
  const statusConfig = {
    completed: {
      label: "Tamamlandı",
      color: "bg-green-600/20 text-green-400",
      icon: "mdi:check-circle",
    },
    ongoing: {
      label: "Devam Ediyor",
      color: "bg-blue-600/20 text-blue-400",
      icon: "mdi:clock-outline",
    },
    planned: {
      label: "Planlandı",
      color: "bg-yellow-600/20 text-yellow-400",
      icon: "mdi:calendar-outline",
    },
  };

  return (
    <motion.div
      className="group bg-neutral-900/50 rounded-2xl overflow-hidden border border-neutral-800 w-full shadow-lg transition-all duration-300 flex flex-col relative cursor-pointer hover:border-secondary/50"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Proje Görseli */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span
            className={`${statusConfig[status].color} px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm flex items-center gap-1`}
          >
            <Icon icon={statusConfig[status].icon} className="w-4 h-4" />
            {statusConfig[status].label}
          </span>
        </div>

        {/* Category Badge */}
        {category && (
          <div className="absolute top-4 left-4">
            <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
              {category}
            </span>
          </div>
        )}

        {/* Gradient Overlay for hover state */}
        <motion.div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Proje İçeriği */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-advent-pro text-xl font-bold mb-3 text-white group-hover:text-secondary transition-colors line-clamp-2">
          {title}
        </h3>

        <p className="text-neutral-400 text-sm mb-4 line-clamp-3 flex-1">
          {description}
        </p>

        {/* Teknolojiler */}
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="bg-neutral-800/50 text-neutral-300 px-3 py-1 rounded-full text-xs border border-neutral-700"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 3 && (
              <span className="bg-neutral-800/50 text-neutral-300 px-3 py-1 rounded-full text-xs border border-neutral-700">
                +{technologies.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Proje Detayları */}
        {(teamSize || duration) && (
          <div className="flex items-center gap-4 text-xs text-neutral-500 mb-4">
            {teamSize && (
              <div className="flex items-center gap-1">
                <Icon icon="mdi:account-group" className="w-4 h-4" />
                <span>{teamSize} kişi</span>
              </div>
            )}
            {duration && (
              <div className="flex items-center gap-1">
                <Icon icon="mdi:clock-outline" className="w-4 h-4" />
                <span>{duration}</span>
              </div>
            )}
          </div>
        )}

        {/* Proje Linkleri */}
        <div className="flex gap-2 mt-auto">
          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-neutral-800/50 hover:bg-neutral-700 px-4 py-2 rounded-lg text-sm transition-all duration-200 flex-1 justify-center border border-neutral-700 hover:border-neutral-600"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Icon icon="mdi:github" className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub</span>
          </motion.a>

          {projectUrl !== "#" && (
            <motion.a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-secondary/10 hover:bg-secondary/20 text-secondary border border-secondary/30 hover:border-secondary/50 px-4 py-2 rounded-lg text-sm transition-all duration-200 flex-1 justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Icon icon="mdi:open-in-new" className="w-4 h-4" />
              <span className="hidden sm:inline">Demo</span>
            </motion.a>
          )}
        </div>
      </div>

      {/* Hover Overlay Effect */}
      <motion.div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-purple-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
    </motion.div>
  );
};

export default ProjectCard;
