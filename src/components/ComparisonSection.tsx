import { Check, X } from 'lucide-react';
import tlogo from "../../public/tlogo.png"; // Assuming this path is correct for your project

const ComparisonSection = () => {
  const features = [
    {
      name: "Website + Automation",
      ourPlatform: { status: "included", text: "Built-in, no extra setup" },
      competitors: { status: "limited", text: "Needs external website + integrations" },
      agencies: { status: "included", text: "Custom build possible, but time + costly" }
    },
    {
      name: "24/7 Lead and Booking",
      ourPlatform: { status: "included", text: "AI agents included, fully automated" },
      competitors: { status: "limited", text: "Possible with tools, but needs setup" },
      agencies: { status: "manual", text: "Depends on human team, limited hours" }
    },
    {
      name: "AI Follow-up and chatbot",
      ourPlatform: { status: "included", text: "Native AI chatbot + automated follow-ups" },
      competitors: { status: "limited", text: "Basic bots, advanced needs extra tools" },
      agencies: { status: "manual", text: "Manual follow-up, slower" }
    },
    {
      name: "Auto Social Media Posts",
      ourPlatform: { status: "included", text: "Included auto-posting system with suggestions" },
      competitors: { status: "limited", text: "Needs separate tools like Buffer, Hootsuite" },
      agencies: { status: "manual", text: "Handled manually by social/marketing team" }
    },
    {
      name: "Smart Review Reply System",
      ourPlatform: { status: "included", text: "AI replies to reviews smartly without spend time" },
      competitors: { status: "manual", text: "Not included natively, needs manual or extra tools" },
      agencies: { status: "manual", text: "Managed manually, slower but personalized" }
    },
    {
      name: "Rescheduling Automation",
      ourPlatform: { status: "included", text: "Smart rescheduling included" },
      competitors: { status: "limited", text: "Needs third-party calendar setup + integrations" },
      agencies: { status: "manual", text: "Handled manually by staff or agency" }
    },
    {
      name: "Request for Customisation ",
      ourPlatform: { status: "included", text: "Flexible and customizable" },
      competitors: { status: "limited", text: "Mostly fixed features, low flexibility" },
      agencies: { status: "included", text: "Fully customizable, but higher cost" }
    },
    {
      name: "Pricing",
      ourPlatform: { status: "included", text: "Affordable, monthly package and Lifetime Deal" },
      competitors: { status: "limited", text: "Subscription per tool, can add up over time" },
      agencies: { status: "expensive", text: "High cost: salaries, agency fees, contracts" }
    }
  ];

  // Modified getStatusIcon to include dark mode classes
  const getStatusIcon = (status) => {
    switch (status) {
      case "included":
        return (
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-green-500 dark:bg-green-700">
            <Check className="w-5 h-5 text-white" />
          </span>
        );
      case "limited":
        return (
          <span className="text-3xl font-extrabold text-yellow-500 dark:text-yellow-400">~</span>
        );
      case "manual":
      case "expensive":
        return (
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-red-500 bg-opacity-70 dark:bg-red-700 dark:bg-opacity-70">
            <X className="w-3 h-3 md:w-4 md:h-4 text-white" />
          </span>
        );
      default:
        return null;
    }
  };

  // Helper to break text after every 4 words
  const breakAfterFourWords = (text) => {
    if (!text) return '';
    const words = text.split(' ');
    let result = '';
    for (let i = 0; i < words.length; i++) {
      result += words[i];
      if ((i + 1) % 4 === 0 && i !== words.length - 1) {
        result += '<br />';
      } else if (i !== words.length - 1) {
        result += ' ';
      }
    }
    return result;
  };

  return (
    // Apply dark mode background to the section
    <section className="pt-[120px] pb-[48px] dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-8 max-w-4xl mx-auto">
          {/* Apply dark mode text colors to heading and subheading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 dark:text-gray-100">
            Compare Our <span className="text-purple-600 dark:text-purple-400">AI Platform</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            See how TRYZENIQ stacks up against traditional automation methods and agencies. 
            Get more power, flexibility, and support.
          </p>
        </div>
        {/* Apply dark mode background, border, and shadow to the table container */}
        <div className="rounded-3xl shadow-xl overflow-hidden border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700 dark:shadow-md dark:shadow-purple-950">
          <div className="overflow-x-auto">
            <table className="w-full md:min-w-[900px]">
              <thead>
                {/* Apply dark mode gradient to table header row */}
                <tr className="bg-gradient-to-r from-purple-600 to-fuchsia-600 dark:from-purple-800 dark:to-fuchsia-900">
                  <th className="text-center p-2 sm:p-3 md:p-4 font-semibold text-white text-xs sm:text-base md:text-lg md:min-w-[220px] md:whitespace-nowrap">Features</th>
                  {/* Apply dark mode border color to middle header cell */}
                  <th className="text-center align-middle p-2 sm:p-3 md:p-4 font-semibold bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white border-l-2 border-r-2 border-t-2 border-[#8b5cf6] dark:border-purple-700 text-xs sm:text-base md:text-lg relative w-[30%]" style={{width: '30%'}}>
                    <span className="md:hidden flex items-center justify-center h-full w-full">
                      <img src={tlogo} alt="TRYZENIQ Logo" className="h-8 max-h-8 w-auto object-contain mb-1 mx-auto" />
                    </span>
                    <span className="hidden md:flex items-center justify-center h-full w-full">
                      <img src={tlogo} alt="TRYZENIQ Logo" className="h-12 max-h-12 w-auto object-contain mb-1 mx-auto" />
                    </span>
                  </th>
                  <th className="text-center p-2 sm:p-3 md:p-4 font-semibold text-white text-[10px] sm:text-base md:text-lg w-20 md:w-auto">
                    <span className="md:hidden">Zapier, Apollo</span>
                    <span className="hidden md:inline">
                      HubSpot, Apollo.io,<br />Zapier, Reply
                    </span>
                  </th>
                  <th className="text-center p-2 sm:p-3 md:p-4 font-semibold text-white text-[10px] sm:text-base md:text-lg w-20 md:w-auto">
                    <span className="md:hidden">Agency, InHouse</span>
                    <span className="hidden md:inline">Hiring InHouse,<br />Agency</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className="bg-transparent">
                    {/* Apply dark mode text color for feature name */}
                    <td className="p-4 font-medium text-gray-900 text-base md:whitespace-nowrap text-center dark:text-gray-100">{feature.name}</td>
                    {/* Apply dark mode background and border colors for 'Our Platform' column */}
                    <td className={`p-4 text-center bg-[#ede4ff] border-l-2 border-r-2 border-[#8b5cf6]${index === features.length - 1 ? ' border-b-2' : ''} w-[30%] dark:bg-purple-950 dark:border-purple-700`} style={{width: '30%'}}>
                      <div className="flex items-center justify-center mb-2">
                        {getStatusIcon(feature.ourPlatform.status)}
                      </div>
                      {/* Apply dark mode text color for Our Platform description */}
                      <p className="text-base hidden md:block dark:text-gray-200" dangerouslySetInnerHTML={{ __html: breakAfterFourWords(feature.ourPlatform.text) }} />
                    </td>
                    {/* Apply dark mode background and text colors for 'Competitors' column */}
                    <td className="p-4 text-center bg-white dark:bg-gray-900">
                      <div className="flex items-center justify-center mb-2">
                        {getStatusIcon(feature.competitors.status)}
                      </div>
                      <p className="text-gray-700 text-base hidden md:block dark:text-gray-300" dangerouslySetInnerHTML={{ __html: breakAfterFourWords(feature.competitors.text) }} />
                    </td>
                    {/* Apply dark mode background and text colors for 'Agencies' column */}
                    <td className="p-4 text-center bg-white dark:bg-gray-900">
                      <div className="flex items-center justify-center mb-2">
                        {getStatusIcon(feature.agencies.status)}
                      </div>
                      <p className="text-gray-700 text-base hidden md:block dark:text-gray-300" dangerouslySetInnerHTML={{ __html: breakAfterFourWords(feature.agencies.text) }} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;