import { Category, getCategoryByKey } from "./categories";

export type Note = {
  slug: string;
  title: string;
  date: string;
  icon: string;
  tags: string[];
  category: string;
  body: string;
  emoji?: string;
  excerpt?: string;
  status?: string;
  updated?: string;
};

export const notes: Note[] = [
  {
    slug: "build-clarity",
    title: "Build clarity before features",
    date: "May 2025",
    icon: "🌱",
    tags: ["Product", "Strategy"],
    category: "Product",
    body: "Before you build, align on what 'done' actually looks like. Clarity eliminates churn, miscommunication, and waste. Alignment is a feature.",
    emoji: "🌱",
    excerpt: "Before you build, align on what 'done' actually looks like.",
    status: "Evergreen",
    updated: "2025-05-20"
  },
  {
    slug: "momentum-over-perfection",
    title: "Momentum over perfection",
    date: "April 2025",
    icon: "🌿",
    tags: ["Mindset"],
    category: "Mindset",
    body: "Shipping builds confidence. Waiting builds pressure. Even a half-good release builds more momentum than a perfectly scoped delay.",
    emoji: "🌿",
    excerpt: "Shipping builds confidence. Waiting builds pressure.",
    status: "Budding",
    updated: "2025-04-15"
  },
  {
    slug: "hire-slower",
    title: "Why I prefer hiring slow",
    date: "March 2025",
    icon: "🌲",
    tags: ["Team Building"],
    category: "Company Building",
    body: "Hiring slowly means you actually know what you need. It's easier to grow a team than shrink one. Culture is set by the first ten, not the first hundred.",
    emoji: "🌲",
    excerpt: "Hiring slowly means you actually know what you need.",
    status: "Seedling",
    updated: "2025-03-10"
  },
  // --- PLACEHOLDER NOTES ---
  {
    slug: "design-decisions-in-chaos",
    title: "Design Decisions in Chaos",
    emoji: "🌪️",
    excerpt: "How to stay clear-headed when feedback is flying in every direction.",
    tags: ["Design", "Process"],
    category: "Design",
    status: "Budding",
    updated: "2025-05-22",
    date: "May 2025",
    icon: "🌪️",
    body: "How to stay clear-headed when feedback is flying in every direction. Sometimes the best design is simply the one you can ship.",
  },
  {
    slug: "ai-productivity-hacks",
    title: "AI Productivity Hacks",
    emoji: "🤖",
    excerpt: "Small automations that save hours every week.",
    tags: ["AI", "Productivity"],
    category: "AI & Tools",
    status: "Evergreen",
    updated: "2025-05-18",
    date: "May 2025",
    icon: "🤖",
    body: "Small automations that save hours every week. AI isn't just about big breakthroughs—it's about little wins that add up.",
  },
  {
    slug: "research-in-public",
    title: "Research in Public",
    emoji: "🔬",
    excerpt: "Why sharing unfinished work accelerates learning.",
    tags: ["Research", "Mindset"],
    category: "Research",
    status: "Seedling",
    updated: "2025-05-16",
    date: "May 2025",
    icon: "🔬",
    body: "Why sharing unfinished work accelerates learning. When you show your process, you invite better questions.",
  },
  {
    slug: "strategy-vs-tactics",
    title: "Strategy vs Tactics",
    emoji: "🗺️",
    excerpt: "How to know if you're solving the right problem.",
    tags: ["Strategy", "Product"],
    category: "Strategy",
    status: "Budding",
    updated: "2025-05-14",
    date: "May 2025",
    icon: "🗺️",
    body: "How to know if you're solving the right problem. Tactics are easy to copy; strategy is hard to see.",
  },
  {
    slug: "design-for-delight",
    title: "Design for Delight",
    emoji: "✨",
    excerpt: "Delight isn't just polish — it's empathy.",
    tags: ["Design", "Product"],
    category: "Design",
    status: "Evergreen",
    updated: "2025-05-12",
    date: "May 2025",
    icon: "✨",
    body: "Delight isn't just polish — it's empathy. The best products feel like they were made just for you.",
  },
  {
    slug: "productivity-without-burnout",
    title: "Productivity Without Burnout",
    emoji: "🔥",
    excerpt: "How to keep output high and stress low.",
    tags: ["Productivity", "Mindset"],
    category: "Productivity",
    status: "Budding",
    updated: "2025-05-10",
    date: "May 2025",
    icon: "🔥",
    body: "How to keep output high and stress low. Productivity isn't about doing more—it's about doing what matters.",
  },
  {
    slug: "ai-in-the-wild",
    title: "AI in the Wild",
    emoji: "🦾",
    excerpt: "Lessons from deploying AI in real products.",
    tags: ["AI", "Research"],
    category: "AI & Tools",
    status: "Evergreen",
    updated: "2025-05-08",
    date: "May 2025",
    icon: "🦾",
    body: "Lessons from deploying AI in real products. The wild is where theory meets reality.",
  },
  {
    slug: "design-systems-are-culture",
    title: "Design Systems are Culture",
    emoji: "🏛️",
    excerpt: "Why your UI library is your company's DNA.",
    tags: ["Design", "Strategy"],
    category: "Design",
    status: "Seedling",
    updated: "2025-05-06",
    date: "May 2025",
    icon: "🏛️",
    body: "Why your UI library is your company's DNA. A design system is a living artifact of your values.",
  },
  {
    slug: "the-researcher's-mindset",
    title: "The Researcher's Mindset",
    emoji: "🧠",
    excerpt: "How to think like a scientist in everyday work.",
    tags: ["Research", "Process"],
    category: "Research",
    status: "Budding",
    updated: "2025-05-04",
    date: "May 2025",
    icon: "🧠",
    body: "How to think like a scientist in everyday work. Curiosity is the engine of progress.",
  }
];

export function getNoteBySlug(slug: string): Note | undefined {
  return notes.find((note) => note.slug === slug);
}

export function getNotesByCategory(category: string): Note[] {
  return notes.filter((note) => note.category === category);
}

export function getAllCategoriesWithCounts(): { category: string; count: number; data: Category }[] {
  const categoryCounts = notes.reduce<Record<string, number>>((acc, note) => {
    acc[note.category] = (acc[note.category] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(categoryCounts).map(([category, count]) => ({
    category,
    count,
    data: getCategoryByKey(category)!
  }));
}
