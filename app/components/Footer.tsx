import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#d6d6d6] py-8 font-sans">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-3 md:flex md:flex-row md:justify-center gap-3 md:gap-24">

          {/* Contact Info */}
          <div className="flex flex-col items-center">
            <h3 className="text-xs md:text-base font-bold text-gray-900 underline underline-offset-4 mb-3 md:mb-5 text-center">Contact Info</h3>
            <ul className="space-y-2 md:space-y-3 text-[10px] md:text-sm text-gray-800">
              <li className="flex items-start gap-1 md:gap-2">
                <svg className="w-3 h-3 md:w-4 md:h-4 text-main mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>150 Lucius Gordon Dr<br />Ste. 209,<br className="md:hidden" /> West Henrietta, NY 14586</span>
              </li>
              <li className="flex items-center gap-1 md:gap-2">
                <svg className="w-3 h-3 md:w-4 md:h-4 text-main flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>(585) 444 7074</span>
              </li>
              <li className="flex items-center gap-1 md:gap-2">
                <svg className="w-3 h-3 md:w-4 md:h-4 text-main flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <a href="mailto:info@skutek.com" className="hover:text-main transition break-all">info@skutek.com</a>
              </li>
            </ul>
          </div>

          {/* Our Products */}
          <div className="flex flex-col items-center">
            <h3 className="text-xs md:text-base font-bold text-gray-900 underline underline-offset-4 mb-3 md:mb-5 text-center">Our Products</h3>
            <ul className="space-y-2 md:space-y-3 text-[10px] md:text-sm text-gray-800 text-center">
              <li>
                <Link href="/products/digitizers" className="hover:text-main transition">Digitizers</Link>
              </li>
              <li>
                <Link href="/products/data-management" className="hover:text-main transition">Data Management</Link>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div className="flex flex-col items-center">
            <h3 className="text-xs md:text-base font-bold text-gray-900 underline underline-offset-4 mb-3 md:mb-5 text-center">Connect With Us!</h3>
            <ul className="space-y-2 md:space-y-3 text-[10px] md:text-sm text-gray-800">
              <li className="flex items-center gap-1 md:gap-2">
                <svg className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" fill="#0A66C2" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <a href="https://www.linkedin.com/company/skutek-instrumentation" target="_blank" rel="noopener noreferrer" className="hover:text-main transition">LinkedIn</a>
              </li>
              <li className="flex items-center gap-1 md:gap-2">
                <svg className="w-3 h-3 md:w-4 md:h-4 text-main flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 6h-2.18c.07-.44.18-.86.18-1.3C18 2.99 16.54 1.5 14.83 1.5c-1.1 0-1.99.5-2.67 1.32L12 3l-.16-.18C11.15 2 10.27 1.5 9.17 1.5 7.46 1.5 6 2.99 6 4.7c0 .44.1.86.18 1.3H4C2.9 6 2 6.9 2 8v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5.17-3c.98 0 1.67.76 1.67 1.7 0 .44-.17.86-.44 1.3H13v-.08c0-.03.01-.06.01-.09C13.01 4.74 13.83 3 14.83 3zM8.5 4.7c0-.94.69-1.7 1.67-1.7 1 0 1.82 1.74 1.82 3.83v.08H8.94A2.04 2.04 0 018.5 4.7zM11 19H4V8h7v11zm9 0h-7V8h7v11z"/>
                </svg>
                <Link href="/careers" className="hover:text-main transition">Careers</Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
