"use client"

import { useState } from "react"
import Card, { CardHeader, CardAction } from "./card"
import { orderTimeData } from "@/data/mock"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

export default function OrderTimeCard() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeSegment = orderTimeData.segments[activeIndex]

  return (
    <Card>
      <CardHeader title="Order Time" subtitle={orderTimeData.period} action={<CardAction>View Report</CardAction>} />

      {/* Pie Chart */}
      <div className="relative h-48">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={orderTimeData.segments}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              dataKey="value"
              onMouseEnter={(_, index) => setActiveIndex(index)}
            >
              {orderTimeData.segments.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Tooltip overlay */}
        <div className="absolute right-4 top-8 rounded-lg bg-indigo-600 px-3 py-2 text-white shadow-lg">
          <p className="text-sm font-medium">{activeSegment.name}</p>
          <p className="text-xs opacity-80">{activeSegment.time}</p>
          <p className="mt-1 text-lg font-bold">{activeSegment.orders.toLocaleString()} orders</p>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 flex justify-center gap-6">
        {orderTimeData.segments.map((segment, index) => (
          <div
            key={segment.name}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setActiveIndex(index)}
          >
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: segment.color }} />
            <span className="text-xs text-gray-600">{segment.name}</span>
            <span className="text-xs font-medium text-gray-900">{segment.value}%</span>
          </div>
        ))}
      </div>
    </Card>
  )
}
