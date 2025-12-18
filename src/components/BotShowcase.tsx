import { Bot, ExternalLink, Zap, Gamepad2, Crown } from "lucide-react";

interface BotCardProps {
  name: string;
  username: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  gradient: string;
  delay: number;
}

const BotCard = ({ name, username, description, icon, features, gradient, delay }: BotCardProps) => {
  const telegramUrl = `https://t.me/${username.replace("@", "")}`;

  return (
    <a
      href={telegramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bot-card group block animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div 
          className={`w-14 h-14 rounded-2xl flex items-center justify-center ${gradient}`}
        >
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground group-hover:gradient-text transition-all">
            {name}
          </h3>
          <p className="text-primary text-sm font-medium">{username}</p>
        </div>
        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
      
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {features.map((feature, index) => (
          <span 
            key={index}
            className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
          >
            {feature}
          </span>
        ))}
      </div>
    </a>
  );
};

const BotShowcase = () => {
  const bots = [
    {
      name: "Cricket Game Bot",
      username: "@Cricket_GameBot",
      description: "The original cricket gaming experience on Telegram. Play matches, compete with friends, and climb the leaderboard.",
      icon: <Gamepad2 className="w-7 h-7 text-white" />,
      features: ["PvP Matches", "Leaderboards", "Daily Rewards"],
      gradient: "bg-gradient-to-br from-cyan-500 to-blue-600",
      delay: 0,
    },
    {
      name: "Cricket Game 2",
      username: "@Cricket_Game2bot",
      description: "The sequel with enhanced gameplay mechanics, new game modes, and improved graphics for the ultimate cricket experience.",
      icon: <Zap className="w-7 h-7 text-white" />,
      features: ["New Modes", "Better Graphics", "Tournaments"],
      gradient: "bg-gradient-to-br from-purple-500 to-pink-600",
      delay: 200,
    },
    {
      name: "Cricket PCG Bot",
      username: "@CricketPCGBot",
      description: "Premium Cricket Gaming bot with exclusive features, advanced statistics, and professional league support.",
      icon: <Crown className="w-7 h-7 text-white" />,
      features: ["Pro League", "Advanced Stats", "Premium"],
      gradient: "bg-gradient-to-br from-amber-500 to-orange-600",
      delay: 400,
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="text-center mb-12">
        <span className="section-number">02</span>
        <h2 className="text-3xl md:text-4xl font-bold gradient-text -mt-12 mb-4">
          Telegram Bots
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Experience cricket gaming on Telegram with our powerful bots
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bots.map((bot, index) => (
          <BotCard key={index} {...bot} />
        ))}
      </div>
    </section>
  );
};

export default BotShowcase;
