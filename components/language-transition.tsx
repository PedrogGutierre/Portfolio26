"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { useLanguage } from "@/lib/i18n/language-context"

export function LanguageTransition({ children }: { children: ReactNode }) {
  const { isChanging } = useLanguage()

  return (
    <motion.div
      initial={false}
      animate={{ opacity: isChanging ? 0 : 1 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  )
}
