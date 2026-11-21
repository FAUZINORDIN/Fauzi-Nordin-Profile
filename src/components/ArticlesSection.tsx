import { useEffect, useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { ARTICLES, ArticleItem } from '../data/siteData';

export function ArticlesSection() {
  const [activeArticle, setActiveArticle] = useState<ArticleItem | null>(null);

  useEffect(() => {
    if (!activeArticle) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveArticle(null);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [activeArticle]);

  return (
    <section id="articles" className="py-16 md:py-24 border-b border-[#E5E4DF]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-semibold text-[#8A2851] mb-2">
            My Articles · Penulisan &amp; Pemikiran
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-4xl font-semibold text-[#0F223A] tracking-tight text-balance">
            Artikel Kepimpinan, Coaching, NLP &amp; Undang-Undang Buruh
          </h2>
          <p className="text-sm md:text-base text-[#4B5563] mt-2">
            Himpunan tulisan penuh berkaitan kejurulatihan keluarga, psikologi ego, NLP, kepimpinan eksekutif dan kajian kes Mahkamah Perusahaan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES.map((article, idx) => (
            <article
              key={article.id}
              className={`bg-white border border-[#E5E4DF] rounded-2xl p-6 flex flex-col justify-between hover:border-[#0F223A]/40 transition-colors ${
                idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#6B7280] mb-3 tabular-nums">
                  <span className="font-semibold text-[#8A2851]">{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-semibold text-[#0F223A] leading-snug mb-3 text-balance">
                  {article.title}
                </h3>

                <p className="text-sm text-[#4B5563] leading-relaxed mb-6">
                  {article.excerpt}
                </p>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => setActiveArticle(article)}
                  className="inline-flex items-center gap-2 min-h-[40px] px-4 py-2 text-xs font-semibold text-[#0F223A] bg-[#F3F2EE] hover:bg-[#0F223A] hover:text-white rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>Baca Artikel Penuh</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Full Article Reader Modal */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={activeArticle.title}
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="bg-[#FAFAF8] border border-[#E5E4DF] rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-5 border-b border-[#E5E4DF] bg-white flex items-start justify-between gap-4">
              <div>
                <p className="text-xs text-[#6B7280] mb-1 tabular-nums">
                  <span className="font-semibold text-[#8A2851]">{activeArticle.category}</span>
                  <span aria-hidden="true"> · </span>
                  <span>{activeArticle.date}</span>
                  <span aria-hidden="true"> · </span>
                  <span>{activeArticle.readTime}</span>
                </p>
                <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-semibold text-[#0F223A] leading-snug">
                  {activeArticle.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                aria-label="Tutup artikel"
                className="min-h-[40px] min-w-[40px] rounded-lg border border-[#E5E4DF] text-[#0F223A] hover:bg-[#F3F2EE] inline-flex items-center justify-center shrink-0 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto space-y-4 text-[15px] text-[#1F2937] leading-relaxed">
              {activeArticle.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
