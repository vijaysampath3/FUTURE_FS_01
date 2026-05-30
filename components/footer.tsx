"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Dribbble, Heart, ArrowUp, Code2, ChefHat } from "lucide-react"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Focus", href: "#expertise" },
  { name: "Projects", href: "#works" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/vijaysampath3" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/vijay-sampath-macherla-173729383/" },
  { icon: Code2, label: "LeetCode", href: "https://leetcode.com/u/Vijay_sampath/" },
  { icon: ChefHat, label: "CodeChef", href: "https://www.codechef.com/users/troop_truce_06" },
  { icon: Dribbble, label: "Codeforces", href: "https://codeforces.com/profile/vijay_sampath" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative border-t border-border">
      {/* Main footer content */}
      <div className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Logo and tagline */}
            <div className="text-center md:text-left">
              <Link href="/" className="inline-block">
                <span className="text-2xl font-bold text-primary">Vijay Sampath</span>
              </Link>
              <p className="text-sm text-muted-foreground mt-2">
                Full Stack Developer
              </p>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-wrap justify-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Social links */}
            <div className="flex justify-center md:justify-end items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
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
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            © 2026 Vijay Sampath. Studying with
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            in India
          </p>

          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Back to top
            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
              <ArrowUp className="w-4 h-4" />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
