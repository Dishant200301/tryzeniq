import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedGradientBackground from '@/components/AnimatedGradientBackground';
import ThemeSelector from '@/components/ThemeSelector';
import { commonThemes } from '@/data/commonThemes';
import { Check, Users, Calendar, Star, MessageSquare, Phone, Mail, MapPin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, useInView } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const TherapistsCounselors = () => {
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
      icon: <Heart className="w-8 h-8 text-purple-600" />,
      title: "Smart Website + Auto Lead Gen",
      description: "Professional therapy website with automated lead generation that attracts clients seeking mental health support 24/7."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-purple-600" />,
      title: "Smart Follow-ups & Reminders",
      description: "Automated follow-up system that keeps clients engaged and reduces session cancellations."
    },
    {
      icon: <Calendar className="w-8 h-8 text-purple-600" />,
      title: "Appointment Scheduling",
      description: "Seamless booking system that allows clients to schedule therapy sessions anytime, anywhere."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Referral Tracking",
      description: "Comprehensive referral management system to track and reward client referrals."
    },
    {
      icon: <Star className="w-8 h-8 text-purple-600" />,
      title: "Client Loyalty Program",
      description: "Automated loyalty rewards system to increase client retention and long-term therapy relationships."
    }
  ];

  const benefits = [
    "Increase client bookings by 240%",
    "Reduce session cancellations by 75%",
    "Improve client satisfaction scores",
    "Generate consistent therapy revenue",
    "Scale your mental health practice efficiently"
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Thompson",
      role: "Licensed Therapist",
      content: "This platform has transformed my therapy practice. I'm now helping 50% more clients with better outcomes and higher retention.",
      rating: 5
    },
    {
      name: "Dr. Michael Chen",
      role: "Clinical Psychologist",
      content: "The automated follow-ups are incredible. My clients stay engaged between sessions, leading to better therapeutic outcomes.",
      rating: 5
    },
    {
      name: "Dr. Lisa Rodriguez",
      role: "Counseling Psychologist",
      content: "Finally, a solution that understands the mental health industry. My practice's client satisfaction has increased by 60% since implementing this.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Therapist & Counselor Automation | TryzenIQ</title>
        <meta name="description" content="Therapist and counselor automation: appointment scheduling, client care, and more. TryzenIQ." />
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
              <Users className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Therapists & Counselors
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                  Automation Platform
                </span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Streamline your mental health practice with our comprehensive automation solution designed specifically for therapists and counseling services.
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
                Mental Health Practice Management
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform combines cutting-edge technology with therapy-specific features to help you grow your mental health practice efficiently.
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
                Proven Results for Mental Health Professionals
              </h2>
              <p className="text-xl text-white/90">
                Join hundreds of successful therapists who have transformed their practices with our platform.
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
                What Our Mental Health Partners Say
              </h2>
              <p className="text-xl text-gray-600">
                Real feedback from mental health professionals who have transformed their practices.
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
          themes={commonThemes}
          title="Choose Your Therapy Website Theme"
          subtitle="Select from our professionally designed themes tailored for therapists and mental health professionals"
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
              Ready to Transform Your Mental Health Practice?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Join the revolution in mental health practice automation. Start your free trial today and see the difference.
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

export default TherapistsCounselors; 