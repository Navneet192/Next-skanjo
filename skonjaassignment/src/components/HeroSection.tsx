import { Upload, Zap } from 'lucide-react';
import Button from './SimpleButton';
import { Card, CardContent } from './SimpleCard';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        {/* AI Badge */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 rounded-full px-6 py-2 flex items-center space-x-2">
            <Zap className="h-4 w-4 text-green-500" />
            <span className="text-sm text-gray-700">AI-Powered Career Enhancement</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
              Transform Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Career Journey
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            AI-powered CV optimization, skill gap analysis, and personalized learning paths to land your dream job
          </p>
        </div>

        {/* Interactive CV Upload Card */}
        <div className="max-w-2xl mx-auto mb-16">
          <Card className="border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <span className="text-sm text-gray-500">SKANJO AI</span>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <Upload className="h-6 w-6 text-gray-400" />
                  <span className="text-gray-700 font-medium">Upload CV & Job Description</span>
                </div>

                <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                  <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  </div>
                  <span className="text-gray-500">AI Analysis & Skill Gap Detection</span>
                </div>

                <div className="p-4 bg-gray-900 rounded-lg text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <Zap className="h-4 w-4 text-blue-400" />
                    <span className="text-sm font-medium">Personalized Learning & CV Optimization</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-3/4 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
          <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg rounded-full">
            Start Analysis
            <span className="ml-2">→</span>
          </Button>
          <Button variant="outline" className="px-8 py-4 text-lg rounded-full border-2 hover:bg-gray-50">
            Watch Demo
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <p className="text-gray-500 mb-8">Trusted by professionals at</p>
          <div className="flex flex-wrap items-center justify-center space-x-8 md:space-x-12 opacity-60">
            <span className="text-2xl font-semibold text-gray-400">Google</span>
            <span className="text-2xl font-semibold text-gray-400">Microsoft</span>
            <span className="text-2xl font-semibold text-gray-400">Amazon</span>
            <span className="text-2xl font-semibold text-gray-400">Meta</span>
            <span className="text-2xl font-semibold text-gray-400">Apple</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
