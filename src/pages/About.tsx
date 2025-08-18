import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedGradientBackground from '@/components/AnimatedGradientBackground';
import { Button } from '@/components/ui/button';
import { 
  Zap, 
  Users, 
  Target, 
  MessageSquare, 
  BarChart, 
  Calendar,
  Shield,
  Rocket,
  Globe,
  Building2,
  Sparkles,
  Check
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const stats = [
  { number: 1000, label: "Businesses Empowered", suffix: "+" },
  { number: 98, label: "Client Satisfaction", suffix: "%" },
  { number: 24, label: "AI Support", suffix: "/7" },
  { number: 50000, label: "Automated Tasks", suffix: "+" }
];

const industries = [
  {
    name: "Healthcare",
    description: "Physiotherapy, Botox, and Clinical Services",
    icon: <Sparkles className="w-6 h-6 text-purple-600" />
  },
  {
    name: "Beauty & Wellness",
    description: "Salons, Spas, and Wellness Centers",
    icon: <Sparkles className="w-6 h-6 text-purple-600" />
  },
  {
    name: "Professional Services",
    description: "Consultants, Coaches, and Agencies",
    icon: <Sparkles className="w-6 h-6 text-purple-600" />
  },
  {
    name: "Retail & E-commerce",
    description: "Product-based Businesses",
    icon: <Sparkles className="w-6 h-6 text-purple-600" />
  }
];

const features = [
  {
    icon: <Zap className="w-8 h-8 text-purple-600" />,
    title: "Complete Business Automation",
    description: "From lead generation to client management, we automate your entire business workflow, saving you time and reducing errors."
  },
  {
    icon: <Target className="w-8 h-8 text-purple-600" />,
    title: "Smart Lead Generation",
    description: "Our AI-powered system identifies and qualifies potential clients, ensuring you focus on high-value prospects."
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-purple-600" />,
    title: "Automated Marketing",
    description: "Engage your audience with personalized marketing campaigns that run automatically, keeping your brand top of mind."
  },
  {
    icon: <Calendar className="w-8 h-8 text-purple-600" />,
    title: "Intelligent Booking",
    description: "Smart scheduling system that optimizes your calendar, reduces no-shows, and maximizes your revenue."
  }
];

const cardColors = [
  'bg-purple-100',
  'bg-purple-200',
  'bg-purple-100',
  'bg-purple-200'
];

function useCountUp(target, duration, inView) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = target;
    if (start === end) return;
    let current = start;
    const increment = end / (duration / 16);
    function step() {
      current += increment;
      if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
        setCount(end);
        return;
      }
      setCount(Math.floor(current));
      requestAnimationFrame(step);
    }
    step();
    // eslint-disable-next-line
  }, [target, duration, inView]);
  return count;
}

const About = () => {
  // Intersection observer for stats section
  const statsRef = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>About TryzenIQ | AI Business Automation</title>
        <meta name="description" content="Learn about TryzenIQ and our mission to revolutionize business automation with AI." />
      </Helmet>
      <div id="header-sentinel" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '1px', pointerEvents: 'none' }}></div>
      <AnimatedGradientBackground />
      <Header />
      <main className="pt-32 pb-16">
        {/* Hero Section */}
        <div className="container mx-auto max-w-7xl px-6 mb-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 sm:mb-4">
              About <span className="text-purple-600">tryzenIQ</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We're the all-in-one automation platform that helps businesses of all sizes 
              streamline operations, boost revenue, and scale efficiently.
            </p>
           
          </div>
        </div>

        {/* Features Grid */}
        <div className="container mx-auto max-w-7xl px-6 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose <span className="text-purple-600">Our Platform</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${cardColors[index]} hover:bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 w-full flex flex-col`}
              >
                <div className="flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{feature.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{feature.description}</p>
                <div className="space-y-3">
                  {feature.description.split('. ').map((point, pointIndex) => (
                    <div key={pointIndex} className="flex items-start space-x-2">
                      <Check className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm md:text-base">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="container mx-auto max-w-7xl px-6 mb-20">
          <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              The Future of Business Automation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Rocket className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Startup Ready</h3>
                <p className="text-white/90">Perfect for new entrepreneurs launching their business journey</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Enterprise Grade</h3>
                <p className="text-white/90">Scalable solutions for growing businesses</p>
              </div>
              <div className="text-center">
                <Globe className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Global Reach</h3>
                <p className="text-white/90">Supporting businesses worldwide</p>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Stats Section with CountUp Animation (moved below) */}
        <div ref={statsRef} className="py-8 mb-16">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const count = useCountUp(stat.number, 2500, inView);
                return (
                  <div key={index} className="text-center">
                    <div className="text-5xl md:text-6xl font-extrabold text-purple-800 mb-1">
                      {count}{stat.suffix}
                    </div>
                    <div className="text-gray-700 text-sm md:text-base font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto max-w-7xl px-6">
          <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of businesses already using our solutions to drive growth and efficiency.
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

export default About;
