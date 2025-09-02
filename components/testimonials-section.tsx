import { ScrollReveal } from "./scroll-reveal"
import { Card, CardContent } from "./ui/card"
import { Target, TrendingUp, Clock, Users, CheckCircle } from "lucide-react"

const benefits = [
  {
    icon: Target,
    title: "Seu time de vendas fecha mais negócios",
    description: "Com processos automatizados, sua equipe comercial pode focar 100% na prospecção e fechamento, sem perder tempo com tarefas administrativas.",
    color: "bg-[#00D4B3]/10",
    iconColor: "text-[#00D4B3]"
  },
  {
    icon: TrendingUp,
    title: "Seu marketing cria a próxima grande estratégia",
    description: "Libere sua equipe de marketing de rotinas repetitivas para focar na criatividade e inovação que realmente move o negócio.",
    color: "bg-[#0F172A]/10",
    iconColor: "text-[#0F172A]"
  },
  {
    icon: Clock,
    title: "Sua operação roda como um relógio suíço",
    description: "Processos automatizados garantem consistência, precisão e eficiência 24/7, permitindo que sua operação funcione perfeitamente.",
    color: "bg-[#00D4B3]/10",
    iconColor: "text-[#00D4B3]"
  }
]

export function TestimonialsSection() {
  return (
    <section id="benefits" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB]">
      <div className="container mx-auto max-w-7xl">
        <ScrollReveal delay={100}>
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#00D4B3]/10 text-[#00D4B3] text-sm font-medium">
              Benefícios Reais
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] font-[var(--font-space-grotesk)]">
              A automação não substitui pessoas —{" "}
              <span className="text-[#00D4B3] block">libera seu time para o que importa</span>
            </h2>
            <p className="text-lg text-[#1F2937] max-w-3xl mx-auto text-pretty">
              Enquanto a NovaAI cuida dos processos repetitivos, sua equipe pode focar 
              no que realmente move o negócio: inovação, estratégia e crescimento.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index} delay={200 + index * 150} direction="up">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-[#00D4B3]/20 bg-white">
                <CardContent className="p-8 space-y-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className={`w-8 h-8 ${benefit.iconColor}`} />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-[#0F172A] leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-[#1F2937] text-pretty leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Benefit indicator */}
                  <div className="flex items-center space-x-2 text-[#00D4B3] text-sm font-medium">
                    <CheckCircle className="w-4 h-4" />
                    <span>Benefício comprovado</span>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom message */}
        <ScrollReveal delay={600}>
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 border border-[#00D4B3]/20 shadow-lg">
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
                Transforme seu time em uma máquina de crescimento
              </h3>
              <p className="text-[#1F2937] max-w-2xl mx-auto">
                Com a NovaAI cuidando dos processos, sua equipe pode focar no que realmente importa: 
                inovação, estratégia e crescimento sustentável do negócio.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
