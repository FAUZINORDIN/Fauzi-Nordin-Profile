import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from 'lucide-react';

export interface LightboxSlide {
  src: string;
  title: string;
  subtitle?: string;
  meta?: string;
}

interface LightboxModalProps {
  slides: LightboxSlide[];
  initialIndex: number;
  onClose: () => void;
}

export function LightboxModal({ slides, initialIndex, onClose }: LightboxModalProps) {
  const [index, setIndex] = useState(initialIndex);
  const [zoomed, setZoomed] = useState(false);

  const current = slides[index];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        setZoomed(false);
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);
      }
      if (e.key === 'ArrowRight') {
        setZoomed(false);
        setIndex((prev) => (prev + 1) % slides.length);
      }
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, slides.length]);

  if (!current) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col justify-between p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={current.title}
      onClick={onClose}
    >
      {/* Top Bar */}
      <div
        className="flex items-center justify-between gap-4 text-white max-w-6xl w-full mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="min-w-0">
          <p className="text-xs font-mono text-white/60 tabular-nums">
            {index + 1} / {slides.length}
            {current.meta ? ` · ${current.meta}` : ''}
          </p>
          <h3 className="text-base md:text-lg font-semibold truncate">{current.title}</h3>
          {current.subtitle && (
            <p className="text-xs md:text-sm text-white/75 truncate">{current.subtitle}</p>
          )}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setZoomed((z) => !z)}
            className="min-h-[40px] px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium inline-flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
          >
            {zoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
            <span>{zoomed ? 'Reset Zoom' : 'Zoom'}</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close lightbox"
            className="min-h-[40px] min-w-[40px] p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white inline-flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Frame */}
      <div
        className="relative flex-1 flex items-center justify-center my-4 overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {slides.length > 1 && (
          <button
            type="button"
            onClick={() => {
              setZoomed(false);
              setIndex((prev) => (prev - 1 + slides.length) % slides.length);
            }}
            aria-label="Previous image"
            className="fixed left-3 md:left-8 top-1/2 -translate-y-1/2 z-10 min-h-[44px] min-w-[44px] rounded-full bg-black/70 hover:bg-black text-white border border-white/20 inline-flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        <img
          src={current.src}
          alt={current.title}
          referrerPolicy="no-referrer"
          onClick={() => setZoomed((z) => !z)}
          className={`rounded-lg bg-white shadow-2xl transition-transform duration-200 ${
            zoomed
              ? 'max-w-none max-h-none w-auto h-auto scale-100 cursor-zoom-out'
              : 'max-h-[75vh] max-w-[90vw] object-contain cursor-zoom-in'
          }`}
        />

        {slides.length > 1 && (
          <button
            type="button"
            onClick={() => {
              setZoomed(false);
              setIndex((prev) => (prev + 1) % slides.length);
            }}
            aria-label="Next image"
            className="fixed right-3 md:right-8 top-1/2 -translate-y-1/2 z-10 min-h-[44px] min-w-[44px] rounded-full bg-black/70 hover:bg-black text-white border border-white/20 inline-flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Bottom Thumbnail Strip */}
      {slides.length > 1 && (
        <div
          className="flex items-center justify-center gap-2 overflow-x-auto pb-1 max-w-5xl mx-auto w-full"
          onClick={(e) => e.stopPropagation()}
        >
          {slides.map((s, i) => (
            <button
              key={`${s.src}-${i}`}
              type="button"
              onClick={() => {
                setZoomed(false);
                setIndex(i);
              }}
              aria-label={`View ${s.title}`}
              className={`h-12 w-12 shrink-0 rounded-md overflow-hidden border-2 transition-opacity cursor-pointer bg-white ${
                i === index ? 'border-[#D47D61] opacity-100' : 'border-transparent opacity-50 hover:opacity-80'
              }`}
            >
              <img src={s.src} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
