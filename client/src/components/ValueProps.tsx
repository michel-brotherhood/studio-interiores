import { motion } from "framer-motion";

export default function ValueProps() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-lg md:text-xl leading-relaxed text-foreground">
            Estúdio Interiores é uma prática de Arquitetura e Interiores com
            paixão por design bonito. Desde 2015, trazemos uma abordagem coesa
            para projetos residenciais e comerciais boutique.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
