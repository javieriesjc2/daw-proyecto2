import { useEffect, useState } from 'react';
import './Meteors.css';

interface MeteorsProps {
  number?: number;
}

export default function Meteors({ number = 20 }: MeteorsProps) {
  const [meteors, setMeteors] = useState<{ id: number; left: string; delay: string; duration: string }[]>([]);

  useEffect(() => {
    setMeteors(
      Array.from({ length: number }, (_, i) => ({
        id: i,
        left: `${Math.floor(Math.random() * 100)}%`,
        delay: `${Math.random() * 4}s`,
        duration: `${Math.random() * 4 + 3}s`,
      }))
    );
  }, [number]);

  return (
    <div className="meteors-container" aria-hidden="true">
      {meteors.map((m) => (
        <span
          key={m.id}
          className="meteor"
          style={{ left: m.left, animationDelay: m.delay, animationDuration: m.duration }}
        />
      ))}
    </div>
  );
}
