import type { Metadata } from "next"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowRight, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Web Development & IT Services Blog | Vancouver | Valley Edge Consulting",
  description: "Articles on web development, IT support and business technology for Vancouver businesses. Expert tips and insights for businesses in Vancouver, Port Alberni and throughout BC.",
}

const posts = [
  {
    id: "vancouver-web-development",
    title: "Vancouver Web Development: A Complete Guide for Modern Businesses",
    excerpt: "Expert guide to web development in Vancouver, BC. Learn about modern web technologies, best practices, and how Vancouver businesses can leverage custom web development for growth.",
    date: "January 20, 2025",
    readTime: "8 min read",
    image: "/images/blog/vancouver-web-development.jpg",
    categories: ["Web Development", "Vancouver Business"]
  },
  {
    id: "web-design-port-alberni",
    title: "The Ultimate Guide to Web Design for Port Alberni Businesses",
    excerpt: "Learn how effective web design can help Port Alberni businesses reach more customers and grow their online presence in today's digital marketplace.",
    date: "April 15, 2023",
    readTime: "7 min read",
    image: "/images/blog/web-design-port-alberni.jpg",
    categories: ["Web Design", "Local Business"]
  },
  {
    id: "it-support-vancouver-island",
    title: "Essential IT Support Services for Vancouver Island Small Businesses",
    excerpt: "Discover the key IT support services that small businesses on Vancouver Island need to stay secure, efficient, and competitive.",
    date: "March 22, 2023",
    readTime: "5 min read",
    image: "/images/blog/it-support-vancouver-island.jpg",
    categories: ["IT Support", "Small Business"]
  },
  {
    id: "business-automation-guide",
    title: "Business Automation: A Guide for Port Alberni Retailers",
    excerpt: "How Port Alberni retail businesses can use automation to streamline operations, reduce costs, and improve customer service.",
    date: "February 10, 2023",
    readTime: "6 min read",
    image: "/images/blog/business-automation.jpg",
    categories: ["Automation", "Retail"]
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-emerald-950/30 to-gray-900"></div>
          <div className="container relative mx-auto px-4 z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1 bg-emerald-900/50 text-emerald-400 rounded-full text-sm font-semibold mb-6">
                OUR BLOG
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
                Insights & <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-transparent bg-clip-text">Resources</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-10">
                Expert advice and insights on web development, IT support, and business technology for Vancouver, Port Alberni and businesses throughout BC.
              </p>
            </div>
          </div>
        </section>
        
        {/* Blog Posts Section */}
        <section className="py-24 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {posts.map(post => (
                <Link key={post.id} href={`/blog/${post.id}`} className="group block">
                  <div className="bg-gray-900 rounded-xl overflow-hidden shadow-xl transition-all group-hover:-translate-y-1 duration-300 h-full flex flex-col">
                    <div className="relative aspect-[16/9]">
                      {/* This is a placeholder. You'll need to create these images */}
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/70 to-teal-600/70 flex items-center justify-center text-white text-opacity-30 text-xl font-bold">
                        Featured Image
                      </div>
                    </div>
                    <div className="p-6 flex-grow">
                      <div className="flex gap-3 mb-3">
                        {post.categories.map(category => (
                          <span key={category} className="px-3 py-1 bg-emerald-900/40 text-emerald-400 text-xs rounded-full">
                            {category}
                          </span>
                        ))}
                      </div>
                      <h2 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">{post.title}</h2>
                      <p className="text-gray-400 mb-6">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 