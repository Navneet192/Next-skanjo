const StatsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/10 to-primary/5" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group animate-fade-in" style={{ animationDelay: '0ms' }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 mb-4 group-hover:scale-110 group-hover:border-primary/20 transition-all duration-300">
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
                className="lucide lucide-users h-8 w-8 text-blue-500"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-2">
              50K+
            </div>
            <div className="text-muted-foreground font-medium">
              Professionals Helped
            </div>
          </div>
          <div className="text-center group animate-fade-in" style={{ animationDelay: '150ms' }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 mb-4 group-hover:scale-110 group-hover:border-primary/20 transition-all duration-300">
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
                className="lucide lucide-trending-up h-8 w-8 text-green-500"
              >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
              </svg>
            </div>
            <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-2">
              85%
            </div>
            <div className="text-muted-foreground font-medium">
              Interview Success Rate
            </div>
          </div>
          <div className="text-center group animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 mb-4 group-hover:scale-110 group-hover:border-primary/20 transition-all duration-300">
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
                className="lucide lucide-award h-8 w-8 text-purple-500"
              >
                <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                <circle cx="12" cy="8" r="6" />
              </svg>
            </div>
            <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-2">
              95%
            </div>
            <div className="text-muted-foreground font-medium">
              CV Score Improvement
            </div>
          </div>
          <div className="text-center group animate-fade-in" style={{ animationDelay: '450ms' }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 mb-4 group-hover:scale-110 group-hover:border-primary/20 transition-all duration-300">
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
                className="lucide lucide-zap h-8 w-8 text-orange-500"
              >
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
              </svg>
            </div>
            <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-muted-foreground font-medium">
              AI Assistant
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
