import * as React from "react";
import { rudderstackData } from "./rudderstackData";

export default function Problem() {
  return (
    <section className="pt-16 pb-12 max-w-prose" id="problem">
      <h2 className="text-xl font-semibold mb-4 font-sans">{rudderstackData.problem.heading}</h2>
      <p className="text-base leading-loose text-text-base whitespace-pre-line">{rudderstackData.problem.content}</p>
    </section>
  );
}
