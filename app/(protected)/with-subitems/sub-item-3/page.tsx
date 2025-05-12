export default function SubItem3Page() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <h1 className="text-2xl font-bold">Sub Item 3</h1>
      
      <div className="grid auto-rows-min gap-4 md:grid-cols-1">
        <div className="bg-muted/50 p-6 rounded-xl">
          <h3 className="text-lg font-medium mb-2">Title 1</h3>
          <p className="text-muted-foreground">Description 1</p>
        </div>
      </div>
      
      <div className="bg-muted/50 p-6 min-h-[40vh] flex-1 rounded-xl">
        <h2 className="text-xl font-semibold mb-4">Sub Item 3 Content</h2>
        <div className="space-y-4">
          <div className="bg-background p-4 rounded-lg">
            <h3 className="font-medium">Option 1</h3>
            <p className="text-sm text-muted-foreground">Configure option 1 settings</p>
          </div>
          <div className="bg-background p-4 rounded-lg">
            <h3 className="font-medium">Option 2</h3>
            <p className="text-sm text-muted-foreground">Configure option 2 settings</p>
          </div>
          <div className="bg-background p-4 rounded-lg">
            <h3 className="font-medium">Option 3</h3>
            <p className="text-sm text-muted-foreground">Configure option 3 settings</p>
          </div>
        </div>
      </div>
    </div>
  )
} 