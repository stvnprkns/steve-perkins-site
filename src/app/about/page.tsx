import { Metadata } from 'next';
import { AnimatedAboutSections } from '@/components/about/AnimatedAboutSections';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'About Steve Perkins',
  description: 'Product Design Leader with a passion for creating intuitive, user-centered digital experiences.',
};

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

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6">
      <PageHero
        title="About Me"
        variant="narrow"
        padding="default"
      >
        <AnimatedAboutSections 
          introContent={introContent}
          experienceItems={experienceItems}
        />
      </PageHero>
    </div>
  );
}
