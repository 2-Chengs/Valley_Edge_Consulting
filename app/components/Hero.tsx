import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Elevating Businesses with Cutting-Edge Solutions</h1>
          <p className="text-xl mb-8">
            Valley Edge Consulting offers expert web development, innovative business solutions, and seamless technical
            implementations to drive your success.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-blue-50 transition duration-300"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

