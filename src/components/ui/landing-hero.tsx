import { useEffect, useRef } from "react"
import { LayoutGroup, motion } from "framer-motion"
import { TextRotate } from "@/components/ui/text-rotate"
import Floating, { FloatingElement } from "@/components/ui/parallax-floating"
import { lazy, Suspense } from 'react'

const FloatingPaths = lazy(() => import('./floating-paths'))

const exampleImages = [
  {
    url: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b",
    author: "Pawel Czerwinski",
    title: "Recycling Plant",
  },
  {
    url: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b",
    author: "Pawel Czerwinski",
    title: "Recycling Process",
  },
  {
    url: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b",
    author: "Pawel Czerwinski",
    title: "Sustainable Solutions",
  },
  {
    url: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b",
    author: "Pawel Czerwinski",
    title: "Green Technology",
  },
  {
    url: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b",
    author: "Pawel Czerwinski",
    title: "Environmental Care",
  }
];

export function LandingHero() {
  const handleScrollToForm = () => {
    const formSection = document.getElementById('booking-form');
    if (formSection) {
      formSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  return (
    <section className="w-full min-h-[100vh] overflow-hidden md:overflow-visible flex items-center relative z-[1]">
      <div className="absolute inset-0">
        <Suspense fallback={null}>
          <FloatingPaths position={1} />
          <FloatingPaths position={-1} />
        </Suspense>
      </div>
      
      <Floating sensitivity={-0.5} className="h-full">
        <FloatingElement
          depth={0.5}
          className="top-[25%] left-[5%] md:top-[25%] md:left-[8%]"
        >
          <motion.img
            src="/assets/Ani_CON.svg"
            alt="Animation Container"
            className="w-[100px] md:w-[150px] aspect-[407/277] hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-[3deg] shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="top-[15%] left-[12%] md:top-[8%] md:left-[15%]"
        >
          <motion.img
            src="/assets/Ani_LFS.svg"
            alt="Recycling Bins"
            className="w-[200px] md:w-[400px] aspect-[1638/744] hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-12 shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={4}
          className="top-[75%] left-[6%] md:top-[55%] md:left-[10%]"
        >
          <motion.img
            src="/assets/Ani_Risk_Pers.svg"
            alt="Animation Risk Perspective"
            className="w-[200px] aspect-[1000/600] sm:w-48 md:w-96 lg:w-[500px] -rotate-[4deg] hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={2}
          className="top-[15vh] right-[5vw] md:top-[8%] md:right-[10%]"
        >
          <motion.img
            src="/assets/Ani_Praes.svg"
            alt="Animation Presentation"
            className="w-[45vw] max-w-[300px] aspect-[1474/675] hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[6deg] rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="top-[60vh] right-[2vw] md:top-[50%] md:right-[8%]"
        >
          <motion.img
            src="/assets/Ani_NmaeV_FE.svg"
            alt="Animation Name Value"
            className="w-[52.5vw] max-w-[300px] aspect-square hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[19deg] rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          />
        </FloatingElement>
      </Floating>

      <div className="flex flex-col items-center w-[250px] sm:w-[300px] md:w-[500px] lg:w-[700px] z-[2] pointer-events-auto mx-auto">
        <motion.h1
          className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl text-center w-full flex flex-col items-center whitespace-pre leading-tight tracking-tight space-y-2 md:space-y-4"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
        >
          <span>Mit uns wird </span>
          <LayoutGroup id="recycling-text">
            <motion.span layout className="flex whitespace-pre">
              <motion.span
                layout
                className="flex whitespace-pre"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              >
                RECYCLING{" "}
              </motion.span>
              <TextRotate
                texts={[
                  "groß geschrieben",
                  "nachhaltig",
                  "effizient",
                  "zukunftsorientiert",
                  "professionell",
                  "innovativ",
                  "verantwortungsvoll"
                ]}
                mainClassName="overflow-hidden pr-3 text-green-600 py-0 pb-2 md:pb-4 rounded-xl"
                staggerDuration={0.03}
                staggerFrom="last"
                rotationInterval={3000}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              />
            </motion.span>
          </LayoutGroup>
        </motion.h1>
        <motion.p
          className="text-sm sm:text-lg md:text-xl lg:text-2xl text-center mt-6 md:mt-8 text-gray-600 max-w-3xl"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.5 }}
        >
          Nachhaltige Lösungen für eine grünere Zukunft. Professionelles Recycling mit Verantwortung für kommende Generationen.
        </motion.p>

        <motion.button
          onClick={handleScrollToForm}
          className="mt-8 md:mt-12 bg-green-500 hover:bg-green-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg text-base md:text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.7 }}
          whileHover={{
            scale: 1.05,
            transition: { type: "spring", damping: 30, stiffness: 400 },
          }}
        >
          Kostenloses Angebot anfordern
        </motion.button>
      </div>
    </section>
  );
}