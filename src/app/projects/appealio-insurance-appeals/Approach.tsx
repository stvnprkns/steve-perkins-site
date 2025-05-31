export default function Approach() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold tracking-tight">Our Approach</h2>
      
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Research & Discovery</h3>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              We began by conducting in-depth interviews with healthcare administrators, billing specialists, 
              and insurance representatives to understand the end-to-end appeals process. This research revealed 
              several key insights:
            </p>
            <ul>
              <li>Most appeals follow similar patterns but require significant customization</li>
              <li>Success rates improve dramatically with proper documentation and justification</li>
              <li>Providers often lack visibility into why claims are initially denied</li>
              <li>There&apos;s significant variation in requirements between different insurance providers</li>
            </ul>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Design Principles</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-4 bg-background">
              <h4 className="font-medium mb-2">Guided Workflow</h4>
              <p className="text-sm text-muted-foreground">
                Break down the complex appeals process into simple, manageable steps with clear guidance at each stage.
              </p>
            </div>
            <div className="border rounded-lg p-4 bg-background">
              <h4 className="font-medium mb-2">Smart Automation</h4>
              <p className="text-sm text-muted-foreground">
                Automate repetitive tasks and data entry to reduce errors and save time.
              </p>
            </div>
            <div className="border rounded-lg p-4 bg-background">
              <h4 className="font-medium mb-2">Transparent Tracking</h4>
              <p className="text-sm text-muted-foreground">
                Provide real-time status updates and clear visibility into the appeals process.
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Key Features</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2 border rounded-lg p-4 bg-background">
              <h4 className="font-medium">Intake Wizard</h4>
              <p className="text-sm text-muted-foreground">
                Step-by-step form that adapts based on the type of appeal and insurance provider.
              </p>
            </div>
            <div className="space-y-2 border rounded-lg p-4 bg-background">
              <h4 className="font-medium">Document Management</h4>
              <p className="text-sm text-muted-foreground">
                Centralized storage and organization of all appeal-related documents and correspondence.
              </p>
            </div>
            <div className="space-y-2 border rounded-lg p-4 bg-background">
              <h4 className="font-medium">Appeal Builder</h4>
              <p className="text-sm text-muted-foreground">
                Tools to help craft compelling appeal letters with relevant medical evidence and guidelines.
              </p>
            </div>
            <div className="space-y-2 border rounded-lg p-4 bg-background">
              <h4 className="font-medium">Analytics Dashboard</h4>
              <p className="text-sm text-muted-foreground">
                Track success rates, processing times, and financial impact of appeals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
