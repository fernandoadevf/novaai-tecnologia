"use client"

import { Mail, Phone } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/lib/translations"

export function Footer() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-muted-foreground text-lg">
              {t.footer.description}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Mail className="w-5 h-5 text-primary" />
              <span>ainova.adm@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Phone className="w-5 h-5 text-primary" />
              <span>+55 51 9937-6172</span>
            </div>
          </div>
          
          <div className="border-t border-border w-full pt-6">
            <p className="text-muted-foreground text-sm text-center">
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
