import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from '@/components/ExternalLink';
import PageHero from '@/components/PageHero';
import Section from '@/components/layout/Section';

export const metadata: Metadata = {
  title: 'About Steve Perkins',
  description: 'Product Design Leader with a passion for creating intuitive, user-centered digital experiences.',
};

export default function AboutPage() {
  return (
    <div className="w-full">
      <PageHero
        title="About Me"
        subtitle="Product Design Leader with a passion for creating intuitive, user-centered digital experiences."
        variant="narrow"
        padding="lg"
      />

      <Section variant="narrow" className="py-16" noDivider>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-medium">Hello, I'm Steve</h2>
            
            <div className="prose text-base leading-relaxed space-y-4">
              <p>
                I'm a product design leader with over 10 years of experience creating digital products that people love to use. 
                Currently, I lead design at Procore, where I focus on building tools that help construction professionals build better.
              </p>
              
              <p>
                My approach combines user-centered design with business strategy to create products that are both valuable and 
                viable. I believe in the power of research, rapid prototyping, and iterative design to solve complex problems.
              </p>
              
              <p>
                When I'm not designing, you can find me hiking with my family, experimenting with new recipes in the kitchen, 
                or exploring the latest design tools and technologies.
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
          
          <div className="space-y-8">
            <div className="border-b border-border/20 pb-8">
              <h3 className="text-lg font-medium">Procore Technologies</h3>
              <p className="text-muted-foreground">Director of Product Design • 2020–Present</p>
              <p className="mt-2">Leading the design of core product experiences for construction professionals.</p>
            </div>
            
            <div className="border-b border-border/20 pb-8">
              <h3 className="text-lg font-medium">RudderStack</h3>
              <p className="text-muted-foreground">Head of Design • 2018–2020</p>
              <p className="mt-2">Built and led the design team, establishing design processes and a design system.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium">Intuit</h3>
              <p className="text-muted-foreground">Senior Product Designer • 2015–2018</p>
              <p className="mt-2">Designed experiences for QuickBooks products, focusing on small business solutions.</p>
            </div>
          </div>
        </div>
      </Section>
      
      <Section variant="narrow" className="py-16" noDivider>
        <div className="space-y-8">
          <h2 className="text-2xl font-medium">Get in Touch</h2>
          <p className="text-muted-foreground max-w-2xl">
            I'm always open to discussing product design, leadership, or potential opportunities. 
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
