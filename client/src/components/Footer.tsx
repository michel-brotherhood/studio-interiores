import { Link } from "wouter";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: "/projetos", label: "Portfólio" },
    { href: "/#como-trabalhamos", label: "Como trabalhamos" },
    { href: "/loja", label: "Loja" },
    { href: "/contato", label: "Contato" },
    { href: "/privacidade", label: "Privacidade" },
    { href: "/termos", label: "Termos" },
  ];

  const socialLinks = [
    { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <Link href="/">
              <span className="text-2xl font-bold tracking-tight inline-block mb-4 cursor-pointer">
                <span className="text-foreground">Estúdio</span>
                <span className="text-accent ml-1">Interiores</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Projetos de interiores que combinam estética, função e tecnologia
              — sem enrolação.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navegação</h3>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <div className="flex flex-col gap-3 mb-6">
              <a
                href="mailto:contato@estudiointeriores.com.br"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                contato@estudiointeriores.com.br
              </a>
              <a
                href="tel:+5511999999999"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                +55 11 99999-9999
              </a>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Estúdio Interiores. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
