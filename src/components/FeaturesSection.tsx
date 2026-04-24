import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, Users, TrendingUp, PieChart, DollarSign, Layers } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Ranking de Clientes",
    desc: "Identifique quais clientes dão lucro e quais dão prejuízo, com clareza total.",
  },
  {
    icon: PieChart,
    title: "Regime Tributário",
    desc: "Dashboards que mostram o regime tributário mais lucrativo do seu escritório.",
  },
  {
    icon: Users,
    title: "Custo por Colaborador",
    desc: "Saiba exatamente quanto cada colaborador custa e quanto gera de resultado.",
  },
  {
    icon: TrendingUp,
    title: "Comparativo de Rentabilidade",
    desc: "Compare períodos e veja a evolução da margem por cliente ou segmento.",
  },
  {
    icon: DollarSign,
    title: "Segmento Mais Lucrativo",
    desc: "Descubra quais segmentos trazem mais retorno para focar sua prospecção.",
  },
  {
    icon: Layers,
    title: "Análise de Departamentos",
    desc: "Veja quais departamentos têm maior custo e onde otimizar recursos.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const isGridInView = useInView(gridRef, { once: true, amount: 0.2 });

  return (
    <section id="solucoes" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-display text-sm font-semibold uppercase tracking-wider">
            Soluções
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-3 mb-4 text-foreground">
            Tudo que o Taille entrega para seu escritório
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Indicadores estratégicos para o seu negócio crescer com margem e clareza.
          </p>
        </motion.div>

        <motion.div
          ref={gridRef}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`${isGridInView ? "is-glow-active" : ""} grid md:grid-cols-2 lg:grid-cols-3 gap-6`}
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="glow-border-card group relative bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary/30"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold font-display text-foreground mb-2">
                {f.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
