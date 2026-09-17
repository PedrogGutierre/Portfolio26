"use client"

import { motion, Variants } from "framer-motion"

const skills = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "C/C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
}

export function SkillsSection() {
  return (
    <section id="habilidades" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-12">
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Habilidades & Tecnologias
          </h2>
          <div className="w-16 h-1 bg-red-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-white/10 shadow-sm dark:shadow-none hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-[0_0_20px_rgba(239,68,68,0.15)] hover:border-red-500/50 dark:hover:border-red-500/50 transition-all duration-300 group aspect-square"
            >
              <img 
                src={skill.icon} 
                alt={`${skill.name} icon`} 
                className="w-12 h-12 md:w-14 md:h-14 mb-4 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}