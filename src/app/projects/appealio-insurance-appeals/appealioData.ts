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
      linkedin: "#"
    },
    {
      name: "Sean Kim",
      linkedin: "#"
    },
    {
      name: "Andrii Gorishnii",
      linkedin: "#"
    }
  ],
  summary: "Good or bad, we all have to deal with insurance. However, unless you work in healthcare, you've probably never encountered the appeals process. This process involves negotiations between insurers and healthcare providers to determine final prices.",
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
