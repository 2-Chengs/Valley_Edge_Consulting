"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, AlertCircle, Loader2 } from "lucide-react"

type FormData = {
  name: string
  email: string
  phone: string
  message: string
}

type FormErrors = {
  [key in keyof FormData]?: string
}

const GOOGLE_APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formState, setFormState] = useState<"form" | "loading" | "success">("form")

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Phone validation
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/
    if (formData.phone.trim() && !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please use format: 123-456-7890"
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
    
    // Clear error when user starts typing
    if (errors[id as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [id]: undefined }))
    }
  }

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, "")
    
    // Format as XXX-XXX-XXXX
    if (digits.length <= 3) return digits
    if (digits.length <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6, 10)}`
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setFormData((prev) => ({ ...prev, phone: formatted }))
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    // Immediately show loading state
    setFormState("loading")
    setIsSubmitting(true)

    try {
      if (!GOOGLE_APPS_SCRIPT_URL) {
        throw new Error("Google Apps Script URL not configured")
      }

      await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      // With no-cors mode, we won't get a response we can read
      // So we'll assume success if no error is thrown
      await new Promise(resolve => setTimeout(resolve, 500))
      setFormState("success")
    } catch (error) {
      console.error("Form submission error:", error)
      setFormState("form")
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderContent = () => {
    switch (formState) {
      case "loading":
        return (
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <Loader2 className="w-12 h-12 animate-spin text-primary mb-4" />
            <p className="text-white text-lg">Sending your message...</p>
          </div>
        )

      case "success":
        return (
          <div className="text-center min-h-[400px] flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Thank You!</h2>
              <p className="text-gray-300">We'll get back to you soon.</p>
            </motion.div>
          </div>
        )

      default:
        return (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className={`w-full px-4 py-2 bg-gray-800 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white
                    ${errors.name ? "border-red-500" : "border-gray-700"}`}
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className={`w-full px-4 py-2 bg-gray-800 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white
                    ${errors.email ? "border-red-500" : "border-gray-700"}`}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="123-456-7890"
                className={`w-full px-4 py-2 bg-gray-800 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white
                  ${errors.phone ? "border-red-500" : "border-gray-700"}`}
                value={formData.phone}
                onChange={handlePhoneChange}
                maxLength={12}
              />
              {errors.phone ? (
                <p className="mt-1 text-sm text-red-500 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.phone}
                </p>
              ) : (
                <p className="mt-1 text-sm text-gray-400">Format: 123-456-7890 (Optional)</p>
              )}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={6}
                className={`w-full px-4 py-2 bg-gray-800 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white
                  ${errors.message ? "border-red-500" : "border-gray-700"}`}
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.message}
                </p>
              )}
            </div>
            <div className="flex justify-end">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center px-6 py-3 rounded-lg text-white font-semibold 
                  ${isSubmitting ? "bg-gray-600" : "bg-primary hover:bg-opacity-90"} 
                  transition-colors duration-200`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </motion.button>
            </div>
          </form>
        )
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          {formState === "form" ? "Contact Us" : ""}
        </h2>
        <div className="max-w-2xl mx-auto">
          {renderContent()}
        </div>
      </div>
    </section>
  )
}

