import { Globe, BarChart, Code, Radio, Megaphone, LightbulbIcon } from "lucide-react"

const services = [
  {
    icon: <Globe className="h-12 w-12 text-primary transition-transform duration-300 group-hover:scale-110" />,
    title: "Web Development",
    description: "Custom websites and web applications tailored to your unique business needs.",
  },
  {
    icon: <BarChart className="h-12 w-12 text-primary transition-transform duration-300 group-hover:scale-110" />,
    title: "Business Solutions",
    description: "Strategic consulting and implementation of business processes to optimize your operations.",
  },
  {
    icon: <Code className="h-12 w-12 text-primary transition-transform duration-300 group-hover:scale-110" />,
    title: "Technical Implementation",
    description: "Seamless integration of cutting-edge technologies to enhance your business capabilities.",
  },
  {
    icon: <Radio className="h-12 w-12 text-primary transition-transform duration-300 group-hover:scale-110" />,
    title: "Media Services",
    description: "Complete setup for live streaming, music studios, and podcasts. Expert knowledge of equipment and technologies, with hands-on training for confident operation.",
  },
  {
    icon: <Megaphone className="h-12 w-12 text-primary transition-transform duration-300 group-hover:scale-110" />,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies including Google Ads, Meta Business Suite, and SEO optimization.",
  },
  {
    icon: <LightbulbIcon className="h-12 w-12 text-primary transition-transform duration-300 group-hover:scale-110" />,
    title: "Innovation Consulting",
    description: "Strategic guidance on emerging technologies, AI integration, and digital transformation to keep your business ahead of the curve.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-900 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:translate-y-[-4px]"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white text-center">{service.title}</h3>
              <p className="text-gray-300 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

