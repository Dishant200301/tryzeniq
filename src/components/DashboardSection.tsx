import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DashboardSection = () => {
  const [currentDashboard, setCurrentDashboard] = useState(0);
  
  const dashboards = [
    {
      title: "Botox & Skin Care",
      image: "https://plus.unsplash.com/premium_photo-1680371834671-26c3d8f0e0d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjJTIwc29mdHdhcmUlMjBkYXNoYm9hcmR8ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "Clinics and Detist",
      image: "https://images.unsplash.com/photo-1691480195680-144318cfa695?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hYyUyMHNvZnR3YXJlJTIwZGFzaGJvYXJkfGVufDB8fDB8fHww"
    },
    {
      title: "Gym & Health Coach",
      image: "https://images.unsplash.com/photo-1634544333207-7c5e5fc748d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hYyUyMHNvZnR3YXJlJTIwZGFzaGJvYXJkfGVufDB8fDB8fHww"
    },
    {
      title: "Business Consultation",
      image: "https://images.unsplash.com/photo-1677022725616-91e41d36db21?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hYyUyMHNvZnR3YXJlJTIwZGFzaGJvYXJkfGVufDB8fDB8fHww"
    },
    {
      title: "IT & SAAS Services",
      image: "https://plus.unsplash.com/premium_photo-1685086785230-2233cf5d8f28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hYyUyMHNvZnR3YXJlJTIwZGFzaGJvYXJkfGVufDB8fDB8fHww"
    }
  ];

  const nextDashboard = () => {
    setCurrentDashboard((prev) => (prev + 1) % dashboards.length);
  };

  const prevDashboard = () => {
    setCurrentDashboard((prev) => (prev - 1 + dashboards.length) % dashboards.length);
  };

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            All In <span className="text-purple-600">One Platform</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
            Where We Help To Automate This Business
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
            {dashboards.map((dashboard, index) => (
              <button
                key={dashboard.title}
                onClick={() => setCurrentDashboard(index)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200
                  ${index === currentDashboard ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-700 hover:bg-purple-50'}`}
              >
                {dashboard.title}
              </button>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center mb-8">
          {/* Left Arrow */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevDashboard}
            className="rounded-full w-10 h-10 sm:w-12 sm:h-12 shadow-lg hover:shadow-xl transition-all absolute left-0 top-[35%] lg:top-1/2 -translate-y-1/2 z-10"
            >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
          {/* Card Content */}
          <div className="flex-1 w-full mx-0 sm:mx-8">
            <div className="bg-gradient-to-br from-purple-100 to-blue-50 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-xl lg:max-w-4xl lg:min-h-[420px] lg:py-12 mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                {/* Image Section - Now centered in mobile */}
                <div className="flex justify-center lg:justify-end order-1 lg:order-2 mb-6 lg:mb-0">
                  <div className="rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-lg w-full max-w-[320px] sm:max-w-[400px]">
                    <div className="aspect-[4/3] w-full">
                      <img
                        src={dashboards[currentDashboard].image}
                        alt={dashboards[currentDashboard].title}
                        className="object-contain w-full h-full rounded-lg"
                        style={{ display: 'block' }}
                      />
                    </div>
                  </div>
                </div>
                {/* Content Section */}
                <div className="order-2 lg:order-1">
                  <div className="space-y-4 sm:space-y-6">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      {dashboards[currentDashboard].title}
                    </h3>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base w-full sm:w-auto">
                      View Demo
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Arrow */}
            <Button
              variant="outline"
              size="icon"
              onClick={nextDashboard}
            className="rounded-full w-10 h-10 sm:w-12 sm:h-12 shadow-lg hover:shadow-xl transition-all absolute right-0 top-[35%] lg:top-1/2 -translate-y-1/2 z-10"
            >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
