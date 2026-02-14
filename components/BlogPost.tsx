import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react';
import { BlogPost, PageView } from '../types';

interface BlogPostProps {
  post: BlogPost;
  onNavigate: (page: PageView) => void;
  onBack: () => void;
}

export const BlogPostView: React.FC<BlogPostProps> = ({ post, onNavigate, onBack }) => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [post]);

    return (
          <div className="relative w-full pt-12 pb-24">
             {/* Background */}
            <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-transparent via-gray-50/50 to-[var(--footer-base)] dark:from-transparent dark:via-black/10 dark:to-[var(--footer-base)]" aria-hidden="true" />

            <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 animate-fade-in-up">
                {/* Back Button */}
                <button 
                    onClick={onBack}
                    className="group flex items-center gap-2 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 mb-8 transition-colors"
                >
                    <div className="p-2 rounded-full bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 group-hover:border-blue-200 dark:group-hover:border-blue-900">
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    </div>
                    <span className="font-medium">Back to Articles</span>
                </button>

                {/* Article Header */}
                <div className="mb-10">
                     <div className="flex flex-wrap gap-4 items-center text-sm font-medium text-gray-500 dark:text-gray-400 mb-6">
                        <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-bold uppercase text-xs tracking-wider">
                            {post.category}
                        </span>
                        <div className="flex items-center gap-1.5">
                            <Calendar size={14} />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Clock size={14} />
                            <span>{post.readTime}</span>
                        </div>
                     </div>
                     
                     <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-8">
                         {post.title}
                     </h1>

                     {/* Featured Image */}
                     <div className="rounded-[24px] overflow-hidden shadow-2xl mb-12 border border-gray-100 dark:border-white/5">
                         <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-64 md:h-[400px] object-cover"
                         />
                     </div>
                </div>
                
                {/* Article Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
                     {typeof post.content === 'function' ? post.content(onNavigate) : (
                         post.content || <p className="text-gray-500 italic">Content coming soon...</p>
                     )}
                </div>
                
                {/* Article Footer / Share */}
                <div className="border-t border-gray-200 dark:border-white/10 pt-8 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                            <User size={20} className="text-gray-500 dark:text-gray-300" />
                        </div>
                        <div>
                            <div className="text-sm font-bold text-gray-900 dark:text-white">PasswordScore Team</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Security Research</div>
                        </div>
                    </div>
                    <button className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <Share2 size={18} />
                        Share Article
                    </button>
                </div>

            </div>
          </div>
      );
};