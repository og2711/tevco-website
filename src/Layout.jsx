import React from 'react';
// Use the @ alias to avoid "relative path hell"
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';

export default function Layout({ children }) {
  return (
    /* Use 'bg-background' instead of 'bg-white' to support the 
       Dark Mode variables in your index.css */
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* 'flex-grow' ensures the footer stays at the bottom 
          even on short pages */}
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}