"use client";

import { useState } from 'react';

const products = [
  'FemtoDAQ Vireo',
  'FemtoDAQ Kingfisher',
  'CHK-32 Rear Transition Module',
  'Solidago UDP Event Generator',
  'Multichannel DAQ System',
  'Other / Custom',
];

const countries = [
  'United States', 'Canada', 'United Kingdom', 'Germany', 'France',
  'Australia', 'Japan', 'China', 'South Korea', 'Switzerland',
  'Netherlands', 'Sweden', 'Italy', 'Spain', 'Brazil', 'Other',
];

interface Props {
  preselectedProduct?: string;
}

export default function QuoteForm({ preselectedProduct }: Props) {
  const [liveDemo, setLiveDemo] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Wire to backend / email service here
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <div className="w-14 h-14 rounded-full bg-main/10 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-main">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900">Quote request sent!</h3>
        <p className="text-gray-500 text-sm max-w-xs">We&apos;ll be in touch shortly. For immediate assistance email <a href="mailto:info@skutek.com" className="text-main underline">info@skutek.com</a>.</p>
        <button onClick={() => setSubmitted(false)} className="mt-2 text-sm text-gray-500 hover:text-gray-700 underline">Submit another request</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Your name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Jane Smith"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-main/30 focus:border-main transition"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Your email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            placeholder="jane@university.edu"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-main/30 focus:border-main transition"
          />
        </div>
      </div>

      {/* Product */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Select a product <span className="text-red-500">*</span>
        </label>
        <select
          required
          defaultValue={preselectedProduct ?? ''}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-main/30 focus:border-main transition appearance-none"
        >
          <option value="" disabled>Please select an option</option>
          {products.map(p => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Request a quote</label>
        <textarea
          rows={5}
          placeholder="Describe your requirements, quantities, or any specific questions..."
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-main/30 focus:border-main transition resize-y"
        />
        <p className="mt-1.5 text-xs text-gray-500">
          The best way to inquire about a price is to request a quote. For custom software or data management services, email{' '}
          <a href="mailto:info@skutek.com" className="text-main underline">info@skutek.com</a>.
        </p>
      </div>

      {/* ZIP + Country + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">ZIP / Postal Code</label>
          <input
            type="text"
            placeholder="E.g. 14627"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-main/30 focus:border-main transition"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Country</label>
          <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-main/30 focus:border-main transition appearance-none">
            <option value="">Select country</option>
            {countries.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone</label>
          <input
            type="tel"
            placeholder="E.g. +1 300 400 5000"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-main/30 focus:border-main transition"
          />
        </div>
      </div>

      {/* Live demo toggle */}
      <div className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
        <button
          type="button"
          role="switch"
          aria-checked={liveDemo}
          onClick={() => setLiveDemo(v => !v)}
          className={`relative flex-shrink-0 mt-0.5 w-10 h-5 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-main/30 ${liveDemo ? 'bg-main' : 'bg-gray-300'}`}
        >
          <span className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 ${liveDemo ? 'translate-x-5' : 'translate-x-0'}`} />
        </button>
        <div>
          <p className="text-sm font-semibold text-gray-800">Book a Live Demo</p>
          <p className="text-xs text-gray-500 mt-0.5">Select YES to schedule a live demo video call to learn more about our products.</p>
        </div>
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-main text-white font-semibold px-10 py-3 rounded-lg hover:bg-accent transition-colors duration-200"
      >
        Submit Request
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
          <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.19L9.47 4.78a.75.75 0 011.06-1.06l5.5 5.5a.75.75 0 010 1.06l-5.5 5.5a.75.75 0 11-1.06-1.06l4.47-4.47H3.75A.75.75 0 013 10z" clipRule="evenodd" />
        </svg>
      </button>

    </form>
  );
}
