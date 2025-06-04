import { Metadata } from 'next';
import Link from 'next/link';
import UnderlineLink from '@/components/UnderlineLink';
import PageHero from '@/components/PageHero';
import Section from '@/components/layout/Section';
import ButtonLink from '@/components/ButtonLink';

export const metadata: Metadata = {
  title: 'About Steve Perkins',
  description: 'Product Design Leader with a passion for creating intuitive, user-centered digital experiences.',
};

export default function AboutPage() {
  return (
    <div className="w-full mx-auto max-w-3xl px-4 sm:px-6">
      <PageHero
        title="About Me"
        variant="narrow"
        padding="default"
      />
      <Section variant="narrow" className="pt-2 pb-8" noDivider>
        <div className="prose text-base leading-relaxed space-y-3">
          <p>I was halfway to becoming a cosmetic dentist when I realized I didn&apos;t want to memorize the right answer — I wanted to ask better questions. So I switched majors, studied New Media Art, and ended up somewhere between art, design, code, and systems thinking.</p>
          
          <p>That was over 13 years ago. Since then, I&apos;ve led design orgs, launched products from zero, cleaned up the messes others left behind, and built teams that like building together.</p>
          
          <p>I&apos;ve worked in just about every industry, fintech, healthcare, dev tools, and construction — usually on the hard stuff that has more edge cases than glamour shots. I&apos;ve designed HIPAA-compliant messengers, built data platforms, overhauled design systems, and reimagined how customer info flows across tools. The unsexy problems that quietly power everything.</p>
        </div>
      </Section>

      <Section variant="narrow" className="py-16 bg-muted/10" noDivider>
        <div className="space-y-8">
          <h2 className="text-2xl font-medium">Experience</h2>
          
          <ul className="space-y-4">
            <li className="flex flex-1 items-center space-x-4 pl-0">
              <div>
                <UnderlineLink href="https://procore.com">Procore</UnderlineLink>
              </div>
              <span className="w-full border-t border-gray-500/30 border-dashed min-w-4" style={{ flexShrink: 999999 }} />
              <div className="text-right">
                <div className="flex items-center">
                  <div className="font-normal text-gray-600 dark:text-gray-300">Senior Product Design Manager</div>
                  <div className="ml-4 w-[6em] text-right tabular-nums text-gray-400 dark:text-gray-500">2025–Now</div>
                </div>
              </div>
            </li>

            <li className="flex flex-1 items-center space-x-4 pl-0">
              <div>
                <UnderlineLink href="https://argodesign.com">ArgoDesign</UnderlineLink>
              </div>
              <span className="w-full border-t border-gray-500/30 border-dashed min-w-4" style={{ flexShrink: 999999 }} />
              <div className="text-right">
                <div className="flex items-center">
                  <div className="font-normal text-gray-600 dark:text-gray-300">Freelance Designer</div>
                  <div className="ml-4 w-[6em] text-right tabular-nums text-gray-400 dark:text-gray-500">2024</div>
                </div>
              </div>
            </li>

            <li className="flex flex-1 items-center space-x-4 pl-0">
              <div>
                <UnderlineLink href="https://gartner.com">Gartner</UnderlineLink>
              </div>
              <span className="w-full border-t border-gray-500/30 border-dashed min-w-4" style={{ flexShrink: 999999 }} />
              <div className="text-right">
                <div className="flex items-center">
                  <div className="font-normal text-gray-600 dark:text-gray-300">Manager, Product Design</div>
                  <div className="ml-4 w-[6em] text-right tabular-nums text-gray-400 dark:text-gray-500">2024</div>
                </div>
              </div>
            </li>

            <li className="flex flex-1 items-center space-x-4 pl-0">
              <div>
                <UnderlineLink href="https://rudderstack.com">RudderStack</UnderlineLink>
              </div>
              <span className="w-full border-t border-gray-500/30 border-dashed min-w-4" style={{ flexShrink: 999999 }} />
              <div className="text-right">
                <div className="flex items-center">
                  <div className="font-normal text-gray-600 dark:text-gray-300">Head of Design</div>
                  <div className="ml-4 w-[6em] text-right tabular-nums text-gray-400 dark:text-gray-500">2021–2024</div>
                </div>
              </div>
            </li>

            <li className="flex flex-1 items-center space-x-4 pl-0">
              <div>
                <UnderlineLink href="https://sailpoint.com">SailPoint</UnderlineLink>
              </div>
              <span className="w-full border-t border-gray-500/30 border-dashed min-w-4" style={{ flexShrink: 999999 }} />
              <div className="text-right">
                <div className="flex items-center">
                  <div className="font-normal text-gray-600 dark:text-gray-300">Lead, Design Operations</div>
                  <div className="ml-4 w-[6em] text-right tabular-nums text-gray-400 dark:text-gray-500">2020–2021</div>
                </div>
              </div>
            </li>

            <li className="flex flex-1 items-center space-x-4 pl-0">
              <div>
                <UnderlineLink href="https://kunaico.com">Kunai</UnderlineLink>
              </div>
              <span className="w-full border-t border-gray-500/30 border-dashed min-w-4" style={{ flexShrink: 999999 }} />
              <div className="text-right">
                <div className="flex items-center">
                  <div className="font-normal text-gray-600 dark:text-gray-300">Design Manager</div>
                  <div className="ml-4 w-[6em] text-right tabular-nums text-gray-400 dark:text-gray-500">2016–2020</div>
                </div>
              </div>
            </li>

            <li className="flex flex-1 items-center space-x-4 pl-0">
              <div>
                <UnderlineLink href="https://www.att.com">AT&T</UnderlineLink>
              </div>
              <span className="w-full border-t border-gray-500/30 border-dashed min-w-4" style={{ flexShrink: 999999 }} />
              <div className="text-right">
                <div className="flex items-center">
                  <div className="font-normal text-gray-600 dark:text-gray-300">Lead UX Designer</div>
                  <div className="ml-4 w-[6em] text-right tabular-nums text-gray-400 dark:text-gray-500">2015–2016</div>
                </div>
              </div>
            </li>

            <li className="flex flex-1 items-center space-x-4 pl-0">
              <div>
                <UnderlineLink href="https://www.intuit.com">Intuit</UnderlineLink>
              </div>
              <span className="w-full border-t border-gray-500/30 border-dashed min-w-4" style={{ flexShrink: 999999 }} />
              <div className="text-right">
                <div className="flex items-center">
                  <div className="font-normal text-gray-600 dark:text-gray-300">Interaction Designer</div>
                  <div className="ml-4 w-[6em] text-right tabular-nums text-gray-400 dark:text-gray-500">2014–2015</div>
                </div>
              </div>
            </li>

            <li className="flex flex-1 items-center space-x-4 pl-0">
              <div>
                <UnderlineLink href="https://tigerconnect.com">TigerConnect</UnderlineLink>
              </div>
              <span className="w-full border-t border-gray-500/30 border-dashed min-w-4" style={{ flexShrink: 999999 }} />
              <div className="text-right">
                <div className="flex items-center">
                  <div className="font-normal text-gray-600 dark:text-gray-300">Founding Designer</div>
                  <div className="ml-4 w-[6em] text-right tabular-nums text-gray-400 dark:text-gray-500">2013–2014</div>
                </div>
              </div>
            </li>

            <li className="flex flex-1 items-center space-x-4 pl-0">
              <div>The Media Grind</div>
              <span className="w-full border-t border-gray-500/30 border-dashed min-w-4" style={{ flexShrink: 999999 }} />
              <div className="text-right">
                <div className="flex items-center">
                  <div className="font-normal text-gray-600 dark:text-gray-300">Digital Designer</div>
                  <div className="ml-4 w-[6em] text-right tabular-nums text-gray-400 dark:text-gray-500">2012–2013</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Section>
      
      <Section variant="narrow" className="py-16" noDivider>
        <div className="space-y-8">
          <h2 className="text-2xl font-medium">Get in Touch</h2>
          <p className="text-muted-foreground max-w-2xl">
            I&apos;m always open to discussing product design, leadership, or potential opportunities. 
            Feel free to reach out through any of these channels:
          </p>
          
          <div className="flex flex-wrap gap-6 pt-2 text-base">
            <a 
              href="mailto:meet@steveperk.com"
              className="text-foreground hover:text-foreground/70 transition-colors duration-200"
            >
              Email
            </a>
            <a 
              href="https://www.linkedin.com/in/perkinsstephen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-foreground/70 transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a 
              href="https://steveperk.substack.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-foreground/70 transition-colors duration-200"
            >
              Substack
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
