// Define types for the data structure
type StatItem = {
  value: string;
  label: string;
};

type ImageItem = {
  src: string;
  alt: string;
};

type ContentSection = {
  content: string;
  images: ImageItem[];
};

type TeamMember = {
  name: string;
  role: string;
  image: string;
  linkedin: string;
};

type QuickbooksData = {
  title: string;
  summary: string;
  company: {
    name: string;
    url: string;
  };
  team: TeamMember[];
  heroImage: ImageItem;
  intro?: {
    content: string;
  };
  talkingShop: ContentSection;
  creatingExperiment: ContentSection;
  theAd: ContentSection;
  playingMatchmaker: ContentSection;
  talkingTax: ContentSection;
  whatWeLearned: {
    content: string;
    images: ImageItem[];
    stats: StatItem[];
  };
};

export const quickbooksData: QuickbooksData = {
  title: "Making Small Business Connections with CPAs",
  summary: "", // Summary is used for metadata but not displayed in the UI
  company: {
    name: "Intuit - QuickBooks",
    url: "https://www.quickbooks.com/"
  },
  team: [
    {
      name: "Stephen Perkins",
      role: "Product Design Lead",
      image: "/images/coworkers/stephen-perkins.jpg",
      linkedin: "https://www.linkedin.com/in/perkinsstephen"
    },
    {
      name: "Chris Hodge",
      role: "Product Manager",
      image: "/images/coworkers/chris-hodge.jpg",
      linkedin: "https://www.linkedin.com/in/j-chris-hodge/"
    },
    {
      name: "Majaliwa Bass",
      role: "Engineering Lead",
      image: "/images/coworkers/majaliwa-bass.jpg",
      linkedin: "https://www.linkedin.com/in/majaliwabass/"
    }
  ],
  heroImage: {
    src: "/images/projects/quickbooks-cpa-match/qb-hero.webp",
    alt: "QuickBooks CPA Match interface showing the connection platform between small business owners and trusted CPAs"
  },
  intro: {
    content: `## Running a business is a team sport

Working at Intuit was pivotal in shaping who I am as a designer and leader. On the Intuit Labs team, I worked on 0→1 concepts. Working on these projects taught me that building products is more like starting a company than pushing a roadmap.

The QuickBooks project exemplified these values perfectly.

Starting with a data point: 50% of small businesses fail within 5 years. We set out to improve the survival rate of businesses. A key point that pointed our way was that businesses with a CPA were more successful than those without.`
  },
  talkingShop: {
    content: `We talked to every business owner we could find. Walking shop to shop across the business corridors of Dallas asking owners questions about their business, what kept them up at night, and their relationship with CPAs. We chatted with more than 100 business owners in a week.

A big insight we found was that the owners who worked with tax professionals delegated all the things they hated about running a business: expense reporting, bookkeeping, etc., so they could focus on building the business, marketing, improving inventory, and connecting with customers.`,
    images: [
      {
        src: "/images/projects/quickbooks-cpa-match/qb-businesses.jpeg",
        alt: "Collage of small business owners in Dallas storefronts during customer research interviews about their accounting needs and CPA relationships"
      }
    ]
  },
  creatingExperiment: {
    content: `We built a very slim feature in QuickBooks that did 3 things: It let businesses match with a CPA, engage in a back-and-forth dialogue, and invoice and pay.`,
    images: [
      {
        src: "/images/projects/quickbooks-cpa-match/qb-workflow.webp",
        alt: "User flow diagram showing the complete CPA matching process in QuickBooks - from initial entry point through CPA selection to engagement and payment steps"
      }
    ]
  },
  theAd: {
    content: `### The Ad

We needed a way to get QuickBooks users to use this product. We set up targeting filters, the primary one was for businesses without a CPA connected to their QuickBooks account. We presented the 'ad' on the dashboard page of QuickBooks. We ran dozens of quick tests of this ad to try and improve click-through rates.`,
    images: [
      {
        src: "/images/projects/quickbooks-cpa-match/ad-variants.png",
        alt: "Multiple design variations of the QuickBooks dashboard advertisement promoting CPA matching services, showing different visual layouts and messaging tested to improve click-through rates"
      }
    ]
  },
  playingMatchmaker: {
    content: `### Playing matchmaker

We wanted the business owner to feel like we could find the perfect CPA for their business, but we only had 15 CPAs in our beta group. The owner would fill out a short questionnaire about their preferences, and we would filter the 15 CPAs down to 9 and randomize the order.

Contrary to what they told us, businesses didn't care as much about a perfect match as they let on.`,
    images: [
      {
        src: "/images/projects/quickbooks-cpa-match/qb-cpa-connect.webp",
        alt: "QuickBooks CPA matchmaker interface displaying a carousel of available tax professionals with their photos, credentials, and specialties for small business owners to browse and select"
      }
    ]
  },
  talkingTax: {
    content: `### Talking Tax

We needed a clear way for CPAs and business owners to communicate. QuickBooks had a messaging system integrated into the tool, but it wasn't built for this matchmaking concept. So we developed a way to have an introduction conversation, a way for the CPA to request access to their books, a task manager in the tool, and a way to cancel an engagement if it didn't work out.`,
    images: [
      {
        src: "/images/projects/quickbooks-cpa-match/qb-cpa-engage.webp",
        alt: "QuickBooks integrated messaging and task management interface showing the communication system between business owners and CPAs with conversation history and action items"
      }
    ]
  },
  whatWeLearned: {
    content: `Running a business is already hard, but doing so while being the bookkeeper makes it nearly impossible to be successful. After the experiment launched, the response was surprising.

Customer feedback highlighted immediate benefits: they were saving money on their taxes, finding more time and energy to devote to their businesses, and realizing how valuable tax professionals were in making daily financial decisions.

Over the course of a year, we connected 2000 businesses to CPAs

The pilot's success convinced Intuit to graduate the flow into the left-nav **My Accountant tab**—now live in every QuickBooks region. Today that tab sits in front of **6.5 million+ QuickBooks Online subscribers** worldwide, multiplying our original impact by three orders of magnitude.`,

    images: [],
    stats: [
      {
        value: "2000+",
        label: "Connections between CPAs and entrepreneurs in the first year"
      },
      {
        value: "15%",
        label: "Higher 5-year survival rate for businesses connected on our platform"
      }
    ]
  }
};
