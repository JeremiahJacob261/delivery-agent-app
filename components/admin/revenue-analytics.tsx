"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { name: "Jan", revenue: 42500, expenses: 28000, profit: 14500 },
  { name: "Feb", revenue: 45000, expenses: 29500, profit: 15500 },
  { name: "Mar", revenue: 48000, expenses: 31000, profit: 17000 },
  { name: "Apr", revenue: 51000, expenses: 32500, profit: 18500 },
  { name: "May", revenue: 53000, expenses: 33000, profit: 20000 },
  { name: "Jun", revenue: 55000, expenses: 34000, profit: 21000 },
  { name: "Jul", revenue: 58000, expenses: 35500, profit: 22500 },
  { name: "Aug", revenue: 60000, expenses: 36000, profit: 24000 },
  { name: "Sep", revenue: 57000, expenses: 35000, profit: 22000 },
  { name: "Oct", revenue: 54000, expenses: 33500, profit: 20500 },
  { name: "Nov", revenue: 52000, expenses: 32000, profit: 20000 },
  { name: "Dec", revenue: 56000, expenses: 34500, profit: 21500 },
]

export function RevenueAnalytics() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <CardDescription>Year to date</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$631,500</div>
            <p className="text-xs text-muted-foreground">+12.5% from last year</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Order Value</CardTitle>
            <CardDescription>Per delivery</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$24.75</div>
            <p className="text-xs text-muted-foreground">+$1.50 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Profit Margin</CardTitle>
            <CardDescription>After expenses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">38.2%</div>
            <p className="text-xs text-muted-foreground">+2.1% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Monthly Financial Performance</CardTitle>
          <CardDescription>Revenue, expenses, and profit breakdown</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${value / 1000}k`}
              />
              <Tooltip formatter={(value) => [`$${value}`, ""]} />
              <Legend />
              <Bar dataKey="revenue" name="Revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="expenses" name="Expenses" fill="#ef4444" radius={[4, 4, 0, 0]} />
              <Bar dataKey="profit" name="Profit" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
