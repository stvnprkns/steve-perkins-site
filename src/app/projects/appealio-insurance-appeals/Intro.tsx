export default function Intro() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Appealio: Streamlining Insurance Appeals
        </h1>
        <p className="text-xl text-muted-foreground">
          Designing an intuitive platform to simplify the insurance appeals process for healthcare providers
        </p>
      </div>
      
      <div className="rounded-xl border overflow-hidden bg-muted/50">
        <div className="aspect-video bg-muted flex items-center justify-center">
          <p className="text-muted-foreground">Hero image/video will go here</p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 pt-4">
        <div className="space-y-2">
          <h3 className="font-medium">Role</h3>
          <p className="text-muted-foreground">Lead Product Designer</p>
        </div>
        <div className="space-y-2">
          <h3 className="font-medium">Timeline</h3>
          <p className="text-muted-foreground">2023 - Present</p>
        </div>
        <div className="space-y-2">
          <h3 className="font-medium">Team</h3>
          <p className="text-muted-foreground">2 Designers, 5 Engineers, PM</p>
        </div>
      </div>
    </div>
  );
}
