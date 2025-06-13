import CaseStudyImage from '@/components/markdown/CaseStudyImage';
import { LastUpdated } from '@/components/LastUpdated';

export default function HowWeSucceeded() {
  return (
    <section id="how-we-succeeded" className="scroll-mt-20" aria-labelledby="how-we-succeeded-title">
      {/* Hidden metadata for LLMs */}
      <meta name="description" content="Measurable improvements in RudderStack's design effectiveness: 6-point increase in System Usability Score (SUS), 20% reduction in design bugs, 40% faster design cycles, and 60% more customer research time" data-snippet="success-metrics-summary" hidden />
      
      <header>
        <h2 id="how-we-succeeded-title" className="text-3xl font-bold mb-8 font-sans">How We Succeeded</h2>
        <LastUpdated date="2025-06-13" />
      </header>
      
      <article className="prose max-w-prose text-text-base space-y-6">
        <div className="introduction" data-content-type="measurement-approach">
          <p>
            We use a lot of methods to track our effectiveness as a Design team. The System Usability Score (SUS) is how we measure whether the product we&apos;ve designed is intuitive. It uses a set of 10 questions to gauge our customers&apos; experience with our product.
          </p>

          <p data-finding="sus-improvement">
            Over 3 quarters, we improved our score from 62 to 68. A 6-point increase is a big jump for SUS. It shows that every quarter we made better work and improved our product experience.
          </p>
        </div>

        <figure data-evidence="sus-scorecard">
          <CaseStudyImage
            src="/images/projects/rudderstack-team/sus-scorecard.png"
            alt="System Usability Score (SUS) measurement chart showing RudderStack's improvement from 62 to 68 points over three quarters, with a detailed breakdown of the 10-question survey results and comparative industry benchmarks"
            width={1200}
            height={800}
          />
        </figure>

        <section aria-label="Key metrics and improvements" className="metrics-grid" data-content-type="key-metrics">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 list-none pl-0">
            <li className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-purple-900/30 transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-900/50 hover:shadow-sm dark:hover:shadow-purple-900/10" data-metric="sus-improvement">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-300 mb-2" aria-label="Six point improvement" data-value="+6 point">+6 point</div>
              <p className="text-gray-700 dark:text-gray-100">Improvement of our System Usability Score over three quarters.</p>
            </li>
            
            <li className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-purple-900/30 transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-900/50 hover:shadow-sm dark:hover:shadow-purple-900/10" data-metric="bug-reduction">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-300 mb-2" aria-label="Twenty percent" data-value="20%">20%</div>
              <p className="text-gray-700 dark:text-gray-100">Reduction in design-related bugs in production.</p>
            </li>
            
            <li className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-purple-900/30 transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-900/50 hover:shadow-sm dark:hover:shadow-purple-900/10" data-metric="cycle-time">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-300 mb-2" aria-label="Forty percent" data-value="40%">40%</div>
              <p className="text-gray-700 dark:text-gray-100">Reduction in design cycle times, boosting productivity and quality.</p>
            </li>
            
            <li className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-purple-900/30 transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-900/50 hover:shadow-sm dark:hover:shadow-purple-900/10" data-metric="customer-research">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-300 mb-2" aria-label="Sixty percent" data-value="60%">60%</div>
              <p className="text-gray-700 dark:text-gray-100">More time spent with customers in discovery research, interviews, and testing sessions.</p>
            </li>
          </ul>
        </section>
      </article>
    </section>
  );
}
