import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Cpu, LineChart, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Consulting() {
  return (
    <div className="min-h-screen bg-white">
      {/* Professional Header Section */}
      <section className="relative pt-40 pb-20 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-red-500 font-black tracking-[0.3em] uppercase text-xs">
              Strategic Advisory and Manpower Training
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mt-6 mb-8 tracking-tighter">
              Enterprise <span className="text-teal-600">Consulting</span> & <br />
              Transformation
            </h1>
            <p className="text-slate-400 max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed">
              Tevco Energy, in collaboration with <span className="text-white font-medium">Workforce Intelligence Consulting (WIC)</span>, provides end-to-end 
              business process refinement, AI integration, and specialized manpower training 
              for the modern energy sector and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Consulting Pillars */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                icon: Cpu,
                title: "Organisational AI Transformation",
                desc: "Implementing custom AI-based strategies to optimize field data, predictive maintenance, and operational decision-making."
              },
              {
                icon: LineChart,
                title: "Business Process Refinement",
                desc: "Analyzing legacy business workflows to identify bottlenecks and deploying digital solutions that scale."
              },
              {
                icon: Briefcase,
                title: "Workforce Solutions",
                desc: "Tailored training programs and human capital management specifically designed for high-stakes technical environments."
              }
            ].map((pillar, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 border border-slate-100 hover:border-red-600/20 hover:bg-slate-50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                  <pillar.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{pillar.title}</h3>
                <p className="text-slate-500 font-light leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WIC Specific Redirect */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <img 
            src="/WIC Logo_no background.png" // Points to your public/wic-logo.svg file
            alt="WIC Logo"
            className="h-64 w-auto mx-auto -mt-24 -mb-12 object-contain" // Centered and sized similarly to the old icon
          />
          <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">
            Consulting Partners
          </h2>
          <p className="text-slate-600 text-lg mb-10 font-light">
            Detailed consulting services, AI audits, and corporate training portfolios are 
            managed through our specialized division, WIC.
          </p>
          <a href="https://www.wic.ng" target="_blank" rel="noopener noreferrer">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-10 py-7 text-xs font-black uppercase tracking-widest rounded-sm">
              Explore WIC Consulting <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}