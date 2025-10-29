import { motion } from "framer-motion";
import { whyModernPoints } from "@/data/content";
import { Check } from "lucide-react";

export default function WhyModern() {
  return (
    <section className="section-spacing bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-foreground mb-6">
              Por que elementos modernos importam
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Design moderno não é apenas estética — é uma linguagem que
              comunica clareza, qualidade e atenção aos detalhes, tanto no
              digital quanto no físico.
            </p>
            <div className="space-y-4">
              {whyModernPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                    <Check size={14} className="text-accent" strokeWidth={3} />
                  </div>
                  <p className="text-muted-foreground">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-medium">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=800&fit=crop"
                alt="Design moderno de interiores"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
