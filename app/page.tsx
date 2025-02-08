import Head from "next/head"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
      <Head>
        <title>Valley Edge Consulting - Web Development, Business Solutions, and Technical Implementation</title>
        <meta
          name="description"
          content="Valley Edge Consulting offers expert web development, innovative business solutions, and seamless technical implementations to drive your business success."
        />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Services />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </>
  )
}

