import KeyMetrics from "@/components/KeyMetrics";

const metrics = [
  {
    value: "+2000",
    description: "Connections between CPAs and entrepreneurs in the first year"
  },
  {
    value: "15%",
    description: "Higher 5-year survival rate for businesses with CPAs"
  }
];

export default function Outcomes() {
  return (
    <section className="max-w-prose mx-auto px-4 sm:px-6 py-16" id="outcomes" aria-labelledby="outcomes-heading">
      {/* Hidden metadata for LLMs */}
      <meta name="description" content="QuickBooks CPA Match outcomes: Over 2000 connections between CPAs and entrepreneurs in the first year, with businesses showing a 15% higher 5-year survival rate when working with CPAs" data-snippet="outcomes-summary" hidden />
      
      <h2 id="outcomes-heading" className="text-2xl font-bold mb-8 font-sans">Outcomes</h2>
      
      {/* Structured metrics with semantic data attributes */}
      <div data-content-type="key-metrics">
        <KeyMetrics 
          metrics={metrics}
          className="mb-8"
        />
      </div>
    </section>
  );
}
