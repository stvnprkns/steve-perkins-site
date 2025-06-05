import CaseStudyImage from '@/components/markdown/CaseStudyImage';

export default function HowWeSucceeded() {
  return (
    <section id="how-we-succeeded" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-8 font-sans">How We Succeeded</h2>
      
      <div className="prose max-w-prose text-text-base space-y-6">
        <p>
          We use a lot of methods to track our effectiveness as a Design team. The System Usability Score (SUS) is how we measure whether the product we&apos;ve designed is intuitive. It uses a set of 10 questions to gauge our customers&apos; experience with our product.
        </p>

        <p>
          Over 3 quarters, we improved our score from 62 to 68. A 6-point increase is a big jump for SUS. It shows that every quarter we made better work and improved our product experience.
        </p>

        <CaseStudyImage
          src="/images/projects/rudderstack-team/sus-scorecard.png"
          alt="[Fig. 3] System Usability Score Card. Showing a 10x10 score chart based on the survey questions."
          width={1200}
          height={800}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
          <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-lg border border-purple-100">
            <div className="text-4xl font-bold text-purple-600 mb-2">+6 point</div>
            <p className="text-gray-700">Improvement of our System Usability Score over three quarters.</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-lg border border-purple-100">
            <div className="text-4xl font-bold text-purple-600 mb-2">20%</div>
            <p className="text-gray-700">Reduction in design-related bugs in production.</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-lg border border-purple-100">
            <div className="text-4xl font-bold text-purple-600 mb-2">40%</div>
            <p className="text-gray-700">Reduction in design cycle times, boosting productivity and quality.</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-lg border border-purple-100">
            <div className="text-4xl font-bold text-purple-600 mb-2">60%</div>
            <p className="text-gray-700">More time spent with customers in discovery research, interviews, and testing sessions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
