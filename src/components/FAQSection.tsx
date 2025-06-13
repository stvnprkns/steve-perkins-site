"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    category: "How I think about design",
    question: "I build systems, not just screens",
    answer:
      "I lean strategic, but I still ship. I've built design orgs from scratch, led zero-to-one products, scaled messy enterprise tools, and made 'boring' software feel like magic. I design like a founder thinks — with stakes, speed, and sharpness.",
  },
  {
    category: "Designing, leading, shipping",
    question: "Both designer and manager, always both",
    answer:
      "I believe managers should stay close to the craft, not to control it, but to stay credible. I design when it's the right way to move things forward — early explorations, high-stakes flows, or moments that need taste.",
  },
  {
    category: "Building teams and working with humans",
    question: "Unblock, amplify, and protect",
    answer:
      "I give people context, not tasks. I hire for taste and judgment, then get out of their way — unless they want a sparring partner. I believe in running a team like an agency inside a product org: scoped, accountable, and proud of the work.",
  },
  {
    category: "What I let the robots do",
    question: "Accelerating clarity, not replacing thinking",
    answer:
      "I've built AI-powered design tools, prototyped GPT-backed workflows for legal and healthcare, and I'm always experimenting with how LLMs can make design ops and documentation smarter. AI's great at the first 80% — the last 20% is still judgment, taste, and knowing what matters.",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-3xl font-bold mb-12 font-sans">FAQ</h2>
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
