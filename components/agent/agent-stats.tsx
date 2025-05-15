"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

const data = [
  {
    name: "Mon",
    deliveries: 4,
    earnings: 95,
  },
  {
    name: "Tue",
    deliveries: 6,
    earnings: 145,
  },
  {
    name: "Wed",
    deliveries: 5,
    earnings: 120,
  },
  {
    name: "Thu",
    deliveries: 7,
    earnings: 175,
  },
  {
    name: "Fri",
    deliveries: 8,
    earnings: 200,
  },
  {
    name: "Sat",
    deliveries: 9,
    earnings: 225,
  },
  {
    name: "Sun",
    deliveries: 3,
    earnings: 75,
  },
]

export function AgentStats() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          yAxisId="left"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          label={{ value: "Deliveries", angle: -90, position: "insideLeft" }}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          label={{ value: "Earnings ($)", angle: 90, position: "insideRight" }}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="deliveries" name="Deliveries" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        <Bar yAxisId="right" dataKey="earnings" name="Earnings ($)" fill="#10b981" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
