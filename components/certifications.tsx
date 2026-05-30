"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, ArrowRight } from "lucide-react"
import Image from "next/image"

const certifications = [
  {
    id: 1,
    name: "IEEEXtreme 19.0 Programming Competition",
    role: "IEEE · Certificate of Participation · 25th October 2025",
    image: "/images/certificates/IEEE.png",
    content: "Participated in IEEEXtreme 19.0, a globally recognized 24-hour programming competition hosted by IEEE with 19,000+ participants worldwide, competing as part of team BlockCoders.",
    rating: 5,
    link: "/images/certificates/IEEE.png",
  },
  {
    id: 2,
    name: "Hackverse 1.0 — 24 Hour Hackathon",
    role: "Raghu Engineering College · Participation · Oct 2025",
    image: "/images/certificates/raguhackathon.jpg",
    content: "Actively participated in Hackverse 1.0, a 24-hour hackathon organized by Raghu Engineering College, Visakhapatnam in association with Google Developer Groups & Akrivia HCM. Built the Smart Crop Assistant mobile app during the event.",
    rating: 5,
    link: "your-certificate-link-here",
  },
  {
    id: 3,
    name: "SusHacks 3.0 — Nationwide Innovation Hackathon",
    role: "Vignan's IIT · Certificate of Participation · April 2026",
    image: "/images/certificates/sushackshackathon.jpg",
    content: "Successfully participated in SusHacks 3.0, a nationwide innovation hackathon held at Vignan's Institute of Information Technology, Visakhapatnam. Demonstrated exceptional skills, creativity and teamwork by building Q-AERS — ranked 7th among all teams.",
    rating: 5,
    link: "your-certificate-link-here",
  },
  {
    id: 4,
    name: "SuperSus Hackathon 4.0 — VISTA 2K25",
    role: "Vignan's IIT · National Level Tech Fest · Sept 2025",
    image: "/images/certificates/supersushackathon.jpg",
    content: "Participated in SuperSus Hackathon 4.0 as part of VISTA 2K25, a two-day national level technical fest at Vignan's Institute of Information Technology, Visakhapatnam. Built a farmer-friendly Smart Crop web platform with AI assistance and real-time insights.",
    rating: 5,
    link: "your-certificate-link-here"
  },
]

export function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextCertification = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % certifications.length)
  }, [])

  const prevCertification = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + certifications.length) % certifications.length)
  }, [])

  const goToCertification = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  // Auto-advance carousel
  useEffect(() => {
    if (!autoplay) return
    const timer = setInterval(nextCertification, 5000)
    return () => clearInterval(timer)
  }, [autoplay, nextCertification])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
  }

  return (
    <section
      id="certifications"
      className="py-24 px-6 bg-gradient-to-b from-background via-card/30 to-background relative overflow-hidden"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
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
            Certifications
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-balance">
            {"My Certifications & Achievements"}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            {"3 national hackathons, 1 global IEEE contest with 19,000+ participants, and a 7th place finish — all within my first two years of B.Tech CSE."}
          </p>
          <div className="w-16 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Testimonial carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-xl relative overflow-hidden mt-8">
            {/* Gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-center flex flex-col items-center"
              >
                {/* 1. Certificate Image */}
                <div className="relative w-full h-48 md:h-72 rounded-xl overflow-hidden mb-8 border border-border/50 bg-muted/30">
                  <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-md">
                    Certified
                  </div>
                  <Image
                    src={certifications[currentIndex].image}
                    alt={certifications[currentIndex].name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* 2. One paragraph description */}
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-6 max-w-2xl mx-auto">
                  {certifications[currentIndex].content}
                </p>

                {/* 3. Star rating */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(certifications[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>

                {/* 4. Certificate name */}
                <h4 className="text-2xl font-bold text-foreground mb-2">
                  {certifications[currentIndex].name}
                </h4>

                {/* 5. Platform · Grade · Duration */}
                <p className="text-muted-foreground text-sm md:text-base font-medium mb-8">
                  {certifications[currentIndex].role}
                </p>

                {/* 6. View Certificate Button */}
                <a
                  href={certifications[currentIndex].image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors shadow-md hover:shadow-primary/25"
                >
                  View Certificate <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-2 md:-mx-16 mt-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevCertification}
              className="w-12 h-12 rounded-full border border-border bg-card shadow-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors pointer-events-auto"
              aria-label="Previous certification"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextCertification}
              className="w-12 h-12 rounded-full border border-border bg-card shadow-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors pointer-events-auto"
              aria-label="Next certification"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {certifications.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToCertification(index)}
                whileHover={{ scale: 1.2 }}
                className={`relative w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-primary" : "bg-border hover:bg-muted-foreground"
                  }`}
                aria-label={`Go to certification ${index + 1}`}
              >
                {index === currentIndex && (
                  <motion.span
                    layoutId="certificationDot"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
