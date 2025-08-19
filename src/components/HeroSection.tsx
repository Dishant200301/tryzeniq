import { Button } from "@/components/ui/button";
import { FaGlobe, FaBullseye, FaRobot } from "react-icons/fa";
import ThreeLevelPyramid from "./ThreeLevelPyramid";
import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden dark:bg-gray-900"> {/* Optional: Added a deep dark background for the entire section for consistency */}
        <div className="container mx-auto max-w-7xl px-8 text-center relative z-10 flex flex-col justify-center min-h-[70vh]">
          {/* Desktop Content */}
          <div className="hidden md:block">
            {/* Apply dark mode text colors */}
            <p className="text-xl font-semibold text-gray-700 mb-2 dark:text-gray-300">Get 24/7 AI Employee That</p>
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight md:leading-[1.1] dark:text-gray-100">
                Automate Your Booking<br />
                {/* Adjust gradient colors for dark mode visibility */}
                And <span className="bg-gradient-to-br from-blue-600 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-fuchsia-300 dark:to-purple-400">Maximize</span> Your Profit
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed dark:text-gray-300">
              We automate your entire business journey from <span className="font-bold text-gray-800 dark:text-gray-100">leads</span>, <span className="font-bold text-gray-800 dark:text-gray-100">outreach</span> and <span className="font-bold text-gray-800 dark:text-gray-100">reminders</span> that save your time and boosting revenue.
            </p>
            <div className="mt-8 flex justify-center">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 bg-gradient-to-r from-purple-500 to-pink-400 text-white font-bold
                             dark:from-purple-700 dark:to-pink-600 dark:text-white"
                >
                  SCHEDULE FREE MEETING
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Content */}
          <div className="md:hidden flex flex-col items-center justify-center flex-1 mt-4">
            {/* Apply dark mode text colors */}
            <p className="text-xl font-semibold text-gray-700 mb-2 mt-8 dark:text-gray-300">Get 24/7 AI Employee That</p>
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight dark:text-gray-100">
              Automate<br />
              <span className="whitespace-nowrap">Your Business</span><br />
              {/* Adjust gradient colors for dark mode visibility */}
              <span className="bg-gradient-to-br from-blue-600 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-fuchsia-300 dark:to-purple-400">Profits</span>
            </h1>
            <div className="mt-4 w-full flex justify-center">
              <Link to="/contact" className="w-full flex justify-center">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 bg-gradient-to-r from-purple-500 to-pink-400 text-white font-bold w-full
                             dark:from-purple-700 dark:to-pink-600 dark:text-white"
                >
                  FREE MEETING
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* 3-Step Journey Section - Seamless Background (commented out in original, left as is) */}
      {/* <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How We Help You <span className="text-purple-600">Succeed</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We automate your business journey from lead generation to reminders, saving your clinic time and boosting revenue.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-5xl mb-12">
        
          <div className="bg-purple-50 p-4 md:p-8 rounded-2xl md:rounded-3xl hover:shadow-xl shadow-lg border border-gray-200 transition-all duration-300 flex flex-col items-center w-72 h-64">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-400 to-fuchsia-500 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg">
              <span className="text-3xl md:text-4xl">🤖</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-4">AI Automation</h3>
            <p className="text-gray-600 text-center text-sm md:text-base leading-relaxed flex-grow">Let AI handle bookings and tasks, freeing you to focus on growth.</p>
          </div>
          
          <div className="bg-fuchsia-50 p-4 md:p-8 rounded-2xl md:rounded-3xl hover:shadow-xl shadow-lg border border-gray-200 transition-all duration-300 flex flex-col items-center w-72 h-64">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg">
              <span className="text-3xl md:text-4xl">🎯</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-4">AI Outreach</h3>
            <p className="text-gray-600 text-center text-sm md:text-base leading-relaxed flex-grow">Reach more clients automatically and expand your business.</p>
          </div>
        
          <div className="bg-fuchsia-50 p-4 md:p-8 rounded-2xl md:rounded-3xl hover:shadow-xl shadow-lg border border-gray-200 transition-all duration-300 flex flex-col items-center w-72 h-64">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-fuchsia-500 to-purple-400 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg">
              <span className="text-3xl md:text-4xl">⏰</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-4">Automated Reminders</h3>
            <p className="text-gray-600 text-center text-sm md:text-base leading-relaxed flex-grow">Never miss an appointment—reminders keep everyone on track.</p>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default HeroSection;