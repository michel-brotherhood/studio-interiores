import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/data/content";
import { toast } from "sonner";

export default function Loja() {
  const handleProductClick = () => {
    toast.info("Funcionalidade em desenvolvimento. Em breve você poderá adquirir nossos produtos.");
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-foreground mb-6">Nossa Loja</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Móveis e objetos que fazem o espaço render. Poltronas, mesas,
              luminárias e arte com curadoria. Mix de peças atemporais + acentos
              atuais.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-spacing bg-background">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={handleProductClick}
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square bg-muted">
                  <img
                    src={product.thumb}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">Ver detalhes</p>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
                {product.price_from && (
                  <p className="text-muted-foreground mb-3">
                    A partir de{" "}
                    <span className="font-semibold text-foreground">
                      R$ {product.price_from.toLocaleString("pt-BR")}
                    </span>
                  </p>
                )}
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
