import { motion } from "framer-motion";
import { Link } from "wouter";
import { projects } from "@/data/content";

const borderColors = [
  "border-pink-400",
  "border-purple-400",
  "border-green-400",
];

export default function PortfolioGrid() {
  const residentialProjects = projects.filter((p) => p.type === "Residencial").slice(0, 3);

  return (
    <section className="py-24 bg-background">
      <div className="container">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">
            Residential projects
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {residentialProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link href={`/projetos/${project.slug}`}>
                <a className="group block">
                  {/* Image with colored border */}
                  <div
                    className={`relative overflow-hidden mb-4 border-4 ${
                      borderColors[index % borderColors.length]
                    } aspect-[4/3]`}
                  >
                    <img
                      src={project.cover}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Project Info */}
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                      {project.type.toUpperCase()} / {project.year || "2024"}
                    </p>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-foreground/70 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </a>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/projetos">
            <a className="inline-block text-sm font-medium text-foreground hover:text-foreground/70 transition-colors underline underline-offset-4">
              View all projects
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
