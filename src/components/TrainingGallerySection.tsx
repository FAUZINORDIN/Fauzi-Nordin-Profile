import { useMemo, useState } from 'react';
import { Calendar, Expand, MapPin } from 'lucide-react';
import { TRAINING_GALLERY } from '../data/siteData';
import { ResilientImage } from './ResilientImage';
import { LightboxSlide } from './LightboxModal';

interface TrainingGallerySectionProps {
  onOpenLightbox: (slides: LightboxSlide[], index: number) => void;
}

type GalleryFilter = 'all' | 'schedule-2026' | 'labour-law' | 'leadership-culture';

const FILTER_TABS: { id: GalleryFilter; label: string }[] = [
  { id: 'all', label: `Semua Sesi (${TRAINING_GALLERY.length})` },
  { id: 'schedule-2026', label: 'Jadual 2026' },
  { id: 'labour-law', label: 'Undang-undang Buruh & DI' },
  { id: 'leadership-culture', label: 'Kepimpinan & Budaya' },
];

export function TrainingGallerySection({ onOpenLightbox }: TrainingGallerySectionProps) {
  const [filter, setFilter] = useState<GalleryFilter>('all');

  const filteredItems = useMemo(() => {
    if (filter === 'all') return TRAINING_GALLERY;
    return TRAINING_GALLERY.filter(
      (item) => item.category === filter || item.secondaryCategory === filter
    );
  }, [filter]);

  const lightboxSlides: LightboxSlide[] = filteredItems.map((item) => ({
    src: item.src,
    title: item.title,
    subtitle: item.subtitle,
    meta: `${item.date}${item.venue ? ` · ${item.venue}` : ''}`,
  }));

  return (
    <section id="gallery" className="py-16 md:py-24 bg-[#F3F2EE]/60 border-b border-[#E5E4DF]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Header + Interactive Filter Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-[#8A2851] mb-2">
              Galeri Latihan &amp; Jadual Terkini
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-4xl font-semibold text-[#0F223A] tracking-tight text-balance">
              Dokumentasi Program Korporat &amp; Kursus Awam
            </h2>
            <p className="text-sm md:text-base text-[#4B5563] mt-2">
              Koleksi penuh gambar sesi latihan rasmi di seluruh Malaysia — klik mana-mana foto untuk paparan skrin penuh.
            </p>
          </div>

          <div
            className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-[#E5E4DF] rounded-xl shrink-0"
            role="tablist"
            aria-label="Filter galeri latihan"
          >
            {FILTER_TABS.map((tab) => {
              const active = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(tab.id)}
                  className={`min-h-[36px] px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-[#0F223A] text-white'
                      : 'text-[#4B5563] hover:text-[#0F223A] hover:bg-[#F3F2EE]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* All Training Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onOpenLightbox(lightboxSlides, idx)}
              className="group text-left bg-white border border-[#E5E4DF] rounded-xl overflow-hidden hover:border-[#0F223A]/40 transition-colors flex flex-col cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8A2851]"
            >
              {/* Frame adapts cleanly so embedded poster captions and portrait photos are never cropped */}
              <div
                className={`relative w-full overflow-hidden border-b border-[#E5E4DF] ${
                  item.hasEmbeddedCaption
                    ? 'aspect-square bg-white'
                    : 'aspect-[4/3] bg-[#F3F2EE]'
                }`}
              >
                <ResilientImage
                  src={item.src}
                  alt={`${item.title} — ${item.subtitle}`}
                  fallbackTitle={item.title}
                  className={`w-full h-full transition-transform duration-300 group-hover:scale-[1.02] ${
                    item.hasEmbeddedCaption || item.fit === 'contain' ? 'object-contain' : 'object-cover'
                  }`}
                />
                <span className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/60 text-white inline-flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Expand className="w-4 h-4" aria-hidden="true" />
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#6B7280] mb-2 tabular-nums">
                    <span className="inline-flex items-center gap-1 text-[#8A2851] font-medium">
                      <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                      {item.date}
                    </span>
                    {item.venue && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                          {item.venue}
                        </span>
                      </>
                    )}
                  </div>
                  <h3 className="text-base font-semibold text-[#0F223A] leading-snug mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#4B5563]">{item.subtitle}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
