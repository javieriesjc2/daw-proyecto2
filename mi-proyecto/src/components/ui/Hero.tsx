import AnimatedButton from "./AnimatedButton";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
}

export default function Hero({
  title = 'Bienvenido a MiProyecto',
  subtitle = 'Creando experiencias digitales con animación y diseño moderno.',
  ctaText = 'Explorar Proyectos'
}: HeroProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0 pointer-events-none" />

      <motion.div style={{ opacity: opacityText }} className="relative z-10 max-w-5xl text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-gradient mb-6 leading-tight"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <AnimatedButton variant="primary" className="text-lg px-10 py-6 neon-glow">
            {ctaText}
          </AnimatedButton>
          <AnimatedButton variant="outline" className="text-lg px-10 py-6 border-cyan-500/40 hover:border-cyan-400">
            Contáctame
          </AnimatedButton>
        </motion.div>
      </motion.div>
    </section>
  );
}