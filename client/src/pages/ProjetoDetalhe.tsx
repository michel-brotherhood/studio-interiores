import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/data/content";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Ruler, Check } from "lucide-react";
import NotFound from "./NotFound";

export default function ProjetoDetalhe() {
  const params = useParams();
  const slug = params.slug;
  
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <NotFound />;
  }

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
          >
            <Link href="/projetos">
              <Button variant="ghost" className="mb-6 group">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Voltar para projetos
              </Button>
            </Link>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium">
                {project.type}
              </span>
            </div>

            <h1 className="text-foreground mb-6">{project.title}</h1>

            <div className="flex flex-wrap gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Ruler size={20} />
                <span>{project.area_m2}m²</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={20} />
                <span>{project.year}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cover Image */}
      <section className="section-spacing bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-medium mb-12"
          >
            <img
              src={project.cover}
              alt={project.title}
              className="w-full aspect-[16/9] object-cover"
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Sobre o projeto
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {project.description}
                </p>

                <h3 className="text-xl font-bold text-foreground mb-4">
                  Destaques
                </h3>
                <ul className="space-y-3 mb-12">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                        <Check size={14} className="text-accent" strokeWidth={3} />
                      </div>
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Gallery */}
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Galeria de imagens
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.gallery.slice(1).map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="rounded-2xl overflow-hidden shadow-soft"
                    >
                      <img
                        src={image}
                        alt={`${project.title} - Imagem ${index + 2}`}
                        className="w-full aspect-[4/3] object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-muted/30 rounded-2xl p-8 sticky top-24"
              >
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Interessado em um projeto similar?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Entre em contato conosco para discutir como podemos criar um
                  espaço único para você.
                </p>
                <Link href="/contato">
                  <Button size="lg" className="w-full">
                    Solicitar proposta
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
