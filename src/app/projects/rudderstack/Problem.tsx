import * as React from "react";
import { rudderstackData } from "./rudderstackData";
import Paragraphs from "@/components/ui/Paragraphs";

export default function Problem() {
  return (
    <>
      <h2 className="text-3xl font-bold mb-8 font-sans">{rudderstackData.problem.heading}</h2>
      <div className="prose max-w-prose text-text-base">
        <Paragraphs text={rudderstackData.problem.content} />
      </div>
    </>
  );
}
