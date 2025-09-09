import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../../components/ui/button";
import ProjectCategoryCard from "../../components/shared/projectCategoryCard";
import ProjectCard from "../../components/shared/projectCard";

const images = ["/avatars/poyraz.png", "/avatars/yigit.png"];

// Category and project data outside component for cleaner code
const categories = [
  {
    key: "uiux",
    title: "UI/UX Tasarım",
    imageUrl: "/images/defaultImage.png",
  },
  {
    key: "web",
    title: "Web Uygulamaları",
    imageUrl: "/images/defaultImage.png",
  },
  {
    key: "mobile",
    title: "Mobil Uygulamalar",
    imageUrl: "/images/defaultImage.png",
  },
  {
    key: "sosyal",
    title: "Farkındalık Projeleri",
    imageUrl: "/images/defaultImage.png",
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
    "uiux" | "web" | "mobile"
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
        <div className="py-8 bg-gray w-full">
          <div className="max-w-7xl container mx-auto flex flex-wrap md:flex-nowrap gap-4 sm:gap-6 md:gap-8 justify-center px-5 ">
            {categories.map((cat) => (
              <ProjectCategoryCard
                key={cat.key}
                title={cat.title}
                imageUrl={cat.imageUrl}
                isSelected={selectedCategory === cat.key}
                onClick={() =>
                  setSelectedCategory(cat.key as "uiux" | "web" | "mobile")
                }
              />
            ))}
          </div>
        </div>

        <div className="my-12 max-w-7xl container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full px-2">
          {(projects[selectedCategory] as Array<any>).map(
            (project: any, idx: number) => (
              <div
                key={idx}
                className="w-full flex items-center justify-center px-5 "
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
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
        </div>
      </section>
    </div>
  );
};

export default ProjectsIndex;
