const resume = [
  {
    title: "Senior Manager, Product Design",
    company: "Procore",
    years: "2024–Present",
    summary:
      "Leading design across permissions, authentication, and account experiences for a platform powering the construction industry.",
  },
  {
    title: "Head of Design",
    company: "RudderStack",
    years: "2021–2023",
    summary:
      "Built and scaled the design org from scratch. Led product redesign, onboarding uplift, and team culture — 220% growth in product adoption.",
  },
  {
    title: "Design Ops & AI Lead",
    company: "SailPoint",
    years: "2019–2021",
    summary:
      "Ran design ops, launched research programs, and led AI-driven experiences in enterprise identity software.",
  },
];

export default function ResumeSection() {
  return (
    <section className="max-w-prose mx-auto px-4 sm:px-6 pt-16 pb-8" aria-labelledby="resume-heading">
      <h2 id="resume-heading" className="text-2xl font-bold mb-8 font-sans">Resume</h2>
      <ol className="relative border-l border-muted-foreground/20 space-y-8">
        {resume.map((item) => (
          <li key={item.title + item.company} className="ml-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <span className="font-semibold font-sans text-base">
                  {item.title}
                </span>
                {', '}
                <span className="font-sans text-base text-muted-foreground">
                  {item.company}
                </span>
              </div>
              <span className="text-xs text-muted-foreground mt-1 sm:mt-0 sm:ml-4 whitespace-nowrap">
                {item.years}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed max-w-prose">
              {item.summary}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
