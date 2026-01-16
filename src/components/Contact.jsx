import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative z-10 pb-32">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
         
         <div className="space-y-8">
            <motion.h2 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-5xl md:text-7xl font-bold leading-tight"
            >
              Let's Plan Your <br />
              <span className="text-gradient">Next Adventure.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-[var(--color-text-muted)]"
            >
              Ready to see the world differently? Drop us a line, and let's start a conversation.
            </motion.p>

            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="space-y-6 pt-8"
            >
               <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-[var(--color-primary)] transition-colors">
                     <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm text-[var(--color-text-muted)]">Email Us</h4>
                    <p className="text-lg font-bold">hello@travel.env</p>
                  </div>
               </div>

               <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-[var(--color-primary)] transition-colors">
                     <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm text-[var(--color-text-muted)]">Call Us</h4>
                    <p className="text-lg font-bold">+1 (555) 000-1234</p>
                  </div>
               </div>

               <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-[var(--color-primary)] transition-colors">
                     <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm text-[var(--color-text-muted)]">Visit Us</h4>
                    <p className="text-lg font-bold">123 Wanderlust Ave, NY</p>
                  </div>
               </div>
            </motion.div>
         </div>

         <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-12"
         >
           <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                   <label className="text-sm font-medium text-[var(--color-text-muted)]">Your Name</label>
                   <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg p-4 focus:border-[var(--color-primary)] focus:outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-medium text-[var(--color-text-muted)]">Email Address</label>
                   <input type="email" className="w-full bg-black/20 border border-white/10 rounded-lg p-4 focus:border-[var(--color-primary)] focus:outline-none transition-colors" placeholder="john@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                 <label className="text-sm font-medium text-[var(--color-text-muted)]">Travel Type</label>
                 <select className="w-full bg-black/20 border border-white/10 rounded-lg p-4 focus:border-[var(--color-primary)] focus:outline-none transition-colors text-gray-400">
                    <option>Select an option</option>
                    <option>Adventure</option>
                    <option>Luxury</option>
                    <option>Spiritual</option>
                    <option>Family</option>
                    <option>Other</option>
                 </select>
              </div>

              <div className="space-y-2">
                 <label className="text-sm font-medium text-[var(--color-text-muted)]">Message</label>
                 <textarea rows="4" className="w-full bg-black/20 border border-white/10 rounded-lg p-4 focus:border-[var(--color-primary)] focus:outline-none transition-colors" placeholder="Tell us about your dream trip..."></textarea>
              </div>

              <button type="button" className="w-full py-4 bg-[var(--color-primary)] text-white font-bold rounded-lg hover:shadow-[0_0_30px_rgba(255,107,53,0.5)] transition-all flex items-center justify-center gap-2">
                 Send Message
                 <Send size={18} />
              </button>
           </form>
         </motion.div>

       </div>
    </section>
  );
}
