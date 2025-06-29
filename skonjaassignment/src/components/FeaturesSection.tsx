const FeaturesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-primary/20">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="lucide lucide-zap h-4 w-4 text-primary"
            >
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
            </svg>
            <span className="text-sm font-medium text-primary">Powerful Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Everything You Need to
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Advance Your Career
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered platform provides comprehensive tools to optimize your CV, identify skill gaps, and create personalized learning paths.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="rounded-lg border text-card-foreground shadow-sm group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 animate-fade-in" style={{ animationDelay: '0ms' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex flex-col space-y-1.5 p-6 relative z-10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="lucide lucide-target h-6 w-6 text-blue-500"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3 className="tracking-tight text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                CV-JD Matching
              </h3>
            </div>
            <div className="p-6 pt-0 relative z-10">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Upload your CV and job description to get an instant compatibility score with detailed insights.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="rounded-lg border text-card-foreground shadow-sm group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex flex-col space-y-1.5 p-6 relative z-10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-500/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="lucide lucide-trending-up h-6 w-6 text-green-500"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
              </div>
              <h3 className="tracking-tight text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                Smart CV Scoring
              </h3>
            </div>
            <div className="p-6 pt-0 relative z-10">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Get your original CV score and download an AI-optimized version that beats ATS systems.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="rounded-lg border text-card-foreground shadow-sm group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex flex-col space-y-1.5 p-6 relative z-10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="lucide lucide-zap h-6 w-6 text-purple-500"
                >
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                </svg>
              </div>
              <h3 className="tracking-tight text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                Skill Gap Analysis
              </h3>
            </div>
            <div className="p-6 pt-0 relative z-10">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Identify missing skills and get personalized learning paths to bridge the gaps.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="rounded-lg border text-card-foreground shadow-sm group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex flex-col space-y-1.5 p-6 relative z-10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange-500/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="lucide lucide-book-open h-6 w-6 text-orange-500"
                >
                  <path d="M12 7v14" />
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                </svg>
              </div>
              <h3 className="tracking-tight text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                Project Suggestions
              </h3>
            </div>
            <div className="p-6 pt-0 relative z-10">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Get curated project ideas to build missing skills with clear deliverables and timelines.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="rounded-lg border text-card-foreground shadow-sm group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex flex-col space-y-1.5 p-6 relative z-10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-red-500/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="lucide lucide-award h-6 w-6 text-red-500"
                >
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                  <circle cx="12" cy="8" r="6" />
                </svg>
              </div>
              <h3 className="tracking-tight text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                AI Feedback System
              </h3>
            </div>
            <div className="p-6 pt-0 relative z-10">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Submit your projects and receive detailed AI mentoring with actionable improvements.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="rounded-lg border text-card-foreground shadow-sm group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 animate-fade-in" style={{ animationDelay: '500ms' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex flex-col space-y-1.5 p-6 relative z-10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-500/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="lucide lucide-download h-6 w-6 text-cyan-500"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
              </div>
              <h3 className="tracking-tight text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                Export & Share
              </h3>
            </div>
            <div className="p-6 pt-0 relative z-10">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Export your learning plan as PDF and share your progress with shareable links.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
