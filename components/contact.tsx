"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Phone, Mail, MapPin, Send, ArrowRight, CheckCircle, XCircle, Target } from "lucide-react"
import { useState } from "react"
import emailjs from '@emailjs/browser'

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!)

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8978262113",
    link: "tel:+918978262113",
  },
  {
    icon: Mail,
    label: "Email",
    value: "vijaysampath054@gmail.com",
    link: "mailto:vijaysampath054@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Visakhapatnam, Andhra Pradesh",
    link: "https://maps.google.com/?q=Visakhapatnam,Andhra+Pradesh",
    target: "_blank",
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [buttonState, setButtonState] = useState<"idle" | "success" | "error">("idle")
  const [showSuccessBanner, setShowSuccessBanner] = useState(false)
  const [showErrorBanner, setShowErrorBanner] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const validateForm = () => {
    let isValid = true
    const errors = { name: "", email: "", subject: "", message: "" }

    if (!formData.name.trim()) {
      errors.name = "Name is required"
      isValid = false
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required"
      isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address"
      isValid = false
    }

    if (!formData.subject.trim()) {
      errors.subject = "Subject is required"
      isValid = false
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required"
      isValid = false
    }

    setFormErrors(errors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setButtonState("idle")
    setShowSuccessBanner(false)
    setShowErrorBanner(false)

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      setButtonState("success")
      setShowSuccessBanner(true)
      setFormData({ name: "", email: "", subject: "", message: "" })

      setTimeout(() => setButtonState("idle"), 3000)
      setTimeout(() => setShowSuccessBanner(false), 5000)
    } catch (error) {
      console.error("EmailJS Error:", error)
      setButtonState("error")
      setShowErrorBanner(true)

      setTimeout(() => setButtonState("idle"), 3000)
      setTimeout(() => setShowErrorBanner(false), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-background via-card/30 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-balance">
            {"Let's Connect!"}
          </h2>
          <p className="text-muted-foreground mt-6 max-w-xl mx-auto leading-relaxed">
            {"I'm a B.Tech CSE student actively looking for Summer/Winter internship opportunities. Whether you have an opportunity, a project idea, or just want to say hi — my inbox is always open!"}
          </p>
          <div className="w-16 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
              <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-5">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.link}
                    target={item.target}
                    rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                      <p className="text-foreground font-medium group-hover:text-primary transition-colors">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl border border-primary/20 p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </span>
                <span className="text-foreground font-medium">Open to Internships</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {"I'm currently available for Summer/Winter internships and freelance projects. Let's build something great together!"}
              </p>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-6 md:p-8 space-y-5" noValidate>
              <AnimatePresence>
                {showSuccessBanner && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, height: 0, marginBottom: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto", marginBottom: 20 }}
                    exit={{ opacity: 0, y: -10, height: 0, marginBottom: 0 }}
                    className="bg-green-500/10 border border-green-500/20 text-green-500 rounded-xl p-4 flex items-start gap-3 overflow-hidden"
                  >
                    <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <p className="text-sm">
                      <strong className="font-semibold block mb-1">Message sent successfully!</strong>
                      I'll get back to you as soon as possible.
                    </p>
                  </motion.div>
                )}
                {showErrorBanner && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, height: 0, marginBottom: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto", marginBottom: 20 }}
                    exit={{ opacity: 0, y: -10, height: 0, marginBottom: 0 }}
                    className="bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl p-4 flex items-start gap-3 overflow-hidden"
                  >
                    <XCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <p className="text-sm">
                      <strong className="font-semibold block mb-1">Something went wrong.</strong>
                      Please try again or email me directly at vijaysampath054@gmail.com
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      placeholder=" "
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className={`peer w-full px-5 py-4 rounded-xl bg-secondary border text-foreground placeholder:text-transparent focus:outline-none focus:bg-background transition-all ${formErrors.name ? "border-red-500 focus:border-red-500" : "border-border focus:border-primary"
                        }`}
                    />
                    <label
                      className={`absolute left-5 transition-all pointer-events-none ${formData.name || focusedField === "name"
                        ? "-top-2.5 text-xs bg-card px-2 text-primary"
                        : "top-4 text-muted-foreground"
                        } ${formErrors.name ? "text-red-500" : ""}`}
                    >
                      Your Name
                    </label>
                  </div>
                  {formErrors.name && (
                    <p className="text-red-500 text-xs mt-1.5 ml-1">{formErrors.name}</p>
                  )}
                </div>
                <div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      placeholder=" "
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className={`peer w-full px-5 py-4 rounded-xl bg-secondary border text-foreground placeholder:text-transparent focus:outline-none focus:bg-background transition-all ${formErrors.email ? "border-red-500 focus:border-red-500" : "border-border focus:border-primary"
                        }`}
                    />
                    <label
                      className={`absolute left-5 transition-all pointer-events-none ${formData.email || focusedField === "email"
                        ? "-top-2.5 text-xs bg-card px-2 text-primary"
                        : "top-4 text-muted-foreground"
                        } ${formErrors.email ? "text-red-500" : ""}`}
                    >
                      Your Email
                    </label>
                  </div>
                  {formErrors.email && (
                    <p className="text-red-500 text-xs mt-1.5 ml-1">{formErrors.email}</p>
                  )}
                </div>
              </div>
              <div>
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    placeholder=" "
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("subject")}
                    onBlur={() => setFocusedField(null)}
                    className={`peer w-full px-5 py-4 rounded-xl bg-secondary border text-foreground placeholder:text-transparent focus:outline-none focus:bg-background transition-all ${formErrors.subject ? "border-red-500 focus:border-red-500" : "border-border focus:border-primary"
                      }`}
                  />
                  <label
                    className={`absolute left-5 transition-all pointer-events-none ${formData.subject || focusedField === "subject"
                      ? "-top-2.5 text-xs bg-card px-2 text-primary"
                      : "top-4 text-muted-foreground"
                      } ${formErrors.subject ? "text-red-500" : ""}`}
                  >
                    Subject
                  </label>
                </div>
                {formErrors.subject && (
                  <p className="text-red-500 text-xs mt-1.5 ml-1">{formErrors.subject}</p>
                )}
              </div>
              <div>
                <div className="relative">
                  <textarea
                    name="message"
                    placeholder=" "
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    rows={5}
                    className={`peer w-full px-5 py-4 rounded-xl bg-secondary border text-foreground placeholder:text-transparent focus:outline-none focus:bg-background transition-all resize-none ${formErrors.message ? "border-red-500 focus:border-red-500" : "border-border focus:border-primary"
                      }`}
                  />
                  <label
                    className={`absolute left-5 transition-all pointer-events-none ${formData.message || focusedField === "message"
                      ? "-top-2.5 text-xs bg-card px-2 text-primary"
                      : "top-4 text-muted-foreground"
                      } ${formErrors.message ? "text-red-500" : ""}`}
                  >
                    Your Message
                  </label>
                </div>
                {formErrors.message && (
                  <p className="text-red-500 text-xs mt-1.5 ml-1">{formErrors.message}</p>
                )}
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium transition-all disabled:opacity-70 disabled:cursor-not-allowed ${buttonState === "success"
                  ? "bg-green-500 text-white hover:shadow-lg hover:shadow-green-500/25"
                  : buttonState === "error"
                    ? "bg-red-500 text-white hover:shadow-lg hover:shadow-red-500/25"
                    : "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/25"
                  }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </>
                ) : buttonState === "success" ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Message Sent!
                  </>
                ) : buttonState === "error" ? (
                  <>
                    <XCircle className="w-4 h-4" />
                    Try Again
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
