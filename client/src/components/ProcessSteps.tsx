import { motion } from "framer-motion";
import { processSteps } from "@/data/content";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function ProcessSteps() {
  return (
    <section id="como-trabalhamos" className="section-spacing bg-muted/30">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-foreground mb-4">Como trabalhamos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um processo transparente e colaborativo, do briefing inicial até a
            entrega final.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Arrow between steps (hidden on mobile and last item) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 text-muted-foreground/30">
                  <ArrowRight size={24} />
                </div>
              )}

              <div className="bg-background rounded-2xl p-8 shadow-soft h-full">
                <div className="text-5xl font-bold text-accent/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link href="/contato">
            <Button size="lg">Agendar conversa</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
