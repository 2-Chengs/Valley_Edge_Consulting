import "./globals.css"
import { Inter, Exo_2 } from "next/font/google"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })
const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>{children}</body>
    </html>
  )
}

