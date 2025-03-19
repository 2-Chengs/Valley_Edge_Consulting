import Image from "next/image"
import type { Metadata } from "next"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Users, Target, Rocket, Award, Clock, Shield, ChevronRight, Briefcase, BookOpen, MessageSquare, Code } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About - Valley Edge Consulting",
  description: "Learn about Valley Edge Consulting's expertise and approach. With experience at Rogers, WorkSafeBC, ServiceBC, Sysco, and a strong educational foundation from UVic and BCIT, I provide comprehensive business technology solutions.",
}

const values = [
  {
    icon: <Target className="h-10 w-10 text-emerald-400" />,
    title: "Client-Focused",
    description: "I prioritize understanding your unique challenges and tailoring solutions that directly address your business needs."
  },
  {
    icon: <Rocket className="h-10 w-10 text-blue-400" />,
    title: "Innovation",
    description: "I stay at the forefront of technology trends to bring cutting-edge solutions to every project I undertake."
  },
  {
    icon: <Award className="h-10 w-10 text-violet-400" />,
    title: "Excellence",
    description: "I hold myself to the highest standards of quality and professionalism in everything I do."
  },
  {
    icon: <Clock className="h-10 w-10 text-rose-400" />,
    title: "Efficiency",
    description: "I design streamlined processes and solutions that save time and maximize resources."
  },
  {
    icon: <Shield className="h-10 w-10 text-amber-400" />,
    title: "Reliability",
    description: "I deliver on my promises and build long-term relationships based on trust and consistent results."
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-indigo-400" />,
    title: "Communication",
    description: "I maintain clear, open communication throughout every project, ensuring you're always informed and involved."
  }
]

