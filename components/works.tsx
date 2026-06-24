"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, Eye } from "lucide-react"

const categories = ["All", "Web", "Mobile", "AI/ML"]

const projects = [
  {
    id: 1,
    title: "Q-AERS — Quantum Ambulance Rerouting",
    category: "AI/ML",
    description: "Quantum-assisted emergency routing system achieving ~39% faster response time and 35-40% improved dispatch efficiency. Ranked 7th at SusHacks 3.0 nationally.",
    image: "/images/quantum.png",
    tags: ["React", "Fast Api", "Python"],
    liveUrl: "https://quantum-y9mz.onrender.com",
    githubUrl: "https://github.com/vijaysampath3/Quantum_project.git",
    externalUrl: "",
  },
  {
    id: 2,
    title: "College Fee Payment System",
    category: "Web",
    description: "Full-stack web app digitizing manual college fee payments with Razorpay gateway integration, real-time transaction tracking and secure REST APIs.",
    image: "/images/project-5.jpg",
    tags: ["React", "Node.js", "MongoDB", "TypeScript", "Razorpay"],
    liveUrl: "#",
    githubUrl: "#",
    externalUrl: "",
  },
  {
    id: 3,
    title: "Smart Crop Assistant",
    category: "Mobile",
    description: "AI-powered Flutter mobile app helping farmers with crop disease detection using TensorFlow Lite, GPT-powered suggestions, smart auctions and warehouse planning.",
    image: "/images/smart_crop_app.png",
    tags: ["Flutter", "Firebase", "TensorFlow Lite", "GPT API"],
    liveUrl: "https://smart-crop-auction-ksll.vercel.app/",
    githubUrl: "https://github.com/vijaysampath3/smart_crop_app.git",
    externalUrl: "https://youtu.be/8DIByg4CQEQ",
  },
  {
    id: 4,
    title: "NeuroLearn — AI-Powered Learning Assessment Platform",
    category: "AI/ML",
    description: "Full-stack AI platform detecting learning difficulties like dyslexia and ADHD in school students through speech recognition, webcam attention tracking and XGBoost ML — deployed at a real government school under AP CSP program.",
    image: "/images/neurolearn3.png",
    tags: ["React","FastAPI","XGBoost","Supabase","OpenAI","MediaPipe"],
    liveUrl: "https://neurolearn-two.vercel.app",
    githubUrl: "https://github.com/vijaysampath3/Neuro_Learn.git",
    externalUrl: "https://www.linkedin.com/posts/vijay-sampath-macherla-173729383_neurolearn-aiineducation-edtech-ugcPost-7473951634620981250-QGvk/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF6dI6cBXAhSHbTTK2zosr-XnMqhtKMYY1U",
  },
  {
    id: 5,
    title: "LeadFlow CRM — Client Lead Management System",
    category: "Web",
    description: "A full-stack CRM dashboard to track, manage and convert leads with real-time analytics, follow-up reminders, per-user data isolation and Google OAuth — built with Next.js 14 and MongoDB Atlas.",
    image: "/images/crm.png",
    tags: ["Flutter", "Firebase", "Next.js", "MongoDB","Typescript"],
    liveUrl: "https://leadflowcrm-eta.vercel.app/",
    githubUrl: "https://github.com/vijaysampath3/FUTURE_FS_02.git",
    externalUrl: "",
  },
  {
    id: 6,
    title: "Sugarbloom Delight — Premium Café Website",
    category: "Web",
    description: "A cinematic, full-featured multi-page café website with 13 homepage sections, 3 dedicated menu pages and 36 menu items — built as a real client deliverable and deployed live on Cloudflare Pages.",
    image: "/images/sugarbloom.png",
    tags: ["React","TypeScript","TailwindCSS","Framer Motion","TanStack"],
    liveUrl: "https://sugarbloom.pages.dev/",
    githubUrl: "https://github.com/vijaysampath3/FUTURE_FS_03.git",
    externalUrl: "",
  },
]

export function Works() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="works" className="py-24 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            MY PROJECTS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-balance">
            My Projects
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Real-world applications built from scratch — spanning web, mobile and AI. Each project here solves an actual problem, not just a tutorial clone.
          </p>
          <div className="w-16 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 mb-12 flex-wrap"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === category
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Project image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Hover overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20 flex flex-col items-center justify-center gap-4"
                  >
                    {/* Action buttons */}
                    <div className="flex items-center gap-3">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: hoveredId === project.id ? 0 : 20, opacity: hoveredId === project.id ? 1 : 0 }}
                        transition={{ delay: 0.1 }}
                        className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform"
                        aria-label="View live project"
                      >
                        <Eye className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: hoveredId === project.id ? 0 : 20, opacity: hoveredId === project.id ? 1 : 0 }}
                        transition={{ delay: 0.15 }}
                        className="w-12 h-12 rounded-full bg-secondary text-foreground flex items-center justify-center hover:scale-110 transition-transform border border-border"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: hoveredId === project.id ? 0 : 20, opacity: hoveredId === project.id ? 1 : 0 }}
                        transition={{ delay: 0.2 }}
                        className="w-12 h-12 rounded-full bg-secondary text-foreground flex items-center justify-center hover:scale-110 transition-transform border border-border"
                        aria-label="External link"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    </div>

                    {/* Tags */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: hoveredId === project.id ? 0 : 20, opacity: hoveredId === project.id ? 1 : 0 }}
                      transition={{ delay: 0.25 }}
                      className="flex flex-wrap justify-center gap-2 px-4"
                    >
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>

                {/* Project info */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {project.category}
                    </span>
                    <motion.div
                      animate={{ x: hoveredId === project.id ? 0 : 10, opacity: hoveredId === project.id ? 1 : 0 }}
                      className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center"
                    >
                      <ExternalLink className="w-3 h-3 text-primary" />
                    </motion.div>
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-border text-foreground font-medium hover:bg-secondary hover:border-primary/30 transition-all"
          >
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
