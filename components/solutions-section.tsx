import { ScrollReveal } from "./scroll-reveal"
import { Card, CardContent } from "./ui/card"
import { Zap, Link, Brain, ArrowRight } from "lucide-react"
import { Button } from "./ui/button"

const pillars = [
  {
    icon: Zap,
    title: "Automação de Processos",
    description: "Tarefas repetitivas eliminadas com workflows inteligentes que funcionam 24/7.",
    color: "from-[#00D4B3] to-[#00D4B3]/80",
    bgColor: "bg-[#00D4B3]/10",
    iconColor: "text-[#00D4B3]"
  },
  {
    icon: Link,
    title: "Integração Inteligente",
    description: "Sistemas que conversam entre si, criando um ecossistema unificado e eficiente.",
    color: "from-[#0F172A] to-[#1F2937]",
    bgColor: "bg-[#0F172A]/10",
    iconColor: "text-[#0F172A]"
  },
  {
    icon: Brain,
    title: "IA como Colaborador",
    description: "Agentes inteligentes que respondem, analisam e executam como verdadeiros membros da equipe.",
    color: "from-[#00D4B3] to-[#00D4B3]/80",
    bgColor: "bg-[#00D4B3]/10",
    iconColor: "text-[#00D4B3]"
  }
]

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal delay={100}>
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#00D4B3]/10 text-[#00D4B3] text-sm font-medium">
              O que fazemos
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] font-[var(--font-space-grotesk)]">
              Nossa{" "}
              <span className="text-[#00D4B3] block">filosofia de transformação</span>
            </h2>
            <p className="text-lg text-[#1F2937] max-w-2xl mx-auto text-pretty">
              Não vendemos apenas automação. Criamos um ecossistema inteligente que 
              transforma a forma como sua empresa opera, liberando seu time para o que realmente importa.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <ScrollReveal key={index} delay={200 + index * 150} direction={index % 2 === 0 ? "left" : "right"}>
              <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-[#00D4B3]/20 bg-white overflow-hidden">
                <CardContent className="p-8 space-y-6">
                  {/* Icon with gradient background */}
                  <div className={`w-20 h-20 ${pillar.bgColor} rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <pillar.icon className={`w-10 h-10 ${pillar.iconColor}`} />
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-[#0F172A] font-[var(--font-space-grotesk)]">
                      {pillar.title}
                    </h3>
                    <p className="text-[#1F2937] text-pretty leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00D4B3]/5 to-[#0F172A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={600}>
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-[#00D4B3]/10 to-[#0F172A]/10 rounded-2xl p-8 border border-[#00D4B3]/20">
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
                Pronto para transformar sua operação?
              </h3>
              <p className="text-[#1F2937] mb-6 max-w-2xl mx-auto">
                Descubra como podemos automatizar processos específicos do seu negócio 
                e liberar sua equipe para focar no crescimento.
              </p>
              <Button 
                size="lg" 
                className="bg-[#00D4B3] hover:bg-[#00D4B3]/90 text-white px-8 py-6 h-auto text-lg group shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a 
                  href="https://wa.me/5555519937617?text=Ol%C3%A1%20%F0%9F%91%8B%2C%20quero%20implementar%20a%20automa%C3%A7%C3%A3o%20da%20NovaAI%20no%20meu%20neg%C3%B3cio%20o%20quanto%20antes.%20Pode%20me%20ajudar%20a%20dar%20os%20pr%C3%B3ximos%20passos%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar com especialista
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
