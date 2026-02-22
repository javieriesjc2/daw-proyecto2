import { motion } from 'framer-motion';

// SVG Icons to make the grid highly visual
const IconCode = () => <svg className="w-8 h-8 md:w-10 md:h-10 text-cyan-400 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
const IconSearch = () => <svg className="w-8 h-8 md:w-10 md:h-10 text-purple-400 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
const IconSparkles = () => <svg className="w-8 h-8 md:w-10 md:h-10 text-pink-400 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>;
const IconLayout = () => <svg className="w-8 h-8 md:w-10 md:h-10 text-emerald-400 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>;
const IconServer = () => <svg className="w-8 h-8 md:w-10 md:h-10 text-orange-400 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>;

const features = [
    {
        icon: <IconCode />,
        title: 'Desarrollo Frontend React Avanzado',
        desc: 'Arquitecturas escalables, componentes verdaderamente reutilizables y experiencias de usuario de altísimo rendimiento.',
        colSpan: 'md:col-span-2',
        rowSpan: 'md:row-span-1',
        animationObj: { opacity: 0, x: -50, scale: 0.95 },
        glowColor: 'group-hover:shadow-[0_0_40px_rgba(34,211,238,0.2)] group-hover:border-cyan-500/50'
    },
    {
        icon: <IconSearch />,
        title: 'Optimización SEO Técnica',
        desc: 'Tu web indexando en la primera página de resultados con prácticas On-Page ultra competitivas.',
        colSpan: 'md:col-span-1',
        rowSpan: 'md:row-span-1',
        animationObj: { opacity: 0, y: -50, scale: 0.95 },
        glowColor: 'group-hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] group-hover:border-purple-500/50'
    },
    {
        icon: <IconSparkles />,
        title: 'Animaciones 60FPS fluidas',
        desc: 'Implantamos micro-interacciones, efectos parallax y transiciones de 60 fotogramas por segundo. Un nivel de pulido visual que enamorará a tu usuario sin perjudicar la carga ni el rendimiento base.',
        colSpan: 'md:col-span-1',
        rowSpan: 'md:row-span-2',
        animationObj: { opacity: 0, x: 50, scale: 0.95 },
        glowColor: 'group-hover:shadow-[0_0_40px_rgba(236,72,153,0.2)] group-hover:border-pink-500/50'
    },
    {
        icon: <IconLayout />,
        title: 'Diseño UI/UX Impecable',
        desc: 'Interfaces que respiran clase. Alto contraste, grandes tipografías y accesibilidad en cualquier dispositivo.',
        colSpan: 'md:col-span-1',
        rowSpan: 'md:row-span-1',
        animationObj: { opacity: 0, y: 50, scale: 0.95 },
        glowColor: 'group-hover:shadow-[0_0_40px_rgba(52,211,153,0.2)] group-hover:border-emerald-500/50'
    },
    {
        icon: <IconServer />,
        title: 'Backends Robustos con IA',
        desc: 'Procesamiento de datos avanzado y APIs ultra-rápidas para aplicaciones empresariales modernas.',
        colSpan: 'md:col-span-1',
        rowSpan: 'md:row-span-1',
        animationObj: { opacity: 0, y: 50, scale: 0.95 },
        glowColor: 'group-hover:shadow-[0_0_40px_rgba(251,146,60,0.2)] group-hover:border-orange-500/50'
    }
];

export default function FeaturesBento() {
    return (
        <section className="py-32 px-6 md:px-12 w-full max-w-[1400px] mx-auto overflow-hidden">
            <div className="mb-20 text-center relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-6"
                >
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase font-bold">
                        Características Premium
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
                    className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/30 tracking-tight leading-tight"
                >
                    Todo lo que necesitas <br className="hidden md:block" /> para un éxito absoluto.
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] relative z-20">
                {features.map((feat, i) => (
                    <motion.div
                        key={i}
                        className={`
              group relative overflow-hidden rounded-[2rem] p-8 md:p-10
              border border-white/[0.08] bg-black/40 
              backdrop-blur-xl flex flex-col justify-between
              transition-all duration-500
              ${feat.colSpan} ${feat.rowSpan} ${feat.glowColor}
            `}
                        initial={feat.animationObj}
                        whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8, delay: i * 0.1, type: 'spring', bounce: 0.3 }}
                        whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    >
                        {/* Glossy top gradient */}
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Background ambient glow pulse on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                        <div className="relative z-10">
                            {feat.icon}
                        </div>

                        <div className="relative z-10 mt-auto">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight leading-snug">{feat.title}</h3>
                            <p className="text-white/60 text-lg leading-relaxed font-light">{feat.desc}</p>
                        </div>

                        {/* Massive Decal Background Layer */}
                        <motion.div
                            className="absolute -right-8 -bottom-8 text-[180px] font-black text-white/[0.02] select-none pointer-events-none leading-none tracking-tighter"
                            whileInView={{ rotate: [0, 5, 0], scale: [1, 1.05, 1] }}
                            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                        >
                            0{i + 1}
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* Background ambient light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none z-0" />
        </section>
    );
}
