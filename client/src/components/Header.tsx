import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftLinks = [
    { href: "/projetos", label: "Portfolio" },
    { href: "/loja", label: "Shop" },
  ];

  const rightLinks = [
    { href: "/sobre", label: "About us" },
    { href: "/contato", label: "Contact us" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Left Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {leftLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`text-sm font-medium transition-colors cursor-pointer ${
                    isScrolled
                      ? "text-foreground hover:text-foreground/70"
                      : "text-white hover:text-white/70"
                  } ${location === link.href ? "underline underline-offset-4" : ""}`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Logo - Centered */}
          <Link href="/">
            <span
              className={`text-xl font-bold transition-colors cursor-pointer ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Estúdio
              <span className={isScrolled ? "text-foreground" : "text-white"}>
                Interiores
              </span>
            </span>
          </Link>

          {/* Right Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {rightLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`text-sm font-medium transition-colors cursor-pointer ${
                    isScrolled
                      ? "text-foreground hover:text-foreground/70"
                      : "text-white hover:text-white/70"
                  } ${location === link.href ? "underline underline-offset-4" : ""}`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={isScrolled ? "text-foreground" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-foreground" : "text-white"} />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 bg-background border-t border-border mt-2">
            <nav className="flex flex-col gap-4 pt-4">
              {[...leftLinks, ...rightLinks].map((link, index) => (
                <Link key={`${link.href}-${index}`} href={link.href}>
                  <span
                    className="text-sm font-medium text-foreground hover:text-foreground/70 cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
