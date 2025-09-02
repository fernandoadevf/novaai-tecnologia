"use client"

import { Button } from "./ui/button"
import { ArrowRight, Shield, Zap, CheckCircle, Sparkles, Brain } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/lib/translations"

// Componente Client para renderizar logo ou fallback
function ToolLogo({ tool }: { tool: { name: string; logo: string; fallback: string } }) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 mb-2 sm:mb-3">
      {!imageError ? (
        <img
          src={tool.logo}
          alt={`Logo ${tool.name}`}
          className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 object-contain"
          onError={() => setImageError(true)}
        />
      ) : (
        <span className="text-2xl sm:text-2xl lg:text-3xl">{tool.fallback}</span>
      )}
    </div>
  )
}

export function CTASection() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const { language } = useLanguage()
  const t = translations[language]
  
  // Inicializa o widget do Calendly quando o modal abrir
  useEffect(() => {
    if (isCalendlyOpen && (window as any).Calendly) {
      // Aguarda um pouco para o DOM ser renderizado
      setTimeout(() => {
        if ((window as any).Calendly) {
          (window as any).Calendly.initInlineWidget({
            url: 'https://calendly.com/ainova-adm/30min',
            parentElement: document.querySelector('.calendly-inline-widget'),
            minWidth: '320px',
            height: '600px'
          });
        }
      }, 100);  
    }
  }, [isCalendlyOpen]);

  const tools = [
    { name: "Slack", fallback: "📱", logo: "/logos/slack.png" },
    { name: "Notion", fallback: "📝", logo: "/logos/Notion.png" },
    { name: "Zapier", fallback: "🔗", logo: "/logos/zapier.png" },
    { name: "HubSpot", fallback: "🎯", logo: "/logos/hubspot.png" },
    { name: "Salesforce", fallback: "☁️", logo: "/logos/salesforce.png" },
    { name: "Google Workspace", fallback: "🔍", logo: "/logos/google.png" },
    { name: "Microsoft 365", fallback: "🪟", logo: "/logos/microsoft.png" },
    { name: "Trello", fallback: "📋", logo: "/logos/trello.png" },
    { name: "Asana", fallback: "✅", logo: "/logos/asana.png" },
    { name: "Monday.com", fallback: "📅", logo: "/logos/monday-.png" },
    { name: "Airtable", fallback: "🗃️", logo: "/logos/Airtable.png" },
    { name: "Figma", fallback: "🎨", logo: "/logos/figma.png" }
  ];

  return (
    <>
      {/* O futuro com NovaAI */}
      <section id="futuro" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F9FAFB] to-white">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal delay={100}>
            <div className="text-center space-y-8 mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00D4B3]/10 text-[#00D4B3] text-sm font-medium border border-[#00D4B3]/20">
                <Sparkles className="w-4 h-4 mr-2" />
                {t.cta.futuro.badge}
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] font-[var(--font-space-grotesk)] text-balance">
                {t.cta.futuro.title}{" "}
                <span className="text-[#00D4B3] block">{t.cta.futuro.titleHighlight}</span>
              </h2>
              
              <p className="text-xl text-[#1F2937] max-w-3xl mx-auto text-pretty leading-relaxed">
                {t.cta.futuro.subtitle}
              </p>
            </div>
          </ScrollReveal>

          {/* Visual representation */}
          <ScrollReveal delay={200}>
            <div className="relative">
              <div className="bg-gradient-to-r from-[#00D4B3]/10 to-[#0F172A]/10 rounded-3xl p-12 border border-[#00D4B3]/20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-[#0F172A]">
                      {t.cta.futuro.visual.title}
                    </h3>
                    <p className="text-[#1F2937] text-pretty leading-relaxed">
                      {t.cta.futuro.visual.description}
                    </p>
                    
                    <div className="space-y-4">
                      {t.cta.futuro.visual.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#00D4B3] rounded-full"></div>
                          <span className="text-[#1F2937]">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="w-64 h-64 bg-gradient-to-br from-[#00D4B3]/20 to-[#0F172A]/20 rounded-full mx-auto flex items-center justify-center">
                      <Brain className="w-32 h-32 text-[#00D4B3]" />
                    </div>
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#00D4B3]/30 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#0F172A]/30 rounded-full animate-pulse delay-1000"></div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main CTA Section */}
      <section id="ferramentas" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0F172A] via-[#0F172A] to-[#1F2937]">
        <div className="container mx-auto max-w-7xl">
          <ScrollReveal delay={100}>
            <div className="text-center space-y-8 mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00D4B3]/10 text-[#00D4B3] text-sm font-medium border border-[#00D4B3]/20">
                <Shield className="w-4 h-4 mr-2" />
                {t.cta.ferramentas.badge}
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-[var(--font-space-grotesk)] text-balance">
                {t.cta.ferramentas.title}{" "}
                <span className="text-[#00D4B3] block">{t.cta.ferramentas.titleHighlight}</span>
              </h2>
              
              <p className="text-lg text-white/90 max-w-3xl mx-auto text-pretty">
                {t.cta.ferramentas.subtitle}
              </p>
            </div>
          </ScrollReveal>

          {/* Slider Infinito de Logos */}
          <div className="relative overflow-hidden mb-16">
            <div className="flex animate-scroll-infinite whitespace-nowrap">
              {/* Primeira linha */}
              <div className="flex space-x-8 sm:space-x-12 lg:space-x-16 items-center flex-shrink-0">
                {tools.map((tool, index) => (
                  <div key={index} className="group flex flex-col items-center min-w-[100px] sm:min-w-[120px] lg:min-w-[140px]">
                    <ToolLogo tool={tool} />
                    <span className="text-white/80 text-xs sm:text-sm text-center group-hover:text-white transition-colors">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Segunda linha (duplicada para efeito infinito) */}
              <div className="flex space-x-8 sm:space-x-12 lg:space-x-16 items-center flex-shrink-0">
                {tools.map((tool, index) => (
                  <div key={`duplicate-1-${index}`} className="group flex flex-col items-center min-w-[100px] sm:min-w-[120px] lg:min-w-[140px]">
                    <ToolLogo tool={tool} />
                    <span className="text-white/80 text-xs sm:text-sm text-center group-hover:text-white transition-colors">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Terceira linha (mais uma duplicata para garantir continuidade) */}
              <div className="flex space-x-8 sm:space-x-12 lg:space-x-16 items-center flex-shrink-0">
                {tools.map((tool, index) => (
                  <div key={`duplicate-2-${index}`} className="group flex flex-col items-center min-w-[100px] sm:min-w-[120px] lg:min-w-[140px]">
                    <ToolLogo tool={tool} />
                    <span className="text-white/80 text-xs sm:text-sm text-center group-hover:text-white transition-colors">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Quarta linha (mais uma duplicata para garantir continuidade) */}
              <div className="flex space-x-8 sm:space-x-12 lg:space-x-16 items-center flex-shrink-0">
                {tools.map((tool, index) => (
                  <div key={`duplicate-3-${index}`} className="group flex flex-col items-center min-w-[100px] sm:min-w-[120px] lg:min-w-[140px]">
                    <ToolLogo tool={tool} />
                    <span className="text-white/80 text-xs sm:text-sm text-center group-hover:text-white transition-colors">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Quinta linha (mais uma duplicata para garantir continuidade) */}
              <div className="flex space-x-8 sm:space-x-12 lg:space-x-16 items-center flex-shrink-0">
                {tools.map((tool, index) => (
                  <div key={`duplicate-4-${index}`} className="group flex flex-col items-center min-w-[100px] sm:min-w-[120px] lg:min-w-[140px]">
                    <ToolLogo tool={tool} />
                    <span className="text-white/80 text-xs sm:text-sm text-center group-hover:text-white transition-colors">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Authority Section */}
          <ScrollReveal delay={300}>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 mb-16">
              <div className="text-center space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {t.cta.ferramentas.authority.title}
                </h3>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {t.cta.ferramentas.authority.features.map((feature, index) => (
                    <div key={index} className="space-y-3">
                      <div className="w-16 h-16 bg-[#00D4B3]/20 rounded-2xl flex items-center justify-center mx-auto">
                        {feature.title.includes("Segurança") && <Shield className="w-8 h-8 text-[#00D4B3]" />}
                        {feature.title.includes("Suporte") && <CheckCircle className="w-8 h-8 text-[#00D4B3]" />}
                        {feature.title.includes("Escalabilidade") && <Zap className="w-8 h-8 text-[#00D4B3]" />}
                      </div>
                      <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
                      <p className="text-white/80 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={400}>
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {t.cta.ferramentas.cta.title}
                </h3>
                <p className="text-lg text-white/80 max-w-2xl mx-auto">
                  {t.cta.ferramentas.cta.subtitle}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-[#00D4B3] hover:bg-[#00D4B3]/90 text-white text-lg px-8 py-6 h-auto group shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  asChild
                >
                  <a 
                    href="https://wa.me/5555519937617?text=Ol%C3%A1%20%F0%9F%91%8B%2C%20quero%20implementar%20a%20automa%C3%A7%C3%A3o%20da%20NovaAI%20no%20meu%20neg%C3%B3cio%20o%20quanto%20antes.%20Pode%20me%20ajudar%20a%20dar%20os%20pr%C3%B3ximos%20passos%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.cta.ferramentas.cta.primary}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent text-lg px-8 py-6 h-auto transition-all duration-300 hover:-translate-y-1"
                  onClick={() => setIsCalendlyOpen(true)}
                >
                  {t.cta.ferramentas.cta.secondary}
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/80">
                {t.cta.ferramentas.trustIndicators.map((indicator, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#00D4B3] rounded-full"></div>
                    <span className="text-sm">{indicator}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

        {/* Seção do Calendly inline */}
        {isCalendlyOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-[#0F172A] rounded-3xl p-6 max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-white">
                  
                </h3>
                <button 
                  onClick={() => setIsCalendlyOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors p-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Widget do Calendly inline */}
              <div className="calendly-inline-widget" 
                   data-url="https://calendly.com/ainova-adm/30min"
                   style={{ minWidth: '320px', height: '600px' }}>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }
