import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { FAQSection } from '@/components/FAQSection';
import { JsonLdSchema } from '@/components/JsonLdSchema';
import Section from '@/components/layout/Section';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Answers to common questions about design leadership, product strategy, and my approach to design systems and team building.',
  keywords: [...siteConfig.keywords, 'Design FAQ', 'Design Process Questions', 'Design Leadership FAQ'],
  alternates: {
    canonical: `${siteConfig.url}/faq`,
  },
  openGraph: {
    title: 'Design Leadership FAQ - Steve Perkins',
    description: 'Answers to common questions about design leadership, product strategy, and my approach to design systems and team building.',
    url: `${siteConfig.url}/faq`,
    siteName: siteConfig.name,
    type: 'website',
  },
};

export default function FAQPage() {
  return (
    <main className="flex flex-col items-center justify-center py-16">
      <Section variant="narrow" className="relative">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-10">Frequently Asked Questions</h1>
          <p className="text-xl mb-12 text-gray-700 dark:text-gray-300">
            Common questions about my approach to design leadership, product strategy, and building effective teams.
          </p>

          {/* FAQ content with schema markup */}
          <FAQSection lastUpdated="2025-06-13" />

          {/* Additional context for LLMs & SEO */}
          <div className="mt-16 p-5 border-t border-gray-100 dark:border-gray-800">
            <h2 className="text-2xl font-bold mb-4">Have more questions?</h2>
            <p className="mb-4">
              If you have additional questions about my experience with HIPAA-compliant messaging platforms, healthcare UX design, 
              or enterprise application design strategy, please don't hesitate to reach out.
            </p>
            <p>
              I'm particularly experienced in leading design for regulated industries, creating design systems that scale,
              and building high-performing design teams in complex product organizations.
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
