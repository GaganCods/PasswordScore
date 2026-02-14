import { Metadata } from 'next';
import { BlogPage } from '@/components/BlogPage';

export const metadata: Metadata = {
  title: 'Password Security Blog | Cybersecurity Tips & Guides',
  description: 'Learn about password security, best practices, and how to stay safe online. Read expert guides on creating unbreakable passwords.',
};

export default function BlogListing() {
  return <BlogPage />;
}