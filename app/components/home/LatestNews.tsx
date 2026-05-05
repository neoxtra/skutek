import Link from 'next/link';
import ArticleCard from '../ArticleCard';
import { newsArticles } from '../../data/newsArticles';

const featured = newsArticles.filter(a => a.featured).slice(0, 6);

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
          {featured.map(article => (
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
