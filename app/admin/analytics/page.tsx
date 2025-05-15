import { AdminHeader } from "@/components/admin-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DeliveryAnalytics } from "@/components/admin/delivery-analytics"
import { RevenueAnalytics } from "@/components/admin/revenue-analytics"
import { AgentPerformance } from "@/components/admin/agent-performance"

export default function AnalyticsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <AdminHeader title="Analytics" />
      <Tabs defaultValue="delivery" className="space-y-4">
        <TabsList>
          <TabsTrigger value="delivery">Delivery Analytics</TabsTrigger>
          <TabsTrigger value="revenue">Revenue Analytics</TabsTrigger>
          <TabsTrigger value="performance">Agent Performance</TabsTrigger>
        </TabsList>
        <TabsContent value="delivery" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Delivery Metrics</CardTitle>
              <CardDescription>Analyze delivery performance across the platform.</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <DeliveryAnalytics />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="revenue" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Breakdown</CardTitle>
              <CardDescription>Analyze revenue streams and financial performance.</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <RevenueAnalytics />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Agent Performance</CardTitle>
              <CardDescription>Analyze agent efficiency and delivery metrics.</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <AgentPerformance />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
