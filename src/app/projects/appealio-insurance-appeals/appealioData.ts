import type { TeamMember } from '@/types/team';

interface Image {
  src: string;
  alt: string;
}

interface Metric {
  value: string;
  label: string;
}

interface AppealioData {
  title: string;
  company: {
    name: string;
    url: string;
  };
  heroImage: Image;
  team: TeamMember[];
  summary: string;
  outcomes: {
    metrics: Metric[];
    summary: string;
  };
}

export const appealioData: AppealioData = {
  title: "Revolutionizing the Insurance Appeal Process",
  company: { 
    name: "DocVocate - Appealio", 
    url: "https://www.docvocate.com" 
  },
  heroImage: {
    src: "/images/projects/appealio/appealio-hero.webp",
    alt: "Appealio platform interface showing insurance appeal workflow"
  },
  team: [
    {
      name: "Stephen Perkins",
      linkedin: "https://www.linkedin.com/in/perkinsstephen",
      avatar: "/images/coworkers/stephen-perkins.jpg"
    },
    {
      name: "Kishan Patel",
      linkedin: "https://www.linkedin.com/in/kishanhpatel/",
      avatar: "/images/coworkers/kishan-patel.jpeg"
    },
    {
      name: "Sean Kim",
      linkedin: "https://www.linkedin.com/in/seanwkim/",
      avatar: "/images/coworkers/sean-kim.jpeg"
    },
    {
      name: "Andrii Gorishnii",
      linkedin: "https://www.linkedin.com/in/gorishnii/",
      avatar: "/images/coworkers/andrii-gorishnii.jpeg"
    }
  ],
  summary: "",
  outcomes: {
    metrics: [
      { value: "75%", label: "Decrease in appeal time" },
      { value: "+26%", label: "Increase in revenue" },
      { value: "40%", label: "Higher volume of appeals completed" },
      { value: "32%", label: "More appeals accepted by insurance" }
    ],
    summary: "The tool not only saved time and reduced stress but also increased financial returns for providers. They earned more by processing appeals faster and more efficiently, with fewer rounds of appeals and a much higher acceptance rate."
  }
};
