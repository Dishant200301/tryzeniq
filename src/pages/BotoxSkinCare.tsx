import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedGradientBackground from '@/components/AnimatedGradientBackground';
import ThemeSelector from '@/components/ThemeSelector';
import { Check, Sparkles, Calendar, Users, Star, TrendingUp, Shield, MessageSquare, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, useInView } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const BotoxSkinCare = () => {
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
      icon: <Sparkles className="w-8 h-8 text-purple-600" />,
      title: "Smart Website + Auto Lead Gen",
      description: "Professional website with automated lead generation that works 24/7 to attract your ideal clients."
    },
    {
      icon: <Calendar className="w-8 h-8 text-purple-600" />,
      title: "Smart Follow-ups & Reminders",
      description: "Automated follow-up system that keeps clients engaged and reduces no-shows."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Appointment Scheduling",
      description: "Seamless booking system that allows clients to schedule appointments anytime, anywhere."
    },
    {
      icon: <Star className="w-8 h-8 text-purple-600" />,
      title: "Before/After Tracking",
      description: "Visual progress tracking system to showcase treatment results and client transformations."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      title: "Client Loyalty Program",
      description: "Automated loyalty rewards system to increase client retention and referrals."
    }
  ];

  const benefits = [
    "Increase client bookings by 300%",
    "Reduce administrative workload by 80%",
    "Improve client satisfaction scores",
    "Generate consistent monthly revenue",
    "Scale your practice without hiring more staff"
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Dermatologist",
      content: "This automation platform transformed my practice. I'm now seeing 40% more clients with half the administrative work.",
      rating: 5
    },
    {
      name: "Dr. Michael Chen",
      role: "Aesthetic Physician",
      content: "The before/after tracking feature is incredible. My clients love seeing their progress, and it's brought in so many referrals.",
      rating: 5
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Plastic Surgeon",
      content: "Finally, a solution that understands the aesthetic industry. My practice has never been more efficient or profitable.",
      rating: 5
    }
  ];

  const aestheticThemes = [
    {
      id: "luxury-spa",
      name: "Luxury Spa",
      description: "Elegant, premium design perfect for high-end aesthetic clinics and luxury skincare practices.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      demoUrl: "https://demo-aesthetic-luxury.tryzeniq.com",
      features: ["Luxury Branding", "Before/After Gallery", "Appointment Booking", "Treatment Showcase"],
      color: "bg-pink-600",
      popular: true
    },
    {
      id: "medical-modern",
      name: "Medical Modern",
      description: "Clean, professional design focused on medical credibility and patient trust.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      demoUrl: "https://demo-aesthetic-medical.tryzeniq.com",
      features: ["Medical Credibility", "Patient Education", "Secure Forms", "HIPAA Compliant"],
      color: "bg-blue-600"
    },
    {
      id: "beauty-glam",
      name: "Beauty Glam",
      description: "Vibrant, glamorous design perfect for beauty-focused aesthetic practices.",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      demoUrl: "https://demo-aesthetic-beauty.tryzeniq.com",
      features: ["Glamorous Design", "Social Media Integration", "Client Reviews", "Treatment Videos"],
      color: "bg-purple-600"
    },
    {
      id: "wellness-natural",
      name: "Wellness Natural",
      description: "Organic, natural design perfect for holistic skincare and wellness practices.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      demoUrl: "https://demo-aesthetic-wellness.tryzeniq.com",
      features: ["Natural Aesthetics", "Wellness Focus", "Organic Branding", "Holistic Approach"],
      color: "bg-green-600"
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Botox & Skin Care Automation | TryzenIQ</title>
        <meta name="description" content="Botox and skin care automation: AI bookings, client engagement, and more. TryzenIQ." />
      </Helmet>
      <div id="header-sentinel" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '1px', pointerEvents: 'none' }}></div>
      <AnimatedGradientBackground />
      <Header />
      
      <main className="pt-32 pb-16">
        {/* Hero Section */}
        <section ref={heroRef} className="container mx-auto max-w-7xl px-6 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="mb-6">
              <Sparkles className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Botox & Skin Care
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                  Automation Platform
                </span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Transform your aesthetic practice with our comprehensive automation solution designed specifically for Botox clinics and skincare professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Everything You Need to Scale Your Practice
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform combines cutting-edge technology with industry-specific features to help you grow your aesthetic practice efficiently.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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
            className="bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-3xl p-12 text-white"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Proven Results for Aesthetic Practices
              </h2>
              <p className="text-xl text-white/90">
                Join hundreds of successful Botox and skincare professionals who have transformed their practices.
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600">
                Real feedback from aesthetic professionals who have transformed their practices.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-purple-600">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Theme Selector Section */}
        <ThemeSelector 
          themes={aestheticThemes}
          title="Choose Your Aesthetic Website Theme"
          subtitle="Select from our professionally designed themes tailored for aesthetic clinics and skincare practices"
        />

        {/* CTA Section */}
        <section className="container mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Aesthetic Practice?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Join the revolution in aesthetic practice automation. Start your free trial today and see the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 text-black border-white hover:bg-white hover:text-gray-900">
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

export default BotoxSkinCare; 