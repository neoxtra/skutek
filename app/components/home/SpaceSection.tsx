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

  const sectionOpacity = map(p, 0, 0.03, 0, 1);

  // Image fades in with the section — no intro title overlay
  const imageOpacity = map(p, 0.05, 0.20, 0, 1);

  // Gentle slow zoom: 1× → 1.25×, then settle back to 0.82× at end
  const scale =
    p < 0.93 ? map(p, 0.08, 0.93, 1, 1.25) :
               map(p, 0.93, 1.0, 1.25, 0.82);

  // No pan — keep product centered throughout
  const panX = 0;

  // Starfield fades, revealing solid dark base
  const starfieldOpacity = map(p, 0.93, 1.0, 1, 0);

  // Image shifts up at end to make room for description text
  const imageWrapperY = map(p, 0.93, 1.0, 0, -100);

  // Description fades in once animation resolves
  const descOpacity = map(p, 0.95, 1.0, 0, 1);

  return (
    <div ref={sectionRef} className="relative h-[155vh]">
      <div
        className="sticky top-[67px] lg:top-[77px] h-[calc(100vh-67px)] lg:h-[calc(100vh-77px)] overflow-hidden"
        style={{ opacity: sectionOpacity }}
      >
        {/* Solid base behind stars */}
        <div className="absolute inset-0 bg-[#06091a]" />

        {/* Starfield */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ opacity: starfieldOpacity }}
        />

        {/* Product image — slow cinematic zoom */}
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

        {/* End-state: product info below image */}
        <div
          className="absolute bottom-[6%] left-0 right-0 z-30 flex flex-col items-center gap-4 px-8 text-center"
          style={{
            opacity: descOpacity,
            pointerEvents: descOpacity > 0.1 ? 'auto' : 'none',
          }}
        >
          <h2
            className="text-white font-bold text-center leading-tight tracking-tight"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)' }}
          >
            FemtoDAQ Vireo
          </h2>
          <p
            className="text-white/70 font-semibold text-center -mt-2"
            style={{ fontSize: 'clamp(0.9rem, 2vw, 1.5rem)' }}
          >
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
