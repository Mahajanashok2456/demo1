import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Star, ArrowRight } from 'lucide-react';

const packages = [
  {
    id: 1,
    name: 'Adventure Seeker',
    duration: '7D / 6N',
    price: '$1,299',
    type: 'Adventure',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1533240332313-0dbdd1f29c12?q=80&w=600&auto=format&fit=crop', // Scenic mountain
    highlights: ['Hiking', 'Kayaking', 'Camping']
  },
  {
    id: 2,
    name: 'Serene Spiritual',
    duration: '10D / 9N',
    price: '$1,850',
    type: 'Spiritual',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop', // Temple/Peaceful
    highlights: ['Meditation', 'Temple Visits', 'Yoga']
  },
  {
    id: 3,
    name: 'Luxury Escape',
    duration: '5D / 4N',
    price: '$2,499',
    type: 'Luxury',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1571896349842-68c894913dbb?q=80&w=600&auto=format&fit=crop', // Luxury resort
    highlights: ['5-Star Stays', 'Private Chauffeur', 'Gourmet Dining']
  },
  {
    id: 4,
    name: 'Family Bonding',
    duration: '6D / 5N',
    price: '$1,599',
    type: 'Family',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=600&auto=format&fit=crop', // Family fun
    highlights: ['Theme Parks', 'Guided Tours', 'Kid-Friendly']
  },
];

const CardConfig = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" }
};

export default function Packages() {
  return (
    <section id="packages" className="section-padding relative z-10">
      <div className="mb-16">
        <motion.h2 
          {...CardConfig}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Curated <span className="text-gradient">Experiences</span>
        </motion.h2>
        <motion.p 
          {...CardConfig}
          transition={{ delay: 0.2 }}
          className="text-[var(--color-text-muted)] text-lg max-w-2xl"
        >
          We don't just sell destinations; we sell emotions. Choose the journey that speaks to your soul.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
            className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
            style={{ perspective: '1000px' }}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
               <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <div className="mb-auto pt-4">
                 <span className="bg-[var(--color-primary)] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                   {pkg.type}
                 </span>
              </div>

              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex justify-between items-end mb-2">
                  <h3 className="text-2xl font-bold text-white">{pkg.name}</h3>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm font-semibold">{pkg.rating}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-gray-300 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    {pkg.duration}
                  </div>
                  <div className="text-[var(--color-primary)] font-bold text-lg">
                    {pkg.price}
                  </div>
                </div>

                <div className="space-y-2 mb-6 border-t border-white/10 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                   {pkg.highlights.map((h, i) => (
                     <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                        {h}
                     </div>
                   ))}
                </div>

                <button className="w-full py-3 bg-white/10 hover:bg-[var(--color-primary)] backdrop-blur-md rounded-xl text-white font-semibold transition-colors flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(255,107,53,0.3)]">
                  Details
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
