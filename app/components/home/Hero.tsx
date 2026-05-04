"use client";

import { useState, useEffect } from 'react';
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';

const slides = [
  {
    src: 'vireo_surf_vgpodw',
    caption: 'Our FemtoDAQ Vireo installed underground at Sanford Underground Research Facility in South Dakota working alongside the LZ DAQ!',
  },
  {
    src: 'vireo_setup_xqw24m',
    caption: 'FemtoDAQ Vireo — Laboratory configuration',
  },
  {
    src: 'assembled_solidago_udj21h',
    caption: 'Our UDP Saturator: Solidago. For your data management stress testing needs',
  },
  {
    src: 'kingfisher_kg77gg',
    caption: 'Our 10 Channel Digitizer: FemtoDAQ Kingfisher!',
  },
  {
    src: 'cosmic_ray_thgulu',
    caption: 'Live Cosmic Ray Demo at LECM!',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent(c => (c + 1) % slides.length);

  return (
    <section className="bg-main font-sans py-10 lg:py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-32">

          {/* Left — Text */}
          <div className="w-full lg:w-[460px] lg:flex-shrink-0 text-center lg:text-left space-y-4">
            <div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight">
                SkuTek<br />Instrumentation
              </h1>
              <div className="mt-3 mx-auto lg:mx-0 w-16 h-1 bg-white/50 rounded-full" />
            </div>

            <p className="text-base lg:text-[1.05rem] text-white/90 leading-relaxed mx-auto lg:mx-0 max-w-lg">
              SkuTek Instrumentation is a US-based company that provides{' '}
              <strong className="text-white font-semibold">advanced data acquisition solutions</strong>{' '}
              to both domestic and international research communities. The presentation of our products
              is available here:{' '}
              <a
                href="#"
                className="text-white underline underline-offset-4 hover:text-white/75 transition-colors duration-200"
              >
                SkuTek Digital Data Acquisition Systems
              </a>
            </p>

            <p className="text-base lg:text-[1.05rem] text-white/90 leading-relaxed mx-auto lg:mx-0 max-w-lg">
              We&apos;ve built over 1500 channels for data acquisition systems for the LUX-ZEPLIN (LZ) Dark Matter Experiment!
            </p>

            <div className="pt-1 flex justify-center lg:justify-start">
              <Link
                href="/about-us"
                className="inline-block bg-white text-main text-sm font-semibold px-7 py-2.5 rounded-full hover:bg-accent hover:text-white transition-colors duration-200"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Right — Slideshow */}
          <div className="w-full lg:flex-1">
            {/* Image */}
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-gray-100">
              {slides.map((slide, i) => (
                <div
                  key={slide.src}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    i === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <CldImage
                    src={slide.src}
                    fill
                    alt={slide.caption}
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={i === 0}
                  />
                </div>
              ))}

              {/* Prev / Next */}
              <button
                onClick={prev}
                aria-label="Previous slide"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors duration-200 p-1"
              >
                <svg className="w-7 h-7 drop-shadow" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={next}
                aria-label="Next slide"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors duration-200 p-1"
              >
                <svg className="w-7 h-7 drop-shadow" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>

            {/* Caption — below image */}
            <p className="text-white/90 text-sm text-center mt-3 leading-snug min-h-[2.5rem] px-2">
              {slides[current].caption}
            </p>

            {/* Dot indicators */}
            <div className="flex justify-center items-center gap-1.5 mt-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === current ? 'w-5 bg-white' : 'w-1.5 bg-white/35 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
