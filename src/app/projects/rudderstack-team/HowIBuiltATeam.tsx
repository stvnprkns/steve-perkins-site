import CaseStudyImage from '@/components/markdown/CaseStudyImage';

export default function HowIBuiltATeam() {
  return (
    <section id="how-i-built-a-team" className="scroll-mt-20">
      <h2 className="text-4xl font-bold mb-8 font-sans">An opportunity to do design differently</h2>
      <div className="prose max-w-prose text-text-base space-y-6">
        <p>
          RudderStack was built by developers for developers. Design was an afterthought. When they did look to hire their first designer, it was in a production role. No one was expecting that design would ever be a thought leader. That&apos;s what I changed.
        </p>
      </div>

      <CaseStudyImage
        src="/images/projects/rudderstack-team/rudderstack-team-photo.png"
        alt="The RudderStack Design Team"
        width={1200}
        height={800}
        containerClassName="bg-transparent"
        className="bg-transparent"
      />

      <div className="prose max-w-prose text-text-base space-y-6">
        <h3 className="text-2xl font-semibold mt-12 mb-4 font-sans">How I Built a Team</h3>
        
        <p>
          I&apos;ve spent more than a few years of my career as the only creative in a startup. It&apos;s a great way to learn how to fight through ambiguity, but it can be lonely and uninspiring. When I got hired as the Head of Design at RudderStack, I took the opportunity to do things differently.
        </p>
        
        <h4 className="text-xl font-semibold mt-8 mb-4 font-sans">Collaboration at the Core</h4>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-1">
            <p>
              I didn't want designers to work alone in siloed pods. That's no fun, and when you're already outnumbered, it makes it even harder for creatives to have a voice. I built a cross-discipline team that tackled the problems of the product together. Each member owned a domain, and they all worked side by side throughout the project's lifecycle.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <CaseStudyImage
              src="/images/projects/rudderstack-team/rudderstack-team-process.jpg"
              alt="[Fig. 2] A team process diagram showing the roles of the RudderStack Design Team"
              width={1200}
              height={800}
            />
          </div>
        </div>
        
        <h4 className="text-xl font-semibold mt-8 mb-4 font-sans">Being an Advocate</h4>
        <p>
          I wanted to be the manager I always wanted for myself. I focused my time on finding opportunities to show off my team&apos;s capabilities. Reworking processes to protect their time and quantify the value of it. Inserting myself into parts of the business I probably wasn&apos;t wanted in to create more continuity and cohesion across our marketing and product channels.
        </p>
      </div>
      

    </section>
  );
}