const expertise = [
  {
    icon: <Briefcase className="h-10 w-10 text-emerald-400" />,
    title: "Business Strategy",
    description: "Strategic planning and implementation to optimize operations and drive growth."
  },
  {
    icon: <Code className="h-10 w-10 text-blue-400" />,
    title: "Web Development",
    description: "Custom websites and applications designed for your specific business requirements."
  },
  {
    icon: <BookOpen className="h-10 w-10 text-violet-400" />,
    title: "Technical Consulting",
    description: "Expert guidance on technology selection, implementation, and optimization."
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/about-hero.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900/90"></div>
          <div className="container relative mx-auto px-4 z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1 bg-emerald-900/50 text-emerald-400 rounded-full text-sm font-semibold mb-6">
                ABOUT
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
                Bringing Businesses to the <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-transparent bg-clip-text">Edge</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Empowering businesses with technology that drives real results
              </p>
            </div>
          </div>
          
          {/* Animated elements */}
          <div className="absolute -bottom-8 left-0 right-0 h-16 bg-gray-950 skew-y-3"></div>
        </section>
        
        {/* Our Story / My Approach */}
        <section className="py-24 bg-gray-950 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="relative">
              {/* Background elements */}
              <div className="absolute -left-64 -top-64 w-96 h-96 bg-emerald-900/20 rounded-full blur-3xl"></div>
              <div className="absolute -right-64 top-32 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl"></div>
              
              {/* Section Title - Centered */}
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1 bg-emerald-900/50 text-emerald-400 rounded-full text-sm font-semibold mb-4">
                  MY APPROACH
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Transforming <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-transparent bg-clip-text">Business Challenges</span> Into Opportunities</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto"></div>
              </div>
              
              <div className="relative z-10 flex flex-col items-center gap-16">
                {/* Main content */}
                <div className="w-full max-w-4xl mx-auto">
                  {/* Text content with increased spacing and size */}
                  <div className="space-y-10 text-gray-300 text-xl leading-relaxed">
                    <p>
                      At Valley Edge Consulting, my mission is simple: to empower businesses with technology that drives real results. Before launching this agency, I spent seven years working on the front lines in corporate and government environments, gaining firsthand experience with industry leaders like Rogers, WorkSafeBC, ServiceBC, and Sysco. That experience was critical—it showed me exactly what businesses need to survive and thrive in today's fast-paced digital world.
                    </p>
                    <p>
                      My technical foundation comes from studying Computer Science at the University of Victoria, where I gained deep theoretical knowledge of computing and problem-solving. But it was at BCIT's Computing Systems Technology program where everything truly came together—where I learned how to apply those concepts to real business challenges. Combining that education with years of hands-on experience in the workforce made everything click. I saw firsthand how technology could be leveraged to streamline operations, enhance efficiency, and drive business growth.
                    </p>
                    <p>
                      What sets Valley Edge apart is my holistic approach to business technology. From POS systems and employee tracking to CRM implementations and custom web development, I go beyond simply building websites or integrating software—I craft tailored, end-to-end solutions designed to optimize operations and fuel growth.
                    </p>
                    <p>
                      With a deep understanding of how technology can transform businesses, I work closely with clients to implement solutions that don't just work today but scale for the future. Whether you're looking to streamline processes, enhance customer engagement, or modernize your digital presence, Valley Edge Consulting is here to turn your vision into reality.
                    </p>
                    
                    {/* Photo moved here - above "Why work with me" section */}
                    <div className="w-full max-w-2xl mx-auto mt-10 mb-10">
                      <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl blur-lg"></div>
                        <div className="relative aspect-[4/3] bg-gray-800 rounded-lg shadow-xl overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/40 to-teal-800/40 z-10"></div>
                          <Image 
                            src="/Ivan_Front_Lines.jpg"
                            alt="Ivan - Valley Edge Consulting"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-gray-900 rounded-lg shadow-lg p-4 flex flex-col justify-center items-center">
                          <p className="text-5xl font-bold text-emerald-500">7+</p>
                          <p className="text-sm text-gray-400">Years of Experience</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Why work with me section */}
                    <div className="pt-10 mt-12 border-t border-gray-800">
                      <h3 className="text-2xl font-bold text-white mb-8">Why work with me?</h3>
                      <ul className="space-y-6">
                        <li className="flex items-start">
                          <div className="bg-emerald-900/30 p-1.5 rounded-full mr-3 mt-1">
                            <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-300">Deep understanding of both business and technical challenges</span>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-emerald-900/30 p-1.5 rounded-full mr-3 mt-1">
                            <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-300">Solutions that scale with your business growth</span>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-emerald-900/30 p-1.5 rounded-full mr-3 mt-1">
                            <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-300">Personal attention and direct communication throughout your project</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Stats section */}
                  <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {[
                      { number: "30+", label: "Satisfied Clients" },
                      { number: "50+", label: "Projects Completed" },
                      { number: "7+", label: "Years of Experience" }
                    ].map((stat, index) => (
                      <div key={index} className="bg-gray-900/50 p-6 rounded-xl text-center transform transition-transform hover:scale-105 duration-300 backdrop-blur-sm border border-gray-800 hover:border-emerald-500/30">
                        <p className="text-3xl font-bold text-emerald-400 mb-2">{stat.number}</p>
                        <p className="text-gray-300 font-medium">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Mission & Vision */}
        <section className="py-24 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="bg-gray-800 rounded-2xl p-10 shadow-xl transform transition-transform duration-500 hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">My Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To empower businesses with technology that drives real results. I strive to be a true partner in my clients' success by delivering solutions that address their unique challenges and create tangible business value, transforming technology from a cost center into a strategic advantage.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-2xl p-10 shadow-xl transform transition-transform duration-500 hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">My Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To become the trusted technology partner that businesses turn to when they need solutions that actually work in the real world. I aim to bridge the gap between cutting-edge technology and practical business needs, creating scalable solutions that grow with my clients and help them stay competitive in an ever-evolving digital landscape.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* My Values */}
        <section className="py-24 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-1 bg-emerald-900/50 text-emerald-400 rounded-full text-sm font-semibold mb-4">
                WHAT DRIVES ME
              </span>
              <h2 className="text-3xl font-bold mb-6 text-white">Core Values</h2>
              <p className="text-lg text-gray-300">
                These principles guide every decision I make and every solution I deliver
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-800 hover:border-gray-700">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-950/50 rounded-xl mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Professional Background */}
        <section className="py-24 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 bg-emerald-900/50 text-emerald-400 rounded-full text-sm font-semibold mb-4">
                PROFESSIONAL BACKGROUND
              </span>
              <h2 className="text-3xl font-bold mb-6 text-white">Front-Line Experience & Education</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                My time in the trenches combined with formal education gives me a unique perspective on solving business technology challenges
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700">
                <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
                  <span className="w-8 h-1 bg-blue-500 mr-3"></span>
                  Front-Line Experience
                </h3>
                <p className="text-gray-300 mb-6">
                  Before Valley Edge, I worked directly with industry leaders across multiple sectors, gaining invaluable insights into how businesses operate and what technology challenges they face:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-blue-900/30 p-2 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-white font-medium">Rogers</span>
                      <p className="text-gray-400 text-sm">Telecom industry systems and customer service technologies</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-900/30 p-2 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-white font-medium">WorkSafeBC</span>
                      <p className="text-gray-400 text-sm">Enterprise-level systems for government services</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-900/30 p-2 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-white font-medium">ServiceBC</span>
                      <p className="text-gray-400 text-sm">Public service technology implementation and optimization</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-900/30 p-2 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-white font-medium">Sysco</span>
                      <p className="text-gray-400 text-sm">Supply chain management and logistics technology systems</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700">
                <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
                  <span className="w-8 h-1 bg-emerald-500 mr-3"></span>
                  Educational Foundation
                </h3>
                <p className="text-gray-300 mb-6">
                  My academic background has equipped me with both theoretical knowledge and practical skills in technology implementation:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-emerald-900/30 p-2 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-white font-medium">University of Victoria</span>
                      <p className="text-gray-400 text-sm">Computer Science - Theoretical foundations and advanced concepts</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-emerald-900/30 p-2 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-white font-medium">BCIT</span>
                      <p className="text-gray-400 text-sm">Computing Systems Technology Diploma - Hands-on technical skills</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Expertise */}
        <section className="py-24 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-1 bg-emerald-900/50 text-emerald-400 rounded-full text-sm font-semibold mb-4">
                EXPERTISE
              </span>
              <h2 className="text-3xl font-bold mb-6 text-white">Specialized Solutions</h2>
              <p className="text-lg text-gray-300">
                My expertise spans across critical business and technology domains
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {expertise.map((area, index) => (
                <div key={index} className="bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-700">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-900 rounded-xl mb-6">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{area.title}</h3>
                  <p className="text-gray-300 mb-6">{area.description}</p>
                  <Link href="/services" className="text-emerald-400 hover:text-emerald-300 flex items-center text-sm font-medium">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-24 bg-gray-900 relative overflow-hidden">
          <div className="absolute -left-64 -bottom-64 w-96 h-96 bg-emerald-900/20 rounded-full blur-3xl"></div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-1 bg-emerald-900/50 text-emerald-400 rounded-full text-sm font-semibold mb-4">
                CLIENT FEEDBACK
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">What My Clients Say</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-800 p-8 rounded-xl shadow-xl relative flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-xs text-gray-400">1 week ago</span>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="absolute top-6 right-6 text-4xl text-emerald-500/10 font-serif">"</div>
                    <p className="text-gray-300 relative z-10 mb-4 text-sm">
                      Ivan provided excellent service—efficient, professional, and great with communication. He responded quickly and resolved the issue in no time. I shared my concerns with him, and he not only listened attentively but also provided the support I needed. Highly recommend!
                    </p>
                  </div>
                  
                  <div className="flex items-center mt-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white font-semibold">
                      L
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-white">Linda Pelech</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800 p-8 rounded-xl shadow-xl relative flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-xs text-gray-400">2 weeks ago</span>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="absolute top-6 right-6 text-4xl text-emerald-500/10 font-serif">"</div>
                    <p className="text-gray-300 relative z-10 mb-4 text-sm">
                      Valley Edge Consulting did an incredible job on our website. Ivan was professional, easy to work with, and really understood what we wanted. Their customer service was excellent—always quick to respond and willing to help with anything we needed. Since launching, we've seen more traffic and engagement, which has been amazing.
                    </p>
                  </div>
                  
                  <div className="flex items-center mt-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white font-semibold">
                      J
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-white">Julie Oh</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800 p-8 rounded-xl shadow-xl relative flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-xs text-gray-400">4 weeks ago</span>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="absolute top-6 right-6 text-4xl text-emerald-500/10 font-serif">"</div>
                    <p className="text-gray-300 relative z-10 mb-4 text-sm">
                      I highly recommend Valley Edge Consulting for Web Development Agency and Technical Business Consulting. I was having troubles automating my real estate processes and Ivan found a solution to help me very efficiently. Great to work with, highly recommend!
                    </p>
                  </div>
                  
                  <div className="flex items-center mt-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white font-semibold">
                      M
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-white">Melisa</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-emerald-900/30 to-teal-900/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to work together?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Let's discuss how Valley Edge Consulting can help bring your business to the technological edge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services" 
                className="px-8 py-3 bg-transparent border-2 border-emerald-500/30 hover:border-emerald-500/60 text-white font-semibold rounded-full transition-all duration-300 flex items-center justify-center">
                Explore My Services <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/contact" 
                className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20">
                Contact Me
              </Link>
            </div>
          </div>
        </section>
        
      </main>
      <Footer />
    </div>
  )
} 