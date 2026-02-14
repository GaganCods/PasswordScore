import React from 'react';
import { useNavigation } from './NavigationContext';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const Link: React.FC<LinkProps> = ({ href, children, onClick, ...props }) => {
  const { navigate } = useNavigation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onClick) onClick(e);

    // Simple routing logic based on href
    if (href === '/') navigate('home');
    else if (href === '/tool') navigate('tool');
    else if (href === '/blog') navigate('blog');
    else if (href === '/privacy') navigate('privacy');
    else if (href === '/contact') navigate('contact');
    else if (href.startsWith('/blog/')) {
        const slug = href.split('/blog/')[1];
        navigate('blog-post', slug);
    }
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};