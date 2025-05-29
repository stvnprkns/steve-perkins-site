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
    <div className="w-full -mx-4 sm:-mx-6">
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className="mt-16 relative px-4 sm:px-6"
      >
        <div className="absolute inset-0 -inset-x-3 -inset-y-2 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800/50 rounded-lg -z-10" />
        <div className="max-w-3xl mx-auto py-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-1 mb-2"
          >
            <h2 className="text-lg font-medium">
              More on <span className="font-medium text-foreground">{category?.title}</span>
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
            className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-3"
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
            {related.map((note) => (
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
                  className="block group no-underline text-foreground"
                >
                  <div className="flex items-start gap-3 p-2 rounded-lg transition-colors hover:bg-purple-100/50 dark:hover:bg-purple-900/30">
                    <motion.span 
                      className="text-muted-foreground group-hover:text-foreground transition-colors"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      {note.emoji || note.icon}
                    </motion.span>
                    <div>
                      <span className="font-medium">
                        {note.title}
                      </span>
                      {note.excerpt && (
                        <motion.p 
                          className="text-base text-gray-500 dark:text-gray-400 mt-1 leading-relaxed"
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
        </div>
      </motion.section>
    </div>
  );
}
