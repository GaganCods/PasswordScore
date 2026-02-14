import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, X } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogPosts';
import { BlogCard } from '../components/BlogCard';
import { Link } from 'react-router-dom';

const CATEGORIES = ["All", "Security Guide", "Best Practices", "Education", "Cyber Threats", "Password Tips", "Trust & Safety"];

export const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Password Security Blog | PasswordScore</title>
        <meta name="description" content="Stay ahead of cyber threats with expert guides on password security, encryption, and digital safety." />
        <meta property="og:title" content="Password Security Blog | PasswordScore" />
      </Helmet>

      <div className="relative w-full pt-12 pb-24 min-h-screen">
         {/* Seamless transition background */}
         <div 
          className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-transparent via-gray-50/50 to-[var(--footer-base)] dark:from-transparent dark:via-black/10 dark:to-[var(--footer-base)]"
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
          
          {/* 1. Hero Section */}
          <div className="text-center mb-16 pt-8 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6">
              Password Security Blog
            </h1>
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 font-light leading-relaxed">
              Stay ahead of cyber threats. Expert guides on password security, encryption, and digital safety.
            </p>
          </div>

          {/* 2. Search & Filter Bar */}
          <div className="sticky top-24 z-30 mb-16">
              <div className="max-w-5xl mx-auto bg-white/80 dark:bg-[#161b28]/90 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-2xl md:rounded-full p-2 shadow-soft-xl transition-all duration-300 flex flex-col md:flex-row gap-2 md:items-center">
                  
                  {/* Search Input */}
                  <div className="relative flex-1 group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Search className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-300" />
                      </div>
                      <input 
                          type="text" 
                          placeholder="Search articles..." 
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="block w-full pl-11 pr-4 py-3 bg-transparent border-none rounded-xl md:rounded-full text-gray-900 dark:text-white placeholder-gray-500 focus:ring-0 focus:bg-gray-50/80 dark:focus:bg-white/5 transition-all duration-300"
                      />
                      {searchQuery && (
                          <button 
                              onClick={() => setSearchQuery('')}
                              className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                          >
                              <X size={16} />
                          </button>
                      )}
                  </div>

                  {/* Vertical Divider (Desktop only) */}
                  <div className="hidden md:block w-px h-8 bg-gray-200 dark:bg-white/10 mx-1" />

                  {/* Filter Pills - Horizontal Scroll */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 px-2 scrollbar-hide md:max-w-2xl no-scrollbar">
                      {CATEGORIES.map((cat) => (
                          <button
                              key={cat}
                              onClick={() => setSelectedCategory(cat)}
                              className={`
                                  whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border
                                  ${selectedCategory === cat 
                                      ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-transparent shadow-lg shadow-gray-900/10 dark:shadow-white/10 scale-105' 
                                      : 'bg-transparent border-transparent text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5'
                                  }
                              `}
                          >
                              {cat}
                          </button>
                      ))}
                  </div>
              </div>
          </div>

          {/* 3. Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
              {filteredPosts.length > 0 ? (
                  filteredPosts.map((post) => (
                      <BlogCard key={post.slug} post={post} />
                  ))
              ) : (
                  <div className="col-span-full py-20 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-white/5 mb-6">
                          <Search size={32} className="text-gray-400" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No articles found</h3>
                      <p className="text-gray-500 dark:text-gray-400 mb-6">
                          We couldn't find any articles matching "{searchQuery}" in {selectedCategory}.
                      </p>
                      <button 
                          onClick={() => {setSearchQuery(''); setSelectedCategory('All')}}
                          className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                      >
                          Clear filters
                      </button>
                  </div>
              )}
          </div>

          {/* 4. Bottom CTA */}
          <div className="relative rounded-[32px] overflow-hidden p-8 md:p-16 text-center bg-gray-900 dark:bg-[#161b28] border border-gray-800 dark:border-white/10 shadow-2xl">
               <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-50" />
               <div className="relative z-10 max-w-2xl mx-auto">
                   <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Check Your Password Strength Now</h2>
                   <p className="text-gray-300 mb-10 text-lg leading-relaxed font-light">
                       Don't wait for a data breach to find out your password was weak. Our tool runs locally in your browser—100% private.
                   </p>
                   <Link 
                      to="/tool"
                      className="inline-block px-10 py-4 bg-white text-gray-900 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:scale-105 transform duration-200"
                   >
                       Know Your Password Score
                   </Link>
               </div>
          </div>

        </div>
      </div>
    </>
  );
};
