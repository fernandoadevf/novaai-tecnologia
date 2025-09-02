"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/lib/translations"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const { language, setLanguage } = useLanguage()

  const navigation = [
    { name: translations[language].nav.inicio, href: "#hero" },
    { name: translations[language].nav.oQueFazemos, href: "#solutions" },
    { name: translations[language].nav.ferramentas, href: "#ferramentas" },
    { name: translations[language].nav.contato, href: "#contact" },
  ]

  const languages = [
    { code: "pt", name: "Português", flag: "🇧🇷" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "en", name: "English", flag: "🇺🇸" },
  ]

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode as "pt" | "es" | "en")
    setIsLanguageOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A2540]/95 backdrop-blur-md border-b border-[#1DE9B6]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/logos/novaai.png" 
              alt="NovaAI Logo" 
              className="h-40 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-[#1DE9B6] transition-colors duration-200 text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Language Selector - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 px-3 py-2 text-white/80 hover:text-[#1DE9B6] transition-colors duration-200 text-sm font-medium rounded-md border border-[#1DE9B6]/20 hover:border-[#1DE9B6]/40"
              >
                <Globe className="w-4 h-4" />
                <span>{languages.find(lang => lang.code === language)?.flag}</span>
                <span className="hidden sm:inline">{languages.find(lang => lang.code === language)?.name}</span>
              </button>

              {isLanguageOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-[#0A2540] border border-[#1DE9B6]/20 rounded-lg shadow-xl backdrop-blur-md z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full px-4 py-3 text-left hover:bg-[#1DE9B6]/10 transition-colors duration-200 flex items-center space-x-3 ${
                        language === lang.code 
                          ? "text-[#1DE9B6] bg-[#1DE9B6]/10" 
                          : "text-white/80"
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="text-sm font-medium">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:text-[#1DE9B6] transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[#1DE9B6]/20 bg-[#0A2540]/95 backdrop-blur-md">
            <nav className="py-4 space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 text-white/80 hover:text-[#1DE9B6] hover:bg-[#1DE9B6]/10 transition-colors duration-200 text-sm font-medium rounded-md"
                >
                  {item.name}
                </a>
              ))}
              
              {/* Language Selector - Mobile */}
              <div className="px-4 py-2">
                <div className="text-white/60 text-xs font-medium mb-2">IDIOMA</div>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      handleLanguageChange(lang.code)
                      setIsMenuOpen(false)
                    }}
                    className={`w-full px-3 py-2 text-left rounded-md transition-colors duration-200 flex items-center space-x-3 ${
                      language === lang.code 
                        ? "text-[#1DE9B6] bg-[#1DE9B6]/10" 
                        : "text-white/80 hover:bg-[#1DE9B6]/10"
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span className="text-sm font-medium">{lang.name}</span>
                  </button>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
