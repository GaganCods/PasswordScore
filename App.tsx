import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { CosmicBackground } from './components/CosmicBackground';
import { ThemeProvider } from './components/ThemeProvider';

// Pages
import { Home } from './pages/Home';
import { Tool } from './pages/Tool';
import { Blog } from './pages/Blog';
import { BlogArticle } from './pages/BlogArticle';

const App: React.FC = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col relative overflow-x-hidden">
        <CosmicBackground />
        
        <Navbar />

        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tool" element={<Tool />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogArticle />} />
            {/* Fallback for 404s can go to Home or a dedicated 404 page */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
};

export default App;