import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import BotShowcase from "@/components/BotShowcase";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen grid-overlay">
      {/* Background glow effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <HeroSection />
        <StatsSection />
        <BotShowcase />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
