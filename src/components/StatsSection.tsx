
import { Zap } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: <div className="w-8 h-8 text-blue-500">👥</div>,
      number: "50K+",
      label: "Professionals Helped"
    },
    {
      icon: <div className="w-8 h-8 text-green-500">📈</div>,
      number: "85%",
      label: "Interview Success Rate"
    },
    {
      icon: <div className="w-8 h-8 text-purple-500">🏆</div>,
      number: "95%",
      label: "CV Score Improvement"
    },
    {
      icon: <div className="w-8 h-8 text-orange-500"><Zap className="w-8 h-8" /></div>,
      number: "24/7",
      label: "AI Assistant"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
