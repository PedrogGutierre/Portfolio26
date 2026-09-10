"use client"

import { motion } from "framer-motion"
import { ScrambleText } from "./scramble-text"
import { Download, Mail } from "lucide-react"
import Image from "next/image"
import dynamic from "next/dynamic" 


const ParticlesBackground = dynamic(
  () => import("./particles-background").then((mod) => mod.ParticlesBackground),
  { ssr: false }
)

const roles = ["Estudante de Engenharia de Software", "Desenvolvedor Full Stack", "Buscando Estágio em Dev"]

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-[calc(100dvh-4rem)] flex items-center justify-center overflow-hidden"
    >
      <ParticlesBackground />

      <div className="container mx-auto px-6 relative z-10 py-12 ">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 min-w-0 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-4"
            >
              Olá, Pedro aqui!
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[22px] sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold mb-6 flex flex-col items-start gap-y-2 w-full"
            >
              <span className="text-foreground">Eu sou</span>

              <div className="relative w-full h-[32px] sm:h-[48px] md:h-[60px] lg:h-[48px] xl:h-[60px] flex justify-start">
                
                <span className="absolute text-red-500 whitespace-nowrap text-left w-full lg:w-max max-w-[100vw] overflow-hidden text-ellipsis pr-2">
                  <ScrambleText
                    texts={roles}
                    scrambleSpeed={40}
                    revealSpeed={80}     
                    pauseDuration={4000} 
                  />
                </span>
              </div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed"
            >
              Estudante de Engenharia de Software focado no desenvolvimento de aplicações web modernas. Combinando uma base sólida em infraestrutura com paixão por código limpo, escalabilidade e experiência do utilizador.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center lg:justify-start"
            >
              <a
                href="/curriculo2026.pdf"
                download="Pedro_Gutierre_Curriculo.pdf"
                className="inline-flex items-center justify-center h-12 px-8 bg-red-500 hover:bg-red-600 text-white font-medium transition-colors gap-2"
              >
                <Download className="h-5 w-5" />
                Download Currículo
              </a>
              <a
                href="#contato"
                className="inline-flex items-center justify-center h-12 px-8 border border-foreground/20 hover:bg-foreground/5 text-foreground font-medium transition-colors gap-2"
              >
                <Mail className="h-5 w-5" />
                Entrar em Contato
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8 flex items-center gap-3 justify-center lg:justify-start"
            >
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-pink-500 to-red-500 rounded-full blur-sm opacity-75 animate-pulse" />

              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background">
                <Image
                  src="/images/Phofile.png"
                  alt="Pedro Gutierre"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <a href="#sobre" aria-label="Rolar para a secção Sobre">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center pt-2 cursor-pointer hover:border-foreground/50 transition-colors"
          >
            <div className="w-1.5 h-3 bg-foreground/40 rounded-full" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}