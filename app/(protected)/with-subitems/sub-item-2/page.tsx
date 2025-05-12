export default function SubItem2Page() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <h1 className="text-2xl font-bold">Sub Item 2</h1>
      
      <div className="grid auto-rows-min gap-4 md:grid-cols-2">
        <div className="bg-muted/50 p-6 rounded-xl h-48">
          <h3 className="text-lg font-medium mb-2">Title 1</h3>
          <p className="text-muted-foreground">Description 1</p>
        </div>
        <div className="bg-muted/50 p-6 rounded-xl h-48">
          <h3 className="text-lg font-medium mb-2">Title 2</h3>
          <p className="text-muted-foreground">Description 2</p>
        </div>
      </div>
      
      <div className="bg-muted/50 p-6 min-h-[40vh] flex-1 rounded-xl">
        <h2 className="text-xl font-semibold mb-4">Title 3</h2>
        <p>Description 3</p>
      </div>
    </div>
  )
} 