import { notFound } from 'next/navigation';
import Link from 'next/link';
import CloudinaryImage from '../../components/CloudinaryImage';
import { newsArticles } from '../../data/newsArticles';
import { articleContents } from '../../data/articleContents';
import type { Category } from '../../data/newsArticles';

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return newsArticles.map(a => ({ slug: a.id }));
}

// ─── Category colour ──────────────────────────────────────────────────────────

const categoryStyle: Record<Category, string> = {
  Newsletter:   'bg-emerald-100 text-emerald-700',
  Research:     'bg-blue-100 text-blue-700',
  Announcement: 'bg-violet-100 text-violet-700',
  Technical:    'bg-amber-100 text-amber-800',
  Team:         'bg-orange-100 text-orange-700',
};

// ─── Author initials ──────────────────────────────────────────────────────────

function Avatar({ name }: { name: string }) {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  return (
    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-main/10 text-main text-sm font-bold flex-shrink-0">
      {initials}
    </span>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = newsArticles.find(a => a.id === params.slug);
  if (!article) notFound();

  const content = articleContents[article.id] ?? '<p>Full article content coming soon.</p>';

  return (
    <main className="font-sans bg-gray-50 min-h-screen">

      {/* ── Hero header ── */}
      <section className="bg-gray-900 text-white pt-16 pb-0 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-white/40 font-medium mb-6">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/news" className="hover:text-white/70 transition-colors">News</Link>
            <span>/</span>
            <span className="text-white/60 line-clamp-1">{article.title}</span>
          </nav>

          {/* Category + date */}
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${categoryStyle[article.category]}`}>
              {article.category}
            </span>
            <span className="text-white/40 text-xs font-medium">{article.date}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            {article.title}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-3 mt-6 pb-8">
            <Avatar name={article.author} />
            <div>
              <p className="text-sm font-semibold text-white">{article.author}</p>
              <p className="text-xs text-white/40">SkuTek Instrumentation</p>
            </div>
          </div>

        </div>

        {/* Thumbnail strip — full width, bleeds to edge */}
        {article.img && (
          <div className="w-full max-w-5xl mx-auto overflow-hidden rounded-t-2xl">
            <CloudinaryImage
              src={article.img}
              width={1200}
              height={630}
              alt={article.title}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        )}
      </section>

      {/* ── Article body ── */}
      <section className="px-6 lg:px-8 py-12">
        <div className="max-w-5xl mx-auto">

          <div
            className="article-content bg-white rounded-2xl shadow-sm border border-gray-100 px-8 py-10 md:px-12 md:py-12"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          {/* Back link */}
          <div className="mt-10 flex items-center gap-4">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm font-semibold text-main hover:text-accent transition-colors duration-200"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 rotate-180">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.19L9.47 4.78a.75.75 0 011.06-1.06l5.5 5.5a.75.75 0 010 1.06l-5.5 5.5a.75.75 0 11-1.06-1.06l4.47-4.47H3.75A.75.75 0 013 10z" clipRule="evenodd"/>
              </svg>
              Back to all news
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
