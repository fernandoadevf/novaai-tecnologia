"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, CheckCircle, Settings, Users, Database } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/lib/translations"

export function FeaturesSection() {
  const { language } = useLanguage()
  const t = translations[language]

  const problems = t.features.problems
  const solutions = t.features.solutions

  return (
    <section id="problema-solucao" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal delay={100}>
          <div className="text-center space-y-8 mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00D4B3]/10 text-[#00D4B3] text-sm font-medium border border-[#00D4B3]/20">
              <Zap className="w-4 h-4 mr-2" />
              {t.features.badge}
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] font-[var(--font-space-grotesk)] text-balance">
              {t.features.title}
            </h2>
            
            <p className="text-xl text-[#1F2937] max-w-3xl mx-auto text-pretty leading-relaxed">
              {t.features.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Problemas */}
          <ScrollReveal delay={200}>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-[#0F172A] text-center lg:text-left">
                Os problemas que você enfrenta
              </h3>
              
              <div className="space-y-6">
                {problems.map((problem, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] hover:border-[#00D4B3]/30 transition-all duration-300 hover:shadow-lg">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      {problem.icon === "overwhelmed" && <Users className="w-6 h-6 text-red-600" />}
                      {problem.icon === "manual" && <Settings className="w-6 h-6 text-red-600" />}
                      {problem.icon === "integration" && <Database className="w-6 h-6 text-red-600" />}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-[#0F172A] mb-2">
                        {problem.title}
                      </h4>
                      <p className="text-[#1F2937] text-pretty leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Soluções */}
          <ScrollReveal delay={300}>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-[#0F172A] text-center lg:text-left">
                Como a NovaAI resolve
              </h3>
              
              <div className="space-y-6">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-to-br from-[#00D4B3]/5 to-[#00D4B3]/10 rounded-2xl border border-[#00D4B3]/20 hover:border-[#00D4B3]/40 transition-all duration-300 hover:shadow-lg">
                    <div className="w-12 h-12 bg-[#00D4B3]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      {solution.icon === "automation" && <Zap className="w-6 h-6 text-[#00D4B3]" />}
                      {solution.icon === "connection" && <CheckCircle className="w-6 h-6 text-[#00D4B3]" />}
                      {solution.icon === "ai" && <Settings className="w-6 h-6 text-[#00D4B3]" />}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-[#0F172A] mb-2">
                        {solution.title}
                      </h4>
                      <p className="text-[#1F2937] text-pretty leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={400}>
          <div className="text-center mt-16">
            <Button 
              size="lg" 
              className="bg-[#00D4B3] hover:bg-[#00D4B3]/90 text-white px-8 py-6 h-auto text-lg group"
              asChild
            >
              <a href="#solutions">
                {t.features.cta}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
