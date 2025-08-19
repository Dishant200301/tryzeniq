import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedGradientBackground from '@/components/AnimatedGradientBackground';
import ThemeSelector from '@/components/ThemeSelector';
import { Check, Sparkles, Calendar, Users, Star, TrendingUp, Shield, MessageSquare, Phone, Mail, MapPin, FileText, DollarSign, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, useInView } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const Insurance = () => {
  const heroRef = React.useRef(null);
  const featuresRef = React.useRef(null);
  const benefitsRef = React.useRef(null);
  const testimonialsRef = React.useRef(null);
  const themesRef = React.useRef(null); // Not used in this component, but left as is
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.3 });
  const benefitsInView = useInView(benefitsRef, { once: true, amount: 0.3 });
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.3 });

  const features = [
    {
      icon: <Sparkles className="w-8 h-8 text-purple-600" />,
      title: "Smart Lead Generation",
      description: "Automated lead generation system that identifies and qualifies potential insurance clients 24/7."
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-600" />,
      title: "Policy Management",
      description: "Comprehensive policy tracking and management system for all client insurance products."
    },
    {
      icon: <Calendar className="w-8 h-8 text-purple-600" />,
      title: "Renewal Reminders",
      description: "Automated renewal notifications and follow-up system to retain clients and increase revenue."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Client Portal",
      description: "Professional client portal for policy access, claims filing, and document management."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      title: "Commission Tracking",
      description: "Advanced commission tracking and reporting system for multiple insurance carriers."
    }
  ];

  const benefits = [
    "Increase policy sales by 250%",
    "Reduce client churn by 60%",
    "Streamline claims processing",
    "Improve client satisfaction scores",
    "Scale your agency without additional staff"
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Independent Insurance Agent",
      content: "This platform revolutionized my insurance business. I'm now managing 3x more clients with better organization and higher retention rates.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Insurance Agency Owner",
      content: "The automated renewal system alone has increased my revenue by 40%. My clients love the easy access to their policies.",
      rating: 5
    },
    {
      name: "Jennifer Thompson",
      role: "Insurance Broker",
      content: "Finally, a solution designed for insurance professionals. The commission tracking and client management features are game-changers.",
      rating: 5
    }
  ];

  const insuranceThemes = [
    {
      id: "professional-classic",
      name: "Professional Classic",
      description: "A sophisticated, traditional design perfect for established insurance agencies looking to convey trust and reliability.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      demoUrl: "https://insure.tryzeniq.com",
      features: ["Professional Header Design", "Trust-focused Layout", "Clear Policy Information", "Contact Forms"],
      color: "bg-blue-600", // These colors are for light mode and handled by ThemeSelector internally
      popular: true
    },
    {
      id: "modern-minimal",
      name: "Modern Minimal",
      description: "Clean, contemporary design with focus on user experience and modern insurance solutions.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      demoUrl: "https://demo-insurance-modern.tryzeniq.com",
      features: ["Minimalist Design", "Fast Loading", "Mobile-First", "Easy Navigation"],
      color: "bg-purple-600"
    },
    {
      id: "tech-savvy",
      name: "Tech Savvy",
      description: "Innovative design showcasing cutting-edge technology and digital insurance solutions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      demoUrl: "https://demo-insurance-tech.tryzeniq.com",
      features: ["Interactive Elements", "Data Visualization", "AI Integration", "Real-time Updates"],
      color: "bg-green-600"
    },
    {
      id: "family-friendly",
      name: "Family Friendly",
      description: "Warm, approachable design perfect for family insurance and personal coverage needs.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      demoUrl: "https://demo-insurance-family.tryzeniq.com",
      features: ["Warm Color Palette", "Family-Focused Content", "Easy Quote Process", "Trust Indicators"],
      color: "bg-orange-600"
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Insurance Automation Services | TryzenIQ</title>
        <meta name="description" content="Insurance automation services: lead generation, policy management, and more for agencies. TryzenIQ." />
      </Helmet>
      <div id="header-sentinel" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '1px', pointerEvents: 'none' }}></div>
      <AnimatedGradientBackground />
      <Header />
      
      {/* Apply overall dark mode background to main content */}
      <main className="pt-32 pb-16 dark:bg-gray-900">
        {/* Hero Section */}
        <section ref={heroRef} className="container mx-auto max-w-7xl px-6 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="mb-6">
              {/* Clone Shield icon to apply dark mode text color */}
              {React.cloneElement(<Shield className="w-16 h-16 text-purple-600 mx-auto mb-4" />, {
                className: "w-16 h-16 text-purple-600 mx-auto mb-4 dark:text-purple-400"
              })}
              {/* Apply dark mode text color to heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 dark:text-gray-100">
                Insurance Agency
                <br />
                {/* Adjust gradient colors for dark mode visibility */}
                <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-fuchsia-400">
                  Automation Platform
                </span>
              </h1>
            </div>
            {/* Apply dark mode text color to description */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed dark:text-gray-300">
              Transform your insurance business with our comprehensive automation solution designed specifically for insurance agents, brokers, and agencies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Apply dark mode gradient to primary button */}
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700
                                         dark:from-purple-700 dark:to-fuchsia-800 dark:hover:from-purple-600 dark:hover:to-fuchsia-700">
                Start Free Trial
              </Button>
              {/* Apply dark mode styles to outline button */}
              <Button size="lg" variant="outline" className="text-lg px-8 py-6
                                         dark:border-purple-700 dark:text-purple-300 dark:hover:bg-purple-900 dark:hover:text-purple-200">
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section ref={featuresRef} className="container mx-auto max-w-7xl px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              {/* Apply dark mode text colors to heading and subheading */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-gray-100">
                Everything You Need to Scale Your Insurance Business
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
                Our platform combines cutting-edge technology with insurance-specific features to help you grow your agency efficiently.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  // Apply dark mode background, border, and shadow to feature cards
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2
                             dark:bg-gray-800 dark:border dark:border-gray-700 dark:shadow-xl dark:shadow-purple-950 dark:hover:shadow-2xl dark:hover:shadow-purple-950"
                >
                  <div className="mb-4">
                    {/* Clone feature icon to apply dark mode text color */}
                    {React.cloneElement(feature.icon, {
                      className: `${feature.icon.props.className} dark:text-purple-400`
                    })}
                  </div>
                  {/* Apply dark mode text color to feature title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 dark:text-gray-50">{feature.title}</h3>
                  {/* Apply dark mode text color to feature description */}
                  <p className="text-gray-600 leading-relaxed dark:text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Benefits Section */}
        <section ref={benefitsRef} className="container mx-auto max-w-7xl px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            // Apply dark mode gradient to benefits container
            className="bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-3xl p-12 text-white
                       dark:from-purple-800 dark:to-fuchsia-900"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Proven Results for Insurance Professionals
              </h2>
              <p className="text-xl text-white/90">
                Join hundreds of successful insurance agents and agencies who have transformed their businesses.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  {/* Text and icon are already white, suitable for dark mode */}
                  <Check className="w-6 h-6 text-white flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Testimonials Section */}
        <section ref={testimonialsRef} className="container mx-auto max-w-7xl px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              {/* Apply dark mode text colors to heading and subheading */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-gray-100">
                What Our Insurance Clients Say
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Real feedback from insurance professionals who have transformed their businesses.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  // Apply dark mode background, border, and shadow to testimonial cards
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300
                             dark:bg-gray-800 dark:border dark:border-gray-700 dark:shadow-xl dark:shadow-purple-950 dark:hover:shadow-2xl dark:hover:shadow-purple-950"
                >
                  <div className="flex items-center mb-4">
                    {/* Star icons are yellow, which is generally visible on dark backgrounds */}
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  {/* Apply dark mode text color to testimonial content */}
                  <p className="text-gray-600 mb-6 italic dark:text-gray-300">"{testimonial.content}"</p>
                  <div>
                    {/* Apply dark mode text colors to author name and role */}
                    <h4 className="font-bold text-gray-900 dark:text-gray-100">{testimonial.name}</h4>
                    <p className="text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Theme Selector Section (external component, no direct changes here) */}
        <ThemeSelector 
          themes={insuranceThemes}
          title="Choose Your Insurance Website Theme"
          subtitle="Select from our professionally designed themes tailored for insurance agencies and brokers"
        />

        {/* CTA Section */}
        <section className="container mx-auto max-w-7xl px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            // This section already has a dark background in light mode.
            // Apply a distinct dark mode gradient and shadow for visual differentiation.
            className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white text-center
                       dark:from-purple-900 dark:to-fuchsia-950 dark:border dark:border-purple-800 dark:shadow-xl dark:shadow-fuchsia-950"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Insurance Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of insurance professionals who have already automated their businesses and increased their revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Apply dark mode gradient to primary button */}
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700
                                         dark:from-purple-700 dark:to-fuchsia-800 dark:hover:from-purple-600 dark:hover:to-fuchsia-700">
                Start Your Free Trial
              </Button>
              {/* Apply dark mode styles to outline button, changing text/border color as needed */}
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 text-black border-white hover:bg-white hover:text-gray-900
                                         dark:text-white dark:border-purple-700 dark:hover:bg-purple-900 dark:hover:text-purple-200">
                Schedule a Demo
              </Button>
            </div>
          </motion.div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Insurance;