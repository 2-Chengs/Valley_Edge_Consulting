"use client"

import { Phone } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactBanner() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-primary rounded-xl p-8 shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Let's Talk About Your Project
            </h2>
            <p className="text-xl text-gray-100 mb-6">
              Ready to bring your business to the edge? Call us now:
            </p>
            <a
              href="tel:1-250-730-2398"
              className="inline-flex items-center px-6 py-4 text-2xl font-bold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              <Phone className="w-8 h-8 mr-3" />
              1-250-730-2398
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

