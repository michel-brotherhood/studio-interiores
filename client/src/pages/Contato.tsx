import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contato() {
  const contactInfo = [
    {
      icon: Mail,
      label: "E-mail",
      value: "contato@estudiointeriores.com.br",
      href: "mailto:contato@estudiointeriores.com.br",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 11 99999-9999",
      href: "tel:+5511999999999",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "São Paulo, SP",
      href: null,
    },
  ];

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
            <h1 className="text-foreground mb-6">Entre em contato</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Vamos conversar sobre seu projeto. Preencha o formulário abaixo ou
              entre em contato diretamente pelos nossos canais.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4">
                  <info.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">
                  {info.label}
                </h3>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-foreground hover:text-accent transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-foreground">{info.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      <Footer />
    </div>
  );
}
