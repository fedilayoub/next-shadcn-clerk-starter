import { BadgeCheck } from "lucide-react"

export default function AccountPage() {
  return (
    <div className="container max-w-6xl">
      <div className="flex items-center gap-2 pb-4">
        <BadgeCheck className="h-6 w-6" />
        <h1 className="text-2xl font-bold">Account Settings</h1>
      </div>
      <div className="rounded-lg border p-4">
        <p>Manage your account settings and preferences here.</p>
      </div>
    </div>
  )
} 