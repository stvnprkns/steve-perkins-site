import React from 'react';
import Image from 'next/image';
import { ExternalLink } from '@/components/ExternalLink';
import { TeamList } from '@/components/TeamMember';
import { quickbooksData } from './quickbooksData';

function HeroImage({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="w-[110%] relative -left-[5%] my-8 md:my-12">
      <div className="max-w-screen-2xl mx-auto">
        <div className="relative w-full aspect-video">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover w-full h-full rounded"
            priority
            sizes="(max-width: 768px) 100vw, 80vw"
            quality={85}
          />
        </div>
      </div>
    </figure>
  );
}

export default function Intro() {
  return (
    <header className="project-header">
      <h1 id="project-title" className="text-4xl md:text-5xl font-bold tracking-tight text-left">
        {quickbooksData.title}
      </h1>
      <section className="mt-8 text-lg text-muted-foreground text-left" aria-labelledby="project-metadata">
        <h2 id="project-metadata" className="sr-only">Project Information</h2>
        <p className="font-medium">
          <ExternalLink 
            href={quickbooksData.company.url}
            aria-label={`${quickbooksData.company.name} website (opens in new tab)`}
          >
            {quickbooksData.company.name}
          </ExternalLink>
        </p>
        <section className="mt-4" aria-labelledby="team-heading">
          <h2 id="team-heading" className="text-sm font-medium text-muted-foreground mb-2">Team</h2>
          <TeamList members={quickbooksData.team} />
        </section>
      </section>
      {quickbooksData.heroImage && (
        <HeroImage src={quickbooksData.heroImage.src} alt={quickbooksData.heroImage.alt} />
      )}
    </header>
  );
}
