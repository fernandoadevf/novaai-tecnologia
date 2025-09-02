"use client"

import { ScrollReveal } from "./scroll-reveal"
import { TrendingUp, Target, Users } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/lib/translations"

export function TestimonialsSection() {
  const { language } = useLanguage()
  const t = translations[language]

  const benefits = t.testimonials.benefits

  return (
    <section id="benefits" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F9FAFB] to-white">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal delay={100}>
          <div className="text-center space-y-8 mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00D4B3]/10 text-[#00D4B3] text-sm font-medium border border-[#00D4B3]/20">
              <TrendingUp className="w-4 h-4 mr-2" />
              {t.testimonials.badge}
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] font-[var(--font-space-grotesk)] text-balance">
              {t.testimonials.title}
            </h2>
            
            <p className="text-xl text-[#1F2937] max-w-3xl mx-auto text-pretty leading-relaxed">
              {t.testimonials.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] hover:border-[#00D4B3]/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00D4B3]/20 to-[#00D4B3]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon === "sales" && <TrendingUp className="w-8 h-8 text-[#00D4B3]" />}
                    {benefit.icon === "marketing" && <Target className="w-8 h-8 text-[#00D4B3]" />}
                    {benefit.icon === "operations" && <Users className="w-8 h-8 text-[#00D4B3]" />}
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#0F172A] mb-4 group-hover:text-[#00D4B3] transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-[#1F2937] text-pretty leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
