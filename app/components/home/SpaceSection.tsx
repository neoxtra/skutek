"use client";

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';

interface Star {
  x: number; y: number; radius: number;
  opacity: number; speed: number; dir: number;
}

const map = (v: number, a: number, b: number, c: number, d: number) =>
  c + (d - c) * Math.max(0, Math.min(1, (v - a) / (b - a)));

const highlights = [
  {
    label: 'External 10 MHz Sync Clock',
    sub: '',
    left: (280 / 1400) * 100,
    top:  ((444 - 100) / 900) * 100,
    from: 0.28, to: 0.44,
    panX: 22,
  },
  {
    label: 'Programmable Logic I/Os',
    sub: '',
    left: (494 / 1400) * 100,
    top:  ((449 - 100) / 900) * 100,
    from: 0.46, to: 0.61,
    panX: 8,
  },
  {
    label: 'HV Bias Output',
    sub: '+11 to 56V',
    left: (688 / 1400) * 100,
    top:  ((437 - 100) / 900) * 100,
    from: 0.63, to: 0.77,
    panX: 0,
  },
  {
    label: '2× LEMO Input Channels',
    sub: '',
    left: (1065 / 1400) * 100,
    top:  ((446 - 100) / 900) * 100,
    from: 0.79, to: 0.93,
    panX: -22,
  },
];

