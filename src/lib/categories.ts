export type Category = {
  title: string;
  subtitle: string;
  emoji: string;
};

export const categories: Record<string, Category> = {
  "Company Building": {
    title: "Company Building",
    subtitle: "How to scale something that lasts without losing your soul",
    emoji: "🏗️",
  },
  "AI & Tools": {
    title: "AI & Tools",
    subtitle: "The edges of automation and what it means to design with machines",
    emoji: "🤖",
  },
  "Design": {
    title: "Design",
    subtitle: "Systems, aesthetics, and the human decisions that drive both",
    emoji: "🎨",
  },
  "Product": {
    title: "Product",
    subtitle: "Building products that matter and the strategies behind them",
    emoji: "✨",
  },
  "Mindset": {
    title: "Mindset",
    subtitle: "Frameworks and perspectives for clear thinking and decision making",
    emoji: "🧠",
  },
  "Research": {
    title: "Research",
    subtitle: "Learning from data, users, and the world around us",
    emoji: "🔍",
  },
  "Productivity": {
    title: "Productivity",
    subtitle: "Working smarter, not harder",
    emoji: "⚡",
  },
  "Strategy": {
    title: "Strategy",
    subtitle: "Making intentional choices about where to play and how to win",
    emoji: "🎯",
  },
};

export function getCategoryByKey(key: string): Category | undefined {
  return categories[key];
}

export function getAllCategories(): Record<string, Category> {
  return categories;
}
