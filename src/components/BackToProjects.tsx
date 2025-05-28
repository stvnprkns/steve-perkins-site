import Link from 'next/link';


export default function BackToProjects() {
  return (
    <div className="w-full mb-0" style={{marginBottom: 0, paddingBottom: 0}}>
      <div className="max-w-screen-lg mx-auto px-6 md:px-8 mb-0" style={{marginBottom: 0, paddingBottom: 0}}>
        <div className="pt-2 pb-0 mb-0" style={{marginBottom: 0, paddingBottom: 0}}>
          <Link 
            href="/projects" 
            className="text-sm text-muted hover:underline inline-block transition-colors hover:text-foreground"
          >
            ← Back to projects
          </Link>
        </div>
      </div>
    </div>
  );
}
