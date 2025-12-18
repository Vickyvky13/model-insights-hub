import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-10 text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
      <div className="glass rounded-xl p-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
        <span>Made with</span>
        <Heart className="w-4 h-4 text-accent-rose fill-accent-rose animate-pulse-soft" />
        <span>by PCG Community</span>
      </div>
      
      <p className="text-xs text-muted-foreground/60 mt-4">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </footer>
  );
};

export default Footer;
