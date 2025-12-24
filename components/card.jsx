"use client"

export default function Card({ children, className = "" }) {
  return <div className={`rounded-xl bg-white p-5 shadow-sm border border-gray-100 ${className}`}>{children}</div>
}

export function CardHeader({ title, action, subtitle }) {
  return (
    <div className="mb-4 flex items-start justify-between">
      <div>
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        {subtitle && <p className="mt-1 text-sm text-gray-500">{subtitle}</p>}
      </div>
      {action}
    </div>
  )
}

export function CardAction({ children, onClick }) {
  return (
    <button onClick={onClick} className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
      {children}
    </button>
  )
}
