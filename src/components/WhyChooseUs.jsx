import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Map, Headset, CreditCard } from 'lucide-react';

const reasons = [
  {
    icon: <Map className="w-8 h-8 text-[var(--color-primary)]" />,
    title: 'Hand-Crafted',
    desc: 'Each itinerary is built from scratch by experts, not algorithms.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
    title: 'Verified Stays',
    desc: 'We personally vet every hotel and homestay for safety and comfort.'
  },
  {
    icon: <Headset className="w-8 h-8 text-blue-400" />,
    title: '24/7 Support',
    desc: 'Never feel alone. Our team is a call away, anywhere in the world.'
  },
  {
    icon: <CreditCard className="w-8 h-8 text-purple-400" />,
    title: 'Transparent',
    desc: 'No hidden fees. You know exactly what you are paying for.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding relative z-10">
      <div className="glass-panel p-10 md:p-16 rounded-3xl overflow-hidden relative">
        <div className="absolute top-0 right-0 p-32 bg-[var(--color-primary)] opacity-5 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 p-32 bg-[var(--color-accent)] opacity-5 blur-[100px] rounded-full pointer-events-none" />

        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Why Travel With <span className="text-gradient">Us?</span>
          </motion.h2>
          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
             We handle the chaos so you can focus on the memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all group"
            >
              <div className="mb-4 bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
