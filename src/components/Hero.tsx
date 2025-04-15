import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { lazy, Suspense } from 'react';

const FloatingPaths = lazy(() => import('./ui/floating-paths'));

export default function Hero() {
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
    <div className="relative h-[80vh] pt-20 bg-white overflow-hidden">
      <div className="absolute inset-0">
        <Suspense fallback={null}>
          <FloatingPaths position={1} />
          <FloatingPaths position={-1} />
        </Suspense>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Mit uns wird RECYCLING<br />groß geschrieben
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Nachhaltige Lösungen für eine grünere Zukunft. Professionelles Recycling mit Verantwortung für kommende Generationen.
          </p>
          <Button
            variant="default"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg rounded-lg font-semibold transition-all"
            onClick={handleScrollToForm}
          >
            Kostenloses Angebot anfordern
          </Button>
        </motion.div>
      </div>
      
      {/* Shadow overlay */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-100/80 to-transparent"
        style={{ 
          maskImage: 'linear-gradient(to top, black, transparent)',
          WebkitMaskImage: 'linear-gradient(to top, black, transparent)'
        }}
      />
    </div>
  );
}