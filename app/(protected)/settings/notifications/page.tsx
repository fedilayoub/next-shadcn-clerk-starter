import { Bell } from "lucide-react"

export default function NotificationsPage() {
  return (
    <div className="container max-w-6xl">
      <div className="flex items-center gap-2 pb-4">
        <Bell className="h-6 w-6" />
        <h1 className="text-2xl font-bold">Notifications</h1>
      </div>
      <div className="rounded-lg border p-4">
        <p>Manage your notification preferences and view recent notifications.</p>
      </div>
    </div>
  )
} 