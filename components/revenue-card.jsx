"use client"

import Card from "./card"
import { revenueData } from "@/data/mock"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts"

export default function RevenueCard() {
  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-sm text-[#A6ABC8]">Revenue</p>
          <h2 className="text-2xl font-bold text-[#1e1e1e]">IDR 7.852.000</h2>
          <p className="text-sm">
            <span className="text-green-500">↑ 2.1%</span>
            <span className="text-[#A6ABC8]"> vs last week</span>
          </p>
        </div>
        <button className="px-4 py-2 text-sm text-[#707FDD] border border-[#707FDD] rounded-lg hover:bg-[#707FDD] hover:text-white transition-colors">
          View Report
        </button>
      </div>

      <p className="text-sm text-[#A6ABC8] mb-4">Sales from 1-12 Dec, 2020</p>

      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={revenueData}>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#A6ABC8", fontSize: 12 }}
            />
            <YAxis hide />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e1e1e",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Bar dataKey="revenue" fill="#707FDD" radius={[4, 4, 0, 0]} />
          </BarChart>
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