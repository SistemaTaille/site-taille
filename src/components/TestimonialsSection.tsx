import { motion } from "framer-motion";
import { MessageSquareQuote, Play } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

const testimonials = [
  {
    quote: "O Taille transformou nossas decisões estratégicas, trazendo clareza entre custos e honorários. Hoje sabemos exatamente quais clientes geram lucro ou prejuízo. Solução inteligente e indispensável para nosso escritório.",
    name: "Roberta",
    role: "Diretora da Soares e Cruz Contabilidade",
  },
  {
    quote: "O Sistema Taille contribuiu diretamente para a evolução financeira da Soma Contabilidade. Trouxe clareza sobre tempo e resultados, permitindo ajustes estratégicos que triplicaram nossa margem de lucro.",
    name: "Bruno",
    role: "Sócio proprietário da Soma Contabilidade",
  },
];

const VIDEO_EMBED_URL = "https://www.youtube.com/embed/SO97KZH9_7U";

const TestimonialsSection = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section id="depoimentos" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-display text-sm font-semibold uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-3 mb-4 text-foreground">
            Quem usa, recomenda
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Escritórios que já transformaram sua gestão com o Taille.
          </p>
        </motion.div>

        {/* Video Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-12"
        >
          <button
            onClick={() => setVideoOpen(true)}
            className="relative w-full aspect-video rounded-xl overflow-hidden group cursor-pointer border border-border shadow-card hover:shadow-card-hover transition-shadow"
          >
            <div className="absolute inset-0 bg-secondary flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-gold">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </div>
                <p className="text-secondary-foreground font-display font-semibold text-lg">
                  Veja o depoimento de quem usa o Taille
                </p>
                <p className="text-secondary-foreground/60 text-sm mt-1">
                  Clique para assistir
                </p>
              </div>
            </div>
          </button>
        </motion.div>

        <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
          <DialogContent className="max-w-[420px] p-0 overflow-hidden bg-black border-none">
            <DialogTitle className="sr-only">Depoimento em vídeo</DialogTitle>
            <div className="aspect-[9/16] w-full">
              {videoOpen && (
                <iframe
                  src={`${VIDEO_EMBED_URL}?autoplay=1`}
                  title="Depoimento Taille"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              )}
            </div>
          </DialogContent>
        </Dialog>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-xl p-8 shadow-card border border-border relative"
            >
              <MessageSquareQuote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-foreground/80 font-body text-sm leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div>
                <p className="font-display font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
