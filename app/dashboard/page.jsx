"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import RevenueCard from "@/components/revenue-card"
import OrderTimeCard from "@/components/order-time-card"
import RatingCard from "@/components/rating-card"
import MostOrderedCard from "@/components/most-ordered-card"
import OrderCard from "@/components/order-card"
import { mostOrderedFood } from "@/data/mock"

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFood = mostOrderedFood.filter((food) =>
    food.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex min-h-screen bg-[#f8f9fc]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-semibold text-[#1e1e1e] mb-6">Dashboard</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <RevenueCard />
            </div>
            <div>
              <OrderTimeCard />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <div>
              <RatingCard />
            </div>
            <div>
              <MostOrderedCard foods={filteredFood} />
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