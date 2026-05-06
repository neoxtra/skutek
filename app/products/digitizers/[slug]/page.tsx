import { notFound } from 'next/navigation';
import Link from 'next/link';
import { digitizers, getDigitizer } from '../../../data/digitizers';
import ImageSlider from '../../../components/products/ImageSlider';
import QuoteForm from '../../../components/products/QuoteForm';

export function generateStaticParams() {
  return digitizers.map(d => ({ slug: d.id }));
}

export default function DigitizerProductPage({ params }: { params: { slug: string } }) {
  const product = getDigitizer(params.slug);
  if (!product) notFound();

  return (
    <main className="font-sans bg-gray-50 min-h-screen">

      {/* ── Breadcrumb + hero bar ── */}
      <div className="bg-gray-900 px-6 lg:px-8 pt-10 pb-6">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-white/40 font-medium mb-4">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-white/70 transition-colors">Products</Link>
            <span>/</span>
            <Link href="/products/digitizers" className="hover:text-white/70 transition-colors">Digitizers</Link>
            <span>/</span>
            <span className="text-white/60">{product.name}</span>
          </nav>
          <p className="text-xs uppercase tracking-widest text-main font-bold mb-1">Digitizer</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{product.name}</h1>
          <p className="mt-1 text-white/50 text-base">{product.tagline}</p>
        </div>
      </div>

      {/* ── Main product section ── */}
      <section className="px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — image slider */}
          <div className="lg:sticky lg:top-28">
            <ImageSlider images={product.images} productName={product.name} />
          </div>

          {/* Right — info */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">{product.name}</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-[1.0625rem]">
              {product.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Spec sheet download */}
            <div className="mt-8">
              {product.specSheetUrl ? (
                <a
                  href={`https://res.cloudinary.com/YOUR_CLOUD/image/upload/${product.specSheetUrl}.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-main text-white font-semibold px-7 py-3 rounded-lg hover:bg-accent transition-colors duration-200"
                >
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Download Spec Sheet
                </a>
              ) : (
                <span className="inline-flex items-center gap-2.5 bg-main text-white font-semibold px-7 py-3 rounded-lg opacity-60 cursor-not-allowed select-none">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Download Spec Sheet
                </span>
              )}
            </div>

            {/* Quick contact */}
            <p className="mt-5 text-sm text-gray-500">
              Questions?{' '}
              <a href="mailto:info@skutek.com" className="text-main underline hover:text-accent">
                Email us at info@skutek.com
              </a>
            </p>
          </div>

        </div>
      </section>

      {/* ── Additional Information ── */}
      {(product.specs.length > 0 || product.tableIntro) && (
        <section className="px-6 lg:px-8 pb-12">
          <div className="max-w-5xl mx-auto">

            <div className="flex items-center gap-4 mb-7">
              <div className="h-px flex-1 bg-gray-200" />
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Additional Information</h2>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* Optional intro paragraphs above the table */}
            {product.tableIntro && (
              <div className="mb-8 space-y-4 text-gray-600 leading-relaxed text-[1.0625rem]">
                {product.tableIntro.map((para, i) => <p key={i}>{para}</p>)}
              </div>
            )}

            {product.specs.length > 0 && (
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    {product.specs.map((row, i) => (
                      <tr key={i} className="border-b border-gray-100 last:border-0">
                        <td className="px-6 py-4 font-semibold text-white bg-gray-800 w-[38%] align-top whitespace-pre-line border-r border-gray-700">
                          {row.label || <span className="text-gray-500">—</span>}
                        </td>
                        <td className={`px-6 py-4 text-gray-800 align-top whitespace-pre-line ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                          {row.value || <span className="text-gray-300">—</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

          </div>
        </section>
      )}

      {/* ── Request a Quote ── */}
      <section className="px-6 lg:px-8 pb-16">
        <div className="max-w-5xl mx-auto">

          <div className="flex items-center gap-4 mb-7">
            <div className="h-px flex-1 bg-gray-200" />
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Request a Quote</h2>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm px-8 py-10 md:px-12">
            <QuoteForm preselectedProduct={product.name} />
          </div>

        </div>
      </section>

    </main>
  );
}
