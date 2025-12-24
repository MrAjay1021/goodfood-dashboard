"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import RevenueCard from "@/components/revenue-card"
import OrderTimeCard from "@/components/order-time-card"
import RatingCard from "@/components/rating-card"
import MostOrderedCard from "@/components/most-ordered-card"
import OrderCard from "@/components/order-card"

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex flex-1 flex-col lg:ml-0">
        {/* Header */}
        <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} onMenuClick={() => setSidebarOpen(true)} />

        {/* Dashboard Content */}
        <main className="flex-1 overflow-auto p-4 lg:p-8">
          <h1 className="mb-6 text-2xl font-bold text-gray-900">Dashboard</h1>

          {/* Cards Grid */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Left Column - Revenue */}
            <div className="lg:col-span-2">
              <RevenueCard />
            </div>

            {/* Right Column - Order Time */}
            <div>
              <OrderTimeCard />
            </div>

            {/* Second Row */}
            <div>
              <RatingCard />
            </div>

            <div>
              <MostOrderedCard searchQuery={searchQuery} />
            </div>

            <div>
              <OrderCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
