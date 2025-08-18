import { Star } from 'lucide-react';

  const testimonials = [
    {
      text: "Wow, this is absolutely incredible - huge props to the @relume_io team for bringing these amazing AI superpowers to more Webflow visual developers!",
      author: "@callmevlad",
      role: "Co-founder & CEO @webflow",
      rating: 5
    },
    {
      text: "Finally an AI tool that I will ACTUALLY include as part of my workflow. I love how seamless it is from start to finish.",
      author: "@SoyBalta",
      role: "Designer & Webflow developer",
      rating: 5
    },
    {
      text: "This is pure magic. ✨ Sitemaps in seconds ➜ Wireframes in minutes ➜ Full copy written with AI ➜ Layered wireframes to Figma",
      author: "@relume_io",
      role: "saving the day for web and product designers!",
      rating: 5
    },
    {
      text: "Very excited for @relume_io's new AI-powered generative website builder. I love the messaging and positioning: 'to empower you, not replace you'.",
      author: "@gabelopez",
      role: "Designer",
      rating: 5
    },
    {
      text: "Yooooooooo, this is 🔥 @relume_io has been one of my favorite teams I've seen evolve over the years. They're carving out a tremendous groove that designers and developers can vibe in when being able to generate web concepts.",
      author: "@rileyj_s",
      role: "Designer & Webflow developer",
      rating: 5
    },
    {
      text: "The new @relume_io AI Sitemap and Wireframe tools are game changers! This can absolutely speed up our development and will change how we build and design @webflow sites going forward.",
      author: "@KarimArdalan",
      role: "Designer & Webflow developer",
      rating: 5
  },
  {
    text: "TryzenIQ transformed our appointment scheduling. Our clients love the seamless booking experience, and our team saves hours every week!",
    author: "Priya Sharma",
    role: "Clinic Manager, SmileCare Dental",
    rating: 5
  },
  {
    text: "The automation features are a game changer for our insurance agency. Renewals and follow-ups are now effortless. Highly recommended!",
    author: "James O'Connor",
    role: "Director, SafeGuard Insurance",
    rating: 5
  },
  {
    text: "As a small business owner, I appreciate how easy it is to manage leads and client communication with TryzenIQ. The support team is fantastic!",
    author: "Linda Park",
    role: "Owner, Park Wellness Studio",
    rating: 5
  },
  {
    text: "We saw a 30% increase in client engagement after switching to TryzenIQ. The AI follow-ups and review requests work like magic!",
    author: "Carlos Mendes",
    role: "Operations Lead, FitPro Gym",
    rating: 5
  },
  {
    text: "The onboarding process was smooth and the platform is very intuitive. Our salon now runs more efficiently than ever before.",
    author: "Sophie Dubois",
    role: "Manager, BelleVie Spa",
    rating: 5
  },
  {
    text: "TryzenIQ's automation tools helped us scale our real estate business. Scheduling and client follow-ups are now fully automated!",
    author: "Michael Chen",
    role: "Agent, UrbanNest Realty",
    rating: 5
  },
  {
    text: "I was skeptical at first, but the results speak for themselves. Our consultation bookings doubled in just two months!",
    author: "Anita Patel",
    role: "Consultant, GrowthEdge Solutions",
    rating: 5
  },
  {
    text: "The AI chatbot is incredibly helpful for answering client questions instantly. Our customer satisfaction scores have never been higher.",
    author: "David Kim",
    role: "Support Lead, TechBridge IT",
    rating: 5
  },
  {
    text: "From automated reminders to smart review requests, TryzenIQ covers it all. Our team can finally focus on what matters most.",
    author: "Emily Johnson",
    role: "Practice Manager, Mindful Therapy Group",
    rating: 5
    }
  ];

const getInitial = (author) => {
  if (!author) return '?';
  return author.charAt(1).toUpperCase();
};

const TestimonialsSection = () => {
  // Create offset arrays for each column
  const testimonialsCol1 = testimonials;
  const testimonialsCol2 = testimonials.slice(1).concat(testimonials.slice(0,1));
  const testimonialsCol3 = testimonials.slice(2).concat(testimonials.slice(0,2));

  return (
    <section className="relative py-20 font-sans overflow-hidden">
      <div className="container mx-auto max-w-7xl px-8 pt-12">
        <div className="text-center mb-16">
          <div className="text-sm text-gray-600 mb-4">100+ Designers & developers trust TryzenIQ</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Helping Lumers streamline their<br />
            workflow and <span className="text-purple-600">deliver faster</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Down */}
          <div className="relative h-[500px] overflow-hidden testimonials-fade-mask">
            <div 
              className="animate-testimonials-scroll-down flex flex-col gap-8 will-change-transform" 
              style={{animationDuration: '150s'}}
            >
              {testimonialsCol1.concat(testimonialsCol1).map((testimonial, i) => (
            <div
                  key={i} 
                  className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8 flex flex-col gap-6 transition-transform duration-300 hover:scale-105 hover:shadow-lg group" 
                  tabIndex={0} 
                  style={{willChange: 'transform'}}
            >
                  <div className="flex items-center mb-2">
                    {[...Array(testimonial.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
                  <p className="text-gray-700 text-base leading-relaxed mb-4">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                        {getInitial(testimonial.author)}
                  </span>
                </div>
                <div>
                      <div className="font-semibold text-gray-900 text-base">{testimonial.author}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
          {/* Column 2: Up */}
          <div className="relative h-[500px] overflow-hidden testimonials-fade-mask">
            <div 
              className="animate-testimonials-scroll-up flex flex-col gap-8 will-change-transform" 
              style={{animationDuration: '150s'}}
            >
              {testimonialsCol2.concat(testimonialsCol2).map((testimonial, i) => (
                <div 
                  key={i} 
                  className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8 flex flex-col gap-6 transition-transform duration-300 hover:scale-105 hover:shadow-lg group" 
                  tabIndex={0} 
                  style={{willChange: 'transform'}}
                >
                  <div className="flex items-center mb-2">
                    {[...Array(testimonial.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed mb-4">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {getInitial(testimonial.author)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-base">{testimonial.author}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Column 3: Down */}
          <div className="relative h-[500px] overflow-hidden testimonials-fade-mask">
            <div 
              className="animate-testimonials-scroll-down flex flex-col gap-8 will-change-transform" 
              style={{animationDuration: '150s'}}
            >
              {testimonialsCol3.concat(testimonialsCol3).map((testimonial, i) => (
                <div 
                  key={i} 
                  className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8 flex flex-col gap-6 transition-transform duration-300 hover:scale-105 hover:shadow-lg group" 
                  tabIndex={0} 
                  style={{willChange: 'transform'}}
                >
                  <div className="flex items-center mb-2">
                    {[...Array(testimonial.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed mb-4">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {getInitial(testimonial.author)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-base">{testimonial.author}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Required CSS for animations */}
      <style jsx global>{`
        @keyframes testimonials-scroll-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        @keyframes testimonials-scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-testimonials-scroll-down {
          animation-name: testimonials-scroll-down;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .animate-testimonials-scroll-up {
          animation-name: testimonials-scroll-up;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-testimonials-scroll-down, .animate-testimonials-scroll-up {
            animation: none !important;
          }
        }
        .testimonials-fade-mask {
          mask-image: linear-gradient(to bottom, transparent 0%, #000 12%, #000 88%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, #000 12%, #000 88%, transparent 100%);
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
