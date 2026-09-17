"use client"

import { useEffect, useState } from "react"

const CHARS = "!@#$%^&*()_+{}:<>?|[];',./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

export function ScrambleText({
  texts,
  scrambleSpeed = 40,
  revealSpeed = 60,
  pauseDuration = 2500,
}: {
  texts: string[]
  scrambleSpeed?: number
  revealSpeed?: number
  pauseDuration?: number
}) {
  const [displayText, setDisplayText] = useState("")
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    let interval: NodeJS.Timeout
    
    const text = texts[textIndex]
    let iteration = 0

    interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index]
            }
            if (char === " ") return " "
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join("")
      )

      if (iteration >= text.length) {
        clearInterval(interval) 
        
        timeout = setTimeout(() => {
          setTextIndex((prev) => (prev + 1) % texts.length)
        }, pauseDuration)
      }

      iteration += scrambleSpeed / revealSpeed
    }, scrambleSpeed)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [textIndex, texts, scrambleSpeed, revealSpeed, pauseDuration])

  return <span>{displayText}</span>
}