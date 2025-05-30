import Image from 'next/image';

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-8 font-sans">How We Work</h2>
      
      <div className="prose max-w-prose text-text-base space-y-6">
        <p>
          None of the following is revolutionary. The processes I put in place helped cross-functional teams work more collaboratively and elevated Design to become a strategic business partner.
        </p>

        <h3 className="text-2xl font-semibold mt-12 mb-4 font-sans">What we Build</h3>
        <p>
          We never build without evidence. Everything on the roadmap needs to have data (qualitative and/or quantitative) to assess the business value and the customer pain. We shouldn't do work that doesn't improve the customer experience or build the business.
        </p>

        <h3 className="text-2xl font-semibold mt-12 mb-4 font-sans">Be a Part of the Backlog</h3>
        <p>
          For design to be a strategic partner, we need to bring ideas to the table. Design has to look beyond the pixels and understand how we make money and how customers use the product. We have to be in the analytics, read the support tickets, and talk to our customers. If you don't intimately understand the problem, you can't create a good solution.
        </p>

        <h3 className="text-2xl font-semibold mt-12 mb-4 font-sans">Designers Write and Groom Tickets</h3>
        <p>
          Design knows better than anyone the information needed for design. By writing and scoping our own tickets, Design is involved in strategic conversations earlier. We can shape the solution from the start, set more accurate—and reasonable—timelines so that we can make better work.
        </p>

        <h3 className="text-2xl font-semibold mt-12 mb-4 font-sans">Designing the Product</h3>
        <p>
          Design, this is what we know how to do. Once projects are scoped, the most impactful aspect to design is collaboration. Nothing is more important for design than feedback. My team has weekly internal design critiques, regular design reviews for each project, and company work shares. Design and Engineering need to work hand-in-hand, understanding what we're thinking, what is feasible, consistently checking each other's work.
        </p>

        <figure className="w-full my-12 bg-purple-50 p-4 rounded-lg">
          <div className="relative w-full max-w-4xl mx-auto">
            <Image
              src="/images/projects/rudderstack-team/design-qa-process.jpg"
              alt="RudderStack's Design and QA process"
              width={1200}
              height={800}
              className="w-full h-auto rounded"
            />
            <figcaption className="mt-2 text-sm text-gray-500 text-center">
              [Fig. 2] RudderStack's Design and QA process
            </figcaption>
          </div>
        </figure>

        <h3 className="text-2xl font-semibold mt-12 mb-4 font-sans">Measuring Impact</h3>
        <p>
          Once a project is wrapped, we need to validate that our solution solved the problem. We set up tracking metrics on product launches and measure the impact.
        </p>
      </div>
    </section>
  );
}