import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="section-spacing bg-gradient-to-br from-accent/10 via-background to-primary/10">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-foreground mb-6">
            Pronto para um espaço mais inteligente?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Vamos tirar seu projeto do papel — com estética atual, ergonomia
            certa e execução redonda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contato">
              <Button size="lg" className="min-w-[200px]">
                Começar agora
              </Button>
            </Link>
            <Link href="/projetos">
              <Button size="lg" variant="outline" className="min-w-[200px] group">
                Ver portfólio
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
