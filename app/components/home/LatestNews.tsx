import Link from 'next/link';
import ArticleCard from '../ArticleCard';
import CloudinaryImage from '../CloudinaryImage';
import { newsArticles } from '../../data/newsArticles';
import type { NewsArticle } from '../../data/newsArticles';

const newsletters   = newsArticles.filter(a => a.category === 'Newsletter');
const nonNewsletters = newsArticles.filter(a => a.featured && a.category !== 'Newsletter').slice(0, 5);

// ─── Newsletter hub card ──────────────────────────────────────────────────────

function NewsletterHubCard({ issues }: { issues: NewsArticle[] }) {
  const latest = issues[0];
  return (
    <div className="group flex flex-col rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-all duration-300 ease-out h-full">

      {/* Thumbnail — latest issue cover */}
      <Link href={`/news/${latest.id}`} className="aspect-video w-full overflow-hidden bg-gray-50 flex-shrink-0 block">
        {latest.img ? (
          <CloudinaryImage
            src={latest.img}
            width={640}
            height={360}
            alt="SkuTek Newsletter"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-emerald-50 to-teal-100" />
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">

        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700">
            Newsletter
          </span>
          <span className="text-xs text-gray-400 font-medium">{issues.length} issues</span>
        </div>

        <h3 className="text-base font-bold text-gray-900 leading-snug">
          SkuTek Monthly Newsletter
        </h3>

        {/* Recent issues list */}
        <ul className="flex flex-col gap-1.5 flex-1">
          {issues.slice(0, 4).map(n => (
            <li key={n.id}>
              <Link
                href={`/news/${n.id}`}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-main transition-colors duration-150"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-main/40 flex-shrink-0" />
                <span className="line-clamp-1">{n.title} <span className="text-gray-400">— {n.date}</span></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/news"
          className="flex items-center gap-1 pt-2 border-t border-gray-100 text-xs font-semibold text-main hover:text-accent transition-colors duration-200"
        >
          Browse all issues
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.19L9.47 4.78a.75.75 0 011.06-1.06l5.5 5.5a.75.75 0 010 1.06l-5.5 5.5a.75.75 0 11-1.06-1.06l4.47-4.47H3.75A.75.75 0 013 10z" clipRule="evenodd"/>
          </svg>
        </Link>

      </div>

      <div className="h-[3px] bg-main w-0 group-hover:w-full transition-all duration-300 ease-out" />
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function LatestNews() {
  return (
    <section className="bg-white font-sans py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2">From the team</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">Our Latest Updates</h2>
            <div className="mt-3 h-[3px] bg-main rounded-full w-20" />
          </div>
          <Link
            href="/news"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-main hover:text-accent transition-colors duration-200"
          >
            View all news
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.19L9.47 4.78a.75.75 0 011.06-1.06l5.5 5.5a.75.75 0 010 1.06l-5.5 5.5a.75.75 0 11-1.06-1.06l4.47-4.47H3.75A.75.75 0 013 10z" clipRule="evenodd"/>
            </svg>
          </Link>
        </div>

        {/* Article grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <NewsletterHubCard issues={newsletters} />
          {nonNewsletters.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-10 flex justify-center md:hidden">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 bg-main text-white text-sm font-semibold px-7 py-2.5 rounded-full hover:bg-accent transition-colors duration-200"
          >
            View All Updates
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.19L9.47 4.78a.75.75 0 011.06-1.06l5.5 5.5a.75.75 0 010 1.06l-5.5 5.5a.75.75 0 11-1.06-1.06l4.47-4.47H3.75A.75.75 0 013 10z" clipRule="evenodd"/>
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
