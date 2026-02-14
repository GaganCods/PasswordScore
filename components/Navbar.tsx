'use client';

import React, { useState, useEffect } from 'react';
import { Shield, Moon, Sun, Home, Sparkles, BookOpen, Menu, X, ArrowRight } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTheme } from './ThemeProvider';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useTheme();
  const darkMode = theme === 'dark';

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) => 
    `flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
      isActive 
      ? 'bg-white dark:bg-white/10 text-gray-900 dark:text-white shadow-sm' 
      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-200/50 dark:hover:bg-white/5'
    }`;

  return (
    <>
      {/* Mobile Backdrop - Click to close */}
      <div 
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center py-4 px-4 sm:px-6 pointer-events-none">
        {/* Main Header Bar - Enable pointer events for the bar itself */}
        <div className="pointer-events-auto w-full max-w-6xl bg-white/80 dark:bg-card-dark/80 backdrop-blur-xl border border-white/20 dark:border-white/5 rounded-2xl shadow-soft-md flex items-center justify-between px-6 py-3 transition-all duration-300 relative z-50">
          
          {/* Logo */}
          <Link 
            to="/"
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="bg-gradient-to-br from-primary-start to-primary-end p-2 rounded-lg text-white shadow-lg shadow-primary-start/30 group-hover:scale-105 transition-transform duration-300">
               <Shield size={20} fill="currentColor" className="opacity-90" />
            </div>
            <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              PasswordScore
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-gray-100/50 dark:bg-white/5 px-2 py-1.5 rounded-full border border-transparent dark:border-white/5">
              <NavLink to="/" className={navLinkClass}>
                <Home size={16} />
                Home
              </NavLink>
              <NavLink to="/tool" className={navLinkClass}>
                <Sparkles size={16} />
                Tool
              </NavLink>
              <NavLink to="/blog" className={navLinkClass}>
                <BookOpen size={16} />
                Blog
              </NavLink>
          </nav>
          
          {/* Right Actions */}
          <div className="flex items-center gap-3">
              {/* Desktop Theme Toggle */}
              <button 
                  onClick={toggleTheme}
                  className="hidden md:flex p-2.5 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                  aria-label="Toggle dark mode"
              >
                  {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              
              {/* Desktop CTA */}
              <Link 
                to="/tool"
                className="group hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full text-sm font-medium shadow-md hover:shadow-lg dark:shadow-[0_0_20px_rgba(124,58,237,0.4)] transform hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Check Now
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* Mobile Menu Button - ONLY Visible on Mobile */}
              <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10 rounded-xl transition-colors"
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div 
          className={`
            pointer-events-auto md:hidden
            absolute top-[calc(100%+8px)] left-4 right-4 sm:left-6 sm:right-6
            bg-white/95 dark:bg-[#161b28]/95 backdrop-blur-xl 
            border border-gray-200/50 dark:border-white/10
            rounded-[20px] shadow-soft-xl p-5
            flex flex-col gap-4
            origin-top transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${isMenuOpen ? 'opacity-100 translate-y-0 scale-100 visible' : 'opacity-0 -translate-y-4 scale-95 invisible pointer-events-none'}
          `}
        >
          {/* Navigation Items */}
          <nav className="flex flex-col space-y-1">
            <Link 
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-left group"
            >
              <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
                <Home size={18} />
              </div>
              Home
            </Link>
            <Link 
              to="/tool"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-left group"
            >
              <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-purple-600 dark:text-purple-400 group-hover:scale-105 transition-transform">
                <Sparkles size={18} />
              </div>
              Tool
            </Link>
            <Link 
              to="/blog"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-left group"
            >
              <div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg text-indigo-600 dark:text-indigo-400 group-hover:scale-105 transition-transform">
                <BookOpen size={18} />
              </div>
              Blog
            </Link>
          </nav>

          {/* Divider */}
          <div className="h-px bg-gray-100 dark:bg-white/5 w-full" />

          {/* Theme Toggle */}
          <div className="flex items-center justify-between px-4 py-2">
            <span className="font-medium text-sm text-gray-900 dark:text-white flex items-center gap-2">
               {darkMode ? <Moon size={18} className="text-gray-500" /> : <Sun size={18} className="text-amber-500" />}
               {darkMode ? 'Dark Mode' : 'Light Mode'}
            </span>
            
            <button 
              onClick={toggleTheme}
              className={`w-12 h-7 rounded-full p-1 transition-colors duration-300 flex items-center ${darkMode ? 'bg-primary-start' : 'bg-gray-200'}`}
              aria-label="Toggle theme"
            >
               <div className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-300 ${darkMode ? 'translate-x-5' : 'translate-x-0'}`} />
            </button>
          </div>

          {/* CTA Button */}
          <Link 
            to="/tool"
            onClick={() => setIsMenuOpen(false)}
            className="w-full py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-violet-500/20 active:scale-95 transition-all mt-2"
          >
            Try Now <ArrowRight size={16} />
          </Link>
        </div>
      </header>
    </>
  );
};