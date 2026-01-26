"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient Blobs - matching logo colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Magenta/Purple blob - top right */}
        <div
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full opacity-25 blur-[140px] animate-blob"
          style={{
            background:
              "radial-gradient(circle, oklch(0.55 0.22 310) 0%, transparent 70%)",
          }}
        />
        {/* Teal/Cyan blob - center left */}
        <div
          className="absolute top-1/3 -left-40 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] animate-blob animation-delay-2000"
          style={{
            background:
              "radial-gradient(circle, oklch(0.65 0.15 200) 0%, transparent 70%)",
          }}
        />
        {/* Indigo blob - bottom */}
        <div
          className="absolute -bottom-40 right-1/3 w-[500px] h-[500px] rounded-full opacity-20 blur-[100px] animate-blob animation-delay-4000"
          style={{
            background:
              "radial-gradient(circle, oklch(0.5 0.18 270) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="text-center">
          {/* AI Badge - prominent */}
          <div className="inline-flex items-center gap-2 text-sm mb-6 px-4 py-2 rounded-full border border-accent/40 bg-accent/10 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-accent font-medium">
              Potenciado con Inteligencia Artificial
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight text-balance mb-6">
            Software a medida{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              + IA
            </span>{" "}
            para tu empresa
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
            Desarrollamos sistemas personalizados e implementamos soluciones de{" "}
            <span className="text-foreground font-medium">
              inteligencia artificial
            </span>{" "}
            con foco en resultados medibles. Orden, control y crecimiento para
            tu negocio.
          </p>

          {/* Trust line */}
          <p className="text-sm text-muted-foreground mb-8 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Soluciones simples, escalables y pensadas para la operatoria real.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground px-8 py-6 text-base group"
            >
              <a href="#contacto">
                Quiero una demo
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-border text-foreground hover:bg-secondary/50 px-8 py-6 text-base bg-transparent"
            >
              <a href="#ia">Ver soluciones IA</a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
