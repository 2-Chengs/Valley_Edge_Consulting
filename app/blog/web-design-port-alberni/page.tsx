import type { Metadata } from "next"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react"

export const metadata: Metadata = {
  title: "Web Design for Port Alberni Businesses | Best Practices & Tips",
  description: "Comprehensive guide to web design for Port Alberni businesses. Learn how effective website design can help local Vancouver Island businesses grow their online presence.",
  keywords: ["Port Alberni web design", "Vancouver Island website development", "small business websites Port Alberni", "web design Vancouver Island", "website design Alberni Valley"],
}

export default function WebDesignPortAlberniBlog() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-emerald-950/30 to-gray-900"></div>
          <div className="container relative mx-auto px-4 z-10">
            <div className="max-w-4xl mx-auto">
              <Link href="/blog" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
              
              <div className="flex gap-3 mb-4">
                <span className="px-3 py-1 bg-emerald-900/40 text-emerald-400 text-xs rounded-full">
                  Web Design
                </span>
                <span className="px-3 py-1 bg-emerald-900/40 text-emerald-400 text-xs rounded-full">
                  Local Business
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                The Ultimate Guide to Web Design for Port Alberni Businesses
              </h1>
              
              <div className="flex items-center justify-between text-sm text-gray-400 mb-10">
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>April 15, 2023</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>7 min read</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span>Share:</span>
                  <a href="#" className="text-white hover:text-emerald-400 transition-colors">
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a href="#" className="text-white hover:text-emerald-400 transition-colors">
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a href="#" className="text-white hover:text-emerald-400 transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Content Section */}
        <section className="py-12 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="w-full aspect-[16/9] rounded-xl mb-12 relative overflow-hidden">
                <Image
                  src="/images/blog/web-design-port-alberni.jpg"
                  alt="Web Design for Port Alberni Businesses - Local business storefront"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="prose prose-lg prose-invert max-w-none">
                <p className="lead text-xl text-gray-300 mb-8">
                  In today's digital age, having a strong online presence is no longer optional for businesses in Port Alberni and across Vancouver Island. A well-designed website serves as your 24/7 storefront, reaching potential customers even when your physical store is closed.
                </p>

                <h2 className="text-3xl font-bold text-white mt-12 mb-6">Why Port Alberni Businesses Need Effective Web Design</h2>

                <p className="text-gray-300 mb-6">
                  Port Alberni, nestled in the heart of Vancouver Island, has a unique business landscape. With a population of approximately 18,000 and its strategic location between east and west coast communities, local businesses have both opportunities and challenges in reaching their target audience.
                </p>

                <p className="text-gray-300 mb-6">
                  According to recent statistics, over 70% of consumers research a business online before visiting in person or making a purchase. For Port Alberni businesses, this means that your website often creates the crucial first impression that determines whether a potential customer will choose your services.
                </p>

                <h2 className="text-3xl font-bold text-white mt-12 mb-6">Key Elements of Effective Web Design for Vancouver Island Businesses</h2>

                <h3 className="text-2xl font-bold text-emerald-400 mt-8 mb-4">1. Mobile-First Design</h3>

                <p className="text-gray-300 mb-6">
                  With over 60% of web traffic now coming from mobile devices, ensuring your website functions perfectly on smartphones and tablets is essential. This is particularly important for Port Alberni businesses targeting tourists and visitors who are often searching on mobile while traveling through Vancouver Island.
                </p>

                <h3 className="text-2xl font-bold text-emerald-400 mt-8 mb-4">2. Local SEO Integration</h3>

                <p className="text-gray-300 mb-6">
                  Your website should be optimized for local search terms like "Port Alberni [your service]" or "Alberni Valley [your business type]." This helps ensure that when potential customers in Port Alberni or surrounding areas like Nanaimo, Parksville, Tofino, Ucluelet, and Courtenay search for services you offer, your business appears prominently in search results.
                </p>

                <h3 className="text-2xl font-bold text-emerald-400 mt-8 mb-4">3. Fast Loading Speed</h3>

                <p className="text-gray-300 mb-6">
                  Studies show that 40% of visitors abandon websites that take more than 3 seconds to load. In areas of Vancouver Island where internet connections might not always be the fastest, optimizing your website's loading speed becomes even more crucial for retaining potential customers.
                </p>

                <h3 className="text-2xl font-bold text-emerald-400 mt-8 mb-4">4. Clear Call-to-Actions</h3>

                <p className="text-gray-300 mb-6">
                  Your website should guide visitors toward taking action, whether that's making a purchase, filling out a contact form, calling your business, or visiting your Port Alberni location. Well-designed call-to-action buttons that stand out and clearly communicate the next step are essential.
                </p>

                <h2 className="text-3xl font-bold text-white mt-12 mb-6">Showcasing Port Alberni's Unique Character in Your Web Design</h2>

                <p className="text-gray-300 mb-6">
                  Port Alberni has a rich history as a resource-based community that's evolving into a diverse economic center. Your website design should reflect both the heritage and forward-thinking nature of the Alberni Valley.
                </p>

                <p className="text-gray-300 mb-6">
                  Incorporating visual elements that showcase Port Alberni's natural beauty—from the Alberni Inlet to the surrounding mountains—can create an emotional connection with locals while also appealing to visitors interested in experiencing Vancouver Island's unique landscape.
                </p>

                <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Value of Professional Web Design for Port Alberni Businesses</h2>

                <p className="text-gray-300 mb-6">
                  While DIY website builders may seem cost-effective initially, they often lack the customization, performance optimization, and local SEO capabilities that a professionally designed website can provide. A web developer who understands Port Alberni's business environment can create a website that truly represents your brand and effectively reaches your target audience.
                </p>

                <p className="text-gray-300 mb-6">
                  Consider the return on investment: A well-designed website that generates even a few additional customers each month can quickly pay for itself, especially for businesses offering higher-value services or products.
                </p>

                <h2 className="text-3xl font-bold text-white mt-12 mb-6">Port Alberni Web Design Success Stories</h2>

                <p className="text-gray-300 mb-6">
                  Several Port Alberni businesses have transformed their online presence through effective web design. For example, local retailers have expanded their reach beyond the Alberni Valley to serve customers across Vancouver Island and beyond. Service-based businesses have streamlined their booking processes, reducing administrative work while improving customer experience.
                </p>

                <h2 className="text-3xl font-bold text-white mt-12 mb-6">Getting Started with Your Port Alberni Business Website</h2>

                <p className="text-gray-300 mb-6">
                  Whether you're creating a new website or refreshing an existing one, the process begins with understanding your business goals, target audience, and unique value proposition. From there, a strategic approach to design, development, and ongoing optimization ensures your website continues to serve as an effective tool for growing your Port Alberni business.
                </p>

                <p className="text-gray-300 mb-8">
                  As a web design agency based in Port Alberni and serving businesses across Vancouver Island, Valley Edge Consulting understands the local market dynamics and can help create a website that resonates with your target audience while achieving your business objectives.
                </p>

                <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-8 mt-12">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to elevate your Port Alberni business online?</h3>
                  <p className="text-gray-300 mb-6">
                    Contact Valley Edge Consulting today for a free consultation about your web design project. As Port Alberni natives, we understand the local business landscape and can help create a website that truly represents your brand while effectively reaching your target audience.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20"
                  >
                    Get Your Free Consultation
                  </Link>
                </div>
              </div>
              
              {/* Author Info */}
              <div className="mt-12 pt-8 border-t border-gray-700">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white font-semibold text-xl">
                    I
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">Ivan</h3>
                    <p className="text-gray-400">
                      Born and raised in Port Alberni, Ivan combines deep local knowledge with extensive technical expertise to help Vancouver Island businesses leverage technology for growth.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Related Posts */}
              <div className="mt-16 pt-8 border-t border-gray-700">
                <h3 className="text-white font-bold text-2xl mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Link href="/blog/it-support-vancouver-island" className="group block">
                    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all group-hover:-translate-y-1 duration-300">
                      <div className="p-6">
                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                          Essential IT Support Services for Vancouver Island Small Businesses
                        </h4>
                        <p className="text-gray-400 text-sm">Discover the key IT support services that small businesses on Vancouver Island need to stay secure, efficient, and competitive.</p>
                      </div>
                    </div>
                  </Link>
                  <Link href="/blog/business-automation-guide" className="group block">
                    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all group-hover:-translate-y-1 duration-300">
                      <div className="p-6">
                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                          Business Automation: A Guide for Port Alberni Retailers
                        </h4>
                        <p className="text-gray-400 text-sm">How Port Alberni retail businesses can use automation to streamline operations, reduce costs, and improve customer service.</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 