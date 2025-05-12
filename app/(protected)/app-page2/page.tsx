import { Map } from "lucide-react"

export default function ItemPage() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="flex items-center gap-2">
        <Map className="h-6 w-6" />
        <h1 className="text-2xl font-bold">Item</h1>
      </div>
      
      <div className="grid auto-rows-min gap-4 md:grid-cols-2">
        <div className="bg-muted/50 aspect-video rounded-xl flex items-center justify-center">
          <span className="text-lg font-medium">Section 1</span>
        </div>
        <div className="bg-muted/50 aspect-video rounded-xl flex items-center justify-center">
          <span className="text-lg font-medium">Section 2</span>
        </div>
      </div>
      
      <div className="bg-muted/50 min-h-[50vh] flex-1 rounded-xl flex items-center justify-center">
        <p className="text-xl">Section 3</p>
      </div>
    </div>
  )
} 