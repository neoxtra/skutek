import Link from 'next/link';
import CloudinaryImage from '../components/CloudinaryImage';

// ─── Stats ────────────────────────────────────────────────────────────────────

const stats = [
  { value: '1,500+', label: 'Digitizer channels deployed' },
  { value: '0', label: 'Reported failures underground' },
  { value: '3+', label: 'Years reliable service' },
  { value: '4+', label: 'Research domains served' },
];

// ─── Domains ──────────────────────────────────────────────────────────────────

const domains = [
  {
    label: 'Nuclear Physics',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-main">
        <circle cx="20" cy="20" r="3.5" fill="currentColor" stroke="none"/>
        <ellipse cx="20" cy="20" rx="14" ry="6" />
        <ellipse cx="20" cy="20" rx="14" ry="6" transform="rotate(60 20 20)" />
        <ellipse cx="20" cy="20" rx="14" ry="6" transform="rotate(120 20 20)" />
      </svg>
    ),
  },
  {
    label: 'Particle Astrophysics',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-main">
        <polygon points="20,4 24,15 36,15 26,22 30,34 20,27 10,34 14,22 4,15 16,15" />
      </svg>
    ),
  },
  {
    label: 'Biophysics',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-main">
        <path d="M14 6 C14 6 10 14 14 20 C18 26 14 34 14 34" />
        <path d="M26 6 C26 6 30 14 26 20 C22 26 26 34 26 34" />
        <path d="M14 11 L26 11M14 17 L26 17M14 23 L26 23M14 29 L26 29" />
      </svg>
    ),
  },
  {
    label: 'Medical Research',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-main">
        <rect x="6" y="6" width="28" height="28" rx="4" />
        <path d="M20 13 L20 27M13 20 L27 20" />
      </svg>
    ),
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main className="font-sans">

      {/* ── Hero ── */}
      <section className="bg-gray-900 text-white py-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-4">About SkuTek Instrumentation</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight max-w-3xl">
            Physicists &amp; Data Acquisition Experts
          </h1>
          <div className="mt-5 h-[3px] bg-main rounded-full w-24" />
          <p className="mt-7 text-white/60 text-lg max-w-2xl leading-relaxed">
            A small American company dedicated to serving physics researchers worldwide —
            built by scientists, for scientists.
          </p>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="bg-white py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <p className="text-xs uppercase tracking-widest text-main font-bold mb-4">Who We Are</p>
            <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-6">
              Tightly integrated with the scientific community
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-[1.0625rem]">
              <p>
                Most of our team are former scientists — we are tightly integrated with the nuclear and
                astrophysics communities. We specialize in high-speed Data Acquisition systems and
                Digital Pulse Processing electronics.
              </p>
              <p>
                Our product line covers the whole data acquisition chain: detectors, digitizers,
                firmware pulse processing, and data management for scientific big-data applications.
              </p>
            </div>

            {/* Pillars */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { icon: '🔬', label: 'Former scientists on staff' },
                { icon: '🇺🇸', label: 'American-made hardware' },
                { icon: '🔗', label: 'End-to-end DAQ chain' },
              ].map(p => (
                <div key={p.label} className="flex flex-col items-center text-center gap-2 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <span className="text-2xl">{p.icon}</span>
                  <span className="text-xs font-semibold text-gray-700 leading-tight">{p.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-main text-white font-semibold px-6 py-3 rounded-lg hover:bg-accent transition-colors duration-200 text-sm"
              >
                Discuss your research with us
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.19L9.47 4.78a.75.75 0 011.06-1.06l5.5 5.5a.75.75 0 010 1.06l-5.5 5.5a.75.75 0 11-1.06-1.06l4.47-4.47H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-lg hover:border-main hover:text-main transition-colors duration-200 text-sm"
              >
                View our products
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <CloudinaryImage
              src="lecm_pyicch"
              width={800}
              height={600}
              alt="SkuTek lab and instrumentation"
              className="w-full h-auto object-cover"
            />
          </div>

        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="bg-main py-14 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map(s => (
            <div key={s.label}>
              <p className="text-4xl font-bold tracking-tight">{s.value}</p>
              <p className="mt-1 text-sm text-white/70 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="bg-gray-50 py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image with caption */}
          <div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <CloudinaryImage
                src="lux_ihagwu"
                width={800}
                height={600}
                alt="LUX dark matter experiment — prior to full hookup to photomultiplier array"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="mt-3 text-xs text-gray-400 italic text-center">
              Prior to full hookup to photomultiplier array
            </p>
          </div>

          {/* Text */}
          <div>
            <p className="text-xs uppercase tracking-widest text-main font-bold mb-4">Our Story</p>
            <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-2">
              We Deliver, You Achieve.
            </h2>
            <div className="mt-1 h-[3px] bg-main rounded-full w-16 mb-8" />
            <div className="space-y-4 text-gray-600 leading-relaxed text-[1.0625rem]">
              <p>
                We got our start developing and supplying over 1,500 digitizer channels for the
                LUX dark matter experiment — taking place several thousand feet below the surface
                in Lead, South Dakota. Since they were installed underground, there has not been a
                single reported failure.
              </p>
              <p>
                We have since expanded our product line and provided data acquisition hardware to
                researchers across nuclear physics, particle astrophysics, biophysics, and medical
                research.
              </p>
            </div>

            {/* Domains */}
            <div className="mt-10 grid grid-cols-2 gap-3">
              {domains.map(d => (
                <div key={d.label} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  {d.icon}
                  <span className="text-sm font-semibold text-gray-800">{d.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Collaboration CTA ── */}
      <section className="bg-white py-20 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-2xl border border-main/20 shadow-[0_8px_40px_rgba(13,134,66,0.12)] bg-white px-8 py-12 md:px-14 md:py-16 text-center overflow-hidden">

            {/* Subtle top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-main to-accent rounded-t-2xl" />

            {/* Icon */}
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-main/10 mb-6">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-main">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
              </svg>
            </div>

            <p className="text-xs uppercase tracking-widest text-main font-bold mb-3">Collaboration</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
              Working with universities &amp; research labs
            </h2>
            <p className="text-gray-500 leading-relaxed max-w-lg mx-auto mb-8">
              If you are a university, national lab, or research group looking to partner with us —
              whether for custom instrumentation, joint development, or hardware support — we would
              love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-main text-white font-semibold px-8 py-3 rounded-lg hover:bg-accent transition-colors duration-200"
              >
                Get in touch
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.19L9.47 4.78a.75.75 0 011.06-1.06l5.5 5.5a.75.75 0 010 1.06l-5.5 5.5a.75.75 0 11-1.06-1.06l4.47-4.47H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link
                href="/news"
                className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-700 font-semibold px-8 py-3 rounded-lg hover:border-main hover:text-main transition-colors duration-200"
              >
                Read our research
              </Link>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
