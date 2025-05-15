"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

const data = [
  {
    name: "Jan 1",
    total: 1200,
    deliveries: 40,
  },
  {
    name: "Jan 2",
    total: 2100,
    deliveries: 60,
  },
  {
    name: "Jan 3",
    total: 1800,
    deliveries: 50,
  },
  {
    name: "Jan 4",
    total: 1600,
    deliveries: 45,
  },
  {
    name: "Jan 5",
    total: 2400,
    deliveries: 75,
  },
  {
    name: "Jan 6",
    total: 1500,
    deliveries: 42,
  },
  {
    name: "Jan 7",
    total: 2000,
    deliveries: 58,
  },
  {
    name: "Jan 8",
    total: 2200,
    deliveries: 68,
  },
  {
    name: "Jan 9",
    total: 2800,
    deliveries: 85,
  },
  {
    name: "Jan 10",
    total: 3000,
    deliveries: 92,
  },
  {
    name: "Jan 11",
    total: 2700,
    deliveries: 82,
  },
  {
    name: "Jan 12",
    total: 2500,
    deliveries: 78,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip />
        <Legend />
        <Bar dataKey="total" name="Revenue ($)" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        <Bar dataKey="deliveries" name="Deliveries" fill="#10b981" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
