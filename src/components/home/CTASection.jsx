import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background with Optimized Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80"
          alt="Energy Infrastructure"
          className="w-full h-full object-cover"
        />
        {/* Dual-layer gradient for better text legibility */}
        <div className="absolute inset-0 bg-slate-950/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070E1A]/40 to-[#070E1A]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Subtle Tagline */}
          <span className="text-red-500 font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
            Partner with Excellence
          </span>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
            Ready to <span className="text-red-600">Elevate</span> Your Operations?
          </h2>
          
          <p className="text-gray-300 text-lg md:text-xl mb-12 leading-relaxed font-light max-w-2xl mx-auto">
            Experience the Tevco advantage. We deliver world-class energy solutions 
            tailored to the most demanding oil and gas environments.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-10 py-5 bg-red-600 hover:bg-red-700 text-white rounded-md transition-all font-bold text-sm tracking-widest uppercase shadow-xl shadow-red-900/20 group"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </motion.button>
            </Link>
            
            <a href="tel:+2341234567890">
              <button className="inline-flex items-center gap-3 px-10 py-5 border-2 border-white/20 text-white rounded-md hover:bg-white hover:text-slate-950 transition-all duration-300 font-bold text-sm tracking-widest uppercase">
                <Phone className="w-4 h-4" />
                Call Us Today
              </button>
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative Design Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-blue-600 to-slate-900 opacity-50" />
    </section>
  );
}