import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const steps = [
    { year: 'Fase 01', title: 'Descubrimiento Profundo', desc: 'Analizamos a fondo tu negocio, estudiamos a tu competencia y alineamos los objetivos a alcanzar para trazar una ruta tecnológica de éxito impecable.', color: 'cyan' },
    { year: 'Fase 02', title: 'Diseño UX/UI Premium', desc: 'Creamos prototipos interactivos y diseños visuales impresionantes, siempre enfocados en la conversión, el impacto visual y una usabilidad perfecta.', color: 'purple' },
    { year: 'Fase 03', title: 'Desarrollo Ágil', desc: 'Programamos la solución utilizando tecnologías de vanguardia (React, Node, etc.) con ciclos rápidos de entrega y arquitecturas 100% escalables.', color: 'pink' },
    { year: 'Fase 04', title: 'QA & Lanzamiento', desc: 'Pruebas exhaustivas de rendimiento (60fps garantizados) y seguridad antes de poner el proyecto online ante todo el mundo con un despliegue continuo (CI/CD).', color: 'emerald' },
];

export default function ScrollTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Parallax line in the middle
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section ref={containerRef} className="py-32 relative w-full overflow-hidden bg-black/60">

            {/* Background ambient lighting */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 relative z-10">

                {/* Central timeline line base */}
                <div className="absolute left-[40px] md:left-1/2 top-4 bottom-4 w-[2px] bg-white/5 -translate-x-1/2 rounded-full" />

                {/* Central timeline line active (glowing) */}
                <motion.div
                    className="absolute left-[40px] md:left-1/2 top-4 bottom-4 w-[4px] bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 -translate-x-1/2 origin-top rounded-full shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                    style={{ scaleY }}
                />

                <div className="flex flex-col gap-28 relative z-20">
                    {steps.map((step, i) => {
                        const isEven = i % 2 === 0;
                        return (
                            <div key={i} className={`flex flex-col md:flex-row items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>

                                {/* Empty space for alternating layout on desktop */}
                                <div className="hidden md:block w-1/2" />

                                {/* Timeline dot */}
                                <motion.div
                                    className={`
                     absolute left-[40px] md:left-1/2 w-6 h-6 rounded-full bg-black 
                     border-4 -translate-x-1/2 z-30
                     ${step.color === 'cyan' ? 'border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.6)]' : ''}
                     ${step.color === 'purple' ? 'border-purple-400 shadow-[0_0_20px_rgba(192,132,252,0.6)]' : ''}
                     ${step.color === 'pink' ? 'border-pink-400 shadow-[0_0_20px_rgba(244,114,182,0.6)]' : ''}
                     ${step.color === 'emerald' ? 'border-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.6)]' : ''}
                   `}
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true, amount: 0.8 }}
                                    transition={{ type: 'spring', delay: 0.1, bounce: 0.6 }}
                                />

                                {/* Content block */}
                                <motion.div
                                    className={`w-full md:w-1/2 ${isEven ? 'md:pl-[60px] pl-[80px]' : 'md:pr-[60px] pl-[80px]'} pt-8 md:pt-0`}
                                    initial={{ opacity: 0, x: isEven ? 80 : -80, scale: 0.95 }}
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    viewport={{ once: false, amount: 0.4 }}
                                    transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
                                >
                                    <div className="group bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 hover:border-white/20 transition-all duration-500 shadow-2xl relative overflow-hidden">

                                        {/* Glow hover effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        {/* Floating large number */}
                                        <span className="text-[100px] font-black text-white/[0.03] absolute -top-10 -right-6 tracking-tighter select-none transition-transform duration-700 group-hover:scale-110">
                                            0{i + 1}
                                        </span>

                                        <div className="relative z-10">
                                            <h4 className="text-3xl font-extrabold text-white mb-6 flex flex-col md:flex-row md:items-center gap-4 tracking-tight">
                                                <span className="text-cyan-400 text-xs font-mono border border-cyan-400/30 px-3 py-1.5 rounded-full uppercase tracking-widest bg-cyan-400/10 w-fit">
                                                    {step.year}
                                                </span>
                                                {step.title}
                                            </h4>
                                            <p className="text-white/70 leading-relaxed text-lg font-light">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
