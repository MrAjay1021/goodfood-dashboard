import Card from "./card"
import { ratingData } from "@/data/mock"

export default function RatingCard() {
  return (
    <Card>
      <h3 className="font-semibold text-[#1e1e1e] mb-1">Your Rating</h3>
      <p className="text-sm text-[#A6ABC8] mb-6">
        Lorem ipsum dolor sit amet, consectetur
      </p>

      <div className="relative h-64 flex items-center justify-center">
        {/* Hygiene bubble - top left */}
        <div
          className="absolute flex flex-col items-center justify-center rounded-full bg-[#707FDD] text-white"
          style={{
            width: "100px",
            height: "100px",
            top: "10px",
            left: "20px",
          }}
        >
          <span className="text-2xl font-bold">{ratingData.hygiene}%</span>
          <span className="text-xs">Hygiene</span>
        </div>

        {/* Food Taste bubble - center right */}
        <div
          className="absolute flex flex-col items-center justify-center rounded-full bg-[#7EC8E3] text-white"
          style={{
            width: "130px",
            height: "130px",
            top: "30px",
            right: "10px",
          }}
        >
          <span className="text-3xl font-bold">{ratingData.foodTaste}%</span>
          <span className="text-sm">Food Taste</span>
        </div>

        {/* Packaging bubble - bottom left */}
        <div
          className="absolute flex flex-col items-center justify-center rounded-full bg-[#FFB347] text-white"
          style={{
            width: "90px",
            height: "90px",
            bottom: "10px",
            left: "40px",
          }}
        >
          <span className="text-xl font-bold">{ratingData.packaging}%</span>
          <span className="text-xs">Packaging</span>
        </div>
      </div>
    </Card>
  )
}