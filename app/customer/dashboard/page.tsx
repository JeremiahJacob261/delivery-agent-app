import { CustomerHeader } from "@/components/customer-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, MapPin, Package, Plus, Truck } from "lucide-react"
import Link from "next/link"
import { DeliveryHistory } from "@/components/customer/delivery-history"

export default function CustomerDashboard() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <CustomerHeader title="Dashboard" />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Deliveries</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">1 in transit, 1 pending pickup</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Deliveries</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
        <Card className="md:col-span-2 lg:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Delivery</CardTitle>
            <Plus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="pb-2">
            <p className="text-sm text-muted-foreground">Need to send a package? Create a new delivery request.</p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/customer/new-delivery">
                Create Request <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Active Deliveries</CardTitle>
            <CardDescription>Track your current deliveries in real-time.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="rounded-lg border p-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold">Order #ORD-001</h3>
                    <p className="text-sm text-muted-foreground">Small Package - 2.5 lbs</p>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100/80">In Transit</Badge>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">From</p>
                      <p className="text-sm text-muted-foreground">123 Main St, Anytown, USA</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">To</p>
                      <p className="text-sm text-muted-foreground">456 Oak Ave, Somewhere, USA</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">ETA: 2:45 PM</span>
                  </div>
                  <Button size="sm">Track</Button>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold">Order #ORD-002</h3>
                    <p className="text-sm text-muted-foreground">Medium Package - 8.3 lbs</p>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80">Pending Pickup</Badge>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">From</p>
                      <p className="text-sm text-muted-foreground">789 Pine St, Nowhere, USA</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">To</p>
                      <p className="text-sm text-muted-foreground">321 Maple Dr, Everywhere, USA</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Pickup scheduled: 3:30 PM</span>
                  </div>
                  <Button size="sm" variant="outline">
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Recent Deliveries</CardTitle>
            <CardDescription>Your delivery history from the past 30 days.</CardDescription>
          </CardHeader>
          <CardContent>
            <DeliveryHistory />
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button variant="outline" asChild>
              <Link href="/customer/deliveries">View All Deliveries</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
