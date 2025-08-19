import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedGradientBackground from '@/components/AnimatedGradientBackground';
import { Zap, Users, Send, Shield, BarChart, Clock, MessageSquare, Settings, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, useInView } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const solutions = [
  {
    title: "AI-Powered Automation",
    description: "Streamline your operations with intelligent automation that learns and adapts to your business needs.",
    // The icon's class needs to be modified at render time to apply dark mode styles
    icon: <Zap className="w-8 h-8 text-purple-600" />, 
    features: [
      "Smart workflow automation",
      "Customizable automation rules",
      "Real-time process optimization",
      "Automated task scheduling"
    ]
  },
  {
    title: "Client Management",
    description: "Build stronger relationships with your clients through personalized engagement and automated follow-ups.",
    icon: <Users className="w-8 h-8 text-purple-600" />,
    features: [
      "Client profile management",
      "Automated follow-up system",
      "Client feedback collection",
      "Loyalty program integration"
    ]
  },
  {
    title: "Smart Communication",
    description: "Enhance your communication with AI-driven messaging and automated response systems.",
    icon: <MessageSquare className="w-8 h-8 text-purple-600" />,
    features: [
      "AI chatbot integration",
      "Multi-channel messaging",
      "Automated response templates",
      "Communication analytics"
    ]
  },
  {
    title: "Analytics & Insights",
    description: "Make data-driven decisions with comprehensive analytics and real-time insights.",
    icon: <BarChart className="w-8 h-8 text-purple-600" />,
    features: [
      "Real-time performance metrics",
      "Custom reporting dashboards",
      "Predictive analytics",
      "Business intelligence tools"
    ]
  },
  {
    title: "Security & Compliance",
    description: "Keep your business secure and compliant with enterprise-grade security features.",
    icon: <Shield className="w-8 h-8 text-purple-600" />,
    features: [
      "End-to-end encryption",
      "Compliance monitoring",
      "Data protection tools",
      "Security analytics"
    ]
  },
  {
    title: "Time Management",
    description: "Optimize your schedule and boost productivity with smart time management tools.",
    icon: <Clock className="w-8 h-8 text-purple-600" />,
    features: [
      "Smart scheduling system",
      "Resource optimization",
      "Time tracking analytics",
      "Automated reminders"
    ]
  }
];

const Solutions = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate center of the card
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate distance from center (normalized to -1 to 1)
    const normalizedX = (x - centerX) / centerX;
    const normalizedY = (y - centerY) / centerY;
    
    setMousePosition({ x: normalizedX, y: normalizedY });
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    // The outermost div can optionally have a dark background, depending on how AnimatedGradientBackground is layered.
    // Applying it to <main> usually suffices for the main content area.
    <div className="min-h-screen"> 
      <Helmet>
        <title>AI Solutions for Business Growth | TryzenIQ</title>
        <meta name="description" content="Discover AI solutions for business growth, automation, and efficiency with TryzenIQ." />
      </Helmet>
      <div id="header-sentinel" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '1px', pointerEvents: 'none' }}></div>
      <AnimatedGradientBackground />
      <Header />
      <main className="pt-32 pb-16 dark:bg-gray-900"> {/* Apply dark background to main content area */}
        {/* Hero Section */}
        <div className="container mx-auto max-w-7xl px-6 mb-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 sm:mb-4 dark:text-gray-100">
              Transform Your Business with <span className="text-purple-600 dark:text-purple-400">Smart Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 dark:text-gray-300">
              Discover our comprehensive suite of AI-powered tools designed to streamline your operations, 
              enhance client relationships, and drive growth.
            </p>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 justify-center">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={
                  "bg-gradient-to-br from-[#f6f3ff] to-[#e9d8fd] border-2 border-purple-400 rounded-2xl p-6 md:p-4 shadow-lg w-full max-w-sm flex flex-col mx-auto group transition-transform duration-300 ease-out " +
                  "dark:from-gray-800 dark:to-gray-950 dark:border-purple-700 dark:shadow-2xl"
                }
                style={{
                  transform: hoveredCard === index 
                    ? `perspective(1000px) rotateX(${mousePosition.y * -15}deg) rotateY(${mousePosition.x * 15}deg) scale3d(1.02, 1.02, 1.02)`
                    : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
                }}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center justify-center mb-4">
                  {/* Clone the icon element to add dark mode class without affecting the original definition */}
                  {React.cloneElement(solution.icon, {
                    className: `${solution.icon.props.className} dark:text-purple-400`
                  })}
                </div>
                <h3 className="text-xl md:text-lg font-bold text-gray-900 group-hover:text-purple-800 mb-4 md:mb-2 text-center transition-all duration-300 ease-in-out dark:text-gray-50 dark:group-hover:text-purple-300">
                    {solution.title}
                </h3>
                <p className="text-gray-600 mb-4 text-center group-hover:text-gray-800 transition-all duration-300 ease-in-out dark:text-gray-300 dark:group-hover:text-gray-100">
                    {solution.description}
                </p>
                <div className="space-y-3 md:space-y-2 mb-6 md:mb-3">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 md:space-x-3 xl:space-x-4">
                      <Check className="w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 text-purple-500 group-hover:text-purple-700 transition-all duration-300 ease-in-out dark:text-purple-400 dark:group-hover:text-purple-300" />
                      <span className="text-gray-700 group-hover:text-gray-800 text-xs md:text-sm xl:text-base transition-all duration-300 ease-in-out dark:text-gray-200 dark:group-hover:text-gray-50">
                          {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto max-w-7xl px-6 mt-20">
          <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-3xl p-12 text-center text-white dark:from-purple-800 dark:to-fuchsia-900 dark:shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of businesses already using our solutions to drive growth and efficiency.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 
                         dark:bg-purple-500 dark:text-white dark:hover:bg-purple-600 dark:hover:text-gray-50"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;