import { Gamepad, Shield, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 text-center relative">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-muted-foreground">Live & Active</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
          <span className="gradient-text">PCG Group</span>
          <br />
          <span className="text-foreground">Cricket Gaming</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "200ms" }}>
          The ultimate cricket gaming experience on Telegram. Play, compete, and dominate the leaderboards.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: "400ms" }}>
          <div className="flex items-center gap-2 px-5 py-3 glass-card">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Lightning Fast</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-3 glass-card">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Secure & Fair</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-3 glass-card">
            <Gamepad className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">24/7 Gaming</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
