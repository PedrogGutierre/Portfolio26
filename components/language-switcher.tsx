"use client"

import { useEffect, useRef, useState } from "react"
import type { ReactElement } from "react"
import { Check, ChevronDown, Globe } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import { cn } from "@/lib/utils"
import type { Language } from "@/lib/i18n/translations"

function BrazilFlag() {
  return (
    <svg viewBox="0 0 20 14" className="h-3.5 w-5 rounded-[2px]" aria-hidden="true">
      <rect width="20" height="14" fill="#009c3b" />
      <polygon points="10,1.5 18,7 10,12.5 2,7" fill="#ffdf00" />
      <circle cx="10" cy="7" r="3.2" fill="#002776" />
    </svg>
  )
}

function UsaFlag() {
  const stripe = 14 / 13
  return (
    <svg viewBox="0 0 20 14" className="h-3.5 w-5 rounded-[2px]" aria-hidden="true">
      <rect width="20" height="14" fill="#b22234" />
      {[1, 3, 5, 7, 9, 11].map((i) => (
        <rect key={i} y={i * stripe} width="20" height={stripe} fill="#ffffff" />
      ))}
      <rect width="8.5" height={stripe * 7} fill="#3c3b6e" />
    </svg>
  )
}

const options: {
  code: Language
  short: string
  name: string
  Flag: () => ReactElement
}[] = [
  { code: "pt", short: "PT", name: "Português", Flag: BrazilFlag },
  { code: "en", short: "EN", name: "English", Flag: UsaFlag },
]

export function LanguageSwitcher() {
  const { t, language, setLanguageWithAnimation } = useLanguage()
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    const onPointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }

    document.addEventListener("mousedown", onPointerDown)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("mousedown", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  const current = options.find((option) => option.code === language) ?? options[0]

  const handleSelect = (code: Language) => {
    setLanguageWithAnimation(code)
    setOpen(false)
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setOpen((value) => !value)}
        className="flex h-9 cursor-pointer items-center gap-1.5 rounded-full bg-secondary px-2.5 text-xs sm:gap-2 sm:px-3 font-semibold text-foreground transition-colors hover:bg-secondary/70"
        aria-label={t.header.language}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <Globe className="hidden h-4 w-4 text-red-500 sm:block" />
        <current.Flag />
        <span className="hidden sm:inline">{current.short}</span>
        <ChevronDown
          className={cn("h-3 w-3 transition-transform duration-200", open && "rotate-180")}
        />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-lg border border-border bg-background shadow-xl"
        >
          {options.map((option) => (
            <button
              key={option.code}
              role="menuitem"
              onClick={() => handleSelect(option.code)}
              className={cn(
                "flex w-full cursor-pointer items-center justify-between px-4 py-3 text-sm text-foreground transition-colors hover:bg-secondary",
                language === option.code && "bg-secondary text-red-500"
              )}
            >
              <span className="flex items-center gap-3">
                <option.Flag />
                <span>{option.name}</span>
              </span>
              {language === option.code && <Check className="h-4 w-4" />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
