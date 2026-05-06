"use client";

import { useEffect, useRef, useState } from 'react';
import CloudinaryImage from '../components/CloudinaryImage';
import Link from 'next/link';

const industries = [
  {
    id: 'scientific-research',
    label: 'Scientific Research',
    img: 'surf_2_lvhga2',
    imgAlt: 'Vireo at SURF – LZ Dark Matter Experiment',
    caption: 'Vireo at SURF – LZ Dark Matter Experiment',
    imgClass: 'object-cover',
    body: [
      'We are best known for our development and collaboration in the field of nuclear physics. Our fully customizable line of digitizers feature multi-channel digital pulse processing and FPGA-based transient signal capture and analysis.',
      'Our devices are currently deployed in labs across the nation. We are collecting data at Argonne National Lab, Sanford Underground Research Facility (LZ Dark Matter Experiment), Lawrence Berkeley, and the Facility for Rare Isotope Beams.',
      'Our digitizers are customizable from 2 to over 1000 channels. All devices share a common software ecosystem, so your workflow stays consistent no matter the setup.',
    ],
    features: null as string[] | null,
    cta: null as { label: string; href: string } | null,
  },
  {
    id: 'education',
    label: 'Education',
    img: 'ansel_kalm72',
    imgAlt: "Vireo setup at University of Rochester's Advanced Nuclear Science Education Lab",
    caption: 'ANSEL-Lab – University of Rochester',
    imgClass: 'object-cover',
    body: [
      'We are finalizing educational kits for the Vireo, our powerful and affordable two-channel digitizer built for the next generation of scientists.',
      'In collaboration with graduate and undergraduate labs at University of Rochester, Tennessee Tech University, and more, we are testing and refining starter experiments for the kit.',
    ],
    features: [
      'FemtoDAQ Vireo two-channel digitizer',
      'Two NaI(Tl) gamma scintillator crystal detectors',
      'Jupyter notebook experiments',
      'Interactive web-based GUI hosted on the digitizer',
    ],
    cta: null,
  },
  {
    id: 'data-management',
    label: 'Data Management',
    img: 'solidago_hookup_drkqte',
    imgAlt: 'Solidago UDP Event Saturator stress testing our Collector Node',
    caption: 'Solidago stress-testing our Collector Node',
    imgClass: 'object-cover object-top',
    body: [
      'Our custom data management work covers both data streaming and collection.',
      'The Solidago is a UDP Event Generator that emulates a lab environment and data acquisition systems. It can generate up to sixteen 10 Gbps UDP streams with configurable packet and event formats — ideal for developing data management systems or stress-testing networking hardware.',
    ],
    features: null,
    cta: { label: 'Learn about Solidago', href: '/products/digitizers/solidago-udp' },
  },
];

function IndustrySection({ ind, flip }: { ind: typeof industries[0]; flip: boolean }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="px-6 lg:px-8 py-14 border-b border-gray-100 last:border-0">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

        {/* Image */}
        <div className={`w-full lg:w-[46%] flex-shrink-0 ${flip ? 'lg:order-2' : ''}`}>
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md aspect-video bg-gray-100">
            <CloudinaryImage
              src={ind.img}
              width={720}
              height={405}
              alt={ind.imgAlt}
              className={`w-full h-full ${ind.imgClass}`}
            />
          </div>
          <p className="mt-2 text-[11px] text-gray-400 italic text-center">{ind.caption}</p>
        </div>

        {/* Content */}
        <div className={`flex-1 flex flex-col gap-4 ${flip ? 'lg:order-1' : ''}`}>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">{ind.label}</h2>
            <div
              className="mt-2 h-[3px] bg-main rounded-full transition-all duration-700 ease-out"
              style={{ width: visible ? '3rem' : '0' }}
            />
          </div>

          <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
            {ind.body.map((para, j) => <p key={j}>{para}</p>)}
          </div>

          {ind.features && (
            <ul className="space-y-1.5">
              {ind.features.map(f => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="flex-shrink-0 mt-[5px] w-1.5 h-1.5 rounded-full bg-main" />
                  {f}
                </li>
              ))}
            </ul>
          )}

          {ind.cta && (
            <Link
              href={ind.cta.href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-main hover:text-accent transition-colors duration-200"
            >
              {ind.cta.label}
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.19L9.47 4.78a.75.75 0 011.06-1.06l5.5 5.5a.75.75 0 010 1.06l-5.5 5.5a.75.75 0 11-1.06-1.06l4.47-4.47H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </Link>
          )}
        </div>

      </div>
    </div>
  );
}

export default function IndustriesPage() {
  return (
    <main className="font-sans bg-white min-h-screen">

      {/* ── Hero ── */}
      <section className="bg-gray-900 text-white py-14 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] uppercase tracking-widest text-white/40 font-semibold mb-2">SkuTek Instrumentation</p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Industries</h1>
          <div className="mt-3 h-[3px] bg-main rounded-full w-14" />
          <p className="mt-4 text-white/55 text-sm md:text-base max-w-xl leading-relaxed">
            From nuclear physics labs to university classrooms, our instruments are built for where real science happens.
          </p>
        </div>
      </section>

      {/* ── Sections ── */}
      <div>
        {industries.map((ind, i) => (
          <IndustrySection key={ind.id} ind={ind} flip={i % 2 === 1} />
        ))}
      </div>

      {/* ── Collaboration CTA ── */}
      <section className="bg-gray-50 py-16 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-2xl border border-main/20 shadow-[0_8px_40px_rgba(13,134,66,0.12)] bg-white px-8 py-12 md:px-14 md:py-16 text-center overflow-hidden">

            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-main to-accent rounded-t-2xl" />

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
