"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const skills = [
  { name: "React.js", percentage: 85, color: "from-[#61DAFB] to-[#87E3FF]" },
  { name: "TypeScript", percentage: 80, color: "from-[#3178C6] to-[#5A9FD4]" },
  { name: "Node.js", percentage: 82, color: "from-[#339933] to-[#66CC66]" },
  { name: "Flutter & Dart", percentage: 75, color: "from-[#02569B] to-[#45D1FD]" },
  { name: "Python", percentage: 78, color: "from-[#FFD43B] to-[#FFE873]" },
  { name: "MongoDB", percentage: 80, color: "from-[#47A248] to-[#81C784]" },
  { name: "TensorFlow Lite", percentage: 70, color: "from-[#FF6F00] to-[#FFA800]" },
  { name: "FastAPI", percentage: 72, color: "from-[#8B5CF6] to-[#A78BFA]" },
]

function SkillBar({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-3">
        <span className="text-foreground font-medium group-hover:text-primary transition-colors">
          {skill.name}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.5 }}
          className="text-primary font-semibold"
        >
          {skill.percentage}%
        </motion.span>
      </div>
      <div className="h-3 bg-secondary rounded-full overflow-hidden relative">
        {/* Background glow on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className={`h-full w-full bg-gradient-to-r ${skill.color} blur-sm opacity-30`}
            style={{ width: `${skill.percentage}%` }} />
        </div>

        {/* Progress bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.percentage}%` } : {}}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
        >
          {/* Animated shine effect */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={isInView ? { x: "200%" } : {}}
            transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-balance">
            My Skills
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A comprehensive set of tools and technologies I use to bring ideas to life.
          </p>
          <div className="w-16 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Additional skills tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-sm font-semibold tracking-wider text-muted-foreground mb-4 uppercase">Also experienced with</p>
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            {["Git", "GitHub", "Firebase", "Cloudinary", "Socket.io", "Razorpay", "REST APIs", "Postman", "C++", "Java"].map((tag) => (
              <motion.span
                key={tag}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 rounded-full bg-secondary text-muted-foreground text-sm font-medium hover:text-foreground hover:bg-primary/10 transition-colors cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
