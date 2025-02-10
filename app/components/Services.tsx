import { Globe, BarChart, Code } from "lucide-react"

const services = [
  {
    icon: <Globe className="h-12 w-12 text-[#426A56]" />,
    title: "Web Development",
    description: "Custom websites and web applications tailored to your unique business needs.",
  },
  {
    icon: <BarChart className="h-12 w-12 text-[#426A56]" />,
    title: "Business Solutions",
    description: "Strategic consulting and implementation of business processes to optimize your operations.",
  },
  {
    icon: <Code className="h-12 w-12 text-[#426A56]" />,
    title: "Technical Implementation",
    description: "Seamless integration of cutting-edge technologies to enhance your business capabilities.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#426A56]">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#426A56]">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

