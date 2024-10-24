'use client'

import React, { useState, useEffect } from 'react'
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  texts: string[]
  className?: string
}

export function AnimatedText({ texts, className }: AnimatedTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const typingInterval = 100 // Adjust for faster/slower typing
    const deletingInterval = 50 // Adjust for faster/slower deleting
    const pauseInterval = 1000 // Pause before starting to delete or type next word

    let timer: NodeJS.Timeout

    if (isDeleting) {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(prev => prev.slice(0, -1))
        }, deletingInterval)
      } else {
        setIsDeleting(false)
        setCurrentTextIndex(prev => (prev + 1) % texts.length)
        timer = setTimeout(() => {
          // Pause before starting to type the next word
        }, pauseInterval)
      }
    } else {
      if (currentText.length < texts[currentTextIndex].length) {
        timer = setTimeout(() => {
          setCurrentText(texts[currentTextIndex].slice(0, currentText.length + 1))
        }, typingInterval)
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true)
        }, pauseInterval)
      }
    }

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentTextIndex, texts])

  return (
    <span className={cn("inline-block", className)}>
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  )
}