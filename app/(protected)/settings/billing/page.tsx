import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, CheckCircle } from "lucide-react"

export default function BillingSettingsPage() {
  return (
    <div className="flex flex-1 flex-col gap-6">
      <h1 className="text-2xl font-bold">Billing</h1>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Current Plan</h2>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="space-y-1">
                <CardTitle>Pro Plan</CardTitle>
                <CardDescription>$19/month, billed monthly</CardDescription>
              </div>
              <CheckCircle className="h-5 w-5 text-green-500" />
            </CardHeader>
            <CardContent className="pt-4 pb-2">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  <span>Unlimited projects</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  <span>Priority support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Change Plan</Button>
              <Button variant="ghost" className="text-red-500 hover:text-red-600 hover:bg-red-50">Cancel Plan</Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Payment Method</h2>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="space-y-1">
                <CardTitle>Credit Card</CardTitle>
                <CardDescription>Visa ending in 4242</CardDescription>
              </div>
              <CreditCard className="h-5 w-5" />
            </CardHeader>
            <CardContent className="pt-4 pb-2">
              <p className="text-sm text-muted-foreground">Your next payment of $19.00 will be processed on June 1, 2025.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">Update Payment Method</Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Billing History</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b">
                  <div>
                    <p className="font-medium">May 1, 2025</p>
                    <p className="text-sm text-muted-foreground">Invoice #INV-2025-05-01</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$19.00</p>
                    <p className="text-sm text-green-500">Paid</p>
                  </div>
                </div>
                <div className="flex justify-between items-center pb-4 border-b">
                  <div>
                    <p className="font-medium">April 1, 2025</p>
                    <p className="text-sm text-muted-foreground">Invoice #INV-2025-04-01</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$19.00</p>
                    <p className="text-sm text-green-500">Paid</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">View All Invoices</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
} 