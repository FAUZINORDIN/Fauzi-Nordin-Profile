import { Expand } from 'lucide-react';
import { JOURNEY_PHOTOS, JOURNEY_PILLARS, PORTRAITS } from '../data/siteData';
import { ResilientImage } from './ResilientImage';
import { LightboxSlide } from './LightboxModal';

interface JourneyBiodataSectionProps {
  onOpenLightbox: (slides: LightboxSlide[], index: number) => void;
}

const APPROACH_ITEMS = [
  {
    title: 'Berteraskan Pengalaman Sebenar',
    detail: 'Setiap solusi yang diberikan datang daripada pengalaman praktikal mengurus kes di lapangan, bukan teori semata-mata.',
  },
  {
    title: 'Gabungan HR & Psikologi Manusia',
    detail: 'Menggunakan pendekatan NLP, Meta-Coaching dan Neuro-Semantics untuk memahami dan membangunkan potensi manusia.',
  },
  {
    title: 'Fokus kepada Penyelesaian Strategik',
    detail: 'Bukan sekadar menyelesaikan masalah semasa — tetapi membina sistem dan disiplin yang mencegah masalah berulang.',
  },
];

export function JourneyBiodataSection({ onOpenLightbox }: JourneyBiodataSectionProps) {
  const journeySlides: LightboxSlide[] = JOURNEY_PHOTOS.map((p) => ({
    src: p.src,
    title: p.title,
    subtitle: p.subtitle,
    meta: p.date,
  }));

  const portraitSlides: LightboxSlide[] = PORTRAITS.map((p) => ({
    src: p.src,
    title: p.title,
    subtitle: p.subtitle,
    meta: p.date,
  }));

  return (
    <section id="journey" className="py-16 md:py-24 border-b border-[#E5E4DF]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 space-y-20">
        {/* Part 1: My Journey Narrative + 3 Studio Team Photographs */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold text-[#8A2851] mb-2">
                My Journey · Perjalanan Profesional
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-4xl font-semibold text-[#0F223A] tracking-tight text-balance leading-tight">
                Dari Praktisi HR ke Strategic HR Trainer, Coach &amp; Consultant.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-4 text-[15px] md:text-base text-[#374151] leading-relaxed">
              <p>
                Saya tidak bermula sebagai trainer. Saya bermula di lapangan — mengurus manusia dalam situasi sebenar yang kompleks dan mencabar. Kerjaya saya bermula dalam sektor kerajaan di{' '}
                <strong className="font-semibold text-[#0F223A]">Kementerian Dalam Negeri</strong>, sebelum berkembang ke{' '}
                <strong className="font-semibold text-[#0F223A]">Lembaga Lebuhraya Malaysia</strong> dan seterusnya ke sektor korporat. Di sinilah saya berdepan realiti sebenar dunia HR — konflik pekerja, kes disiplin, rundingan kesatuan dan tekanan organisasi.
              </p>
              <p>
                Sepanjang perjalanan ini, saya telah mengendalikan lebih{' '}
                <strong className="font-semibold text-[#0F223A]">1,000 kes disiplin pekerja</strong> — daripada siasatan dalaman hingga pemecatan. Pengalaman ini membentuk pendekatan saya hari ini: praktikal, strategik dan berfokus kepada penyelesaian sebenar. Namun saya sedar satu perkara penting —{' '}
                <em className="italic text-[#0F223A]">masalah organisasi bukan sekadar sistem, tetapi manusia di dalamnya.</em>
              </p>
            </div>
          </div>

          {/* 3 Journey Studio Photos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {JOURNEY_PHOTOS.map((photo, idx) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => onOpenLightbox(journeySlides, idx)}
                className="group text-left bg-white border border-[#E5E4DF] rounded-xl overflow-hidden hover:border-[#0F223A]/40 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8A2851]"
              >
                <div className="relative aspect-[3/2] bg-[#F3F2EE] overflow-hidden">
                  <ResilientImage
                    src={photo.src}
                    alt={photo.title}
                    fallbackTitle={photo.title}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <span className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/55 text-white inline-flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Expand className="w-4 h-4" aria-hidden="true" />
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xs font-mono text-[#8A2851] mb-1 tabular-nums">
                    0{idx + 1} · Amalan Lapangan
                  </p>
                  <h3 className="text-base font-semibold text-[#0F223A] mb-1.5">
                    {photo.title}
                  </h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed">
                    {photo.subtitle}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* 4 Core Pillars + 3 Differentiators */}
          <div className="mt-14 pt-12 border-t border-[#E5E4DF] grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-semibold text-[#0F223A] mb-6">
                Bidang Kepakaran Utama
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {JOURNEY_PILLARS.map((pillar) => (
                  <div
                    key={pillar.number}
                    className="p-5 rounded-xl bg-white border border-[#E5E4DF]"
                  >
                    <p className="font-mono text-xs font-medium text-[#8A2851] mb-2 tabular-nums">
                      {pillar.number}.
                    </p>
                    <h4 className="text-base font-semibold text-[#0F223A] mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-[#4B5563] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-semibold text-[#0F223A] mb-6">
                Mengapa Pendekatan Saya Berbeza
              </h3>
              <div className="divide-y divide-[#E5E4DF] border-t border-b border-[#E5E4DF]">
                {APPROACH_ITEMS.map((item, idx) => (
                  <div key={item.title} className="py-5">
                    <p className="text-xs font-mono text-[#6B7280] mb-1 tabular-nums">
                      Prinsip 0{idx + 1}
                    </p>
                    <h4 className="text-base font-semibold text-[#0F223A] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-[#4B5563] leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Part 2: Biodata Fauzi Nordin + Remaining 2 Studio Portraits */}
        <div id="biodata" className="pt-14 border-t border-[#E5E4DF]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-5">
              <div>
                <p className="text-xs font-semibold text-[#8A2851] mb-2">
                  Biodata Profesional
                </p>
                <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-semibold text-[#0F223A] tracking-tight text-balance">
                  Latar Belakang Akademik, Operasi &amp; Pentauliahan Antarabangsa
                </h2>
              </div>

              <div className="space-y-4 text-[15px] text-[#374151] leading-relaxed">
                <p>
                  Mohd Fauzi Nordin berkelulusan{' '}
                  <strong className="font-semibold text-[#0F223A]">Master in Business Administration (MBA)</strong>,{' '}
                  <strong className="font-semibold text-[#0F223A]">Bachelor in Business Administration (BBA)</strong>,{' '}
                  Diploma in Personnel Management dan Diploma in Public Administration.
                </p>
                <p>
                  Memulakan kerjaya di dalam <strong className="font-semibold text-[#0F223A]">Kementerian Dalam Negeri Malaysia</strong> dan seterusnya di <strong className="font-semibold text-[#0F223A]">Lembaga Lebuhraya Malaysia</strong>. Setelah 3 tahun di dalam perkhidmatan kerajaan, beliau menyertai{' '}
                  <strong className="font-semibold text-[#0F223A]">Projek Lebuhraya Utara-Selatan Berhad (PLUS)</strong> — bertugas sebagai Eksekutif Operasi selama hampir 6 tahun mengurus lebih 200 pekerja dan 30 penyelia dalam operasi 24 jam sehari, sebelum menerajui Jabatan Sumber Manusia sebagai Ketua Unit (Latihan, Disiplin, Kebajikan serta Keselamatan &amp; Kesihatan Pekerja) selama 5 tahun. Beliau juga pernah berkhidmat sebagai{' '}
                  <strong className="font-semibold text-[#0F223A]">Pengurus Kumpulan Pentadbiran dan Sumber Manusia di Grand Saga Sdn Bhd</strong>.
                </p>
                <p>
                  Kini beliau telah lebih 26 tahun mengendalikan latihan dan perundingan untuk pelbagai industri di Malaysia dalam bidang Pengurusan Sumber Manusia, Kepimpinan, Motivasi, Perkhidmatan Pelanggan, Keusahawanan, Persaraan dan Pentadbiran Pejabat.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#F3F2EE] border border-[#E5E4DF]">
                  <p className="text-xs font-semibold text-[#0F223A] mb-1">
                    Neuro-Semantics &amp; NLP
                  </p>
                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    Certified Neuro-Semantics &amp; NLP Trainer (ISNS, USA), Certified NLP Trainer &amp; Master Practitioner (NFNLP, USA), Certified Meta-Master Practitioner (ISNS, USA), Certified LAB Profile Practitioner (SS, Canada) &amp; Certified Neurolinguistic Hypnotherapist.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F3F2EE] border border-[#E5E4DF]">
                  <p className="text-xs font-semibold text-[#0F223A] mb-1">
                    Coaching &amp; Pentauliahan Latihan
                  </p>
                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    Associate Certified Meta-Coach (ACMC, ISNS USA), Certified Performance Coach (OUM / ICF), Certified NLP Coach (ABNLP &amp; NFNLP USA), Certified Sports &amp; Performance Coach, HRD Corp / PSMB Certified Trainer (CITE EET/0145) &amp; Cert IV Training &amp; Assessment (Australia).
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Remaining 2 Portraits + Link to Full Set */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {PORTRAITS.slice(1).map((portrait, i) => (
                <button
                  key={portrait.id}
                  type="button"
                  onClick={() => onOpenLightbox(portraitSlides, i + 1)}
                  className="group text-left bg-white border border-[#E5E4DF] rounded-xl overflow-hidden hover:border-[#0F223A]/40 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8A2851]"
                >
                  <div className="relative aspect-[2/3] bg-[#14263C] overflow-hidden">
                    <ResilientImage
                      src={portrait.src}
                      alt={portrait.title}
                      fallbackTitle={portrait.title}
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <span className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/55 text-white inline-flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Expand className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="p-3.5">
                    <p className="text-xs font-semibold text-[#0F223A] line-clamp-1">
                      {portrait.title.replace('Mohd Fauzi Nordin — ', '')}
                    </p>
                    <p className="text-[11px] text-[#6B7280] line-clamp-1 mt-0.5">
                      {portrait.subtitle}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
