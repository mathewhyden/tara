import React, { useState } from 'react';
import { IMG } from '../data/siteData';
import {
  Search,
  ArrowRight,
  User,
  Clock,
  Calendar,
  Tag,
  ChevronRight,
  Instagram,
  Linkedin,
  Mail,
} from 'lucide-react';
import { BlogPost, BLOG_POSTS_DATA, BRAND_INFO, emailComposeUrl } from '../data/siteData';

interface BlogPageProps {
  layout: 'standard' | 'masonry';
  setLayout: (layout: 'standard' | 'masonry') => void;
  onSelectArticle: (article: BlogPost) => void;
  setCurrentPage: (page: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  layout,
  setLayout,
  onSelectArticle,
  setCurrentPage,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { name: 'all', label: 'All Topics', count: BLOG_POSTS_DATA.length },
    { name: 'Emotional Wellbeing', label: 'Emotional Wellbeing', count: 1 },
    { name: 'Personal Growth', label: 'Personal Growth', count: 1 },
    { name: 'Relationships', label: 'Relationships', count: 1 },
    { name: 'Stress Management', label: 'Stress Management', count: 1 },
    { name: 'Self-Understanding', label: 'Self-Understanding', count: 1 },
  ];

  const filteredPosts = BLOG_POSTS_DATA.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === 'all' || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full">
      {/* Blog Banner */}
      <section className="bg-[#2f1b30] text-white py-16 px-4 border-b border-[#7F4B7C]/40 text-center">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-200">
            Psychological Wellbeing
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold mt-2 mb-3">
            Mindcare Articles & Insights
          </h1>
          
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Articles Listing (col-span-8) */}
          <div className="lg:col-span-8">
            {/* Layout toggle bar */}
            {/* Layout toggle bar (Rounded-full theme) */}
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#E8DCE8]">
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Showing {filteredPosts.length} Articles
              </div>
              <div className="flex items-center gap-2 text-xs">
                <button
                  onClick={() => setLayout('standard')}
                  className={`px-4 py-2 rounded-full transition-all cursor-pointer ${
                    layout === 'standard'
                      ? 'bg-[#7F4B7C] text-white font-semibold shadow-xs'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Standard List
                </button>
                <button
                  onClick={() => setLayout('masonry')}
                  className={`px-4 py-2 rounded-full transition-all cursor-pointer ${
                    layout === 'masonry'
                      ? 'bg-[#7F4B7C] text-white font-semibold shadow-xs'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Masonry Grid
                </button>
              </div>
            </div>

            {filteredPosts.length === 0 ? (
              <div className="bg-white p-12 text-center border border-[#E8DCE8]">
                <p className="text-sm text-gray-500">No articles matched your criteria.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="mt-3 text-xs font-bold uppercase tracking-wider text-[#7F4B7C] underline cursor-pointer"
                >
                  Reset filters
                </button>
              </div>
            ) : layout === 'masonry' ? (
              /* MASONRY BLOG LAYOUT */
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white border border-[#E8DCE8] hover:shadow-lg transition-all group overflow-hidden flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 bg-[#7F4B7C] text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1">
                          {post.category}
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="text-[11px] text-gray-400 mb-2">
                          {post.readTime} • By {post.author}
                        </div>
                        <h2
                          onClick={() => onSelectArticle(post)}
                          className="font-serif text-lg font-bold text-[#2C2C2C] group-hover:text-[#7F4B7C] transition-colors leading-snug cursor-pointer"
                        >
                          {post.title}
                        </h2>
                        <p className="text-xs text-gray-600 mt-2.5 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 pt-0 border-t border-gray-100 mt-2">
                      <button
                        onClick={() => onSelectArticle(post)}
                        className="text-xs font-bold uppercase tracking-wider text-[#7F4B7C] hover:text-[#5B3259] flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer pt-3"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              /* STANDARD BLOG WITH LARGE CARDS (Cloe Brooks category-standard-blog.html) */
              <div className="space-y-12">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white border border-[#E8DCE8] hover:border-[#7F4B7C] transition-all group overflow-hidden shadow-xs hover:shadow-md"
                  >
                    {/* Featured Image */}
                    <div
                      onClick={() => onSelectArticle(post)}
                      className="relative h-64 sm:h-80 overflow-hidden cursor-pointer"
                    >
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-[#7F4B7C] text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 shadow">
                        {post.category}
                      </div>
                    </div>

                    {/* Content Box */}
                    <div className="p-8">
                      {/* Meta */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-3">
                        <span className="flex items-center gap-1 text-[#7F4B7C] font-medium">
                          <User className="w-3.5 h-3.5" />
                          <span>By {post.author}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-gray-400" />
                          <span>{post.readTime}</span>
                        </span>
                        {post.date && (
                          <>
                            <span>•</span>
                            <span className="text-gray-400">{post.date}</span>
                          </>
                        )}
                      </div>

                      {/* Title */}
                      <h2
                        onClick={() => onSelectArticle(post)}
                        className="font-serif text-2xl font-bold text-[#2C2C2C] group-hover:text-[#7F4B7C] transition-colors leading-snug cursor-pointer mb-3"
                      >
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                        {post.excerpt}
                      </p>

                      {/* Read More button */}
                      <div className="border-t border-gray-100 pt-5 flex items-center justify-between">
                        <button
                          onClick={() => onSelectArticle(post)}
                          className="bg-[#7F4B7C] hover:bg-[#5B3259] text-white text-xs font-semibold uppercase tracking-wider px-6 py-2.5 transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                        >
                          <span>Read Full Article</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>

                        <div className="flex items-center gap-1.5 text-xs text-gray-400">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="text-[#7F4B7C] font-medium">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Sidebar (col-span-4) (Balanced Box & Rounded-2xl Cards) */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24 lg:self-start">
            {/* Widget 1: Search (Crisp Box container with rounded-full input) */}
            <div className="bg-white p-6 border border-[#E8DCE8] rounded-none">
              <h3 className="font-serif text-base font-bold text-[#2C2C2C] uppercase tracking-wider mb-4 border-b border-[#7F4B7C] pb-2">
                Search Articles
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Keywords (stress, boundaries...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#FAF6EE] border border-[#E8DCE8] pl-4 pr-10 py-2.5 text-xs text-[#2C2C2C] rounded-full focus:outline-none focus:border-[#7F4B7C]"
                />
                <Search className="w-4 h-4 text-gray-400 absolute right-3.5 top-3" />
              </div>
            </div>

            {/* Widget 2: Author / Psychologist Bio (Rounded-2xl Card) */}
            <div className="bg-white p-6 border border-[#E8DCE8] rounded-2xl shadow-sm text-center">
              <h3 className="font-serif text-base font-bold text-[#2C2C2C] uppercase tracking-wider mb-4 border-b border-[#7F4B7C] pb-2">
                About The Author
              </h3>
              <img
                src={IMG.logo}
                alt="Dr Anne Rosario"
                className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-[#7F4B7C] mb-3"
              />
              <h4 className="font-serif font-bold text-base text-[#2C2C2C]">
                {BRAND_INFO.doctorName}
              </h4>
              <p className="text-xs text-[#7F4B7C] font-medium uppercase tracking-wider">
                {BRAND_INFO.title}
              </p>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Supporting individuals through evidence-informed, compassionate psychological counselling.
              </p>

              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-center gap-3">
                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#F1E8F1] text-[#7F4B7C] hover:bg-[#7F4B7C] hover:text-white flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href={BRAND_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#F1E8F1] text-[#7F4B7C] hover:bg-[#7F4B7C] hover:text-white flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a
                  href={emailComposeUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#F1E8F1] text-[#7F4B7C] hover:bg-[#7F4B7C] hover:text-white flex items-center justify-center transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Widget 3: Categories (Crisp Box Card) */}
            <div className="bg-white p-6 border border-[#E8DCE8] rounded-none">
              <h3 className="font-serif text-base font-bold text-[#2C2C2C] uppercase tracking-wider mb-4 border-b border-[#7F4B7C] pb-2">
                Categories
              </h3>
              <ul className="space-y-2 text-xs">
                {categories.map((cat) => (
                  <li key={cat.name}>
                    <button
                      onClick={() => setSelectedCategory(cat.name)}
                      className={`w-full flex items-center justify-between py-1.5 transition-colors cursor-pointer text-left ${
                        selectedCategory === cat.name
                          ? 'text-[#7F4B7C] font-bold'
                          : 'text-gray-600 hover:text-[#7F4B7C]'
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        <ChevronRight className="w-3.5 h-3.5 text-purple-400" />
                        <span>{cat.label}</span>
                      </span>
                      <span className="bg-[#FAF6EE] border border-[#E8DCE8] px-2 py-0.5 rounded-full text-[10px] font-semibold text-gray-500">
                        {cat.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
