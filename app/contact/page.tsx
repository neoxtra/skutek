// ─── Contact card data ────────────────────────────────────────────────────────

const channels = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
    label: 'Quote Requests',
    email: 'info@skutek.com',
    description: 'For pricing, availability, and purchase inquiries.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
        <circle cx="12" cy="17" r=".5" fill="currentColor" />
      </svg>
    ),
    label: 'Technical Support',
    email: 'support@skutek.com',
    description: 'For product manuals, troubleshooting, and technical questions.',
  },
];

const quoteFields = [
  'Product name and quantity',
  'Your full name',
  'Your email address',
  'Institution or organization',
  'Country',
  'Any specific requirements or questions',
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <main className="font-sans bg-gray-50 min-h-screen">

      {/* ── Hero ── */}
      <section className="bg-gray-900 text-white py-14 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-3">SkuTek Instrumentation</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Support &amp; Contact</h1>
          <div className="mt-4 h-[3px] bg-main rounded-full w-20" />
          <p className="mt-4 text-white/60 text-base max-w-2xl">
            We work with research facilities, universities, and national laboratories all over the world. Reach out and we will get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* ── Contact channels ── */}
      <section className="px-6 lg:px-8 py-10">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
          {channels.map((ch) => (
            <div key={ch.label} className="bg-white rounded-xl border border-gray-200 shadow-sm px-7 py-6 flex flex-col gap-3">
              <div className="w-11 h-11 rounded-full bg-main/10 flex items-center justify-center text-main">
                {ch.icon}
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-main mb-1">{ch.label}</p>
                <a href={`mailto:${ch.email}`} className="text-xl font-bold text-main hover:underline break-all">
                  {ch.email}
                </a>
              </div>
              <p className="text-[1.0625rem] text-gray-900 leading-relaxed">{ch.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── What to include ── */}
      <section className="px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm px-4 py-6 sm:px-8 sm:py-8">

            <div className="mb-6">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-main text-center">What to include in your quote request</h2>
              <div className="mt-3 h-px bg-gray-100" />
            </div>

            <p className="text-[1.0625rem] text-gray-900 leading-relaxed mb-5">
              To help us process your request quickly and ensure your email reaches us (and avoids spam filters), please include the following when writing to{' '}
              <a href="mailto:info@skutek.com" className="text-main font-semibold hover:underline">info@skutek.com</a>:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 mb-6">
              {quoteFields.map((field) => (
                <li key={field} className="flex items-start gap-2.5 text-[1.0625rem] text-gray-900">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-main flex-shrink-0" />
                  {field}
                </li>
              ))}
            </ul>

            <p className="text-[1.0625rem] text-gray-900 border-t border-gray-100 pt-5">
              For product manuals, quick-start guides, or troubleshooting assistance, email{' '}
              <a href="mailto:support@skutek.com" className="text-main font-semibold hover:underline">support@skutek.com</a>
              {' '}with your product name and a brief description of your question.
            </p>

          </div>
        </div>
      </section>

    </main>
  );
}
