import { Check, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useState, useRef } from 'react';

const niches = [
  {
    title: "Insurance & Financial Services",
    features: ["Smart Lead Generation", "Policy Management", "Renewal Reminders", "Client Portal", "Commission Tracking"],
    image: "/image/insurance.png",
    route: "/services/insurance"
  },
  {
    title: "Botox & Skin Care",
    features: [
      "AI-Powered Appointment Booking",
      "Loyalty & Referral Program Automation",
      "Automated Post-Treatment Follow-ups",
      "Before/After Photo Management",
      "Smart Review Requests"
    ],
    image: "/image/any.png",
    route: "/services/botox-skin-care"
  },
  {
    title: "Clinics and Dentist",
    features: [
      "Online Patient Registration",
      "Review & Feedback Automation",
      "Automated Appointment Reminders",
       "Recall & Recare Scheduling",
      "Treatment Plan Tracking"
    ],
    image: "/image/clinic.png",
    route: "/services/clinics-dentist"
  },
  {
    title: "Gym & Health Coach",
    features: [
      "Membership Management Automation",
      "Personalized Fitness Plan Delivery",
       "Automated Payment Reminders",
      "Class & Session Scheduling",
      "Progress Tracking for Clients"
     
      
    ],
    image: "/image/gym.png",
    route: "/services/gym-health-coach"
  },
  {
    title: "Business Consultation",
    features: [
      "Lead Qualification Automation",
      "Proposal & Contract Automation",
       "Automated Follow-up Sequences",
       "Client Onboarding Workflows",
      "Smart Meeting Scheduling"
    ],
    image: "/image/business.png",
    route: "/services/business-consultation"
  },
  {
    title: "IT & SAAS Services",
    features: [
      "Automated Demo Scheduling",
      "Ticketing & Support Automation",
       "Subscription Renewal Reminders",
         "Usage Analytics & Reporting",
      "Client Onboarding Flows"
    
     
    ],
    image: "/image/it.png",
    route: "/services/it-saas"
  },
  {
    title: "Salons and Spa",
    features: [
      "Online Booking & Calendar Sync",
      
      "Inventory & Product Tracking",
      "No-Show Reduction Reminders",
      "Review & Testimonial Requests",
      "Automated Birthday Offers"
    ],
    image: "/image/saloon.png",
    route: "/services/salons-spa"
  },
  {
    title: "Real Estate Agents",
    features: [
      "Automated Lead Capture",
      "Property Viewing Scheduling",
      "Document & Contract Automation",
      "Follow-up with Prospects",
     
      "Review & Referral Requests"
    ],
    image: "/image/roof.png",
    route: "/services/real-estate-agents"
  },
  {
    title: "Therapists and Counselors",
    features: [
      "Secure Online Intake Forms",
      "Session Reminders & Follow-ups",
      "Feedback & Testimonial Collection",
      "Resource & Homework Delivery",
      
      "Progress Notes Automation"
    ],
    image: "/image/cleaning.png",
    route: "/services/therapists-counselors"
  }
];

const cardColors = [
  'bg-purple-100',
  'bg-purple-200',
  'bg-purple-100',
  'bg-purple-200',
  'bg-purple-100',
  'bg-purple-200',
  'bg-purple-100',
  'bg-purple-200',
  'bg-purple-100',
];

// Fixed random arrangement of colors
const randomColors = [
  'bg-cyan-200',
  'bg-emerald-200',
  'bg-rose-200',
  'bg-teal-100',
  'bg-orange-200',
  'bg-blue-100',
];

const NicheSection = ({ hideTitle = false }) => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Banner image paths for each card
 

  // Banner image mapping for each card by title
  const bannerMap = {
    'Insurance & Financial Services': '/banner/1.png',
    'Botox & Skin Care': '/banner/1.png',
    'Clinics and Dentist': '/banner/1.png',
    'Gym & Health Coach': '/banner/1.png',
    'Business Consultation': '/banner/1.png',
    'IT & SAAS Services': '/banner/1.png',
    'Salons and Spa': '/banner/1.png',
    'Real Estate Agents': '/banner/1.png',
    'Therapists and Counselors': '/banner/1.png',
  };

  const handleNicheClick = (route: string) => {
    navigate(route);
  };

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
    <section className="py-0 -mt-5 mt-14">
      <div className="container mx-auto px-6 max-w-screen-xl">
        {!hideTitle && (
          <div className="text-center mb-16 md:mb-10 xl:mb-12">
           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            All In <span className="text-purple-600">One Platform</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
            Where We Help To Automate This Business
          </p>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 justify-center">
          {niches.map((niche, index) => (
            <div
              key={index}
              className={"relative bg-gradient-to-br from-[#f6f3ff] to-[#e9d8fd] border-2 border-purple-400 rounded-2xl shadow-lg md:static sticky top-24 mx-auto lg:max-w-xs xl:max-w-sm w-full group min-h-[380px] flex flex-col transition-transform duration-300 ease-out"}
              style={{
                transform: hoveredCard === index 
                  ? `perspective(1000px) rotateX(${mousePosition.y * -15}deg) rotateY(${mousePosition.x * 15}deg) scale3d(1.02, 1.02, 1.02)`
                  : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
              }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Second banner, positioned between the first banner and the person image, not clipped */}
              <img
                src="/banner/2.png"
                alt="Second Banner"
                className="absolute right-[60px] bottom-4 w-24 md:w-28 lg:w-32 z-10 drop-shadow-xl opacity-95 pointer-events-none"
                style={{objectFit: 'contain'}}
              />
              <div className="relative flex-1 flex flex-col justify-between h-full p-6 md:pr-2 md:pb-2 p-2">
                {/* Absolutely positioned image at bottom right, merged with card */}
                <div className="absolute right-0 bottom-0 w-44 h-44 md:w-36 md:h-36 lg:w-44 lg:h-44 z-0 pointer-events-none select-none overflow-hidden">
                  <img 
                    src={niche.image} 
                    alt={niche.title} 
                    className="w-full h-full object-contain object-right-bottom"
                    style={{opacity: 0.85}}
                  />
                </div>
                <div className="relative z-10 pr-0">
                  <h3 className="text-xl md:text-lg font-bold text-gray-900 group-hover:text-purple-800 mb-4 md:mb-2 text-left transition-all duration-300 ease-in-out drop-shadow-[0_1px_2px_rgba(255,255,255,0.7)]">{niche.title}</h3>
                  <div className="space-y-3 md:space-y-2 mb-6 md:mb-3">
                    {niche.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2 md:space-x-3 xl:space-x-4">
                        <Check className="w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 text-purple-500 group-hover:text-purple-700 transition-all duration-300 ease-in-out" />
                        <span className="text-gray-700 group-hover:text-gray-800 text-xs md:text-sm xl:text-base transition-all duration-300 ease-in-out drop-shadow-[0_1px_2px_rgba(255,255,255,0.7)]">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    onClick={() => handleNicheClick(niche.route)}
                    className="bg-gradient-to-r from-purple-500 to-pink-400 hover:shadow-lg text-white font-bold py-2 px-4 rounded-lg mt-2 flex items-center text-sm"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2 inline-block align-middle" />
                  </Button>
                  {/* Banner image below the button */}
                  <div className="relative w-fit">
                    <img
                      src={bannerMap[niche.title]}
                      alt={`Banner for ${niche.title}`}
                      className="w-32 md:w-40 mt-4 self-start rounded-xl object-contain max-h-16 md:max-h-20 lg:max-h-24 relative z-20"
                      style={{objectFit: 'contain'}}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NicheSection; 