import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoTaille from "@/assets/logo-taille.png";

const navLinks = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-deep/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <img src={logoTaille} alt="Sistema Taille" className="h-10" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-primary transition-colors font-display"
            >
              {link.label}
            </a>
          ))}
          <Button variant="nav-cta" size="sm" asChild>
            <a href="https://wa.me/5551995539405?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20demonstra%C3%A7%C3%A3o%20do%20Sistema%20Taille" target="_blank" rel="noopener noreferrer">
              Agendar Demo
            </a>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-navy-deep/98 backdrop-blur-md px-4 pb-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-white/80 hover:text-primary font-display text-sm border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <Button variant="nav-cta" className="w-full mt-4" asChild>
            <a href="https://wa.me/5551995539405?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20demonstra%C3%A7%C3%A3o%20do%20Sistema%20Taille" target="_blank" rel="noopener noreferrer">
              Agendar Demo
            </a>
          </Button>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
