import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Valley Edge Consulting</h3>
            <p className="text-gray-400 mb-6">Empowering Vancouver and BC businesses with technology that drives real results.</p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-emerald-400 mr-3" />
                <a href="tel:+12507302398" className="text-gray-300 hover:text-white transition-colors">250-730-2398</a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-emerald-400 mr-3" />
                <a href="mailto:ivan@valleyedgeconsulting.io" className="text-gray-300 hover:text-white transition-colors">ivan@valleyedgeconsulting.io</a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-emerald-400 mr-3 mt-1" />
                <span className="text-gray-300">Vancouver, BC, Canada</span>
              </div>
            </div>
          </div>
          
          {/* Services Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-emerald-400 transition-colors">All Services</Link>
              </li>
              <li>
                <Link href="/services#business-in-a-box" className="text-gray-400 hover:text-emerald-400 transition-colors">Business-in-a-Box</Link>
              </li>
              <li>
                <Link href="/web-services" className="text-gray-400 hover:text-emerald-400 transition-colors">Web Development</Link>
              </li>
              <li>
                <Link href="/it-services" className="text-gray-400 hover:text-emerald-400 transition-colors">IT Support</Link>
              </li>
              <li>
                <Link href="/automation" className="text-gray-400 hover:text-emerald-400 transition-colors">Business Automation</Link>
              </li>
              <li>
                <Link href="/consulting" className="text-gray-400 hover:text-emerald-400 transition-colors">Consulting & Strategy</Link>
              </li>
            </ul>
          </div>
          
          {/* Areas Served */}
          <div>
            <h3 className="text-xl font-bold mb-4">Areas Served</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Vancouver</li>
              <li className="text-gray-400">Lower Mainland</li>
              <li className="text-gray-400">Port Alberni</li>
              <li className="text-gray-400">Nanaimo</li>
              <li className="text-gray-400">Parksville</li>
              <li className="text-gray-400">Vancouver Island</li>
              <li className="text-gray-400">All of BC</li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-emerald-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-emerald-400 transition-colors">About</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-emerald-400 transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-emerald-400 transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Valley Edge Consulting. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

