import { useMemo, useState } from 'react';
import { Award, Expand } from 'lucide-react';
import { CERTIFICATIONS, CertificateItem } from '../data/siteData';
import { ResilientImage } from './ResilientImage';
import { LightboxSlide } from './LightboxModal';

interface CertificationsSectionProps {
  onOpenLightbox: (slides: LightboxSlide[], index: number) => void;
}

type CertFilter = 'all' | CertificateItem['category'];

const CERT_TABS: { id: CertFilter; label: string }[] = [
  { id: 'all', label: 'Semua Sijil (13)' },
  { id: 'hrdcorp', label: 'HRD Corp / PSMB' },
  { id: 'isns', label: 'ISNS & GAANS' },
  { id: 'nfnlp', label: 'NFNLP USA' },
  { id: 'coaching-lab', label: 'Coaching & LAB' },
];

export function CertificationsSection({ onOpenLightbox }: CertificationsSectionProps) {
  const [filter, setFilter] = useState<CertFilter>('all');

  const filteredCerts = useMemo(() => {
    if (filter === 'all') return CERTIFICATIONS;
    return CERTIFICATIONS.filter((c) => c.category === filter);
  }, [filter]);

  const lightboxSlides: LightboxSlide[] = filteredCerts.map((c) => ({
    src: c.src,
    title: c.title,
    subtitle: c.issuer,
    meta: c.year,
  }));

  return (
    <section id="credentials" className="py-16 md:py-24 bg-[#F3F2EE]/60 border-b border-[#E5E4DF]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-[#8A2851] mb-2">
              Pentauliahan &amp; Pengiktirafan Rasmi
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-4xl font-semibold text-[#0F223A] tracking-tight text-balance">
              Arkib Sijil &amp; Pentauliahan Antarabangsa
            </h2>
            <p className="text-sm md:text-base text-[#4B5563] mt-2">
              Kesemua 13 dokumen pentauliahan rasmi daripada HRD Corp, ISNS (USA), NFNLP (USA), ICF / OUM, GAANS (New Zealand), ABNLP dan Success Strategies (Canada) — klik mana-mana sijil untuk zum resolusi tinggi.
            </p>
          </div>

          <div
            className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-[#E5E4DF] rounded-xl shrink-0"
            role="tablist"
            aria-label="Filter sijil pentauliahan"
          >
            {CERT_TABS.map((tab) => {
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

        {/* All 13 Certificate Scans Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert, idx) => (
            <button
              key={cert.id}
              type="button"
              onClick={() => onOpenLightbox(lightboxSlides, idx)}
              className="group text-left bg-white border border-[#E5E4DF] rounded-xl overflow-hidden hover:border-[#0F223A]/40 transition-colors flex flex-col cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8A2851]"
            >
              <div className="relative aspect-[3/4] w-full bg-white border-b border-[#E5E4DF] p-3 overflow-hidden">
                <ResilientImage
                  src={cert.src}
                  alt={`${cert.title} — ${cert.issuer}`}
                  fallbackTitle={cert.title}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <span className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-[#0F223A]/85 text-white inline-flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Expand className="w-4 h-4" aria-hidden="true" />
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280] mb-1.5 tabular-nums">
                    <Award className="w-3.5 h-3.5 text-[#8A2851]" aria-hidden="true" />
                    <span className="font-mono font-medium text-[#8A2851]">{cert.year}</span>
                    <span aria-hidden="true">·</span>
                    <span className="truncate">{cert.issuer}</span>
                  </div>
                  <h3 className="text-base font-semibold text-[#0F223A] leading-snug mb-1.5">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    {cert.summary}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
