import Image from 'next/image';

export default function HowIBuiltATeam() {
  return (
    <section id="how-i-built-a-team" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-8 font-sans">An opportunity to do design differently</h2>
      <div className="prose max-w-prose text-text-base space-y-6">
        <p>
          RudderStack was built by developers for developers. Design was an afterthought. When they did look to hire their first designer, it was in a production role. No one was expecting that design would ever be a thought leader. That&apos;s what I changed.
        </p>
      </div>

      <figure className="w-full my-12 bg-purple-50 p-4 rounded-lg">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full">
            <Image
              src="/images/projects/rudderstack-team/rudderstack-team-photo.png"
              alt="The RudderStack Design Team"
              width={1200}
              height={800}
              className="w-full h-auto rounded"
              priority
            />
          </div>
          <figcaption className="mt-2 text-sm text-gray-500 text-center">
            [Fig. 1] The RudderStack Design Team: Stephen Perkins, Edward Won, Kristin Landgraf, Lisa Collins, Suhani Harish, Anne Sommer, Julianne Vinh (Left to right in order of hire date)
          </figcaption>
        </div>
      </figure>

      <div className="prose max-w-prose text-text-base space-y-6">
        <h3 className="text-2xl font-semibold mt-12 mb-4 font-sans">How I Built a Team</h3>
        
        <p>
          I&apos;ve spent more than a few years of my career as the only creative in a startup. It&apos;s a great way to learn how to fight through ambiguity, but it can be lonely and uninspiring. When I got hired as the Head of Design at RudderStack, I took the opportunity to do things differently.
        </p>
        
        <h4 className="text-xl font-semibold mt-8 mb-4 font-sans">Collaboration at the Core</h4>
        <p>
          I didn&apos;t want designers to work alone in siloed pods. That&apos;s no fun, and when you&apos;re already outnumbered, it makes it even harder for creatives to have a voice. I built a cross-discipline team that tackled the problems of the product together. Each member owned a domain, and they all worked side by side throughout the project&apos;s lifecycle.
        </p>
        
        <h4 className="text-xl font-semibold mt-8 mb-4 font-sans">Being an Advocate</h4>
        <p>
          I wanted to be the manager I always wanted for myself. I focused my time on finding opportunities to show off my team&apos;s capabilities. Reworking processes to protect their time and quantify the value of it. Inserting myself into parts of the business I probably wasn&apos;t wanted in to create more continuity and cohesion across our marketing and product channels.
        </p>
      </div>
      
      <div className="w-full my-12">
        <figure className="w-full bg-purple-50 p-4 rounded-lg">
          <div className="relative w-full max-w-4xl mx-auto">
            <Image
              src="/images/projects/rudderstack-team/rudderstack-team-process.jpg"
              alt="A team process diagram showing the roles of the RudderStack Design Team"
              width={1200}
              height={800}
              className="w-full h-auto rounded"
            />
            <figcaption className="mt-2 text-sm text-gray-500 text-center">
              [Fig. 2] RudderStack&apos;s Design and QA process
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}