export default function SpaceSection() {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const animRef    = useRef<number>(0);
  const starsRef   = useRef<Star[]>([]);
  const [p, setP] = useState(0);

  const onScroll = useCallback(() => {
    const el = sectionRef.current;
    if (!el) return;
    const scrollable = el.offsetHeight - window.innerHeight;
    setP(Math.max(0, Math.min(1, -el.getBoundingClientRect().top / scrollable)));
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  /* Canvas starfield */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const buildStars = (w: number, h: number): Star[] =>
      Array.from({ length: 500 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        radius: Math.random() < 0.1 ? Math.random() * 1.8 + 1 : Math.random() * 0.7 + 0.1,
        opacity: Math.random() * 0.8 + 0.1,
        speed: Math.random() * 0.004 + 0.001,
        dir: Math.random() > 0.5 ? 1 : -1,
      }));

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width  = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      starsRef.current = buildStars(w, h);
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const bg = ctx.createRadialGradient(w*.5, h*.45, 0, w*.5, h*.5, Math.max(w,h));
      bg.addColorStop(0, '#06091a'); bg.addColorStop(.5, '#020408'); bg.addColorStop(1, '#000002');
      ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
      [
        { x:.22, y:.3,  r:.3,  c:'rgba(60,10,110,0.07)'  },
        { x:.78, y:.65, r:.25, c:'rgba(5,40,110,0.07)'   },
        { x:.5,  y:.15, r:.18, c:'rgba(0,70,90,0.05)'    },
      ].forEach(n => {
        const g = ctx.createRadialGradient(n.x*w,n.y*h,0,n.x*w,n.y*h,n.r*w);
        g.addColorStop(0, n.c); g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g; ctx.fillRect(0,0,w,h);
      });
      starsRef.current.forEach(s => {
        s.opacity += s.speed * s.dir;
        if (s.opacity >= .95 || s.opacity <= .05) s.dir *= -1;
        if (s.radius > 1.2) {
          const glow = ctx.createRadialGradient(s.x,s.y,0,s.x,s.y,s.radius*6);
          glow.addColorStop(0, `rgba(180,210,255,${s.opacity*.5})`);
          glow.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.fillStyle = glow; ctx.beginPath(); ctx.arc(s.x,s.y,s.radius*6,0,Math.PI*2); ctx.fill();
        }
        ctx.beginPath(); ctx.arc(s.x,s.y,s.radius,0,Math.PI*2);
        ctx.fillStyle = `rgba(200,218,255,${s.opacity})`; ctx.fill();
      });
      animRef.current = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animRef.current); window.removeEventListener('resize', resize); };
  }, []);

  /* ── Scroll-driven values ── */

  const sectionOpacity = map(p, 0, 0.20, 0, 1);

  // Title only shows during the intro, fades out before highlights begin
  const titleOpacity = map(p, 0, 0.08, 0, 1) * map(p, 0.12, 0.22, 1, 0);
  const titleY = map(p, 0, 0.22, 0, -30);

  const imageOpacity = map(p, 0.08, 0.22, 0, 1);

  // At end (p→1): scale back to 0.82 so the image is smaller and leaves room for text
  const scale =
    p < 0.25 ? map(p, 0.12, 0.25, 1, 1.4) :
    p < 0.28 ? map(p, 0.25, 0.28, 1.4, 2.2) :
    p < 0.93 ? 2.2 :
               map(p, 0.93, 1.0, 2.2, 0.82);

  // Shift image wrapper up at end to leave room for description text
  const imageWrapperY = map(p, 0.93, 1.0, 0, -70);

  // Starfield fades out leaving clean dark bg
  const starfieldOpacity = map(p, 0.93, 1.0, 1, 0);

  // Description text fades in after animation completes
  const descOpacity = map(p, 0.95, 1.0, 0, 1);

  const activeHL = highlights.find(h => p >= h.from && p <= h.to) ?? null;

  const panX = activeHL ? map(p, activeHL.from, activeHL.from + 0.04, 0, activeHL.panX) : (() => {
    const prev = [...highlights].reverse().find(h => p > h.to);
    const next = highlights.find(h => p < h.from);
    if (prev && next) return map(p, prev.to, next.from, prev.panX, next.panX);
    if (prev)         return map(p, prev.to, prev.to + 0.04, prev.panX, 0);
    return 0;
  })();

  return (
    <div ref={sectionRef} className="relative h-[380vh]">
      <div
        className="sticky top-0 h-screen overflow-hidden"
        style={{ opacity: sectionOpacity }}
      >
        {/* Solid base — revealed as starfield fades out */}
        <div className="absolute inset-0 bg-[#06091a]" />

        {/* Starfield */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ opacity: starfieldOpacity }}
        />

        {/* Title — stays on top of product image throughout the animation */}
        <div
          className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none"
          style={{
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
            transition: 'transform 0.1s linear',
          }}
        >
          <h2
            className="text-white font-bold text-center leading-tight tracking-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', textShadow: '0 2px 24px rgba(0,0,0,0.7), 0 0 40px rgba(13,134,66,0.4)' }}
          >
            FemtoDAQ Vireo
          </h2>
          <p
            className="text-white/70 font-semibold text-center mt-2"
            style={{ fontSize: 'clamp(1rem, 2.5vw, 2rem)', textShadow: '0 2px 12px rgba(0,0,0,0.7)' }}
          >
            2 Channel Digitizer
          </p>
          <div className="mt-4 w-16 h-[2px] bg-main rounded-full" />
        </div>

        {/* Product image */}
        <div
          className="absolute inset-0 z-10 flex items-center justify-center"
          style={{
            opacity: imageOpacity,
            transform: `translateY(${imageWrapperY}px)`,
          }}
        >
          <div
            className="relative w-[70vw] max-w-4xl"
            style={{
              transform: `scale(${scale}) translateX(${panX}%)`,
              transition: 'transform 0.08s linear',
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

            {/* Highlight dots + labels — bidirectional timeline */}
            {highlights.map((h) => {
              const opacity =
                map(p, h.from, h.from + 0.05, 0, 1) *
                map(p, h.to - 0.05, h.to, 1, 0);

              return (
                <div
                  key={h.label}
                  className="absolute pointer-events-none"
                  style={{
                    left: `${h.left}%`,
                    top:  `${h.top}%`,
                    opacity,
                    transform: `scale(${1 / scale})`,
                    transformOrigin: 'left center',
                  }}
                >
                  {/* Dot centered on the coordinate point */}
                  <div className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2">
                    <div className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
                    <div className="absolute inset-0 rounded-full bg-white border-2 border-white shadow-lg shadow-white/30" />
                  </div>

                  {/* Line + card — flush from dot's right edge */}
                  <div
                    className="absolute flex items-center whitespace-nowrap"
                    style={{ left: 8, top: 0, transform: 'translateY(-50%)' }}
                  >
                    <div style={{ width: 36, height: 1.5, background: 'white', flexShrink: 0 }} />
                    <div className="bg-black/80 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2.5">
                      <p className="text-white text-sm font-bold leading-tight">{h.label}</p>
                      {h.sub && <p className="text-white/60 text-xs mt-0.5">{h.sub}</p>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* End-state description text */}
        <div
          className="absolute bottom-[8%] left-0 right-0 z-30 flex flex-col items-center gap-4 px-8 text-center"
          style={{
            opacity: descOpacity,
            pointerEvents: descOpacity > 0.1 ? 'auto' : 'none',
          }}
        >
          <h2 className="text-white font-bold text-center leading-tight tracking-tight" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)' }}>
            FemtoDAQ Vireo
          </h2>
          <p className="text-white/70 font-semibold text-center -mt-2" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.5rem)' }}>
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
            href="/products"
            className="inline-block bg-accent text-white text-sm font-semibold px-7 py-2.5 rounded-full hover:bg-main transition-colors duration-200"
          >
            Learn More
          </Link>
        </div>

        {/* Scroll hint */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30"
          style={{ opacity: map(p, 0, 0.07, 1, 0) }}
        >
          <p className="text-white/40 text-xs tracking-widest uppercase font-sans">Scroll to explore</p>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent animate-bounce" />
        </div>
      </div>
    </div>
  );
}
