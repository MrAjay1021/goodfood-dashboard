"use client"

import Card, { CardHeader } from "./card"
import { ratingData } from "@/data/mock"

export default function RatingCard() {
  return (
    <Card>
      <CardHeader title="Your Rating" subtitle={ratingData.description} />

      {/* Rating Bubbles */}
      <div className="relative h-64 flex items-center justify-center">
        {/* Hygiene Bubble - Top Left */}
        <div
          className="absolute flex flex-col items-center justify-center rounded-full text-white"
          style={{
            width: ratingData.ratings[0].size,
            height: ratingData.ratings[0].size,
            backgroundColor: ratingData.ratings[0].color,
            left: "10%",
            top: "5%",
          }}
        >
          <span className="text-2xl font-bold">{ratingData.ratings[0].value}%</span>
          <span className="text-xs">{ratingData.ratings[0].label}</span>
        </div>

        {/* Food Taste Bubble - Center Right */}
        <div
          className="absolute flex flex-col items-center justify-center rounded-full text-white"
          style={{
            width: ratingData.ratings[1].size,
            height: ratingData.ratings[1].size,
            backgroundColor: ratingData.ratings[1].color,
            right: "5%",
            top: "20%",
          }}
        >
          <span className="text-3xl font-bold">{ratingData.ratings[1].value}%</span>
          <span className="text-sm">{ratingData.ratings[1].label}</span>
        </div>

        {/* Packaging Bubble - Bottom Left */}
        <div
          className="absolute flex flex-col items-center justify-center rounded-full text-white"
          style={{
            width: ratingData.ratings[2].size,
            height: ratingData.ratings[2].size,
            backgroundColor: ratingData.ratings[2].color,
            left: "5%",
            bottom: "0%",
          }}
        >
          <span className="text-xl font-bold">{ratingData.ratings[2].value}%</span>
          <span className="text-xs">{ratingData.ratings[2].label}</span>
        </div>
      </div>
    </Card>
  )
}
