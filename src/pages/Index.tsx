import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AISolutionsSection from '@/components/AISolutionsSection';
import NewAISolutionsSection from '@/components/NewAISolutionsSection';
import ResultsSection from '@/components/ResultsSection';
import DashboardSection from '@/components/DashboardSection';
import NicheSection from '@/components/NicheSection';
import ComparisonSection from '@/components/ComparisonSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>AI Automation for Clinics & Businesses | TryzenIQ</title>
        <meta name="description" content="TryzenIQ offers AI automation for clinics and businesses to maximize bookings and streamline operations." />
      </Helmet>
      <div id="header-sentinel" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '1px', pointerEvents: 'none' }}></div>
      <Header />
      <HeroSection />
      {/* <AISolutionsSection /> */}
      {/* <NewAISolutionsSection /> */}
      <ResultsSection />
      <DashboardSection />
      <NicheSection />
      <ComparisonSection />
      <div className="mt-16">
        <PricingSection />
      </div>
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
