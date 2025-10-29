import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/data/content";

type FilterType = "Todos" | "Residencial" | "Comercial";

export default function Projetos() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("Todos");

  const filters: FilterType[] = ["Todos", "Residencial", "Comercial"];

  const filteredProjects =
    activeFilter === "Todos"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

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
            <h1 className="text-foreground mb-6">Nossos Projetos</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Explore nossa coleção de projetos residenciais e comerciais,
              cada um com sua identidade única e soluções personalizadas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-spacing bg-background">
        <div className="container">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
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
                    <p className="text-sm text-muted-foreground mb-2">
                      {project.area_m2}m² · {project.year}
                    </p>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
