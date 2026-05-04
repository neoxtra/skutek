"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';

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

export default function Highlights() {
  const [visible, setVisible] = useState(false);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (headingRef.current) observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white font-sans py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Animated heading */}
        <div ref={headingRef} className="text-center mb-12">
          <h2
            className={`text-xl md:text-2xl font-bold text-gray-900 tracking-tight transition-all duration-700 ease-out ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            We are your solutions for the entire data acquisition chain
          </h2>
          <div
            className={`mx-auto mt-3 h-[3px] bg-main rounded-full transition-all duration-700 delay-200 ease-out ${
              visible ? 'opacity-100 w-20' : 'opacity-0 w-0'
            }`}
          />
        </div>

        {/* 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <Link
              key={card.title}
              href={card.href}
              className={`group flex flex-col rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-500 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: visible ? `${200 + i * 120}ms` : '0ms' }}
            >
              {/* Thumbnail */}
              <div className="aspect-video w-full overflow-hidden bg-gray-100">
                <CldImage
                  src={card.img}
                  width={640}
                  height={360}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Text */}
              <div className="p-5 flex flex-col gap-2 flex-1">
                <h3 className="text-base font-bold text-gray-900 group-hover:text-main transition-colors duration-200">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Bottom accent */}
              <div className="h-[3px] bg-main w-0 group-hover:w-full transition-all duration-300 ease-out" />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
