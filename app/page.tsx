import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ValueProps } from "@/components/value-props";
import { Services } from "@/components/services";
import { AISection } from "@/components/ai-section";
import { TechStack } from "@/components/tech-stack";
import { Process } from "@/components/process";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <ValueProps />
      <Services />
      <AISection />
      <TechStack />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
