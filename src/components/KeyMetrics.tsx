import React from "react";

export interface Metric {
  value: string;
  description: string;
}

interface KeyMetricsProps {
  metrics: Metric[];
  className?: string;
}

export default function KeyMetrics({ metrics, className = "" }: KeyMetricsProps) {
  return (
    <section className={`max-w-prose mx-auto ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {metrics.map((metric, idx) => (
          <div key={idx} className="p-6 border rounded-lg hover:bg-muted/30 transition-colors">
            <h4 className="text-4xl font-bold mb-2">{metric.value}</h4>
            <p className="text-muted-foreground">{metric.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
