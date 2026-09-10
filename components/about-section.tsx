"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="sobre" className="min-h-[100dvh] py-10 flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
            Sobre Mim
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Sou um programador full-stack, focado em construir aplicações escaláveis, seguras e centradas no utilizador, utilizando ferramentas modernas para resolver problemas reais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative overflow-hidden bg-white/5 border border-white/10 p-2 shadow-2xl transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="relative w-full overflow-hidden bg-zinc-900 rounded-lg flex items-center justify-center">
                <Image
                  src="/images/Pedro.jpg"
                  alt="Pedro Gutierre a programar"
                  width={800} 
                  height={600} 
                  className="w-full h-auto object-contain" 
                />
              </div>
            </div>
            <div className="absolute -inset-4 bg-red-500/20 blur-3xl -z-10 rounded-full opacity-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col gap-5"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">A Minha Jornada</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                A curiosidade pela tecnologia que surgiu na pandemia, quando estava no ensino médio técnico conhecendo a programação, acabou me levando ao 6º semestre de Engenharia de Software na FIAP. Hoje, atuando na infraestrutura de TI, utilizo os meus conhecimentos para desenvolver scripts que automatizam tarefas diárias e gerenciam terminais remotamente. Tenho experiência em Front-end (React, Next.js, TypeScript) e fundamentação na criação de arquiteturas Back-end, mantendo estudos contínuos em linguagens como Java e Python. No tempo livre, dedico-me aos estudos e desenvolvo projetos práticos para adquirir mais conhecimentos e experimentar novas tecnologias, com o objetivo de me tornar um desenvolvedor mais completo.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">A Minha Abordagem</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                A minha abordagem baseia-se na eficiência e na vontade constante de fazer sempre melhor. Procuro otimizar a forma como resolvo os problemas, unindo o que aprendo para entregar soluções sólidas. Encaro cada novo projeto e momento de estudo como uma oportunidade para aprender cada vez mais e evoluir tecnicamente. No fim do dia, o que mais me motiva é entregar um resultado excelente, focando sempre na máxima qualidade do produto final.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}