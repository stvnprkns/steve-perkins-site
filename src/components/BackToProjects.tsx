import Link from 'next/link';


export default function BackToProjects() {
  return (
    <div className="w-full mb-4">
      <div className="max-w-screen-lg mx-auto px-6 md:px-8">
        <div className="pt-4">
          <Link 
            href="/" 
            className="text-sm text-muted-foreground hover:text-muted-foreground inline-block transition-colors hover:underline hover:decoration-purple-500"
          >
            ← All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
