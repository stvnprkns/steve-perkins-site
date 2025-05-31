export default function Problem() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">The Challenge</h2>
      <div className="prose dark:prose-invert max-w-none">
        <p>
          Healthcare providers face significant challenges when appealing insurance claim denials. 
          The process is often manual, time-consuming, and lacks transparency, leading to:
        </p>
        
        <ul>
          <li>Lengthy processing times for appeals (often 30+ days)</li>
          <li>High administrative burden on healthcare staff</li>
          <li>Inconsistent success rates across different insurance providers</li>
          <li>Lack of visibility into appeal status and outcomes</li>
        </ul>
        
        <p>
          Our goal was to transform this frustrating experience into a streamlined, efficient process 
          that maximizes successful appeals while minimizing administrative overhead.
        </p>
      </div>
      
      <div className="rounded-xl border p-6 bg-muted/50 mt-8">
        <h3 className="font-medium mb-4">Key Problems to Solve</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h4 className="font-medium">Inefficient Process</h4>
            <p className="text-muted-foreground text-sm">
              Manual form filling and document submission created bottlenecks and errors.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">Lack of Guidance</h4>
            <p className="text-muted-foreground text-sm">
              Providers often didn&apos;t know the best way to structure their appeals for success.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">Poor Visibility</h4>
            <p className="text-muted-foreground text-sm">
              No centralized way to track appeal status or historical outcomes.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">Regulatory Complexity</h4>
            <p className="text-muted-foreground text-sm">
              Navigating different insurance requirements and regulations was challenging.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
