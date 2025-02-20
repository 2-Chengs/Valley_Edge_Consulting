import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import ContactBanner from "./components/ContactForm"
import Footer from "./components/Footer"
import IntroSection from "./components/IntroSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Valley Edge Consulting - Web Development, Business Solutions, and Technical Implementation",
  description:
    "Valley Edge Consulting offers expert web development, innovative business solutions, and seamless technical implementations to drive your business success.",
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <IntroSection />
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <ContactBanner />
      </main>
      <Footer />
    </div>
  )
}

