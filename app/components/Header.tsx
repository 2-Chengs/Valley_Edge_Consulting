import Link from "next/link"
import { Menu } from "lucide-react"
import Logo from "./Logo"

export default function Header() {
  return (
    <header className="bg-[#426A56] shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white flex items-center">
          <div className="w-48 h-16 mr-2">
            <Logo />
          </div>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#services" className="text-white hover:text-gray-200">
            Services
          </Link>
          <Link href="#about" className="text-white hover:text-gray-200">
            About
          </Link>
          <Link href="#contact" className="text-white hover:text-gray-200">
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

