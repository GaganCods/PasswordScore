import React from 'react';
import { BlogPost } from '../types';
import { Check, ShieldCheck, X as XIcon } from 'lucide-react';

export const BLOG_POSTS: BlogPost[] = [
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
    content: (onNavigate) => (
        <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            <p>Passwords protect your bank accounts, social media, emails, and personal data. But here’s the problem:</p>
            <p className="font-semibold text-gray-900 dark:text-white text-xl border-l-4 border-blue-500 pl-4">Most people think their password is strong… until it gets hacked.</p>
            <p>So the real question is:</p>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">How strong is your password?</h3>
            <p>Let’s break it down.</p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Why Password Strength Matters</h2>
            <p>Hackers don’t sit and guess passwords manually.</p>
            <p>They use automated tools that can try billions of combinations per second. If your password is weak, it can be cracked in seconds.</p>
            <p>A strong password can take years — even centuries — to break.</p>
            <p>The difference often comes down to:</p>
            <ul className="grid sm:grid-cols-2 gap-4">
                {['Length', 'Complexity', 'Unpredictability', 'Uniqueness'].map(item => (
                    <li key={item} className="flex items-center gap-2 bg-gray-50 dark:bg-white/5 p-3 rounded-lg border border-gray-100 dark:border-white/10">
                        <Check className="text-green-500" size={20}/> 
                        <span className="font-medium text-gray-900 dark:text-white">{item}</span>
                    </li>
                ))}
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">How Hackers Crack Passwords</h2>
            <p>Understanding this helps you stay ahead.</p>
            
            <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">1️⃣ Brute Force Attacks</h3>
                    <p>Attackers try every possible combination until one works. Short passwords fall instantly.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">2️⃣ Dictionary Attacks</h3>
                    <p className="mb-4">They use massive lists of common passwords like:</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-sm">
                        {['123456', 'password', 'qwerty', 'iloveyou'].map(p => (
                            <span key={p} className="bg-gray-100 dark:bg-black/30 px-3 py-2 rounded text-center text-red-500">{p}</span>
                        ))}
                    </div>
                    <p className="mt-4 text-sm text-gray-500">If your password is common, you’re at risk.</p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">3️⃣ Substitution Attacks</h3>
                    <p className="mb-4">Changing letters to symbols doesn’t always help.</p>
                    <div className="flex flex-col sm:flex-row gap-4 font-mono text-sm">
                         <span className="bg-gray-100 dark:bg-black/30 px-4 py-2 rounded text-red-500 line-through decoration-red-500/50">P@ssw0rd</span>
                         <span className="bg-gray-100 dark:bg-black/30 px-4 py-2 rounded text-red-500 line-through decoration-red-500/50">Adm1n123</span>
                    </div>
                    <p className="mt-4 text-sm text-gray-500">Hackers expect these patterns.</p>
                </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">What Makes a Strong Password?</h2>
            <p>A strong password should:</p>
            <ul className="space-y-3">
                {[
                    "Be at least 14–16 characters long",
                    "Include uppercase and lowercase letters",
                    "Include numbers and symbols",
                    "Avoid real words",
                    "Avoid keyboard patterns",
                    "Be unique for every account"
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 bg-green-100 dark:bg-green-900/30 p-1 rounded-full text-green-600 dark:text-green-400">
                             <Check size={14} strokeWidth={3} />
                        </div>
                        <span className="text-gray-800 dark:text-gray-200">{item}</span>
                    </li>
                ))}
            </ul>
            <p className="font-medium italic text-gray-500">Length matters more than complexity alone.</p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Passphrase vs Password</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
                <div className="p-6 bg-red-50 dark:bg-red-900/10 rounded-2xl border border-red-100 dark:border-red-900/20 text-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-500 mb-2 block">Avoid</span>
                    <code className="text-lg md:text-xl font-bold text-red-600 dark:text-red-400">Xj@9!pL2</code>
                    <p className="text-sm text-red-400 mt-2">Hard to remember</p>
                </div>
                <div className="p-6 bg-green-50 dark:bg-green-900/10 rounded-2xl border border-green-100 dark:border-green-900/20 text-center">
                    <span className="text-xs font-bold uppercase tracking-wider text-green-500 mb-2 block">Use Passphrases</span>
                    <code className="text-lg md:text-xl font-bold text-green-600 dark:text-green-400">CoffeeIsBetterAt6AM!</code>
                    <p className="text-sm text-green-500 mt-2">Easy to remember, Hard to crack</p>
                </div>
            </div>
            <p>Why passphrases win:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-blue-500">
                <li>Easier to remember</li>
                <li>Much longer</li>
                <li>Harder to crack</li>
                <li>Exponentially increases attack time</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Common Signs Your Password Is Weak</h2>
            <ul className="list-disc pl-6 space-y-2 marker:text-red-500">
                <li>Less than 10 characters</li>
                <li>Contains your name or birth year</li>
                <li>Uses simple patterns</li>
                <li>Reused across multiple sites</li>
                <li>Stored in notes or spreadsheets</li>
            </ul>
            <p className="bg-yellow-50 dark:bg-yellow-900/10 p-4 rounded-lg border-l-4 border-yellow-500 text-yellow-800 dark:text-yellow-200">
                If any of these apply, it’s time to upgrade.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">How to Instantly Check Your Password Strength</h2>
            <p>The easiest way to know?</p>
            
            <div className="my-8 p-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl text-center text-white shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-colors" />
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4">Test Your Password Now</h3>
                    <p className="text-blue-100 mb-6 max-w-md mx-auto">
                        Our tool analyzes crack time, entropy, and patterns securely in your browser.
                    </p>
                    <button 
                        onClick={() => onNavigate('tool')} 
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-lg"
                    >
                        <ShieldCheck size={20} />
                        Check Password Score
                    </button>
                </div>
            </div>

            <p>A password strength checker analyzes:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-blue-500">
                <li>Crack time</li>
                <li>Character diversity</li>
                <li>Pattern detection</li>
                <li>Common word usage</li>
                <li>Real-world attack simulation</li>
            </ul>
            <p>And the best ones run directly in your browser — meaning your password stays private.</p>

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
    content: (onNavigate) => (
        <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            <p className="text-xl font-medium text-gray-900 dark:text-white">
                Most people don’t get hacked because of “advanced cyber attacks.” They get hacked because of simple password mistakes.
            </p>
            <p>
                And the worst part? Many of these mistakes feel harmless. If you recognize yourself in any of the points below, it’s time to upgrade your security.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">1. Using Short Passwords</h2>
            <p>
                If your password is under 10 characters, it’s vulnerable. Modern cracking tools can test billions of combinations per second. Short passwords fall almost instantly.
            </p>
            <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-xl border-l-4 border-red-500">
                <span className="font-bold text-red-700 dark:text-red-400 block mb-1">Fix:</span>
                <p className="text-red-600 dark:text-red-300">Use at least 14–16 characters. Length matters more than you think.</p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">2. Reusing the Same Password Everywhere</h2>
            <p>
                One data breach = all your accounts compromised. If your email, Instagram, and banking app share the same password, you’re one leak away from disaster.
            </p>
             <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-xl border-l-4 border-green-500">
                <span className="font-bold text-green-700 dark:text-green-400 block mb-1">Fix:</span>
                <p className="text-green-600 dark:text-green-300">Use a unique password for every account.</p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">3. Using Common Passwords</h2>
            <p>If your password looks like this:</p>
            <div className="flex flex-wrap gap-3 font-mono text-sm my-4">
                {['123456', 'password', 'qwerty', 'admin123'].map(p => (
                    <span key={p} className="bg-gray-100 dark:bg-black/30 px-3 py-2 rounded text-red-500 line-through decoration-red-500/50">{p}</span>
                ))}
            </div>
            <p>You’re not protected. Hackers use massive leaked password databases in seconds.</p>
            <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl border-l-4 border-blue-500">
                <span className="font-bold text-blue-700 dark:text-blue-400 block mb-1">Fix:</span>
                <p className="text-blue-600 dark:text-blue-300">Avoid anything that appears in common password lists.</p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">4. Replacing Letters with Obvious Symbols</h2>
            <p>Think this is secure?</p>
            <div className="flex flex-wrap gap-3 font-mono text-sm my-4">
                 <span className="bg-gray-100 dark:bg-black/30 px-3 py-2 rounded text-red-500 line-through decoration-red-500/50">P@ssw0rd</span>
                 <span className="bg-gray-100 dark:bg-black/30 px-3 py-2 rounded text-red-500 line-through decoration-red-500/50">Adm1n123</span>
            </div>
            <p>It’s not. Attack tools expect these substitutions.</p>
            <p><strong>Fix:</strong> Stop modifying weak words. Create longer, random passphrases instead.</p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">5. Including Personal Information</h2>
            <p>Your name. Your birth year. Your pet’s name. If it’s on your social media, hackers can find it.</p>
            <p><strong>Fix:</strong> Never include personal details in passwords.</p>

            <div className="my-10 p-8 bg-gray-900 dark:bg-white/5 rounded-3xl text-center shadow-xl relative overflow-hidden group">
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-2">Check Your Password Score Now</h3>
                    <p className="text-gray-400 mb-6">Are you making these mistakes? Test your password safely in your browser.</p>
                    <button 
                        onClick={() => onNavigate('tool')} 
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors"
                    >
                        <ShieldCheck size={18} />
                        Test My Password
                    </button>
                </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">6. Using Real Dictionary Words</h2>
            <p>Single words like <code>sunshine</code>, <code>football</code>, or <code>welcome</code> are easy targets in dictionary attacks.</p>
            <div className="bg-gray-50 dark:bg-white/5 p-4 rounded-xl border border-gray-200 dark:border-white/10">
                <p className="mb-2"><strong>Fix:</strong> Combine unrelated words into long passphrases.</p>
                <p className="font-mono text-green-600 dark:text-green-400 font-bold">WindowTigerCoffeeRain!</p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">7. Following Keyboard Patterns</h2>
            <p>Passwords like <code>qwerty123</code>, <code>asdfgh</code>, or <code>1q2w3e</code> are predictable. Automated tools test these early.</p>
            <p><strong>Fix:</strong> Avoid patterns that follow keyboard layout.</p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">8. Storing Passwords in Notes or Spreadsheets</h2>
            <p>If someone gains access to your device, they gain access to everything. Unprotected documents are risky.</p>
            <p><strong>Fix:</strong> Use a secure password manager instead.</p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">9. Never Updating Old Passwords</h2>
            <p>If a website was breached and you never changed your password, you’re still exposed.</p>
            <p><strong>Fix:</strong> Update passwords immediately after any data breach.</p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">10. Not Checking Your Password Strength</h2>
            <p>Most people assume their password is strong. They never test it. That’s a mistake.</p>
            <p>A good password strength checker analyzes:</p>
            <ul className="grid sm:grid-cols-2 gap-2 mt-4">
                {['Crack time', 'Character variety', 'Pattern detection', 'Common word exposure'].map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                        <Check size={16} className="text-blue-500" /> {item}
                    </li>
                ))}
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">How to Create a Strong Password (The Simple Formula)</h2>
            <ul className="space-y-3 mb-6">
                {[
                    "16+ characters",
                    "Mix of upper + lower case",
                    "Numbers + symbols",
                    "No real words",
                    "Unique per account"
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 bg-green-100 dark:bg-green-900/30 p-1 rounded-full text-green-600 dark:text-green-400">
                             <Check size={14} strokeWidth={3} />
                        </div>
                        <span className="text-gray-800 dark:text-gray-200">{item}</span>
                    </li>
                ))}
            </ul>
            <p>Or better yet — use a long passphrase.</p>
            <div className="p-4 bg-gray-100 dark:bg-white/5 rounded-xl text-center font-mono font-bold text-lg text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-white/10">
                CoffeeRunsFasterAt5AM!
            </div>
            <p className="text-center text-sm text-gray-500 mt-2">Long {'>'} Complicated.</p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Final Thoughts</h2>
            <p>Hackers don’t need genius-level skills. They just need you to make one of these mistakes. The difference between being hacked and being safe often comes down to a few small habits.</p>
            <p className="font-bold text-xl mt-4">So ask yourself: Are you making any of these 10 mistakes?</p>
            
            <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-900/30">
                <p className="font-bold text-blue-900 dark:text-blue-100 mb-4">If you’re unsure —</p>
                <button 
                    onClick={() => onNavigate('tool')} 
                    className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg"
                >
                    Check Your Password Score
                </button>
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
    content: (onNavigate) => (
        <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            <p>Every online account you own depends on one thing: <strong>Your password.</strong></p>
            <p>But here’s the problem — most people don’t actually know what makes a password strong. They assume complexity equals security. That’s not always true.</p>
            <p>Let’s break down what really makes a password strong — and how you can create one in minutes.</p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Why Password Strength Matters</h2>
            <p>Hackers don’t guess passwords manually. They use automated tools that can test billions of combinations per second.</p>
            <p>If your password is weak, it can be cracked instantly. If it’s strong, it could take years — even centuries.</p>
            <p>The difference comes down to a few key factors.</p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">The 6 Core Elements of a Strong Password</h2>

            {/* 1. Length */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">1️⃣ Length (The Most Important Factor)</h3>
                <p className="mb-4">Length matters more than anything else. A 16-character password is exponentially stronger than an 8-character one — even if both use symbols.</p>
                <div className="flex gap-4 text-sm font-medium">
                    <span className="text-red-500">Min: 14–16 chars</span>
                    <span className="text-green-500">Ideal: 16–20+ chars</span>
                </div>
            </div>

            {/* 2. Variety */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">2️⃣ Character Variety</h3>
                <p>A strong password should include Uppercase (A-Z), Lowercase (a-z), Numbers (0-9), and Symbols (!@#$%).</p>
                <p className="text-sm text-gray-500 mt-2">But remember — complexity alone doesn’t beat length.</p>
            </div>

            {/* 3. Unpredictability */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">3️⃣ Unpredictability</h3>
                <p className="mb-3">Hackers use smart attack methods like dictionary attacks and pattern detection.</p>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 rounded line-through decoration-red-500/50">P@ssw0rd</span>
                    <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 rounded line-through decoration-red-500/50">Admin123</span>
                </div>
            </div>

            {/* 4. No Personal Info */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">4️⃣ No Personal Information</h3>
                <p>Never include your name, birth year, phone number, pet name, or favorite team. If it’s on your social media, it can be used against you.</p>
            </div>

            {/* 5. No Reuse */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">5️⃣ No Reused Passwords</h3>
                <p>Using the same password on multiple websites is one of the biggest security risks. If one site gets breached, attackers try that password everywhere else.</p>
            </div>

            {/* 6. No Dictionary Words */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">6️⃣ Avoid Real Dictionary Words</h3>
                <p>Single words like <code>sunshine</code>, <code>football</code>, or <code>freedom</code> are easy to crack using massive wordlists.</p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Password vs Passphrase: Which Is Better?</h2>
            <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="p-4 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 rounded-xl">
                    <div className="font-mono text-lg font-bold text-red-600 mb-1">Xj@9!pL2</div>
                    <div className="text-sm text-red-500">Hard to remember, shorter.</div>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/20 rounded-xl">
                    <div className="font-mono text-lg font-bold text-green-600 mb-1">CoffeeIsBetterAt6AM!</div>
                    <div className="text-sm text-green-500">Longer, stronger, easier to type.</div>
                </div>
            </div>
            <p><strong>Length multiplied by unpredictability = security.</strong></p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">How to Create a Strong Password</h2>
            <ul className="space-y-3">
                 <li className="flex items-center gap-3">
                    <Check className="text-green-500" /> <span>Pick 3–4 unrelated words</span>
                 </li>
                 <li className="flex items-center gap-3">
                    <Check className="text-green-500" /> <span>Add capitalization</span>
                 </li>
                 <li className="flex items-center gap-3">
                    <Check className="text-green-500" /> <span>Add numbers or symbols naturally</span>
                 </li>
                 <li className="flex items-center gap-3">
                    <Check className="text-green-500" /> <span>Make it at least 16 characters</span>
                 </li>
            </ul>
            <div className="mt-4 p-4 bg-gray-100 dark:bg-white/5 rounded-xl text-center font-mono font-bold text-blue-600 dark:text-blue-400">
                TigerRunsAtMidnight7!
            </div>

            <div className="my-12 p-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl text-center text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-4">How to Test If Your Password Is Strong</h3>
                <p className="mb-6 opacity-90">Check crack time, diversity, and patterns safely in your browser.</p>
                <button 
                    onClick={() => onNavigate('tool')}
                    className="px-8 py-3 bg-white text-blue-600 rounded-full font-bold hover:scale-105 transition-transform"
                >
                    Check Your Password Score Now
                </button>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Common Myths About Strong Passwords</h2>
            <div className="space-y-4">
                 <div className="flex gap-3">
                    <div className="mt-1 text-red-500 font-bold"><XIcon size={20} /></div>
                    <div>
                        <strong className="block text-gray-900 dark:text-white">Myth 1: Symbols automatically make it secure</strong>
                        <span className="text-gray-500">Not if it’s short.</span>
                    </div>
                 </div>
                 <div className="flex gap-3">
                    <div className="mt-1 text-red-500 font-bold"><XIcon size={20} /></div>
                    <div>
                        <strong className="block text-gray-900 dark:text-white">Myth 2: Changing one letter is enough</strong>
                        <span className="text-gray-500">Hackers expect substitutions like @ for a.</span>
                    </div>
                 </div>
                 <div className="flex gap-3">
                    <div className="mt-1 text-red-500 font-bold"><XIcon size={20} /></div>
                    <div>
                        <strong className="block text-gray-900 dark:text-white">Myth 3: I won’t be targeted</strong>
                        <span className="text-gray-500">Most attacks are automated, not personal.</span>
                    </div>
                 </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Final Thoughts</h2>
            <p>Strong passwords aren’t about being complicated. They’re about being long, unique, and unpredictable.</p>
            <p>Creating a secure password takes minutes. Recovering from identity theft can take years.</p>
            <p className="font-bold text-xl mt-4">Do you actually know how strong your password is?</p>
            
            <div className="mt-8 flex gap-4 flex-wrap">
                 <button onClick={() => onNavigate('tool')} className="text-blue-600 hover:underline font-medium">👉 Test it today</button>
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
    content: (onNavigate) => (
        <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            <p>Most people imagine hackers sitting in dark rooms guessing passwords manually. That’s not how it works.</p>
            <p>Modern password attacks are automated, fast, and extremely efficient. If your password is weak, it can be cracked in seconds — without anyone personally targeting you.</p>
            <p>Let’s break down how hackers actually crack passwords… and how you can stop them.</p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">How Hackers Crack Passwords</h2>

            {/* 1. Brute Force */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">1️⃣ Brute Force Attacks</h3>
                <p className="mb-4">This is the simplest method. Attackers use software that tries every possible character combination until it finds the correct one.</p>
                <p>Short passwords fall instantly. An 8-character password can be cracked in minutes. A 16-character password could take years.</p>
                <div className="mt-4 bg-green-50 dark:bg-green-900/10 p-4 rounded-xl border-l-4 border-green-500">
                    <span className="font-bold text-green-700 dark:text-green-400 block mb-1">How to Stop It:</span>
                    <ul className="list-disc pl-5 space-y-1 text-green-800 dark:text-green-300">
                        <li>Use at least 16 characters</li>
                        <li>Mix uppercase, lowercase, numbers, and symbols</li>
                        <li>Prioritize length over complexity</li>
                    </ul>
                </div>
            </div>

            {/* 2. Dictionary Attacks */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">2️⃣ Dictionary Attacks</h3>
                 <p className="mb-4">Hackers use massive databases of leaked passwords. Common passwords like <code>123456</code>, <code>password</code>, <code>qwerty</code>, or <code>admin123</code> are tested first.</p>
                 <p>If your password appears in a known list, it can be cracked instantly.</p>
                 <div className="mt-4 bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl border-l-4 border-blue-500">
                    <span className="font-bold text-blue-700 dark:text-blue-400 block mb-1">How to Stop It:</span>
                    <p className="text-blue-600 dark:text-blue-300">Avoid common words and popular passwords. Use random passphrases instead.</p>
                </div>
            </div>

            {/* 3. Credential Stuffing */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">3️⃣ Credential Stuffing</h3>
                 <p className="mb-4">When a website gets hacked, attackers collect usernames and passwords. Then they try those same credentials on other websites. If you reuse passwords, you’re vulnerable.</p>
                 <div className="mt-4 bg-red-50 dark:bg-red-900/10 p-4 rounded-xl border-l-4 border-red-500">
                    <span className="font-bold text-red-700 dark:text-red-400 block mb-1">How to Stop It:</span>
                    <p className="text-red-600 dark:text-red-300">Use a unique password for every account. One reused password can expose everything.</p>
                </div>
            </div>

            {/* 4. Phishing */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">4️⃣ Phishing Attacks</h3>
                 <p className="mb-4">Sometimes hackers don’t crack passwords at all. They trick you into giving them away via fake emails or login pages.</p>
                 <div className="mt-4 bg-purple-50 dark:bg-purple-900/10 p-4 rounded-xl border-l-4 border-purple-500">
                    <span className="font-bold text-purple-700 dark:text-purple-400 block mb-1">How to Stop It:</span>
                    <ul className="list-disc pl-5 space-y-1 text-purple-800 dark:text-purple-300">
                        <li>Never click suspicious login links</li>
                        <li>Check URLs carefully</li>
                        <li>Enable two-factor authentication (2FA)</li>
                    </ul>
                </div>
            </div>

            {/* 5. Pattern Substitution */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">5️⃣ Pattern & Substitution Attacks</h3>
                 <p className="mb-4">Think <code>P@ssw0rd</code> or <code>Welcome2024</code> is secure? It’s not. Modern cracking tools expect common substitutions like replacing "a" with "@".</p>
                 <div className="mt-4 bg-orange-50 dark:bg-orange-900/10 p-4 rounded-xl border-l-4 border-orange-500">
                    <span className="font-bold text-orange-700 dark:text-orange-400 block mb-1">How to Stop It:</span>
                    <p className="text-orange-600 dark:text-orange-300">Stop modifying weak words. Use long, unpredictable passphrases.</p>
                </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Why Length Beats Everything</h2>
            <p>Password strength grows exponentially with length. Adding just 4 extra characters can increase crack time from minutes to centuries.</p>
            <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="p-4 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 rounded-xl">
                    <div className="font-mono text-lg font-bold text-red-600 mb-1">Xj@9!pL2</div>
                    <div className="text-sm text-red-500">Looks complicated, but short.</div>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/20 rounded-xl">
                    <div className="font-mono text-lg font-bold text-green-600 mb-1">CoffeeRunsFasterAt5AM!</div>
                    <div className="text-sm text-green-500">Far stronger due to length.</div>
                </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">The Safest Way to Check Your Password</h2>
            <p>Don’t assume your password is strong. Test it.</p>
            
            <div className="my-8 p-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl text-center text-white shadow-xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-colors" />
                 <div className="relative z-10">
                     <h3 className="text-2xl font-bold mb-4">Check Your Password Score Now</h3>
                     <p className="text-blue-100 mb-6 max-w-md mx-auto">
                         Our tool analyzes crack time, entropy, and patterns securely in your browser.
                     </p>
                     <button 
                         onClick={() => onNavigate('tool')} 
                         className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-lg"
                     >
                         <ShieldCheck size={20} />
                         Check Password Score
                     </button>
                 </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Quick Checklist to Stop Hackers</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
                {[
                    "Use 16+ characters",
                    "Use unique passwords per account",
                    "Avoid real words",
                    "Avoid patterns",
                    "Enable 2FA",
                    "Check your password strength regularly"
                ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 bg-gray-50 dark:bg-white/5 p-3 rounded-lg">
                        <Check className="text-green-500" size={18} />
                        <span className="font-medium text-gray-800 dark:text-gray-200">{item}</span>
                    </li>
                ))}
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Final Thoughts</h2>
            <p>Hackers don’t need to be genius coders. They rely on automation, common mistakes, and weak passwords.</p>
            <p className="font-medium mt-4">The real question isn’t “Will hackers try to crack passwords?” They already are.</p>
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
    content: (onNavigate) => (
        <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            <p>When creating a login, most people use a password. But lately, security experts recommend something different: <strong>A passphrase.</strong></p>
            <p>So what’s the difference? And which one is actually more secure?</p>
            <p>Let’s break down in simple terms.</p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">What Is a Password?</h2>
            <p>A password is usually:</p>
            <ul className="list-disc pl-6 space-y-2">
                <li>Short</li>
                <li>Complex</li>
                <li>Random-looking</li>
                <li>8–12 characters long</li>
            </ul>
            <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-xl border-l-4 border-red-500 my-4">
                 <span className="font-bold text-red-700 dark:text-red-400 block mb-1">Example:</span>
                 <code className="text-lg font-bold text-red-600 dark:text-red-300">Xj@9!pL2</code>
            </div>
            <p>It mixes letters, numbers, and symbols. It looks secure. But looks can be misleading.</p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">What Is a Passphrase?</h2>
            <p>A passphrase is:</p>
            <ul className="list-disc pl-6 space-y-2">
                <li>Longer</li>
                <li>Made of multiple words</li>
                <li>Easier to remember</li>
                <li>Typically 16+ characters</li>
            </ul>
            <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-xl border-l-4 border-green-500 my-4">
                 <span className="font-bold text-green-700 dark:text-green-400 block mb-1">Example:</span>
                 <code className="text-lg font-bold text-green-600 dark:text-green-300">CoffeeRunsFasterAt5AM!</code>
            </div>
            <p>It’s readable. It’s natural. And most importantly — it’s long.</p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">The Real Difference: Length vs Complexity</h2>
            <p>Here’s what most people misunderstand: <strong>Security doesn’t just come from complexity. It comes from length.</strong></p>
            <p>A short complex password might have strong characters. But a long passphrase multiplies possibilities exponentially.</p>
            <p>Even adding 3–4 extra characters can increase crack time from minutes to years. That’s why length wins.</p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Why Passphrases Are Usually More Secure</h2>
            
            <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">1️⃣ Longer by Default</h3>
                    <p>Most passphrases are 16–20+ characters. Longer passwords are dramatically harder to brute force.</p>
                </div>
                 <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">2️⃣ Harder to Guess</h3>
                    <p>If you choose unrelated words, it becomes unpredictable.</p>
                    <div className="mt-2 font-mono text-green-600 dark:text-green-400 font-bold">WindowTigerRainCoffee!</div>
                    <p className="mt-2 text-sm text-gray-500">This is extremely difficult for automated tools to guess.</p>
                </div>
                 <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">3️⃣ Easier to Remember</h3>
                    <p>People forget complex short passwords. They write them down. They reuse them. That creates security risks. Passphrases reduce that problem.</p>
                </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">When a Password Can Still Be Secure</h2>
            <p>A traditional password can be secure if:</p>
            <ul className="list-disc pl-6 space-y-2">
                <li>It’s at least 16 characters</li>
                <li>Completely random</li>
                <li>Unique per account</li>
            </ul>
            <p>But most people don’t create passwords like that. They create short ones. And short is weak.</p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Common Mistakes With Passphrases</h2>
            <p>Not all passphrases are strong. Avoid:</p>
             <ul className="list-disc pl-6 space-y-2">
                <li>Famous quotes</li>
                <li>Song lyrics</li>
                <li>Movie lines</li>
                <li>Predictable phrases</li>
            </ul>
            <p className="mt-4 text-red-500 font-mono bg-red-50 dark:bg-red-900/10 p-2 rounded inline-block">IloveYouForever</p>
            <p>Too predictable. Strong passphrases use unrelated words.</p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Password vs Passphrase: Quick Comparison</h2>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse rounded-xl overflow-hidden">
                    <thead>
                        <tr className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
                            <th className="p-4">Feature</th>
                            <th className="p-4">Password</th>
                            <th className="p-4">Passphrase</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        <tr>
                            <td className="p-4 font-medium">Typical Length</td>
                            <td className="p-4 text-red-500">8–12 characters</td>
                            <td className="p-4 text-green-500">16–20+ characters</td>
                        </tr>
                        <tr>
                            <td className="p-4 font-medium">Easy to Remember</td>
                            <td className="p-4 text-red-500">❌ Usually no</td>
                            <td className="p-4 text-green-500">✅ Yes</td>
                        </tr>
                        <tr>
                            <td className="p-4 font-medium">Resistant to Brute Force</td>
                            <td className="p-4 text-yellow-500">⚠ Depends</td>
                            <td className="p-4 text-green-500">✅ Very strong</td>
                        </tr>
                         <tr>
                            <td className="p-4 font-medium">User-Friendly</td>
                            <td className="p-4 text-red-500">❌ Hard</td>
                            <td className="p-4 text-green-500">✅ Easier</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="font-bold text-center mt-4 text-xl">Winner for most users: <span className="text-green-600 dark:text-green-400">Passphrase</span></p>

            <div className="my-10 p-8 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-900/30 text-center">
                <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">Test Your Security</h3>
                <p className="text-blue-800 dark:text-blue-200 mb-6">Don’t assume your login is strong. Check your password score now.</p>
                <button 
                    onClick={() => onNavigate('tool')} 
                    className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg"
                >
                    <ShieldCheck size={20} />
                    Check Password Score
                </button>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">How to Create a Strong Passphrase</h2>
            <p>Simple method:</p>
            <ul className="space-y-3">
                 {[
                    "Pick 3–4 unrelated words",
                    "Add capitalization",
                    "Add a number or symbol",
                    "Make it 16+ characters"
                 ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                        <Check className="text-green-500" size={18} />
                        <span>{item}</span>
                    </li>
                 ))}
            </ul>
            <div className="mt-4 p-4 bg-gray-100 dark:bg-white/5 rounded-xl text-center font-mono font-bold text-lg text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-white/10">
                TigerRunsAtMidnight7!
            </div>
            <p className="text-center text-sm text-gray-500 mt-2">Easy to remember. Hard to crack.</p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Should You Switch to Passphrases?</h2>
            <p>If you’re still using short passwords, reused passwords, or slightly modified weak words — <strong>then yes.</strong></p>
            <p>Passphrases are a safer and more practical choice for most people.</p>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Final Thoughts</h2>
            <p>A strong password isn’t about looking complicated. It’s about being long, unique, and unpredictable.</p>
            <p>In most real-world cases: <strong>Passphrases win.</strong></p>
            <p className="font-bold text-xl mt-4">Now the real question is: Are you using the stronger option?</p>
            
            <div className="mt-8">
                 <button onClick={() => onNavigate('tool')} className="text-blue-600 hover:underline font-bold text-lg">👉 Find out your password score today.</button>
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
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    url: "#",
    content: (onNavigate) => (
        <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            <p>It’s a fair question. You’re typing your password into a tool. And you’re being told it’s “safe.”</p>
            <p className="font-semibold text-xl text-gray-900 dark:text-white">But is it really?</p>
            <p>Let’s break down how password strength checkers work — and when they’re secure.</p>
    
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">How Password Strength Checkers Work</h2>
            <p>A password strength checker analyzes:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-blue-500">
                <li>Length</li>
                <li>Character variety</li>
                <li>Pattern detection</li>
                <li>Common word usage</li>
                <li>Estimated crack time</li>
            </ul>
            <p>It doesn’t need your username. It doesn’t need your account. It just evaluates how strong the string is.</p>
            <p>But the real safety depends on <strong>where that analysis happens.</strong></p>
    
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">The Two Types of Password Checkers</h2>
            
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-white/10 my-8">
                <img 
                    src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800" 
                    alt="Secure code analysis" 
                    className="w-full h-48 sm:h-64 object-cover"
                />
                <div className="p-3 bg-gray-50 dark:bg-white/5 text-center text-xs text-gray-500">
                    Secure tools run code locally, not on remote servers.
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-2xl border border-green-100 dark:border-green-900/20">
                    <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-2 flex items-center gap-2">
                        <Check size={24} /> 1. Client-Side (Safe)
                    </h3>
                    <p className="mb-4">This is the secure version. Your password is analyzed directly in your browser using JavaScript. It is never sent to a server.</p>
                    <ul className="space-y-1 text-sm text-green-800 dark:text-green-300">
                        <li className="flex gap-2"><Check size={16} /> No storage</li>
                        <li className="flex gap-2"><Check size={16} /> No logging</li>
                        <li className="flex gap-2"><Check size={16} /> No transmission</li>
                    </ul>
                    <p className="mt-4 font-medium">The password stays on your device.</p>
                </div>
    
                <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-2xl border border-red-100 dark:border-red-900/20">
                    <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-2 flex items-center gap-2">
                        <XIcon size={24} /> 2. Server-Side (Risky)
                    </h3>
                    <p className="mb-4">Some tools send your password to a server for analysis.</p>
                    <ul className="space-y-1 text-sm text-red-800 dark:text-red-300">
                        <li className="flex gap-2"><XIcon size={16} /> It travels over the internet</li>
                        <li className="flex gap-2"><XIcon size={16} /> It could be logged</li>
                        <li className="flex gap-2"><XIcon size={16} /> It could be stored</li>
                    </ul>
                    <p className="mt-4 font-medium">You should avoid these.</p>
                </div>
            </div>
    
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">How to Know If a Password Checker Is Safe</h2>
            <p>Before using any tool, check:</p>
            <ul className="space-y-3">
                {[
                    "Does it say “runs locally in your browser”?",
                    "Does it mention “no data stored”?",
                    "Does it avoid asking for usernames or email?",
                    "Is it served over HTTPS?"
                ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                        <div className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full text-blue-600 dark:text-blue-400">
                            <Check size={14} strokeWidth={3} />
                        </div>
                        <span className="text-gray-800 dark:text-gray-200">{item}</span>
                    </li>
                ))}
            </ul>
            <p>If yes, it’s likely safe. If unclear, don’t use it.</p>
    
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">What Safe Password Checkers Do NOT Do</h2>
            <ul className="space-y-3">
                 <li className="flex items-center gap-3 text-red-500">
                    <XIcon size={20} /> <span>Save your password</span>
                 </li>
                 <li className="flex items-center gap-3 text-red-500">
                    <XIcon size={20} /> <span>Transmit your password</span>
                 </li>
                 <li className="flex items-center gap-3 text-red-500">
                    <XIcon size={20} /> <span>Link it to your identity</span>
                 </li>
                 <li className="flex items-center gap-3 text-red-500">
                    <XIcon size={20} /> <span>Store it in a database</span>
                 </li>
            </ul>
            <p>They simply calculate strength metrics instantly.</p>
    
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Why Testing Your Password Matters</h2>
            <p>Most people assume their password is strong. They’re wrong.</p>
            <p>Weak passwords often:</p>
            <ul className="list-disc pl-6 space-y-2">
                <li>Contain predictable patterns</li>
                <li>Use common substitutions</li>
                <li>Are too short</li>
                <li>Include real words</li>
            </ul>
            <p>Testing gives you clarity.</p>
    
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">The Safest Way to Test Your Password</h2>
            <p>Use a password strength checker that:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-green-500">
                <li>Runs entirely in your browser</li>
                <li>Performs real-time crack-time estimation</li>
                <li>Does not require login</li>
                <li>Has a clear privacy statement</li>
            </ul>
    
            <div className="my-10 p-8 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-900/30 text-center">
                <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">Check Your Password Score Now</h3>
                <p className="text-blue-800 dark:text-blue-200 mb-6">If the tool works instantly without refreshing the page, that’s usually a sign it’s running locally.</p>
                <button 
                    onClick={() => onNavigate('tool')} 
                    className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg"
                >
                    <ShieldCheck size={20} />
                    Test My Password
                </button>
            </div>
    
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Common Myths About Password Checkers</h2>
            <div className="space-y-4">
                 <div className="bg-gray-50 dark:bg-white/5 p-4 rounded-lg">
                    <strong className="block text-gray-900 dark:text-white mb-1">Myth 1: All online tools steal passwords</strong>
                    <span className="text-gray-600 dark:text-gray-400 flex items-center gap-2"><XIcon size={16} className="text-red-500"/> Not true — secure ones run locally.</span>
                 </div>
                 <div className="bg-gray-50 dark:bg-white/5 p-4 rounded-lg">
                    <strong className="block text-gray-900 dark:text-white mb-1">Myth 2: Testing makes your password vulnerable</strong>
                    <span className="text-gray-600 dark:text-gray-400 flex items-center gap-2"><XIcon size={16} className="text-red-500"/> Not if it never leaves your device.</span>
                 </div>
                 <div className="bg-gray-50 dark:bg-white/5 p-4 rounded-lg">
                    <strong className="block text-gray-900 dark:text-white mb-1">Myth 3: I don’t need to test it</strong>
                    <span className="text-gray-600 dark:text-gray-400 flex items-center gap-2"><XIcon size={16} className="text-red-500"/> Most people overestimate their password strength.</span>
                 </div>
            </div>
    
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">When You Should NOT Use a Password Checker</h2>
            <p>Never test:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-red-500">
                <li>Your banking password on a random unknown website</li>
                <li>Your main email password on suspicious tools</li>
                <li>Passwords on unsecured (HTTP) websites</li>
            </ul>
            <p className="italic text-gray-500">If in doubt, create a variation just for testing.</p>
    
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Final Verdict: Are They Safe?</h2>
            <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-600 dark:text-green-400 mt-1"><Check size={20} /></div>
                    <div>
                        <strong className="block text-lg text-gray-900 dark:text-white">Yes</strong>
                        <p>If they run locally in your browser and don’t store data.</p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-full text-red-600 dark:text-red-400 mt-1"><XIcon size={20} /></div>
                    <div>
                        <strong className="block text-lg text-gray-900 dark:text-white">No</strong>
                        <p>If they transmit or store your password.</p>
                    </div>
                </div>
            </div>
            <p className="mt-6">The key isn’t avoiding password checkers. The key is using the right one.</p>
    
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Final Thoughts</h2>
            <p>So now the real question is: <strong>Do you know whether your password is actually strong?</strong></p>
            
            <div className="mt-8">
                 <button onClick={() => onNavigate('tool')} className="text-blue-600 hover:underline font-bold text-lg">👉 Test it safely and find out.</button>
            </div>
        </div>
    )
  }
];