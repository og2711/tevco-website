import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const highlights = [
  'ISO Certified Operations',
  'Nigerian Content (NOGIC) Compliant',
  'Experienced Local & Expatriate Workforce',
  'Modern, State-of-the-art Equipment Fleet',
];

export default function AboutPreview() {
  return (
    <section className="py-28 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="TeVCO Success.png"
                alt="Engineering Excellence"
                className="rounded-xl shadow-2xl w-full h-[500px] object-cover border-8 border-white"
              />
            
              
              {/* Floating Experience Card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -right-6 md:right-10 bg-red-600 text-white p-8 rounded-lg shadow-2xl"
              >
                <div className="text-4xl font-black tracking-tighter italic">40+</div>
                <div className="text-xs uppercase tracking-[0.2em] font-bold text-red-100 mt-1">
                  Combined Years of <br /> Technical Excellence
                </div>
              </motion.div>
            </div>

            {/* Decorative Background Element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 border-[1px] border-slate-200 rounded-full" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-red-600" />
              <span className="text-red-600 font-bold tracking-[0.25em] uppercase text-xs">
                Company Profile
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-[1.15]">
              A Trusted Partner in Global <br />
              <span className="text-blue-900">Energy Services</span>
            </h2>
            
            <p className="text-slate-600 text-lg leading-relaxed mb-10 font-light">
              Tevco Energy is a premier oil and gas servicing firm delivering 
              integrated engineering solutions across Africa. We combine deep 
              industry expertise with a rigorous commitment to safety and 
              environmental standards.
            </p>

            <div className="grid sm:grid-cols-1 gap-5 mb-12">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-4 group">
                  <div className="mt-1 bg-red-50 p-1 rounded-full group-hover:bg-red-600 transition-colors">
                    <CheckCircle className="w-4 h-4 text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-slate-800 font-bold text-sm tracking-wide uppercase">{item}</span>
                </div>
              ))}
            </div>

            <Link to="/about">
              <button className="inline-flex items-center gap-3 py-4 px-8 border-2 border-slate-900 text-slate-900 font-bold text-xs tracking-[0.2em] uppercase hover:bg-slate-900 hover:text-white transition-all duration-300 group rounded-sm">
                Learn More About Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}