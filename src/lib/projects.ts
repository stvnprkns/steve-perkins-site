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
    slug: "rudderstack-team",
    title: "Founding a Design Team and Growing a Culture",
    role: "Head of Design",
    timeframe: "2021–2023",
    summary: "Brought design out of the margins and into the strategy room. I built RudderStack's first design team — not as a service org, but as a cross-functional partner that shaped product direction, improved process, and earned its seat at the table.",
    image: "/images/rudderstack-preview.webp",
    images: [
      "/images/rudderstack-preview.webp",
      "/images/projects/rudderstack-team/Team.webp"
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
    image: "/images/projects/rudderstack/Connecting Data 1.webp",
    images: [
      "/images/projects/rudderstack/Connecting Data 1.webp",
      "/images/projects/rudderstack/Connecting Data 2.webp"
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
    slug: "appealio-insurance-appeals",
    title: "Revolutionizing the Insurance Appeal Process",
    role: "Lead Product Designer",
    timeframe: "2023 - Present",
    summary: "Designed an AI-powered platform that streamlines the insurance appeals process for healthcare providers, reducing appeal time by 75% and increasing revenue by 26%.",
    image: "/images/projects/appealio/appealio-hero.webp",
    images: [
      "/images/projects/appealio/appealio-hero.webp",
      "/images/projects/appealio/Appeals Card.webp"
    ],
    body: `
**Company**  
[DocVocate - Appealio ↗](https://www.docvocate.com)

**Team**  
Stephen Perkins, Kishan Patel, Sean Kim, Andrii Gorishnii

---

## The Challenge

## Our Approach

### Understanding the Problem
We conducted extensive research to understand the challenges healthcare providers face when dealing with insurance appeals. We discovered that the process was time-consuming, complex, and often resulted in lost revenue for providers.

### Designing the Solution
We designed a platform that uses AI to streamline the appeals process, making it faster and more efficient. The system helps providers track appeals, communicate with insurers, and ensure they receive fair compensation for their services.

### Testing and Iteration
We worked closely with healthcare providers to test and refine our platform. Their feedback was invaluable in creating a solution that truly meets their needs.

## Impact

- **75% Decrease in Appeal Time**: Providers can now process appeals much faster.
- **26% Increase in Revenue**: More successful appeals mean more revenue for healthcare providers.
- **40% Higher Volume of Appeals Completed**: The platform makes it easier to manage and complete more appeals.
- **32% More Appeals Accepted by Insurance**: Better documentation and tracking lead to higher acceptance rates.

The tool not only saved time and reduced stress but also increased financial returns for providers. They earned more by processing appeals faster and more efficiently, with fewer rounds of appeals and a much higher acceptance rate.`
  },
  {
    slug: "quickbooks-cpa-match",
    title: "Making Small Business Connections with CPAs",
    role: "Product Designer",
    timeframe: "2018–2019",
    summary: "Led design for a 0→1 product at Intuit Labs that matched small businesses with CPAs, improving business success rates.",
    image: "/images/projects/quickbooks-cpa-match/qb-hero.webp",
    images: [
      "/images/projects/quickbooks-cpa-match/qb-hero.webp",
      "/images/projects/quickbooks-cpa-match/qb-businesses.jpeg"
    ],
    body: `
**Company**  
[Intuit — QuickBooks ↗](https://quickbooks.intuit.com/)

**Team**  
Stephen Perkins, Chris Hodge, Majaliwa Bass

---

## The Challenge

Running a business is a team sport. Working at Intuit was pivotal in shaping who I am as a designer and leader. On the Intuit Labs team, I worked on 0→1 concepts. Working on these projects taught me that building products is more like starting a company than pushing a roadmap.

Starting with a data point: 50% of small businesses fail within 5 years. We set out to improve the survival rate of businesses. A key insight was that businesses with a CPA were more successful than those without.

## Our Approach

### Understanding the Problem
We conducted extensive research to understand the challenges small businesses face when looking for CPAs. We discovered that many business owners didn't know what to look for in a CPA or how to evaluate if they were a good fit.

### Designing the Solution
We designed a matching system that helped small businesses find CPAs based on their specific needs and business type. The system took into account factors like industry, business size, and specific accounting needs to make personalized recommendations.

### Testing and Iteration
We ran multiple rounds of user testing with small business owners to refine our matching algorithm and user interface. The feedback was overwhelmingly positive, with users reporting that the system helped them find CPAs they wouldn't have found otherwise.

## Impact

- **Increased CPA Adoption**: More small businesses connected with CPAs through our platform.
- **Improved Business Outcomes**: Businesses that used our matching service reported better financial management and planning.
- **Positive Feedback**: Both small business owners and CPAs praised the system for its ease of use and effectiveness.

This project was a great example of how user-centered design can have a real impact on business success.`
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
