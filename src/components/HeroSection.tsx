
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gray-50">
      {/* Clean background with subtle pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* AI Badge */}
            <div className="inline-flex items-center space-x-2 bg-gray-200 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-gray-600 rounded-full" />
              <span className="text-sm font-medium text-gray-700">
                AI-Powered Recruitment
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Stop Ignoring
              <br />
              Your
              <br />
              <span className="text-gray-400">Best Candidates</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              AI-powered CV screening for Zoho Recruit that helps recruiters rescue{" "}
              <span className="font-semibold text-gray-900">top talent</span> from being overlooked.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-gray-700 font-medium">Smart Detection</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span className="text-gray-700 font-medium">Zoho Integration</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-gray-700 font-medium">AI Screening</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
                Try Free →
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200">
                Learn More
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12">
              <p className="text-sm text-gray-500 mb-4">Trusted by 500+ recruitment teams</p>
              <div className="flex items-center space-x-8 text-gray-400 font-bold text-lg">
                <span>ZOHO</span>
                <span>RECRUIT</span>
                <span>AI</span>
              </div>
            </div>
          </div>

          {/* Right Content - CV Analysis Dashboard */}
          <div className="relative">
            {/* Floating Action Button */}
            <div className="absolute -top-4 -right-4 z-20">
              <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 border-2 border-blue-500 rounded-full animate-spin border-t-transparent" />
                </div>
              </div>
            </div>

            {/* Main Dashboard Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">CV Analysis</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-sm text-gray-600">AI Active</span>
                </div>
              </div>

              {/* Candidates List */}
              <div className="space-y-4">
                {/* Candidate 1 */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border-l-4 border-green-500">
                  <div>
                    <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                    <p className="text-sm text-gray-600">Frontend Developer</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-500">95%</div>
                  </div>
                </div>

                {/* Candidate 2 */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                  <div>
                    <h4 className="font-semibold text-gray-900">Mike Chen</h4>
                    <p className="text-sm text-gray-600">Full Stack Developer</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-500">88%</div>
                  </div>
                </div>

                {/* Candidate 3 */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border-l-4 border-purple-500">
                  <div>
                    <h4 className="font-semibold text-gray-900">Alex Rivera</h4>
                    <p className="text-sm text-gray-600">UI/UX Designer</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-500">92%</div>
                  </div>
                </div>
              </div>

              {/* Footer Stats */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Candidates Screened</span>
                  <span className="font-bold text-gray-900">1,247</span>
                </div>
              </div>
            </div>

            {/* Floating Eye Icon */}
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
