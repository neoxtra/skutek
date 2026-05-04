"use client";

import { CldImage } from 'next-cloudinary';

const logos = [
  { src: 'houghton_uni_usbhwd',          alt: 'Houghton University' },
  { src: 'ualbany_jwrgjf',               alt: 'University at Albany' },
  { src: 'bnl_logo_zby93h',              alt: 'Brookhaven National Laboratory' },
  { src: 'University_of_Tenessee_y9wrup',alt: 'University of Tennessee' },
  { src: 'berkeley_lab_logo_dhjzbp',      alt: 'Lawrence Berkeley National Laboratory' },
  { src: 'Michigan-State-University-Logo_k66jj1', alt: 'Michigan State University' },
  { src: 'houghton_uni_fsq58h',          alt: 'Houghton University' },
  { src: 'los_alamos_hkcmc5',            alt: 'Los Alamos National Laboratory' },
  { src: 'uofr_rwhnaj',                  alt: 'University of Rochester' },
  { src: 'Frib_logo_dncx9m',             alt: 'FRIB' },
];

export default function LogoScroller() {
  return (
    <section className="bg-white py-10 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Trusted by</p>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
          Powering World-Class Research Institutions
        </h2>
      </div>

      {/* Scroller */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-logo-scroll" style={{ width: 'max-content' }}>
          {/* Original + duplicate for seamless loop */}
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center mx-8"
              style={{ width: 154, height: 77, flexShrink: 0 }}
            >
              <CldImage
                src={logo.src}
                width={154}
                height={77}
                alt={logo.alt}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
