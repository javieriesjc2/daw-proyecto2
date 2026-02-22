import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
    title?: string;
    subtitle?: string;
    children?: ReactNode;
    className?: string;
    image?: string;
    footer?: ReactNode;
    delay?: number;
}

export default function Card({ title, subtitle, children, className = '', image, footer, delay = 0 }: CardProps) {
    return (
        <motion.div
            className={`bg-white/3 border border-white/6 rounded-lg p-6 ${className}`}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay, type: 'spring', bounce: 0.3 }}
        >
            {image && <div className="mb-4 rounded overflow-hidden"><img src={image} alt={title || 'card image'} className="w-full h-48 object-cover" /></div>}
            {title && <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>}
            {subtitle && <p className="text-sm text-white/70 mb-4">{subtitle}</p>}
            <div className="text-white/90 mb-4">{children}</div>
            {footer && <div className="pt-3 border-t border-white/6">{footer}</div>}
        </motion.div>
    );
}
