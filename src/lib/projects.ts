export type Project = {
  slug: string;
  title: string;
  role: string;
  timeframe: string;
  summary: string;
  image: string;
  images?: string[];
  body: string;
  tags?: string[];
};

export const projects: Project[] = [
  {
    slug: "quickbooks-cpa-match",
    title: "Making Small Business Connections with CPAs",
    role: "Product Designer",
    timeframe: "2015–2017",
    summary: "How Intuit QuickBooks matched small businesses with CPAs to improve survival rates, using user research, lean product experimentation, and measurable impact.",
    tags: ["Product Design", "User Research", "Team Leadership"],
    image: "/images/quickbooks-preview.webp",
    images: [
      "/images/coworkers/amy-ng.jpg",
      "/images/coworkers/anne-sommer.jpg",
      "/images/coworkers/chris-hodge.jpg",
      "/images/coworkers/edward-won.jpg",
      "/images/coworkers/julianne-vinh.jpg",
      "/images/coworkers/kristin-landgraf.jpg",
      "/images/coworkers/lisa-collins.jpg",
      "/images/coworkers/majaliwa-bass.jpg",
      "/images/coworkers/sagan-schultz.jpg",
      "/images/coworkers/suhani-harish.jpg",
      "/images/coworkers/stephen-perkins.jpg"
    ],
    body: `
**Company**  
[Intuit — QuickBooks ↗](https://quickbooks.intuit.com)

**Product Team**  
Stephen Perkins, Chris Hodge, Majaliwa Bass

---

## Talking Shop
Overview of the Intuit Labs project. The team interviewed 100+ small business owners in Dallas to understand how CPA relationships impact business survival. Key insight: CPAs helped offload financial stress so owners could focus on growth.

![Photos featuring various small business owners we talked to across Dallas.](/images/qb-cpa-owners.png)
*Fig. 1: Photos featuring various small business owners we talked to across Dallas.*

## Creating the Experiment
Prototype features:
- Match with a CPA
- In-product messaging
- Invoicing and payments

Included dashboard ad targeting users without CPAs. Iterated messaging/ad copy to improve engagement. Used a limited CPA pool and randomized matches. Built custom messaging flow to support real-world communication and disengagement logic.

![Workflow diagram](/images/qb-cpa-workflow.png)
*Fig. 2: Workflow of how users enter the experiment, select a CPA, and engage with them.*

![QuickBooks dashboard ad](/images/qb-cpa-dashboard-ad.png)
*Fig. 3: Experiment Ad on the QuickBooks dashboard.*

![CPA match carousel](/images/qb-cpa-carousel.png)
*Fig. 4: Matchmaker page, showing a carousel of the CPAs in our beta group.*

![Messaging tool with task manager](/images/qb-cpa-messaging.png)
*Fig. 5: The messaging tool with the task manager.*

## What We Learned
Immediate value surfaced: tax savings, time saved, and more business focus. Over a year:

- **+2000** Connections between CPAs and entrepreneurs in the first year.
- **15%** Higher 5-year survival rate for businesses connected on our platform.

> Running a business is already hard, but doing so while being the bookkeeper makes it nearly impossible to be successful. After the experiment launched, the response was surprising. Customer feedback highlighted immediate benefits: they were saving money on their taxes, finding more time and energy to devote to their businesses, and realizing how valuable tax professionals were in making daily financial decisions.
`
  },
  {
    slug: "rudderstack-team",
    title: "Founding a Design Team and Growing a Culture",
    role: "Head of Design",
    timeframe: "2021–2023",
    summary: "Brought design out of the margins and into the strategy room. I built RudderStack’s first design team — not as a service org, but as a cross-functional partner that shaped product direction, improved process, and earned its seat at the table.",
    image: "/images/rudderstack-preview.webp",
    images: [
      "/images/rudderstack-preview.webp",
      "/images/startup-preview.webp"
    ],
    body: `
**Company**  
[RudderStack ↗](https://rudderstack.com)

**Design Team**  
Me, Edward Won, Kristin Landgraf, Lisa Collins, Suhani Harish, Anne Sommer, Julianne Vinh

---

## How I Built a Team

I've spent more than a few years of my career as the only creative in a startup. It's a great way to learn how to fight through ambiguity, but it can be lonely and uninspiring. When I got hired as the Head of Design at RudderStack, I took the opportunity to do things differently.

### Collaboration at the Core

I didn't want designers to work alone in siloed pods. That's no fun, and when you're already outnumbered, it makes it even harder for creatives to have a voice. I built a cross-discipline team that tackled the problems of the product together. Each member owned a domain, and they all worked side by side throughout the project's lifecycle.

### Being an Advocate

I wanted to be the manager I always wanted for myself. I focused my time on finding opportunities to show off my team's capabilities, reworking processes to protect their time and quantify the value of it. I inserted myself into parts of the business I probably wasn't wanted in to create more continuity and cohesion across our marketing and product channels.

---

## How We Work

None of the following is revolutionary. The processes I put in place helped cross-functional teams work more collaboratively and elevated Design to become a strategic business partner.

### What We Build

We build the right thing, not everything. We focus on the most important problems to solve, and we solve them well.

### Be a Part of the Backlog

For design to be a strategic partner, we need to bring ideas to the table. Design has to look beyond the pixels and understand how we make money and how customers use the product. We have to be in the analytics, read the support tickets, and talk to our customers. If you don't intimately understand the problem, you can't create a good solution.

### Designers Write and Groom Tickets

Design knows better than anyone the information needed for design. By writing and scoping our own tickets, Design is involved in strategic conversations earlier. We can shape the solution from the start, set more accurate—and reasonable—timelines so that we can make better work.

### Designing the Product

We don't just design the UI. We design the product. We work with Product and Engineering to define the problem, explore solutions, and ship the best possible experience.

![RudderStack's Design and QA process](/images/rudderstack-design-qa.png)
*RudderStack's Design and QA process*

### Measuring Impact

Once a project is wrapped, we need to validate that our solution solved the problem. We set up tracking metrics on product launches and measure the impact.

---

## How We Succeeded

We use a lot of methods to track our effectiveness as a Design team. The System Usability Score (SUS) is how we measure whether the product we've designed is intuitive. It uses a set of 10 questions to gauge our customers' experience with our product.

Over 3 quarters, we improved our score from 62 to 68. A 6-point increase is a big jump for SUS. It shows that every quarter we made better work and improved our product experience.

![System Usability Score Card. Showing a 10x10 score chart based on the survey questions.](/images/sus-score-card.png)
*System Usability Score Card. Showing a 10x10 score chart based on the survey questions.*

### Key Metrics

- **+6 point** - Improvement of our System Usability Score over three quarters.
- **20%** - Reduction in design-related bugs in production.
- **40%** - Reduction in design cycle times, boosting productivity and quality.
- **60%** - More time spent with customers in discovery research, interviews, and testing sessions.

### The Impact

By focusing on collaboration, process, and measurement, we were able to transform the design team into a strategic partner for the business. Our work had a direct impact on the product's success, and we were able to demonstrate that impact through clear metrics and storytelling.
`
  },
  {
    slug: "rudderstack",
    title: "Connecting Data to Where it Matters Most",
    role: "Head of Design",
    timeframe: "June 2023",
    summary: "Redesigned RudderStack’s core setup experience from the ground up. We turned a 27-field engineering form into a focused 2-step workflow — increasing destination creation by 220% and dramatically improving first-time success. All through better language, structure, and UX strategy.",
    image: "/images/rudderstack-preview.png",
    images: [
      "/images/projects/rudderstack/rudderstack-hero.webp",
      "/images/rudderstack-preview.png"
    ],
    body: `
**Company**  
[RudderStack ↗](https://rudderstack.com)

**Product Team**  
Stephen Perkins, Kristin Landgraf, Amy Ng, Arnab Pal

---

## The Problem
Integrating data across platforms is hard. Talking about it is also hard, so I will spare you the details.

What I will talk about is how implementing basic UX strategies made it easier.

Many of the core functions of RudderStack were built by developers. In this case, engineers had designed a form that put everything users could ever want to tell us on one page. (It's too long to show here, but click here to see it.)

It was an act of generosity, that fell short on user empathy.

From a design perspective it felt overwhelming. The data backed up that this all-in-one approach wasn’t working. Less than 50% of users who started the form completed it.

This was the project that I used to change our process at RudderStack.

---

## Our Approach
To right this ship, we did just three things.

![Mixpanel flow graph showing 50% dropoff rate at each step of the flow.](/images/rudderstack-mixpanel-flow.png)
*Mixpanel flow graph showing 50% dropoff rate at each step of the flow.*

**1. Dig into the Data**  
Up to this point the company didn’t do a good job of validating before building. So the team began with an exhaustive exploration of how users setup destinations — looking at behavior data, support tickets, and community feedback. We identified common stumbling blocks and opportunities for simplification.

**2. Talk to Customers**  
Data can tell you what they did but not why, so I led our first ever discovery customer interviews. I wrote a research plan and script focused on open-ended questions about connecting destinations. We learned more about how people set up connections after 3 interviews than we did with all of the data we gathered. We even witnessed a customer struggle for almost 2 hours to configure a Snowflake destination.

> I just spent half of my day trying to configure a Google Analytics destination. I have to constantly refer to the docs to understand what everything does.
> 
> — Alex

**3. Define Unclear Terms**  
CDPs are complicated, and even the people who make them (us) didn’t completely understand some of the fields. So the PM and I sat down with engineering and went field by field figuring out what each did, where the data connected, what the implications were, and what destinations shared that field. We mapped the web of settings and created an enormous and beautiful spreadsheet.

![Our massive spreadsheet mapping all of the configuration settings, their impacts, relations, and information.](/images/rudderstack-spreadsheet.png)
*Our massive spreadsheet mapping all of the configuration settings, their impacts, relations, and information.*

Out of 27 fields only 2 of them were required: Name and API Key. Most importantly we learned that one of the last settings on the list — ‘Connection Mode’ — was easily the most important setting and nobody knew it.

---

## Connection Mode: an aside
Connection Mode turned into a mini project all on its own. This little switch, hidden away, had zero helper text, and there was nothing in the docs about it. Only 1 in 5 customers we talked to actually knew what it did. But this little setting was the single most important choice when configuring a destination.

Our biggest problem it seemed was communication. Our UX Writer played a pivotal role in demystifying what exactly this did and why it matters, so customers could make the right choice for them.

The writing defined the final design.

![Connection Mode close up showing the language and interaction.](/images/rudderstack-connection-mode.png)
*Connection Mode close up showing the language and interaction.*

---

## From 27 fields to 2 steps
We wanted to get customers to create the destination with as little friction as possible, asking only what was required. With this new workflow, once the destination is created it is disabled by default and the user goes straight to configuration so they can manage all of their settings in their own time and enable it once it’s ready.

![RudderStack Destination create and configure flowchart.](/images/rudderstack-flowchart.png)
*RudderStack Destination create and configure flowchart.*

---

## Configuring with ease
We completely redesigned our settings forms to be organized and created plenty of room for helper text, and definitions of each field. We organized the form structure into categories and provided critical information about the categories themselves.

![Newly designed configuration and settings page for destinations.](/images/rudderstack-config-form.png)
*Newly designed configuration and settings page for destinations.*

---

## Outcomes
<div class="grid grid-cols-2 gap-6 mt-8 mb-2">
  <div>
    <p class="text-2xl font-bold">+220%</p>
    <p class="text-sm text-muted">Increase in new destinations</p>
  </div>
  <div>
    <p class="text-2xl font-bold">70%</p>
    <p class="text-sm text-muted">Reduction in setup time</p>
  </div>
  <div>
    <p class="text-2xl font-bold">20%</p>
    <p class="text-sm text-muted">Boost in user retention</p>
  </div>
  <div>
    <p class="text-2xl font-bold">15%</p>
    <p class="text-sm text-muted">Increase in warehouse destinations</p>
  </div>
</div>

The impact of this project had ripples across the product and the business. By streamlining the core creation workflow we boosted new destinations by 220% and drastically decreased the time it took to get set destination set up. These changes also improved our new user retention.
`,
  },
  {
    slug: "startup",
    title: "Early Stage Startup",
    role: "Product Designer",
    timeframe: "2020–2021",
    summary: "Drove MVP design and launch for a stealth SaaS startup, helping secure pre-seed funding and first customers.",
    image: "/images/startup-preview.png",
    body: `
## Context
Stealth SaaS startup needed to validate product-market fit and ship an MVP fast.

## My Role
Led all product design, worked closely with founders, and set up design systems from scratch.

## Results
- MVP launched in 3 months
- Helped secure pre-seed funding
- Won first 10 paying customers
`,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
