"use client";

import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";
import FAQSection from "@/components/FAQSection";

const PageHero = dynamic(() => import("@/components/PageHero"), { ssr: false });

const introContent = [
  "I was halfway to becoming a cosmetic dentist when I realized I didn't want to memorize the right answer — I wanted to ask better questions. So I switched majors, studied New Media Art, and ended up somewhere between art, design, code, and systems thinking.",
  "",
  "That was over 13 years ago. Since then, I've led design orgs, launched products from zero, cleaned up the messes others left behind, and built teams that like building together.",
  "",
  "I've worked in just about every industry, fintech, healthcare, dev tools, and construction — usually on the hard stuff that has more edge cases than glamour shots. I've designed HIPAA-compliant messengers, built data platforms, overhauled design systems, and reimagined how customer info flows across tools.", 
  "",
  "The unsexy problems that power the business world."
];

const experienceItems = [
  {
    company: 'Procore',
    companyUrl: 'https://procore.com',
    role: 'Senior Product Design Manager',
    years: '2025–Now'
  },
  {
    company: 'ArgoDesign',
    companyUrl: 'https://argodesign.com',
    role: 'Freelance Designer',
    years: '2024'
  },
  {
    company: 'Gartner',
    companyUrl: 'https://gartner.com',
    role: 'Manager, Product Design',
    years: '2024'
  },
  {
    company: 'RudderStack',
    companyUrl: 'https://rudderstack.com',
    role: 'Head of Design',
    years: '2021–2024'
  },
  {
    company: 'SailPoint',
    companyUrl: 'https://sailpoint.com',
    role: 'Lead, Design Operations',
    years: '2020–2021'
  },
  {
    company: 'Kunai',
    companyUrl: 'https://kunaico.com',
    role: 'Design Manager',
    years: '2016–2020'
  },
  {
    company: 'AT&T',
    companyUrl: 'https://www.att.com',
    role: 'Lead UX Designer',
    years: '2015–2016'
  },
  {
    company: 'Intuit',
    companyUrl: 'https://www.intuit.com',
    role: 'Interaction Designer',
    years: '2014–2015'
  },
  {
    company: 'TigerConnect',
    companyUrl: 'https://tigerconnect.com',
    role: 'Founding Designer',
    years: '2013–2014'
  },
  {
    company: 'The Media Grind',
    role: 'Digital Designer',
    years: '2012–2013'
  }
];

const socialLinks = [
  {
    name: 'Read.cv',
    url: 'https://read.cv/steveperk',
    icon: '📄'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/stvnprkns',
    icon: '💼'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/stvnprkns',
    icon: '💻'
  },
  {
    name: 'Email',
    url: 'mailto:hello@steveperkins.com',
    icon: '✉️'
  }
];

const Section = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <section className={`py-16 ${className}`}>
    <div className="mx-auto w-full max-w-[640px] px-4 sm:px-8">
      {children}
    </div>
  </section>
);

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showExperience, setShowExperience] = useState(false);

  // Trigger initial load
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Show experience section after intro animation completes
  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => {
        setShowExperience(true);
      }, 1000); // Delay to ensure intro is fully visible
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  return (
    <div className="w-full">
      <AnimatePresence>
        <PageHero
          title={
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="inline-block"
            >
              About Me
            </motion.div>
          }
          subtitle={
            <div className="prose prose-lg text-muted-foreground mt-8">
              {introContent.map((paragraph, index) => (
                <motion.p 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.1 * index,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  className={index > 0 ? 'mt-4' : ''}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          }
        />
      </AnimatePresence>

      <AnimatePresence>
        {showExperience && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Section>
              <motion.h2 
                className="text-2xl font-medium mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Experience
              </motion.h2>
              <motion.ul 
                className="space-y-6 m-0 p-0 list-none"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.05
                    }
                  }
                }}
              >
                {experienceItems.map((item, index) => (
                  <motion.li 
                    key={index}
                    className="pl-0"
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      show: { 
                        opacity: 1, 
                        y: 0,
                        transition: { duration: 0.3 }
                      }
                    }}
                  >
                    <div className="flex items-center w-full">
                      <div className="font-medium">
                        {item.companyUrl ? (
                          <a 
                            href={item.companyUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            {item.company}
                          </a>
                        ) : item.company}
                      </div>
                      <span className="flex-grow border-t border-gray-500/30 border-dashed mx-2 align-middle" />
                      <div className="tabular-nums text-gray-500 dark:text-gray-400 whitespace-nowrap">
                        {item.years}
                      </div>
                    </div>
                    <div className="text-base text-gray-500 dark:text-gray-400 mt-1">
                      {item.role}
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </Section>

            <section className="border-t border-gray-200 dark:border-gray-800 py-16">
              <div className="mx-auto w-full max-w-[640px] px-4 sm:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <FAQSection />
                </motion.div>
              </div>
            </section>

            <Section className="border-t border-gray-200 dark:border-gray-800">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-2xl font-medium mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-6">
                  I'm always open to interesting conversations and new opportunities. 
                  Feel free to reach out through any of these channels:
                </p>
                <div className="flex flex-wrap gap-x-8 gap-y-2 text-base">
                  {socialLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.3 }}
                    >
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 hover:text-foreground transition-colors"
                      >
                        <span className="text-lg">{link.icon}</span>
                        <span className="border-b border-transparent group-hover:border-foreground transition-colors">
                          {link.name}
                        </span>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
