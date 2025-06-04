import Image from 'next/image';

export default function HowIBuiltATeam() {
  return (
    <>
      <section id="project-overview" className="scroll-mt-20 mb-24">
        <div className="prose max-w-prose text-text-base space-y-6">
          <p className="text-lg text-muted-foreground">
            However, unless you work in healthcare, you've probably never encountered the appeals process. This process involves negotiations between insurers and healthcare providers to determine final prices.
          </p>
          
          <h1 className="text-4xl font-bold mb-6 font-sans">Good or bad, we all have to deal with insurance.</h1>
          
          <h2 className="text-3xl font-bold mt-12 mb-6 font-sans">Project Overview</h2>
          
          <p>
            When DocVocate hired my team at Kunai, all they had was an idea and an AI model. They needed us to create an entire product. The idea was to use AI to speed up the time it takes to write and submit an appeal and to improve the approval rate.
          </p>
        </div>
      </section>
      
      <section id="customer-research" className="scroll-mt-20 pt-16">
        <div className="prose max-w-prose text-text-base space-y-6">
          <h2 className="text-3xl font-bold mb-8 font-sans">Customer Research</h2>
          
          <p>
            To get started, I needed to learn as much as I could about insurance claims and appeals, and just how problematic the process was.
          </p>
          
          <p>
            I spoke with 25 medical providers, from small acupuncture clinics to large hospitals, observing how they managed their piles of rejected claims. They processed each appeal one by one, starting with the oldest. For each appeal, they retrieved medical files, pulled notes, scanned any tests or x-rays, and then typed a letter explaining why the insurance should cover the suggested amount. Each appeal took between 20-40 minutes.
          </p>
          
          <p>
            From this research, I identified three key areas that our tool needed to address:
          </p>
          
          <ol className="list-decimal pl-6 space-y-2">
            <li>Automating repetitive tasks</li>
            <li>Improving prioritization</li>
            <li>Creating a digital repository for medical files</li>
          </ol>
        </div>
      </section>
    </>
  );
}
