"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Exo_2 } from "next/font/google"
import Logo from "./Logo"

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700"],
})

export default function IntroSection() {
  return (
    <section className="h-screen bg-black relative flex flex-col items-center justify-center">
      {/* Logo Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-[800px] max-w-[90vw]"
      >
        <Logo />
      </motion.div>

      {/* Tagline Animation */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className={`${exo2.className} text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-12 text-center tracking-wide`}
      >
        <span className="font-light">Bring Your Business to the</span>
        <br />
        <span className="font-semibold bg-gradient-to-r from-emerald-500 to-teal-500 text-transparent bg-clip-text">
          EDGE
        </span>
      </motion.h2>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          delay: 2,
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="absolute bottom-12 text-white"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  )
}

