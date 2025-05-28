import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";

export default function SelectedWork() {
  return (
    <section className="w-full space-y-16">
      {projects.map((project) => {
        const images = Array.isArray(project.images) ? project.images : project.image ? [project.image] : [];
        return (
          <article key={project.slug} className="w-full left-aligned mt-8 mb-12">
            {/* Date heading */}
            <div className="text-sm text-gray-400 mb-2 mt-8 font-mono tracking-wide">
              {project.timeframe}
            </div>
            {/* Title as bold link */}
            <a href={`/projects/${project.slug}`} className="font-semibold text-2xl text-text-base hover:underline underline-offset-2 transition-colors">
              {project.title}
            </a>
            {/* Description/Summary */}
            <div className="max-w-prose text-base leading-relaxed text-text-base mt-3 mb-3">
              {project.summary}
            </div>
            {/* Optional: tags/categories/read more can go here */}
            {/* Images Section */}
            {images.length === 1 && (
              <div className="flex justify-center">
                <div className="w-full max-w-[125%] -mx-[12.5%] mt-4">
                  <div className="relative aspect-[4/3] w-full rounded-md overflow-hidden">
                    <Image
                      src={images[0]}
                      alt={`Screenshot of ${project.title}`}
                      fill
                      className="rounded-md object-cover border border-gray-100"
                    />
                  </div>
                </div>
              </div>
            )}
            {images.length === 2 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 max-w-[125%] -mx-[12.5%]">
                {images.map((img: string, idx: number) => (
                  <div key={idx} className="relative aspect-[4/3] w-full rounded-md overflow-hidden">
                    <Image
                      src={img}
                      alt={`Screenshot of ${project.title} ${idx + 1}`}
                      fill
                      className="rounded-md object-cover border border-gray-100"
                    />
                  </div>
                ))}
              </div>
            )}
            <div className="border-t border-gray-200 pt-8 mt-8"></div>
          </article>
        );
      })}
    </section>
  );
}

