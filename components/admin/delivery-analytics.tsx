"use client"

import {
  Line,
  LineChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { name: "Jan", onTime: 85, delayed: 15, cancelled: 5 },
  { name: "Feb", onTime: 88, delayed: 12, cancelled: 4 },
  { name: "Mar", onTime: 90, delayed: 10, cancelled: 3 },
  { name: "Apr", onTime: 92, delayed: 8, cancelled: 2 },
  { name: "May", onTime: 89, delayed: 11, cancelled: 4 },
  { name: "Jun", onTime: 91, delayed: 9, cancelled: 3 },
  { name: "Jul", onTime: 93, delayed: 7, cancelled: 2 },
  { name: "Aug", onTime: 94, delayed: 6, cancelled: 1 },
  { name: "Sep", onTime: 92, delayed: 8, cancelled: 2 },
  { name: "Oct", onTime: 91, delayed: 9, cancelled: 3 },
  { name: "Nov", onTime: 93, delayed: 7, cancelled: 2 },
  { name: "Dec", onTime: 95, delayed: 5, cancelled: 1 },
]

export function DeliveryAnalytics() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">On-Time Delivery Rate</CardTitle>
            <CardDescription>Average across all deliveries</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">91.8%</div>
            <p className="text-xs text-muted-foreground">+2.1% from last year</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Delivery Time</CardTitle>
            <CardDescription>From pickup to delivery</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">27 min</div>
            <p className="text-xs text-muted-foreground">-3 min from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Delivery Success Rate</CardTitle>
            <CardDescription>Completed vs. cancelled</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">97.5%</div>
            <p className="text-xs text-muted-foreground">+0.8% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Yearly Delivery Performance</CardTitle>
          <CardDescription>Tracking on-time, delayed, and cancelled deliveries</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} unit="%" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="onTime" name="On Time (%)" stroke="#4ade80" strokeWidth={2} />
              <Line type="monotone" dataKey="delayed" name="Delayed (%)" stroke="#f97316" strokeWidth={2} />
              <Line type="monotone" dataKey="cancelled" name="Cancelled (%)" stroke="#ef4444" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
