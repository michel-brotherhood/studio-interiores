import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Privacidade() {
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
            <h1 className="text-foreground mb-6">Política de Privacidade</h1>
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
                  1. Informações que coletamos
                </h2>
                <p>
                  Coletamos informações que você nos fornece diretamente, como
                  nome, e-mail, telefone e mensagem quando você preenche nosso
                  formulário de contato. Essas informações são utilizadas
                  exclusivamente para responder às suas solicitações e fornecer
                  nossos serviços.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  2. Como usamos suas informações
                </h2>
                <p>
                  Utilizamos as informações coletadas para: responder às suas
                  solicitações, fornecer nossos serviços de design de
                  interiores, enviar comunicações relacionadas aos nossos
                  projetos e melhorar nossos serviços.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  3. Compartilhamento de informações
                </h2>
                <p>
                  Não vendemos, alugamos ou compartilhamos suas informações
                  pessoais com terceiros para fins de marketing. Podemos
                  compartilhar suas informações apenas quando necessário para
                  fornecer nossos serviços ou quando exigido por lei.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  4. Segurança
                </h2>
                <p>
                  Implementamos medidas de segurança adequadas para proteger
                  suas informações pessoais contra acesso não autorizado,
                  alteração, divulgação ou destruição.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  5. Seus direitos
                </h2>
                <p>
                  De acordo com a LGPD (Lei Geral de Proteção de Dados), você
                  tem o direito de acessar, corrigir, excluir ou solicitar a
                  portabilidade de suas informações pessoais. Para exercer esses
                  direitos, entre em contato conosco através dos canais
                  disponíveis.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  6. Contato
                </h2>
                <p>
                  Se você tiver dúvidas sobre esta Política de Privacidade,
                  entre em contato conosco pelo e-mail
                  contato@estudiointeriores.com.br.
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
