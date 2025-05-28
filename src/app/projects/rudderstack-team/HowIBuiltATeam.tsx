import Image from 'next/image';

export default function HowIBuiltATeam() {
  return (
    <>
      <h2 className="text-3xl font-bold mb-8 font-sans">An opportunity to do design differently</h2>
      <div className="prose max-w-prose text-text-base space-y-6">
        <p>
          RudderStack was built by developers for developers. Design was an afterthought. When they did look to hire their first designer, it was in a production role. No one was expecting that design would ever be a thought leader. That's what I changed.
          <br />
        </p>
      </div>
      <div className="my-8" />
      
      <figure className="w-[110%] relative -left-[5%] mb-8 bg-purple-50 p-4">
          <div className="max-w-4xl mx-auto">
          <div className="relative w-full">
            <Image
              src="/images/projects/rudderstack-team/rudderstack-team-photo.png"
              alt="[Fig. 1] The RudderStack Design Team: Me, Edward Won, Kristin Landgraf, Lisa Collins, Suhani Harish, Anne Sommer, Julianne Vinh (Left to right in order of hire date)"
              width={1200}
              height={800}
              className="w-full h-auto rounded"
              priority
            />
          </div>
          </div>
          <figcaption className="max-w-6xl mx-auto mt-2 text-sm text-gray-500 text-left px-4">
          [Fig. 1] The RudderStack Design Team: Me, Edward Won, Kristin Landgraf, Lisa Collins, Suhani Harish, Anne Sommer, Julianne Vinh (Left to right in order of hire date)
          </figcaption>
        </figure>

      <h3 className="text-3xl font-bold mb-8 font-sans mt-16">How I Built a Team</h3>
      
      <div className="prose max-w-prose text-text-base space-y-6">

        <p>
          I've spent more than a few years of my career as the only creative in a startup. It's a great way to learn how to fight through ambiguity, but it can be lonely and uninspiring. When I got hired as the Head of Design at RudderStack, I took the opportunity to do things differently.
        </p>
        
        <h4 className="text-2xl font-semibold mt-8 mb-4 font-sans">Collaboration at the Core</h4>
        <p>
          I didn't want designers to work alone in siloed pods. That's no fun, and when you're already outnumbered, it makes it even harder for creatives to have a voice. I built a cross-discipline team that tackled the problems of the product together. Each member owned a domain, and they all worked side by side throughout the project's lifecycle.
        </p>
        <div className="my-8" />
      
      <div className="w-full flex justify-center mb-8">
        <figure className="w-full max-w-[60%] bg-purple-50 p-4 rounded-lg">
          <div className="relative w-full">
            <Image
              src="/images/projects/rudderstack-team/rudderstack-team-process.jpg"
              alt="A team process diagram showing the roles of the RudderStack Design Team"
              width={600}
              height={600}
              className="w-full h-auto rounded"
              priority
            />
          </div>
        </figure>
      </div>
        <h4 className="text-2xl font-semibold mt-8 mb-4 font-sans">Being an Advocate</h4>
        <p>
          I wanted to be the manager I always wanted for myself. I focused my time on finding opportunities to show off my team's capabilities, reworking processes to protect their time and quantify the value of it. I inserted myself into parts of the business I probably wasn't wanted in to create more continuity and cohesion across our marketing and product channels.
        </p>
      </div>
    </>
  );
}
