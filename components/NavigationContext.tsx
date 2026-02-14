import React, { createContext, useContext, useState, ReactNode, PropsWithChildren } from 'react';
import { PageView } from '../types';

interface NavigationContextType {
  view: PageView;
  slug: string | null;
  navigate: (view: PageView, slug?: string) => void;
  pathname: string;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: PropsWithChildren) {
  const [view, setView] = useState<PageView>('home');
  const [slug, setSlug] = useState<string | null>(null);

  const navigate = (newView: PageView, newSlug?: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setView(newView);
    if (newSlug) setSlug(newSlug);
    else setSlug(null);
  };

  const pathname = view === 'home' ? '/' : (view === 'blog-post' ? `/blog/${slug}` : `/${view}`);

  return (
    <NavigationContext.Provider value={{ view, slug, navigate, pathname }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}