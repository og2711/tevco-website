import React from 'react';
import { Link } from 'react-router-dom';
// If your utils/index.js doesn't have createPageUrl, 
// this fallback ensures the app doesn't crash.
const getLink = (page) => page === 'Home' ? '/' : `/${page.toLowerCase()}`;

import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

const services = [
  'Wireline Services',
  'Well Intervention',
  'Stimulation',
  'Manpower Training & Supply',
  'Procurement',
];

const quickLinks = [
  { name: 'Home', page: 'Home' },
  { name: 'About Us', page: 'About' },
  { name: 'Our Services', page: 'Services' },
  { name: 'Contact Us', page: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#070E1A] text-gray-400 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-1">
            <div className="font-bold text-2xl text-white mb-4 tracking-tight">
              <span className="text-red-600">TEVCO</span> ENERGY
            </div>
            <p className="text-sm leading-relaxed mb-6 text-gray-400/80">
              A leading oil and gas servicing firm delivering world-class energy solutions 
              across Nigeria and the African continent.
            </p>
            {/* Professional Accent Bar */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-1 bg-red-600 rounded-full" />
              <div className="w-6 h-1 bg-blue-600 rounded-full" />
              <div className="w-3 h-1 bg-white/20 rounded-full" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-xs tracking-[0.2em] uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={getLink(link.page)}
                    className="text-sm hover:text-white transition-all duration-200 flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-xs tracking-[0.2em] uppercase">
              Core Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm hover:text-white hover:pl-1 transition-all duration-200 block"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-xs tracking-[0.2em] uppercase">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm">Lagos, Nigeria</span>
              </li>
              <li className="flex items-start gap-3 group">
                <Phone className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm">+234 (0) 123 456 7890</span>
              </li>
              <li className="flex items-start gap-3 group">
                <Mail className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm">info@tevcoenergy.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="bg-black/20 py-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] uppercase tracking-widest text-gray-500">
            © {new Date().getFullYear()} Tevco Energy. Engineered for Excellence.
          </p>
          <div className="flex items-center gap-8 text-[10px] uppercase tracking-widest text-gray-500">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}