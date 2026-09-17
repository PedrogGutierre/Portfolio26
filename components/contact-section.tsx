"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Github, Linkedin, Send, Copy } from "lucide-react"

export function ContactSection() {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("pedrogutierreh@gmail.com")
    alert("Email copiado para a área de transferência!")
  }

  return (
    <section id="contato" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-12">
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Vamos Conversar
          </h2>
          <div className="w-16 h-1 bg-red-500 mx-auto mt-6 rounded-full mb-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <div className="flex items-center justify-between p-6 bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 shadow-sm dark:shadow-none hover:border-red-500/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-red-50 dark:bg-white/10 flex items-center justify-center text-red-600 dark:text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-sm text-muted-foreground">pedrogutierreh@gmail.com</p>
                </div>
              </div>
              <button onClick={handleCopyEmail} className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-white/10 text-muted-foreground transition-colors" title="Copiar Email">
                <Copy className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-4 p-6 bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 shadow-sm dark:shadow-none">
              <div className="w-12 h-12 rounded-full bg-red-50 dark:bg-white/10 flex items-center justify-center text-red-600 dark:text-white">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-1">Localização</h4>
                <p className="text-sm text-muted-foreground">São Paulo, SP - Brasil</p>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 shadow-sm dark:shadow-none">
              <h4 className="text-sm font-semibold text-foreground mb-4">Conecte-se Comigo</h4>
              <div className="flex gap-3">
                <a
                  href="https://github.com/PedrogGutierre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-red-50 dark:hover:bg-red-500/20 hover:text-red-600 dark:hover:text-red-400 hover:border-red-200 dark:hover:border-red-500/30 transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/pedro-gutierre-7a15b0328/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-red-50 dark:hover:bg-red-500/20 hover:text-red-600 dark:hover:text-red-400 hover:border-red-200 dark:hover:border-red-500/30 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 lg:col-start-7 bg-white dark:bg-[#1a1a1a] p-6 border border-zinc-200 dark:border-white/10 shadow-lg dark:shadow-none"
          >
            <form
              action="https://formspree.io/f/xwvzgokl"
              method="POST"
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-medium text-foreground">O seu Nome</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Introduza o seu nome"
                  className="w-full bg-transparent border border-zinc-300 dark:border-white/10 p-3 text-foreground focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium text-foreground">O seu Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Introduza o seu email"
                  className="w-full bg-transparent border border-zinc-300 dark:border-white/10 p-3 text-foreground focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-foreground">A sua Mensagem</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  placeholder="Escreva a sua mensagem aqui..."
                  className="w-full bg-transparent border border-zinc-300 dark:border-white/10 p-3 text-foreground focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 flex items-center justify-center gap-2 transition-colors mt-1"
              >
                Enviar Mensagem
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}