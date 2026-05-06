import Link from 'next/link';
import CloudinaryImage from '../components/CloudinaryImage';

// ─── Data ─────────────────────────────────────────────────────────────────────

const categories = [
  {
    label: 'Digitizers',
    description: 'High-resolution, FPGA-based digitizers for nuclear physics, particle astrophysics, and scientific research.',
    products: [
      {
        name: 'FemtoDAQ Vireo',
        tagline: '2 Channel Digitizer',
        blurb: 'Our classroom and small project digitizer. 2 low-noise channels, 14-bit resolution, 100 MHz sampling, built-in HV bias supply, web-based GUI.',
        href: '/products/digitizers/femtodaq-vireo',
        img: 'vireo_angle_tilt_1-scaled_yef0ek',
        badge: 'Featured',
      },
      {
        name: 'Chickadee-32 RTM',
        tagline: 'Multi-Channel DAQ System',
        blurb: 'Rear Transition Module for the Chickadee-32 digitizer in a VME 64x crate. GRETA/GRETINA TTCL, 10G Ethernet, NIM I/O.',
        href: '/products/digitizers/multichannel-daq-system',
        img: 'chk32_mounted_knjt8y',
      },
      {
        name: 'CHK-32 Rear Transition Module',
        tagline: 'Rear Transition Module',
        blurb: 'Additional I/O for the Chickadee-32 inside a VME 64x crate. Hard Metric P0 connector, daisy-chainable White Rabbit sync (coming soon).',
        href: '/products/digitizers/chickadee-32',
        img: 'rtm_flat_dxzsrl',
      },
    ],
  },
  {
    label: 'Data Management',
    description: 'High-throughput data streaming and management systems for distributed scientific data acquisition.',
    products: [
      {
        name: 'Solidago UDP Event Generator',
        tagline: '160 Gbps',
        blurb: 'FPGA-based UDP streaming system. 16× 10G SFP+ ports, nanosecond-precision packet timing, REST API & web GUI. Ideal for stress-testing networks and DAQ development.',
        href: '/products/digitizers/solidago-udp',
        img: 'Solidago_Main_gb7zk8',
        badge: 'New',
      },
    ],
  },
  {
    label: 'Software',
    description: 'Open-source control and data acquisition software built to complement SkuTek hardware.',
    products: [
      {
        name: 'SkuTek Utilities (Skutils)',
        tagline: 'Open-Source Python Library',
        blurb: 'Python control library for all SkuTek hardware via a clean REST API. No installation required for basic use — web GUI included. Full Python & C HAL for power users.',
        href: '/skutils',
        img: 'skutils_lzbibv',
        imgContain: true,
        badge: 'Free',
      },
    ],
  },
];

// ─── Product card ─────────────────────────────────────────────────────────────

function ProductCard({ product }: { product: typeof categories[0]['products'][0] }) {
  const contain = 'imgContain' in product && product.imgContain;
  return (
    <Link
      href={product.href}
      className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-main/30 transition-all duration-300 overflow-hidden"
    >
      {/* Image */}
      <div className="relative aspect-[16/9] bg-gray-50 overflow-hidden flex-shrink-0">
        {product.img ? (
          <CloudinaryImage
            src={product.img}
            width={640}
            height={360}
            alt={product.name}
            className={`w-full h-full ${contain ? 'object-contain p-4' : 'object-cover group-hover:scale-105 transition-transform duration-500 ease-out'}`}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-main/5 to-main/10">
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-main/30">
              <rect x="6" y="14" width="36" height="20" rx="3" />
              <path d="M14 14v-4M24 14v-4M34 14v-4M14 34v4M24 34v4M34 34v4" />
            </svg>
          </div>
        )}
        {'badge' in product && product.badge && (
          <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest bg-main text-white px-2.5 py-1 rounded-full">
            {product.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-2">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-main mb-1">{product.tagline}</p>
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-main transition-colors duration-200 leading-snug">
            {product.name}
          </h3>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed flex-1">{product.blurb}</p>
        <div className="flex items-center gap-1.5 text-sm font-semibold text-main mt-2">
          View details
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200">
            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.19L9.47 4.78a.75.75 0 011.06-1.06l5.5 5.5a.75.75 0 010 1.06l-5.5 5.5a.75.75 0 11-1.06-1.06l4.47-4.47H3.75A.75.75 0 013 10z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="h-[3px] bg-main w-0 group-hover:w-full transition-all duration-300 ease-out" />
    </Link>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProductsPage() {
  return (
    <main className="font-sans bg-gray-50 min-h-screen">

      {/* ── Hero ── */}
      <section className="bg-gray-900 text-white py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-3">SkuTek Instrumentation</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">Products</h1>
          <div className="mt-4 h-[3px] bg-main rounded-full w-20" />
          <p className="mt-6 text-white/60 text-base md:text-lg max-w-2xl leading-relaxed">
            End-to-end data acquisition hardware and software — from detectors to digitizers to data management.
          </p>
        </div>
      </section>

      {/* ── Categories ── */}
      <section className="px-6 lg:px-8 py-14">
        <div className="max-w-7xl mx-auto space-y-16">
          {categories.map(cat => (
            <div key={cat.label}>

              {/* Category header */}
              <div className="flex items-end gap-6 mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{cat.label}</h2>
                  <p className="mt-1 text-sm text-gray-500 max-w-xl">{cat.description}</p>
                </div>
                <div className="flex-1 h-px bg-gray-200 mb-1.5 hidden md:block" />
              </div>

              {/* Product grid */}
              <div className={`grid grid-cols-1 gap-6 ${
                cat.products.length === 1
                  ? 'md:grid-cols-2 lg:max-w-2xl'
                  : cat.products.length === 2
                  ? 'md:grid-cols-2'
                  : 'md:grid-cols-2 lg:grid-cols-3'
              }`}>
                {cat.products.map(p => (
                  <ProductCard key={p.name} product={p} />
                ))}
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900 rounded-2xl px-8 py-10 md:px-14 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-bold text-white">Need something custom?</h2>
              <p className="text-white/60 text-sm mt-1 max-w-md">
                We develop custom digitizers, firmware, and data management solutions for research groups worldwide.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-main text-white font-semibold px-7 py-3 rounded-lg hover:bg-accent transition-colors duration-200 text-sm"
              >
                Contact us
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.19L9.47 4.78a.75.75 0 011.06-1.06l5.5 5.5a.75.75 0 010 1.06l-5.5 5.5a.75.75 0 11-1.06-1.06l4.47-4.47H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-7 py-3 rounded-lg hover:border-white/50 transition-colors duration-200 text-sm"
              >
                Get a quote
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
