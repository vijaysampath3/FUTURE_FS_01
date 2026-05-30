"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Smartphone, Bot, Server, ChevronDown, ArrowUpRight } from "lucide-react"

const services = [
  {
    id: "01",
    icon: Code,
    title: "Full Stack Web Development",
    description: "I build end-to-end web applications with React.js & TypeScript on the frontend and Node.js, Express.js & FastAPI on the backend, connected to MongoDB databases.",
    features: ["React.js", "Node.js", "TypeScript", "MongoDB", "REST APIs"],
  },
  {
    id: "02",
    icon: Smartphone,
    title: "Mobile App Development",
    description: "I develop cross-platform mobile apps using Flutter & Dart that work seamlessly on both Android and iOS with clean UI and real-world functionality.",
    features: ["Flutter", "Dart", "Firebase", "Cloudinary", "Mobile UI"],
  },
  {
    id: "03",
    icon: Bot,
    title: "AI / ML Integration",
    description: "I integrate intelligent features into apps using TensorFlow Lite for on-device image detection and GPT API for smart, context-aware suggestions and automation.",
    features: ["TensorFlow Lite", "GPT API", "Image Classification", "Python"],
  },
  {
    id: "04",
    icon: Server,
    title: "API & Backend Systems",
    description: "I design and build RESTful APIs, integrate third-party services like Razorpay payment gateway, and implement real-time features using Socket.io for live communication.",
    features: ["Node.js", "FastAPI", "Socket.io", "Razorpay", "Postman"],
  },
]

export function Expertise() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const toggleService = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="expertise" className="py-24 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            TECHNICAL FOCUS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-balance">
            What I Build
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            I'm a B.Tech CSE student who builds real-world applications across web, mobile, and AI — from idea to deployment.
          </p>
          <div className="w-16 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Services accordion */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {services.map((service, index) => {
            const isOpen = expandedId === service.id;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                    ? "bg-primary/5 border-primary/30 shadow-[0_0_20px_rgba(168,85,247,0.15)]"
                    : "bg-card/50 border-border hover:border-primary/20"
                    }`}
                >
                  {/* Accordion header */}
                  <button
                    onClick={() => toggleService(service.id)}
                    className="w-full p-6 md:p-8 flex items-center justify-between text-left group"
                  >
                    <div className="flex items-center gap-6 md:gap-8">
                      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center transition-colors duration-300 ${isOpen
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground group-hover:bg-secondary/80"
                        }`}>
                        <service.icon className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <h3 className={`text-xl md:text-2xl font-bold transition-colors ${isOpen ? "text-primary" : "text-foreground group-hover:text-primary/80"
                        }`}>
                        {service.title}
                      </h3>
                    </div>

                    <ChevronDown
                      className={`w-6 h-6 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : "text-muted-foreground"
                        }`}
                    />
                  </button>

                  {/* Accordion content */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                          <div className="pl-0 md:pl-[88px] border-t border-border/50 pt-6 mt-2">
                            <p className="text-muted-foreground leading-relaxed text-lg">
                              {service.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-6">
                              {service.features.map((feature) => (
                                <span
                                  key={feature}
                                  className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 transition-colors hover:bg-primary/20"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                            <motion.a
                              href="#works"
                              whileHover={{ x: 5 }}
                              className="inline-flex items-center gap-2 mt-6 text-primary font-medium hover:underline"
                            >
                              Learn More <ArrowUpRight className="w-4 h-4" />
                            </motion.a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
