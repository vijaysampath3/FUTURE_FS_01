"use client"

import { motion, useInView } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Dribbble, Code2, ChefHat } from "lucide-react"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"

function AnimatedCounter({ value, suffix = "", duration = 2000 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * value))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [isInView, value, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

export function Hero() {
  return (
    <section id="home" className="min-h-screen pt-24 pb-16 px-6 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight text-balance">
                {"I'm "}
                <span className="text-primary relative">
                  Vijay Sampath
                  <motion.span
                    className="absolute -inset-1 bg-primary/20 rounded-lg blur-lg -z-10"
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </span>,
                <br />
                <span className="text-foreground/90">Full Stack Developer</span>
                <br />
                <span className="text-muted-foreground">& CSE student</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-md leading-relaxed"
            >
              I build modern web applications focused on performance, clean UI, and real-world problem solving.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/25 transition-all"
              >
                {"Hire Me"}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="/Resume.pdf"
                download="Resume.pdf"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-foreground font-medium hover:bg-secondary hover:border-primary/30 transition-all"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-3 pt-4"
            >
              <span className="text-sm text-muted-foreground mr-2">Follow me:</span>
              {[
                { icon: Github, label: "GitHub", href: "https://github.com/vijaysampath3" },
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/vijay-sampath-macherla-173729383/" },
                { icon: Code2, label: "LeetCode", href: "https://leetcode.com/u/Vijay_sampath/" },
                { icon: ChefHat, label: "CodeChef", href: "https://www.codechef.com/users/troop_truce_06" },
                { icon: Dribbble, label: "Codeforces", href: "https://codeforces.com/profile/vijay_sampath" },
              ].map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right content - Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated glow ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-primary via-primary/50 to-transparent opacity-50 blur-xl"
              />

              {/* Image container */}
              <div className="relative w-80 h-96 md:w-[380px] md:h-[480px] rounded-2xl overflow-hidden border-2 border-primary/30 bg-card shadow-2xl shadow-primary/10">
                <img
                  src="/images/profileimage.jpeg"
                  alt="Vijay Sampath - Full Stack Developer"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />

              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-border"
        >
          {[
            { value: 350, suffix: "+", label: "LeetCode Problems Solved" },
            { value: 1200, suffix: "+", label: "CodeChef Problems Solved" },
            { value: 4, suffix: "+", label: "Real-World Projects Built" },
            { value: 7, suffix: "th", label: "Hackathon Rank" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-foreground font-space">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
