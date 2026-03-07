import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cable, Wrench, Flame, Users, ShoppingCart, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/lib/utils'; // Path fixed

const services = [
  {
    id: 'wireline',
    icon: Cable,
    title: 'Wireline Services',
    subtitle: 'Precision Logging & Evaluation',
    hero: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1200&q=80',
    description: 'Tevco Energy provides comprehensive wireline logging services that deliver accurate, real-time data for informed decision-making. Our state-of-the-art equipment and experienced operators ensure high-quality measurements in even the most challenging well conditions.',
    capabilities: [
      'Open Hole Logging (Resistivity, Porosity, Density, Sonic)',
      'Cased Hole Logging (Cement Evaluation, Production Logging)',
      'Formation Evaluation & Reservoir Characterization',
      'Pipe Inspection & Corrosion Logging',
      'Perforation Services',
      'Real-time Data Transmission & Interpretation',
    ],
  },
  {
    id: 'intervention',
    icon: Wrench,
    title: 'Well Intervention',
    subtitle: 'Optimize & Extend Well Life',
    hero: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80',
    description: 'Our well intervention services are designed to diagnose and resolve downhole issues, optimize production, and extend the productive life of wells. We deploy proven techniques and technologies to deliver safe, efficient interventions.',
    capabilities: [
      'Slickline & Braided Line Services',
      'Coiled Tubing Operations',
      'Well Clean-out & Debris Removal',
      'Mechanical Plug Setting & Retrieval',
      'Downhole Tool Fishing',
      'Scale & Wax Removal Programs',
    ],
  },
  {
    id: 'stimulation',
    icon: Flame,
    title: 'Stimulation',
    subtitle: 'Maximize Reservoir Productivity',
    hero: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80',
    description: 'We deliver advanced well stimulation services that enhance reservoir connectivity and maximize recovery. Our engineering team designs customized programs based on thorough formation analysis to ensure optimal results.',
    capabilities: [
      'Matrix Acidizing (Carbonate & Sandstone)',
      'Hydraulic Fracturing Design & Execution',
      'Acid Fracturing',
      'Near-wellbore Damage Removal',
      'Diversion Techniques for Zonal Coverage',
      'Post-stimulation Evaluation',
    ],
  },
  {
    id: 'manpower',
    icon: Users,
    title: 'Manpower & Training',
    subtitle: "Building Africa's Energy Workforce",
    hero: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80',
    description: 'We are committed to supplying skilled professionals to the oil & gas industry. Our training programs meet international standards, ensuring personnel are equipped for safe and efficient operations.',
    capabilities: [
      'Technical Skills Training & Certification',
      'HSE Awareness & Safety Leadership',
      'Skilled Personnel Recruitment',
      'Expatriate & Local Workforce Management',
      'Competency Assessment & Development',
      'On-site Mentoring & Coaching',
    ],
  },
  {
    id: 'procurement',
    icon: ShoppingCart,
    title: 'Procurement',
    subtitle: 'Global Supply Chain Solutions',
    hero: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80',
    description: 'Tevco Energy provides end-to-end procurement for the energy industry. From sourcing to delivery, we ensure clients have access to quality equipment—on time and within budget.',
    capabilities: [
      'Oilfield Equipment & Tools Sourcing',
      'Spare Parts Management',
      'Vendor Qualification & Management',
      'Logistics & Supply Chain Coordination',
      'Quality Assurance & Inspection',
      'Inventory Management Solutions',
    ],
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-40 pb-28 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1920&q=80"
            alt="Energy Operations"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-red-600" />
              <span className="text-red-500 font-black tracking-[0.4em] uppercase text-xs">
                Capabilities
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
              Integrated <span className="text-red-600 italic">Energy Solutions</span>
            </h1>
            <p className="text-slate-400 max-w-2xl text-lg md:text-xl font-light leading-relaxed">
              From subsurface evaluation to surface procurement, we drive efficiency 
              at every stage of the oil and gas value chain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Service Explorer */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Tab Navigation - Engineering Style */}
          <div className="flex flex-wrap gap-2 mb-16 p-2 bg-slate-50 border border-slate-100 rounded-lg justify-center sticky top-24 z-30 backdrop-blur-md shadow-sm">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service)}
                className={`flex items-center gap-3 px-6 py-4 rounded-md text-xs font-black tracking-widest uppercase transition-all duration-300 ${
                  activeService.id === service.id
                    ? 'bg-slate-950 text-white shadow-xl scale-105'
                    : 'text-slate-500 hover:text-slate-950 hover:bg-slate-100'
                }`}
              >
                <service.icon className={`w-4 h-4 ${activeService.id === service.id ? 'text-red-500' : ''}`} />
                {service.title}
              </button>
            ))}
          </div>

          {/* Detailed Content Area */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="grid lg:grid-cols-2 gap-16 items-start"
            >
              {/* Media Side */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-red-600/10 rounded-xl blur-2xl group-hover:bg-red-600/20 transition-all" />
                <div className="relative rounded-sm overflow-hidden border-8 border-white shadow-2xl">
                  <img
                    src={activeService.hero}
                    alt={activeService.title}
                    className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  <div className="absolute bottom-8 left-8">
                    <span className="px-5 py-2 bg-red-600 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-sm">
                      {activeService.subtitle}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="pt-4">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-16 h-16 bg-slate-950 rounded-sm flex items-center justify-center">
                    <activeService.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h2 className="text-4xl font-black text-slate-900 tracking-tight">{activeService.title}</h2>
                </div>

                <p className="text-slate-600 text-lg leading-relaxed mb-10 font-light italic border-l-4 border-red-600 pl-6">
                  {activeService.description}
                </p>

                <div className="bg-slate-50 p-8 rounded-sm border border-slate-100">
                  <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-6">Technical Capabilities</h3>
                  <div className="grid sm:grid-cols-1 gap-4">
                    {activeService.capabilities.map((cap) => (
                      <div key={cap} className="flex items-start gap-4 group">
                        <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-800 font-bold text-sm tracking-wide">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link to="/contact" className="mt-10 inline-block">
                  <button className="inline-flex items-center gap-4 px-10 py-5 bg-slate-950 text-white rounded-sm font-black text-xs tracking-widest uppercase hover:bg-red-600 transition-all group shadow-lg">
                    Request Technical Proposal
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Standard CTA Section Placeholder */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-6">Need a Specialized Solution?</h2>
          <p className="text-slate-500 mb-10 max-w-xl mx-auto">Contact our engineering desk today to discuss custom operational requirements for your field.</p>
          <Link to="/contact" className="px-8 py-4 border-2 border-slate-900 text-slate-900 font-bold uppercase tracking-widest text-xs hover:bg-slate-900 hover:text-white transition-all">
            Consult our Experts
          </Link>
        </div>
      </section>
    </div>
  );
}