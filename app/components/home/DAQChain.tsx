"use client";

import { useEffect, useRef, useState } from 'react';

const G = '#d1d5db';

/* ── Arrow connectors ─────────────────────────────────────────────────────── */

function ArrowR() {
  return (
    <div className="flex-shrink-0 flex items-center">
      <div className="h-[1.5px] w-7 bg-gray-300" />
      <div className="w-0 h-0 border-y-[4px] border-l-[6px] border-y-transparent border-l-gray-300" />
    </div>
  );
}

function ArrowBoth() {
  return (
    <div className="flex-shrink-0 flex items-center">
      <div className="w-0 h-0 border-y-[4px] border-r-[6px] border-y-transparent border-r-gray-300" />
      <div className="h-[1.5px] w-5 bg-gray-300" />
      <div className="w-0 h-0 border-y-[4px] border-l-[6px] border-y-transparent border-l-gray-300" />
    </div>
  );
}

/* ── Node card ────────────────────────────────────────────────────────────── */

function FlowNode({
  icon, title, sub, color = 'gray', delay = 0, visible,
}: {
  icon: React.ReactNode; title: string; sub?: string;
  color?: 'gray' | 'green' | 'blue'; delay?: number; visible: boolean;
}) {
  const border   = color === 'green' ? 'border-main/20'   : color === 'blue' ? 'border-sky-100'  : 'border-gray-100';
  const tColor   = color === 'green' ? 'text-main'         : color === 'blue' ? 'text-sky-500'    : 'text-gray-700';
  const iColor   = color === 'green' ? 'text-main'         : color === 'blue' ? 'text-sky-400'    : 'text-slate-400';
  return (
    <div
      className={`flex flex-col items-center gap-2 p-4 rounded-xl border bg-white shadow-sm min-w-[110px] transition-all duration-500 ease-out ${border} ${iColor} ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {icon}
      <div className="text-center">
        <p className={`text-xs font-bold leading-tight ${tColor}`}>{title}</p>
        {sub && <p className="text-[10px] text-gray-400 mt-0.5 leading-tight">{sub}</p>}
      </div>
    </div>
  );
}

/* ── Offsite destination row ──────────────────────────────────────────────── */

function Dest({ icon, title, delay, visible }: {
  icon: React.ReactNode; title: string; delay: number; visible: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      <ArrowR />
      <div
        className={`flex items-center gap-2.5 px-3 py-2 rounded-xl border border-sky-100 bg-white shadow-sm min-w-[130px] text-sky-400 transition-all duration-500 ease-out ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {icon}
        <p className="text-xs font-bold text-sky-500 leading-tight">{title}</p>
      </div>
    </div>
  );
}

/* ── SVG icons ────────────────────────────────────────────────────────────── */

const S = { viewBox: '0 0 40 40', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

const ServerIcon = () => (
  <svg {...S} className="w-9 h-9">
    <rect x="3" y="6" width="34" height="9" rx="2"/>
    <rect x="3" y="18" width="34" height="9" rx="2"/>
    <rect x="3" y="30" width="34" height="7" rx="2"/>
    <circle cx="31" cy="10.5" r="1.5" fill="currentColor" stroke="none"/>
    <circle cx="31" cy="22.5" r="1.5" fill="currentColor" stroke="none"/>
    <line x1="8" y1="10.5" x2="22" y2="10.5"/>
    <line x1="8" y1="22.5" x2="22" y2="22.5"/>
  </svg>
);

const MeshIcon = () => (
  <svg {...S} className="w-9 h-9">
    <circle cx="20" cy="20" r="3.5"/>
    <circle cx="6" cy="13" r="2.5"/><circle cx="34" cy="13" r="2.5"/>
    <circle cx="6" cy="30" r="2.5"/><circle cx="34" cy="30" r="2.5"/>
    <circle cx="20" cy="6"  r="2.5"/>
    <line x1="20" y1="16.5" x2="20" y2="8.5"/>
    <line x1="17" y1="18"   x2="8.5" y2="14.5"/>
    <line x1="23" y1="18"   x2="31.5" y2="14.5"/>
    <line x1="17" y1="23"   x2="8.5" y2="27.5"/>
    <line x1="23" y1="23"   x2="31.5" y2="27.5"/>
  </svg>
);

const CloudIcon = (cls = 'w-7 h-7') => (
  <svg {...S} className={cls}>
    <path d="M30 29H14a8 8 0 010-16 7.9 7.9 0 017.6 5.6A6 6 0 1130 29z"/>
  </svg>
);

const FolderCloudIcon = (cls = 'w-7 h-7') => (
  <svg {...S} className={cls}>
    <path d="M5 12h12l3 4h15v16H5z"/>
    <path d="M24 24a4 4 0 010 7h-8a4 4 0 010-7h1a3 3 0 016 0z"/>
  </svg>
);

const DbIcon = (cls = 'w-7 h-7') => (
  <svg {...S} className={cls}>
    <ellipse cx="20" cy="12" rx="13" ry="5"/>
    <path d="M7 12v7c0 2.8 5.8 5 13 5s13-2.2 13-5v-7"/>
    <path d="M7 19v7c0 2.8 5.8 5 13 5s13-2.2 13-5v-7"/>
  </svg>
);

const MonitorIcon = () => (
  <svg {...S} className="w-9 h-9">
    <rect x="3" y="5" width="34" height="22" rx="2"/>
    <line x1="14" y1="32" x2="26" y2="32"/>
    <line x1="20" y1="27" x2="20" y2="32"/>
    <line x1="8" y1="14" x2="18" y2="14"/>
    <line x1="8" y1="18" x2="14" y2="18"/>
  </svg>
);

const PersonIcon = () => (
  <svg {...S} className="w-9 h-9">
    <circle cx="20" cy="13" r="7"/>
    <path d="M4 36c0-8.8 7.2-16 16-16s16 7.2 16 16"/>
  </svg>
);

const TransferIcon = () => (
  <svg {...S} className="w-9 h-9">
    <path d="M6 16h22l-5-5M6 16l5-5"/>
    <path d="M34 24H12l5 5M34 24l-5 5"/>
  </svg>
);

/* ── Main component ───────────────────────────────────────────────────────── */

export default function DAQChain() {
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
    <section className="bg-gray-50 font-sans py-20 px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={ref}>

        {/* Heading */}
        <div className="text-center mb-12">
          <p className={`text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1 transition-all duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            End-to-End
          </p>
          <h2 className={`text-xl md:text-2xl font-bold text-gray-900 tracking-tight transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Solutions for the Entire Data Acquisition Chain
          </h2>
          <div className={`mx-auto mt-3 h-[3px] bg-main rounded-full transition-all duration-700 delay-200 ${visible ? 'w-20 opacity-100' : 'w-0 opacity-0'}`} />
        </div>

        {/* Zone labels */}
        <div className={`flex items-center justify-between mb-4 transition-all duration-500 delay-250 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <div>
            <span className="text-xs font-bold text-gray-700">Onsite</span>
            <span className="text-xs text-gray-400 italic ml-1.5">· Hardware products</span>
          </div>
          <div className="text-right">
            <span className="text-xs font-bold text-gray-700">Offsite</span>
            <span className="text-xs text-gray-400 italic ml-1.5">· Esnet / WAN</span>
          </div>
        </div>

        {/* ── Hardware flow ── */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 -mx-6 px-6 lg:mx-0 lg:px-0">

          {/* Digitizers with CSS bracket */}
          <div className={`flex-shrink-0 transition-all duration-500 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 text-center mb-2">Digitizers</p>
            <div className="flex items-center">
              {/* Pills */}
              <div className="flex flex-col justify-between h-24">
                {['Vireo', 'Kingfisher', 'CHK-32'].map(name => (
                  <div key={name} className="px-5 py-1.5 bg-main rounded-full text-white text-xs font-bold whitespace-nowrap shadow-sm">
                    {name}
                  </div>
                ))}
              </div>
              {/* Bracket (CSS border trick) */}
              <div className="flex flex-col h-24 w-3.5 ml-2 flex-shrink-0">
                <div className="flex-1 border-t-[1.5px] border-r-[1.5px] border-gray-300 rounded-tr" />
                <div className="flex-1 border-b-[1.5px] border-r-[1.5px] border-gray-300 rounded-br" />
              </div>
              {/* Short stub */}
              <div className="w-2 h-[1.5px] bg-gray-300 flex-shrink-0" />
              {/* Arrowhead */}
              <div className="flex-shrink-0 w-0 h-0 border-y-[4px] border-l-[6px] border-y-transparent border-l-gray-300" />
            </div>
          </div>

          {/* Collector Node */}
          <FlowNode icon={<ServerIcon />} title="Collector Node" sub="Onsite Data Storage" delay={400} visible={visible} />

          <ArrowR />

          {/* Transfer Node */}
          <FlowNode icon={<MeshIcon />} title="Transfer Node" sub="Facility Data Transfer" delay={500} visible={visible} />

          {/* Vertical divider */}
          <div className={`self-stretch mx-3 w-px bg-gray-200 flex-shrink-0 transition-all duration-700 delay-550 ${visible ? 'opacity-100' : 'opacity-0'}`} />

          {/* Offsite destinations */}
          <div className={`flex flex-col gap-3 flex-shrink-0 transition-all duration-500 delay-600 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}>
            <Dest icon={CloudIcon()}      title="Facility Storage" delay={620} visible={visible} />
            <Dest icon={FolderCloudIcon()} title="User Storage"     delay={700} visible={visible} />
            <Dest icon={DbIcon()}         title="HPC Center"       delay={780} visible={visible} />
          </div>
        </div>

        {/* Software separator */}
        <div className={`my-8 flex items-center gap-4 transition-all duration-500 delay-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex-1 border-t border-dashed border-gray-300" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 whitespace-nowrap">Software Solutions</span>
          <div className="flex-1 border-t border-dashed border-gray-300" />
        </div>

        {/* ── Software flow ── */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-6 px-6 lg:mx-0 lg:px-0">
          <FlowNode icon={<MonitorIcon />} title="Web Interface"  sub="SkuTek Web GUI / Skutils REST API" color="green" delay={750} visible={visible} />
          <ArrowR />
          <FlowNode icon={<PersonIcon />}  title="User"           color="green" delay={850} visible={visible} />
          <ArrowBoth />
          <FlowNode icon={<TransferIcon />} title="SkuTek Globus" sub="Auto File Transfer System"         color="green" delay={950} visible={visible} />
        </div>

      </div>
    </section>
  );
}
