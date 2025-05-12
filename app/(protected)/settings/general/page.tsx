import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function GeneralSettingsPage() {
  return (
    <div className="flex flex-1 flex-col gap-6">
      <h1 className="text-2xl font-bold">General Settings</h1>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Profile Information</h2>
          <div className="rounded-lg border p-4 space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="John Doe" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="john@example.com" />
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Preferences</h2>
          <div className="rounded-lg border p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base" htmlFor="notifications">Email Notifications</Label>
                <p className="text-sm text-muted-foreground">Receive email notifications about account activity</p>
              </div>
              <Switch id="notifications" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base" htmlFor="dark-mode">Dark Mode</Label>
                <p className="text-sm text-muted-foreground">Enable dark mode for the application</p>
              </div>
              <Switch id="dark-mode" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <Button>Save Changes</Button>
      </div>
    </div>
  )
} 