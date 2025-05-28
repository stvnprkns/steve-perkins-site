"use client";
import { useState } from "react";

const faqs = [
  {
    question: "Do you still design?",
    answer:
      "Every day. I love building things. I also love building the teams that build things. But I’m hands-on until it doesn’t scale anymore.",
  },
  {
    question: "What kind of teams do you work best with?",
    answer:
      "Small, ambitious, slightly chaotic ones. I’ve worked in enterprise orgs and scrappy startups — I prefer speed, trust, and good taste over size.",
  },
  {
    question: "Are you open to consulting or advising?",
    answer:
      "Yes. If you’re building something useful and want design to be a multiplier — get in touch.",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="max-w-prose mx-auto px-4 sm:px-6 pt-16 pb-8" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-2xl font-bold mb-8 font-sans">FAQ</h2>
      <ul className="space-y-6">
        {faqs.map((faq, idx) => (
          <li key={faq.question} className="border-t first:border-t-0 pt-4">
            <button
              className="w-full text-left font-semibold font-sans text-base hover:underline focus:outline-none"
              aria-expanded={openIdx === idx}
              aria-controls={`faq-answer-${idx}`}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              {faq.question}
            </button>
            <div
              id={`faq-answer-${idx}`}
              className={`overflow-hidden transition-all duration-200 ease-in-out ${openIdx === idx ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}`}
              aria-hidden={openIdx !== idx}
            >
              <p className="text-sm text-muted-foreground pt-2">{faq.answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
