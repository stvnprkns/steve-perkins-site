interface Image {
  src: string;
  alt: string;
}

interface Metric {
  value: string;
  label: string;
}

export interface RudderstackTeamData {
  title: string;
  company: {
    name: string;
    url: string;
  };
  heroImage: Image;
  team: string[];
  summary: string;
  outcomes: {
    metrics: Metric[];
    summary: string;
  };
}

export const rudderstackTeamData: RudderstackTeamData = {
  title: "Founding a Design Team and Growing a Culture",
  company: { 
    name: "RudderStack", 
    url: "https://rudderstack.com" 
  },
  heroImage: {
    src: "/images/projects/rudderstack-team/rudderstack-design-hero.webp",
    alt: "RudderStack design team working together"
  },
  team: ["Me", "Edward Won", "Kristin Landgraf", "Lisa Collins", "Suhani Harish", "Anne Sommer", "Julianne Vinh"],
  summary: "",
  outcomes: {
    metrics: [
      { value: "+6", label: "Point improvement in System Usability Score" },
      { value: "20%", label: "Reduction in design-related bugs" },
      { value: "40%", label: "Reduction in design cycle times" },
      { value: "60%", label: "More time spent with customers" }
    ],
    summary: "Through collaborative processes and a focus on user needs, we significantly improved product usability and design efficiency."
  }
};
