import { Shield } from "lucide-react";

const Header = () => {
  return (
    <header className="text-center mb-10 animate-fade-in">
      <div className="inline-flex items-center justify-center mb-6">
        <div className="relative">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent-violet flex items-center justify-center shadow-glass animate-float">
            <Shield className="w-10 h-10 text-primary-foreground" />
          </div>
          <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-accent-violet/20 rounded-3xl blur-xl -z-10" />
        </div>
      </div>
      
      <h1 className="text-3xl md:text-4xl font-bold mb-3">
        <span className="text-gradient">PCG Group</span>{" "}
        <span className="text-foreground">Rules</span>
      </h1>
      
      <p className="text-muted-foreground max-w-md mx-auto">
        Please read and follow these community guidelines to ensure a positive experience for everyone.
      </p>
      
      <div className="flex items-center justify-center gap-2 mt-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse-soft" />
          Active Community
        </span>
      </div>
    </header>
  );
};

export default Header;
