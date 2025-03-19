import Link from "next/link"
import { Home } from "lucide-react"
import type { Metadata } from "next"
import Header from "./components/Header"
import Footer from "./components/Footer"

export const metadata: Metadata = {
  title: "Page Not Found | Port Alberni Web Design & IT Services",
  description: "Sorry, the page you're looking for doesn't exist. Return to Valley Edge Consulting for professional web design and IT services in Port Alberni, BC.",
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950">
      <Header />
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="max-w-3xl mx-auto text-center py-20">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl opacity-50"></div>
            <h1 className="text-8xl font-bold text-white relative">404</h1>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Page Not Found</h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Sorry, the page you're looking for doesn't exist. If you're looking for web design or IT services in Port Alberni, Vancouver Island, please return to our main page.
          </p>
          
          <div className="space-y-6">
            <p className="text-gray-400">
              We offer expert web design and IT solutions for businesses in Port Alberni, Nanaimo, Parksville, Tofino, Ucluelet, Courtenay, and surrounding areas on Vancouver Island.
            </p>
            
            <Link href="/" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
              <Home className="mr-2 h-5 w-5" />
              Return to Homepage
            </Link>
            
            <div className="pt-8 mt-8 border-t border-gray-800 text-gray-500 text-sm">
              <p>Looking for web design, IT support, or business technology solutions in Port Alberni?</p>
              <p>
                <Link href="/contact" className="text-emerald-400 hover:text-emerald-300">
                  Contact us
                </Link> today to see how we can help your business.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 