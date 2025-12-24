import Card from "./card"
import { SaladIcon, FoodPlaceholder } from "./icons/food-icons"

export default function MostOrderedCard({ foods }) {
  return (
    <Card>
      <h3 className="font-semibold text-[#1e1e1e] mb-1">Most Ordered Food</h3>
      <p className="text-sm text-[#A6ABC8] mb-4">
        Adipiscing elit, sed do eiusmod tempor
      </p>

      <div className="space-y-4">
        {foods.map((food, index) => (
          <div key={food.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {index === 0 ? <SaladIcon /> : <FoodPlaceholder />}
              <span className="text-sm text-[#1e1e1e]">{food.name}</span>
            </div>
            <span className="text-sm text-[#A6ABC8]">
              IDR {food.price.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </Card>
  )
}