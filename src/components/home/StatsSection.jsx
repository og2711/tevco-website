import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '15+', label: 'Years of Experience' },
  { value: '250+', label: 'Projects Completed' }, // Bumped for growth
  { value: '85+', label: 'Expert Personnel' },
  { value: '12+', label: 'Strategic Markets' },
];

export default function StatsSection() {
  return (
    <section className="relative py-20 bg-[#070E1A] overflow-hidden">
      {/* Technical Grid Background Effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.5,
                type: "spring",
                stiffness: 100 
              }}
              className="relative text-center group"
            >
              {/* Desktop Vertical Divider */}
              {index !== 0 && (
                <div className="hidden lg:block absolute left-[-16px] top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
              )}

              <div className="text-4xl md:text-6xl font-black text-white mb-3 tracking-tighter flex items-center justify-center gap-1">
                <span className="text-red-600">.</span>
                {stat.value}
              </div>
              
              <div className="text-[10px] md:text-xs text-slate-400 font-bold tracking-[0.3em] uppercase leading-tight max-w-[120px] mx-auto">
                {stat.label}
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute -inset-4 bg-red-600/0 group-hover:bg-red-600/5 transition-colors duration-500 rounded-xl -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}