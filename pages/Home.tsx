import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/Hero';
import { FeaturesSection } from '../components/FeaturesSection';
import { EducationalSection } from '../components/EducationalSection';
import { PrivacySection } from '../components/PrivacySection';
import { FAQSection } from '../components/FAQSection';
import { CTASection } from '../components/CTASection';

export const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>PasswordScore – Free Password Strength Checker Online</title>
        <meta name="description" content="Check your password strength instantly with PasswordScore. See crack time, security score, and tips to create stronger passwords. 100% private and secure." />
        <meta property="og:title" content="PasswordScore – Check Your Password Strength" />
        <meta property="og:description" content="Instant, private password analysis tool." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="space-y-0">
        <Hero />
        <FeaturesSection />
        <EducationalSection />
        <PrivacySection />
        <CTASection />
        <FAQSection />
      </div>
    </>
  );
};