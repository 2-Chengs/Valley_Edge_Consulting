import { Globe, BarChart, Code } from "lucide-react"

const services = [
  {
    icon: <Globe className="h-12 w-12 text-primary" />,
    title: "Web Development",
    description: "Custom websites and web applications tailored to your unique business needs.",
  },
  {
    icon: <BarChart className="h-12 w-12 text-primary" />,
    title: "Business Solutions",
    description: "Strategic consulting and implementation of business processes to optimize your operations.",
  },
  {
    icon: <Code className="h-12 w-12 text-primary" />,
    title: "Technical Implementation",
    description: "Seamless integration of cutting-edge technologies to enhance your business capabilities.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

