'use client';

import Link from "next/link";
import { motion } from 'framer-motion';
import { getNoteBySlug, getNotesByCategory } from "@/lib/notes";
import { getCategoryByKey } from "@/lib/categories";
import { fadeInUp } from "@/lib/animations";

export interface RelatedNotesProps {
  currentSlug: string;
}

export default function RelatedNotes({ currentSlug }: RelatedNotesProps) {
  const currentNote = getNoteBySlug(currentSlug);
  
  if (!currentNote) return null;
  
  const category = getCategoryByKey(currentNote.category);
  const related = getNotesByCategory(currentNote.category)
    .filter(note => note.slug !== currentSlug)
    .sort((a, b) => (b.updated || "").localeCompare(a.updated || ""))
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
      className="mt-12 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-sm transition-shadow duration-300"
    >
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-3 mb-4"
      >
        <h2 className="text-lg font-semibold">
          More on <span className="font-bold text-foreground">{category?.title}</span>
        </h2>
        {category?.subtitle && (
          <p className="text-sm text-muted-foreground">{category.subtitle}</p>
        )}
      </motion.div>
      
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="h-px w-full bg-gray-200 dark:bg-gray-800 mb-4 origin-left"
      />
      
      <motion.ul 
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.2
            }
          }
        }}
        className="space-y-4"
      >
        {related.map((note, index) => (
          <motion.li 
            key={note.slug}
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  type: 'spring',
                  stiffness: 100,
                  damping: 15
                }
              }
            }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="origin-left"
          >
            <Link 
              href={`/notes/${note.slug}`} 
              className="block group"
            >
              <div className="flex items-start gap-3 p-2 -m-2 rounded-lg transition-colors hover:bg-gray-100/50 dark:hover:bg-gray-800/50">
                <motion.span 
                  className="text-muted-foreground group-hover:text-foreground transition-colors"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  {note.emoji || note.icon}
                </motion.span>
                <div>
                  <span className="font-medium group-hover:underline decoration-1 underline-offset-4">
                    {note.title}
                  </span>
                  {note.excerpt && (
                    <motion.p 
                      className="text-sm text-gray-500 dark:text-gray-400 mt-1"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {note.excerpt}
                    </motion.p>
                  )}
                </div>
              </div>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
}
