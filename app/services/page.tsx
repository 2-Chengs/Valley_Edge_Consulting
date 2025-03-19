import Image from "next/image"
import type { Metadata } from "next"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { CheckCircle, Rocket, Globe, Server, Terminal, BarChart2, Building, Zap, Layers, PieChart, Shield, Phone, ChevronRight, MousePointer } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Services - Valley Edge Consulting",
  description: "Comprehensive technology solutions for your business. From websites to IT support, we handle all your tech needs in one place.",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden min-h-[90vh] flex items-center">
          <div className="absolute inset-0 bg-[url('/images/services/hero.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900/90"></div>
          <div className="container relative mx-auto px-4 z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1 bg-emerald-900/50 text-emerald-400 rounded-full text-sm font-semibold mb-6">
                OUR SERVICES
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
                Everything Your Business Needs, <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-transparent bg-clip-text">In One Place</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-10">
                At Valley Edge Consulting, we are your one-stop technology partner. Whether you're launching a new business or looking to streamline operations, we provide end-to-end IT & digital solutions designed specifically for small businesses.
              </p>
              <Link href="#business-in-a-box" 
                className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20 inline-flex items-center">
                Explore Our Services <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          
          {/* Animated elements */}
          <div className="absolute -bottom-8 left-0 right-0 h-16 bg-gray-950 skew-y-3"></div>
        </section>
        
        {/* Business in a Box Section */}
        <section id="business-in-a-box" className="py-24 bg-gray-950 relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute -right-64 -top-64 w-96 h-96 bg-emerald-900/20 rounded-full blur-3xl"></div>
          <div className="absolute -left-64 bottom-32 w-96 h-96 bg-teal-900/20 rounded-full blur-3xl"></div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-16">
              <div className="flex flex-col items-center text-center mb-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-900/30 rounded-full mb-6">
                  <Rocket className="h-10 w-10 text-emerald-400" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Business-in-a-Box</h2>
                <p className="text-xl text-gray-300 max-w-3xl">
                  The Complete Tech Solution for Your Business
                </p>
              </div>
              
              <div className="bg-gray-800/50 p-8 md:p-12 rounded-3xl shadow-xl border border-gray-700 backdrop-blur-sm mb-12">
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Starting a business? Don't waste time figuring out technology. Let us set up, integrate, and manage everything so you can focus on running your company.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      title: "POS System Setup & Optimization",
                      desc: "Square, Lightspeed, Shopify, Clover",
                      icon: <Building className="h-6 w-6 text-emerald-400" />
                    },
                    {
                      title: "Website + Hosting + Domain + Email",
                      desc: "Fully managed, mobile-optimized, SEO-ready",
                      icon: <Globe className="h-6 w-6 text-emerald-400" />
                    },
                    {
                      title: "Inventory & CRM Integration",
                      desc: "Automate stock, sales, and customer management",
                      icon: <Layers className="h-6 w-6 text-emerald-400" />
                    },
                    {
                      title: "Marketing & Customer Engagement",
                      desc: "Loyalty programs, social media, email automation",
                      icon: <PieChart className="h-6 w-6 text-emerald-400" />
                    },
                    {
                      title: "Full IT Support",
                      desc: "WiFi setup, troubleshooting, cybersecurity, compliance",
                      icon: <Shield className="h-6 w-6 text-emerald-400" />
                    },
                    {
                      title: "Ongoing Monthly Maintenance",
                      desc: "We handle the tech—you focus on business!",
                      icon: <Zap className="h-6 w-6 text-emerald-400" />
                    },
                  ].map((feature, index) => (
                    <div key={index} className="flex gap-4 p-5 bg-gray-800/80 rounded-xl border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-300 shadow-lg">
                      <div className="flex-shrink-0 mt-1">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-lg mb-1">{feature.title}</h3>
                        <p className="text-gray-300">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center bg-gradient-to-r from-emerald-900/40 to-teal-900/40 p-6 rounded-2xl border border-emerald-500/20 mb-8">
                  <p className="text-xl md:text-2xl font-semibold text-white">
                    📦 Everything you need to run your business—one package, one monthly fee.
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <Link href="/business-in-a-box" 
                    className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20 inline-flex items-center">
                    Learn More About Business-in-a-Box <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Other Services Section */}
        <section className="py-20 bg-gray-900 relative overflow-hidden">
          <div className="absolute -left-64 top-32 w-96 h-96 bg-emerald-900/20 rounded-full blur-3xl"></div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Other <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-transparent bg-clip-text">Services</span> We Offer</h2>
              <p className="text-lg text-gray-300">
                While Business-in-a-Box is our flagship offering, we also provide custom technology solutions for businesses that need specific help in key areas.
              </p>
            </div>
            
            <div className="space-y-24 max-w-5xl mx-auto">
              {/* Website & E-Commerce */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 order-2 lg:order-1">
                  <div className="bg-gray-800/80 rounded-2xl overflow-hidden border border-gray-700 shadow-xl p-6 md:p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-900/30 rounded-full mb-6">
                      <Globe className="h-8 w-8 text-emerald-400" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Website & E-Commerce Development</h3>
                    <p className="text-gray-300 mb-6">Your website is your digital storefront—make it work for you. We build:</p>
                    
                    <ul className="space-y-3 mb-8">
                      {[
                        "Custom Business Websites (Fast, SEO-optimized, designed for conversions)",
                        "E-Commerce Stores (Shopify, WooCommerce, Square Online)",
                        "Booking & Scheduling Systems (For salons, gyms, service-based businesses)"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-6 w-6 text-emerald-400 flex-shrink-0 mr-3 mt-0.5" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link href="/web-services" className="inline-flex items-center text-emerald-400 font-semibold hover:text-emerald-300 transition-colors">
                      Get a Custom Website <ChevronRight className="ml-1 h-5 w-5" />
                    </Link>
                  </div>
                </div>
                <div className="lg:col-span-7 order-1 lg:order-2">
                  <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl border border-gray-700">
                    <Image 
                      src="/images/services/website.jpg" 
                      alt="Website Development" 
                      fill 
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tl from-gray-900 to-transparent opacity-60"></div>
                  </div>
                </div>
              </div>
              
              {/* IT Support */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl border border-gray-700">
                    <Image 
                      src="/images/services/it-support.jpg" 
                      alt="IT Support" 
                      fill 
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-transparent opacity-60"></div>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="bg-gray-800/80 rounded-2xl overflow-hidden border border-gray-700 shadow-xl p-6 md:p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900/30 rounded-full mb-6">
                      <Server className="h-8 w-8 text-blue-400" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">IT & Business Tech Support</h3>
                    <p className="text-gray-300 mb-6">Whether it's setting up hardware, managing software, or troubleshooting issues, we act as your on-call tech team.</p>
                    
                    <ul className="space-y-3 mb-8">
                      {[
                        "WiFi & Network Setup",
                        "Business Email & Cloud Solutions (Google Workspace, Microsoft 365)",
                        "IT Security & Compliance",
                        "Software & System Integrations"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-6 w-6 text-blue-400 flex-shrink-0 mr-3 mt-0.5" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link href="/it-services" className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors">
                      Get IT Support <ChevronRight className="ml-1 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Business Automation */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 order-2 lg:order-1">
                  <div className="bg-gray-800/80 rounded-2xl overflow-hidden border border-gray-700 shadow-xl p-6 md:p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-violet-900/30 rounded-full mb-6">
                      <Terminal className="h-8 w-8 text-violet-400" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Business Automation & Custom Software</h3>
                    <p className="text-gray-300 mb-6">Save time, reduce manual work, and increase efficiency with automation.</p>
                    
                    <ul className="space-y-3 mb-8">
                      {[
                        "POS & Accounting Integrations (QuickBooks, Xero)",
                        "CRM & Customer Management Systems (HubSpot, Zoho, custom solutions)",
                        "Custom Software Development (Tailored business applications)"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-6 w-6 text-violet-400 flex-shrink-0 mr-3 mt-0.5" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link href="/automation" className="inline-flex items-center text-violet-400 font-semibold hover:text-violet-300 transition-colors">
                      Automate Your Business <ChevronRight className="ml-1 h-5 w-5" />
                    </Link>
                  </div>
                </div>
                <div className="lg:col-span-7 order-1 lg:order-2">
                  <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl border border-gray-700">
                    <Image 
                      src="/images/services/automation.jpg" 
                      alt="Business Automation" 
                      fill 
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tl from-gray-900 to-transparent opacity-60"></div>
                  </div>
                </div>
              </div>
              
              {/* Consulting */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl border border-gray-700">
                    <Image 
                      src="/images/services/consulting.jpg" 
                      alt="Consulting & Strategy" 
                      fill 
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-transparent opacity-60"></div>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="bg-gray-800/80 rounded-2xl overflow-hidden border border-gray-700 shadow-xl p-6 md:p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-900/30 rounded-full mb-6">
                      <BarChart2 className="h-8 w-8 text-amber-400" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Consulting & Strategy</h3>
                    <p className="text-gray-300 mb-6">Not sure what tech solutions your business needs? We offer expert consulting to help you make the right choices.</p>
                    
                    <ul className="space-y-3 mb-8">
                      {[
                        "Tech Strategy for Small Businesses",
                        "System & Process Optimization",
                        "Cybersecurity & Compliance Guidance"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-6 w-6 text-amber-400 flex-shrink-0 mr-3 mt-0.5" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link href="/consulting" className="inline-flex items-center text-amber-400 font-semibold hover:text-amber-300 transition-colors">
                      Book a Consultation <ChevronRight className="ml-1 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="py-20 bg-gray-950 relative overflow-hidden">
          <div className="absolute -right-64 bottom-32 w-96 h-96 bg-emerald-900/20 rounded-full blur-3xl"></div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Why Choose <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-transparent bg-clip-text">Valley Edge</span> Consulting?</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "One-Stop Tech Partner",
                    desc: "No need to hire multiple vendors; we handle everything.",
                    icon: <Zap className="h-8 w-8 text-emerald-400" />
                  },
                  {
                    title: "Small Business Focused",
                    desc: "We understand your challenges and provide cost-effective solutions.",
                    icon: <Building className="h-8 w-8 text-emerald-400" />
                  },
                  {
                    title: "Expert Support",
                    desc: "From setup to maintenance, we're here whenever you need us.",
                    icon: <Phone className="h-8 w-8 text-emerald-400" />
                  },
                  {
                    title: "Future-Proof Solutions",
                    desc: "Scalable technology that grows with your business.",
                    icon: <MousePointer className="h-8 w-8 text-emerald-400" />
                  }
                ].map((benefit, index) => (
                  <div key={index} className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-emerald-500/30 transition-all duration-300 shadow-lg">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl mb-6">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-emerald-900/30 to-teal-900/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to transform your business with technology?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Let's discuss how we can design a custom solution that meets your unique business needs and helps you stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/business-in-a-box" 
                className="px-8 py-3 bg-transparent border-2 border-emerald-500/30 hover:border-emerald-500/60 text-white font-semibold rounded-full transition-all duration-300 flex items-center justify-center">
                Learn More About Business-in-a-Box <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/contact" 
                className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20">
                Start Your Project
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 