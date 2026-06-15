"use client";

// ─── SVG base props ───────────────────────────────────────────────────────────

const S = {
  viewBox: '0 0 40 40', fill: 'none', stroke: 'currentColor',
  strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const,
};

type IconSize = 'default' | 'sm' | 'xs';
const iconCls = (s: IconSize) => s === 'xs' ? 'w-6 h-6' : s === 'sm' ? 'w-9 h-9' : 'w-11 h-11';

// ─── Icons ────────────────────────────────────────────────────────────────────

const ServerIcon   = ({ size = 'default' }: { size?: IconSize }) => (
  <svg {...S} className={iconCls(size)}>
    <rect x="3" y="6" width="34" height="9" rx="2"/>
    <rect x="3" y="18" width="34" height="9" rx="2"/>
    <rect x="3" y="30" width="34" height="7" rx="2"/>
    <circle cx="31" cy="10.5" r="1.5" fill="currentColor" stroke="none"/>
    <circle cx="31" cy="22.5" r="1.5" fill="currentColor" stroke="none"/>
    <line x1="8" y1="10.5" x2="22" y2="10.5"/>
    <line x1="8" y1="22.5" x2="22" y2="22.5"/>
  </svg>
);
const MeshIcon     = ({ size = 'default' }: { size?: IconSize }) => (
  <svg {...S} className={iconCls(size)}>
    <circle cx="20" cy="20" r="3.5"/>
    <circle cx="6"  cy="13" r="2.5"/><circle cx="34" cy="13" r="2.5"/>
    <circle cx="6"  cy="30" r="2.5"/><circle cx="34" cy="30" r="2.5"/>
    <circle cx="20" cy="6"  r="2.5"/>
    <line x1="20" y1="16.5" x2="20" y2="8.5"/>
    <line x1="17" y1="18"   x2="8.5"  y2="14.5"/>
    <line x1="23" y1="18"   x2="31.5" y2="14.5"/>
    <line x1="17" y1="23"   x2="8.5"  y2="27.5"/>
    <line x1="23" y1="23"   x2="31.5" y2="27.5"/>
  </svg>
);
const MonitorIcon  = ({ size = 'default' }: { size?: IconSize }) => (
  <svg {...S} className={iconCls(size)}>
    <rect x="3" y="5" width="34" height="22" rx="2"/>
    <line x1="14" y1="32" x2="26" y2="32"/>
    <line x1="20" y1="27" x2="20" y2="32"/>
    <line x1="8"  y1="13" x2="22" y2="13"/>
    <line x1="8"  y1="18" x2="14" y2="18"/>
    <circle cx="28" cy="15" r="4" strokeWidth="1.5"/>
  </svg>
);
const PersonIcon   = ({ size = 'default' }: { size?: IconSize }) => (
  <svg {...S} className={iconCls(size)}>
    <circle cx="20" cy="13" r="7"/>
    <path d="M4 36c0-8.8 7.2-16 16-16s16 7.2 16 16"/>
  </svg>
);
const TransferIcon = ({ size = 'default' }: { size?: IconSize }) => (
  <svg {...S} className={iconCls(size)}>
    <path d="M6 16h22l-5-5M6 16l5-5"/>
    <path d="M34 24H12l5 5M34 24l-5 5"/>
  </svg>
);
const CloudIcon    = ({ size = 'default' }: { size?: IconSize }) => (
  <svg {...S} className={iconCls(size)}>
    <path d="M30 30H14a8 8 0 010-16 7.9 7.9 0 017.6 5.6A6 6 0 1130 30z"/>
    <line x1="20" y1="22" x2="20" y2="30"/>
    <polyline points="16,26 20,22 24,26"/>
  </svg>
);
const FolderCloudIcon = ({ size = 'default' }: { size?: IconSize }) => (
  <svg {...S} className={iconCls(size)}>
    <path d="M5 12h12l3 4h15v16H5z"/>
    <path d="M24 24a4 4 0 010 7h-8a4 4 0 010-7h1a3 3 0 016 0z"/>
  </svg>
);
const DbIcon       = ({ size = 'default' }: { size?: IconSize }) => (
  <svg {...S} className={iconCls(size)}>
    <ellipse cx="20" cy="12" rx="13" ry="5"/>
    <path d="M7 12v7c0 2.8 5.8 5 13 5s13-2.2 13-5v-7"/>
    <path d="M7 19v7c0 2.8 5.8 5 13 5s13-2.2 13-5v-7"/>
  </svg>
);

