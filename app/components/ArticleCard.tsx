import Link from 'next/link';
import CloudinaryImage from './CloudinaryImage';
import type { NewsArticle, Category } from '../data/newsArticles';

// ─── Category styling ─────────────────────────────────────────────────────────

const categoryStyle: Record<Category, string> = {
  Newsletter:   'bg-emerald-100 text-emerald-700',
  Research:     'bg-blue-100 text-blue-700',
  Announcement: 'bg-violet-100 text-violet-700',
  Technical:    'bg-amber-100 text-amber-800',
  Team:         'bg-orange-100 text-orange-700',
};

// ─── Author initials avatar ───────────────────────────────────────────────────

function Avatar({ name }: { name: string }) {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-main/10 text-main text-[10px] font-bold flex-shrink-0">
      {initials}
    </span>
  );
}

// ─── Placeholder when no image ────────────────────────────────────────────────

function ImagePlaceholder({ category }: { category: Category }) {
  const gradients: Record<Category, string> = {
    Newsletter:   'from-emerald-50 to-teal-100',
    Research:     'from-blue-50 to-indigo-100',
    Announcement: 'from-violet-50 to-purple-100',
    Technical:    'from-amber-50 to-yellow-100',
    Team:         'from-orange-50 to-rose-100',
  };
  return (
    <div className={`w-full h-full bg-gradient-to-br ${gradients[category]} flex items-center justify-center`}>
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5"
        className="w-10 h-10 text-gray-300" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="8" width="34" height="24" rx="3"/>
        <path d="M3 14h34M10 8v6M30 8v6"/>
      </svg>
    </div>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────

export default function ArticleCard({ article }: { article: NewsArticle }) {
  const Inner = (
    <div className="group flex flex-col rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-all duration-300 ease-out h-full">

      {/* Thumbnail */}
      <div className="aspect-video w-full overflow-hidden bg-gray-50 flex-shrink-0">
        {article.img ? (
          <CloudinaryImage
            src={article.img}
            width={640}
            height={360}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        ) : (
          <ImagePlaceholder category={article.category} />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">

        {/* Category + date row */}
        <div className="flex items-center justify-between">
          <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${categoryStyle[article.category]}`}>
            {article.category}
          </span>
          <span className="text-xs text-gray-400 font-medium">{article.date}</span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-main transition-colors duration-200">
          {article.title}
        </h3>

        {/* Blurb */}
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 flex-1">
          {article.blurb}
        </p>

        {/* Author */}
        <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
          <Avatar name={article.author} />
          <span className="text-xs font-semibold text-gray-700">{article.author}</span>
        </div>

      </div>

      {/* Bottom accent bar */}
      <div className="h-[3px] bg-main w-0 group-hover:w-full transition-all duration-300 ease-out" />
    </div>
  );

  const dest = article.href ?? `/news/${article.id}`;
  return (
    <Link href={dest} className="block h-full">
      {Inner}
    </Link>
  );
}
