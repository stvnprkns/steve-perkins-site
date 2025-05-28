import * as React from "react";
import { rudderstackData } from "./rudderstackData";
import KeyMetrics from "@/components/KeyMetrics";

export default function Outcomes() {
  const { heading, metrics, summary } = rudderstackData.outcomes;
  
  return (
    <>
      <h2 className="text-2xl font-bold mb-6 font-sans">{heading}</h2>
      <KeyMetrics 
        metrics={metrics.map(m => ({
          value: m.value,
          description: m.label
        }))} 
        className="mb-8"
      />
      <p className="text-base leading-loose text-text-base">
        {summary}
      </p>
    </>
  );
}
