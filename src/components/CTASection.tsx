import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-hero relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6 leading-tight">
            Seu escritório cresce com{" "}
            <span className="text-gradient-gold">margem ou só com volume?</span>
          </h2>
          <p className="text-white/60 text-lg font-body mb-10 max-w-xl mx-auto">
            Descubra o lucro real de cada cliente. Agende uma demonstração gratuita e veja como o Taille transforma sua gestão.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <a href="https://wa.me/5551995539405?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20demonstra%C3%A7%C3%A3o%20do%20Sistema%20Taille" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={20} />
                Agendar Demonstração
                <ArrowRight size={18} />
              </a>
            </Button>
          </div>

          <p className="mt-6 text-white/30 text-sm font-body">
            Sem compromisso. Converse com nosso time pelo WhatsApp.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
