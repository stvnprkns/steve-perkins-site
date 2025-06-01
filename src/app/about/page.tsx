import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import UnderlineLink from '@/components/UnderlineLink';
import PageHero from '@/components/PageHero';
import Section from '@/components/layout/Section';

export const metadata: Metadata = {
  title: 'About Steve Perkins',
  description: 'Product Design Leader with a passion for creating intuitive, user-centered digital experiences.',
};

export default function AboutPage() {
  return (
    <div className="w-full mx-auto max-w-3xl px-4 sm:px-6">
      <PageHero
        title="About Me"
        subtitle="Product Design Leader with a passion for creating intuitive, user-centered digital experiences."
        variant="narrow"
        padding="lg"
      />

      <Section variant="narrow" className="py-16" noDivider>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-medium">Hello, I&apos;m Steve</h2>
            
            <div className="prose text-base leading-relaxed space-y-4">
              <p>
                I&apos;m a product leader with over 15 years of experience building and scaling high-performing teams and products. My expertise lies in product management, data analytics, and user experience design. I help companies navigate the challenges of rapid growth, with a focus on building resilient, customer-focused products.
              </p>
              
              <p>
                My approach combines deep technical expertise with strong product sense, enabling me to bridge the gap between business objectives and technical implementation. I&apos;m passionate about creating products that solve real problems and deliver exceptional user experiences.
              </p>
              
              <p>
                I&apos;ve had the privilege of working with some amazing companies, including RudderStack, QuickBooks, and Intuit, where I&apos;ve led teams to deliver innovative solutions that drive business growth.
              </p>
              
              <p>
                When I&apos;m not building products, you can find me hiking in the mountains, experimenting with new cooking techniques, or spending time with my family.
              </p>
              
              <div className="pt-4">
                <Link 
                  href="/projects" 
                  className="inline-flex items-center text-foreground hover:text-foreground/80 transition-colors"
                >
                  View my work
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="/images/steve-perkins.jpg"
              alt="Steve Perkins"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Section>

      <Section variant="narrow" className="py-16 bg-muted/10" noDivider>
        <div className="space-y-8">
          <h2 className="text-2xl font-medium">Experience</h2>
          
          <ul className="space-y-4">
            <li className="flex flex-1 items-center space-x-4 pl-0">
              <div className="text-foreground">
                <UnderlineLink href="https://procore.com">Procore</UnderlineLink>
              </div>
              <span className="w-full border-t border-border border-dashed min-w-4" style={{ flexShrink: 999999 }}></span>
              <div className="text-muted-foreground text-right">
                <div className="flex items-center">
                  <div>Director of Product Design</div>
                  <div className="ml-4 w-[6em] text-right tabular-nums">2020–Now</div>
                </div>
              </div>
            </li>

            <li className="flex flex-1 items-center space-x-4 pl-0">
              <div className="text-foreground">
                <UnderlineLink href="https://rudderstack.com">RudderStack</UnderlineLink>
              </div>
              <span className="w-full border-t border-border border-dashed min-w-4" style={{ flexShrink: 999999 }}></span>
              <div className="text-muted-foreground text-right">
                <div className="flex items-center">
                  <div>Head of Design</div>
                  <div className="ml-4 w-[6em] text-right tabular-nums">2018–2020</div>
                </div>
              </div>
            </li>

            <li className="flex flex-1 items-center space-x-4 pl-0">
              <div className="text-foreground">
                <UnderlineLink href="https://intuit.com">Intuit</UnderlineLink>
              </div>
              <span className="w-full border-t border-border border-dashed min-w-4" style={{ flexShrink: 999999 }}></span>
              <div className="text-muted-foreground text-right">
                <div className="flex items-center">
                  <div>Senior Product Designer</div>
                  <div className="ml-4 w-[6em] text-right tabular-nums">2015–2018</div>
                </div>
              </div>
            </li>

            <li className="flex flex-1 items-center space-x-4 pl-0">
              <div className="text-foreground">
                <UnderlineLink href="https://shopify.com">Shopify</UnderlineLink>
              </div>
              <span className="w-full border-t border-border border-dashed min-w-4" style={{ flexShrink: 999999 }}></span>
              <div className="text-muted-foreground text-right">
                <div className="flex items-center">
                  <div>Senior Staff Software Engineer</div>
                  <div className="ml-4 w-[6em] text-right tabular-nums">2024–Now</div>
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
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="mailto:hello@steveperkins.design" 
              className="inline-flex items-center px-4 py-2 border border-foreground/20 rounded-md hover:bg-foreground/5 transition-colors"
            >
              Email
            </a>
            <a 
              href="https://www.linkedin.com/in/steveperkins" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-foreground/20 rounded-md hover:bg-foreground/5 transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://twitter.com/steveperkins" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-foreground/20 rounded-md hover:bg-foreground/5 transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