// ─── Arrows ───────────────────────────────────────────────────────────────────

function ArrowR({ mini }: { mini?: boolean }) {
  return mini ? (
    <div className="flex-shrink-0 flex items-center">
      <div className="h-[2px] w-3 bg-gray-800" />
      <div className="w-0 h-0 border-y-[4px] border-l-[6px] border-y-transparent border-l-gray-800" />
    </div>
  ) : (
    <div className="flex-shrink-0 flex items-center">
      <div className="h-[2.5px] w-8 bg-gray-800" />
      <div className="w-0 h-0 border-y-[6px] border-l-[9px] border-y-transparent border-l-gray-800" />
    </div>
  );
}

function ArrowBoth({ mini }: { mini?: boolean }) {
  return mini ? (
    <div className="flex-shrink-0 flex items-center">
      <div className="w-0 h-0 border-y-[4px] border-r-[6px] border-y-transparent border-r-gray-800" />
      <div className="h-[2px] w-3 bg-gray-800" />
      <div className="w-0 h-0 border-y-[4px] border-l-[6px] border-y-transparent border-l-gray-800" />
    </div>
  ) : (
    <div className="flex-shrink-0 flex items-center">
      <div className="w-0 h-0 border-y-[6px] border-r-[9px] border-y-transparent border-r-gray-800" />
      <div className="h-[2.5px] w-7 bg-gray-800" />
      <div className="w-0 h-0 border-y-[6px] border-l-[9px] border-y-transparent border-l-gray-800" />
    </div>
  );
}

// ─── Node card ────────────────────────────────────────────────────────────────

function Node({ icon, title, sub, color = 'gray', mini = false }: {
  icon: React.ReactNode; title: string; sub?: string;
  color?: 'gray' | 'green' | 'blue'; mini?: boolean;
}) {
  const borderCls = color === 'green' ? 'border-main/50 bg-green-50'  : color === 'blue' ? 'border-sky-300 bg-sky-50'  : 'border-gray-300 bg-white';
  const titleCls  = color === 'green' ? 'text-main'                   : color === 'blue' ? 'text-sky-800'               : 'text-gray-900';
  const iCls      = color === 'green' ? 'text-main'                   : color === 'blue' ? 'text-sky-500'               : 'text-gray-700';
  return mini ? (
    <div className={`flex flex-col items-center gap-1.5 px-2 py-2.5 rounded-xl border-2 shadow-sm w-[82px] flex-shrink-0 ${borderCls} ${iCls}`}>
      {icon}
      <div className="text-center">
        <p className={`text-[10px] font-bold leading-tight ${titleCls}`}>{title}</p>
        {sub && <p className="text-[8.5px] text-gray-600 mt-0.5 leading-snug font-medium">{sub}</p>}
      </div>
    </div>
  ) : (
    <div className={`flex flex-col items-center gap-2.5 px-4 py-4 rounded-2xl border-2 shadow-md w-[140px] flex-shrink-0 ${borderCls} ${iCls}`}>
      {icon}
      <div className="text-center">
        <p className={`text-sm font-bold leading-tight ${titleCls}`}>{title}</p>
        {sub && <p className="text-xs text-gray-600 mt-1 leading-snug font-medium">{sub}</p>}
      </div>
    </div>
  );
}

// ─── Offsite destination data ─────────────────────────────────────────────────

