"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';

// ─── Highlights card data ─────────────────────────────────────────────────────

const cards = [
  {
    title: 'New Products',
    description: 'Explore our latest data acquisition hardware and instrumentation built for modern research demands.',
    href: '/products',
    img: 'new_products_b0vqaq',
  },
  {
    title: 'News and Updates',
    description: 'Stay current with the latest announcements, milestones, and developments from SkuTek Instrumentation.',
    href: '/news',
    img: 'news_nnazbs',
  },
  {
    title: 'Application Notes',
    description: 'Technical documentation and real-world use cases demonstrating our systems in leading research environments.',
    href: '/downloads',
    img: 'Application_Notes_bosv7k',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function HighlightsSpace() {
  const headingRef = useRef<HTMLDivElement>(null);
  const [hlVisible, setHlVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setHlVisible(true); },
      { threshold: 0.2 }
    );
    if (headingRef.current) obs.observe(headingRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* ── Highlights cards ── */}
      <section className="bg-white py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div ref={headingRef} className="text-center mb-12">
            <h2 className={`text-xl md:text-2xl font-bold text-gray-900 tracking-tight transition-all duration-700 ease-out ${
              hlVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              We are your solutions for the entire data acquisition chain
            </h2>
            <div className={`mx-auto mt-3 h-[3px] bg-main rounded-full transition-all duration-700 delay-200 ease-out ${
              hlVisible ? 'opacity-100 w-20' : 'opacity-0 w-0'
            }`} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, i) => (
              <Link
                key={card.title}
                href={card.href}
                className={`group flex flex-col rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-500 ease-out ${
                  hlVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: hlVisible ? `${200 + i * 120}ms` : '0ms' }}
              >
                <div className="aspect-video w-full overflow-hidden bg-gray-100">
                  <CldImage
                    src={card.img}
                    width={640}
                    height={360}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-main transition-colors duration-200">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{card.description}</p>
                </div>
                <div className="h-[3px] bg-main w-0 group-hover:w-full transition-all duration-300 ease-out" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vireo spotlight ── */}
      <section className="bg-main py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

          <div className="w-full md:w-1/2">
            <CldImage
              src="Vireo_z7froo"
              width={1400}
              height={900}
              alt="FemtoDAQ Vireo 2 Channel Digitizer"
              className="w-full h-auto drop-shadow-2xl rounded-xl"
              priority
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-4 text-white">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
              FemtoDAQ Vireo
            </h2>
            <p className="text-white/80 font-semibold text-lg">2 Channel Digitizer</p>
            <div className="w-16 h-[2px] bg-white/40 rounded-full" />
            <p className="text-white/70 leading-relaxed">
              <span className="block text-white font-semibold italic mb-1">
                Our classroom and small project digitizer.
              </span>
              The FemtoDAQ Vireo is the successor to our popular FemtoDAQ classic digitizer. It features
              2 low noise data acquisition channels, an 11–56V detector bias supply, and logical I/O to
              interact with your experimental setup. Simply power it up and connect it via USB or ethernet
              to start collecting data!
            </p>
            <Link
              href="/products/digitizers/femtodaq-vireo"
              className="self-start inline-block bg-white text-main text-sm font-semibold px-7 py-2.5 rounded-full hover:bg-white/90 transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
