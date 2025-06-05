import Link from 'next/link';


export default function BackToProjects() {
  return (
    <div className="w-full mb-12">
      <div className="max-w-screen-lg mx-auto px-6 md:px-8">
        <div className="pt-4">
          <Link 
            href="/" 
            className="text-sm text-muted hover:underline inline-block transition-colors hover:text-foreground"
          >
            ← All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
