"use client";

import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    q: 'How can I purchase a digitizer or custom software services?',
    a: (
      <p>
        Because of the highly customizable nature of our products, we recommend sending us an email at{' '}
        <a href="mailto:info@skutek.com" className="text-main underline hover:text-accent">info@skutek.com</a>{' '}
        for custom digitizers. For products in stock, fill out a request for quote here:{' '}
        <Link href="/quote" className="text-main underline hover:text-accent">Quote</Link>.
      </p>
    ),
  },
  {
    q: 'How many channels do your digitizers have?',
    a: (
      <p>
        We frequently complete orders for various channel counts: 2, 8, 10, 32, and even 40. We got our start making over 1,500 channels for the LZ Dark Matter experiment!
      </p>
    ),
  },
  {
    q: 'How do I update my digitizer? How can I request a feature or bug fix?',
    a: (
      <p>
        Updates for our products are rolled out frequently. You can install the latest updates remotely straight from your digitizer. For those in a closed-network lab, please reach out if you have a preferred update method at{' '}
        <a href="mailto:support@skutek.com" className="text-main underline hover:text-accent">support@skutek.com</a>.
      </p>
    ),
  },
  {
    q: 'Where can I find my quick start guide, user manual, or other documentation?',
    a: (
      <div className="space-y-3">
        <p>
          Application notes, articles, and updates are available under{' '}
          <Link href="/news" className="text-main underline hover:text-accent">News and Articles</Link>{' '}
          as well as in{' '}
          <Link href="/documentation" className="text-main underline hover:text-accent">Documentation</Link>.
        </p>
        <p>For in-depth manuals and documentation, you must log in. Credentials are provided along with your tracking email when your product was shipped.</p>
        <p>
          Contact{' '}
          <a href="mailto:support@skutek.com" className="text-main underline hover:text-accent">support@skutek.com</a>{' '}
          with your device serial number and institution for a password reset.
        </p>
      </div>
    ),
  },
  {
    q: 'Why do I not see any waveforms when I click "Start" on the digitizer GUI?',
    a: (
      <div className="space-y-4">
        <p>If you are expecting to see waveforms on the Waveform page and instead see nothing, here are a few things to check:</p>
        <ul className="space-y-2">
          {[
            'Did you enable triggers for the channel you are looking at? Check the Digitizer Configuration to make sure.',
            'Check other trigger-related parameters in Digitizer Configuration such as Trigger Sensitivity, Signal Invert, and Trigger Edge.',
            'Did you set the channel you are looking at as one of the two channels in the Enable Live Display section of the Waveform page?',
            'Do you have Live Display enabled on the Waveform page? If so, make sure the channel you are looking at is selected.',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-[6px] w-1.5 h-1.5 rounded-full bg-main" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-500">
          <span className="font-semibold text-gray-700">Note: </span>
          Enabling Live Display will show a waveform once every 3 seconds at maximum. It does not affect the DSP, and can be disabled for a small performance boost.
        </div>
      </div>
    ),
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors duration-150"
      >
        <div className="flex items-center gap-4">
          <span className="text-[11px] font-bold text-main/50 tabular-nums flex-shrink-0">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-sm md:text-base font-semibold text-gray-900">{faq.q}</span>
        </div>
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`w-5 h-5 flex-shrink-0 text-main transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        >
          <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z" clipRule="evenodd" />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 pb-6 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-100 ml-[52px]">
          {faq.a}
        </div>
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <main className="font-sans bg-gray-50 min-h-screen">

      {/* ── Hero ── */}
      <section className="bg-gray-900 text-white py-14 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] uppercase tracking-widest text-white/40 font-semibold mb-2">SkuTek Instrumentation</p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Frequently Asked Questions</h1>
          <div className="mt-3 h-[3px] bg-main rounded-full w-14" />
          <p className="mt-4 text-white/55 text-sm md:text-base max-w-xl leading-relaxed">
            Common questions about our products, purchasing, and technical support.
          </p>
        </div>
      </section>

      {/* ── FAQ list ── */}
      <section className="px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </section>

      {/* ── Still have questions ── */}
      <section className="px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-2xl px-8 py-9 md:px-12 md:py-10 flex flex-col md:flex-row items-center justify-between gap-5">
            <div>
              <h2 className="text-lg font-bold text-white">Still have questions?</h2>
              <p className="text-white/55 text-sm mt-1 max-w-sm">
                Reach out to us directly and we will get back to you as soon as possible.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <a
                href="mailto:info@skutek.com"
                className="inline-flex items-center gap-2 bg-main text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-accent transition-colors duration-200 text-sm"
              >
                Email us
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-6 py-2.5 rounded-lg hover:border-white/50 transition-colors duration-200 text-sm"
              >
                Contact form
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
