import CloudinaryImage from '../../components/CloudinaryImage';

function WindowsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.551H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
    </svg>
  );
}

function LinuxIcon() {
  return (
    <CloudinaryImage src="linux_icon_cndoen" width={64} height={64} alt="Linux" className="w-8 h-8 object-contain" />
  );
}

function DownloadButton({ href, os, note }: { href: string; os: string; note?: string }) {
  const isLinux = os === 'Linux';
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-5 bg-white border border-gray-200 hover:border-main hover:shadow-md rounded-2xl px-7 py-5 transition-all duration-200"
    >
      <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${isLinux ? 'bg-orange-50 text-orange-600' : 'bg-blue-50 text-blue-600'}`}>
        {isLinux ? <LinuxIcon /> : <WindowsIcon />}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-bold text-gray-900 group-hover:text-main transition-colors">{os} Download</p>
        {note && <p className="text-xs text-gray-500 mt-0.5 leading-snug">{note}</p>}
      </div>
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-300 group-hover:text-main transition-colors flex-shrink-0">
        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </a>
  );
}

export default function FemtoDAQUtilitiesPage() {
  return (
    <main className="font-sans bg-gray-50 min-h-screen">

      {/* ── Hero ── */}
      <section className="bg-gray-900 text-white py-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-main font-bold mb-3">Software</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            FemtoDAQ Utilities Updater
          </h1>
          <div className="mt-4 h-[3px] bg-main rounded-full w-24" />
          <p className="mt-6 text-white/60 text-base md:text-lg max-w-2xl leading-relaxed">
            Install firmware and software updates for FemtoDAQ family digitizer units — with or without internet access.
          </p>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="px-6 lg:px-8 py-14">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — image */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
            <CloudinaryImage
              src="utility_yc9wfw"
              width={800}
              height={600}
              alt="FemtoDAQ Utilities Updater"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right — description */}
          <div className="space-y-6">
            <div className="space-y-4 text-gray-600 leading-relaxed text-[1.0625rem]">
              <p>
                The FemtoDAQ Utilities Updater is a software application designed to install firmware
                and software updates for FemtoDAQ family digitizer units. New features and changes are
                rolled out frequently and this tool provides the most streamlined way to update your
                modern digitizer — with or without internet access.
              </p>
            </div>

            {/* Key functions */}
            <div>
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">Key Functions</h2>
              <ul className="space-y-2">
                {[
                  'Connects directly to a FemtoDAQ unit via local IP address or USB connection.',
                  'Enables selection and installation of the latest available firmware version.',
                  'Provides a structured update workflow to reduce installation errors.',
                  'Applies firmware changes after a required device reboot.',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-main" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* System requirements */}
            <div className="bg-white border border-gray-100 rounded-xl px-5 py-4 space-y-1.5">
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-2">System Requirements</h2>
              <p className="text-sm text-gray-600"><span className="font-semibold text-gray-800">Windows:</span> Windows 10 and later</p>
              <p className="text-sm text-gray-600"><span className="font-semibold text-gray-800">Linux:</span> Debian 10 and later (or distro equivalent) with Glibc &gt; 2.28</p>
            </div>

            {/* Connection info */}
            <div className="space-y-1.5">
              <p className="text-sm text-gray-600"><span className="font-semibold text-gray-800">FemtoDAQ URL:</span> Can be the IP address, unit name, or local IP (if connected via USB)</p>
              <p className="text-sm text-gray-600"><span className="font-semibold text-gray-800">Credentials:</span> Provided in your packaging when the unit was purchased</p>
            </div>

            <p className="text-sm text-gray-500 italic">
              Users can choose specific versions to update to or roll back to a previous version.
            </p>
          </div>

        </div>
      </section>

      {/* ── Downloads ── */}
      <section className="px-6 lg:px-8 pb-16">
        <div className="max-w-5xl mx-auto">

          <div className="flex items-center gap-4 mb-7">
            <div className="h-px flex-1 bg-gray-200" />
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Downloads</h2>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <DownloadButton
              href="https://workdrive.zohoexternal.com/external/7ffb10cc0cc0072b02fca8c30bd0a02c63c6218dfda015917c2182f88b335c18"
              os="Linux"
              note="Set file as executable before running: chmod +x <path/to/file>"
            />
            <DownloadButton
              href="https://workdrive.zohoexternal.com/external/1f290d40c7e5383986788738dc4c3c06898f3eea1a85d3eb1c08656383dfeac8"
              os="Windows"
            />
          </div>

        </div>
      </section>

    </main>
  );
}
