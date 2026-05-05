"use client";

import { useState } from 'react';
import ArticleCard from '../components/ArticleCard';
import { newsArticles } from '../data/newsArticles';
import type { Category } from '../data/newsArticles';

const categories: ('All' | Category)[] = ['All', 'Newsletter', 'Research', 'Announcement', 'Technical', 'Team'];

export default function NewsPage() {
  const [active, setActive] = useState<'All' | Category>('All');

  const filtered = active === 'All'
    ? newsArticles
    : newsArticles.filter(a => a.category === active);

  return (
    <main className="font-sans">

      {/* ── Hero ── */}
      <section className="bg-gray-900 text-white py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-3">SkuTek Instrumentation</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            News &amp; Updates
          </h1>
          <div className="mt-4 h-[3px] bg-main rounded-full w-20" />
          <p className="mt-6 text-white/60 text-base md:text-lg max-w-2xl leading-relaxed">
            Stay current with the latest announcements, research milestones, and developments
            from the SkuTek Instrumentation team.
          </p>
        </div>
      </section>

      {/* ── Category filter ── */}
      <section className="bg-white border-b border-gray-100 px-6 lg:px-8 py-5 sticky top-[67px] lg:top-[77px] z-30">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto pb-1">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${
                active === cat
                  ? 'bg-main text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── Articles ── */}
      <section className="bg-gray-50 py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <p className="text-sm text-gray-500 mb-8 font-medium">
            {filtered.length} {filtered.length === 1 ? 'article' : 'articles'}
            {active !== 'All' && <span className="ml-1">in <span className="font-semibold text-gray-700">{active}</span></span>}
          </p>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtered.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-400">
              <p className="text-lg font-semibold">No articles in this category yet.</p>
            </div>
          )}

        </div>
      </section>

    </main>
  );
}
