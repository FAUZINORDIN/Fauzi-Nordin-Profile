import { ArrowRight, ArrowUpRight, Expand } from 'lucide-react';
import { CONTACT_INFO, HERO_METRICS, PORTRAITS } from '../data/siteData';
import { ResilientImage } from './ResilientImage';
import { LightboxSlide } from './LightboxModal';

interface HeroSectionProps {
  onOpenLightbox: (slides: LightboxSlide[], index: number) => void;
}

export function HeroSection({ onOpenLightbox }: HeroSectionProps) {
  const mainPortrait = PORTRAITS[0];
  const avatarPortrait = PORTRAITS[2];

  return (
    <section id="top" className="pt-10 pb-16 md:pt-14 md:pb-20 border-b border-[#E5E4DF]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Two-column equal-height hero split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Brand Signature, Headline, Lead Copy, Primary Action */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2">
            <div>
              {/* Circular Avatar + Unboxed Kicker */}
              <div className="flex items-center gap-4 mb-6">
                <button
                  type="button"
                  onClick={() =>
                    onOpenLightbox(
                      PORTRAITS.map((p) => ({
                        src: p.src,
                        title: p.title,
                        subtitle: p.subtitle,
                        meta: p.date,
                      })),
                      2
                    )
                  }
                  className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#E5E4DF] bg-[#14263C] shrink-0 hover:border-[#8A2851] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8A2851]"
                  aria-label="Paparkan gambar profil Mohd Fauzi bin Nordin"
                >
                  <ResilientImage
                    src={avatarPortrait.src}
                    alt={avatarPortrait.title}
                    fallbackTitle={avatarPortrait.title}
                    className="w-full h-full object-cover object-[center_20%] scale-150"
                  />
                </button>
                <div className="text-xs md:text-sm font-medium text-[#4B5563]">
                  <p className="text-[#0F223A] font-semibold">Mohd Fauzi bin Nordin</p>
                  <p className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <span>Training</span>
                    <span aria-hidden="true">·</span>
                    <span>Coaching</span>
                    <span aria-hidden="true">·</span>
                    <span>Consulting</span>
                    <span aria-hidden="true">·</span>
                    <span>Malaysia</span>
                  </p>
                </div>
              </div>

              <h1
                className="font-[family-name:var(--font-display)] font-semibold tracking-tight text-[#0F223A] text-balance leading-[1.12] mb-6"
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.6rem)' }}
              >
                Strategik HR, Undang-Undang Buruh &amp; Transformasi Kepimpinan.
              </h1>

              <p className="text-base md:text-lg text-[#374151] leading-relaxed max-w-2xl mb-8">
                Menggabungkan lebih 30 tahun pengalaman pengurusan sumber manusia di lapangan — dari{' '}
                <span className="font-medium text-[#0F223A]">Kementerian Dalam Negeri</span>,{' '}
                <span className="font-medium text-[#0F223A]">Lembaga Lebuhraya Malaysia</span> dan{' '}
                <span className="font-medium text-[#0F223A]">PLUS Berhad</span> — bersama pendekatan{' '}
                <span className="font-medium text-[#0F223A]">Neuro-Semantics, NLP &amp; Meta-Coaching</span>{' '}
                untuk membina organisasi yang patuh undang-undang, berdisiplin dan berprestasi tinggi.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 text-sm font-semibold text-white bg-[#0F223A] hover:bg-[#8A2851] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8A2851]"
              >
                <span>Hubungi via WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#programs"
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-3 text-sm font-semibold text-[#0F223A] bg-white hover:bg-[#F3F2EE] border border-[#E5E4DF] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8A2851]"
              >
                <span>Terokai Program Latihan</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Executive Portrait (matching height) */}
          <div className="lg:col-span-5">
            <button
              type="button"
              onClick={() =>
                onOpenLightbox(
                  PORTRAITS.map((p) => ({
                    src: p.src,
                    title: p.title,
                    subtitle: p.subtitle,
                    meta: p.date,
                  })),
                  0
                )
              }
              className="group relative w-full h-[420px] sm:h-[480px] lg:h-full min-h-[420px] rounded-2xl overflow-hidden border border-[#E5E4DF] bg-[#14263C] text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8A2851]"
              aria-label="Enlarge executive portrait of Mohd Fauzi Nordin"
            >
              <ResilientImage
                src={mainPortrait.src}
                alt={mainPortrait.title}
                fallbackTitle={mainPortrait.title}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-5 md:p-6 flex items-end justify-between gap-4 text-white">
                <div>
                  <p className="text-xs text-white/80 font-medium">
                    HRD Corp Accredited Trainer · ACMC (ISNS, USA)
                  </p>
                  <p className="font-[family-name:var(--font-display)] text-lg font-semibold mt-0.5">
                    Mohd Fauzi bin Nordin
                  </p>
                </div>
                <span className="w-9 h-9 rounded-lg bg-white/15 backdrop-blur-sm border border-white/25 inline-flex items-center justify-center shrink-0">
                  <Expand className="w-4 h-4" aria-hidden="true" />
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Full-Width 4-Column KPI Strip Below Hero Split */}
        <div className="mt-10 pt-8 border-t border-[#E5E4DF] grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {HERO_METRICS.map((item) => (
            <div key={item.label}>
              <p className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold text-[#0F223A] tabular-nums">
                {item.value}
              </p>
              <p className="text-sm font-semibold text-[#111827] mt-1">{item.label}</p>
              <p className="text-xs text-[#6B7280] mt-0.5">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
