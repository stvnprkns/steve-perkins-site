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
  summary: "Building a design team from the ground up at a fast-growing startup comes with unique challenges and opportunities. This is the story of how we established design as a strategic partner at RudderStack and created a culture of collaboration and innovation.",
  outcomes: {
    metrics: [
      { value: "5x", label: "Increase in design output" },
      { value: "90%", label: "Reduction in design debt" },
      { value: "4.9/5", label: "Team satisfaction score" },
      { value: "100%", label: "Feature adoption rate" }
    ],
    summary: "By focusing on building a strong team culture and establishing clear processes, we were able to significantly increase our design output and quality while maintaining high team satisfaction."
  }
};
