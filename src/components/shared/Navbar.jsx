import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Ensure framer-motion is installed: npm install framer-motion
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-1'
          : 'bg-transparent py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69ac4a33212ff26d344367f2/2b622ff31_TeVCO_Logo_Transparent.png"
              alt="TeVCO Energy"
              className={`transition-all duration-300 ${scrolled ? 'h-12' : 'h-16'} w-auto`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[13px] font-bold tracking-[0.15em] transition-all duration-300 relative uppercase ${
                    scrolled
                      ? isActive ? 'text-red-600' : 'text-slate-800 hover:text-red-600'
                      : isActive ? 'text-red-500' : 'text-white hover:text-red-400'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-red-600"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            
            <Link to="/contact">
              <button className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold tracking-widest uppercase rounded-md transition-all shadow-lg shadow-red-600/20 active:scale-95">
                Get a Quote
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-slate-900" />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-slate-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl overflow-hidden md:hidden"
          >
            <div className="px-8 py-10 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-xl font-bold text-slate-800 hover:text-red-600 transition-colors uppercase tracking-widest"
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="pt-4">
                <button className="w-full py-4 bg-red-600 text-white font-bold rounded-lg uppercase tracking-widest shadow-lg">
                  Get a Quote
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}