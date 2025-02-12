import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Elevating Businesses with Cutting-Edge Solutions</h1>
          <p className="text-xl mb-8 text-gray-300">
            Valley Edge Consulting offers expert web development, innovative business solutions, and seamless technical
            implementations to drive your success.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-opacity-80 transition-colors duration-300"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

