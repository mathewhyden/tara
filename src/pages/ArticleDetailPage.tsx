import React, { useState } from 'react';
import { IMG } from '../data/siteData';
import {
  Calendar,
  Clock,
  User,
  Tag,
  ArrowLeft,
  Share2,
  Heart,
  MessageSquare,
  CheckCircle,
  Quote,
  Instagram,
  Linkedin,
  MessageCircle,
} from 'lucide-react';
import { BlogPost, BRAND_INFO, BLOG_POSTS_DATA } from '../data/siteData';

interface ArticleDetailPageProps {
  article: BlogPost;
  onBack: () => void;
  onSelectArticle: (article: BlogPost) => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({
  article,
  onBack,
  onSelectArticle,
}) => {
  const [commentData, setCommentData] = useState({
    name: '',
    email: '',
    comment: '',
  });
  const [comments, setComments] = useState<Array<{ name: string; date: string; text: string }>>([]);
  const [commentSubmitted, setCommentSubmitted] = useState(false);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentData.name.trim() || !commentData.comment.trim()) return;

    setComments([
      ...comments,
      {
        name: commentData.name,
        date: 'Just now',
        text: commentData.comment,
      },
    ]);
    setCommentData({ name: '', email: '', comment: '' });
    setCommentSubmitted(true);
    setTimeout(() => setCommentSubmitted(false), 5000);
  };

  const relatedPosts = BLOG_POSTS_DATA.filter((p) => p.id !== article.id).slice(0, 2);

  return (
    <div className="w-full">
      {/* Article Title Banner */}
      <section className="bg-[#2f1b30] text-white py-16 px-4 border-b border-[#7F4B7C]/40">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-100 hover:text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all cursor-pointer mb-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </button>

          <div className="inline-block bg-[#7F4B7C] text-white text-[11px] font-semibold uppercase tracking-widest px-3.5 py-1 rounded-full">
            {article.category}
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-purple-200 pt-2">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-purple-300" />
              <span>By {article.author}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-purple-300" />
              <span>{article.readTime}</span>
            </span>
            {article.date && (
              <>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-purple-300" />
                  <span>{article.date}</span>
                </span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Main Article Body */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#E8DCE8] overflow-hidden shadow-sm">
          {/* Featured Image */}
          <div className="w-full h-80 sm:h-96 overflow-hidden">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 sm:p-10 space-y-6 text-[#2C2C2C]">
            {/* Excerpt Lead Paragraph */}
            <p className="text-base sm:text-lg font-serif italic text-[#7F4B7C] leading-relaxed border-l-4 border-[#7F4B7C] pl-4 py-1 bg-[#FAF6EE]">
              "{article.excerpt}"
            </p>

            {/* Content Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700 font-normal">
              {article.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Key Takeaways Box */}
            <div className="bg-[#FAF6EE] border border-[#E8DCE8] p-6 rounded-sm my-8">
              <h4 className="font-serif text-base font-bold text-[#7F4B7C] uppercase tracking-wider mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#7F4B7C]" />
                <span>Key Psychological Takeaways</span>
              </h4>
              <ul className="space-y-2">
                {article.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7F4B7C] mt-2 flex-shrink-0"></span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags & Social Share */}
            <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Tags:
                </span>
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#F1E8F1] text-[#7F4B7C] text-xs px-2.5 py-1 rounded font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 text-xs text-gray-600">
                <span className="font-semibold uppercase tracking-wider">Connect:</span>
                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 hover:bg-[#7F4B7C] hover:text-white rounded-full transition-colors"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={BRAND_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 hover:bg-[#7F4B7C] hover:text-white rounded-full transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Author Card Box (Rounded-2xl with WhatsApp Redirection) */}
            <div className="mt-8 p-6 bg-[#FAF6EE] border-l-4 border-[#7F4B7C] rounded-2xl flex flex-col sm:flex-row gap-5 items-center sm:items-start shadow-xs">
              <img
                src={IMG.logo}
                alt="Dr Anne Rosario"
                className="w-20 h-20 rounded-full object-cover border-2 border-[#7F4B7C] flex-shrink-0"
              />
              <div className="text-center sm:text-left space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#7F4B7C]">
                  Written by
                </span>
                <h4 className="font-serif text-lg font-bold text-[#2C2C2C]">
                  {BRAND_INFO.doctorName}
                </h4>
                <div className="text-xs text-gray-500 font-medium">
                  {BRAND_INFO.title} • {BRAND_INFO.brandName}
                </div>
                <p className="text-xs text-gray-600 leading-relaxed pt-1">
                  Dedicated to fostering safe emotional spaces, personal empowerment, and psychological resilience for individuals.
                </p>
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <a
                    href={BRAND_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2.5 rounded-full text-xs font-bold transition-all shadow hover:shadow-md hover:scale-105 active:scale-95"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div className="pt-10 border-t border-gray-200">
              <h3 className="font-serif text-lg font-bold text-[#2C2C2C] mb-6">
                Related Wellbeing Articles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((rp) => (
                  <div
                    key={rp.id}
                    onClick={() => {
                      onSelectArticle(rp);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="border border-[#E8DCE8] hover:border-[#7F4B7C] p-4 transition-all group cursor-pointer bg-white"
                  >
                    <img
                      src={rp.imageUrl}
                      alt={rp.title}
                      className="w-full h-32 object-cover mb-3"
                    />
                    <div className="text-[10px] font-bold text-[#7F4B7C] uppercase tracking-wider mb-1">
                      {rp.category}
                    </div>
                    <h4 className="font-serif text-sm font-bold text-[#2C2C2C] group-hover:text-[#7F4B7C] transition-colors line-clamp-2">
                      {rp.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
