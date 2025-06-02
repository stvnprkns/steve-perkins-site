import * as React from "react";
import Image from "next/image";
import { ExternalLink } from "@/components/ExternalLink";
import { TeamList } from "@/components/TeamMember";
import { rudderstackData } from "./rudderstackData";

function HeroImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-[110%] relative -left-[5%] my-8 md:my-12">
      <div className="max-w-screen-2xl mx-auto">
        <div className="relative w-full aspect-video">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover w-full h-full rounded"
            priority
            sizes="100vw"
          />
        </div>
      </div>
    </div>
  );
}

export default function Intro() {
  return (
    <>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-left mb-8">
        {rudderstackData.title}
      </h1>
      <div className="mt-8 text-lg text-muted-foreground text-left">
        <p className="font-medium">
          <ExternalLink href={rudderstackData.company.url}>
            {rudderstackData.company.name}
          </ExternalLink>
        </p>
        <div className="mt-4">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Team</h3>
          <TeamList members={rudderstackData.team} />
        </div>
      </div>
      {rudderstackData.heroImage && (
        <HeroImage src={rudderstackData.heroImage.src} alt={rudderstackData.heroImage.alt} />
      )}

    </>
  );
}
