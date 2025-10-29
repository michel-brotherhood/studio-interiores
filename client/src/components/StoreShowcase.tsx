import { motion } from "framer-motion";
import { Link } from "wouter";
import { products } from "@/data/content";

const borderColors = [
  "border-blue-400",
  "border-red-400",
  "border-yellow-400",
  "border-green-400",
];

export default function StoreShowcase() {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">
            Shop furniture
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link href="/loja">
                <div className="group block cursor-pointer">
                  <div
                    className={`relative overflow-hidden mb-4 border-4 ${
                      borderColors[index % borderColors.length]
                    } aspect-square`}
                  >
                    <img
                      src={product.thumb}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-foreground/70 transition-colors">
                    {product.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
