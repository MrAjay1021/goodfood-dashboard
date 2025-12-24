"use client"

import { useState } from "react"
import Card from "./card"
import { orderTimeData } from "@/data/mock"
import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from "recharts"

const renderActiveShape = (props) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload } = props

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <text x={cx + 80} y={cy - 20} textAnchor="middle" fill="#1e1e1e" fontSize={14} fontWeight="bold">
        {payload.name}
      </text>
      <text x={cx + 80} y={cy} textAnchor="middle" fill="#A6ABC8" fontSize={12}>
        1pm - 4pm
      </text>
      <text x={cx + 80} y={cy + 25} textAnchor="middle" fill="#1e1e1e" fontSize={16} fontWeight="bold">
        {payload.orders.toLocaleString()} orders
      </text>
    </g>
  )
}

export default function OrderTimeCard() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold text-[#1e1e1e]">Order Time</h3>
          <p className="text-sm text-[#A6ABC8]">From 1-6 Dec, 2020</p>
        </div>
        <button className="px-4 py-2 text-sm text-[#707FDD] border border-[#707FDD] rounded-lg hover:bg-[#707FDD] hover:text-white transition-colors">
          View Report
        </button>
      </div>

      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={orderTimeData}
              cx="35%"
              cy="50%"
              innerRadius={50}
              outerRadius={70}
              dataKey="value"
              onMouseEnter={(_, index) => setActiveIndex(index)}
            >
              {orderTimeData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-between mt-4">
        {orderTimeData.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            ></div>
            <div>
              <p className="text-sm text-[#1e1e1e]">{item.name}</p>
              <p className="text-sm text-[#A6ABC8]">{item.value}%</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}