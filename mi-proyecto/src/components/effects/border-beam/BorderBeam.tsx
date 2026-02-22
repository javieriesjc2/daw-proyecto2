import './BorderBeam.css';

interface BorderBeamProps {
  size?: number;
  duration?: number;
  colorFrom?: string;
  colorTo?: string;
  borderWidth?: number;
}

export default function BorderBeam({
  size = 200,
  duration = 12,
  colorFrom = '#c0392b',
  colorTo = '#ff8c7a',
  borderWidth = 1.5,
}: BorderBeamProps) {
  return (
    <div
      className="border-beam"
      style={{
        '--size': `${size}px`,
        '--duration': `${duration}s`,
        '--color-from': colorFrom,
        '--color-to': colorTo,
        '--border-width': `${borderWidth}px`,
      } as React.CSSProperties}
    />
  );
}
