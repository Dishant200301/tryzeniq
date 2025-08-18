import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedGradientBackground from '@/components/AnimatedGradientBackground';
import NicheSection from '@/components/NicheSection';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>AI Automation Services for Businesses | TryzenIQ</title>
        <meta name="description" content="Explore AI automation services for clinics, wellness, real estate, and more with TryzenIQ." />
      </Helmet>
      <div id="header-sentinel" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '1px', pointerEvents: 'none' }}></div>
      <AnimatedGradientBackground />
      <Header />
      <main className="pt-32 pb-16">
        {/* Hero Section */}
        <div className="container mx-auto max-w-7xl px-6 mb-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 sm:mb-4">
              Discover Our Powerful <br className="hidden md:block" /><span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">Service Suite</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Where We Help To Automate This Business - Comprehensive automation solutions for various industries and niches.
            </p>
          </div>
        </div>

        {/* Services Section using NicheSection component */}
        <NicheSection hideTitle={true} />

        {/* CTA Section */}
        <div className="container mx-auto max-w-7xl px-6 mt-20">
          <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of businesses already using our platform to streamline operations and boost growth.
            </p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6">
              Get Started Today
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services; 