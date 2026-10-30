import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { MenuHighlights } from '../components/home/MenuHighlights';
import { AboutSection } from '../components/home/AboutSection';
import { ReasonsToVisit } from '../components/home/ReasonsToVisit';
import { GalleryPreview } from '../components/home/GalleryPreview';
import { ReviewSection } from '../components/home/ReviewSection';
import { LocationSection } from '../components/home/LocationSection';
import { FAQAccordion } from '../components/home/FAQAccordion';
import { FinalCTA } from '../components/home/FinalCTA';

export const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <MenuHighlights />
      <AboutSection />
      <ReasonsToVisit />
      <GalleryPreview />
      <ReviewSection />
      <LocationSection />
      <FAQAccordion />
      <FinalCTA />
    </main>
  );
};
