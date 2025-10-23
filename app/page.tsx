import Header from "./components/Header"
import Footer from "./components/Footer"
import IntroSection from "./components/IntroSection"
import type { Metadata } from "next"
import { ArrowRight, CheckCircle, Globe, BarChart, Code, Zap, ArrowUpRight, ChevronRight, Quote, Server, Terminal, BarChart2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Vancouver Web Development & Business IT Solutions | Valley Edge Consulting",
  description:
    "Top-rated web development, IT support and business technology solutions in Vancouver, BC. Also serving Port Alberni and Vancouver Island businesses with custom websites, tech support and digital services.",
}

const clientLogos = [1, 2, 3, 4, 5, 6]

const features = [
  {
    icon: <Globe className="h-6 w-6 text-emerald-400" />,
    title: "Website & E-Commerce",
    description: "Custom websites, online stores, and booking systems designed for conversions and growth."
  },
  {
    icon: <Server className="h-6 w-6 text-blue-400" />,
    title: "IT & Tech Support",
    description: "Network setup, business email, cloud solutions, and IT security for your entire business."
  },
  {
    icon: <Terminal className="h-6 w-6 text-violet-400" />,
    title: "Business Automation",
    description: "Streamline operations with POS integrations, CRM systems, and custom software solutions."
  },
  {
    icon: <BarChart2 className="h-6 w-6 text-amber-400" />,
    title: "Consulting & Strategy",
    description: "Expert guidance on tech strategy, process optimization, and cybersecurity compliance."
  }
]

const stats = [
  { number: "50+", label: "Projects Completed" },
  { number: "30+", label: "Satisfied Clients" },
  { number: "7+", label: "Years of Experience" },
  { number: "10+", label: "Industries Served" }
]

