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
            className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-purple-900/30 transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-900/50 hover:shadow-sm dark:hover:shadow-purple-900/10"
          >
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-300 mb-2">{metric.value}</div>
            <p className="text-gray-700 dark:text-gray-100">{metric.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
