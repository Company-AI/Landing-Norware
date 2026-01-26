"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuánto tarda un proyecto?",
    answer:
      "Depende del alcance, pero la mayoría de los proyectos tienen entregas funcionales en 4 a 8 semanas. Trabajamos con sprints cortos, así que vas viendo avances reales desde el inicio. Definimos tiempos claros en el relevamiento inicial.",
  },
  {
    question: "¿Cómo definimos el alcance?",
    answer:
      "Hacemos un relevamiento inicial para entender tu operación y necesidades. Con eso armamos una propuesta con funcionalidades, etapas y presupuesto. Todo queda documentado antes de arrancar. Sin sorpresas ni agregados que inflen el proyecto.",
  },
  {
    question: "¿Se puede empezar con un MVP?",
    answer:
      "Sí, de hecho lo recomendamos. Arrancamos con las funciones esenciales, validamos que funcionan en la operación real, y después iteramos. Es más eficiente y menos riesgoso que construir todo de una.",
  },
  {
    question: "¿Qué pasa con el mantenimiento?",
    answer:
      "Ofrecemos planes de mantenimiento mensual que incluyen hosting, backups, soporte técnico y pequeños ajustes. También podés contratar horas de desarrollo para nuevas funcionalidades cuando las necesites.",
  },
  {
    question: "¿Cómo trabajan la seguridad y backups?",
    answer:
      "Usamos buenas prácticas de seguridad: HTTPS, autenticación segura, permisos por rol, validación de datos. Los backups se hacen automáticamente y se almacenan en servidores redundantes. Podemos adaptarnos a requisitos específicos si tu industria lo requiere.",
  },
  {
    question: "¿La IA es obligatoria?",
    answer:
      "No. La IA es un módulo opcional que implementamos solo cuando tiene sentido y aporta valor medible. Muchos proyectos funcionan perfectamente sin IA. Lo importante es resolver el problema de negocio, no usar tecnología por moda.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-muted-foreground text-lg">
            Respuestas directas a lo que más nos preguntan.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-xl px-6 bg-card/50 backdrop-blur-sm data-[state=open]:bg-card data-[state=open]:border-accent/30 transition-all"
            >
              <AccordionTrigger className="text-left text-foreground hover:no-underline hover:text-accent py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
