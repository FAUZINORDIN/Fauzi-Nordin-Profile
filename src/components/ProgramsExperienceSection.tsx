import { useMemo, useState } from 'react';
import { Check, Search } from 'lucide-react';
import { CLIENT_ORGS, ClientOrg, PROGRAM_GROUPS } from '../data/siteData';

type SectorFilter = 'All' | ClientOrg['sector'];

const SECTORS: { id: SectorFilter; label: string }[] = [
  { id: 'All', label: 'Semua Sektor (54)' },
  { id: 'Government & GLC', label: 'Kerajaan & GLC' },
  { id: 'Logistics & Ports', label: 'Pelabuhan & Logistik' },
  { id: 'Manufacturing & Industrial', label: 'Pembuatan & Industri' },
  { id: 'Healthcare & Education', label: 'Kesihatan & Pendidikan' },
  { id: 'Corporate & Retail', label: 'Korporat & Runcit' },
];

export function ProgramsExperienceSection() {
  const [activeGroupId, setActiveGroupId] = useState<string>(PROGRAM_GROUPS[1].id);
  const [sectorFilter, setSectorFilter] = useState<SectorFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const activeGroup = useMemo(
    () => PROGRAM_GROUPS.find((g) => g.id === activeGroupId) || PROGRAM_GROUPS[0],
    [activeGroupId]
  );

  const filteredClients = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return CLIENT_ORGS.filter((client) => {
      const matchesSector = sectorFilter === 'All' || client.sector === sectorFilter;
      const matchesQuery =
        !q ||
        client.name.toLowerCase().includes(q) ||
        client.location.toLowerCase().includes(q);
      return matchesSector && matchesQuery;
    });
  }, [sectorFilter, searchQuery]);

  return (
    <section id="programs" className="py-16 md:py-24 border-b border-[#E5E4DF]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 space-y-20">
        {/* Part 1: Training Programs Curriculum Explorer */}
        <div>
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-semibold text-[#8A2851] mb-2">
              Kurikulum &amp; Program Latihan
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-4xl font-semibold text-[#0F223A] tracking-tight text-balance">
              Modul Latihan Berimpak Tinggi &amp; Pensijilan Antarabangsa
            </h2>
            <p className="text-sm md:text-base text-[#4B5563] mt-2">
              Pilih kategori di bawah untuk meneliti senarai penuh modul latihan dalaman (in-house) serta program pensijilan antarabangsa ISNS dan NFNLP.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Program Category Selector */}
            <div className="lg:col-span-4 space-y-2" role="tablist" aria-label="Kategori Program Latihan">
              {PROGRAM_GROUPS.map((group, idx) => {
                const isActive = group.id === activeGroup.id;
                return (
                  <button
                    key={group.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveGroupId(group.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#0F223A] text-white border-[#0F223A]'
                        : 'bg-white text-[#111827] border-[#E5E4DF] hover:bg-[#F3F2EE]'
                    }`}
                  >
                    <p
                      className={`font-mono text-[11px] mb-1 tabular-nums ${
                        isActive ? 'text-white/70' : 'text-[#8A2851]'
                      }`}
                    >
                      0{idx + 1} · {group.modules.length} Modul
                    </p>
                    <p className="text-sm font-semibold leading-snug">{group.title}</p>
                  </button>
                );
              })}
            </div>

            {/* Active Program Module List */}
            <div className="lg:col-span-8 bg-white border border-[#E5E4DF] rounded-2xl p-6 md:p-8">
              <div className="pb-5 mb-6 border-b border-[#E5E4DF]">
                <p className="text-xs font-medium text-[#8A2851] mb-1">
                  {activeGroup.subtitle}
                </p>
                <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-semibold text-[#0F223A]">
                  {activeGroup.title}
                </h3>
              </div>

              <ul className="divide-y divide-[#E5E4DF]">
                {activeGroup.modules.map((mod, idx) => (
                  <li
                    key={mod}
                    className="py-3.5 flex items-start gap-3 text-sm md:text-[15px] text-[#111827]"
                  >
                    <span className="w-6 h-6 rounded-md bg-[#F3F2EE] text-[#0F223A] font-mono text-xs inline-flex items-center justify-center shrink-0 mt-0.5 tabular-nums">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed flex-1">{mod}</span>
                    <Check className="w-4 h-4 text-[#8A2851] shrink-0 mt-1" aria-hidden="true" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Part 2: Client Track Record (54+ Organizations) */}
        <div id="clients" className="pt-14 border-t border-[#E5E4DF]">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold text-[#8A2851] mb-2">
                My Experience in Training · Rekod Organisasi Klien
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-semibold text-[#0F223A] tracking-tight text-balance">
                Dipercayai 54+ Agensi Kerajaan, Pelabuhan &amp; Korporat Malaysia
              </h2>
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72 shrink-0">
              <Search
                className="w-4 h-4 text-[#6B7280] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari organisasi atau negeri..."
                aria-label="Cari organisasi klien"
                className="w-full min-h-[42px] pl-10 pr-4 py-2 text-sm bg-white border border-[#E5E4DF] rounded-lg text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0F223A]"
              />
            </div>
          </div>

          {/* Sector Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 mb-6">
            {SECTORS.map((sec) => {
              const active = sectorFilter === sec.id;
              return (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => setSectorFilter(sec.id)}
                  className={`min-h-[36px] px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-[#0F223A] text-white border-[#0F223A]'
                      : 'bg-white text-[#4B5563] border-[#E5E4DF] hover:text-[#0F223A] hover:bg-[#F3F2EE]'
                  }`}
                >
                  {sec.label}
                </button>
              );
            })}
          </div>

          {/* Client Grid */}
          {filteredClients.length === 0 ? (
            <div className="p-8 text-center bg-white border border-[#E5E4DF] rounded-xl">
              <p className="text-sm text-[#4B5563]">
                Tiada organisasi sepadan dengan carian "{searchQuery}".
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSectorFilter('All');
                }}
                className="mt-3 text-xs font-semibold text-[#8A2851] hover:underline cursor-pointer"
              >
                Tetapkan semula carian
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredClients.map((org) => (
                <div
                  key={org.name}
                  className="px-4 py-3.5 bg-white border border-[#E5E4DF] rounded-xl flex items-start justify-between gap-3"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#0F223A] leading-snug">
                      {org.name}
                    </p>
                    <p className="text-xs text-[#6B7280] mt-1">
                      {org.location} · {org.sector}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
