import Image from 'next/image';

export default function HowWeSucceeded() {
  return (
    <>
      <h2 className="text-3xl font-bold mb-8 font-sans">How We Succeeded</h2>
      
      <div className="prose max-w-prose text-text-base space-y-6">
        <p>
          We use a lot of methods to track our effectiveness as a Design team. The System Usability Score (SUS) is how we measure whether the product we've designed is intuitive. It uses a set of 10 questions to gauge our customers' experience with our product.
        </p>

        <p>
          Over 3 quarters, we improved our score from 62 to 68. A 6-point increase is a big jump for SUS. It shows that every quarter we made better work and improved our product experience.
        </p>

        <figure className="w-[110%] relative -left-[5%] mb-8 bg-purple-50 p-4">
          <div className="max-w-4xl mx-auto">
          <div className="relative w-full">
            <Image
              src="/images/projects/rudderstack-team/sus-scorecard.png"
              alt="System Usability Score Card. Showing a 10x10 score chart based on the survey questions."
              width={1200}
              height={800}
              className="w-full h-auto rounded"
              priority
            />
          </div>
          </div>
          <figcaption className="max-w-6xl mx-auto mt-2 text-sm text-gray-500 text-left px-4">
            Fig. 3: System Usability Score Card showing our improvement over time
          </figcaption>
        </figure>
      </div>
    </>
  );
}
