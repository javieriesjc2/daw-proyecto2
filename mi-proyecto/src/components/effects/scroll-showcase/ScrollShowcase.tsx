import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import './ScrollShowcase.css';

const projects = [
  { id: '01', title: 'E-Commerce Platform', tag: 'Desarrollo Web', year: '2025', color: '#c0392b' },
  { id: '02', title: 'Mobile Banking App', tag: 'Apps Móviles', year: '2025', color: '#7a1f16' },
  { id: '03', title: 'AI Dashboard', tag: 'Inteligencia Artificial', year: '2024', color: '#e74c3c' },
  { id: '04', title: 'Cloud Infrastructure', tag: 'Cloud & DevOps', year: '2024', color: '#c0392b' },
  { id: '05', title: 'Design System', tag: 'Diseño UI/UX', year: '2024', color: '#7a1f16' },
  { id: '06', title: 'SaaS Analytics', tag: 'Consultoría Tech', year: '2023', color: '#e74c3c' },
];

// ── CARD que aparece desde el fondo con parallax ──────────────────
function DepthCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const y         = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const scale     = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.95]);
  const opacity   = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const rotateX   = useTransform(scrollYProgress, [0, 0.3], [25, 0]);

  const springY = useSpring(y, { stiffness: 80, damping: 20 });

  return (
    <motion.div
      ref={ref}
      className="depth-card"
      style={{ y: springY, scale, opacity, rotateX, transformPerspective: 1000 }}
      transition={{ delay: index * 0.05 }}
    >
      <div className="depth-card__number">{project.id}</div>
      <div className="depth-card__tag">{project.tag}</div>
      <h3 className="depth-card__title">{project.title}</h3>
      <div className="depth-card__footer">
        <span className="depth-card__year">{project.year}</span>
        <div className="depth-card__arrow">→</div>
      </div>
      <div className="depth-card__line" style={{ background: project.color }} />
    </motion.div>
  );
}

// ── HORIZONTAL SCROLL ─────────────────────────────────────────────
function HorizontalScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-62%']);
  const springX = useSpring(x, { stiffness: 60, damping: 20 });

  const words = ['INNOVA', 'DISEÑA', 'CONSTRUYE', 'ESCALA', 'LIDERA', 'TRANSFORMA'];

  return (
    <div ref={ref} className="hscroll-wrapper">
      <div className="hscroll-sticky">
        <motion.div className="hscroll-track" style={{ x: springX }}>
          {words.map((word, i) => (
            <div key={i} className="hscroll-item">
              <span className="hscroll-item__num">0{i + 1}</span>
              <span className={`hscroll-item__word ${i % 2 === 0 ? '' : 'outline'}`}>{word}</span>
            </div>
          ))}
        </motion.div>

        {/* Barra de progreso del scroll horizontal */}
        <div className="hscroll-progress-bar">
          <motion.div className="hscroll-progress-fill" style={{ scaleX: scrollYProgress, transformOrigin: '0%' }} />
        </div>
      </div>
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────
export default function ScrollShowcase() {
  return (
    <div className="scroll-showcase">

      {/* PARTE 1: Horizontal scroll con palabras */}
      <HorizontalScroll />

      {/* PARTE 2: Cards desde el fondo en grid */}
      <section className="depth-grid-section">
        <div className="depth-grid-header">
          <div className="section-label">
            <div className="section-label__line" />
            <span className="section-label__text">Proyectos destacados</span>
          </div>
          <h2 className="section-title">CASOS DE<br />ÉXITO</h2>
        </div>

        <div className="depth-grid">
          {projects.map((p, i) => (
            <DepthCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </section>

    </div>
  );
}
