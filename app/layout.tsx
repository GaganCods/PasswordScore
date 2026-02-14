import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'PasswordScore – Free Password Strength Checker Online',
  description: 'Check your password strength instantly with PasswordScore. See crack time, security score, and tips to create stronger passwords. 100% private and secure.',
  openGraph: {
    title: 'PasswordScore – Check Your Password Strength',
    description: 'Instant, private password analysis tool.',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased text-gray-900 dark:text-gray-100 selection:bg-indigo-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}