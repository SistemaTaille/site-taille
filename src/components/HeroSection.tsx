import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import AnimatedCounter from "@/components/AnimatedCounter";

const titleParts = [
  { text: "A plataforma de inteligência dos escritórios contábeis que ", gradient: false },
  { text: "crescem com margem", gradient: true },
];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax: background moves slower, content moves faster (fades out)
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Build characters array preserving spaces
  let charIndex = 0;

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden flex items-center">
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-hero/80" />
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container mx-auto px-4 lg:px-8 pt-28 pb-16 relative z-10"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-xs font-display font-medium tracking-wide uppercase">
              Inteligência para Escritórios Contábeis
            </span>
          </motion.div>

          {/* Title with letter-by-letter reveal */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-display">
            {titleParts.map((part, partIdx) => (
              <span key={partIdx} className={part.gradient ? "text-gradient-gold" : ""}>
                {part.text.split(/(\s+)/).map((token, tokenIdx) => {
                  if (/^\s+$/.test(token)) {
                    return <span key={`${partIdx}-${tokenIdx}`}>{token}</span>;
                  }

                  return (
                    <span key={`${partIdx}-${tokenIdx}`} className="inline-block whitespace-nowrap">
                      {token.split("").map((char) => {
                        const i = charIndex++;
                        return (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: 0.3 + i * 0.025,
                              ease: "easeOut",
                            }}
                            className="inline-block"
                          >
                            {char}
                          </motion.span>
                        );
                      })}
                    </span>
                  );
                })}
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="text-xl text-white/70 max-w-xl mx-auto mb-2 font-display font-semibold"
          >
            Descubra o lucro real de cada cliente.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="text-lg text-white/50 max-w-xl mx-auto mb-10 font-body leading-relaxed"
          >
            Revele prejuízos invisíveis, organize sua carteira e tome decisões estratégicas com dados reais.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" asChild>
              <a href="https://wa.me/5551995539405?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20demonstra%C3%A7%C3%A3o%20do%20Sistema%20Taille" target="_blank" rel="noopener noreferrer">
                Agendar Demonstração
                <ArrowRight className="ml-1" />
              </a>
            </Button>
            <Button variant="hero-outline" asChild>
              <a href="#solucoes">
                <Play size={16} className="mr-1" />
                Ver Soluções
              </a>
            </Button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="mt-14 flex items-center justify-center gap-6 text-white/40 text-sm font-body"
          >
            <div className="flex items-center gap-2">
              <span className="text-primary font-display font-bold text-xl">
                <AnimatedCounter value={30} duration={5000} suffix="%+" />
              </span>
              <span>de lucratividade<br/>alcançada</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="flex items-center gap-2">
              <span className="text-primary font-display font-bold text-xl">100%</span>
              <span>feito por<br/>contadores</span>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
