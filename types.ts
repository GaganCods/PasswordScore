import React from 'react';

export type PageView = 'home' | 'tool' | 'privacy' | 'contact' | 'blog' | 'blog-post';

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  url: string;
  content?: React.ReactNode | ((onNavigate: (page: PageView) => void) => React.ReactNode);
}

export type StrengthLevel = 'very-weak' | 'weak' | 'medium' | 'strong' | 'very-strong';

export interface StrengthResult {
  strength: StrengthLevel;
  score: number;
  entropy: number;
  poolSize: number;
  combinations: number;
  length: number;
  hasLower: boolean;
  hasUpper: boolean;
  hasNumber: boolean;
  hasSymbol: boolean;
}

export interface CrackTimeScenarios {
  basic: string;
  gpu: string;
  botnet: string;
}

export type GeneratorMode = 'random' | 'memorable' | 'passphrase';

export interface PasswordGeneratorConfig {
  mode: GeneratorMode;
  // Random Mode Settings
  length: number;
  useLower: boolean;
  useUpper: boolean;
  useNumbers: boolean;
  useSymbols: boolean;
  excludeAmbiguous: boolean;
  requireAllTypes: boolean; // "Ensure every selected type is included"
  customChars: string;
  
  // Passphrase Settings
  wordCount: number;
  separator: string;
  capitalize: boolean;
  includeNumber: boolean; // Append a number
}