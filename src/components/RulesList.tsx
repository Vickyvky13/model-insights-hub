import RuleCard from "./RuleCard";

const rules = [
  {
    title: "Be Polite & Respectful",
    description:
      "Be polite and considerate to all members, regardless of language or background. Treat everyone with kindness and respect their opinions.",
    accentColor: "--accent-coral",
  },
  {
    title: "No Discrimination",
    description:
      "Any form of racism, sexism, or offensive remarks is strictly prohibited. We have zero tolerance for hate speech or discriminatory behavior.",
    accentColor: "--accent-violet",
  },
  {
    title: "Avoid Arguments",
    description:
      "Avoid arguments, personal attacks, and sensitive topics like politics or religion. Keep discussions friendly and constructive.",
    accentColor: "--accent-cyan",
  },
  {
    title: "No Spam or Flooding",
    description:
      "Do not flood the chat with excessive messages, links, or promotions. Avoid using spam, scam content, or inappropriate language.",
    accentColor: "--accent-emerald",
  },
  {
    title: "Language Respect",
    description:
      "Respect that not everyone speaks the same language fluently. Be patient and understanding with members who are still learning.",
    accentColor: "--accent-amber",
  },
  {
    title: "Appropriate Content Only",
    description:
      "Avoid sharing explicit, violent, or disturbing material. All shared content must be appropriate for all ages and backgrounds.",
    accentColor: "--accent-rose",
  },
  {
    title: "Listen to Admins",
    description:
      "Follow instructions from group admins and moderators. They are here to maintain a healthy community environment.",
    accentColor: "--accent-sky",
  },
  {
    title: "Have Fun!",
    description:
      "Most importantly, enjoy being part of this community! Share your experiences, make friends, and have a great time together.",
    accentColor: "--accent-lime",
  },
];

const RulesList = () => {
  return (
    <div className="space-y-4">
      {rules.map((rule, index) => (
        <RuleCard
          key={index}
          title={rule.title}
          description={rule.description}
          index={index}
          accentColor={rule.accentColor}
        />
      ))}
    </div>
  );
};

export default RulesList;
