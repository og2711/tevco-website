import React from 'react';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import ServicesOverview from '../components/home/ServicesOverview';
import AboutPreview from '../components/home/AboutPreview';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <ServicesOverview />
      <AboutPreview />
      <CTASection />
    </div>
  );
}