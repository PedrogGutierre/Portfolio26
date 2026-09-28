"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
} from "react"
import { translations, Language, TranslationKeys } from "./translations"

const STORAGE_KEY = "portfolio-language"
const HTML_LANG: Record<Language, string> = { pt: "pt-BR", en: "en" }
const TRANSITION_MS = 200

type LanguageContextType = {
  language: Language
  isChanging: boolean
  setLanguageWithAnimation: (lang: Language) => void
  t: TranslationKeys
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

function isLanguage(value: unknown): value is Language {
  return value === "pt" || value === "en"
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")
  const [isChanging, setIsChanging] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY)
      if (isLanguage(saved)) setLanguage(saved)
    } catch {}
  }, [])

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[language]
  }, [language])

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current)
    }
  }, [])

  const setLanguageWithAnimation = useCallback(
    (lang: Language) => {
      if (timer.current) {
        clearTimeout(timer.current)
        timer.current = null
      }
      if (lang === language) {
        setIsChanging(false)
        return
      }
      setIsChanging(true)
      timer.current = setTimeout(() => {
        setLanguage(lang)
        setIsChanging(false)
        timer.current = null
        try {
          window.localStorage.setItem(STORAGE_KEY, lang)
        } catch {}
      }, TRANSITION_MS)
    },
    [language]
  )

  return (
    <LanguageContext.Provider
      value={{
        language,
        isChanging,
        setLanguageWithAnimation,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error("useLanguage deve ser usado dentro de um LanguageProvider")
  }

  return context
}
