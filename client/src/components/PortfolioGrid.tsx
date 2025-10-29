import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { projects } from "@/data/content";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type FilterType = "Todos" | "Residencial" | "Comercial";

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("Todos");

  const filters: FilterType[] = ["Todos", "Residencial", "Comercial"];

  const filteredProjects =
    activeFilter === "Todos"
      ? projects.slice(0, 3)
      : projects.filter((p) => p.type === activeFilter).slice(0, 3);

  return (
    <section className="section-spacing bg-background">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-foreground mb-4">Projetos em destaque</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos nossos trabalhos mais recentes em design de
            interiores residencial e comercial.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link href={`/projetos/${project.slug}`}>
                  <a className="group block">
                    <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3]">
                      <img
                        src={project.cover}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-sm font-medium">
                          {project.type}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {project.area_m2}m² · {project.year}
                    </p>
                  </a>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link href="/projetos">
            <Button size="lg" variant="outline" className="group">
              Ver todos os projetos
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
