import type { Metadata } from "next"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Mail, Phone, MapPin, Send, Clock, ArrowRight, ChevronRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Contact Valley Edge Consulting | Vancouver Web Development & IT Services",
  description: "Contact us for professional web development and IT services in Vancouver, BC. Also serving Port Alberni and Vancouver Island businesses including Nanaimo, Parksville, Tofino, Ucluelet and Courtenay.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-emerald-950/30 to-gray-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-gray-900/0 to-gray-900/0"></div>
          <div className="container relative mx-auto px-4 z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1 bg-emerald-900/50 text-emerald-400 rounded-full text-sm font-semibold mb-6">
                CONNECT WITH US
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
                Let's <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-transparent bg-clip-text">Transform</span> Your Business Together
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-10">
                Ready to elevate your business with the right technology solutions? Reach out and let's start a conversation about your goals.
              </p>
            </div>
          </div>
          
          {/* Animated elements */}
          <div className="absolute -bottom-8 left-0 right-0 h-16 bg-gray-950 skew-y-3"></div>
        </section>
        
        {/* Contact Cards Section */}
        <section className="py-24 bg-gray-950 relative -mt-1">
          <div className="absolute -right-64 -top-64 w-96 h-96 bg-emerald-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -left-64 bottom-32 w-96 h-96 bg-teal-900/20 rounded-full blur-3xl"></div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                {[
                  {
                    icon: <Mail className="h-8 w-8 text-emerald-400" />,
                    title: "Email",
                    info: "ivan@valleyedgeconsulting.io",
                    action: "Send an Email",
                    link: "mailto:ivan@valleyedgeconsulting.io",
                    color: "from-emerald-500/20 to-teal-500/20",
                    border: "hover:border-emerald-500/40"
                  },
                  {
                    icon: <Phone className="h-8 w-8 text-blue-400" />,
                    title: "Phone",
                    info: "250-730-2398",
                    action: "Give Us a Call",
                    link: "tel:+12507302398",
                    color: "from-blue-500/20 to-cyan-500/20",
                    border: "hover:border-blue-500/40"
                  },
                  {
                    icon: <MapPin className="h-8 w-8 text-amber-400" />,
                    title: "Vancouver Office",
                    info: "909 Mainland St, Vancouver BC V6B 1T7",
                    action: "Get Directions",
                    link: "https://maps.google.com/?q=909+Mainland+St,+Vancouver+BC+V6B+1T7",
                    color: "from-amber-500/20 to-orange-500/20",
                    border: "hover:border-amber-500/40"
                  },
                ].map((item, index) => (
                  <div key={index} className={`bg-gray-800/50 rounded-2xl p-8 border border-gray-700 shadow-xl backdrop-blur-sm transition-all duration-300 ${item.border} hover:transform hover:-translate-y-1`}>
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl mb-6`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 mb-6">{item.info}</p>
                    <a href={item.link} className="inline-flex items-center text-emerald-400 font-semibold hover:text-emerald-300 transition-colors">
                      {item.action} <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                ))}
              </div>
              
              {/* Contact Form */}
              <div className="bg-gray-800/30 rounded-3xl overflow-hidden border border-gray-700 shadow-xl backdrop-blur-sm">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div className="lg:col-span-2 bg-gradient-to-br from-emerald-900/50 to-teal-900/50 p-8 md:p-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                    <p className="text-gray-300 mb-8">
                      Fill out the form and we'll get back to you as soon as possible. We're looking forward to hearing from you!
                    </p>
                    
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <Clock className="h-6 w-6 text-emerald-400" />
                        </div>
                        <div className="ml-4">
                          <h4 className="text-white font-semibold">Business Hours</h4>
                          <p className="text-gray-300">Monday - Friday: 9AM - 5PM</p>
                          <p className="text-gray-300">Weekends: By appointment</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <Send className="h-6 w-6 text-emerald-400" />
                        </div>
                        <div className="ml-4">
                          <h4 className="text-white font-semibold">Response Time</h4>
                          <p className="text-gray-300">We typically respond within 24 hours during business days.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-3 p-8 md:p-12">
                    <form action="https://formspree.io/f/xkgjozeo" method="POST" className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
                          <input 
                            type="text" 
                            id="name"
                            name="name"
                            className="w-full bg-gray-700/50 border border-gray-600 focus:border-emerald-500 rounded-lg px-4 py-3 text-white outline-none transition-colors" 
                            placeholder="Your name"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
                          <input 
                            type="email" 
                            id="email"
                            name="email"
                            className="w-full bg-gray-700/50 border border-gray-600 focus:border-emerald-500 rounded-lg px-4 py-3 text-white outline-none transition-colors" 
                            placeholder="your@email.com"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-white font-medium mb-2">Subject</label>
                        <input 
                          type="text" 
                          id="subject"
                          name="subject"
                          className="w-full bg-gray-700/50 border border-gray-600 focus:border-emerald-500 rounded-lg px-4 py-3 text-white outline-none transition-colors" 
                          placeholder="How can we help you?"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                        <textarea 
                          id="message"
                          name="message"
                          rows={5} 
                          className="w-full bg-gray-700/50 border border-gray-600 focus:border-emerald-500 rounded-lg px-4 py-3 text-white outline-none transition-colors" 
                          placeholder="Tell us about your project or inquiry..."
                          required
                        ></textarea>
                      </div>

                      {/* Honeypot field to prevent spam */}
                      <div className="hidden">
                        <input type="text" name="_gotcha" />
                      </div>
                      
                      <div>
                        <button 
                          type="submit" 
                          className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 inline-flex items-center"
                        >
                          Send Message <ChevronRight className="ml-2 h-5 w-5" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-6 text-white">Frequently Asked <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-transparent bg-clip-text">Questions</span></h2>
                <p className="text-lg text-gray-300">
                  Here are some common questions we receive. If you don't find what you're looking for, please reach out directly.
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    question: "What areas do you serve?",
                    answer: "Based in Vancouver, BC, we serve clients throughout the Lower Mainland, Vancouver Island, and beyond. With roots in Port Alberni, we maintain strong connections throughout Vancouver Island. Most of our services can be provided remotely, allowing us to work with businesses anywhere in BC and across Canada."
                  },
                  {
                    question: "How quickly can you start on my project?",
                    answer: "Our availability varies based on current projects, but we typically can begin within 1-2 weeks of finalizing project details. For urgent needs or smaller tasks, we may be able to accommodate faster turnaround times."
                  },
                  {
                    question: "Do you offer ongoing support after completion?",
                    answer: "Absolutely! We offer various support and maintenance packages to ensure your technology continues to run smoothly. Our Business-in-a-Box solution includes ongoing support as part of the monthly fee."
                  },
                  {
                    question: "What size businesses do you work with?",
                    answer: "We specialize in working with small to medium-sized businesses, but our services can be tailored to organizations of any size. Our focus is on providing right-sized solutions that match your specific needs and budget."
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-emerald-500/30 transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-3">{item.question}</h3>
                    <p className="text-gray-300">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-emerald-900/30 to-teal-900/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to get started?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Contact us today to discuss how Valley Edge Consulting can help transform your business with the right technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+12507302398" 
                className="px-8 py-3 bg-transparent border-2 border-emerald-500/30 hover:border-emerald-500/60 text-white font-semibold rounded-full transition-all duration-300 flex items-center justify-center">
                Call 250-730-2398 <Phone className="ml-2 h-4 w-4" />
              </a>
              <a href="mailto:ivan@valleyedgeconsulting.io" 
                className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20 flex items-center justify-center">
                Email Us Now <Mail className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 