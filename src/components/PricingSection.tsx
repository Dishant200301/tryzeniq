import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const PricingSection = () => {
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

  const plans = [
    {
      name: "Basic Plan",
      price: "$69",
      period: "/ Month",
      features: [
        "Smart Website Solution",
        "Social Media Post Automation",
        "360 Scheduling And Reminder",
        "Customise According to your need"
      ],
      highlighted: false
    },
    {
      name: "Life Time Access",
      price: "$1959",
      period: "",
      features: [
        "1,000+ React components",
        "Built with Tailwind CSS and Shadcn UI",
        "Use Personal Server",
        "Life Time To Use Access"
      ],
      highlighted: true
    },
    {
      name: "Full Source Code",
      price: "$15000",
      period: "",
      features: [
        "1,000+ React components",
        "Built with Tailwind CSS and Shadcn UI",
        "Copy as React or HTML",
        "Full Source code with full Access"
      ],
      highlighted: false
    }
  ];

  return (
    <section>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="text-center pt-8 mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 sm:mb-4">
            Our <span className="text-purple-600">Price</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            We Provide Full Customisation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-8 max-w-6xl mx-auto mt-0">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`md:static sticky top-24 z-[${10 + index * 10}] mx-auto w-full max-w-[340px] sm:max-w-sm min-h-[420px] md:min-h-[340px] flex flex-col md:justify-center md:h-full md:flex-col md:items-stretch justify-between ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-[#f6f3ff] to-[#e9d8fd] shadow-lg border-2 border-purple-400'
                  : 'bg-gradient-to-br from-[#f6f3ff] to-[#e9d8fd] shadow-lg border-2 border-purple-400'
              } rounded-3xl p-8 sm:p-10 md:p-6 transition-transform duration-300 ease-out`}
              style={{
                transform: hoveredCard === index 
                  ? `perspective(1000px) rotateX(${mousePosition.y * -15}deg) rotateY(${mousePosition.x * 15}deg) scale3d(1.02, 1.02, 1.02) ${plan.highlighted ? 'scale(1.05)' : ''}`
                  : `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) ${plan.highlighted ? 'scale(1.05)' : ''}`
              }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex-1 flex flex-col">
                <h3 className={`text-xl sm:text-2xl md:text-xl font-bold mb-6 sm:mb-8 md:mb-6 text-gray-900`}>
                  {plan.name}
                </h3>
                <div className="mb-6 sm:mb-8 md:mb-6">
                  <div className={`text-4xl sm:text-5xl md:text-3xl font-extrabold text-gray-900`}> 
                    {plan.price}
                    {plan.period && (
                      <span className={`text-base sm:text-lg md:text-base font-normal text-gray-500`}>
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>
                <div className="space-y-4 sm:space-y-5 md:space-y-4 mb-6 sm:mb-10 md:mb-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3 md:space-x-2">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-6 md:h-6 rounded-full flex items-center justify-center bg-purple-100">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 md:w-4 md:h-4 text-purple-600" />
                      </div>
                      <span className="text-base sm:text-lg md:text-base text-gray-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
