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
    <section className="max-w-prose mx-auto px-4 sm:px-6 py-16" id="outcomes">
      <h2 className="text-2xl font-bold mb-8 font-sans">Outcomes</h2>
      <KeyMetrics 
        metrics={metrics}
        className="mb-8"
      />
    </section>
  );
}
