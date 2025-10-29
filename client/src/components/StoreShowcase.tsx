import { motion } from "framer-motion";
import { Link } from "wouter";
import { products } from "@/data/content";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function StoreShowcase() {
  return (
    <section className="section-spacing bg-muted/30">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-foreground mb-4">
            Móveis e objetos que fazem o espaço render.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Poltronas, mesas, luminárias e arte com curadoria. Mix de peças
            atemporais + acentos atuais.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square bg-muted">
                <img
                  src={product.thumb}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {product.name}
              </h3>
              <p className="text-muted-foreground mb-2">
                A partir de{" "}
                <span className="font-semibold text-foreground">
                  R$ {product.price_from.toLocaleString("pt-BR")}
                </span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs px-3 py-1 bg-muted rounded-full text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
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
          <Link href="/loja">
            <Button size="lg" variant="outline" className="group">
              Abrir a loja
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
