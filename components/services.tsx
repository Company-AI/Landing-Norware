"use client";

import {
  Database,
  Globe,
  ShoppingCart,
  Workflow,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Sistemas de gestión (ERP/CRM internos)",
    description:
      "Plataformas internas para administrar clientes, operaciones, inventario, facturación y más. Todo centralizado y accesible.",
  },
  {
    icon: Globe,
    title: "Portales y plataformas web",
    description:
      "Aplicaciones web modernas para tu equipo o tus clientes. Paneles de control, dashboards, intranets y más.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce y catálogos con integración",
    description:
      "Tiendas online conectadas a medios de pago, logística, WhatsApp y sistemas internos. Fáciles de administrar.",
  },
  {
    icon: Workflow,
    title: "Automatización e integraciones",
    description:
      "Conectamos tus sistemas entre sí: WhatsApp, medios de pago, planillas, CRMs externos. Todo fluye automáticamente.",
  },
  {
    icon: Sparkles,
    title: "IA aplicada",
    description:
      "Clasificación automática, atención asistida, análisis de datos, predicciones. Solo si mejora algo medible: tiempos, errores, respuesta.",
    highlight: true,
  },
];

export function Services() {
  return (
    <section id="servicios" className="relative py-24 md:py-32 bg-secondary/20">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-10 blur-[120px]"
          style={{
            background:
              "radial-gradient(ellipse, oklch(0.55 0.22 310) 0%, oklch(0.65 0.15 200) 50%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Servicios
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluciones técnicas para problemas operativos reales.
          </p>
        </div>

        <div className="grid gap-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative flex flex-col sm:flex-row items-start gap-4 p-6 rounded-2xl border transition-all duration-300 ${
                service.highlight
                  ? "border-accent/40 bg-accent/5 hover:bg-accent/10"
                  : "border-border bg-card/50 hover:bg-card hover:border-accent/20"
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                  service.highlight
                    ? "bg-gradient-to-br from-primary/20 to-accent/30 group-hover:from-primary/30 group-hover:to-accent/40"
                    : "bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20"
                }`}
              >
                <service.icon
                  className={`w-6 h-6 ${
                    service.highlight ? "text-accent" : "text-primary"
                  }`}
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                  {service.title}
                  {service.highlight && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-accent/20 text-accent font-medium">
                      Medible
                    </span>
                  )}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
