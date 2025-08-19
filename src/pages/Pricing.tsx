import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingSection from '@/components/PricingSection';
import AnimatedGradientBackground from '@/components/AnimatedGradientBackground';
import { Helmet } from 'react-helmet-async';

const Pricing = () => {
  return (
    // The root div.min-h-screen typically doesn't need a direct background class change
    // here if Header, main, and Footer components are designed to have their own backgrounds
    // in dark mode, and AnimatedGradientBackground handles the overall page background.
    <div className="min-h-screen">
      <Helmet>
        <title>Pricing for AI Automation Solutions | TryzenIQ</title>
        <meta name="description" content="See pricing for TryzenIQ's AI automation solutions for clinics and businesses." />
      </Helmet>
      <div id="header-sentinel" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '1px', pointerEvents: 'none' }}></div>
      <AnimatedGradientBackground />
      <Header />
      {/*
        Modifications applied to the 'main' element:
        - `bg-transparent`: Explicitly keeps the background transparent in light mode,
          allowing the AnimatedGradientBackground to show through, which is the current behavior.
        - `dark:bg-gray-900`: Applies a dark background color when dark mode is active.
        - `dark:text-white`: Changes the text color to white for better contrast in dark mode.
        These changes do not affect or override anything in light mode.
      */}
      <main className="pt-20 pb-16 bg-transparent dark:bg-gray-900 dark:text-white">
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;