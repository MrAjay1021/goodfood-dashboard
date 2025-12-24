"use client"

import Card, { CardHeader } from "./card"
import { mostOrderedFood } from "@/data/mock"
import { SaladIcon } from "./icons/food-icons"

export default function MostOrderedCard({ searchQuery = "" }) {
  // Filter food items based on search query
  const filteredFood = mostOrderedFood.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <Card>
      <CardHeader title="Most Ordered Food" subtitle="Adipiscing elit, sed do eiusmod tempor" />

      {/* Food List */}
      <div className="space-y-4">
        {filteredFood.length > 0 ? (
          filteredFood.map((item, index) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-lg p-2 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                {index === 0 ? (
                  <SaladIcon className="h-12 w-12 rounded-lg object-cover" />
                ) : (
                  <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center">
                    {/* Empty placeholder for manual icon placement */}
                  </div>
                )}
                <span className="text-sm font-medium text-gray-900">{item.name}</span>
              </div>
              <span className="text-sm text-gray-500">{item.price}</span>
            </div>
          ))
        ) : (
          <p className="text-center text-sm text-gray-500 py-4">No food items found matching "{searchQuery}"</p>
        )}
      </div>
    </Card>
  )
}
