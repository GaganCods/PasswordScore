import React from 'react';
import { BlogPost } from '../types';
import { Check, ShieldCheck, X as XIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

// NOTE: In a real Next.js app with server components, we might store this as MDX or pure HTML strings.
// However, to keep compatibility with existing components, we'll keep it as React Nodes.

export const BLOG_POSTS: (Omit<BlogPost, 'content'> & { content: React.ReactNode })[] = [
  {
    id: 1,
    slug: "how-strong-is-your-password",
    title: "How Strong Is Your Password? (And How to Make It Unbreakable)",
    excerpt: "Stop guessing. Learn the mathematical difference between a weak password and an unbreakable fortress, and how to upgrade yours instantly.",
    category: "Security Guide",
    date: "Feb 14, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800",
    url: "#",
    content: (
        <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            <p>Passwords protect your bank accounts, social media, emails, and personal data. But here’s the problem:</p>
            <p className="font-semibold text-gray-900 dark:text-white text-xl border-l-4 border-blue-500 pl-4">Most people think their password is strong… until it gets hacked.</p>
            <p>So the real question is:</p>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">How strong is your password?</h3>
            <p>Let’s break it down.</p>
            
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">How to Instantly Check Your Password Strength</h2>
            <p>The easiest way to know?</p>
            
            <div className="my-8 p-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl text-center text-white shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-colors" />
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4">Test Your Password Now</h3>
                    <p className="text-blue-100 mb-6 max-w-md mx-auto">
                        Our tool analyzes crack time, entropy, and patterns securely in your browser.
                    </p>
                    <Link 
                        to="/tool" 
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-lg"
                    >
                        <ShieldCheck size={20} />
                        Check Password Score
                    </Link>
                </div>
            </div>

             <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Final Thoughts</h2>
            <p>Cybersecurity starts with small habits.</p>
            <p>A weak password can destroy years of digital trust. A strong password takes minutes to create.</p>
            <p>The question is no longer “Is my password good enough?”</p>
            <p>The question is:</p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-4">👉 Do you actually know your password score?</p>
        </div>
    )
  },
  {
    id: 2,
    slug: "10-common-password-mistakes",
    title: "10 Common Password Mistakes That Make You Easy to Hack",
    excerpt: "Reusing passwords? Using pet names? We cover the top 10 errors that leave your digital life vulnerable to even simple attacks.",
    category: "Best Practices",
    date: "Feb 12, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    url: "#",
    content: (
        <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
             <p className="text-xl font-medium text-gray-900 dark:text-white">
                Most people don’t get hacked because of “advanced cyber attacks.” They get hacked because of simple password mistakes.
            </p>
            <p>
                And the worst part? Many of these mistakes feel harmless. If you recognize yourself in any of the points below, it’s time to upgrade your security.
            </p>

            <div className="my-10 p-8 bg-gray-900 dark:bg-white/5 rounded-3xl text-center shadow-xl relative overflow-hidden group">
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-2">Check Your Password Score Now</h3>
                    <p className="text-gray-400 mb-6">Are you making these mistakes? Test your password safely in your browser.</p>
                    <Link 
                        to="/tool" 
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors"
                    >
                        <ShieldCheck size={18} />
                        Test My Password
                    </Link>
                </div>
            </div>
            
            <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-900/30">
                <p className="font-bold text-blue-900 dark:text-blue-100 mb-4">If you’re unsure —</p>
                <Link 
                    to="/tool" 
                    className="inline-block w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg text-center"
                >
                    Check Your Password Score
                </Link>
            </div>
        </div>
    )
  },
  {
    id: 3,
    slug: "what-makes-a-strong-password",
    title: "What Makes a Strong Password? A Complete Guide",
    excerpt: "The definitive guide to entropy, length, and character sets. Understand the core mechanics of password strength in 2026.",
    category: "Education",
    date: "Feb 10, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    url: "#",
    content: (
        <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            <p>Every online account you own depends on one thing: <strong>Your password.</strong></p>

            <div className="my-12 p-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl text-center text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-4">How to Test If Your Password Is Strong</h3>
                <p className="mb-6 opacity-90">Check crack time, diversity, and patterns safely in your browser.</p>
                <Link 
                    to="/tool"
                    className="inline-block px-8 py-3 bg-white text-blue-600 rounded-full font-bold hover:scale-105 transition-transform"
                >
                    Check Your Password Score Now
                </Link>
            </div>
            
            <div className="mt-8 flex gap-4 flex-wrap">
                 <Link to="/tool" className="text-blue-600 hover:underline font-medium">👉 Test it today</Link>
            </div>
        </div>
    )
  },
  {
    id: 4,
    slug: "how-hackers-crack-passwords",
    title: "How Hackers Crack Passwords (And How to Stop Them)",
    excerpt: "From brute force to credential stuffing—understand the enemy's playbook so you can build defenses they can't breach.",
    category: "Cyber Threats",
    date: "Feb 05, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800",
    url: "#",
    content: (
        <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            <p>Most people imagine hackers sitting in dark rooms guessing passwords manually. That’s not how it works.</p>

            <div className="my-8 p-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl text-center text-white shadow-xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-colors" />
                 <div className="relative z-10">
                     <h3 className="text-2xl font-bold mb-4">Check Your Password Score Now</h3>
                     <p className="text-blue-100 mb-6 max-w-md mx-auto">
                         Our tool analyzes crack time, entropy, and patterns securely in your browser.
                     </p>
                     <Link 
                         to="/tool" 
                         className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-lg"
                     >
                         <ShieldCheck size={20} />
                         Check Password Score
                     </Link>
                 </div>
            </div>

            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-4">👉 How long would it take to crack yours?</p>
        </div>
    )
  },
  {
    id: 5,
    slug: "passphrase-vs-password",
    title: "Passphrase vs Password: Which One Is More Secure?",
    excerpt: "Is 'CorrectHorseBatteryStaple' better than 'Tr0ub4dor&3'? We analyze the security trade-offs between complex strings and long phrases.",
    category: "Password Tips",
    date: "Jan 28, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1618060932014-4deda4932554?auto=format&fit=crop&q=80&w=800",
    url: "#",
    content: (
        <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            <p>When creating a login, most people use a password. But lately, security experts recommend something different: <strong>A passphrase.</strong></p>

            <div className="my-10 p-8 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-900/30 text-center">
                <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">Test Your Security</h3>
                <p className="text-blue-800 dark:text-blue-200 mb-6">Don’t assume your login is strong. Check your password score now.</p>
                <Link 
                    to="/tool" 
                    className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg"
                >
                    <ShieldCheck size={20} />
                    Check Password Score
                </Link>
            </div>
            
            <div className="mt-8">
                 <Link to="/tool" className="text-blue-600 hover:underline font-bold text-lg">👉 Find out your password score today.</Link>
            </div>
        </div>
    )
  },
  {
    id: 6,
    slug: "are-password-checkers-safe",
    title: "Are Password Strength Checkers Safe to Use?",
    excerpt: "Not all checkers are created equal. Learn why client-side analysis is crucial for privacy and how to spot insecure tools.",
    category: "Trust & Safety",
    date: "Jan 15, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd82?auto=format&fit=crop&q=80&w=800",
    url: "#",
    content: (
        <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            <p>It’s a fair question. You’re typing your password into a tool. And you’re being told it’s “safe.”</p>
    
            <div className="my-10 p-8 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-900/30 text-center">
                <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">Check Your Password Score Now</h3>
                <p className="text-blue-800 dark:text-blue-200 mb-6">If the tool works instantly without refreshing the page, that’s usually a sign it’s running locally.</p>
                <Link 
                    to="/tool" 
                    className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg"
                >
                    <ShieldCheck size={20} />
                    Test My Password
                </Link>
            </div>
            
            <div className="mt-8">
                 <Link to="/tool" className="text-blue-600 hover:underline font-bold text-lg">👉 Test it safely and find out.</Link>
            </div>
        </div>
    )
  }
];
