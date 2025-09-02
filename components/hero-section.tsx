"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Check, MessageSquare, Calendar, TrendingUp, Zap, Settings, Database, Cpu, Sparkles, Zap as Lightning } from "lucide-react"

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#0A2540]">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#1DE9B6]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-[#1DE9B6]/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center py-12 lg:py-0">
        {/* Coluna Esquerda - Texto Redesenhado */}
        <div className="w-full lg:w-1/2 lg:pr-12 text-center lg:text-left mb-8 lg:mb-0">
          {/* Badge Elegante */}
          <div className="inline-flex items-center px-4 py-3 rounded-full bg-gradient-to-r from-[#1DE9B6]/20 to-[#1DE9B6]/10 text-[#1DE9B6] text-sm font-medium mb-8 border border-[#1DE9B6]/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            Revolucione seu negócio com IA
          </div>

          {/* Headline Principal com Design Moderno */}
          <div className="space-y-6 mb-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Automação</span>
              <span className="text-[#1DE9B6] block">inteligente</span>
              <span className="text-white/90 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal">
                que trabalha como um
              </span>
              <span className="text-[#1DE9B6] block relative">
                funcionário
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#1DE9B6] to-transparent rounded-full"></div>
              </span>
            </h1>
            
            {/* Subheadline Estilizada */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-6 text-white/80">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#1DE9B6] rounded-full animate-pulse"></div>
                <span className="text-lg">Sem férias</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full"></div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#1DE9B6] rounded-full animate-pulse delay-300"></div>
                <span className="text-lg">Sem pausa</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full"></div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#1DE9B6] rounded-full animate-pulse delay-600"></div>
                <span className="text-lg">Sem erro</span>
              </div>
            </div>
          </div>

          {/* CTA Principal com Design Aprimorado */}
          <div className="space-y-6">
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-gradient-to-r from-[#1DE9B6] to-[#1DE9B6]/90 hover:from-[#1DE9B6]/90 hover:to-[#1DE9B6] text-[#0A2540] text-lg px-8 py-6 h-auto font-bold shadow-2xl hover:shadow-[#1DE9B6]/25 transition-all duration-500 hover:-translate-y-1 w-full sm:w-auto"
              asChild
            >
              <a 
                href="https://wa.me/5555519937617?text=Ol%C3%A1%20%F0%9F%91%8B%2C%20quero%20implementar%20a%20automa%C3%A7%C3%A3o%20da%20NovaAI%20no%20meu%20neg%C3%B3cio%20o%20quanto%20antes.%20Pode%20me%20ajudar%20a%20dar%20os%20pr%C3%B3ximos%20passos%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Lightning className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  Quero ter um funcionário digital
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </Button>

            {/* Indicadores de Confiança */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-6 text-white/60 text-sm">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-[#1DE9B6]" />
                <span>Suporte 24/7</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-[#1DE9B6]" />
                <span>Implementação personalizada</span>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna Direita - Mockup Visual Futurista */}
        <div className="hidden lg:flex lg:w-1/2 lg:pl-12 justify-center items-center">
          <div className="relative w-full max-w-lg h-[600px]">
            {/* Container Principal 3D */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-[#1DE9B6]/10 rounded-3xl border border-[#1DE9B6]/20 backdrop-blur-sm shadow-2xl">
              {/* Elementos de Automação Flutuantes */}
              
              {/* 1. Fluxo de Mensagens */}
              <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-[#1DE9B6] to-[#1DE9B6]/80 rounded-2xl flex items-center justify-center shadow-lg animate-float">
                <MessageSquare className="w-8 h-8 text-[#0A2540]" />
              </div>
               
              {/* 2. Transformação: Mensagem → Check */}
              <div className="absolute top-8 left-32 w-16 h-16 bg-gradient-to-br from-[#0A2540] to-[#1DE9B6] rounded-2xl flex items-center justify-center shadow-lg animate-float-delayed">
                <Check className="w-8 h-8 text-white" />
              </div>
               
              {/* 3. Linha de Conexão */}
              <div className="absolute top-16 left-24 w-8 h-0.5 bg-gradient-to-r from-[#1DE9B6] to-[#0A2540] animate-pulse"></div>
               
              {/* 4. Agenda Auto-preenchida */}
              <div className="absolute top-32 left-8 w-20 h-20 bg-gradient-to-br from-[#0A2540] to-[#1DE9B6]/80 rounded-2xl flex items-center justify-center shadow-lg animate-float">
                <Calendar className="w-10 h-10 text-white" />
              </div>
               
              {/* 5. Gráfico Crescente */}
              <div className="absolute top-32 right-8 w-20 h-20 bg-gradient-to-br from-[#1DE9B6] to-[#1DE9B6]/80 rounded-2xl flex items-center justify-center shadow-lg animate-float-delayed">
                <TrendingUp className="w-10 h-10 text-[#0A2540]" />
              </div>
               
              {/* 6. Processamento Central */}
              <div className="absolute top-48 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-[#0A2540] to-[#1DE9B6] rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <Cpu className="w-12 h-12 text-white" />
              </div>
               
              {/* 7. Linhas de Conexão Radiais */}
              <div className="absolute top-60 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-[#1DE9B6] to-transparent rotate-45 animate-pulse"></div>
              <div className="absolute top-60 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-[#1DE9B6] to-transparent -rotate-45 animate-pulse"></div>
              <div className="absolute top-60 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-[#1DE9B6] to-transparent rotate-90 animate-pulse"></div>
              <div className="absolute top-60 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-[#1DE9B6] to-transparent -rotate-90 animate-pulse"></div>
               
              {/* 8. Elementos de Configuração */}
              <div className="absolute bottom-32 left-8 w-16 h-16 bg-gradient-to-br from-[#1DE9B6] to-[#1DE9B6]/80 rounded-2xl flex items-center justify-center shadow-lg animate-float">
                <Settings className="w-8 h-8 text-[#0A2540]" />
              </div>
               
              {/* 9. Banco de Dados */}
              <div className="absolute bottom-32 right-8 w-16 h-16 bg-gradient-to-br from-[#0A2540] to-[#1DE9B6] rounded-2xl flex items-center justify-center shadow-lg animate-float-delayed">
                <Database className="w-8 h-8 text-white" />
              </div>
               
              {/* 10. Energia/Processamento */}
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-[#1DE9B6] to-[#1DE9B6]/80 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                <Zap className="w-10 h-10 text-[#0A2540]" />
              </div>
               
              {/* Partículas Flutuantes */}
              <div className="absolute top-20 right-20 w-2 h-2 bg-[#1DE9B6] rounded-full animate-ping"></div>
              <div className="absolute top-40 left-20 w-1.5 h-1.5 bg-white/60 rounded-full animate-ping delay-1000"></div>
              <div className="absolute bottom-40 right-16 w-1 h-1 bg-[#1DE9B6] rounded-full animate-ping delay-2000"></div>
               
              {/* Efeito de Brilho */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1DE9B6]/5 to-transparent animate-glow"></div>
            </div>
          </div>
        </div>

        {/* Floating Elements para Mobile */}
        <div className="absolute bottom-10 left-10 hidden lg:block">
          <div className="w-16 h-16 bg-[#1DE9B6]/20 rounded-2xl rotate-12 animate-float"></div>
        </div>
        <div className="absolute top-20 right-10 hidden lg:block">
          <div className="w-12 h-12 bg-white/10 rounded-xl -rotate-12 animate-float-delayed"></div>
        </div>
      </div>
    </section>
  )
}
