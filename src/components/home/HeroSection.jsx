import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/lib/utils';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1920&q=80"
          alt="Oil rig"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1829]/95 via-[#0B1829]/80 to-[#0B1829]/40" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full border border-white/5" />
        <div className="absolute top-32 right-32 w-48 h-48 rounded-full border border-red-500/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-red-500" />
              <span className="text-red-400 font-medium tracking-widest uppercase text-sm">
                Excellence in Energy Services
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              Powering Africa's{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                Energy
              </span>{' '}
              Future
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
              Delivering world-class oil & gas servicing solutions across Nigeria and Africa.
              From well evaluation to manpower supply, we drive operational excellence at every wellsite.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={createPageUrl('Services')}>
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-base rounded-lg group"
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to={createPageUrl('Contact')}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base rounded-lg"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-6 h-6 text-white/50" />
      </motion.div>
    </section>
  );
}