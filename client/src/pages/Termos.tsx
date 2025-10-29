import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Termos() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-foreground mb-6">Termos de Uso</h1>
            <p className="text-muted-foreground">
              Última atualização: {new Date().toLocaleDateString("pt-BR")}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto prose prose-slate"
          >
            <div className="space-y-8 text-muted-foreground">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  1. Aceitação dos Termos
                </h2>
                <p>
                  Ao acessar e usar este site, você aceita e concorda em estar
                  vinculado aos termos e condições aqui estabelecidos. Se você
                  não concordar com estes termos, não use este site.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  2. Uso do Site
                </h2>
                <p>
                  Este site é fornecido para fins informativos sobre nossos
                  serviços de design de interiores. Você concorda em usar o site
                  apenas para fins legais e de maneira que não infrinja os
                  direitos de terceiros.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  3. Propriedade Intelectual
                </h2>
                <p>
                  Todo o conteúdo deste site, incluindo textos, imagens, logos e
                  design, é propriedade do Estúdio Interiores e está protegido
                  por leis de direitos autorais. Você não pode reproduzir,
                  distribuir ou usar qualquer conteúdo sem autorização prévia por
                  escrito.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  4. Serviços
                </h2>
                <p>
                  Os serviços oferecidos estão sujeitos a disponibilidade e podem
                  ser modificados ou descontinuados a qualquer momento. Nos
                  reservamos o direito de recusar serviços a qualquer pessoa por
                  qualquer motivo.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  5. Limitação de Responsabilidade
                </h2>
                <p>
                  O Estúdio Interiores não se responsabiliza por quaisquer danos
                  diretos, indiretos, incidentais ou consequenciais resultantes
                  do uso ou incapacidade de usar este site ou nossos serviços.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  6. Modificações
                </h2>
                <p>
                  Reservamo-nos o direito de modificar estes termos a qualquer
                  momento. As alterações entrarão em vigor imediatamente após a
                  publicação no site. É sua responsabilidade revisar
                  periodicamente estes termos.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  7. Contato
                </h2>
                <p>
                  Para questões sobre estes Termos de Uso, entre em contato
                  conosco pelo e-mail contato@estudiointeriores.com.br.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
