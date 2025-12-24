export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-xl p-5 shadow-sm ${className}`}>
      {children}
    </div>
  )
}