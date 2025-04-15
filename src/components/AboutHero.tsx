import React from 'react';
import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <div 
      className="relative h-[80vh] flex items-start justify-center pt-[105px]"
      style={{
        backgroundImage: 'url(/assets/Betriebshalle.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <motion.div 
        className="relative z-10 container mx-auto px-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img 
          src="/assets/ueber-uns-ueberschrift.svg"
          alt="Über uns"
          className="w-full max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        />
      </motion.div>
    </div>
  );
}