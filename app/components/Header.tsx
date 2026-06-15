"use client";

import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' }}>
      <div className="max-w-[1600px] mx-auto px-8 py-4">
        {/* Mobile Layout - Logo left, Hamburger right */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <CldImage
                src="skutek_logo"
                width={140}
                height={35}
                alt="SkuTek Instrumentation - Where Science Meets Industry"
                className="h-auto"
              />
            </Link>

            <button
              className="text-black p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="relative w-6 h-6">
                <span className={`absolute h-0.5 w-6 bg-black transform transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
                <span className={`absolute h-0.5 w-6 bg-black top-3 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute h-0.5 w-6 bg-black transform transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-center gap-12">
          <Link href="/" className="flex items-center">
            <CldImage
              src="skutek_logo"
              width={180}
              height={45}
              alt="SkuTek Instrumentation - Where Science Meets Industry"
              className="h-auto"
            />
          </Link>

          <nav className="flex items-center gap-8">
            {/* About Us Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <Link href="/about-us" className="text-xl font-semibold text-black hover:text-main transition flex items-center gap-1">
                About Us
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {aboutOpen && (
                <div className="absolute top-full left-0 pt-2 min-w-[220px] z-50">
                  <div className="bg-gray-100 shadow-lg rounded-lg py-2 animate-slideDown">
                    <Link href="/industries" className="block px-4 py-2 text-sm font-bold text-black uppercase hover:text-main transition">
                      Industries
                    </Link>
                    <Link href="/faq" className="block px-4 py-2 text-sm font-bold text-black uppercase hover:text-main transition">
                      FAQ
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <Link href="/products" className="text-xl font-semibold text-black hover:text-main transition flex items-center gap-1">
                Products
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {productsOpen && (
                <div className="absolute top-full left-0 pt-2 min-w-[280px] z-50">
                  <div className="bg-gray-100 shadow-lg rounded-lg py-2 animate-slideDown">
                    <div className="px-4 py-2">
                      <span className="block text-sm font-bold text-black uppercase mb-2">Digitizers</span>
                      <Link href="/products/digitizers/femtodaq-vireo" className="block py-1 pl-3 text-base font-medium text-black hover:text-main transition">
                        FemtoDAQ Vireo (2)
                      </Link>
                      <Link href="/products/digitizers/multichannel-daq-system" className="block py-1 pl-3 text-base font-medium text-black hover:text-main transition">
                        Multi-Channel DAQ System
                      </Link>
                      <Link href="/products/digitizers/chickadee-32" className="block py-1 pl-3 text-base font-medium text-black hover:text-main transition">
                        CHK-32 Rear Transition Module
                      </Link>
                    </div>

                    <hr className="my-2 border-gray-300" />

                    <div className="px-4 py-2">
                      <span className="block text-sm font-bold text-black uppercase mb-2">Data Management</span>
                      <Link href="/products/digitizers/solidago-udp" className="block py-1 pl-3 text-base font-medium text-black hover:text-main transition">
                        Solidago UDP Event Generator - 160 Gbps
                      </Link>
                    </div>

                    <hr className="my-2 border-gray-300" />

                    <div className="px-4 py-2">
                      <Link href="/skutils" className="block text-sm font-bold text-black uppercase hover:text-main transition">
                        SkuTek Utilities (Skutils)
                      </Link>
                    </div>

                    <hr className="my-2 border-gray-300" />

                    <div className="px-4 py-2">
                      <p className="text-sm font-bold text-black uppercase mb-2">Downloads</p>
                      <Link href="/downloads/femtodaq-utilities" className="block py-1 pl-3 text-base font-medium text-black hover:text-main transition">
                        FemtoDAQ Utilities Updater
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/news" className="text-xl font-semibold text-black hover:text-main transition">
              News and Articles
            </Link>
            <Link href="/documentation" className="text-xl font-semibold text-black hover:text-main transition">
              Documentation
            </Link>
            <Link href="/contact" className="text-xl font-semibold text-black hover:text-main transition">
              Support / Contact Us
            </Link>

            <Link
              href="/contact"
              className="bg-main text-white text-lg font-semibold px-6 py-2 rounded-lg hover:bg-accent transition flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Get a Quote
            </Link>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out -mx-8 ${
            mobileMenuOpen ? 'max-h-[800px] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="pb-4 space-y-1 bg-gray-200 px-8 py-4">

            {/* About Us */}
            <Link href="/about-us" onClick={() => setMobileMenuOpen(false)} className="block text-base font-bold text-gray-900 hover:text-main py-2 border-b border-gray-300">
              About Us
            </Link>
            <div className="pl-4 py-1 space-y-1">
              <Link href="/industries" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 text-base text-gray-900 hover:text-main py-1">
                <span className="w-2 h-2 rounded-full bg-main flex-shrink-0"></span>
                Industries
              </Link>
              <Link href="/faq" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 text-base text-gray-900 hover:text-main py-1">
                <span className="w-2 h-2 rounded-full bg-main flex-shrink-0"></span>
                FAQ
              </Link>
            </div>

            {/* Products */}
            <Link href="/products" onClick={() => setMobileMenuOpen(false)} className="block text-base font-bold text-gray-900 hover:text-main py-2 border-b border-gray-300 mt-2">
              Products
            </Link>

            <div className="pl-4 py-1 space-y-3">
              <div>
                <span className="block text-xs font-bold text-black uppercase tracking-wide mb-1">Digitizers</span>
                <div className="space-y-1">
                  <Link href="/products/digitizers/femtodaq-vireo" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 text-base text-gray-900 hover:text-main py-1">
                    <span className="w-2 h-2 rounded-full bg-main flex-shrink-0"></span>
                    FemtoDAQ Vireo (2)
                  </Link>
                  <Link href="/products/digitizers/multichannel-daq-system" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 text-base text-gray-900 hover:text-main py-1">
                    <span className="w-2 h-2 rounded-full bg-main flex-shrink-0"></span>
                    Multi-Channel DAQ System
                  </Link>
                  <Link href="/products/digitizers/chickadee-32" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 text-base text-gray-900 hover:text-main py-1">
                    <span className="w-2 h-2 rounded-full bg-main flex-shrink-0"></span>
                    CHK-32 Rear Transition Module
                  </Link>
                </div>
              </div>

              <div>
                <span className="block text-xs font-bold text-black uppercase tracking-wide mb-1">Data Management</span>
                <div className="space-y-1">
                  <Link href="/products/digitizers/solidago-udp" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 text-base text-gray-900 hover:text-main py-1">
                    <span className="w-2 h-2 rounded-full bg-main flex-shrink-0"></span>
                    Solidago UDP Event Generator - 160 Gbps
                  </Link>
                </div>
              </div>

              <Link href="/skutils" onClick={() => setMobileMenuOpen(false)} className="block text-xs font-bold text-black uppercase tracking-wide hover:text-main">
                SkuTek Utilities (Skutils)
              </Link>
            </div>

            {/* Downloads */}
            <Link href="/downloads" onClick={() => setMobileMenuOpen(false)} className="block text-base font-bold text-gray-900 hover:text-main py-2 border-b border-gray-300 mt-2">
              Downloads
            </Link>
            <div className="pl-4 py-1 space-y-1">
              <Link href="/downloads/femtodaq-utilities" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 text-base text-gray-900 hover:text-main py-1">
                <span className="w-2 h-2 rounded-full bg-main flex-shrink-0"></span>
                FemtoDAQ Utilities Updater
              </Link>
            </div>

            {/* Top-level links */}
            <Link href="/news" onClick={() => setMobileMenuOpen(false)} className="block text-base font-bold text-gray-900 hover:text-main py-2 border-b border-gray-300 mt-2">
              News and Articles
            </Link>
            <Link href="/documentation" onClick={() => setMobileMenuOpen(false)} className="block text-base font-bold text-gray-900 hover:text-main py-2 border-b border-gray-300">
              Documentation
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-base font-bold text-gray-900 hover:text-main py-2 border-b border-gray-300">
              Support / Contact Us
            </Link>

            <div className="pt-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block bg-main text-white text-base font-semibold px-6 py-3 rounded-lg hover:bg-accent transition text-center"
              >
                Get a Quote
              </Link>
            </div>
          </nav>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }
      `}</style>
    </header>
  );
}
