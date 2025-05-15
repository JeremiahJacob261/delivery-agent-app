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

const data = [
  { name: "Jul", earnings: 2850, deliveries: 118 },
  { name: "Aug", earnings: 3100, deliveries: 127 },
  { name: "Sep", earnings: 2950, deliveries: 122 },
  { name: "Oct", earnings: 3250, deliveries: 135 },
  { name: "Nov", earnings: 3400, deliveries: 140 },
  { name: "Dec", earnings: 3450, deliveries: 142 },
]

export function EarningsChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          yAxisId="left"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <YAxis yAxisId="right" orientation="right" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip
          formatter={(value, name) => {
            if (name === "earnings") return [`$${value}`, "Earnings"]
            return [value, "Deliveries"]
          }}
        />
        <Legend />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="earnings"
          name="Earnings ($)"
          stroke="#3b82f6"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="deliveries"
          name="Deliveries"
          stroke="#10b981"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
