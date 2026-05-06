"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import CloudinaryImage from '../CloudinaryImage';

interface Props {
  images: string[];
  productName: string;
}

function PlaceholderImage() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center gap-3">
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14 text-gray-300">
        <rect x="4" y="10" width="40" height="28" rx="3" />
        <circle cx="17" cy="22" r="4" />
        <path d="M4 32l10-8 8 7 6-5 16 9" />
      </svg>
      <span className="text-xs text-gray-400 font-medium">Image coming soon</span>
    </div>
  );
}

const AUTOPLAY_MS = 4000;

export default function ImageSlider({ images, productName }: Props) {
  const [active, setActive]     = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const paused = useRef(false);
  const hasImages = images.length > 0;

  // Just update index — the key on the image wrapper triggers CSS fade-in
  const goTo = useCallback((idx: number) => {
    setActive(idx);
  }, []);

  const prev = useCallback(() =>
    goTo((active - 1 + images.length) % images.length), [active, images.length, goTo]);
  const next = useCallback(() =>
    goTo((active + 1) % images.length), [active, images.length, goTo]);

  // Auto-advance
  useEffect(() => {
    if (!hasImages || images.length < 2 || lightbox) return;
    const id = setInterval(() => {
      if (!paused.current) {
        setActive(i => (i + 1) % images.length);
      }
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [hasImages, images.length, lightbox]);

  // Keyboard in lightbox
  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape')      setLightbox(false);
      if (e.key === 'ArrowLeft')   prev();
      if (e.key === 'ArrowRight')  next();
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [lightbox, prev, next]);

  return (
    <>
      <div
        className="flex flex-col gap-3"
        onMouseEnter={() => { paused.current = true; }}
        onMouseLeave={() => { paused.current = false; }}
      >
        {/* Main image */}
        <div
          className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 ${hasImages ? 'cursor-zoom-in' : ''}`}
          onClick={() => hasImages && setLightbox(true)}
        >
          {hasImages ? (
            <>
              <div key={active} className="w-full h-full animate-fade-in">
                <CloudinaryImage
                  src={images[active]}
                  width={900}
                  height={675}
                  alt={`${productName} — image ${active + 1}`}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>

              {/* Expand hint */}
              <div className="absolute top-2.5 right-2.5 bg-black/40 rounded-lg px-2 py-1 flex items-center gap-1 opacity-50 hover:opacity-90 transition pointer-events-none">
                <svg viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                  <path d="M1 6V2h4M15 6V2h-4M1 10v4h4M15 10v4h-4" />
                </svg>
                <span className="text-white text-[10px] font-medium">Expand</span>
              </div>

              {images.length > 1 && (
                <>
                  <button
                    onClick={e => { e.stopPropagation(); prev(); }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white shadow flex items-center justify-center transition"
                    aria-label="Previous image"
                  >
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gray-700">
                      <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button
                    onClick={e => { e.stopPropagation(); next(); }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white shadow flex items-center justify-center transition"
                    aria-label="Next image"
                  >
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-gray-700">
                      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={e => { e.stopPropagation(); goTo(i); }}
                        className={`w-2 h-2 rounded-full transition-colors ${i === active ? 'bg-main' : 'bg-white/60 hover:bg-white'}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <PlaceholderImage />
          )}
        </div>

        {/* Thumbnails */}
        {hasImages && images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto pb-1">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${i === active ? 'border-main' : 'border-gray-200 hover:border-gray-400'}`}
              >
                <CloudinaryImage
                  src={src}
                  width={128}
                  height={128}
                  alt={`${productName} thumbnail ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── Lightbox (portalled to body to escape sticky stacking context) ── */}
      {lightbox && createPortal(
        <div
          className="fixed inset-0 z-[9999] bg-gray-900/80 backdrop-blur-sm flex flex-col items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(false)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
            onClick={() => setLightbox(false)}
            aria-label="Close"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>

          <div
            className="relative max-w-5xl w-full flex items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            <div key={`lb-${active}`} className="animate-fade-in">
              <CloudinaryImage
                src={images[active]}
                width={1400}
                height={1050}
                alt={`${productName} — image ${active + 1}`}
                className="max-w-full max-h-[78vh] object-contain rounded-xl"
              />
            </div>

            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute -left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition"
                >
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white">
                    <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  className="absolute -right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition"
                >
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white">
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                  </svg>
                </button>
              </>
            )}
          </div>

          {images.length > 1 && (
            <div className="flex gap-2 mt-5 overflow-x-auto pb-1" onClick={e => e.stopPropagation()}>
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-colors ${i === active ? 'border-main' : 'border-white/20 hover:border-white/50'}`}
                >
                  <CloudinaryImage src={src} width={112} height={112} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          <p className="mt-3 text-white/40 text-xs font-medium">{active + 1} / {images.length}</p>
        </div>,
        document.body
      )}
    </>
  );
}
