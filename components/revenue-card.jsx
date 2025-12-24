"use client"

import Card, { CardHeader, CardAction } from "./card"
import { revenueData } from "@/data/mock"
import { TrendingUp } from "lucide-react"
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from "recharts"

export default function RevenueCard() {
  return (
    <Card>
      <CardHeader title="Revenue" action={<CardAction>View Report</CardAction>} />

      <div className="mb-1">
        <p className="text-2xl font-bold text-gray-900">{revenueData.total}</p>
        <div className="flex items-center gap-1 mt-1">
          <TrendingUp className="h-4 w-4 text-emerald-500" />
          <span className="text-sm font-medium text-emerald-500">{revenueData.change}</span>
          <span className="text-sm text-gray-500">vs last week</span>
        </div>
        <p className="mt-2 text-xs text-gray-500">{revenueData.period}</p>
      </div>

      {/* Bar Chart */}
      <div className="mt-4 h-40">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={revenueData.chartData}>
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#9CA3AF" }} />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {revenueData.chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index === 5 ? "#4F46E5" : "#C7D2FE"} />
              ))}
            </Bar>
          </BarChart>
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
