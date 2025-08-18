import { Zap, Users, Send } from 'lucide-react';

const solutions = [
  {
    title: 'AI Automation',
    icon: <Zap size={26} className="text-purple-600" />,
    color: 'bg-purple-50',
  },
  {
    title: 'AI Outreach Clients',
    icon: <Users size={26} className="text-blue-600" />,
    color: 'bg-blue-50',
  },
  {
    title: 'Send Automated Reminders',
    icon: <Send size={26} className="text-fuchsia-600" />,
    color: 'bg-fuchsia-50',
  },
];

const stepOffsets = [
  'ml-[30%] md:ml-[40%]', // First step: right
  'ml-[15%] md:ml-[20%]', // Second step: center
  'ml-0', // Third step: left
];

const NewAISolutionsSection = () => {
  return (
    <section id="new-ai-solutions" className="py-16">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Our <span className="text-purple-600">AI Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful services to transform your clinic
          </p>
        </div>
        {/* Mac App Window - Wider, with grid layout */}
        <div className="w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
          {/* Top bar with tagline */}
          <div className="flex items-center justify-between px-5 py-2.5 bg-slate-900 rounded-t-2xl border-b border-slate-200">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-300 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-400 inline-block" />
            </div>
            <div className="flex-1 text-center">
              <span className="text-white font-medium tracking-wide text-base">Automated Client Journey</span>
            </div>
            <div className="w-12" /> {/* Spacer for symmetry */}
          </div>
          {/* Dashboard content - Diagonal staggered grid */}
          <div className="p-8 grid grid-rows-3 grid-cols-2 gap-6 min-h-[420px]">
            {/* Row 1 */}
            <div className="flex flex-col items-center justify-center rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-purple-50 p-6">
              <div className="mb-3">{solutions[0].icon}</div>
              <div className="text-lg md:text-xl font-bold text-gray-800 text-center">{solutions[0].title}</div>
                </div>
            <div />
            {/* Row 2 */}
            <div />
            <div className="flex flex-col items-center justify-center rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-blue-50 p-6">
              <div className="mb-3">{solutions[1].icon}</div>
              <div className="text-lg md:text-xl font-bold text-gray-800 text-center">{solutions[1].title}</div>
                </div>
            {/* Row 3 */}
            <div className="flex flex-col items-center justify-center rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-fuchsia-50 p-6">
              <div className="mb-3">{solutions[2].icon}</div>
              <div className="text-lg md:text-xl font-bold text-gray-800 text-center">{solutions[2].title}</div>
              </div>
            <div />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewAISolutionsSection; 