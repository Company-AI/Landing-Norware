"use client";

import {
  Database,
  Cloud,
  Cpu,
  Code2,
  Smartphone,
  Bot,
  Workflow,
  Shield,
} from "lucide-react";

const techCategories = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Database,
    items: ["Node.js", "Python", "PostgreSQL", "Redis"],
  },
  {
    title: "Inteligencia Artificial",
    icon: Bot,
    items: ["OpenAI", "LangChain", "RAG", "Fine-tuning"],
    highlight: true,
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    items: ["AWS", "Vercel", "Docker", "CI/CD"],
  },
  {
    title: "Automatización",
    icon: Workflow,
    items: ["n8n", "Zapier", "APIs REST", "Webhooks"],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    items: ["React Native", "PWA", "Expo"],
  },
];

const principles = [
  {
    icon: Shield,
    title: "Código limpio y mantenible",
    description: "Arquitectura escalable que tu equipo puede entender y extender.",
  },
  {
    icon: Cpu,
    title: "Performance primero",
    description: "Optimizamos cada línea para que tu sistema vuele.",
  },
  {
    icon: Database,
    title: "Datos seguros",
    description: "Encriptación, backups y mejores prácticas de seguridad.",
  },
];

export function TechStack() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-20 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, oklch(0.65 0.15 200) 0%, oklch(0.55 0.22 310) 50%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/20 mb-4">
            Tecnologías
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Stack moderno, resultados reales
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Elegimos las herramientas correctas para cada proyecto. Sin modas, solo lo que funciona.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {techCategories.map((category) => (
            <div
              key={category.title}
              className={`p-5 rounded-2xl border transition-all duration-300 ${
                category.highlight
                  ? "border-accent/40 bg-accent/5 hover:bg-accent/10"
                  : "border-border bg-card/50 hover:bg-card hover:border-accent/20"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                  category.highlight
                    ? "bg-gradient-to-br from-primary/20 to-accent/30"
                    : "bg-gradient-to-br from-primary/10 to-accent/10"
                }`}
              >
                <category.icon
                  className={`w-5 h-5 ${category.highlight ? "text-accent" : "text-primary"}`}
                />
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-sm">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2 py-0.5 rounded-md bg-secondary/50 text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card/30"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center shrink-0">
                <principle.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-1 text-sm">
                  {principle.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
