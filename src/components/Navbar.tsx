import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '#journey', label: 'Journey' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#programs', label: 'Programs' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#articles', label: 'Articles' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAFAF8]/95 backdrop-blur-md border-b border-[#E5E4DF]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[#0F223A] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8A2851]"
        >
          Fauzi Nordin
        </a>

        {/* Zone 2: 5 concise single-line text links */}
        <nav
          className="hidden md:flex items-center gap-6 text-sm font-medium text-[#4B5563]"
          aria-label="Primary Navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#0F223A] hover:underline underline-offset-4 decoration-[#8A2851] transition-colors whitespace-nowrap shrink-0 py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8A2851]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center min-h-[40px] px-4 py-2 text-xs font-semibold text-white bg-[#0F223A] hover:bg-[#8A2851] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8A2851]"
          >
            Book Consultation
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="md:hidden min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-lg border border-[#E5E4DF] text-[#0F223A] hover:bg-[#F3F2EE] transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          className="md:hidden border-t border-[#E5E4DF] bg-[#FAFAF8] px-4 py-4 space-y-1"
          aria-label="Mobile Navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block min-h-[44px] px-3 py-2.5 text-sm font-medium text-[#111827] hover:bg-[#F3F2EE] rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center min-h-[44px] w-full px-4 py-2.5 text-sm font-semibold text-white bg-[#0F223A] hover:bg-[#8A2851] rounded-lg transition-colors"
            >
              Book Consultation
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
