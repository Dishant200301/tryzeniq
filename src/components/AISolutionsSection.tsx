import { useEffect } from 'react';
import TagCloud from 'TagCloud';

const AISolutionsSection = () => {
  useEffect(() => {
    const container = document.querySelector('.tagcloud');
    if (!container) {
      return;
    }

    const texts = [
      'AI Automation',
      'AI Outreach Clients',
      'Send Automate Reminders'
      
    ];

    const options = {
      radius: 250,
      maxSpeed: 'fast' as 'fast',
      initSpeed: 'fast' as 'fast',
      keep: true,
    };

    const tagCloudInstance = TagCloud([container], texts, options);

    return () => {
      // To destroy the instance on component unmount
      if (tagCloudInstance) {
        tagCloudInstance.destroy();
      }
    };
  }, []);

  return (
    <section className="py-8 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-8 text-center relative">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our <span className="text-blue-600">AI Solutions</span>
        </h2>
        <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
          Three powerful services to transform your clinic
        </p>

        <div className="flex justify-center items-center">
          <div
            className="relative w-[500px] h-[500px] rounded-full overflow-hidden"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/lovable-uploads/2.mp4" type="video/mp4" />
            </video>
            <div className="tagcloud absolute inset-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISolutionsSection;
