"use client"

import { useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export function LanguageManager() {
  const { language } = useLanguage()

  useEffect(() => {
    const htmlElement = document.documentElement
    
    switch (language) {
      case 'pt':
        htmlElement.lang = 'pt-BR'
        break
      case 'es':
        htmlElement.lang = 'es-ES'
        break
      case 'en':
        htmlElement.lang = 'en-US'
        break
      default:
        htmlElement.lang = 'pt-BR'
    }
  }, [language])

  return null
}
