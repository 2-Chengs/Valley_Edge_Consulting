"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black shadow-lg" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          Valley Edge Consulting
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#services" className="text-white hover:text-gray-300 transition-colors">
            Services
          </Link>
          <Link href="#about" className="text-white hover:text-gray-300 transition-colors">
            About
          </Link>
          <Link href="#contact" className="text-white hover:text-gray-300 transition-colors">
            Contact
          </Link>
        </nav>
        <button className="md:hidden">
          <Menu className="h-6 w-6 text-white" />
        </button>
      </div>
    </header>
  )
}

