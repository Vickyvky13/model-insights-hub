import Header from "@/components/Header";
import RulesList from "@/components/RulesList";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen py-8 px-4 md:py-12">
      {/* Background decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-violet/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Main container with glassmorphism */}
        <div className="glass-container rounded-3xl p-6 md:p-8">
          <Header />
          <RulesList />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
