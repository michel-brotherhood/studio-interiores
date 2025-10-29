import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/content";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="section-spacing bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-foreground mb-4">O que nossos clientes dizem</h2>
          </div>

          {/* Testimonial Card */}
          <div className="relative bg-background rounded-2xl p-8 md:p-12 shadow-soft">
            <Quote
              size={48}
              className="text-accent/20 mb-6"
              strokeWidth={1.5}
            />

            <div className="min-h-[120px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <p className="text-xl md:text-2xl text-foreground mb-6 font-medium">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <p className="text-muted-foreground font-medium">
                    — {testimonials[currentIndex].author}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-accent w-8"
                        : "bg-muted-foreground/30"
                    }`}
                    aria-label={`Ir para depoimento ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="Próximo depoimento"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
