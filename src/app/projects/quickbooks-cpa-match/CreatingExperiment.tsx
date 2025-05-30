import Image from 'next/image';

export default function CreatingExperiment() {
  return (
    <>
      <h2 className="text-3xl font-bold mb-8 font-sans">Creating the Experiment</h2>
      <div className="prose max-w-prose text-text-base space-y-6">
        <p>
          We built a very slim feature in QuickBooks that did 3 things: It let businesses match with a CPA, 
          engage in a back-and-forth dialogue, and invoice and pay.
        </p>
        <p>
          We included a dashboard ad that targeted users who didn&apos;t have a CPA. We iterated on the messaging 
          and ad copy to improve engagement. We used a limited pool of CPAs and randomized the matches. 
          We also built a custom messaging flow to support real-world communication and disengagement logic.
        </p>
        
        <figure className="w-full my-12">
          <div className="w-full max-w-4xl mx-auto bg-purple-50 p-4 rounded-lg">
            <div className="relative w-full aspect-video">
              <Image 
                src="/images/projects/quickbooks-cpa-match/qb-cpa-workflow.webp" 
                alt="Workflow of how users enter the experiment, select a CPA, and engage with them." 
                fill
                className="object-contain w-full h-full rounded" 
              />
            </div>
            <figcaption className="text-sm text-muted-foreground mt-2 text-center">
              [Fig. 2] Workflow of how users enter the experiment, select a CPA, and engage with them.
            </figcaption>
          </div>
        </figure>

        <figure className="w-full my-12">
          <div className="w-full max-w-4xl mx-auto bg-purple-50 p-4 rounded-lg">
            <div className="relative w-full aspect-video">
              <Image 
                src="/images/projects/quickbooks-cpa-match/qb-cpa-dashboard-ad.webp" 
                alt="Experiment Ad on the QuickBooks dashboard." 
                fill
                className="object-contain w-full h-full rounded" 
              />
            </div>
            <figcaption className="text-sm text-muted-foreground mt-2 text-center">
              [Fig. 3] Experiment Ad on the QuickBooks dashboard.
            </figcaption>
          </div>
        </figure>

        <figure className="w-full my-12">
          <div className="w-full max-w-4xl mx-auto bg-purple-50 p-4 rounded-lg">
            <div className="relative w-full aspect-video">
              <Image 
                src="/images/projects/quickbooks-cpa-match/qb-cpa-carousel.webp" 
                alt="Matchmaker page, showing a carousel of the CPAs in our beta group." 
                fill
                className="object-contain w-full h-full rounded" 
              />
            </div>
            <figcaption className="text-sm text-muted-foreground mt-2 text-center">
              [Fig. 4] Matchmaker page, showing a carousel of the CPAs in our beta group.
            </figcaption>
          </div>
        </figure>

        <figure className="w-full my-12">
          <div className="w-full max-w-4xl mx-auto bg-purple-50 p-4 rounded-lg">
            <div className="relative w-full aspect-video">
              <Image 
                src="/images/projects/quickbooks-cpa-match/qb-cpa-messaging.webp" 
                alt="Messaging flow between users and CPAs." 
                fill
                className="object-contain w-full h-full rounded" 
              />
            </div>
            <figcaption className="text-sm text-muted-foreground mt-2 text-center">
              [Fig. 5] Messaging flow between users and CPAs.
            </figcaption>
          </div>
        </figure>
      </div>
    </>
  );
}
