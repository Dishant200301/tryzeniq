import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingSection from '@/components/PricingSection';
import AnimatedGradientBackground from '@/components/AnimatedGradientBackground';
import { Helmet } from 'react-helmet-async';

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Pricing for AI Automation Solutions | TryzenIQ</title>
        <meta name="description" content="See pricing for TryzenIQ's AI automation solutions for clinics and businesses." />
      </Helmet>
      <div id="header-sentinel" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '1px', pointerEvents: 'none' }}></div>
      <AnimatedGradientBackground />
      <Header />
      <main className="pt-20 pb-16">
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};


export default Pricing;
