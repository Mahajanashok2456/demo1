import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';

const founders = [
  {
    name: 'Sarah Chen',
    role: 'Co-Founder & Explorer',
    philosophy: 'Travel should feel effortless, magical, and personal.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Marcus Thorne',
    role: 'Head of Experiences',
    philosophy: 'The best journeys answer questions you didn’t ask.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Director of Operations',
    philosophy: 'Precision in planning allows for freedom in exploring.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop'
  }
];

export default function Founders() {
  return (
    <section id="founders" className="section-padding relative z-10">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} 
          className="text-4xl font-bold mb-4"
        >
          Meet The <span className="text-gradient">Visionaries</span>
        </motion.h2>
        <p className="text-[var(--color-text-muted)]">The people behind the pixels and planes.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {founders.map((person, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group relative"
          >
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-6">
              <img 
                src={person.image} 
                alt={person.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                 <div className="flex gap-4">
                    <a href="#" className="p-2 bg-white/20 hover:bg-white text-white hover:text-black rounded-full transition-colors"><Linkedin size={20} /></a>
                    <a href="#" className="p-2 bg-white/20 hover:bg-white text-white hover:text-black rounded-full transition-colors"><Twitter size={20} /></a>
                 </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-1">{person.name}</h3>
              <p className="text-[var(--color-primary)] font-medium text-sm mb-4 uppercase tracking-widest">{person.role}</p>
              <div className="relative inline-block">
                <p className="text-[var(--color-text-muted)] italic max-w-xs mx-auto">
                  "{person.philosophy}"
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
