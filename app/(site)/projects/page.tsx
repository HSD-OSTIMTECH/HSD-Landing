'use client'
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../../../components/ui/button";
import ProjectCategoryCard from "../../../components/shared/projectCategoryCard";
import ProjectCard from "../../../components/shared/projectCard";
import SelectBox from "../../../components/ui/selectBox";

const images = ["/avatars/poyraz.png", "/avatars/yigit.png"];

// Category and project data outside component for cleaner code
const categories = [
  {
    key: "uiux",
    title: "UI/UX Tasarım",
  },
  {
    key: "web",
    title: "Web Uygulamaları",
  },
  {
    key: "mobile",
    title: "Mobil Uygulamalar",
  },
  {
    key: "sosyal",
    title: "Farkındalık Projeleri",
  },
];

const projects = {
  uiux: [
    {
      title: "Deprem Bilinci",
      description:
        "Deprem bilinçlenmesi için bir websitesi, Deprem bilinçlenmesi için bir websitesidir.",
      imageUrl: "/images/defaultImage.png",
      githubUrl: "#",
      projectUrl: "#",
    },
    {
      title: "Deprem Bilinci",
      description:
        "Deprem bilinçlenmesi için bir websitesi, Deprem bilinçlenmesi için bir websitesidir.",
      imageUrl: "/images/defaultImage.png",
      githubUrl: "#",
      projectUrl: "#",
    },
    {
      title: "Deprem Bilinci",
      description:
        "Deprem bilinçlenmesi için bir websitesi, Deprem bilinçlenmesi için bir websitesidir.",
      imageUrl: "/images/defaultImage.png",
      githubUrl: "#",
      projectUrl: "#",
    },
  ],
  web: [
    {
      title: "HSD Web",
      description: "HSD web projeleri için bir websitesi.",
      imageUrl: "/images/defaultImage.png",
      githubUrl: "#",
      projectUrl: "#",
    },
  ],
  mobile: [
    {
      title: "Mobil Takip",
      description: "Mobil projeler için bir uygulama.",
      imageUrl: "/images/defaultImage.png",
      githubUrl: "#",
      projectUrl: "#",
    },
  ],
  sosyal: [
    {
      title: "Mobil Takip",
      description: "Mobil projeler için bir uygulama.",
      imageUrl: "/images/defaultImage.png",
      githubUrl: "#",
      projectUrl: "#",
    },
  ],
};

const ProjectsIndex = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<
    "uiux" | "web" | "mobile" | "sosyal"
  >("uiux");

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [current, autoPlay]);

  return (
    <div className="mt-4 sm:mt-24">
      <section className="relative w-full flex flex-col items-center justify-center">
        <div className="rounded-t-full absolute -z-20 bottom-0 w-11/12 sm:w-7/12 h-[50vh] bg-gradient-to-br from-primary to-secondary" />

        <div className="absolute w-full bottom-8 flex items-center justify-center gap-3 z-30">
          <Button
            variant="primary"
            as="link"
            href="https://github.com/HSD-OSTIMTECH"
          >
            GitHub
          </Button>

          <Button variant="outline" as="link" href="/contact">
            İletişime Geç
          </Button>
        </div>

        <div className="flex flex-col items-center justify-center relative">
          <div className="flex items-center justify-center gap-6">
            <div className="relative flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={images[current]}
                  src={images[current]}
                  alt="slider-img"
                  initial={{ opacity: 0, scale: 0.99 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.99 }}
                  transition={{ duration: 0.5 }}
                  className="mx-auto"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "60vh",
                    borderRadius: "2rem",
                  }}
                />
              </AnimatePresence>
              {/* Button group overlay */}
              <div className="w-full flex items-center justify-center"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center w-full">
        <div className="py-12 bg-neutral-950/50 w-full">
          <div className="max-w-7xl container mx-auto px-5">
            {/* Başlık */}
            <div className="text-center mb-8 ">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Proje Kategorileri
              </h2>
              <p className="text-neutral-400">
                İlgilendiğiniz alanda projelerimizi keşfedin
              </p>
            </div>

            {/* Desktop: Kategori Kartları */}
            <motion.div
              className="hidden md:flex items-center justify-between gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {categories.map((cat) => (
                <ProjectCategoryCard
                  key={cat.key}
                  title={cat.title}
                  isSelected={selectedCategory === cat.key}
                  onClick={() =>
                    setSelectedCategory(
                      cat.key as "uiux" | "web" | "mobile" | "sosyal"
                    )
                  }
                />
              ))}
            </motion.div>

            {/* Mobile: Select Box */}
            <motion.div
              className="flex md:hidden justify-center w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="w-full max-w-xs">
                <SelectBox
                  options={categories.map((cat) => ({
                    label: `${cat.title}`,
                    value: cat.key,
                  }))}
                  value={selectedCategory}
                  onChange={(value) =>
                    setSelectedCategory(
                      value as "uiux" | "web" | "mobile" | "sosyal"
                    )
                  }
                  className="!w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="my-12 max-w-7xl container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full px-2"
          key={selectedCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {(projects[selectedCategory] as Array<any>).map(
            (project: any, idx: number) => (
              <div
                key={idx}
                className="w-full flex items-center justify-center px-5 "
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="w-full flex items-center justify-center"
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    imageUrl={project.imageUrl}
                    githubUrl={project.githubUrl}
                    projectUrl={project.projectUrl}
                  />
                </motion.div>
              </div>
            )
          )}
        </motion.div>
      </section>
    </div>
  );
};

export default ProjectsIndex;
