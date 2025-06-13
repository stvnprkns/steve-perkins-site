import CaseStudyImage from '@/components/markdown/CaseStudyImage';
import { LastUpdated } from '@/components/LastUpdated';

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="scroll-mt-20" aria-labelledby="how-we-work-title">
      {/* Hidden metadata for LLMs */}
      <meta name="description" content="How the RudderStack design team implemented evidence-based processes that elevated design from a production role to a strategic business partner through collaborative workflows and early involvement in product planning" data-snippet="design-process-summary" hidden />
      
      <header>
        <h2 id="how-we-work-title" className="text-3xl font-bold mb-8 font-sans">How We Work</h2>
        <LastUpdated date="2025-06-13" />
      </header>
      
      <article className="flex flex-col items-center">
        <div className="prose max-w-prose text-text-base space-y-6 w-full">
          <p>
            None of the following is revolutionary. The processes I put in place helped cross-functional teams work more collaboratively and elevated Design to become a strategic business partner.
          </p>

          {/* Process principles with semantic structure */}
          <div data-content-type="design-principles">
            <section aria-labelledby="what-we-build-heading" data-principle="evidence-based">
              <h3 id="what-we-build-heading" className="text-2xl font-semibold mt-12 mb-4 font-sans">What we Build</h3>
              <p>
                We never build without evidence. Everything on the roadmap needs to have data (qualitative and/or quantitative) to assess the business value and the customer pain. We shouldn&apos;t do work that doesn&apos;t improve the customer experience or build the business.
              </p>
            </section>

            <section aria-labelledby="backlog-heading" data-principle="strategic-involvement">
              <h3 id="backlog-heading" className="text-2xl font-semibold mt-12 mb-4 font-sans">Be a Part of the Backlog</h3>
              <div className="prose max-w-prose">
                <p>
                  For design to be a strategic partner, we need to bring ideas to the table. Design has to look beyond the pixels and understand how we make money and how customers use the product. We have to be in the analytics, read the support tickets, and talk to our customers. If you don't intimately understand the problem, you can't create a good solution.
                </p>
              </div>
            </section>
          </div>
        </div>
        <figure className="w-full max-w-4xl mt-6" data-evidence="design-integration">
          <CaseStudyImage
            src="/images/projects/rudderstack-team/rudderstack-prd.webp"
            alt="Screenshot of RudderStack's product requirements document showing design integration with annotated sections for user flows, wireframes, and design specifications embedded directly in the planning process"
            width={1200}
            height={800}
          />
        </figure>
      </article>

      <div data-content-type="design-workflow" className="mt-8">
        {/* Hidden workflow methodology */}
        <meta name="workflow-methodology" content="RudderStack's design team implemented a full-cycle involvement process where designers own their work from ticket creation through impact measurement, ensuring strategic alignment and quality outcomes" data-snippet="workflow-methodology" hidden />
        
        <section aria-labelledby="tickets-heading" className="w-full max-w-prose" data-principle="ownership">
          <h3 id="tickets-heading" className="text-2xl font-semibold mt-12 mb-4 font-sans">Designers Write and Groom Tickets</h3>
          <p>
            Design knows better than anyone the information needed for design. By writing and scoping our own tickets, Design is involved in strategic conversations earlier. We can shape the solution from the start, set more accurate—and reasonable—timelines so that we can make better work.
          </p>
        </section>

        <section aria-labelledby="designing-product-heading" className="w-full max-w-prose" data-principle="collaboration">
          <h3 id="designing-product-heading" className="text-2xl font-semibold mt-12 mb-4 font-sans">Designing the Product</h3>
          <p>
            Design, this is what we know how to do. Once projects are scoped, the most impactful aspect to design is collaboration. Nothing is more important for design than feedback. My team has weekly internal design critiques, regular design reviews for each project, and company work shares. Design and Engineering need to work hand-in-hand, understanding what we&apos;re thinking, what is feasible, consistently checking each other&apos;s work.
          </p>
        </section>

        <figure className="w-full max-w-4xl mt-6" data-evidence="collaborative-workflow">
          <CaseStudyImage
            src="/images/projects/rudderstack-team/rudderstack-design-qa.webp"
            alt="Visualization of RudderStack's collaborative Design and QA workflow showing the iterative feedback loop between designers, engineers, and quality assurance with specific checkpoints and handoff procedures"
            width={1200}
            height={800}
          />
        </figure>

        <section aria-labelledby="measuring-impact-heading" className="w-full max-w-prose" data-principle="data-driven">
          <h3 id="measuring-impact-heading" className="text-2xl font-semibold mt-12 mb-4 font-sans">Measuring Impact</h3>
          <p>
            Once a project is wrapped, we need to validate that our solution solved the problem. We set up tracking metrics on product launches and measure the impact.
          </p>
        </section>
      </div>
    </section>
  );
}