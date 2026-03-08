import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils'; // Ensure this utility is available

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
    const handleScroll = () => {
      // Small threshold for the transition to begin
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-in-out",
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-xl border-b border-slate-200 py-2"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between transition-all duration-500">
          
          {/* Logo - Fixed Scaling logic */}
          <Link to="/" className="relative z-50 flex items-center">
            <img
              src="/public/TeVCO Logo.png"
              alt="TeVCO Energy"
              className={cn(
                "transition-all duration-300 ease-out object-contain",
                scrolled 
                  ? "h-16 mt-0" 
                  : "h-24 md:h-40 -mt-8 mb-[-15px]" // Increased size, pulled up with -mt-6
              )}
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
                  className={cn(
                    "text-[11px] font-black tracking-[0.25em] transition-all duration-500 relative uppercase",
                    scrolled
                      ? isActive ? "text-red-600" : "text-slate-900 hover:text-red-600"
                      : isActive ? "text-red-500" : "text-white hover:text-red-400"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-red-600"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            
            <Link to="/contact">
              <button className={cn(
                "px-7 py-3 text-[10px] font-black tracking-[0.2em] uppercase rounded-sm transition-all duration-500 shadow-lg active:scale-95",
                scrolled 
                  ? "bg-slate-950 text-white hover:bg-red-600 shadow-slate-900/10" 
                  : "bg-red-600 text-white hover:bg-white hover:text-red-600 shadow-red-600/20"
              )}>
                Get a Quote
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-3 rounded-sm transition-all"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-slate-900" />
            ) : (
              <Menu className={cn("w-6 h-6 transition-colors duration-500", scrolled ? 'text-slate-900' : 'text-white')} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-2xl overflow-hidden md:hidden"
          >
            <div className="px-8 py-12 flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-2xl font-black text-slate-900 hover:text-red-600 transition-colors uppercase tracking-tighter"
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="pt-4">
                <button className="w-full py-5 bg-red-600 text-white font-black text-xs uppercase tracking-widest rounded-sm shadow-xl">
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