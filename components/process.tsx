"use client";

import { Search, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Relevamiento y alcance",
    description:
      "Entendemos tu operación, identificamos necesidades y definimos qué construir. Sin sorpresas ni alcances difusos.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Diseño y prototipo",
    description:
      "Diseñamos la solución y te mostramos un prototipo antes de escribir código. Validamos juntos cada decisión.",
  },
  {
    icon: Code,
    number: "03",
    title: "Desarrollo iterativo",
    description:
      "Construimos en sprints cortos con entregas semanales. Ves avances reales y podés dar feedback continuo.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Puesta en marcha y evolución",
    description:
      "Lanzamos, capacitamos a tu equipo y acompañamos la adopción. El sistema evoluciona según tus necesidades.",
  },
];

export function Process() {
  return (
    <section id="proceso" className="relative py-24 md:py-32 bg-secondary/20">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute bottom-0 left-1/4 w-[600px] h-[400px] rounded-full opacity-10 blur-[120px]"
          style={{
            background:
              "radial-gradient(ellipse, oklch(0.55 0.22 310) 0%, oklch(0.65 0.15 200) 50%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cómo trabajamos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Proceso claro, comunicación constante y entregas que podés ver.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-px bg-border" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Step card */}
                <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:bg-card hover:border-accent/30 transition-all duration-300 h-full">
                  {/* Number badge */}
                  <div className="absolute -top-4 left-6 px-3 py-1 bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-bold rounded-full">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center mb-4 mt-2">
                    <step.icon className="w-6 h-6 text-accent" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector - mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-px h-8 bg-border" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 flex-wrap justify-center text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Comunicación clara
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Updates semanales
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Control de alcance
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
