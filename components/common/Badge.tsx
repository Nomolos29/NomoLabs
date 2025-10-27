import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'orange' | 'green' | 'yellow' | 'gray';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary', className = '' }) => {
  const variants = {
    primary: 'bg-[var(--color-primary-light)] bg-opacity-20 text-[var(--color-primary-dark)]',
    orange: 'bg-[var(--color-accent-orange)] bg-opacity-10 text-[var(--color-accent-orange)]',
    green: 'bg-[var(--color-accent-green)] bg-opacity-10 text-green-800',
    yellow: 'bg-[var(--color-accent-yellow)] bg-opacity-20 text-yellow-800',
    gray: 'bg-[var(--color-neutral-gray-100)] text-[var(--color-neutral-gray-900)]',
  };

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
