import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-start px-6 md:px-20 z-10 pointer-events-none">
      <div className="max-w-3xl pointer-events-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
        >
          Journeys That <br />
          <span className="text-gradient">Move You.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="text-xl md:text-2xl text-[var(--color-text-muted)] mb-10 max-w-xl"
        >
          Curated travel experiences, crafted with care. Discover a new way to see the world.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4"
        >
          <button className="px-8 py-4 bg-[var(--color-primary)] text-white text-lg font-bold rounded-full hover:shadow-[0_0_30px_rgba(255,107,53,0.5)] transition-all flex items-center gap-2 group">
            Explore Packages
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="px-8 py-4 bg-transparent border border-white/20 text-white text-lg font-bold rounded-full hover:bg-white/10 glass-panel transition-all">
            Plan My Trip
          </button>
        </motion.div>
      </div>
    </section>
  );
}
