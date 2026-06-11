"use client"

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const posts = [
  {
  title: "Full Stack Web Development Internship",
  category: "Certification",
  date: "Jun 11, 2026",
  readTime: "Future Interns · 1 Month",
  image: "/images/certificates/future-interns-certificate.jpg",
  excerpt: "Successfully completed 1-month Full Stack Web Development internship at Future Interns (ISO 9001 Certified, MSME Registered) — awarded Certificate of Completion and Letter of Recommendation.",
  tags: ["Internship", "Full Stack", "Future Interns", "MSME"],
  },
  {
    title: "Machine Learning Mastery — Microsoft Chapter",
    category: "Certification",
    date: "Jun 02, 2026",
    readTime: "DevTown × Microsoft Student Chapter",
    image: "/images/certificates/microsoftml.jpg",
    excerpt: "Completed Machine Learning Mastery bootcamp by DevTown in collaboration with Microsoft Student Chapter GNIT — recognized for participation and project completion.",
    tags: ["Machine Learning", "Microsoft", "DevTown", "AI"],
  },
  {
    title: "Machine Learning Mastery — Google Developers",
    category: "Certification",
    date: "Jun 02, 2026",
    readTime: "DevTown × Google Developer Groups",
    image: "/images/certificates/googleml.jpg",
    excerpt: "Completed Machine Learning Mastery bootcamp by DevTown in collaboration with Google Developer Groups On Campus — CSMU. Recognized for participation and project completion.",
    tags: ["Machine Learning", "Google", "DevTown", "AI"],
  },
  {
    title: "Machine Learning Mastery Bootcamp",
    category: "Certification",
    date: "Jun 01, 2026",
    readTime: "DevTown · 5 Days",
    image: "/images/certificates/machine_learning_certificate.jpg",
    excerpt: "Successfully completed a 5-day Machine Learning Mastery bootcamp by DevTown in collaboration with MSME & Startup India, covering core ML concepts, algorithms and real-world applications.",
    tags: ["Machine Learning", "AI", "DevTown", "Startup India"],
  },
  {
    title: "Database Management System Part - 1",
    category: "Certification",
    date: "Jan 02, 2026",
    readTime: "Infosys Springboard · 63hrs 50min",
    image: "/images/certificates/dbms-infosys.jpg",
    excerpt: "Successfully completed DBMS Part 1 on Infosys Springboard — a comprehensive 63-hour program across 33 modules covering database design, SQL, normalization, transactions and relational database concepts.",
    tags: ["DBMS", "SQL", "Infosys", "Database Design"],
  },
  {
    title: "IEEE Xtreme 19.0 Programming Contest",
    category: "Coding Contest",
    date: "Oct 25, 2025",
    readTime: "19,000+ Participants",
    image: "/images/certificates/IEEE.png",
    excerpt: "Participated in the globally recognized 24-hour programming competition by IEEE, solving algorithmic challenges against 19,000+ participants worldwide as part of team BlockCoders.",
    tags: ["DSA", "Algorithms", "IEEE", "C++"],
  },
  {
    title: "Q-AERS — Quantum Ambulance Rerouting",
    category: "Hackathon",
    date: "Apr 4-5, 2026",
    readTime: "Ranked 7th Nationally",
    image: "/images/certificates/sushackshackathon.jpg",
    excerpt: "Built quantum-assisted emergency routing achieving ~39% faster response time and 35-40% improved dispatch efficiency at SusHacks 3.0 Nationwide Innovation Hackathon.",
    tags: ["React", "FastAPI", "Python", "AI/ML"],
  },
  {
    title: "Hackverse 1.0 — 24 Hour Hackathon",
    category: "Hackathon",
    date: "Oct 18-19, 2025",
    readTime: "24 Hours",
    image: "/images/certificates/raguhackathon.jpg",
    excerpt: "Built an AI-powered Smart Crop Assistant mobile app using Flutter helping farmers with crop recommendations, pest detection, smart auctions and warehouse planning.",
    tags: ["Flutter", "TensorFlow Lite", "Firebase", "AI/ML"],
  },
  {
    title: "SuperSus Hackathon 4.0 — VISTA 2K25",
    category: "Hackathon",
    date: "Sept 13-15, 2025",
    readTime: "National Level",
    image: "/images/certificates/supersushackathon.jpg",
    excerpt: "Participated in the national level tech fest VISTA 2K25, building a farmer-friendly Smart Crop web platform with real-time AI assistance and modular agricultural services.",
    tags: ["React", "Node.js", "MongoDB", "AI"],
  },
  {
    title: "IGNITEERA — The Igniters' Final Compile",
    category: "Club & Community",
    date: "2026",
    readTime: "Unstop × Igniters Club",
    image: "/images/certificates/igniteera.jpg",
    excerpt: "Participated in IGNITEERA — The Igniters' Final Compile, a competitive coding event organised by the Igniters Club at Vignan's Institute of Information Technology in association with Unstop.",
    tags: ["Unstop", "Igniters Club", "Coding", "VIIT"],
  },
  {
    title: "Unstop Igniters Club x Battlefield — Season 1",
    category: "Club & Community",
    date: "2026",
    readTime: "Unstop × Igniters Club",
    image: "/images/certificates/unstop-battlefield.jpg",
    excerpt: "Participated in Unstop Igniters Club x Battlefield Season 1, a competitive challenge organised by Unstop, representing Vignan's Institute of Information Technology, Visakhapatnam.",
    tags: ["Unstop", "Igniters Club", "Battlefield", "Competition"],
  },
  {
    title: "JavaScript Essentials 2",
    category: "Programming Course",
    date: "Dec 26, 2025",
    readTime: "Cisco Networking Academy · 50hrs",
    image: "/images/certificates/javascript-essentials-cisco2.jpg",
    excerpt: "Successfully completed JavaScript Essentials 2 through Cisco Networking Academy — a 50-hour advanced program covering ES6+, asynchronous programming, DOM manipulation, and modern JavaScript development patterns.",
    tags: ["JavaScript", "Cisco", "ES6+", "Web Development"],
  },
  {
    title: "JavaScript Essentials 1",
    category: "Programming Course",
    date: "Oct 13, 2025",
    readTime: "Cisco Networking Academy · 40hrs",
    image: "/images/certificates/javascript-essentials-cisco1.jpg",
    excerpt: "Successfully completed JavaScript Essentials 1 through Cisco Networking Academy — a 40-hour program covering JavaScript fundamentals, variables, functions, control flow and basic DOM interaction.",
    tags: ["JavaScript", "Cisco", "Frontend", "Web Basics"],
  },
  {
    title: "Python Essentials 1",
    category: "Programming Course",
    date: "Dec 27, 2025",
    readTime: "Cisco Networking Academy · 30hrs",
    image: "/images/certificates/python-essentials-cisco.jpg",
    excerpt: "Successfully completed Python Essentials 1 through Cisco Networking Academy — a 30-hour program covering Python fundamentals, data structures, functions and object-oriented programming concepts.",
    tags: ["Python", "Cisco", "Programming", "OOP"],
  },
  {
    title: "CSS Essentials",
    category: "Programming Course",
    date: "Sep 09, 2025",
    readTime: "Cisco Networking Academy · 30hrs",
    image: "/images/certificates/css-essentials-cisco.jpg",
    excerpt: "Successfully completed CSS Essentials through Cisco Networking Academy — a 30-hour program covering CSS fundamentals, layouts, flexbox, grid, responsive design and modern styling techniques.",
    tags: ["CSS", "Cisco", "Responsive Design", "Frontend"],
  },
  {
    title: "HTML Essentials",
    category: "Programming Course",
    date: "Aug 04, 2025",
    readTime: "Cisco Networking Academy · 30hrs",
    image: "/images/certificates/html-essentials-cisco.jpg",
    excerpt: "Successfully completed HTML Essentials through Cisco Networking Academy — a 30-hour program covering HTML fundamentals, semantic markup, forms, tables and building structured web pages.",
    tags: ["HTML", "Cisco", "Web Basics", "Frontend"],
  },
  {
    title: "Data Analyst 101",
    category: "Data Analytics",
    date: "Dec 10, 2025",
    readTime: "Simplilearn",
    image: "/images/certificates/data-analyst-simplilearn.jpg",
    excerpt: "Completed Data Analyst 101 certification from Simplilearn, gaining foundational knowledge in data analysis, visualization, and analytical thinking for real-world problem solving.",
    tags: ["Data Analytics", "Simplilearn", "Data Visualization", "Analytics"],
  },
  {
    title: "The Hour of Code",
    category: "Programming Course",
    date: "2025",
    readTime: "Code.org",
    image: "/images/certificates/hour-of-code.jpg",
    excerpt: "Completed The Hour of Code by Code.org, demonstrating understanding of fundamental computer science concepts. Sponsored by Facebook as part of a global initiative to make coding accessible to everyone.",
    tags: ["Computer Science", "Code.org", "Programming", "Fundamentals"],
  },
];

