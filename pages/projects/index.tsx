
import React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../../components/ui/button';

const images = ["/avatars/poyraz.png", "/avatars/yigit.png"];

const ProjectsIndex = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [current, autoPlay]);

  const goTo = (idx: number) => {
    setCurrent(idx);
    setAutoPlay(false);
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
    setAutoPlay(false);
  };
  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
    setAutoPlay(false);
  };

  return (
    <div className="mt-24">
      <section className="relative w-full flex flex-col items-center justify-center">
        <div className="rounded-t-full absolute -z-20 bottom-0 w-7/12 h-[45vh] bg-gradient-to-br from-primary to-secondary" />

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
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
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
    </div>
  );
};

export default ProjectsIndex;