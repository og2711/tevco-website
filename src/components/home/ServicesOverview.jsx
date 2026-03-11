import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cable, Wrench, Flame, Users, ShoppingCart, Disc2, TowerControl, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Disc2,
    title: 'Wireline and Slickline Services',
    description: 'Precision logging and evaluation solutions using advanced sensors for real-time reservoir data and wellbore integrity.',
  },
  {
    icon: TowerControl,
    title: 'Well Intervention',
    description: 'Specialized remedial operations to restore, maintain, and enhance production throughout the life of your well.',
  },
  {
    icon: Droplets,
    title: 'Stimulation',
    description: 'Hydraulic fracturing and acidizing treatments designed to bypass formation damage and maximize flow potential.',
  },
  {
    icon: Users,
    title: 'Project Management',
    description: 'Sourcing and training world-class technical talent to bridge the skill gap in complex offshore and onshore projects.',
  },
  {
    icon: ShoppingCart,
    title: 'Procurement',
    description: 'A global supply chain network delivering mission-critical oilfield equipment and heavy machinery with speed.',
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-10 bg-red-600" />
            <span className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs">
              Capabilities
            </span>
            <div className="h-[1px] w-10 bg-red-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Our Core <span className="text-blue-900">Energy Services</span>
          </h2>
          <p className="text-slate-500 max-w-3xl mx-auto text-lg font-light leading-relaxed">
            Delivering high-performance technical services across the upstream and downstream 
            value chain, ensuring operational efficiency in every project.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative p-10 bg-slate-50 border border-slate-100 rounded-sm hover:bg-white hover:border-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
            >
              {/* Icon Container */}
              <div className="relative mb-8 inline-block">
                <div className="absolute inset-0 bg-red-600 scale-0 group-hover:scale-110 transition-transform duration-500 rounded-full opacity-10" />
                <service.icon className="w-10 h-10 text-slate-900 group-hover:text-red-600 transition-colors duration-500 relative z-10" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
                {service.title}
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-8 font-light">
                {service.description}
              </p>

              <Link 
                to="/services" 
                className="inline-flex items-center text-xs font-bold tracking-widest text-slate-900 uppercase group-hover:text-red-600 transition-colors"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              
              {/* Decorative Corner Element */}
              <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-4 h-4 border-t-2 border-right-2 border-red-600" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Link to="/services">
            <button className="inline-flex items-center gap-4 px-10 py-5 bg-slate-950 text-white rounded-md hover:bg-red-600 transition-all duration-300 font-bold text-xs tracking-[0.2em] uppercase shadow-lg active:scale-95">
              Explore Our Full Catalog
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}