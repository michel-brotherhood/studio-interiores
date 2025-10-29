import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function Sobre() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Sobre Nós - Estúdio Interiores"
        description="Conheça o Estúdio Interiores, uma prática de Arquitetura e Interiores com paixão por design bonito desde 2015."
        path="/sobre"
      />
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
            <h1 className="text-foreground mb-6">Sobre Nós</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Uma prática de Arquitetura e Interiores com paixão por design
              bonito e funcional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto space-y-8 text-foreground"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">Nossa História</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Desde 2015, o Estúdio Interiores traz uma abordagem coesa para
                projetos residenciais e comerciais boutique. Nossa paixão por
                design bonito e funcional nos guia em cada projeto, criando
                espaços que contam histórias únicas.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Nossa Filosofia</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Acreditamos que bom design combina estética, função e
                tecnologia. Cada projeto é uma oportunidade de criar ambientes
                que não apenas impressionam visualmente, mas também melhoram a
                qualidade de vida de quem os habita.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Nossa Equipe</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Nossa equipe multidisciplinar reúne arquitetos, designers de
                interiores e especialistas em tecnologia, todos comprometidos
                em entregar projetos excepcionais que superam expectativas.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Nossos Valores</h2>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li>
                  <strong className="text-foreground">Excelência:</strong>{" "}
                  Buscamos a perfeição em cada detalhe
                </li>
                <li>
                  <strong className="text-foreground">Inovação:</strong>{" "}
                  Abraçamos novas tecnologias e tendências
                </li>
                <li>
                  <strong className="text-foreground">Sustentabilidade:</strong>{" "}
                  Priorizamos materiais e práticas eco-friendly
                </li>
                <li>
                  <strong className="text-foreground">Transparência:</strong>{" "}
                  Mantemos comunicação clara e honesta
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
