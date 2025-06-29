const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" 
            style={{
              backgroundImage: `linear-gradient(rgba(var(--primary) / 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(var(--primary) / 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
              animation: '20s ease-in-out 0s infinite normal none running float'
            }}
          />
        </div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-accent/30 to-primary/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-secondary/25 to-primary/20 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute w-96 h-96 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out" style={{ left: '594px', top: '182px' }} />
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary/40 rotate-45 animate-spin" style={{ animationDuration: '10s' }} />
        <div className="absolute top-40 right-20 w-6 h-6 bg-accent/50 rounded-full animate-bounce delay-500" />
        <div className="absolute bottom-32 left-20 w-3 h-12 bg-gradient-to-t from-primary/60 to-transparent animate-pulse" />
        <div className="absolute bottom-20 right-32 w-8 h-2 bg-secondary/40 animate-pulse delay-700" />
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute animate-float opacity-20" style={{ left: '15%', top: '20%', animationDelay: '0s', animationDuration: '4s' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain text-primary/60 animate-pulse">
            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
            <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
            <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
            <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
            <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
            <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
            <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
            <path d="M6 18a4 4 0 0 1-1.967-.516" />
            <path d="M19.967 17.484A4 4 0 0 1 18 18" />
          </svg>
        </div>
        
        <div className="absolute animate-float opacity-20" style={{ left: '30%', top: '30%', animationDelay: '0.5s', animationDuration: '4.5s' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code text-primary/60 animate-pulse">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        </div>
        
        <div className="absolute animate-float opacity-20" style={{ left: '45%', top: '40%', animationDelay: '1s', animationDuration: '5s' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up text-primary/60 animate-pulse">
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
          </svg>
        </div>
        
        <div className="absolute animate-float opacity-20" style={{ left: '60%', top: '50%', animationDelay: '1.5s', animationDuration: '5.5s' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users text-primary/60 animate-pulse">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </div>
        
        <div className="absolute animate-float opacity-20" style={{ left: '75%', top: '60%', animationDelay: '2s', animationDuration: '6s' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase text-primary/60 animate-pulse">
            <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            <rect width="20" height="14" x="2" y="6" rx="2" />
          </svg>
        </div>
        
        <div className="absolute animate-float opacity-20" style={{ left: '90%', top: '70%', animationDelay: '2.5s', animationDuration: '6.5s' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target text-primary/60 animate-pulse">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
          </svg>
        </div>
      </div>

      {/* Additional Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-32 left-16 flex space-x-1 opacity-30">
          <div className="w-2 bg-gradient-to-t from-primary/60 to-accent/40 animate-pulse" style={{ height: '20px', animationDelay: '0s' }} />
          <div className="w-2 bg-gradient-to-t from-primary/60 to-accent/40 animate-pulse" style={{ height: '35px', animationDelay: '0.2s' }} />
          <div className="w-2 bg-gradient-to-t from-primary/60 to-accent/40 animate-pulse" style={{ height: '50px', animationDelay: '0.4s' }} />
          <div className="w-2 bg-gradient-to-t from-primary/60 to-accent/40 animate-pulse" style={{ height: '65px', animationDelay: '0.6s' }} />
          <div className="w-2 bg-gradient-to-t from-primary/60 to-accent/40 animate-pulse" style={{ height: '80px', animationDelay: '0.8s' }} />
        </div>
        
        <div className="absolute top-32 right-20 opacity-25">
          <div className="relative w-16 h-16">
            <svg className="w-full h-full animate-spin" style={{ animationDuration: '8s' }}>
              <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary/40" strokeDasharray="60 40" />
            </svg>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* AI Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm rounded-full px-8 py-3 mb-8 border border-primary/30 animate-fade-in shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles h-5 w-5 text-primary animate-pulse">
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
              <path d="M20 3v4" />
              <path d="M22 5h-4" />
              <path d="M4 17v2" />
              <path d="M5 18H3" />
            </svg>
            <span className="text-sm font-semibold text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AI-Powered Career Enhancement
            </span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>

          {/* Main Heading */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex flex-col items-center  text-gray-300 justify-center opacity-60">
              <h1 className="text-8xl sm:text-9xl lg:text-[12rem]">SKANJO</h1>
            </div>
            <h1 className="relative text-9xl lg:text-8xl">
              <span className="block relative">
                <span className="text-gray-300 text-8xl lg:text-[6rem]">
                  Transform Your
                </span>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-pulse" />
              </span>
              <br />
              <span className="block relative mt-4">
                <span className=" text-gray-300">
                  Career Journey
                </span>
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute w-1 h-1 bg-primary/60 rounded-full animate-bounce" style={{ left: '40.6467%', top: '38.8815%', animationDelay: '0.580176s', animationDuration: '1.06922s' }} />
                  <div className="absolute w-1 h-1 bg-primary/60 rounded-full animate-bounce" style={{ left: '36.322%', top: '84.9831%', animationDelay: '0.220215s', animationDuration: '1.35091s' }} />
                  <div className="absolute w-1 h-1 bg-primary/60 rounded-full animate-bounce" style={{ left: '81.4614%', top: '6.80421%', animationDelay: '0.212056s', animationDuration: '1.68239s' }} />
                  <div className="absolute w-1 h-1 bg-primary/60 rounded-full animate-bounce" style={{ left: '19.7242%', top: '38.3901%', animationDelay: '0.866485s', animationDuration: '1.47906s' }} />
                  <div className="absolute w-1 h-1 bg-primary/60 rounded-full animate-bounce" style={{ left: '3.76922%', top: '78.4352%', animationDelay: '0.417458s', animationDuration: '1.86193s' }} />
                  <div className="absolute w-1 h-1 bg-primary/60 rounded-full animate-bounce" style={{ left: '2.03305%', top: '12.9849%', animationDelay: '0.142428s', animationDuration: '1.63199s' }} />
                  <div className="absolute w-1 h-1 bg-primary/60 rounded-full animate-bounce" style={{ left: '81.5671%', top: '21.692%', animationDelay: '0.865018s', animationDuration: '1.20331s' }} />
                  <div className="absolute w-1 h-1 bg-primary/60 rounded-full animate-bounce" style={{ left: '35.1915%', top: '13.4293%', animationDelay: '0.0265847s', animationDuration: '1.47246s' }} />
                </div>
              </span>
            </h1>
          </div>
          <div className="relative mb-12">
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in delay-200 font-medium">
              <span className="bg-gradient-to-r from-muted-foreground to-foreground bg-clip-text text-transparent">
                AI-powered CV optimization, skill gap analysis, and personalized learning paths to land your dream job
              </span>
            </p>
            <div className="absolute -left-4 top-1/2 w-2 h-2 bg-primary/40 rounded-full animate-ping" />
            <div className="absolute -right-4 top-1/2 w-2 h-2 bg-accent/40 rounded-full animate-ping delay-500" />
          </div>
          <div className="mb-12 relative">
            <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl border-2 border-primary/20 p-8 max-w-2xl mx-auto animate-fade-in delay-300 shadow-2xl shadow-primary/10 hover:shadow-primary/20 transition-all duration-500 hover:scale-105">
              <div className="flex items-center justify-between mb-8">
                <div className="flex space-x-3">
                  <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse" />
                  <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse delay-100" />
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse delay-200" />
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm font-mono text-muted-foreground">SKANJO AI</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 rounded-xl transition-all duration-500 transform bg-gradient-to-r from-primary/20 to-accent/10 border-2 border-primary/30 scale-105 shadow-lg">
                  <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-upload h-6 w-6 text-primary">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" x2="12" y1="3" y2="15" />
                    </svg>
                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-semibold">Upload CV & Job Description</span>
                    <div className="w-full bg-muted/30 rounded-full h-1 mt-1">
                      <div className="h-1 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 w-full" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-xl transition-all duration-500 transform bg-muted/20 border border-muted/30">
                  <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target h-6 w-6 text-primary">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-semibold">AI Analysis & Skill Gap Detection</span>
                    <div className="w-full bg-muted/30 rounded-full h-1 mt-1">
                      <div className="h-1 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 w-0" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-xl transition-all duration-500 transform bg-muted/20 border border-muted/30">
                  <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap h-6 w-6 text-primary">
                      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-semibold">Personalized Learning & CV Optimization</span>
                    <div className="w-full bg-muted/30 rounded-full h-1 mt-1">
                      <div className="h-1 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 w-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in delay-500 mb-8">
            <a 
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 group relative overflow-hidden bg-gradient-to-r from-primary via-primary/90 to-primary/80 hover:from-primary/90 hover:to-primary/70 transform hover:scale-110 transition-all duration-500 text-lg px-12 py-8 rounded-2xl shadow-2xl shadow-primary/30 hover:shadow-primary/50 border border-primary/20 flex items-center space-x-3 relative z-10" 
              href="/analyze"
            >
              <span className="font-bold">Start Analysis</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-6 w-6 group-hover:translate-x-1 transition-transform duration-300">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer" />
            </a>
            
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-background hover:bg-accent hover:text-accent-foreground h-11 group text-lg px-12 py-8 rounded-2xl border-2 border-primary/30 hover:bg-gradient-to-r hover:from-accent/20 hover:to-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm">
              <span className="group-hover:text-primary transition-colors duration-300 font-semibold">Watch Demo</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 animate-fade-in delay-700">
            <p className="text-sm text-muted-foreground mb-8 font-medium">Trusted by professionals at</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
              <div className="relative group">
                <div className="text-xl font-bold text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110 cursor-pointer">Google</div>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
              </div>
              <div className="relative group">
                <div className="text-xl font-bold text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110 cursor-pointer">Microsoft</div>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
              </div>
              <div className="relative group">
                <div className="text-xl font-bold text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110 cursor-pointer">Amazon</div>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
              </div>
              <div className="relative group">
                <div className="text-xl font-bold text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110 cursor-pointer">Meta</div>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
              </div>
              <div className="relative group">
                <div className="text-xl font-bold text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110 cursor-pointer">Apple</div>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
