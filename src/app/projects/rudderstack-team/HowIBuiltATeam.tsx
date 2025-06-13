import CaseStudyImage from '@/components/markdown/CaseStudyImage';

export default function HowIBuiltATeam() {
  return (
    <section id="how-i-built-a-team" className="scroll-mt-20" aria-labelledby="how-i-built-a-team-title">
      <header>
        <h2 id="how-i-built-a-team-title" className="text-4xl font-bold mb-8 font-sans">An opportunity to do design differently</h2>
      </header>
      <article className="prose max-w-prose text-text-base space-y-6">
        <p>
          RudderStack was built by developers for developers. Design was an afterthought. When they did look to hire their first designer, it was in a production role. No one was expecting that design would ever be a thought leader. That&apos;s what I changed.
        </p>
      </article>

      <CaseStudyImage
        src="/images/projects/rudderstack-team/rudderstack-team-photo.png"
        alt="The RudderStack Design Team collaborating around a whiteboard during a brainstorming session, showing diverse team members engaged in discussion with sticky notes and sketches visible"
        width={1200}
        height={800}
        containerClassName="bg-transparent"
        className="bg-transparent"
      />

      <article className="prose max-w-prose text-text-base space-y-6">
        <header>
          <h3 id="team-building-approach" className="text-2xl font-semibold mt-12 mb-4 font-sans">How I Built a Team</h3>
        </header>
        
        <p>
          I&apos;ve spent more than a few years of my career as the only creative in a startup. It&apos;s a great way to learn how to fight through ambiguity, but it can be lonely and uninspiring. When I got hired as the Head of Design at RudderStack, I took the opportunity to do things differently.
        </p>
        
        <section aria-labelledby="collaboration-core">
          <h4 id="collaboration-core" className="text-xl font-semibold mt-8 mb-4 font-sans">Collaboration at the Core</h4>
          <p>
            I didn't want designers to work alone in siloed pods. That's no fun, and when you're already outnumbered, it makes it even harder for creatives to have a voice. I built a cross-discipline team that tackled the problems of the product together. Each member owned a domain, and they all worked side by side throughout the project's lifecycle.
          </p>
          
          <CaseStudyImage
            src="/images/projects/rudderstack-team/rudderstack-team-process.jpg"
            alt="Detailed process diagram illustrating the RudderStack Design Team's cross-functional collaboration model, showing how different roles interact throughout the product development lifecycle with clear workflow connections"
            width={1200}
            height={800}
          />
        </section>
        
        <section aria-labelledby="being-advocate">
          <h4 id="being-advocate" className="text-xl font-semibold mt-8 mb-4 font-sans">Being an Advocate</h4>
          <p>
            I wanted to be the manager I always wanted for myself. I focused my time on finding opportunities to show off my team&apos;s capabilities. Reworking processes to protect their time and quantify the value of it. Inserting myself into parts of the business I probably wasn&apos;t wanted in to create more continuity and cohesion across our marketing and product channels.
          </p>
        </section>
      </article>
    </section>
  );
}
