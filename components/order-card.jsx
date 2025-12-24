"use client"

import Card, { CardHeader, CardAction } from "./card"
import { orderData } from "@/data/mock"
import { TrendingDown } from "lucide-react"
import { LineChart, Line, XAxis, ResponsiveContainer } from "recharts"

export default function OrderCard() {
  return (
    <Card>
      <CardHeader title="Order" action={<CardAction>View Report</CardAction>} />

      <div className="mb-1">
        <p className="text-2xl font-bold text-gray-900">{orderData.total}</p>
        <div className="flex items-center gap-1 mt-1">
          <TrendingDown className="h-4 w-4 text-red-500" />
          <span className="text-sm font-medium text-red-500">{orderData.change}</span>
          <span className="text-sm text-gray-500">vs last week</span>
        </div>
        <p className="mt-2 text-xs text-gray-500">{orderData.period}</p>
      </div>

      {/* Line Chart */}
      <div className="mt-4 h-24">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={orderData.chartData}>
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#9CA3AF" }} />
            <Line type="monotone" dataKey="value" stroke="#4F46E5" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="mt-4 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-indigo-600" />
          <span className="text-xs text-gray-500">Last 6 days</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-gray-300" />
          <span className="text-xs text-gray-500">Last Week</span>
        </div>
      </div>
    </Card>
  )
}
