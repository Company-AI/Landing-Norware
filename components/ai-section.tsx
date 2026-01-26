"use client";

import { Check, ArrowRight, Sparkles, Bot, Zap, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const aiCapabilities = [
  {
    icon: Bot,
    title: "Automatización Inteligente",
    description: "Chatbots, procesamiento de documentos y flujos automatizados.",
  },
  {
    icon: Brain,
    title: "Análisis Predictivo",
    description: "Modelos que anticipan comportamientos y tendencias de negocio.",
  },
  {
    icon: Zap,
    title: "Optimización de Procesos",
    description: "IA aplicada para reducir tiempos y errores operativos.",
  },
];

const measurableOutcomes = [
  "Reducir tiempos operativos hasta 60%",
  "Disminuir errores de carga manual",
  "Mejorar tiempos de respuesta al cliente",
  "Priorizar leads automáticamente",
  "Análisis de morosidad y riesgos en tiempo real",
];

const processSteps = [
  {
    number: "1",
    title: "Diagnóstico",
    description: "Identificamos dónde la IA puede aportar valor medible a tu operación.",
  },
  {
    number: "2",
    title: "Piloto",
    description: "Implementamos una versión acotada para validar resultados rápidamente.",
  },
  {
    number: "3",
    title: "Medición y ajuste",
    description: "Evaluamos métricas reales y optimizamos según datos concretos.",
  },
];

export function AISection() {
  return (
    <section id="ia" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient blobs - matching brand colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-20 blur-[150px]"
          style={{
            background:
              "radial-gradient(circle, oklch(0.55 0.22 310) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-15 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, oklch(0.65 0.15 200) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Centered */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-sm text-accent mb-4 px-4 py-2 rounded-full border border-accent/40 bg-accent/10">
            <Sparkles className="w-4 h-4" />
            <span className="font-medium">Inteligencia Artificial</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            IA que se mide.{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              No humo.
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Solo implementamos inteligencia artificial cuando mejora algo
            concreto y medible. Nada de promesas vacías ni proyectos que
            terminan en un documento.
          </p>
        </div>

        {/* AI Capabilities Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {aiCapabilities.map((cap) => (
            <div
              key={cap.title}
              className="p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:border-accent/50 transition-colors text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                <cap.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{cap.title}</h3>
              <p className="text-sm text-muted-foreground">{cap.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Measurable Outcomes */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Resultados que puedes medir
            </h3>

            <div className="space-y-4 mb-8">
              {measurableOutcomes.map((outcome) => (
                <div key={outcome} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{outcome}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground border-l-2 border-accent/50 pl-4 italic">
              La IA es parte de las capacidades internas de Norware y se ofrece
              como módulos opcionales según cada proyecto.
            </p>
          </div>

          {/* Right Column - Process Framework */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-8 text-center">
              Nuestro framework de implementación
            </h3>

            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div key={step.number} className="relative">
                  <div className="flex items-start gap-4">
                    {/* Step number */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center shrink-0 border border-accent/30">
                      <span className="text-accent font-semibold">
                        {step.number}
                      </span>
                    </div>

                    {/* Step content */}
                    <div className="flex-1 pt-1">
                      <h4 className="font-semibold text-foreground mb-1">
                        {step.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Connector line */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-5 top-12 w-px h-6 bg-gradient-to-b from-accent/50 to-transparent" />
                  )}
                </div>
              ))}
            </div>

            {/* Arrow indicator */}
            <div className="mt-8 pt-6 border-t border-border flex items-center justify-center gap-2 text-accent">
              <ArrowRight className="w-4 h-4" />
              <span className="text-sm font-medium">
                Solo continuamos si los números lo justifican
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground px-8 py-6 text-base"
          >
            <a href="#contacto">
              Consultar sobre soluciones IA
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