const testimonials = [
  {
    quote: "Ivan provided excellent service—efficient, professional, and great with communication. He responded quickly and resolved the issue in no time. I shared my concerns with him, and he not only listened attentively but also provided the support I needed. Highly recommend!",
    name: "Linda Pelech",
    position: "",
    timeAgo: "1 week ago"
  },
  {
    quote: "Valley Edge Consulting did an incredible job on our website. Ivan was professional, easy to work with, and really understood what we wanted. Their customer service was excellent—always quick to respond and willing to help with anything we needed. Since launching, we've seen more traffic and engagement, which has been amazing. If you need a web design team that's reliable and great at what they do, I highly recommend Valley Edge Consulting!",
    name: "Julie Oh",
    position: "",
    timeAgo: "2 weeks ago"
  },
  {
    quote: "I highly recommend Valley Edge Consulting for Web Development Agency and Technical Business Consulting. I was having troubles automating my real estate processes and Ivan found a solution to help me very efficiently. Great to work with, highly recommend!",
    name: "Melisa",
    position: "",
    timeAgo: "4 weeks ago"
  }
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950">
      <IntroSection />
      <Header />
      <main className="flex-grow">
        {/* Features Section */}
        <section className="py-24 bg-gray-900 relative overflow-hidden">
          <div className="absolute -left-64 -top-64 w-96 h-96 bg-emerald-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -right-64 top-32 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl"></div>
          
          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-1 bg-emerald-900/50 text-emerald-400 rounded-full text-sm font-semibold mb-4">
                OUR SERVICES
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Comprehensive Technology Solutions</h2>
              <p className="text-xl text-gray-300">
                Everything your business needs in one place - from websites to IT support and business automation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-800 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-800 hover:border-gray-700">
                  <div className="bg-gray-900/50 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <Link href={`/services`} className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors font-medium">
                    Learn more <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link href="/services" 
                className="px-8 py-3 bg-transparent border-2 border-emerald-500/30 hover:border-emerald-500/60 text-white font-semibold rounded-full transition-all duration-300 inline-flex items-center">
                View All Services <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Clients Section */}
        <section className="py-20 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1 bg-emerald-900/50 text-emerald-400 rounded-full text-sm font-semibold mb-4">
                OUR PHILOSOPHY
              </span>
              <h2 className="text-3xl font-bold text-white mb-6">Technology That Works For You</h2>
              <p className="text-xl text-gray-300 mb-8">
                We believe technology should simplify your business operations, not complicate them. 
                Our solutions are designed with your specific needs in mind, focusing on practical 
                results that drive growth and efficiency.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-gray-800/70 rounded-xl border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-3">People First</h3>
                  <p className="text-gray-300 text-sm">We prioritize your team's experience with every solution we implement.</p>
                </div>
                <div className="p-6 bg-gray-800/70 rounded-xl border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Future Ready</h3>
                  <p className="text-gray-300 text-sm">Our solutions are built to evolve with your business needs and technology trends.</p>
                </div>
                <div className="p-6 bg-gray-800/70 rounded-xl border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-3">Measurable Impact</h3>
                  <p className="text-gray-300 text-sm">We focus on delivering outcomes that you can see and measure in your business.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="py-24 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <span className="inline-block px-4 py-1 bg-emerald-900/50 text-emerald-400 rounded-full text-sm font-semibold mb-4">
                  WHY CHOOSE US
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">We Deliver Results That Matter</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our team of experts combines technical prowess with business acumen to deliver solutions that drive real growth and efficiency.
                </p>
                
                <ul className="space-y-4 mb-8">
                  {[
                    "Custom solutions tailored to your specific needs",
                    "Proven track record of successful implementations",
                    "Cutting-edge technologies and best practices",
                    "Dedicated support and ongoing optimization"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href="/about" 
                  className="px-8 py-3 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 hover:from-emerald-600/30 hover:to-teal-600/30 text-white font-semibold rounded-full transition-all duration-300 inline-flex items-center">
                  Learn About Our Approach <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              
              <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-800">
                    <p className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 text-transparent bg-clip-text mb-2">{stat.number}</p>
                    <p className="text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Projects Preview */}
        <section className="py-24 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-12">
              <div>
                <span className="inline-block px-4 py-1 bg-emerald-900/50 text-emerald-400 rounded-full text-sm font-semibold mb-4">
                  FEATURED WORK
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Our Recent Projects</h2>
              </div>
              <Link href="/portfolio" className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center mt-4 lg:mt-0">
                View Full Portfolio <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Alberni Colour Corner",
                  category: "Paint & Home Decor Store",
                  image: "/images/portfolio/albernicolourcorner.png"
                },
                { 
                  title: "Valley Edge Basketball", 
                  category: "Sports Organization",
                  image: "/images/portfolio/valleyedgebasketball.jpg"
                },
                { 
                  title: "Crab Rave Token", 
                  category: "Cryptocurrency Project",
                  image: "/images/portfolio/crabravetoken.jpg"
                }
              ].map((project, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl">
                  <div className="aspect-[4/3] bg-gray-800 relative overflow-hidden">
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-xs font-semibold px-2 py-1 rounded-full bg-emerald-900/50 text-emerald-400 mb-2 inline-block">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-24 bg-gray-900 relative overflow-hidden">
          <div className="absolute -left-64 -bottom-64 w-96 h-96 bg-emerald-900/20 rounded-full blur-3xl"></div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-1 bg-emerald-900/50 text-emerald-400 rounded-full text-sm font-semibold mb-4">
                TESTIMONIALS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">What Our Clients Say</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-gray-800 p-8 rounded-xl shadow-xl relative flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-xs text-gray-400">{testimonial.timeAgo}</span>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="absolute top-6 right-6 text-4xl text-emerald-500/10 font-serif">"</div>
                      <p className="text-gray-300 relative z-10 mb-4 text-sm">
                        {testimonial.quote}
                      </p>
                    </div>
                    
                    <div className="flex items-center mt-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white font-semibold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <p className="font-semibold text-white">{testimonial.name}</p>
                        {testimonial.position && <p className="text-emerald-400 text-sm">{testimonial.position}</p>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-emerald-900/30 to-teal-900/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to bring your business to the edge?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Let's discuss how Valley Edge Consulting can transform your business with our technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" 
                className="px-10 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20">
                Start Your Project
              </Link>
              <Link href="/blog" 
                className="px-10 py-4 bg-transparent border-2 border-white/20 hover:border-white/40 text-white font-semibold rounded-full transition-all duration-300 flex items-center justify-center">
                Read Our Blog
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