const categoryColors: Record<string, string> = {
  Hackathon: "bg-primary/15 text-primary",
  "Coding Contest": "bg-emerald-500/15 text-emerald-400",
  Certification: "bg-amber-500/15 text-amber-400",
  "Programming Course": "bg-blue-500/15 text-blue-400",
  "Data Analytics": "bg-cyan-500/15 text-cyan-400",
  "Club & Community": "bg-pink-500/15 text-pink-400",
};

function getCardStyle(index: number, active: number, total: number) {
  const diff = ((index - active) % total + total) % total;
  const normalized = diff > total / 2 ? diff - total : diff;

  if (normalized === 0) {
    return {
      transform: "translateX(0%) scale(1)",
      opacity: 1,
      zIndex: 20,
      pointerEvents: "auto" as const,
    };
  }
  if (normalized === 1 || normalized === -(total - 1)) {
    return {
      transform: "translateX(58%) scale(0.82)",
      opacity: 0.55,
      zIndex: 10,
      pointerEvents: "auto" as const,
      filter: "brightness(0.6)",
    };
  }
  if (normalized === -1 || normalized === total - 1) {
    return {
      transform: "translateX(-58%) scale(0.82)",
      opacity: 0.55,
      zIndex: 10,
      pointerEvents: "auto" as const,
      filter: "brightness(0.6)",
    };
  }
  return { transform: "scale(0.7)", opacity: 0, zIndex: 1, pointerEvents: "none" as const };
}

