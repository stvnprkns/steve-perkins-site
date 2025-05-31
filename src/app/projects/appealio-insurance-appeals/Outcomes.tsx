export default function Outcomes() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold tracking-tight">Results & Impact</h2>
      
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Key Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-6 bg-background">
              <p className="text-4xl font-bold text-primary">65%</p>
              <p className="text-muted-foreground mt-2">Reduction in time spent per appeal</p>
            </div>
            <div className="border rounded-lg p-6 bg-background">
              <p className="text-4xl font-bold text-primary">40%</p>
              <p className="text-muted-foreground mt-2">Increase in successful appeals</p>
            </div>
            <div className="border rounded-lg p-6 bg-background">
              <p className="text-4xl font-bold text-primary">9.2/10</p>
              <p className="text-muted-foreground mt-2">User satisfaction score</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">User Feedback</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-6 bg-background">
              <p className="italic mb-4">&quot;The guided appeal process has dramatically reduced our training time and improved our success rates. What used to take hours now takes minutes.&quot;</p>
              <p className="font-medium">— Practice Administrator, Multi-Specialty Clinic</p>
            </div>
            <div className="border rounded-lg p-6 bg-background">
              <p className="italic mb-4">&quot;Having all our appeal documentation in one place with clear status updates has transformed how we manage denials. The analytics have also helped us identify patterns to prevent future denials.&quot;</p>
              <p className="font-medium">— Billing Manager, Cardiology Group</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Key Learnings</h3>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              The Appealio project reinforced several important lessons about designing for healthcare workflows:
            </p>
            <ul>
              <li><strong>Complexity must be managed, not eliminated:</strong> We found success in breaking down complex processes into manageable steps while still providing access to advanced features when needed.</li>
              <li><strong>Context is critical:</strong> Understanding the regulatory environment and specific requirements of different insurance providers was essential for creating a truly useful tool.</li>
              <li><strong>Design for resilience:</strong> Healthcare staff often work under significant time pressure, so designing for error prevention and recovery was crucial.</li>
              <li><strong>Data drives improvement:</strong> The analytics capabilities not only provided value to users but also gave us valuable insights for continuous product improvement.</li>
            </ul>
          </div>
        </div>
        
        <div className="space-y-4 pt-4">
          <h3 className="text-2xl font-semibold">Next Steps</h3>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              Based on user feedback and ongoing analysis, we&apos;re planning several enhancements:
            </p>
            <ul>
              <li>Integration with additional electronic health record (EHR) systems</li>
              <li>AI-powered suggestions for improving appeal success rates</li>
              <li>Expanded analytics with predictive modeling</li>
              <li>Mobile app for on-the-go appeal management</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
