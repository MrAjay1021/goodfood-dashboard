"use client"

import { useState } from "react"
import { SearchIcon, NotificationIcon, ArrowDownIcon, MenuIcon } from "./icons/header-icons"
import { userProfile } from "@/data/mock"

export default function Header({ searchQuery, onSearchChange, onMenuClick }) {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3 lg:px-8">
      {/* Mobile menu button */}
      <button onClick={onMenuClick} className="mr-4 lg:hidden">
        <MenuIcon className="h-6 w-6" />
      </button>

      {/* Search Bar */}
      <div className="relative flex-1 max-w-xl">
        <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 ml-4">
        {/* User Profile */}
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-2 rounded-lg px-2 py-1 hover:bg-gray-100"
          >
            <img src="/images/header-burger.png" alt={userProfile.name} className="h-8 w-8 rounded-full object-cover" />
            <span className="hidden text-sm font-medium text-gray-700 md:block">{userProfile.name}</span>
            <ArrowDownIcon className="h-2 w-3" />
          </button>

          {showDropdown && (
            <div className="absolute right-0 top-full mt-2 w-48 rounded-lg border border-gray-200 bg-white py-2 shadow-lg">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Profile
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Settings
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Logout
              </a>
            </div>
          )}
        </div>

        {/* Notification Bell */}
        <button className="relative rounded-lg p-2 hover:bg-gray-100">
          <NotificationIcon className="h-5 w-5" />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
        </button>
      </div>
    </header>
  )
}
