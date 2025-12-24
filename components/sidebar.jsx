"use client"

import { useState } from "react"
import {
  DashboardIcon,
  FoodOrderIcon,
  ManageMenuIcon,
  CustomerReviewIcon,
  SettingsIcon,
  PaymentIcon,
  AccountsIcon,
  HelpIcon,
} from "./icons/sidebar-icons"

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: DashboardIcon, section: "MENU" },
  { id: "food-order", label: "Food Order", icon: FoodOrderIcon, section: "MENU" },
  { id: "manage-menu", label: "Manage Menu", icon: ManageMenuIcon, section: "MENU" },
  { id: "customer-review", label: "Customer Review", icon: CustomerReviewIcon, section: "MENU" },
  { id: "settings", label: "Settings", icon: SettingsIcon, section: "OTHERS" },
  { id: "payment", label: "Payment", icon: PaymentIcon, section: "OTHERS" },
  { id: "accounts", label: "Accounts", icon: AccountsIcon, section: "OTHERS" },
  { id: "help", label: "Help", icon: HelpIcon, section: "OTHERS" },
]

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("dashboard")

  const menuSection = menuItems.filter((item) => item.section === "MENU")
  const othersSection = menuItems.filter((item) => item.section === "OTHERS")

  return (
    <aside className="hidden lg:flex flex-col w-56 bg-white border-r border-gray-100 min-h-screen">
      <div className="p-5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#707FDD] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">G</span>
          </div>
          <span className="font-semibold text-[#1e1e1e]">GOODFOOD</span>
        </div>
      </div>

      <nav className="flex-1 px-3">
        <div className="mb-6">
          <p className="text-xs text-[#A6ABC8] font-medium px-3 mb-2">MENU</p>
          {menuSection.map((item) => {
            const Icon = item.icon
            const isActive = activeItem === item.id
            return (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-colors ${
                  isActive
                    ? "bg-[#707FDD] text-white"
                    : "text-[#A6ABC8] hover:bg-gray-50"
                }`}
              >
                <Icon isActive={isActive} />
                <span className={`text-sm ${isActive ? "text-white" : ""}`}>
                  {item.label}
                </span>
              </button>
            )
          })}
        </div>

        <div>
          <p className="text-xs text-[#A6ABC8] font-medium px-3 mb-2">OTHERS</p>
          {othersSection.map((item) => {
            const Icon = item.icon
            const isActive = activeItem === item.id
            return (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-colors ${
                  isActive
                    ? "bg-[#707FDD] text-white"
                    : "text-[#A6ABC8] hover:bg-gray-50"
                }`}
              >
                <Icon isActive={isActive} />
                <span className={`text-sm ${isActive ? "text-white" : ""}`}>
                  {item.label}
                </span>
              </button>
            )
          })}
        </div>
      </nav>
    </aside>
  )
}