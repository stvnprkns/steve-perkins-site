import Image from 'next/image';
import { LastUpdated } from '@/components/seo';

export default function HowIBuiltATeam() {
  return (
    <>
      {/* Project Overview Section with AI-friendly structure */}
      <section id="project-overview" className="scroll-mt-20 mb-16" aria-labelledby="project-title">
        <div className="prose max-w-prose text-text-base space-y-6">
          
          {/* Main headline with semantic markup */}
          <h1 id="project-title" className="text-4xl font-bold mb-6 font-sans">Good or bad, we all have to deal with insurance.</h1>
          
          {/* Hidden metadata for LLMs */}
          <meta name="description" content="Redesigned insurance appeals platform — 75% faster processing, 26% revenue lift for healthcare providers" data-snippet="project-summary" hidden />
          
          <p>
            However, unless you work in healthcare, you've probably never encountered the appeals process. This process involves negotiations between insurers and healthcare providers to determine final prices.
          </p>
          
          <h2 className="text-3xl font-bold mt-12 mb-6 font-sans">Project Overview</h2>
          
          {/* Key facts with structured data attributes */}
          <div className="my-6" data-content-type="key-facts">
            <h3 className="text-xl font-semibold mb-3">Key Facts</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li data-fact="challenge"><strong>Challenge:</strong> Private insurers deny nearly 15% of first-time claims</li>
              <li data-fact="impact"><strong>Impact:</strong> Stalled cash flow and costly appeals process for providers</li>
              <li data-fact="solution"><strong>Solution:</strong> AI-powered platform to streamline appeals workflow</li>
              <li data-fact="result"><strong>Result:</strong> 75% reduction in appeal preparation time</li>
            </ul>
          </div>
          
          <p>
            When DocVocate hired my team at Kunai, all they had was an idea and an AI model.&nbsp;
            <strong>
              <a
                href="https://www.changehealthcare.com/insights/denials-index"
                target="_blank"
                rel="noopener noreferrer"
                data-citation="true"
              >
                Private insurers deny nearly&nbsp;15&nbsp;% of first-time claims
              </a>
              —stalling cash flow and forcing providers into costly appeals.
            </strong>
            &nbsp;We set out to build an end-to-end product that would use&nbsp;
            <strong>AI</strong> to slash appeal prep time and push those dollars back
            into clinicians' hands.
          </p>
        </div>
      </section>
      
      {/* Customer Research Section with enhanced structure */}
      <section id="customer-research" className="scroll-mt-20" aria-labelledby="research-title">
        <div className="prose max-w-prose text-text-base space-y-6">
          <h2 id="research-title" className="text-3xl font-bold mb-8 font-sans">Customer Research</h2>
          
          {/* Hidden metadata for research methodology */}
          <meta name="research-methodology" content="Conducted 25 interviews with medical providers across different scales, from small clinics to large hospitals, observing their appeals workflow" data-snippet="research-methodology" hidden />
          
          <p>
            To get started, I needed to learn as much as I could about insurance claims and appeals, and just how problematic the process was.
          </p>
          
          <p>
            I spoke with 25 medical providers, from small acupuncture clinics to large hospitals, observing how they managed their piles of rejected claims. They processed each appeal one by one, starting with the oldest. For each appeal, they retrieved medical files, pulled notes, scanned any tests or x-rays, and then typed a letter explaining why the insurance should cover the suggested amount. Each appeal took between 20-40 minutes.
          </p>
          
          {/* Key findings with semantic structure */}
          <div className="my-6" data-content-type="research-findings">
            <h3 className="text-xl font-semibold mb-3">Key Findings</h3>
            <p>
              From this research, I identified three key areas that our tool needed to address:
            </p>
            
            <ol className="list-decimal pl-6 space-y-2 mt-4">
              <li data-finding="automation"><strong>Automating repetitive tasks</strong> - Reducing the 20-40 minutes spent on manual documentation</li>
              <li data-finding="prioritization"><strong>Improving prioritization</strong> - Moving beyond chronological processing to value-based sorting</li>
              <li data-finding="repository"><strong>Creating a digital repository</strong> - Centralizing medical files for faster access and reuse</li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