export function Achievements() {
  const [active, setActive] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const touchStart = useRef<number | null>(null);
  const total = posts.length;

  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      setActive((c) => (c + 1) % total);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovering, total]);

  const navigate = (dir: "prev" | "next") => {
    setActive((c) => dir === "next" ? (c + 1) % total : (c - 1 + total) % total);
  };

  const handleTouchStart = (e: React.TouchEvent) => { touchStart.current = e.targetTouches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const dist = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(dist) > 50) navigate(dist > 0 ? "next" : "prev");
    touchStart.current = null;
  };

  return (
    <section id="achievements" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Achievements
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-balance">
            Recent Achievements
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            180+ hours of Cisco Academy training, an Infosys Springboard certification, 3 national hackathons and 2 global coding contests — all earned in my first two years of B.Tech.
          </p>
          <div className="w-16 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </motion.div>

        <div
          className="relative overflow-hidden"
          style={{ height: 640 }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Cards */}
          <div className="absolute inset-0 flex items-center justify-center">
            {posts.map((post, i) => {
              const style = getCardStyle(i, active, total);
              return (
                <div
                  key={i}
                  onClick={() => style.opacity < 1 && setActive(i)}
                  style={{
                    position: "absolute",
                    width: "100%",
                    maxWidth: 520,
                    transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
                    cursor: style.opacity < 1 ? "pointer" : "default",
                    ...style,
                  }}
                >
                  {/* Card */}
                  <div
                    onMouseEnter={() => setHoveredCard(i)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="rounded-2xl overflow-hidden flex flex-col"
                    style={{
                      background: "hsl(260 15% 8%)",
                      border: style.opacity === 1
                        ? "1.5px solid hsl(263 70% 58% / 0.5)"
                        : "1px solid hsl(260 15% 15%)",
                      boxShadow: style.opacity === 1
                        ? (hoveredCard === i ? "0 16px 60px hsl(263 70% 58% / 0.4), 0 4px 20px rgba(0,0,0,0.5)" : "0 8px 40px hsl(263 70% 58% / 0.2), 0 2px 12px rgba(0,0,0,0.4)")
                        : "0 2px 8px rgba(0,0,0,0.3)",
                      transform: style.opacity === 1 && hoveredCard === i ? "translateY(-6px)" : "translateY(0px)",
                      transition: "all 0.4s ease",
                    }}
                  >
                    {/* Image header */}
                    <div
                      className="relative flex items-end justify-start p-6 overflow-hidden"
                      style={{
                        height: 260,
                      }}
                    >
                      {/* Background Image */}
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `url(${post.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          transform: style.opacity === 1 && hoveredCard === i ? "scale(1.08)" : "scale(1)",
                          filter: style.opacity === 1
                            ? "brightness(1.15) contrast(1.05) saturate(1.1)"
                            : "brightness(0.6) contrast(1.0)",
                          transition: "all 0.4s ease",
                        }}
                      />

                      {/* Dark/Gradient Overlay */}
                      <div
                        className="absolute inset-0 transition-all"
                        style={{
                          background: style.opacity === 1
                            ? "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.35) 100%)"
                            : "rgba(0,0,0,0.55)",
                          transitionDuration: "400ms",
                        }}
                      />

                      {/* Purple Tint Overlay */}
                      <div
                        className="absolute inset-0 transition-all"
                        style={{
                          background: style.opacity === 1
                            ? "linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(0,0,0,0.2) 100%)"
                            : "transparent",
                          transitionDuration: "400ms",
                        }}
                      />

                      {/* Category Badge */}
                      <div
                        className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-xs font-semibold text-white"
                        style={{
                          background: "hsl(263 70% 58%)",
                          backdropFilter: "blur(4px)",
                        }}
                      >
                        {post.category}
                      </div>

                      <div className="relative z-10 w-full">
                        <h3
                          className="font-space font-bold text-xl mt-2 leading-tight line-clamp-2 w-full"
                          style={{
                            color: style.opacity === 1 && hoveredCard === i ? "hsl(263 70% 75%)" : "white",
                            transition: "color 0.3s ease",
                          }}
                        >
                          {post.title}
                        </h3>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-6 flex flex-col gap-4">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{post.date}</span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          {post.category === "Hackathon" && "🏆"}
                          {post.category === "Coding Contest" && "⌨️"}
                          {post.category !== "Hackathon" && post.category !== "Coding Contest" && "🏆"} {post.readTime}
                        </span>
                      </div>

                      <p className="text-base text-muted-foreground leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-0.5 rounded-full text-xs bg-secondary text-secondary-foreground"
                            style={{
                              filter: style.opacity === 1 && hoveredCard === i ? "brightness(1.15)" : "brightness(1)",
                              transition: "filter 0.3s ease",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href={post.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-semibold text-primary group mt-1 w-fit"
                        style={{
                          opacity: style.opacity === 1 && hoveredCard === i ? 1 : 0.85,
                          transition: "opacity 0.3s ease",
                        }}
                      >
                        <span className="border-b border-transparent group-hover:border-primary transition-colors">View Certificate</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Arrows */}
          <button
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-card/80 border border-border text-foreground hover:border-primary/50 hover:text-primary transition-all flex items-center justify-center shadow-lg"
            onClick={() => navigate("prev")}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-card/80 border border-border text-foreground hover:border-primary/50 hover:text-primary transition-all flex items-center justify-center shadow-lg"
            onClick={() => navigate("next")}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {posts.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: i === active ? 28 : 8,
                background: i === active ? "hsl(263 70% 58%)" : "hsl(263 70% 58% / 0.25)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
