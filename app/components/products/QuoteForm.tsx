"use client";

interface Props {
  preselectedProduct?: string;
}

export default function QuoteForm({ preselectedProduct }: Props) {
  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50 px-8 py-10 flex flex-col sm:flex-row gap-6 items-start">

      {/* Icon */}
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-500">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M2 7l10 7 10-7" />
        </svg>
      </div>

      {/* Text */}
      <div className="flex-1">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Online form temporarily unavailable</p>
        <h3 className="text-lg font-bold text-gray-800 mb-3">
          Request a quote by email at{' '}
          <a href="mailto:info@skutek.com" className="text-main hover:underline">info@skutek.com</a>
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-5">
          To help us process your request quickly and avoid spam filters, please include the following in your message:
        </p>
        <ul className="space-y-1.5 mb-5">
          {[
            preselectedProduct ? `Product: ${preselectedProduct}` : 'Product name and quantity',
            'Your full name',
            'Your email address',
            'Institution or organization',
            'Country',
            'Any specific requirements or questions',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-main flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-500">
          We work with research facilities, universities, and national laboratories all over the world and will get back to you as soon as possible.
          For technical support, email{' '}
          <a href="mailto:support@skutek.com" className="text-main hover:underline font-medium">support@skutek.com</a>.
        </p>
      </div>

    </div>
  );
}
