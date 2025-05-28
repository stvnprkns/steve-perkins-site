import React from "react";

const metrics = [
  {
    value: "+2000",
    description: "Connections between CPAs and entrepreneurs in the first year."
  },
  {
    value: "15%",
    description: "Higher 5-year survival rate for businesses connected on our platform."
  }
];

import KeyMetrics from "./KeyMetrics";

export default function QuickBooksOutcomes() {
  return (
    <>
      <KeyMetrics metrics={metrics} />
      <p className="text-base leading-loose text-text-base max-w-prose mx-auto">
        The impact of this project was immediate and measurable. By connecting business owners to CPAs, we saw a dramatic improvement in business outcomes and survival rates.
      </p>
    </>
  );
}
