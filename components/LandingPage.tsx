import React from 'react';
import { Hero } from './Hero';
import { FeaturesSection } from './FeaturesSection';
import { EducationalSection } from './EducationalSection';
import { PrivacySection } from './PrivacySection';
import { FAQSection } from './FAQSection';
import { CTASection } from './CTASection';

export const LandingPage: React.FC = () => {
  return (
    <div className="space-y-0">
      <Hero />
      <FeaturesSection />
      <EducationalSection />
      <PrivacySection />
      <CTASection />
      <FAQSection />
    </div>
  );
};