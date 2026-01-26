"use client";

import React from "react"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar, MessageCircle, Send, CheckCircle } from "lucide-react";

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contacto" className="relative py-24 md:py-32 bg-secondary/20">
      {/* Background gradient blob */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-15 blur-[120px]"
          style={{
            background:
              "radial-gradient(ellipse, oklch(0.55 0.22 310) 0%, oklch(0.65 0.15 200) 50%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Lo charlamos?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Contanos sobre tu proyecto o tu problema. Sin compromiso, analizamos
            juntos si tiene sentido trabajar en conjunto.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - CTA Buttons */}
          <div className="space-y-6">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Contacto directo
              </h3>

              <div className="space-y-4">
                <Button
                  size="lg"
                  asChild
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground justify-start gap-3 h-14"
                >
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <Calendar className="w-5 h-5" />
                    Agendar llamada
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="w-full border-border hover:bg-secondary/50 hover:border-accent/30 justify-start gap-3 h-14 bg-transparent"
                >
                  <a
                    href="https://wa.me/5493584228723"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Hablar por WhatsApp
                  </a>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-6">
                Respondemos en menos de 24 horas hábiles.
              </p>
            </div>

            {/* Trust elements */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card/30 border border-border rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-foreground mb-1">24hs</p>
                <p className="text-xs text-muted-foreground">Respuesta</p>
              </div>
              <div className="bg-card/30 border border-border rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-foreground mb-1">100%</p>
                <p className="text-xs text-muted-foreground">Sin compromiso</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Envianos un mensaje
            </h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/30 flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  ¡Mensaje enviado!
                </h4>
                <p className="text-muted-foreground">
                  Te respondemos pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Nombre
                    </Label>
                    <Input
                      id="name"
                      placeholder="Tu nombre"
                      required
                      className="bg-input border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-foreground">
                      Empresa
                    </Label>
                    <Input
                      id="company"
                      placeholder="Tu empresa"
                      className="bg-input border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    required
                    className="bg-input border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">
                    Mensaje
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Contanos sobre tu proyecto o necesidad..."
                    rows={4}
                    required
                    className="bg-input border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground gap-2"
                >
                  <Send className="w-4 h-4" />
                  Enviar mensaje
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
