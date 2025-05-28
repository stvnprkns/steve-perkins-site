import { TeamMember } from '@/types/team';

interface Image {
  src: string;
  alt: string;
}

export interface QuickBooksData {
  title: string;
  company: {
    name: string;
    url: string;
  };
  heroImage: Image;
  team: TeamMember[];
  summary: string;
  // Add other fields as needed
}

export const quickbooksData: QuickBooksData = {
  title: "Making Small Business Connections with CPAs",
  company: { 
    name: "Intuit — QuickBooks", 
    url: "https://quickbooks.intuit.com/" 
  },
  heroImage: {
    src: "/images/projects/quickbooks-cpa-match/quickbooks-hero.webp",
    alt: "QuickBooks dashboard showing CPA matching feature"
  },
  team: [
    {
      name: "Stephen Perkins",
      linkedin: "https://www.linkedin.com/in/perkinsstephen",
      avatar: "/images/coworkers/stephen-perkins.jpg"
    },
    {
      name: "Chris Hodge",
      linkedin: "https://www.linkedin.com/in/j-chris-hodge/",
      avatar: "/images/coworkers/chris-hodge.jpg"
    },
    {
      name: "Majaliwa Bass",
      linkedin: "https://www.linkedin.com/in/majaliwabass/",
      avatar: "/images/coworkers/majaliwa-bass.jpg"
    }
  ],
  summary: `Running a business is a team sport. Working at Intuit was pivotal in shaping who I am as a designer and leader. 
  On the Intuit Labs team, I worked on 0→1 concepts. Working on these projects taught me that building products 
  is more like starting a company than pushing a roadmap.

  The QuickBooks project exemplified these values perfectly. Starting with a data point: 50% of small businesses 
  fail within 5 years. We set out to improve the survival rate of businesses. A key insight was that businesses 
  with a CPA were more successful than those without.`
};
