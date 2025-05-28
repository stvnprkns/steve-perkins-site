import * as React from "react";
import Link from "next/link";
import { rudderstackData } from "./rudderstackData";

export default function Intro() {
  return (
    <section className="pt-16 pb-12" id="intro">
      <h1 className="text-4xl font-serif font-bold leading-tight mb-4">{rudderstackData.title}</h1>
      <div className="text-base text-muted/90 font-sans mb-2">
        <span className="block mb-1 font-semibold uppercase text-xs tracking-wider text-muted/80">Company</span>
        <Link href={rudderstackData.company.url} target="_blank" rel="noopener" className="underline hover:text-accent-blue">{rudderstackData.company.name} ↗</Link>
      </div>
      <div className="text-base text-muted/90 font-sans mb-4">
        <span className="block mb-1 font-semibold uppercase text-xs tracking-wider text-muted/80">Product Team</span>
        <span>{rudderstackData.team.join(", ")}</span>
      </div>
      <p className="text-lg leading-relaxed text-text-base max-w-prose">{rudderstackData.summary}</p>
    </section>
  );
}
