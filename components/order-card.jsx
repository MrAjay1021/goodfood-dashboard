"use client"

import Card from "./card"
import { orderData } from "@/data/mock"
import { LineChart, Line, XAxis, ResponsiveContainer, Tooltip } from "recharts"

export default function OrderCard() {
  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-[#1e1e1e]">Order</h3>
        <button className="text-sm text-[#707FDD]">View Report</button>
      </div>

      <h2 className="text-2xl font-bold text-[#1e1e1e]">2.568</h2>
      <p className="text-sm mb-2">
        <span className="text-red-500">↓ 2.1%</span>
        <span className="text-[#A6ABC8]"> vs last week</span>
      </p>
      <p className="text-sm text-[#A6ABC8] mb-4">Sales from 1-6 Dec, 2020</p>

      <div className="h-24">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={orderData}>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#A6ABC8", fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e1e1e",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Line
              type="monotone"
              dataKey="orders"
              stroke="#707FDD"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="orders"
              stroke="#A6ABC8"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#707FDD]"></div>
          <span className="text-sm text-[#A6ABC8]">Last 6 days</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gray-200"></div>
          <span className="text-sm text-[#A6ABC8]">Last Week</span>
        </div>
      </div>
    </Card>
  )
}