"use client"

import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 bg-slate-darker/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Contact Us</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-slate-darker/50 text-white border border-gray-700/30 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-slate-darker/50 text-white border border-gray-700/30 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-300 font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 bg-slate-darker/50 text-white border border-gray-700/30 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white font-semibold py-2 px-4 rounded-md hover:bg-accent hover:text-slate-darker transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

