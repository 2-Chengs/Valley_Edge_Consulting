import Image from "next/image"
import type { Metadata } from "next"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { ExternalLink, ChevronRight, Layers, Code, Monitor, Zap } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Portfolio - Valley Edge Consulting",
  description: "Explore my portfolio of websites and digital projects. View my successful client work across various industries and technologies.",
}

const portfolioItems = [
  {
    title: "Alberni Colour Corner",
    description: "Custom e-commerce website for a local paint and home decor store featuring product catalog and brand showcase.",
    image: "/images/portfolio/albernicolourcorner.png",
    category: "Paint & Home Decor Store",
    url: "https://www.albernicolourcorner.ca",
    features: [
      "Product catalog with filtering",
      "Brand showcase and promotion",
      "Mobile-responsive design",
      "Photo gallery and highlights"
    ]
  },
  {
    title: "Valley Edge Basketball",
    description: "Dynamic website for a basketball organization featuring event registration, team information, and schedule management.",
    image: "/images/portfolio/valleyedgebasketball.jpg",
    category: "Sports Organization",
    url: "https://www.valleyedgebasketball.ca",
    features: [
      "Event registration system",
      "Team roster management",
      "Schedule and calendar integration",
      "Payment integration"
    ]
  },
  {
    title: "Crab Rave Token",
    description: "Web application for a cryptocurrency token with real-time price tracking, wallet integration, and community features.",
    image: "/images/portfolio/crabravetoken.jpg",
    category: "Cryptocurrency Project",
    url: "https://www.crabravetoken.net",
    features: [
      "Modern frontend design",
      "Interactive animations",
      "Responsive layout",
      "Whitepaper and roadmap presentation"
    ]
  }
]

