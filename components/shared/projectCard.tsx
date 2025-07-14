import React from 'react';
import { motion } from 'framer-motion';

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl?: string;
  githubUrl?: string;
  projectUrl?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl = '/images/defaultImage.png',
  githubUrl = '#',
  projectUrl = '#',
}) => {
  return (
    <motion.div
      className="group bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 w-full max-w-3xl shadow-lg font-poppins transition-all duration-300 flex flex-col relative cursor-pointer"
      initial={{ backgroundColor: "#181818" }}
      whileHover={{ backgroundColor: "#000" }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 md:h-64 object-cover"
        />
      </div>
      <div className="p-6">
        <h2 className="text-white text-3xl font-bold mb-2">{title}</h2>
        <p className="text-neutral-400 text-base line-clamp-2">{description}</p>
      </div>
      {/* Absolute overlay covers the whole card on hover */}
      <motion.div
        className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-95 flex flex-col justify-center items-start p-6 z-20"
        initial={{ opacity: 0, y: 40 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-white text-3xl font-bold mb-2">{title}</h2>
        <p className="text-neutral-400 text-base mb-4 line-clamp-6">
          {description} {description}
        </p>
        <div className="flex gap-4 mt-2">
          <span className="text-neutral-400">
            GitHub:{" "}
            <a
              href={githubUrl}
              className="text-blue underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kaynak Kodlar
            </a>
          </span>

          <span className="text-neutral-400">
            Link:{" "}
            <a
              href={projectUrl}
              className="text-blue underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Canlı Link
            </a>
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;