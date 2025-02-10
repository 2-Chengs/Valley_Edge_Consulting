import Link from "next/link"
import { Menu } from "lucide-react"
import Logo from "./Logo"

export default function Header() {
  return (
    <header className="bg-slate-darker/50 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white flex items-center">
          <div className="w-48 h-16 mr-2">
            <Logo />
          </div>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#services" className="text-gray-200 hover:text-accent transition-colors">
            Services
          </Link>
          <Link href="#about" className="text-gray-200 hover:text-accent transition-colors">
            About
          </Link>
          <Link href="#contact" className="text-gray-200 hover:text-accent transition-colors">
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

