import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Shield, Award, Users, Globe, CheckCircle } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Zero tolerance for unsafe practices. Every operation is governed by the highest HSE standards.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We pursue operational excellence in every project, delivering results that exceed expectations.',
  },
  {
    icon: Users,
    title: 'People',
    description: 'Our people are our greatest asset. We invest in talent development and well-being.',
  },
  {
    icon: Globe,
    title: 'Integrity',
    description: 'Transparent, ethical business practices guide every decision and partnership we engage in.',
  },
];

const milestones = [
  { year: '2008', event: 'Upstream drilling and exploration service consulting commences' },
  { year: '2015', event: 'Expanded into the midstream and downstream services' },
  { year: '2024', event: 'Separate consulting arms merged into Tevco Energy' },
  { year: '2025', event: 'TeVCO officially becomes an entity in the Nigerian geomarket' },
  { year: '2026', event: 'Launched manpower training academy' },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0B1829]">
        <div className="absolute inset-0 opacity-10">
          <img
            src="TeVCO History.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-red-500" />
              <span className="text-red-400 font-medium tracking-widest uppercase text-sm">About Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Who We Are</h1>
            <p className="text-gray-400 max-w-2xl text-lg">
              Learn about our journey, our mission, and the values that drive Tevco Energy forward.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1829] mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-500 text-lg leading-relaxed">
                <p>
                  Founded in Nigeria, Tevco Energy was established with a clear vision: to bridge the 
                  gap in quality oil & gas servicing across Africa. From our early days providing wireline 
                  logging services in the Niger Delta, we have grown into a multi-disciplinary energy 
                  services company.
                </p>
                <p>
                  Today, Tevco Energy serves major international and national oil companies, offering an 
                  integrated suite of services that includes wireline logging, well intervention, stimulation, 
                  manpower training and supply, and procurement — all delivered with an unwavering 
                  commitment to safety and operational excellence.
                </p>
                <p>
                  Our growth has been driven by our people — a team of passionate, skilled professionals 
                  dedicated to pushing boundaries and delivering exceptional results for our clients.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="TeVCO History.png"
                alt="Oil operations"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-red-600/10 rounded-2xl" />
              <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-[#1B2A4A]/10 rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B1829] mb-4">Our Mission</h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                To deliver safe, innovative, and cost-effective oil & gas services that empower our 
                clients to achieve their operational goals — while contributing to the growth of 
                Africa's energy sector and developing local talent.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#0B1829] p-10 rounded-2xl shadow-sm"
            >
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be the most trusted and preferred oil & gas services partner in Africa, 
                recognized for our technical expertise, commitment to safety, and contribution 
                to local capacity building and sustainable energy development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-red-500" />
              <span className="text-red-600 font-medium tracking-widest uppercase text-sm">Our Values</span>
              <div className="h-px w-8 bg-red-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1829]">What Guides Us</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-[#0B1829] mb-3">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1829] mb-4">Our Journey</h2>
            <p className="text-gray-500 text-lg">Key milestones in Tevco Energy's growth story</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />
            <div className="space-y-8">
              {milestones.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center gap-6 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 inline-block">
                      <div className="text-red-600 font-bold text-lg mb-1">{item.year}</div>
                      <div className="text-gray-600">{item.event}</div>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow hidden md:block flex-shrink-0" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}