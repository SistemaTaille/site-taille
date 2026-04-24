import { motion } from "framer-motion";
import { Check, X, Plug } from "lucide-react";

const problems = [
  { text: "Escritórios trabalham muito e não sabem onde está o lucro", type: "problem" },
  { text: "Todo escritório tem clientes que dão prejuízo", type: "problem" },
  { text: "Crescer sem margem é crescer errado", type: "problem" },
];

const solutions = [
  { text: "Clareza para agir com dados reais de rentabilidade" },
  { text: "Dados seguros para decisões mais assertivas" },
  { text: "Margem organizada para crescer com estratégia" },
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="py-24 bg-hero relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-display text-sm font-semibold uppercase tracking-wider">
            Diferenciais
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-3 mb-4 text-white">
            O Taille não organiza tarefas.
            <br />
            <span className="text-gradient-gold">Ele organiza a rentabilidade.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
          >
            <h3 className="text-lg font-bold font-display text-white/50 mb-6 uppercase tracking-wider text-sm">
              O problema do mercado
            </h3>
            <div className="space-y-5">
              {problems.map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-destructive" />
                  </div>
                  <span className="text-white/70 font-body">{p.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary/5 backdrop-blur-sm rounded-xl p-8 border border-primary/20"
          >
            <h3 className="text-lg font-bold font-display text-primary mb-6 uppercase tracking-wider text-sm">
              A transformação do Taille
            </h3>
            <div className="space-y-5">
              {solutions.map((s, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-white/80 font-body">{s.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Integration highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-primary/30 shadow-gold text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/20 border border-primary/40 mb-5">
              <Plug className="w-7 h-7 text-primary" />
            </div>
            <p className="text-xl md:text-2xl font-display text-white leading-relaxed">
              O Taille é <span className="text-gradient-gold font-bold">integrado </span> com os principais sistemas contábeis: <span className="text-gradient-gold font-bold">Domínio, Questor e SCI</span>.
            </p>
            <p className="text-white/60 font-body text-sm md:text-base mt-3">
              Conecte sua operação sem retrabalho e ganhe tempo para o que realmente importa.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
