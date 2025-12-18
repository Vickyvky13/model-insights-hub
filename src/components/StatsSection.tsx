import { useEffect, useState } from "react";
import { Database, Users, Trophy } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  delay: number;
  isLoading: boolean;
}

const StatItem = ({ icon, value, label, suffix = "", delay, isLoading }: StatItemProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isLoading) return;
    
    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const counter = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay, isLoading]);

  return (
    <div 
      className="glass-card p-6 md:p-8 text-center animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center glow-cyan">
          {icon}
        </div>
      </div>
      <div className="stat-number mb-2">
        {isLoading ? "..." : count.toLocaleString()}{!isLoading && suffix}
      </div>
      <p className="text-muted-foreground text-sm md:text-base font-medium">
        {label}
      </p>
    </div>
  );
};

const StatsSection = () => {
  const [stats, setStats] = useState({ chats: 0, users: 0, rankings: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('get-mongodb-stats');
        
        if (error) {
          console.error('Error fetching stats:', error);
          return;
        }
        
        if (data) {
          setStats({
            chats: data.chats || 0,
            users: data.users || 0,
            rankings: data.rankings || 0,
          });
        }
      } catch (err) {
        console.error('Failed to fetch stats:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statItems = [
    {
      icon: <Database className="w-6 h-6 text-primary" />,
      value: stats.chats,
      label: "Chats_DB",
      suffix: "+",
      delay: 0,
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      value: stats.users,
      label: "User_DB",
      suffix: "",
      delay: 200,
    },
    {
      icon: <Trophy className="w-6 h-6 text-primary" />,
      value: stats.rankings,
      label: "user_ranking",
      suffix: "",
      delay: 400,
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="text-center mb-12">
        <span className="section-number">01</span>
        <h2 className="text-3xl md:text-4xl font-bold gradient-text -mt-12 mb-4">
          Database Stats
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Real-time statistics from MongoDB database
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statItems.map((stat, index) => (
          <StatItem key={index} {...stat} isLoading={isLoading} />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
