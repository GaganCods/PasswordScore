import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LandingPage } from './components/LandingPage';
import { PasswordStrengthTool } from './components/PasswordStrengthTool';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { ContactPage } from './components/ContactPage';
import { BlogPage } from './components/BlogPage';
import { BlogPostView } from './components/BlogPost';
import { CosmicBackground } from './components/CosmicBackground';
import { BackToTop } from './components/BackToTop';
import { ThemeProvider } from './components/ThemeProvider';
import { NavigationProvider, useNavigation } from './components/NavigationContext';
import { BLOG_POSTS } from './data/blogPosts';

const AppContent: React.FC = () => {
  const { view, slug } = useNavigation();

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
        
        <CosmicBackground />

        <Header />

        <main className="flex-grow pt-24"> 
          {/* pt-24 accounts for fixed header height */}
          {view === 'home' && (
            <LandingPage />
          )}
          
          {view === 'tool' && (
              <PasswordStrengthTool />
          )}

          {view === 'blog' && (
              <BlogPage />
          )}

          {view === 'blog-post' && slug && (
              <BlogPostView 
                post={BLOG_POSTS.find(p => p.slug === slug)!} 
              />
          )}

          {view === 'privacy' && (
              <PrivacyPolicy />
          )}

          {view === 'contact' && (
              <ContactPage />
          )}
        </main>

        <Footer />
        <BackToTop />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <AppContent />
      </NavigationProvider>
    </ThemeProvider>
  );
};

export default App;