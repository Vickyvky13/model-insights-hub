import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface RuleCardProps {
  title: string;
  description: string;
  index: number;
  accentColor: string;
}

const RuleCard = ({ title, description, index, accentColor }: RuleCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div
        className={`glass rounded-xl overflow-hidden transition-all duration-300 hover:shadow-card-hover cursor-pointer group`}
        style={{
          borderLeftWidth: "4px",
          borderLeftColor: `hsl(var(${accentColor}))`,
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="p-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
            <span
              className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold text-primary-foreground"
              style={{ backgroundColor: `hsl(var(${accentColor}))` }}
            >
              {index + 1}
            </span>
            <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
          </div>
          <button
            className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
            aria-label={isOpen ? "Collapse" : "Expand"}
          >
            {isOpen ? (
              <Minus className="w-4 h-4" />
            ) : (
              <Plus className="w-4 h-4" />
            )}
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ease-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-5 pb-5 pt-0">
            <div
              className="h-px w-full mb-4"
              style={{
                background: `linear-gradient(90deg, hsl(var(${accentColor}) / 0.3), transparent)`,
              }}
            />
            <p className="text-muted-foreground leading-relaxed pl-12">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RuleCard;
