"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { JsonLdSchema } from "./JsonLdSchema";

const faqs = [
  {
    category: "Do you still design, or just manage?",
    question: "I design when it matters and manage like a partner, not a proxy.",
    answer:
      "I don’t believe in managing from the sidelines — I stay close to the craft so I can support, unblock, and set the tone. I still design, especially in early explorations, high-stakes flows, or moments that need storytelling. Leading design means caring about quality *and* momentum.",
  },
  {
    category: "How do you build and lead design teams?",
    question: "I give people context, trust, and just enough friction to grow.",
    answer:
      "I give people context, not tasks. I hire for taste and judgment, then get out of their way — unless they want a sparring partner. I build teams like agencies inside product orgs: scoped, proud, and accountable. Good leadership is about removing friction, creating alignment, and knowing when to step in or step back.",
  },
  {
    category: "What’s your design philosophy?",
    question: "Design is decision-making at scale — systems, not just surfaces.",
    answer:
      "Design isn’t decoration. It’s structure, clarity, and decision-making. I think like a founder — shaping outcomes, not just interfaces. I’ve led zero-to-one products, cleaned up messy enterprise UX, and built design orgs from scratch. Systems thinking isn’t just how I design. It’s how I operate.",
  },
  {
    category: "How do you use AI in your design work?",
    question: "I use AI to clear the noise, move faster, and make thinking visible.",
    answer:
      "I use AI to move faster, think clearer, and document smarter. I’ve built GPT-powered design tools, prototyped LLM workflows in healthcare and legal, and automated parts of research ops and design systems. AI handles the bulk — the last 20% still belongs to taste, judgment, and knowing what matters.",
  },
];

interface FAQSectionProps {
  lastUpdated?: string;
}

export default function FAQSection({ lastUpdated = '2025-06-13' }: FAQSectionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section aria-labelledby="faq-heading">
      <JsonLdSchema type="faq" data={{ faqs }} />
      <div className="flex justify-between items-center mb-12">
        <h2 id="faq-heading" className="text-3xl font-bold font-sans">FAQ</h2>
        <time dateTime={lastUpdated} className="text-sm text-gray-500 dark:text-gray-400">
          Last updated: {new Date(lastUpdated).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </time>
      </div>
      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div 
            key={faq.question} 
            className="bg-purple-50 dark:bg-purple-900/20 rounded-xl overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center text-left focus:outline-none group p-6"
              aria-expanded={openIdx === idx}
              aria-controls={`faq-answer-${idx}`}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              <div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{faq.category}</div>
                {openIdx === idx && (
                  <h3 style={{fontFamily: 'Instrument Serif'}} className="text-2xl font-medium mt-4 leading-snug">{faq.question}</h3>
                )}
              </div>
              <div className="relative flex items-center justify-center w-8 h-8">
                <span 
                  className={`absolute w-4 h-0.5 bg-current transition-transform duration-300 ${openIdx === idx ? 'rotate-0' : 'rotate-90'}`}
                ></span>
                <span className="absolute w-4 h-0.5 bg-current"></span>
              </div>
            </button>
            <AnimatePresence>
              {openIdx === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  id={`faq-answer-${idx}`}
                  className="overflow-hidden"
                  aria-hidden={openIdx !== idx}
                >
                  <div className="px-6 pb-6 -mt-1">
                    <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
