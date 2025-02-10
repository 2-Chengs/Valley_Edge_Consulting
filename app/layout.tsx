import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Valley Edge Consulting",
  description: "Expert web development, business solutions, and technical implementation",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-gradient-main`}
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_VERCEL_URL ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/992E9364-B46B-4FA2-A82E-54B5E7D3E9B2-wam1i2pxBg3ea4DQ8KyUjMYllZkOwf.jpeg" : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/992E9364-B46B-4FA2-A82E-54B5E7D3E9B2-wam1i2pxBg3ea4DQ8KyUjMYllZkOwf.jpeg"})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        {children}
      </body>
    </html>
  )
}

