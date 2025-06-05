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
    <section className={`max-w-4xl mx-auto ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
        {metrics.map((metric, idx) => (
          <div 
            key={idx} 
            className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-lg border border-purple-100 hover:shadow-md transition-shadow"
          >
            <div className="text-4xl font-bold text-purple-600 mb-2">{metric.value}</div>
            <p className="text-gray-700">{metric.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
