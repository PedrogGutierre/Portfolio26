import dynamic from 'next/dynamic'
import { HeroSection } from "@/components/hero-section"

const AboutSection = dynamic(() => import("@/components/about-section").then(mod => mod.AboutSection))
const ExperienceSection = dynamic(() => import("@/components/experience-section").then(mod => mod.ExperienceSection))
const SkillsSection = dynamic(() => import("@/components/skills-section").then(mod => mod.SkillsSection))
const ProjectsSection = dynamic(() => import("@/components/projects-section").then(mod => mod.ProjectsSection))
const ContactSection = dynamic(() => import("@/components/contact-section").then(mod => mod.ContactSection))
const Footer = dynamic(() => import("@/components/footer").then(mod => mod.Footer))

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}