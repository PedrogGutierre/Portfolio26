"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-zinc-50 dark:bg-[#111111] border-t border-zinc-200 dark:border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          <div className="flex flex-col gap-4">
            <span className="text-2xl font-bold text-foreground">
              &lt;Pedro /&gt;
            </span>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Construindo o futuro, uma linha de código de cada vez. Focado em criar soluções eficientes, escaláveis e centradas no utilizador.
            </p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-6">Links Rápidos</h3>
            <ul className="flex flex-col gap-3">
              {['Início', 'Sobre', 'Projetos', 'Experiência', 'Habilidades', 'Contato'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} 
                    className="text-muted-foreground hover:text-red-500 transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-6">Conectar</h3>
            <div className="flex gap-3">
              <a 
                href="https://github.com/PedrogGutierre" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-white/5 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-red-50 dark:hover:bg-red-500/20 hover:text-red-600 dark:hover:text-red-400 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/in/pedro-gutierre-7a15b0328/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-white/5 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-red-50 dark:hover:bg-red-500/20 hover:text-red-600 dark:hover:text-red-400 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="mailto:pedrogutierreh@gmail.com" 
                className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-white/5 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-red-50 dark:hover:bg-red-500/20 hover:text-red-600 dark:hover:text-red-400 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-200 dark:border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Pedro Gutierre. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}