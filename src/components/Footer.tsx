import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import logoTaille from "@/assets/logo-taille.png";

const Footer = () => {
  return (
    <footer id="contato" className="bg-navy-deep py-16 border-t border-white/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <img src={logoTaille} alt="Sistema Taille" className="h-10 mb-4" />
            <p className="text-white/50 font-body text-sm leading-relaxed max-w-xs">
              inteligência para escritórios contábeis
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Navegação
            </h4>
            <nav className="space-y-3">
              {[
                { label: "Soluções", href: "#solucoes" },
                { label: "Diferenciais", href: "#diferenciais" },
                { label: "Depoimentos", href: "#depoimentos" },
                { label: "Contato", href: "#contato" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-white/50 hover:text-primary text-sm font-body transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Contato
            </h4>
            <div className="space-y-3 text-sm font-body">
              <a
                href="https://wa.me/5551995539405?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20demonstra%C3%A7%C3%A3o%20do%20Sistema%20Taille"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 hover:text-primary transition-colors"
              >
                <Phone size={14} />
                (51) 99553-9405
              </a>
              <a
                href="mailto:contato@taille.com.br"
                className="flex items-center gap-2 text-white/50 hover:text-primary transition-colors"
              >
                <Mail size={14} />
                contato@taille.com.br
              </a>
              <div className="flex items-start gap-2 text-white/50">
                <MapPin size={14} className="flex-shrink-0 mt-0.5" />
                Rua Senador Pinheiro Machado, 87, Centro, Santa Cruz do Sul/RS
              </div>
              <a
                href="https://www.instagram.com/sistemataille/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 hover:text-primary transition-colors"
              >
                <Instagram size={14} />
                @sistemataille
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-white/30 text-xs font-body">
            © {new Date().getFullYear()} Sistema Taille. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
