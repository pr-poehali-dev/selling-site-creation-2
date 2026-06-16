import { useRef, useState, useCallback } from 'react';
import Icon from '@/components/ui/icon';

interface BeforeAfterProps {
  before: string;
  after: string;
  label?: string;
}

const BeforeAfter = ({ before, after, label }: BeforeAfterProps) => {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  }, []);

  return (
    <div
      ref={ref}
      className="relative w-full aspect-[4/3] overflow-hidden rounded-sm border border-gold/30 select-none cursor-ew-resize group"
      onMouseMove={(e) => dragging.current && move(e.clientX)}
      onMouseDown={(e) => { dragging.current = true; move(e.clientX); }}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchMove={(e) => move(e.touches[0].clientX)}
    >
      <img src={after} alt="После" className="absolute inset-0 w-full h-full object-cover" draggable={false} />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={before}
          alt="До"
          className="absolute inset-0 h-full object-cover max-w-none"
          style={{ width: ref.current?.offsetWidth || '100%' }}
          draggable={false}
        />
        <span className="absolute bottom-4 left-4 text-xs tracking-[0.25em] uppercase bg-background/70 px-3 py-1 backdrop-blur-sm">До</span>
      </div>
      <span className="absolute bottom-4 right-4 text-xs tracking-[0.25em] uppercase bg-gold/90 text-gold-foreground px-3 py-1 text-primary-foreground">После</span>

      <div className="absolute top-0 bottom-0 w-[2px] bg-gold pointer-events-none" style={{ left: `${pos}%` }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-gold flex items-center justify-center shadow-lg">
          <Icon name="MoveHorizontal" size={20} className="text-primary-foreground" />
        </div>
      </div>

      {label && (
        <span className="absolute top-4 left-4 font-display text-lg italic text-foreground/90">{label}</span>
      )}
    </div>
  );
};

export default BeforeAfter;
