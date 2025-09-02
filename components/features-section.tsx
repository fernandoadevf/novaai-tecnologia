import { ScrollReveal } from "./scroll-reveal"
import { Clock, Users, Zap, Target, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "./ui/button"

export function FeaturesSection() {
  return (
    <section id="problema-solucao" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB]">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <ScrollReveal delay={100}>
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#00D4B3]/10 text-[#00D4B3] text-sm font-medium">
              Problema x Solução
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] font-[var(--font-space-grotesk)]">
              As dores que sua empresa{" "}
              <span className="text-[#00D4B3]">não precisa mais sentir</span>
            </h2>
            <p className="text-lg text-[#1F2937] max-w-2xl mx-auto text-pretty">
              Identificamos os principais desafios que limitam o crescimento do seu negócio 
              e criamos soluções inteligentes para cada um deles.
            </p>
          </div>
        </ScrollReveal>

        {/* Problems */}
        <ScrollReveal delay={200}>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-[#0F172A]">Equipes Sobrecarregadas</h3>
              <p className="text-[#1F2937] text-pretty">
                Tarefas repetitivas consomem tempo valioso da sua equipe, 
                impedindo que foquem no que realmente importa.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-[#0F172A]">Tempo Perdido</h3>
              <p className="text-[#1F2937] text-pretty">
                Processos manuais e desorganizados fazem com que horas sejam 
                desperdiçadas em atividades que poderiam ser automatizadas.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-[#0F172A]">Falta de Integração</h3>
              <p className="text-[#1F2937] text-pretty">
                Ferramentas que não conversam entre si criam silos de informação 
                e processos fragmentados.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Solutions */}
        <ScrollReveal delay={300}>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#00D4B3]/10">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4">
                Como a NovaAI resolve isso
              </h3>
              <p className="text-lg text-[#1F2937] max-w-2xl mx-auto">
                Transformamos problemas em oportunidades com soluções inteligentes 
                que funcionam 24/7 para o seu negócio.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-[#00D4B3]/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-10 h-10 text-[#00D4B3]" />
                </div>
                <h4 className="text-xl font-semibold text-[#0F172A]">Automação Ponta a Ponta</h4>
                <p className="text-[#1F2937] text-pretty">
                  Eliminamos tarefas repetitivas com workflows inteligentes que 
                  funcionam de forma autônoma e sem erros.
                </p>
                <div className="flex items-center justify-center space-x-2 text-[#00D4B3] text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Processos otimizados</span>
                </div>
              </div>

              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-[#0F172A]/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-10 h-10 text-[#0F172A]" />
                </div>
                <h4 className="text-xl font-semibold text-[#0F172A]">Integração Inteligente</h4>
                <p className="text-[#1F2937] text-pretty">
                  Conectamos suas ferramentas favoritas: n8n, CRM, WhatsApp, 
                  360Atendimento e muito mais.
                </p>
                <div className="flex items-center justify-center space-x-2 text-[#0F172A] text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Sistemas conectados</span>
                </div>
              </div>

              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-[#00D4B3]/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-[#00D4B3]" />
                </div>
                <h4 className="text-xl font-semibold text-[#0F172A]">IA como Colaborador</h4>
                <p className="text-[#1F2937] text-pretty">
                  Agentes inteligentes que respondem, analisam e executam tarefas 
                  como verdadeiros membros da sua equipe.
                </p>
                <div className="flex items-center justify-center space-x-2 text-[#00D4B3] text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Agentes inteligentes</span>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button 
                size="lg" 
                className="bg-[#00D4B3] hover:bg-[#00D4B3]/90 text-white px-8 py-6 h-auto text-lg group"
                asChild
              >
                <a href="#solutions">
                  Ver todas as soluções
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
