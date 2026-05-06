
const features = [
  {
    label: 'Python API',
    desc: 'Full open-source Python control library for interacting with SkuTek hardware through a clean REST interface.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-main">
        <path d="M8 12h8M8 16h5M14 20l4-8 4 8M26 12v8M22 16h8" />
        <rect x="4" y="6" width="32" height="28" rx="3" />
      </svg>
    ),
  },
  {
    label: 'No Installation Required',
    desc: 'Works via the web-based interface out of the box. Programming is optional — only needed for advanced automation.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-main">
        <circle cx="20" cy="20" r="14" />
        <path d="M20 13v7l4 4" />
      </svg>
    ),
  },
];

const modules = [
  { name: 'femtodaqcontrol', href: '/skutils_docs/femtodaqcontrol.html', desc: 'FemtoDAQ device control' },
  { name: 'digitizercontrol', href: '/skutils_docs/digitizercontrol.html', desc: 'Generic digitizer interface' },
  { name: 'solidago', href: '/skutils_docs/solidago.html', desc: 'Solidago UDP data management' },
  { name: 'chickadeecontrol', href: '/skutils_docs/chickadeecontrol.html', desc: 'CHK-32 RTM control' },
  { name: 'dmtools', href: '/skutils_docs/dmtools.html', desc: 'Data management utilities' },
  { name: 'loaders', href: '/skutils_docs/loaders.html', desc: 'Data loading and parsing' },
];

export default function SkutilsPage() {
  return (
    <main className="font-sans bg-gray-50 min-h-screen">

      {/* ── Hero ── */}
      <section className="bg-gray-900 text-white py-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-main font-bold mb-3">Open Source</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            SkuTek Utilities
            <span className="text-main"> (Skutils)</span>
          </h1>
          <div className="mt-4 h-[3px] bg-main rounded-full w-24" />
          <p className="mt-6 text-white/60 text-base md:text-lg max-w-2xl leading-relaxed">
            An open-source Python control library for interacting with SkuTek hardware
            through a clean REST API — no installation required for basic use.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/skutils_docs/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-main text-white font-semibold px-7 py-3 rounded-lg hover:bg-accent transition-colors duration-200"
            >
              View Documentation
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.19L9.47 4.78a.75.75 0 011.06-1.06l5.5 5.5a.75.75 0 010 1.06l-5.5 5.5a.75.75 0 11-1.06-1.06l4.47-4.47H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="bg-white py-16 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map(f => (
            <div key={f.label} className="flex gap-4 p-6 rounded-xl border border-gray-100 bg-gray-50">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-main/10 flex items-center justify-center">
                {f.icon}
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">{f.label}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Module quick links ── */}
      <section className="bg-gray-50 py-14 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">API Modules</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.map(m => (
              <a
                key={m.name}
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between bg-white border border-gray-200 rounded-xl px-5 py-4 hover:border-main hover:shadow-sm transition-all duration-200"
              >
                <div>
                  <p className="font-mono text-sm font-semibold text-gray-800 group-hover:text-main transition-colors">{m.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{m.desc}</p>
                </div>
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gray-300 group-hover:text-main transition-colors flex-shrink-0 ml-3">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.19L9.47 4.78a.75.75 0 011.06-1.06l5.5 5.5a.75.75 0 010 1.06l-5.5 5.5a.75.75 0 11-1.06-1.06l4.47-4.47H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </a>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="/skutils_docs/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-main hover:text-accent transition-colors"
            >
              View full documentation
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.19L9.47 4.78a.75.75 0 011.06-1.06l5.5 5.5a.75.75 0 010 1.06l-5.5 5.5a.75.75 0 11-1.06-1.06l4.47-4.47H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
