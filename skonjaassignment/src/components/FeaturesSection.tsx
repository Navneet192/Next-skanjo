import { Zap, Upload, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './SimpleCard';

const FeaturesSection = () => {
  const features = [
    {
      icon: <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"><div className="w-6 h-6 border-2 border-blue-500 rounded-full"></div></div>,
      title: "CV-JD Matching",
      description: "Upload your CV and job description to get an instant compatibility score with detailed insights.",
      color: "blue"
    },
    {
      icon: <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center"><div className="w-6 h-6"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-500"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg></div></div>,
      title: "Smart CV Scoring",
      description: "Get your original CV score and download an AI-optimized version that beats ATS systems.",
      color: "green"
    },
    {
      icon: <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center"><Zap className="w-6 h-6 text-purple-500" /></div>,
      title: "Skill Gap Analysis",
      description: "Identify missing skills and get personalized learning paths to bridge the gaps.",
      color: "purple"
    },
    {
      icon: <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center"><div className="w-6 h-6 text-orange-500">📚</div></div>,
      title: "Project Suggestions",
      description: "Get curated project ideas to build missing skills with clear deliverables and timelines.",
      color: "orange"
    },
    {
      icon: <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center"><div className="w-6 h-6 text-red-500">🎯</div></div>,
      title: "AI Feedback System",
      description: "Submit your projects and receive detailed AI mentoring with actionable improvements.",
      color: "red"
    },
    {
      icon: <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center"><Upload className="w-6 h-6 text-cyan-500" /></div>,
      title: "Export & Share",
      description: "Export your learning plan as PDF and share your progress with shareable links.",
      color: "cyan"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 mb-6">
            <Zap className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium text-gray-700">Powerful Features</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900">Everything You Need to</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Advance Your Career
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform provides comprehensive tools to optimize your CV, identify skill gaps, and create personalized learning paths.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-gray-300">
              <CardContent className="p-8">
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
