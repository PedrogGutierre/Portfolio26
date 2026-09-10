"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "BodyMeasure AI — Alfaiate Virtual",
    description: "Sistema de Visão Computacional em Python para extração de medidas corporais em tempo real. Utiliza MediaPipe Heavy e OpenCV no mapeamento anatômico 3D, calculando perímetros, proporções e métricas estéticas.",
    imageUrl: "/bodymeasurefoto.png", 
    githubUrl: "https://github.com/PedrogGutierre/BodyMeasureLP", 
    liveUrl: "https://body-measure-lp.vercel.app/",
  },
  {
    id: 2,
    title: "NovaGreen — Energia Renovável",
    description: "Plataforma de logística reversa que conecta pontos de descarte a ONGs para converter resíduos em energia. Desenvolvida com JavaScript, SCSS e HTML5, integra lógica IoT de balanças inteligentes para calcular a biomassa orgânica descartada.",
    imageUrl: "/novagreenfoto.png", 
    githubUrl: "https://github.com/PedrogGutierre/NovaGreen", 
    liveUrl: "https://nova-green-pi.vercel.app/",
  },
  {
    id: 3,
    title: "LifeOcean: Dados Geoespaciais",
    description: "Script em Python desenvolvido para extração, tradução e transformação de dados geográficos. Utiliza a biblioteca Pandas e Deep Translator para processar planilhas complexas e exportar bases estruturadas em JSON, alimentando sistemas de mapas interativos.",
    imageUrl: "/lifeoceanfoto.png", 
    githubUrl: "https://github.com/projetos-academicos-henrique/pythonOceanLife", 
    liveUrl: "https://pedroggutierre.github.io/LifeOceanFront/index.html",
  },
]

export function ProjectsSection() {
  return (
    <section id="projetos" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-12">
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Projetos em Destaque
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Aqui estão alguns dos meus projetos recentes que demonstram as minhas habilidades full-stack, desde a integração de hardware e IA até processamento de dados e arquiteturas back-end.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col bg-white dark:bg-[#1a1a1a] border border-zinc-200 dark:border-white/10 overflow-hidden shadow-sm dark:shadow-none hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              
              <a 
                href={project.liveUrl || project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative h-56 w-full block overflow-hidden group bg-zinc-100 dark:bg-zinc-800"
              >
                <Image 
                  src={project.imageUrl}
                  alt={`Captura de tela do projeto ${project.title}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </a>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="mt-auto pt-4 border-t border-zinc-100 dark:border-white/10 flex gap-4">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Código
                  </a>
                  
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Acessar
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}