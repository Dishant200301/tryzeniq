import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Eye, Palette, Sparkles } from 'lucide-react';

interface Theme {
  id: string;
  name: string;
  description: string;
  image: string;
  demoUrl: string;
  features: string[];
  color: string;
  popular?: boolean;
}

interface ThemeSelectorProps {
  themes: Theme[];
  title?: string;
  subtitle?: string;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ 
  themes, 
  title = "Choose Your Website Theme", 
  subtitle = "Select from our professionally designed themes tailored for your industry"
}) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="container mx-auto max-w-7xl px-6 mb-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Palette className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {title}
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Theme Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={theme.image} 
                  alt={theme.name} 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {theme.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Sparkles className="w-4 h-4 mr-1" />
                    Popular
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Theme Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{theme.name}</h3>
                  <div className={`w-4 h-4 rounded-full ${theme.color}`}></div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {theme.description}
                </p>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {theme.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className={`w-2 h-2 rounded-full ${theme.color} mr-2`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white"
                    onClick={() => window.open(theme.demoUrl, '_blank')}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Select Theme
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-purple-50 to-fuchsia-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              All Themes Include:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                Mobile Responsive Design
              </div>
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                SEO Optimized
              </div>
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                Custom Branding
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ThemeSelector; 