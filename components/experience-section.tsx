"use client"

import { motion } from "framer-motion"
import { Calendar, GraduationCap, Server } from "lucide-react"

const experiences = [
  {
    id: 1,
    type: "professional",
    date: "Jan 2025 - Presente",
    title: "Estagiário de TI (Infraestrutura)",
    institution: "Nome da sua Empresa", 
    location: "São Paulo, SP",
    description: "Atuação no suporte técnico diário, focado na manutenção física e conserto de hardware dos equipamentos. Realizo o gerenciamento da infraestrutura local, apoiando-me em scripts práticos para agilizar rotinas básicas das máquinas,",
    duration: "Atual",
    icon: Server,
  },
  {
    id: 2,
    type: "academic",
    date: "Jan 2024 - Dez 2027",
    title: "Engenharia de Software (6º Semestre)",
    institution: "FIAP",
    location: "São Paulo, SP",
    description: "Em formação superior com foco em desenvolvimento Full-Stack, arquitetura de software (SOA, APIs REST), metodologias ágeis e integração de sistemas. Desenvolvimento de projetos práticos em Java, Python e React.",
    duration: "4 anos",
    icon: GraduationCap,
  },
  {
    id: 3,
    type: "academic",
    date: "Jan 2021 - Dez 2023",
    title: "Ensino Médio Técnico em Informática",
    institution: "FIAP",
    location: "São Paulo, SP",
    description: "Construção da base lógica e técnica. Introdução à programação, montagem e manutenção de computadores e fundamentos de redes de computadores.",
    duration: "3 anos",
    icon: GraduationCap,
  },
]

export function ExperienceSection() {
  return (
    <section id="experiencia" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-12">
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-red-600 dark:text-red-500 font-semibold tracking-wider uppercase text-sm mb-2 block">
            Trajetória
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Experiência & Formação
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Uma combinação de base académica sólida com experiência prática no ambiente corporativo de tecnologia.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[15px] md:left-[31px] top-0 bottom-0 w-0.5 bg-zinc-200 dark:bg-white/10 rounded-full" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12 md:pl-24"
              >
                <div className="absolute left-[0px] md:left-[16px] top-6 w-8 h-8 rounded-full bg-background border-4 border-red-500 flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.3)] z-10">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                </div>

                <div className="bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 shadow-sm dark:shadow-none p-6 md:p-8 rounded-2xl hover:bg-zinc-50 dark:hover:bg-white/10 hover:border-zinc-300 dark:hover:border-white/20 transition-all duration-300 relative overflow-hidden group">
                  
                  <exp.icon className="absolute -right-6 -bottom-6 w-32 h-32 text-zinc-100 dark:text-white/5 group-hover:text-zinc-200 dark:group-hover:text-white/10 group-hover:scale-110 transition-all duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-medium text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.date}</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <div className="text-muted-foreground font-medium mb-4 flex items-center gap-2">
                      <span className="text-zinc-700 dark:text-white/80">{exp.institution}</span>
                      <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-white/30" />
                      <span className="text-sm">{exp.location}</span>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-semibold border border-red-100 dark:border-red-500/20">
                        {exp.duration}
                      </span>
                      
                      <div className="p-2 bg-zinc-50 dark:bg-white/5 rounded-lg border border-zinc-200 dark:border-white/10 group-hover:bg-red-50 dark:group-hover:bg-red-500/20 group-hover:text-red-600 dark:group-hover:text-red-400 group-hover:border-red-200 dark:group-hover:border-red-500/30 transition-colors">
                        <exp.icon className="w-5 h-5 text-muted-foreground group-hover:text-red-600 dark:group-hover:text-red-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}