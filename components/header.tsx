"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, Linkedin, Github, Menu, X } from "lucide-react"
import Link from "next/link"

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
]

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/pedro-gutierre-7a15b0328/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/PedrogGutierre", label: "GitHub" },
]

export function Header() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link 
            href="#inicio" 
            className="text-xl font-semibold text-foreground hover:text-red-500 transition-colors duration-300"
          >
            Pedro Gutierre
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {item.label}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-red-500 transition-colors duration-300 hover:scale-110 transform"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              className="relative flex h-9 w-16 items-center rounded-full bg-secondary p-1 transition-colors"
              aria-label="Alternar tema"
            >
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full bg-background shadow-sm transition-transform duration-300 ${
                  mounted && resolvedTheme === "dark" ? "translate-x-7" : "translate-x-0"
                }`}
              >
                {mounted && resolvedTheme === "dark" ? (
                  <Moon className="h-4 w-4 text-foreground" />
                ) : (
                  <Sun className="h-4 w-4 text-foreground" />
                )}
              </span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col py-4 px-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group relative py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 w-fit"
              >
                {item.label}
                <span className="absolute bottom-2 left-0 right-0 h-0.5 bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-4 mt-4 border-t border-border">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-red-500 transition-colors duration-300 hover:scale-110 transform"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
