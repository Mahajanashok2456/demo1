import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section-padding relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <div className="relative">
             <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] opacity-20 blur-xl rounded-full" />
             <img 
               src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=800&auto=format&fit=crop" 
               alt="Traveler looking at view"
               className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3] grayscale hover:grayscale-0 transition-all duration-700" 
             />
             <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/60 backdrop-blur-md rounded-xl border border-white/10">
                <p className="text-xl font-heading font-bold italic">"We explore not to escape life, but for life not to escape us."</p>
             </div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Crafting Memories, <br />
            <span className="text-gradient">Not Just Bookings.</span>
          </h2>
          
          <div className="space-y-6 text-lg text-[var(--color-text-muted)]">
            <p>
              Travel isn't about ticking boxes on a list. It's about that sunrise on a mountain peak, the taste of street food in a bustling market, and the silence of a desert night.
            </p>
            <p>
              We founded <strong>TRAVEL.ENV</strong> with a simple mission: to bring the magic back to travel. We are a team of explorers, dreamers, and storytellers who believe that every journey should be a cinematic experience.
            </p>
          </div>

          <div className="flex gap-12 pt-4 border-t border-white/10">
            <div>
              <div className="text-4xl font-bold text-[var(--color-primary)]">10k+</div>
              <div className="text-sm text-[var(--color-text-muted)] mt-1">Happy Travelers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[var(--color-accent)]">50+</div>
              <div className="text-sm text-[var(--color-text-muted)] mt-1">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">4.9</div>
              <div className="text-sm text-[var(--color-text-muted)] mt-1">Average Rating</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
