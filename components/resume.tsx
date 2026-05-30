"use client"

import { motion } from "framer-motion"
import { Trophy, GraduationCap, Calendar, Building } from "lucide-react"

const experience = [
  {
    period: "3rd April 2026",
    title: "DSA Problem Solver",
    event: "Unstop Coding Challenge",
    description: "Participated in DSA and problem-solving coding challenge on Unstop, competing against students from colleges nationwide."
  },
  {
    period: "4th–5th April 2026",
    title: " Q-AERS — Quantum Ambulance Rerouting",
    event: "SusHacks 3.0 — Nationwide Innovation Hackathon",
    description: "Built a quantum-assisted emergency routing system achieving ~39% faster response time and 35-40% improved dispatch efficiency. Ranked 7th nationally.",
  },
  {
    period: "25th October 2025",
    title: "Global Programming Contest Participant",
    event: "IEEE Xtreme Programming Contest 19.0",
    description: "Participated in the globally recognized 24-hour programming contest by IEEE, solving algorithmic challenges under time pressure against global participants.",
  },
  {
    period: "18th–19th October 2025",
    title: "Smart Crop Assistant App",
    event: "HackerVerse 1.0",
    description: " Built an AI-powered Flutter mobile app helping farmers with crop recommendations, pest detection, smart auctions, transport booking and warehouse planning.",
  },
  {
    period: "13th–15th September 2025",
    title: "Smart Crop Website",
    event: "SuperSus Hackathon 4.0",
    description: "Designed a farmer-friendly web UI with real-time insights, AI assistance and modular agricultural services for smarter farming decisions.",
  },
]

const education = [
  {
    period: "2024 — 2028",
    title: "B.Tech in Computer Science & Engineering",
    institution: "Vignan's Institute of Information Technology",
    description: "Focused on Full Stack Development, AI/ML & Competitive Programming | CGPA: 8.9",
  },
  {
    period: "2022 — 2024",
    title: "Higher Secondary Education (MPC)",
    institution: "Narayana Junior College",
    description: "Stream: Mathematics, Physics & Chemistry | Score: 87.6%",
  },
  {
    period: "2021 — 2022",
    title: "Secondary School Education (SSC)",
    institution: " Geethanjali Vidya Nilayam",
    description: " Score: 92.16% | Board: AP State Board",
  },
]

export function Resume() {
  return (
    <section id="resume" className="py-24 px-6 bg-gradient-to-b from-background via-card/30 to-background relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Resume
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-balance">
            My Achievements & Education
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            journey of building real-world solutions, competing in hackathons, and growing as a developer.
          </p>
          <div className="w-16 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Two columns */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold">Hackathons & Contests</h3>
            </div>

            <div className="space-y-0">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  {/* Timeline line */}
                  <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-border group-last:bg-gradient-to-b group-last:from-border group-last:to-transparent" />

                  <div className="relative pl-10 pb-10 group-last:pb-0">
                    {/* Timeline dot */}
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      className="absolute left-0 top-1 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/20"
                    />

                    <div className="bg-card rounded-xl border border-border p-5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </div>
                      <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <div className="flex items-center gap-2 text-primary text-sm mt-1">
                        <Building className="w-3 h-3" />
                        {item.event}
                      </div>
                      <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>

            <div className="space-y-0">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  {/* Timeline line */}
                  <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-border group-last:bg-gradient-to-b group-last:from-border group-last:to-transparent" />

                  <div className="relative pl-10 pb-10 group-last:pb-0">
                    {/* Timeline dot */}
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      className="absolute left-0 top-1 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/20"
                    />

                    <div className="bg-card rounded-xl border border-border p-5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </div>
                      <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <div className="flex items-center gap-2 text-primary text-sm mt-1">
                        <Building className="w-3 h-3" />
                        {item.institution}
                      </div>
                      <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
