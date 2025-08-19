import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedGradientBackground from '@/components/AnimatedGradientBackground';
import ThemeSelector from '@/components/ThemeSelector';
import { commonThemes } from '@/data/commonThemes';
import { Check, Calendar, Users, Star, MessageSquare, Phone, Mail, MapPin, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, useInView } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const RealEstateAgents = () => {
  const heroRef = React.useRef(null);
  const featuresRef = React.useRef(null);
  const benefitsRef = React.useRef(null);
  const testimonialsRef = React.useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.3 });
  const benefitsInView = useInView(benefitsRef, { once: true, amount: 0.3 });
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.3 });

  const features = [
    {
      icon: <Home className="w-8 h-8 text-purple-600" />,
      title: "Smart Website + Auto Lead Gen",
      description: "Professional real estate website with automated lead generation that attracts qualified buyers and sellers 24/7."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-purple-600" />,
      title: "Smart Follow-ups & Reminders",
      description: "Automated follow-up system that nurtures prospects and converts them into clients."
    },
    {
      icon: <Calendar className="w-8 h-8 text-purple-600" />,
      title: "Appointment Scheduling",
      description: "Seamless booking system that allows clients to schedule property viewings anytime, anywhere."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Referral Tracking",
      description: "Comprehensive referral management system to track and reward client referrals."
    },
    {
      icon: <Star className="w-8 h-8 text-purple-600" />,
      title: "Client Loyalty Program",
      description: "Automated loyalty rewards system to increase client retention and repeat business."
    }
  ];

  const benefits = [
    "Increase property listings by 280%",
    "Reduce client response time by 80%",
    "Improve client satisfaction scores",
    "Generate consistent commission revenue",
    "Scale your real estate business efficiently"
  ];

  const testimonials = [
    {
      name: "David Johnson",
      role: "Real Estate Agent",
      content: "This platform has transformed my real estate business. I'm now closing 60% more deals with better client relationships.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      role: "Property Manager",
      content: "The automated follow-ups are incredible. My clients stay engaged throughout the buying/selling process, leading to faster closings.",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Real Estate Broker",
      content: "Finally, a solution that understands the real estate industry. My agency's revenue has increased by 65% since implementing this.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Real Estate Agent Automation | TryzenIQ</title>
        <meta name="description" content="Real estate agent automation: lead management, scheduling, and more. TryzenIQ." />
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
              {/* Clone Home icon to apply dark mode text color */}
              {React.cloneElement(<Home className="w-16 h-16 text-purple-600 mx-auto mb-4" />, {
                className: "w-16 h-16 text-purple-600 mx-auto mb-4 dark:text-purple-400"
              })}
              {/* Apply dark mode text color to heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 dark:text-gray-100">
                Real Estate Agents
                <br />
                {/* Adjust gradient colors for dark mode visibility */}
                <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-fuchsia-400">
                  Automation Platform
                </span>
              </h1>
            </div>
            {/* Apply dark mode text color to description */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed dark:text-gray-300">
              Scale your real estate business with our comprehensive automation solution designed specifically for property professionals and agencies.
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
                Property Business Management
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
                Our platform combines cutting-edge technology with real estate-specific features to help you grow your property business efficiently.
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
                Proven Results for Real Estate Professionals
              </h2>
              <p className="text-xl text-white/90">
                Join hundreds of successful real estate professionals who have transformed their businesses with our platform.
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
                What Our Real Estate Partners Say
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Real feedback from property professionals who have transformed their businesses.
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
                    <p className="font-semibold text-gray-900 dark:text-gray-100">{testimonial.name}</p>
                    <p className="text-purple-600 dark:text-purple-400">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Theme Selector Section (external component, no direct changes here) */}
        <ThemeSelector 
          themes={commonThemes}
          title="Choose Your Real Estate Website Theme"
          subtitle="Select from our professionally designed themes tailored for real estate agents and property professionals"
        />

        {/* CTA Section */}
        <section className="container mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            // This section already has a dark background in light mode.
            // Apply a distinct dark mode gradient and shadow for visual differentiation.
            className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-center text-white
                       dark:from-purple-900 dark:to-fuchsia-950 dark:border dark:border-purple-800 dark:shadow-xl dark:shadow-fuchsia-950"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Real Estate Business?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Join the revolution in real estate business automation. Start your free trial today and see the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Apply dark mode gradient to primary button */}
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700
                                         dark:from-purple-700 dark:to-fuchsia-800 dark:hover:from-purple-600 dark:hover:to-fuchsia-700">
                Start Free Trial
              </Button>
              {/* Apply dark mode styles to outline button, changing text/border color as needed */}
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 text-black border-white hover:bg-white hover:text-gray-900
                                         dark:text-white dark:border-purple-700 dark:hover:bg-purple-900 dark:hover:text-purple-200">
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default RealEstateAgents;