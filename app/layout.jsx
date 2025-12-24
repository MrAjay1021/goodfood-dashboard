import "./globals.css"

export const metadata = {
  title: "GOODFOOD Dashboard",
  description: "Restaurant management dashboard",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}