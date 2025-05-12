export default function SubItem1Page() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <h1 className="text-2xl font-bold">Sub Item 1</h1>
      
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="bg-muted/50 p-6 rounded-xl">
          <h3 className="text-lg font-medium mb-2">Feature 1</h3>
          <p className="text-muted-foreground">This is a description for feature 1</p>
        </div>
        <div className="bg-muted/50 p-6 rounded-xl">
          <h3 className="text-lg font-medium mb-2">Feature 2</h3>
          <p className="text-muted-foreground">This is a description for feature 2</p>
        </div>
        <div className="bg-muted/50 p-6 rounded-xl">
          <h3 className="text-lg font-medium mb-2">Feature 3</h3>
          <p className="text-muted-foreground">This is a description for feature 3</p>
        </div>
      </div>
      
      <div className="bg-muted/50 p-6 min-h-[40vh] flex-1 rounded-xl">
        <h2 className="text-xl font-semibold mb-4">Sub Item 1 Content</h2>
        <p>This is the main content area for Sub Item 1.</p>
      </div>
    </div>
  )
} 