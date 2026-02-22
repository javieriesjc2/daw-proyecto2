import { useEffect, useRef } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const dot  = dotRef.current;
    const ringEl = ringRef.current;
    const trail = trailRef.current;
    if (!dot || !ringEl || !trail) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      trail.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };

    const onEnter = () => {
      ringEl.classList.add('cursor-ring--hover');
      dot.classList.add('cursor-dot--hover');
    };
    const onLeave = () => {
      ringEl.classList.remove('cursor-ring--hover');
      dot.classList.remove('cursor-dot--hover');
    };
    const onDown = () => ringEl.classList.add('cursor-ring--click');
    const onUp   = () => ringEl.classList.remove('cursor-ring--click');

    // Spring follow for ring
    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      ringEl.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`;
      rafRef.current = requestAnimationFrame(animate);
    };
    animate();

    const interactives = document.querySelectorAll('a, button, [role="button"], .service-card, .aurora-card, .depth-card');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Trail suave */}
      <div ref={trailRef} className="cursor-trail" />
      {/* Dot central */}
      <div ref={dotRef}  className="cursor-dot" />
      {/* Ring con spring */}
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
