"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n/language-context"

export function AboutSection() {
  const { t } = useLanguage()

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
            {t.about.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            {t.about.subtitle}
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
            <div className="relative overflow-hidden bg-white/5 border-white/10 p-2 shadow-2xl transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="relative w-full overflow-hidden bg-zinc-900 flex items-center justify-center">
                <Image
                  src="/images/Pedro.jpg"
                  alt={t.about.imageAlt}
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
              <h3 className="text-xl font-semibold mb-2 text-foreground">{t.about.journeyTitle}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {t.about.journeyText}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{t.about.approachTitle}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {t.about.approachText}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}