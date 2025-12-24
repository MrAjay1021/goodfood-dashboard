"use client"

import { useState } from "react"
import { sidebarMenuItems, sidebarOtherItems } from "@/data/mock"
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
import { X } from "lucide-react"

const iconMap = {
  dashboard: DashboardIcon,
  order: FoodOrderIcon,
  menu: ManageMenuIcon,
  review: CustomerReviewIcon,
  settings: SettingsIcon,
  payment: PaymentIcon,
  accounts: AccountsIcon,
  help: HelpIcon,
}

export default function Sidebar({ isOpen, onClose }) {
  const [activeItem, setActiveItem] = useState("dashboard")

  const renderMenuItem = (item) => {
    const Icon = iconMap[item.icon]
    const isActive = activeItem === item.id

    return (
      <button
        key={item.id}
        onClick={() => setActiveItem(item.id)}
        className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
          isActive ? "bg-indigo-100 text-indigo-600" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
        }`}
      >
        {Icon && <Icon className="h-5 w-5" isActive={isActive} />}
        <span>{item.label}</span>
      </button>
    )
  }

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={onClose} />}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-full w-64 flex-col bg-white transition-transform lg:static lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600">
              <span className="text-sm font-bold text-white">G</span>
            </div>
            <span className="text-lg font-bold text-gray-900">GOODFOOD</span>
          </div>
          <button onClick={onClose} className="lg:hidden">
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Menu Section */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          <p className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-gray-400">Menu</p>
          <nav className="space-y-1">{sidebarMenuItems.map(renderMenuItem)}</nav>

          {/* Others Section */}
          <p className="mb-2 mt-8 px-4 text-xs font-semibold uppercase tracking-wider text-gray-400">Others</p>
          <nav className="space-y-1">{sidebarOtherItems.map(renderMenuItem)}</nav>
        </div>
      </aside>
    </>
  )
}
