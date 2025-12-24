export const revenueData = {
  total: "IDR 7.852.000",
  change: "+2.1%",
  period: "Sales from 1-12 Dec, 2020",
  chartData: [
    { day: "01", value: 45 },
    { day: "02", value: 52 },
    { day: "03", value: 38 },
    { day: "04", value: 65 },
    { day: "05", value: 78 },
    { day: "06", value: 85 },
    { day: "07", value: 45 },
    { day: "08", value: 38 },
    { day: "09", value: 55 },
    { day: "10", value: 42 },
    { day: "11", value: 68 },
    { day: "12", value: 35 },
  ],
}

export const orderTimeData = {
  period: "From 1-6 Dec, 2020",
  segments: [
    { name: "Afternoon", value: 40, orders: 1890, time: "1pm - 4pm", color: "#4F46E5" },
    { name: "Evening", value: 32, orders: 1512, time: "5pm - 9pm", color: "#818CF8" },
    { name: "Morning", value: 28, orders: 1324, time: "8am - 12pm", color: "#C7D2FE" },
  ],
}

export const ratingData = {
  description: "Lorem ipsum dolor sit amet, consectetur",
  ratings: [
    { label: "Hygiene", value: 85, color: "#8B5CF6", size: 140 },
    { label: "Food Taste", value: 85, color: "#60A5FA", size: 180 },
    { label: "Packaging", value: 92, color: "#34D399", size: 120 },
  ],
}

export const mostOrderedFood = [
  { id: 1, name: "Fresh Salad Bowl", price: "IDR 45.000", image: "/fresh-salad-bowl.jpg" },
  { id: 2, name: "Chicken Noodles", price: "IDR 75.000", image: "/chicken-noodles.png" },
  { id: 3, name: "Smoothie Fruits", price: "IDR 45.000", image: "/smoothie-fruits.jpg" },
  { id: 4, name: "Hot Chicken Wings", price: "IDR 45.000", image: "/hot-chicken-wings.jpg" },
]

export const orderData = {
  total: "2.568",
  change: "-2.1%",
  period: "Sales from 1-6 Dec, 2020",
  chartData: [
    { day: "01", value: 35 },
    { day: "02", value: 42 },
    { day: "03", value: 28 },
    { day: "04", value: 55 },
    { day: "05", value: 38 },
    { day: "06", value: 48 },
  ],
}

export const sidebarMenuItems = [
  { id: "dashboard", label: "Dashboard", icon: "dashboard", active: true },
  { id: "food-order", label: "Food Order", icon: "order", active: false },
  { id: "manage-menu", label: "Manage Menu", icon: "menu", active: false },
  { id: "customer-review", label: "Customer Review", icon: "review", active: false },
]

export const sidebarOtherItems = [
  { id: "settings", label: "Settings", icon: "settings", active: false },
  { id: "payment", label: "Payment", icon: "payment", active: false },
  { id: "accounts", label: "Accounts", icon: "accounts", active: false },
  { id: "help", label: "Help", icon: "help", active: false },
]

export const userProfile = {
  name: "Delicious Burger",
  avatar: "/burger-restaurant-logo.png",
}
