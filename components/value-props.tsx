"use client";

import { Layers, Zap, Brain, LifeBuoy } from "lucide-react";

const valueProps = [
  {
    icon: Layers,
    title: "A medida de tu operación",
    description:
      "Cada sistema se diseña desde cero según tu flujo de trabajo real.",
    benefits: [
      "Sin funciones que nunca vas a usar",
      "Interfaz pensada para tu equipo",
    ],
  },
  {
    icon: Zap,
    title: "Automatización con criterio",
    description:
      "Automatizamos lo que tiene sentido, no todo lo que se pueda.",
    benefits: [
      "Integración con tus herramientas actuales",
      "Ahorro real de tiempo operativo",
    ],
  },
  {
    icon: Brain,
    title: "IA aplicada a resultados medibles",
    description:
      "Implementamos IA solo cuando mejora métricas concretas.",
    benefits: [
      "KPIs claros antes de implementar",
      "Mejoras que se pueden medir",
    ],
  },
  {
    icon: LifeBuoy,
    title: "Soporte y evolución continua",
    description:
      "Tu sistema crece con tu negocio. No te dejamos solo después del lanzamiento.",
    benefits: [
      "Mantenimiento proactivo incluido",
      "Nuevas funciones según necesites",
    ],
  },
];

export function ValueProps() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            No vendemos tecnología por moda. Construimos soluciones que funcionan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {valueProps.map((prop, index) => (
            <div
              key={prop.title}
              className="group relative p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:bg-card hover:border-accent/30 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                <prop.icon className="w-6 h-6 text-accent" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {prop.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {prop.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-2">
                {prop.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
