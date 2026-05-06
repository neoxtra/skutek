"use client";

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';

// ─── Types & helpers ──────────────────────────────────────────────────────────

interface Star { x: number; y: number; radius: number; opacity: number; speed: number; dir: number; }

const map = (v: number, a: number, b: number, c: number, d: number) =>
  c + (d - c) * Math.max(0, Math.min(1, (v - a) / (b - a)));

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
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const animRef      = useRef<number>(0);
  const starsRef     = useRef<Star[]>([]);
  const headingRef   = useRef<HTMLDivElement>(null);

  const [p, setP]           = useState(0);
  const [hlVisible, setHlVisible] = useState(false);
  const [isMobile, setIsMobile]   = useState(false);

  // ── Scroll tracking ───────────────────────────────────────────────────────
  const onScroll = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const scrollable = el.offsetHeight - window.innerHeight;
    setP(Math.max(0, Math.min(1, -el.getBoundingClientRect().top / scrollable)));
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // ── Highlights heading entrance ───────────────────────────────────────────
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setHlVisible(true); },
      { threshold: 0.2 }
    );
    if (headingRef.current) obs.observe(headingRef.current);
    return () => obs.disconnect();
  }, []);

  // ── Canvas starfield ──────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const buildStars = (w: number, h: number): Star[] =>
      Array.from({ length: 500 }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        radius: Math.random() < 0.1 ? Math.random() * 1.8 + 1 : Math.random() * 0.7 + 0.1,
        opacity: Math.random() * 0.8 + 0.1,
        speed: Math.random() * 0.004 + 0.001,
        dir: Math.random() > 0.5 ? 1 : -1,
      }));

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.offsetWidth, h = canvas.offsetHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      starsRef.current = buildStars(w, h);
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      const w = canvas.offsetWidth, h = canvas.offsetHeight;
      const bg = ctx.createRadialGradient(w*.5, h*.45, 0, w*.5, h*.5, Math.max(w, h));
      bg.addColorStop(0, '#06091a'); bg.addColorStop(.5, '#020408'); bg.addColorStop(1, '#000002');
      ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
      [
        { x:.22, y:.3,  r:.3,  c:'rgba(60,10,110,0.07)' },
        { x:.78, y:.65, r:.25, c:'rgba(5,40,110,0.07)'  },
        { x:.5,  y:.15, r:.18, c:'rgba(0,70,90,0.05)'   },
      ].forEach(n => {
        const g = ctx.createRadialGradient(n.x*w, n.y*h, 0, n.x*w, n.y*h, n.r*w);
        g.addColorStop(0, n.c); g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
      });
      starsRef.current.forEach(s => {
        s.opacity += s.speed * s.dir;
        if (s.opacity >= .95 || s.opacity <= .05) s.dir *= -1;
        if (s.radius > 1.2) {
          const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.radius * 6);
          glow.addColorStop(0, `rgba(180,210,255,${s.opacity * .5})`);
          glow.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.fillStyle = glow; ctx.beginPath(); ctx.arc(s.x, s.y, s.radius * 6, 0, Math.PI * 2); ctx.fill();
        }
        ctx.beginPath(); ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,218,255,${s.opacity})`; ctx.fill();
      });
      animRef.current = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animRef.current); window.removeEventListener('resize', resize); };
  }, []);

  // ── Scroll-driven values ──────────────────────────────────────────────────

  // CROSSFADE ZONE — desktop: p 0.10→0.35 / mobile: p 0.55→0.75 (cards stay tappable longer)
  const fadeStart = isMobile ? 0.55 : 0.10;
  const fadeEnd   = isMobile ? 0.75 : 0.35;
  const spStart   = isMobile ? 0.75 : 0.35;

  const highlightsOpacity = map(p, fadeStart, fadeEnd, 1, 0);
  const spaceOpacity      = map(p, fadeStart, fadeEnd, 0, 1);

  // SPACE ANIMATION (sp: normalised progress of just the space portion)
  const sp = map(p, spStart, 1.0, 0, 1);

  const imageOpacity      = map(sp, 0, 0.12, 0, 1);
  const scale             = sp < 0.93 ? map(sp, 0.05, 0.93, 1, 1.25) : map(sp, 0.93, 1.0, 1.25, 0.82);
  const starfieldOpacity  = map(sp, 0.93, 1.0, 1, 0);
  const imageWrapperY     = map(sp, 0.93, 1.0, 0, isMobile ? -50 : -100);
  const descOpacity       = map(sp, 0.95, 1.0, 0, 1);

  return (
    // Total height: ~50vh crossfade zone + 150vh space animation = 200vh
    <div ref={containerRef} className="relative h-[200vh]">

      {/* ═══════════════════════════════════════════════════════════════════════
          SPACE PANEL  ·  sticky, sits behind highlights, fades in during crossfade
          ═══════════════════════════════════════════════════════════════════════ */}
      <div
        className="sticky top-[67px] lg:top-[77px] h-[calc(100vh-67px)] lg:h-[calc(100vh-77px)] overflow-hidden"
        style={{ opacity: spaceOpacity }}
      >
        {/* Solid dark base — revealed as starfield fades at animation end */}
        <div className="absolute inset-0 bg-[#06091a]" />

        {/* Starfield canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ opacity: starfieldOpacity }}
        />

        {/* Vireo product image — slow cinematic zoom */}
        <div
          className="absolute inset-0 z-10 flex items-center justify-center"
          style={{ opacity: imageOpacity, transform: `translateY(${imageWrapperY}px)` }}
        >
          <div
            className="relative w-[90vw] md:w-[70vw] max-w-4xl"
            style={{
              transform: `scale(${scale})`,
              transition: 'transform 0.12s linear',
              transformOrigin: 'center center',
            }}
          >
            <CldImage
              src="Vireo_z7froo"
              width={1400}
              height={900}
              alt="FemtoDAQ Vireo 2 Channel Digitizer"
              className="w-full h-auto drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* End-state: product title + description + CTA */}
        <div
          className="absolute bottom-[4%] md:bottom-[6%] left-0 right-0 z-30 flex flex-col items-center gap-4 px-8 text-center"
          style={{ opacity: descOpacity, pointerEvents: descOpacity > 0.1 ? 'auto' : 'none' }}
        >
          <h2 className="text-white font-bold leading-tight tracking-tight" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)' }}>
            FemtoDAQ Vireo
          </h2>
          <p className="text-white/70 font-semibold -mt-2" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.5rem)' }}>
            2 Channel Digitizer
          </p>
          <div className="w-16 h-[2px] bg-main rounded-full -mt-1" />
          <p className="text-white/55 leading-relaxed max-w-xl" style={{ fontSize: 'clamp(0.8rem, 1.3vw, 0.95rem)' }}>
            <span className="block text-white/80 font-semibold italic mb-2" style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1rem)' }}>
              Our classroom and small project digitizer.
            </span>
            The FemtoDAQ Vireo is the successor to our popular FemtoDAQ classic digitizer. It features
            2 low noise data acquisition channels, an 11–56V detector bias supply, and logical I/O to
            interact with your experimental setup. Simply power it up and connect it via USB or ethernet
            to start collecting data!
          </p>
          <Link
            href="/products/digitizers/femtodaq-vireo"
            className="inline-block bg-accent text-white text-sm font-semibold px-7 py-2.5 rounded-full hover:bg-main transition-colors duration-200"
          >
            Learn More
          </Link>
        </div>

        {/* Scroll hint — visible only at the very start of the space section */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30"
          style={{ opacity: map(sp, 0, 0.08, 1, 0) }}
        >
          <p className="text-white/40 text-xs tracking-widest uppercase font-sans">Scroll to explore</p>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent animate-bounce" />
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          HIGHLIGHTS PANEL  ·  absolute, overlays space at start, fades out
          ═══════════════════════════════════════════════════════════════════════ */}
      <div
        className="absolute top-0 left-0 right-0 z-20 bg-white font-sans py-16 px-6 lg:px-8"
        style={{ opacity: highlightsOpacity, pointerEvents: highlightsOpacity > 0.05 ? 'auto' : 'none' }}
      >
        <div className="max-w-7xl mx-auto">

          {/* Animated heading */}
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

          {/* 3 cards */}
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
      </div>

    </div>
  );
}
