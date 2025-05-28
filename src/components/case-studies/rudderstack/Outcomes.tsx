import * as React from "react";
import { rudderstackData } from "./rudderstackData";

export default function Outcomes() {
  const { heading, metrics, summary } = rudderstackData.outcomes;
  return (
    <section className="pt-16 pb-12 max-w-prose" id="outcomes">
      <h2 className="text-xl font-semibold mb-4 font-sans">{heading}</h2>
      <div className="grid grid-cols-2 gap-6 mb-8">
        {metrics.map((m, i) => (
          <div key={i}>
            <p className="text-2xl font-bold">{m.value}</p>
            <p className="text-sm text-muted">{m.label}</p>
          </div>
        ))}
      </div>
      <p className="text-base leading-loose text-text-base max-w-prose">{summary}</p>
    </section>
  );
}
