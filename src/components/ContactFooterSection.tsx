import { FormEvent, useState } from 'react';
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';
import { BRAND_LOGO, CONTACT_INFO } from '../data/siteData';
import { ResilientImage } from './ResilientImage';

export function ContactFooterSection() {
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [contact, setContact] = useState('');
  const [topic, setTopic] = useState('HR & Labour Law / Domestic Inquiry Training');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim() || !message.trim()) {
      setError('Sila lengkapkan nama, maklumat hubungan (emel/telefon), dan ringkasan keperluan anda.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const whatsappPrefillUrl = `${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(
    `Salam Encik Fauzi Nordin, saya ${name || '[Nama]'} dari ${
      organization || '[Organisasi]'
    }. Saya ingin berbincang mengenai: ${topic}. ${message}`
  )}`;

  return (
    <>
      <section id="contact" className="py-16 md:py-24 bg-[#F3F2EE]/70 border-b border-[#E5E4DF]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Direct Office & Contact Channels */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <p className="text-xs font-semibold text-[#8A2851] mb-2">
                  My Contact · Hubungi Kami
                </p>
                <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-4xl font-semibold text-[#0F223A] tracking-tight text-balance">
                  Jadualkan Latihan In-House atau Sesi Perundingan
                </h2>
                <p className="text-sm md:text-base text-[#4B5563] mt-3 leading-relaxed">
                  Untuk jemputan latihan korporat (HRD Corp Claimable), khidmat nasihat kes disiplin / Domestic Inquiry, atau sesi executive coaching.
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-[#E5E4DF]">
                <div className="flex items-start gap-3 pt-2">
                  <MapPin className="w-5 h-5 text-[#8A2851] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-[#0F223A]">Alamat Pejabat</p>
                    <p className="text-sm text-[#374151] mt-0.5">{CONTACT_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#8A2851] shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="tabular-nums">
                    <p className="text-xs font-semibold text-[#0F223A]">Telefon &amp; WhatsApp</p>
                    <p className="text-sm text-[#374151] mt-0.5">
                      Pejabat:{' '}
                      <a href="tel:+60342950398" className="hover:underline font-medium text-[#0F223A]">
                        {CONTACT_INFO.tel}
                      </a>
                    </p>
                    <p className="text-sm text-[#374151]">
                      H/p:{' '}
                      <a href="tel:+60193970002" className="hover:underline font-medium text-[#0F223A]">
                        {CONTACT_INFO.hp}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#8A2851] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-[#0F223A]">E-mel Rasmi</p>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-sm font-medium text-[#0F223A] hover:underline mt-0.5 inline-block"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 text-sm font-semibold text-white bg-[#0F223A] hover:bg-[#8A2851] rounded-lg transition-colors whitespace-nowrap"
                >
                  <span>Terus ke WhatsApp ({CONTACT_INFO.hp})</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Right Column: Validated Inquiry Form */}
            <div className="lg:col-span-7 bg-white border border-[#E5E4DF] rounded-2xl p-6 md:p-8">
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <CheckCircle2 className="w-10 h-10 text-[#0F223A] mx-auto" aria-hidden="true" />
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#0F223A]">
                    Permintaan Anda Sedia Dihantar
                  </h3>
                  <p className="text-sm text-[#4B5563] max-w-md mx-auto leading-relaxed">
                    Terima kasih, <strong className="text-[#0F223A]">{name}</strong>. Klik butang di bawah untuk menghantar butiran terus ke WhatsApp Encik Fauzi Nordin atau hantar melalui e-mel.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={whatsappPrefillUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 text-sm font-semibold text-white bg-[#0F223A] hover:bg-[#8A2851] rounded-lg transition-colors whitespace-nowrap"
                    >
                      <span>Hantar via WhatsApp</span>
                      <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setOrganization('');
                        setContact('');
                        setMessage('');
                      }}
                      className="min-h-[44px] px-4 py-2.5 text-sm font-medium text-[#4B5563] hover:text-[#0F223A] border border-[#E5E4DF] rounded-lg transition-colors cursor-pointer"
                    >
                      Buat Pertanyaan Baharu
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[#0F223A]">
                      Borang Pertanyaan Latihan &amp; Perundingan
                    </h3>
                    <p className="text-xs text-[#6B7280] mt-1">
                      Lengkapkan maklumat asas untuk mendapatkan cadangan modul atau sesi nasihat.
                    </p>
                  </div>

                  {error && (
                    <div
                      role="alert"
                      className="p-3 rounded-lg bg-[#8A2851]/10 border border-[#8A2851]/30 text-xs font-medium text-[#8A2851]"
                    >
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="inq-name" className="block text-xs font-semibold text-[#0F223A] mb-1.5">
                        Nama Penuh *
                      </label>
                      <input
                        id="inq-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="cth. Ahmad Razak"
                        className="w-full min-h-[42px] px-3.5 py-2 text-sm bg-[#FAFAF8] border border-[#E5E4DF] rounded-lg focus:outline-none focus:border-[#0F223A]"
                      />
                    </div>
                    <div>
                      <label htmlFor="inq-org" className="block text-xs font-semibold text-[#0F223A] mb-1.5">
                        Organisasi / Syarikat
                      </label>
                      <input
                        id="inq-org"
                        type="text"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder="cth. Sdn Bhd / Agensi"
                        className="w-full min-h-[42px] px-3.5 py-2 text-sm bg-[#FAFAF8] border border-[#E5E4DF] rounded-lg focus:outline-none focus:border-[#0F223A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="inq-contact" className="block text-xs font-semibold text-[#0F223A] mb-1.5">
                        Emel atau No. Telefon *
                      </label>
                      <input
                        id="inq-contact"
                        type="text"
                        required
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="cth. 012-345 6789 / nama@syarikat.my"
                        className="w-full min-h-[42px] px-3.5 py-2 text-sm bg-[#FAFAF8] border border-[#E5E4DF] rounded-lg focus:outline-none focus:border-[#0F223A]"
                      />
                    </div>
                    <div>
                      <label htmlFor="inq-topic" className="block text-xs font-semibold text-[#0F223A] mb-1.5">
                        Bidang Keperluan
                      </label>
                      <select
                        id="inq-topic"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        className="w-full min-h-[42px] px-3.5 py-2 text-sm bg-[#FAFAF8] border border-[#E5E4DF] rounded-lg focus:outline-none focus:border-[#0F223A]"
                      >
                        <option>HR &amp; Labour Law / Domestic Inquiry Training</option>
                        <option>Ordinan Buruh Sabah &amp; Kontrak</option>
                        <option>Leadership, NLP &amp; Meta-Coaching</option>
                        <option>Team Building &amp; High-Performance Culture</option>
                        <option>Perundingan Kes Disiplin / IR</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="inq-msg" className="block text-xs font-semibold text-[#0F223A] mb-1.5">
                      Ringkasan Keperluan / Cadangan Tarikh *
                    </label>
                    <textarea
                      id="inq-msg"
                      rows={3}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Nyatakan anggaran jumlah peserta, lokasi, atau isu organisasi yang ingin dibincangkan..."
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAFAF8] border border-[#E5E4DF] rounded-lg focus:outline-none focus:border-[#0F223A]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto min-h-[44px] px-6 py-2.5 text-sm font-semibold text-white bg-[#0F223A] hover:bg-[#8A2851] rounded-lg transition-colors cursor-pointer"
                  >
                    Sediakan Mesej Pertanyaan
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quiet Editorial Footer */}
      <footer className="py-10 bg-[#FAFAF8]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg overflow-hidden border border-[#E5E4DF] bg-white shrink-0">
              <ResilientImage
                src={BRAND_LOGO.src}
                alt={BRAND_LOGO.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-[family-name:var(--font-display)] text-base font-semibold text-[#0F223A]">
                Fauzi Nordin
              </p>
              <p className="text-xs text-[#6B7280]">
                Training · Coaching · Consulting — Taman Kosas, Ampang, Selangor
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#4B5563]">
            <a href="#journey" className="hover:text-[#0F223A]">Journey</a>
            <a href="#gallery" className="hover:text-[#0F223A]">Gallery</a>
            <a href="#programs" className="hover:text-[#0F223A]">Programs</a>
            <a href="#credentials" className="hover:text-[#0F223A]">Credentials</a>
            <a href="#articles" className="hover:text-[#0F223A]">Articles</a>
            <a href="#contact" className="hover:text-[#0F223A]">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}
