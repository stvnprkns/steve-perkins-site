import { TeamMember } from '@/types/team';

interface HeroImage {
  src: "/images/projects/rudderstack/rudderstack-hero.webp";
  alt: string;
}

interface Quote {
  text: string;
  author: string;
}

interface Image {
  src: string;
  alt: string;
}

interface Metric {
  value: string;
  label: string;
}

export interface RudderstackData {
  title: string;
  company: {
    name: string;
    url: string;
  };
  heroImage?: Image;
  team: TeamMember[];
  summary: string;
  problem: {
    heading: string;
    content: string;
  };
  approach: {
    heading: string;
    intro: string;
    steps: Array<{
      title: string;
      description: string;
      image?: Image;
      quote?: Quote;
    }>;
  };
  connectionMode: {
    heading: string;
    content: string;
    image: Image;
  };
  formReduction: {
    heading: string;
    content: string;
    image: Image;
  };
  configDesign: {
    heading: string;
    content: string;
    image: Image;
  };
  outcomes: {
    heading: string;
    metrics: Metric[];
    summary: string;
  };
}

export const rudderstackData: RudderstackData = {
  title: "Connecting Data to Where it Matters Most",
  company: { name: "RudderStack", url: "https://rudderstack.com" },
  heroImage: {
    src: "/images/projects/rudderstack/rudderstack-hero.webp",
    alt: "RudderStack dashboard showing data connections"
  },
  team: [
    {
      name: "Stephen Perkins",
      linkedin: "https://www.linkedin.com/in/perkinsstephen",
      avatar: "/images/coworkers/stephen-perkins.jpg"
    },
    {
      name: "Kristin Landgraf",
      linkedin: "https://www.linkedin.com/in/kristin-landgraf-3b0a1a1/",
      avatar: "/images/coworkers/kristin-landgraf.jpg"
    },
    {
      name: "Amy Ng",
      linkedin: "https://www.linkedin.com/in/amy-n-60b8b610/",
      avatar: "/images/coworkers/amy-ng.jpg"
    },
    {
      name: "Sagan Schultz",
      linkedin: "https://www.linkedin.com/in/saganschultz/",
      avatar: "/images/coworkers/sagan-schultz.jpg"
    }
  ],
  summary: "A strategic redesign of RudderStack’s core workflow — reducing onboarding friction, clarifying configuration, and boosting new destination creation by 220%.",
  problem: {
    heading: "Integrating data across platforms is hard.",
    content: `Talking about it is also hard, so I will spare you the details.\n\nWhat I will talk about is how implementing basic UX strategies made it easier.\n\nMany of the core functions of RudderStack were built by developers. In this case, engineers had designed a form that put everything users could ever want to tell us on one page. It was an act of generosity, that fell short on user empathy.\n\nFrom a design perspective it felt overwhelming.\n\nThe data backed up that this all-in-one approach wasn't working. Less than 50% of users who started the form completed it.\n\nThis was the project that I used to change our process at RudderStack.`
  },
  approach: {
    heading: "Our Approach",
    intro: "We took a systematic approach to improve the developer experience by focusing on simplifying complex workflows and reducing configuration time.",
    steps: [
      {
        title: "1. Dig into the Data",
        description: `Up to this point the company didn’t do a good job of validating before building. So the team began with an exhaustive exploration of how users setup destinations — looking at behavior data, support tickets, and community feedback. We identified common stumbling blocks and opportunities for simplification.`,
        image: {
          src: "/images/rudderstack-mixpanel-flow.webp",
          alt: "Mixpanel flow graph showing 50% dropoff rate at each step of the flow."
        }
      },
      {
        title: "2. Talk to Customers",
        description: `Data can tell you what they did but not why, so I led our first ever discovery customer interviews. I wrote a research plan and script focused on open-ended questions about connecting destinations. We learned more about how people set up connections after 3 interviews than we did with all of the data we gathered. We even witnessed a customer struggle for almost 2 hours to configure a Snowflake destination.`,
        quote: {
          text: "I just spent half of my day trying to configure a Google Analytics destination. I have to constantly refer to the docs to understand what everything does.",
          author: "Alex"
        }
      },
      {
        title: "3. Define Unclear Terms",
        description: `CDPs are complicated, and even the people who make them (us) didn’t completely understand some of the fields. So the PM and I sat down with engineering and went field by field figuring out what each did, where the data connected, what the implications were, and what destinations shared that field. We mapped the web of settings and created an enormous and beautiful spreadsheet. Out of 27 fields only 2 of them were required: Name and API Key. Most importantly we learned that one of the last settings on the list — ‘Connection Mode’ — was easily the most important setting and nobody knew it.`,
        image: {
          src: "/images/rudderstack-spreadsheet.png",
          alt: "Our massive spreadsheet mapping all of the configuration settings, their impacts, relations, and information."
        }
      }
    ]
  },
  connectionMode: {
    heading: "Connection Mode: an aside",
    content: `Connection Mode turned into a mini project all on its own. This little switch, hidden away, had zero helper text, and there was nothing in the docs about it. Only 1 in 5 customers we talked to actually knew what it did. But this little setting was the single most important choice when configuring a destination.\n\nOur biggest problem it seemed was communication. Our UX Writer played a pivotal role in demystifying what exactly this did and why it matters, so customers could make the right choice for them.\n\nThe writing defined the final design.`,
    image: {
      src: "/images/rudderstack-connection-mode.png",
      alt: "Connection Mode close up showing the language and interaction."
    }
  },
  formReduction: {
    heading: "From 27 fields to 2 steps",
    content: `We wanted to get customers to create the destination with as little friction as possible, asking only what was required. With this new workflow, once the destination is created it is disabled by default and the user goes straight to configuration so they can manage all of their settings in their own time and enable it once it’s ready.`,
    image: {
      src: "/images/rudderstack-flowchart.png",
      alt: "RudderStack Destination create and configure flowchart."
    }
  },
  configDesign: {
    heading: "Configuring with ease",
    content: `We completely redesigned our settings forms to be organized and created plenty of room for helper text, and definitions of each field. We organized the form structure into categories and provided critical information about the categories themselves.`,
    image: {
      src: "/images/rudderstack-config-form.png",
      alt: "Newly designed configuration and settings page for destinations."
    }
  },
  outcomes: {
    heading: "Outcomes",
    metrics: [
      { value: "+220%", label: "Increase in new destinations" },
      { value: "70%", label: "Reduction in setup time" },
      { value: "20%", label: "Boost in user retention" },
      { value: "15%", label: "Increase in warehouse destinations" }
    ],
    summary: `The impact of this project had ripples across the product and the business. By streamlining the core creation workflow we boosted new destinations by 220% and drastically decreased the time it took to get set destination set up. These changes also improved our new user retention.`
  }
};
