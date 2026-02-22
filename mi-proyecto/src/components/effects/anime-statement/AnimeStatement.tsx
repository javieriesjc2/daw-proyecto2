import { useEffect, useRef } from 'react';
import './AnimeStatement.css';

const lines = [
  { word: 'DISEÑA',     sub: '01', color: 'var(--white)' },
  { word: 'INNOVA',     sub: '02', color: 'var(--red-bright)' },
  { word: 'CONSTRUYE',  sub: '03', color: 'var(--white)' },
  { word: 'ESCALA',     sub: '04', color: 'var(--red-bright)' },
  { word: 'LIDERA',     sub: '05', color: 'var(--white)' },
  { word: 'TRANSFORMA', sub: '06', color: 'var(--red-bright)' },
];

function AnimeLine({ word, sub, color, index }: { word: string; sub: string; color: string; index: number }) {
  const lineRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;

    const letters = el.querySelectorAll<HTMLSpanElement>('.stmt-letter');

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;

        letters.forEach((letter, i) => {
          const delay = i * 40 + index * 80;
          letter.style.transitionDelay = `${delay}ms`;
          letter.classList.add('stmt-letter--visible');
        });

        // Animate the line underline
        const line = el.querySelector<HTMLSpanElement>('.stmt-underline');
        if (line) {
          setTimeout(() => line.classList.add('stmt-underline--visible'), index * 80 + letters.length * 40 - 100);
        }

        // Animate number
        const num = el.querySelector<HTMLSpanElement>('.stmt-num');
        if (num) {
          setTimeout(() => num.classList.add('stmt-num--visible'), index * 80);
        }

        observer.disconnect();
      }
    }, { threshold: 0.3 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div ref={lineRef} className="stmt-line" style={{ '--line-color': color } as React.CSSProperties}>
      <span className="stmt-num">{sub}</span>
      <span className="stmt-word">
        {word.split('').map((char, i) => (
          <span key={i} className="stmt-letter">
            <span className="stmt-letter__inner">{char}</span>
          </span>
        ))}
        <span className="stmt-underline" />
      </span>
      <span className="stmt-arrow">→</span>
    </div>
  );
}

export default function AnimeStatement() {
  return (
    <section className="anime-statement">
      <div className="anime-statement__label">
        <span>Lo que hacemos</span>
      </div>
      <div className="anime-statement__lines">
        {lines.map((l, i) => (
          <AnimeLine key={l.word} {...l} index={i} />
        ))}
      </div>
    </section>
  );
}
