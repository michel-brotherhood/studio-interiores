import { motion } from "framer-motion";
import { CheckCircle2, Lightbulb, LineChart } from "lucide-react";
import { valueProps } from "@/data/content";

const icons = [CheckCircle2, Lightbulb, LineChart];

export default function ValueProps() {
  return (
    <section className="section-spacing bg-background">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-foreground mb-6">Design que resolve problemas.</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Planejamento inteligente, materiais selecionados e execução sem
            drama — para você morar, trabalhar e receber com prazer.
          </p>
        </motion.div>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {valueProps.map((prop, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 text-accent mb-6">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {prop.title}
                </h3>
                <p className="text-muted-foreground">{prop.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
