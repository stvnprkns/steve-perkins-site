'use client';

import Link from "next/link";
import { getNoteBySlug } from "@/lib/notes";
import RelatedNotes from "@/components/notes/RelatedNotes";
import AnimateInView from "@/components/animation/AnimateInView";
import { motion } from 'framer-motion';
import { fadeInUp } from "@/lib/animations";



export default function NotePage({ params }: { params: { slug: string } }) {
  const note = getNoteBySlug(params.slug);
  if (!note) return <div className="px-6 py-16 text-muted">Note not found.</div>;

  // Mock status and updated for demo; replace with real if available
  const status = note.status || "Seedling";
  const emoji = note.icon || "🌱";
  const updated = note.updated || note.date || "Unknown";
  const tags = note.tags || [];
  const tagLinks = tags.map(tag => (
    <Link key={tag} href={`/notes/tag/${tag}`} className="hover:underline">#{tag}</Link>
  ));


  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-prose mx-auto px-4 sm:px-6 pt-12 pb-24"
    >
      <AnimateInView delay={0.1} yOffset={10}>
        <Link 
          href="/notes" 
          className="text-sm text-muted hover:text-foreground transition-colors inline-block mb-8 group"
        >
          <span className="inline-block group-hover:-translate-x-1 transition-transform">←</span> Back to notes
        </Link>
      </AnimateInView>
      
      <AnimateInView delay={0.2} yOffset={20}>
        <h1 className="text-4xl font-serif font-bold mb-8 leading-tight">{note.title}</h1>
      </AnimateInView>
      
      <AnimateInView delay={0.3} yOffset={20}>
        <div className="flex flex-wrap items-start gap-x-8 gap-y-4 text-base border-b border-gray-200 dark:border-gray-800 pb-8 mb-8">
        <div className="flex flex-col">
          <span className="text-sm font-bold text-foreground/80 mb-1">Status</span>
          <div className="flex items-center text-foreground">
            <span className="mr-1.5">{emoji}</span>
            <span>{status}</span>
          </div>
        </div>
        <div className="h-10 w-[1px] bg-gray-300 dark:bg-gray-700 mx-2" />
        <div className="flex flex-col">
          <span className="text-sm font-bold text-foreground/80 mb-1">Updated</span>
          <span className="text-foreground">{updated}</span>
        </div>
        <div className="h-10 w-[1px] bg-gray-300 dark:bg-gray-700 mx-2" />
        <div className="flex flex-col">
          <span className="text-sm font-bold text-foreground/80 mb-1">Topics</span>
          <div className="flex flex-wrap gap-2">{tagLinks}</div>
        </div>
        </div>
      </AnimateInView>
      
      <AnimateInView delay={0.4} yOffset={20}>
        <article className="prose prose-neutral max-w-prose mx-auto py-12">
          {note.body}
        </article>
      </AnimateInView>
      
      <AnimateInView delay={0.5} yOffset={20}>
        <RelatedNotes currentSlug={note.slug} />
      </AnimateInView>
    </motion.div>
  );
}
