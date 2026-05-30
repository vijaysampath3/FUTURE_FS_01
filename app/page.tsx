import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Expertise } from "@/components/expertise"
import { Works } from "@/components/works"
import { Resume } from "@/components/resume"
import { Skills } from "@/components/skills"
import { Certifications } from "@/components/certifications"
import { Achievements } from "@/components/achievements"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Expertise />
      <Works />
      <Resume />
      <Skills />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  )
}