const technologies = [
  { name: "Frontend", icon: <Monitor className="h-6 w-6 text-emerald-400" />, items: ["React", "Next.js", "Vue", "Angular", "Tailwind CSS", "SASS"] },
  { name: "Backend", icon: <Code className="h-6 w-6 text-blue-400" />, items: ["Node.js", "Express", "Django", "Ruby on Rails", "PHP", "Java"] },
  { name: "Database", icon: <Layers className="h-6 w-6 text-violet-400" />, items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis", "Supabase"] },
  { name: "Tools", icon: <Zap className="h-6 w-6 text-amber-400" />, items: ["Git", "Docker", "AWS", "Vercel", "Netlify", "CI/CD", "Webpack"] }
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/portfolio-hero.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900/90"></div>
          <div className="container relative mx-auto px-4 z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1 bg-emerald-900/50 text-emerald-400 rounded-full text-sm font-semibold mb-6">
                OUR WORK
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
                Professional <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-transparent bg-clip-text">Portfolio</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Delivering sophisticated digital solutions tailored to drive business growth and innovation
              </p>
            </div>
          </div>
          
          {/* Animated elements */}
          <div className="absolute -bottom-8 left-0 right-0 h-16 bg-gray-950 skew-y-3"></div>
        </section>
        
        {/* Portfolio Grid */}
        <section className="py-24 bg-gray-950 relative overflow-hidden">
          <div className="absolute -right-64 -top-64 w-96 h-96 bg-emerald-900/20 rounded-full blur-3xl"></div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Featured <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-transparent bg-clip-text">Projects</span></h2>
              <p className="text-lg text-gray-300">
                A sample of my recent work for clients across different industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {portfolioItems.map((item, index) => (
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="group" key={index}>
                  <div className="bg-gray-800 rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-700 group-hover:border-emerald-500/30">
                    <div className="aspect-video bg-gray-900 relative overflow-hidden">
                      <Image
                        src={item.image}
                        alt={`${item.title} screenshot`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                        <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors drop-shadow-lg">{item.title}</h3>
                        <p className="text-sm text-gray-300 mt-1 drop-shadow-lg">{item.category}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-300 text-sm mb-4">
                        {item.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {item.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-gray-300 text-sm">
                              <span className="text-emerald-400 mr-2">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center text-emerald-400 text-sm font-medium">
                        Visit Website <ChevronRight className="ml-1 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
        
        {/* Technologies */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-1 bg-emerald-900/50 text-emerald-400 rounded-full text-sm font-semibold mb-4">
                TECHNICAL APPROACH
              </span>
              <h2 className="text-3xl font-bold mb-6 text-white">Technology <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-transparent bg-clip-text">Philosophy</span></h2>
              <p className="text-lg text-gray-300 mb-8">
                I believe in choosing the right tools for each unique project, not forcing a one-size-fits-all approach
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-800/50 p-10 rounded-2xl shadow-xl border border-gray-700 backdrop-blur-sm">
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  I'm deeply passionate about technology and continuously exploring new tools, frameworks, and approaches. Rather than limiting myself to a single technology stack, I stay adaptable and open-minded — selecting the best technologies for each specific project based on its unique requirements, scale, and long-term goals.
                </p>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-10">
                  This technology-agnostic approach ensures your project benefits from the most appropriate solutions, whether that's leveraging established platforms for reliability or implementing cutting-edge technologies for competitive advantage. My enthusiasm for continuous learning means I'm always bringing fresh perspectives and innovative possibilities to every project.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-900/30 rounded-full mb-4">
                      <Monitor className="h-7 w-7 text-emerald-400" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Frontend</h3>
                    <p className="text-gray-400 text-sm">Modern, responsive interfaces with exceptional user experiences</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900/30 rounded-full mb-4">
                      <Code className="h-7 w-7 text-blue-400" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Backend</h3>
                    <p className="text-gray-400 text-sm">Robust, scalable systems that power your business logic</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-violet-900/30 rounded-full mb-4">
                      <Layers className="h-7 w-7 text-violet-400" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Data</h3>
                    <p className="text-gray-400 text-sm">Efficient data storage and management solutions</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-900/30 rounded-full mb-4">
                      <Zap className="h-7 w-7 text-amber-400" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">DevOps</h3>
                    <p className="text-gray-400 text-sm">Streamlined deployment and maintenance processes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-20 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-1 bg-emerald-900/50 text-emerald-400 rounded-full text-sm font-semibold mb-4">
                METHODOLOGY
              </span>
              <h2 className="text-3xl font-bold mb-6 text-white">My Development <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-transparent bg-clip-text">Process</span></h2>
              <p className="text-lg text-gray-300">
                I follow a structured approach to ensure your project is delivered with excellence
              </p>
            </div>
            
            <div className="max-w-7xl mx-auto">
              {/* Enhanced Connected Process Timeline */}
              <div className="relative pb-12">
                {/* Vertical connecting line */}
                <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-600/50 to-teal-600/50 transform -translate-x-1/2"></div>
                
                {[
                  { 
                    phase: "01", 
                    title: "Discovery", 
                    desc: "I start by understanding your business, goals, and target audience to create a strategic plan.", 
                    icon: (
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    )
                  },
                  { 
                    phase: "02", 
                    title: "Design", 
                    desc: "I create wireframes and visual concepts that align with your brand and optimize user experience.", 
                    icon: (
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                      </svg>
                    )
                  },
                  { 
                    phase: "03", 
                    title: "Development", 
                    desc: "I bring the designs to life using clean, efficient, and scalable code.", 
                    icon: (
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    )
                  },
                  { 
                    phase: "04", 
                    title: "Testing", 
                    desc: "Rigorous testing across devices and browsers ensures your website functions flawlessly.", 
                    icon: (
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )
                  },
                  { 
                    phase: "05", 
                    title: "Launch", 
                    desc: "I handle all aspects of deployment and ensure a smooth transition to your new digital presence.", 
                    icon: (
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      </svg>
                    )
                  },
                  { 
                    phase: "06", 
                    title: "Support", 
                    desc: "My relationship with you continues with ongoing maintenance, updates, and optimization services.", 
                    icon: (
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    )
                  }
                ].map((step, index) => (
                  <div key={index} className="relative mb-12">
                    {/* Timeline dot/circle with icon */}
                    <div className="absolute left-0 md:left-1/2 top-0 transform md:-translate-x-1/2 z-20">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-xl border-4 border-gray-900">
                        {step.icon}
                      </div>
                    </div>
                    
                    {/* Desktop view with genuine left-right layout */}
                    <div className="hidden md:grid md:grid-cols-2 md:gap-8">
                      {/* Left column */}
                      <div className="text-right">
                        {index % 2 === 0 && (
                          <div className="bg-gray-800/90 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-emerald-500/40 transition-all duration-300 group ml-auto mr-8">
                            <div className="p-4 border-b border-gray-700/50">
                              <div className="flex items-center justify-end">
                                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mr-3">{step.title}</h3>
                                <span className="bg-gray-900 text-emerald-400 font-bold text-sm px-3 py-1 rounded-full">{step.phase}</span>
                              </div>
                            </div>
                            <div className="p-4">
                              <p className="text-gray-300 text-sm">{step.desc}</p>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Right column */}
                      <div>
                        {index % 2 === 1 && (
                          <div className="bg-gray-800/90 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-emerald-500/40 transition-all duration-300 group ml-8">
                            <div className="p-4 border-b border-gray-700/50">
                              <div className="flex items-center">
                                <span className="bg-gray-900 text-emerald-400 font-bold text-sm px-3 py-1 rounded-full mr-3">{step.phase}</span>
                                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">{step.title}</h3>
                              </div>
                            </div>
                            <div className="p-4">
                              <p className="text-gray-300 text-sm">{step.desc}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Mobile view - always full width below the dots */}
                    <div className="ml-20 md:hidden">
                      <div className="bg-gray-800/90 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-emerald-500/40 transition-all duration-300 group">
                        <div className="p-4 border-b border-gray-700/50">
                          <div className="flex items-center">
                            <span className="bg-gray-900 text-emerald-400 font-bold text-sm px-3 py-1 rounded-full mr-3">{step.phase}</span>
                            <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">{step.title}</h3>
                          </div>
                        </div>
                        <div className="p-4">
                          <p className="text-gray-300 text-sm">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white">Client <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-transparent bg-clip-text">Feedback</span></h2>
              <p className="text-lg text-gray-300">
                Hear what my clients have to say about their experience working with me
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  quote: "Valley Edge not only delivered a stunning website but also implemented a custom CRM that streamlined our entire sales process. The ROI has been incredible.",
                  name: "Michael Roberts",
                  position: "CEO, Summit Financial",
                },
                {
                  quote: "The e-commerce platform that was built for us increased our online sales by 65% in the first three months. The attention to detail and focus on user experience made all the difference.",
                  name: "Rebecca Chen",
                  position: "Marketing Director, Velocity Cycles",
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-800 p-8 rounded-xl shadow-xl relative">
                  <div className="absolute top-6 left-6 text-5xl text-emerald-500/20 font-serif">"</div>
                  <div className="relative z-10">
                    <p className="text-gray-300 italic mb-6 text-lg">{testimonial.quote}</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 mr-4"></div>
                      <div>
                        <p className="font-bold text-white">{testimonial.name}</p>
                        <p className="text-emerald-400 text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-emerald-900/30 to-teal-900/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to build your next digital project?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Let's discuss how I can create a custom solution that meets your unique business needs and helps you stand out from the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services" 
                className="px-8 py-3 bg-transparent border-2 border-emerald-500/30 hover:border-emerald-500/60 text-white font-semibold rounded-full transition-all duration-300 flex items-center justify-center">
                Explore My Services <ChevronRight className="ml-2 h-4 w-4" />
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