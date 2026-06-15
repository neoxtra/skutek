import Link from 'next/link';

// ─── Data ─────────────────────────────────────────────────────────────────────

const sections = [
  {
    title: 'Capabilities & Posters',
    items: [
      { label: 'SkuTek DAQ Overview for Researchers', href: '/files/SkuTek_DAQ_overview_for_Researchers_Feb_21_2026_jsyutb.pdf' },
      { label: 'SkuTek 2025 Capability Statement', href: '/files/SkuTek-Capability-Statement-2_cpjxkl.pdf' },
    ],
  },
  {
    title: 'Product Specification Sheets',
    items: [
      { label: 'FemtoDAQ Vireo Specification Sheet', href: '/files/FemtoDAQ_Vireo_Spec_sheet_v3.5.1.pdf' },
      { label: 'CHK-32 Specification Sheet', href: '/files/Multichannel_DAQ-Spec-Sheet-v3.5_cednxy.pdf' },
      { label: 'CHK-32 Rear Transition Module (RTM) Specification Sheet', href: '/files/RTM-Spec-Sheet-v3.5_frqgr6.pdf' },
      { label: 'Solidago Specification Sheet', href: '/files/Solidago-Spec-Sheet-v1.2_v87oii.pdf' },
    ],
  },
  {
    title: 'Application Notes & Conference Slides',
    items: [
      { label: 'Application Note: Surprise With Cables', author: 'Jackson Hebel', href: '/files/Surprises_with_Cables_final_z78mpm.pdf' },
      { label: 'LECM 2024: Modern High Performance Data Solutions', author: 'Jeff Maggio', href: '/files/SkuTek_Jeff_LECM_Aug_08_2024_degbsi.pdf' },
      { label: 'LECM 2024: Digital Data Acquisition for Nuclear Physics', author: 'Wojtek Skulski', href: '/files/SkuTek_Wojtek_LECM_Aug_08_2024_dvl9gc.pdf' },
      { label: 'Trinitite Report', href: '/files/Trinitite_Report_v4_UM_WS_May_09_2026_A_kdymz0.pdf' },
      { label: 'Muon Decay Experiment Mar 23 2026', href: '/files/Muon_decay_experiment_March_23_2026_mvi9ai.pdf' },
      { label: 'Compton NaI NaI Coincidence Nov 04 2025', href: '/files/Compton_NaI_NaI_coincidence_Nov_04_2025_a4abv6.pdf' },
    ],
  },
];

// ─── Icons ────────────────────────────────────────────────────────────────────

function PdfIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0 text-main mt-0.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="2" width="11" height="14" rx="1.5" />
      <path d="M7 2v4h4" strokeWidth="1.2" />
      <path d="M6 9h5M6 11.5h3" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-main flex-shrink-0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2v8M5 7l3 3 3-3" />
      <path d="M3 12h10" />
    </svg>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DocumentationPage() {
  return (
    <main className="font-sans bg-gray-50 min-h-screen">

      {/* ── Hero ── */}
      <section className="bg-gray-900 text-white py-14 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-3">SkuTek Instrumentation</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Documentation</h1>
          <div className="mt-4 h-[3px] bg-main rounded-full w-20" />
          <p className="mt-4 text-white/60 text-base max-w-2xl">
            All downloadable content for SkuTek products and services.
          </p>
        </div>
      </section>

      {/* ── Sections ── */}
      <section className="px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
          {sections.map((section) => (
            <div key={section.title} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">

              {/* Section header */}
              <div className="px-6 py-3 border-b border-gray-100 bg-gray-50">
                <h2 className="text-base font-bold text-gray-900 uppercase tracking-wide">{section.title}</h2>
              </div>

              {/* Items */}
              <ul>
                {section.items.map((item) => (
                  <li key={item.label} className="border-b border-gray-50 last:border-0">
                    <Link
                      href={item.href}
                      target={item.href !== '#' ? '_blank' : undefined}
                      rel={item.href !== '#' ? 'noopener noreferrer' : undefined}
                      className="group flex items-start gap-3 px-6 py-3 hover:bg-gray-50 transition-colors duration-150"
                    >
                      <PdfIcon />
                      <div className="flex-1 min-w-0">
                        <span className="text-[0.95rem] font-semibold text-gray-800 group-hover:text-main transition-colors duration-150 leading-snug">
                          {item.label}
                        </span>
                        {'author' in item && item.author && (
                          <span className="block text-xs font-medium text-gray-400 mt-0.5 uppercase tracking-wide">
                            {item.author}
                          </span>
                        )}
                      </div>
                      <DownloadIcon />
                    </Link>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

        {/* ── Product Manuals & Support ── */}
        <div className="max-w-6xl mx-auto mt-5">
          <div className="rounded-xl border border-main/20 bg-main/5 px-8 py-7 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="flex-shrink-0 w-11 h-11 rounded-full bg-main/10 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-main">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 7 10-7" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-base font-bold text-gray-900 uppercase tracking-wide mb-1">Product Manuals &amp; Troubleshooting Guides</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                If you are a customer looking for product manuals, quick-start guides, or troubleshooting support, please reach out to our team directly at{' '}
                <a href="mailto:info@skutek.com" className="text-main font-semibold hover:underline">info@skutek.com</a>
                {' '}and we will be happy to help.
              </p>
            </div>
          </div>
        </div>

      </section>

    </main>
  );
}
