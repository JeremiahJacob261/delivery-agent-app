"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const topAgents = [
  { name: "Alex Johnson", deliveries: 142, rating: 4.9, onTime: "98%", earnings: "$3,450" },
  { name: "Maria Garcia", deliveries: 137, rating: 4.8, onTime: "97%", earnings: "$3,280" },
  { name: "David Lee", deliveries: 129, rating: 4.9, onTime: "99%", earnings: "$3,100" },
  { name: "Sarah Wilson", deliveries: 124, rating: 4.7, onTime: "96%", earnings: "$2,980" },
  { name: "Michael Brown", deliveries: 118, rating: 4.8, onTime: "97%", earnings: "$2,850" },
]

const data = [
  { name: "0-10", count: 12 },
  { name: "11-20", count: 18 },
  { name: "21-30", count: 29 },
  { name: "31-40", count: 35 },
  { name: "41-50", count: 27 },
  { name: "51-60", count: 15 },
  { name: "61+", count: 8 },
]

export function AgentPerformance() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Agents</CardTitle>
            <CardDescription>Currently on duty</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87</div>
            <p className="text-xs text-muted-foreground">+12 from yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
            <CardDescription>Across all agents</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.7/5.0</div>
            <p className="text-xs text-muted-foreground">+0.2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Deliveries Per Agent</CardTitle>
            <CardDescription>Monthly average</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78</div>
            <p className="text-xs text-muted-foreground">+5 from last month</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Top Performing Agents</CardTitle>
          <CardDescription>Based on delivery count and ratings</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Agent</TableHead>
                <TableHead>Deliveries</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>On-Time</TableHead>
                <TableHead>Earnings</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topAgents.map((agent) => (
                <TableRow key={agent.name}>
                  <TableCell className="font-medium">{agent.name}</TableCell>
                  <TableCell>{agent.deliveries}</TableCell>
                  <TableCell>{agent.rating}</TableCell>
                  <TableCell>{agent.onTime}</TableCell>
                  <TableCell>{agent.earnings}</TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100/80">Active</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Deliveries Per Agent Distribution</CardTitle>
          <CardDescription>Number of agents by delivery count</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                label={{ value: "Deliveries per Month", position: "insideBottom", offset: -5 }}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                label={{ value: "Number of Agents", angle: -90, position: "insideLeft" }}
              />
              <Tooltip />
              <Bar dataKey="count" name="Number of Agents" fill="#8884d8" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