const offsite = [
  { icon: (s: IconSize) => <CloudIcon size={s} />,       label: 'Facility Storage' },
  { icon: (s: IconSize) => <FolderCloudIcon size={s} />, label: 'User Storage' },
  { icon: (s: IconSize) => <DbIcon size={s} />,          label: 'HPC Center' },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function DAQChain() {
  return (
    <section className="bg-gray-100 font-sans py-20 px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Heading + intro */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">End-to-End</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">SkuTek Data Acquisition Chain</h2>
          <div className="mx-auto mt-3 mb-5 h-[3px] bg-main rounded-full w-24" />
          <p className="text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
            From front-end digitizers to onsite collection, high-speed transfer, and offsite archiving —
            SkuTek designs and supplies every component in the data acquisition chain so your team can focus on research, not infrastructure.
          </p>
        </div>

        {/* ══════════════════════════════════════════════════════
            MOBILE LAYOUT  (< lg)  — compressed mini horizontal
            ══════════════════════════════════════════════════════ */}
        <div className="block lg:hidden overflow-x-auto pb-2 -mx-6 px-6">
          <div className="inline-flex flex-row gap-0 items-stretch min-w-max">

            {/* ── Onsite zone ── */}
            <div className="flex-shrink-0 pr-4 border-r-2 border-dashed border-gray-500">

              <div className="mb-3">
                <p className="text-sm font-bold text-gray-900">Onsite</p>
                <p className="text-[11px] text-gray-600 italic font-medium">Hardware products</p>
              </div>

              {/* Hardware row */}
              <div className="flex items-end gap-2">

                {/* Digitizer pills + bracket */}
                <div className="flex-shrink-0">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-gray-700 text-center mb-1.5">Digitizers</p>
                  <div className="flex items-center">
                    <div className="flex flex-col justify-between h-[72px]">
                      {['Vireo', 'Kestrel-16', 'CHK-32'].map(name => (
                        <div key={name} className="px-3 py-0.5 bg-main rounded-full text-white text-[10px] font-bold whitespace-nowrap shadow-sm">
                          {name}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col h-[72px] w-3 ml-1.5 flex-shrink-0">
                      <div className="flex-1 border-t-2 border-r-2 border-gray-800 rounded-tr" />
                      <div className="flex-1 border-b-2 border-r-2 border-gray-800 rounded-br" />
                    </div>
                    <div className="w-2 h-[2px] bg-gray-800 flex-shrink-0" />
                    <div className="w-0 h-0 border-y-[4px] border-l-[6px] border-y-transparent border-l-gray-800 flex-shrink-0" />
                  </div>
                </div>

                <div className="flex flex-col items-center flex-shrink-0">
                  <p className="text-[9px] text-gray-600 italic font-semibold mb-1">Data Mgmt</p>
                  <Node icon={<ServerIcon size="xs" />} title="Collector Node" sub="Onsite Data Storage" mini />
                </div>

                <div className="self-center flex-shrink-0 pb-2"><ArrowR mini /></div>

                <div className="flex flex-col items-center flex-shrink-0">
                  <p className="text-[9px] text-gray-600 italic font-semibold mb-1">Data Mgmt</p>
                  <Node icon={<MeshIcon size="xs" />} title="Transfer Node" sub="Facility Data Transfer" mini />
                </div>

              </div>

              {/* Software separator */}
              <div className="my-4 flex items-center gap-2">
                <div className="flex-1 border-t-2 border-dashed border-gray-400" />
                <span className="text-[8.5px] font-bold uppercase tracking-widest text-gray-700 whitespace-nowrap px-1">Software Solutions</span>
                <div className="flex-1 border-t-2 border-dashed border-gray-400" />
              </div>

              {/* Software row */}
              <div className="flex items-start gap-2">

                <div className="flex flex-col items-center flex-shrink-0">
                  <Node icon={<MonitorIcon size="xs" />} title="Web Interface" sub="Web GUI · Skutils API" color="green" mini />
                  <p className="text-[8px] italic text-gray-500 mt-1 font-semibold">Interfaced via</p>
                </div>

                <div className="self-center flex-shrink-0"><ArrowR mini /></div>

                <div className="flex-shrink-0">
                  <Node icon={<PersonIcon size="xs" />} title="User" color="green" mini />
                </div>

                <div className="self-center flex-shrink-0"><ArrowBoth mini /></div>

                <div className="flex-shrink-0">
                  <Node icon={<TransferIcon size="xs" />} title="SkuTek Globus" sub="Auto File Transfer" color="green" mini />
                </div>

              </div>
            </div>

            {/* ── Offsite zone ── */}
            <div className="flex-shrink-0 pl-4 flex flex-col">

              <div className="mb-3">
                <p className="text-sm font-bold text-gray-900">Offsite</p>
                <p className="text-[11px] text-gray-600 italic font-medium">Esnet / WAN</p>
              </div>

              <div className="flex-1 flex items-center">
                <div className="flex flex-col gap-3">
                  {offsite.map(({ icon, label }) => (
                    <div key={label} className="flex items-center gap-1.5">
                      <div className="flex items-center flex-shrink-0">
                        <div className="w-3 h-[2px] bg-gray-800" />
                        <div className="w-0 h-0 border-y-[4px] border-l-[6px] border-y-transparent border-l-gray-800" />
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 rounded-xl border-2 border-sky-300 bg-sky-50 shadow-sm text-sky-500 w-[120px]">
                        {icon('xs')}
                        <p className="text-[10px] font-bold text-sky-800 leading-tight">{label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            DESKTOP LAYOUT  (>= lg)  — full horizontal two-zone
            ══════════════════════════════════════════════════════ */}
        <div className="hidden lg:flex flex-row gap-0 items-stretch justify-center">

          {/* ── Onsite zone ── */}
          <div className="flex-shrink-0 pr-10 border-r-2 border-dashed border-gray-500">

            <div className="mb-5">
              <p className="text-base font-bold text-gray-900">Onsite</p>
              <p className="text-sm text-gray-600 italic font-medium">Hardware products</p>
            </div>

            {/* Hardware row */}
            <div className="flex items-end gap-3">

              <div className="flex-shrink-0">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-700 text-center mb-2">Digitizers</p>
                <div className="flex items-center">
                  <div className="flex flex-col justify-between h-[100px]">
                    {['Vireo', 'Kestrel-16', 'CHK-32'].map(name => (
                      <div key={name} className="px-5 py-1.5 bg-main rounded-full text-white text-sm font-bold whitespace-nowrap shadow-md">
                        {name}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col h-[100px] w-4 ml-2 flex-shrink-0">
                    <div className="flex-1 border-t-2 border-r-2 border-gray-800 rounded-tr" />
                    <div className="flex-1 border-b-2 border-r-2 border-gray-800 rounded-br" />
                  </div>
                  <div className="w-3 h-[2.5px] bg-gray-800 flex-shrink-0" />
                  <div className="w-0 h-0 border-y-[6px] border-l-[9px] border-y-transparent border-l-gray-800 flex-shrink-0" />
                </div>
              </div>

              <div className="flex flex-col items-center flex-shrink-0">
                <p className="text-xs text-gray-600 italic font-semibold mb-2">Data Management</p>
                <Node icon={<ServerIcon />} title="Collector Node" sub="Onsite Data Storage" />
              </div>

              <div className="self-center flex-shrink-0 pb-3"><ArrowR /></div>

              <div className="flex flex-col items-center flex-shrink-0">
                <p className="text-xs text-gray-600 italic font-semibold mb-2">Data Management</p>
                <Node icon={<MeshIcon />} title="Transfer Node" sub="Facility Data Transfer" />
              </div>

            </div>

            {/* Software separator */}
            <div className="my-6 flex items-center gap-3">
              <div className="flex-1 border-t-2 border-dashed border-gray-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-gray-700 whitespace-nowrap px-1">Software Solutions</span>
              <div className="flex-1 border-t-2 border-dashed border-gray-400" />
            </div>

            {/* Software row */}
            <div className="flex items-start gap-3">

              <div className="flex flex-col items-center flex-shrink-0">
                <Node icon={<MonitorIcon />} title="Web Interface" sub="SkuTek Web GUI · Skutils API" color="green" />
                <p className="text-[10px] italic text-gray-500 mt-1.5 font-semibold">Interfaced via</p>
              </div>

              <div className="self-center flex-shrink-0"><ArrowR /></div>

              <div className="flex-shrink-0">
                <Node icon={<PersonIcon />} title="User" color="green" />
              </div>

              <div className="self-center flex-shrink-0"><ArrowBoth /></div>

              <div className="flex-shrink-0">
                <Node icon={<TransferIcon />} title="SkuTek Globus" sub="Auto File Transfer" color="green" />
              </div>

            </div>

          </div>

          {/* ── Offsite zone ── */}
          <div className="flex-shrink-0 pl-10 flex flex-col">

            <div className="mb-5">
              <p className="text-base font-bold text-gray-900">Offsite</p>
              <p className="text-sm text-gray-600 italic font-medium">Esnet / WAN</p>
            </div>

            <div className="flex-1 flex items-center">
              <div className="flex flex-col gap-4">
                {offsite.map(({ icon, label }) => (
                  <div key={label} className="flex items-center gap-2">
                    <div className="flex items-center flex-shrink-0">
                      <div className="w-6 h-[2.5px] bg-gray-800" />
                      <div className="w-0 h-0 border-y-[6px] border-l-[9px] border-y-transparent border-l-gray-800" />
                    </div>
                    <div className="flex items-center gap-3 px-4 py-3 rounded-2xl border-2 border-sky-300 bg-sky-50 shadow-md text-sky-500 w-[170px]">
                      {icon('default')}
                      <p className="text-sm font-bold text-sky-800 leading-tight">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
