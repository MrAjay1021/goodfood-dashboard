export default function Sidebar({ menuItems, otherItems }) {
  return (
    <aside className="w-64 bg-white border-r border-gray-100 p-8 hidden md:flex md:flex-col">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-12">
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
          <span className="text-white font-bold text-xl">G</span>
        </div>
        <span className="font-bold text-xl text-dark tracking-wide">GOODFOOD</span>
      </div>

      {/* Menu Section */}
      <div className="flex-1">
        <p className="text-xs text-secondary font-medium uppercase tracking-wider mb-6 pl-4">Menu</p>
        <ul className="space-y-2">
          {menuItems.map(item => (
            <li key={item.id}>
              <div className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 cursor-pointer ${
                item.active 
                  ? 'bg-primary text-white shadow-lg shadow-blue-100' 
                  : 'text-secondary hover:bg-gray-50'
              }`}>
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Others Section */}
      <div className="mt-8">
        <p className="text-xs text-secondary font-medium uppercase tracking-wider mb-6 pl-4">Others</p>
        <ul className="space-y-2">
          {otherItems.map(item => (
            <li key={item.id}>
              <div className="flex items-center gap-4 px-4 py-3.5 rounded-xl text-secondary hover:bg-gray-50 transition-all duration-200 cursor-pointer">
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}