import Link from "next/link"
import { Menu } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Valley Edge Consulting
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#services" className="text-gray-600 hover:text-gray-800">
            Services
          </Link>
          <Link href="#about" className="text-gray-600 hover:text-gray-800">
            About
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-gray-800">
            Contact
          </Link>
        </nav>
        <button className="md:hidden">
          <Menu className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </header>
  )
}

