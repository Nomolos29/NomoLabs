import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'orange' | 'green' | 'yellow' | 'gray';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary', className = '' }) => {
  const variants = {
    primary: 'bg-[var(--color-primary-light)] bg-opacity-20 text-[var(--color-primary-dark)]',
    secondary: 'bg-slate-100 text-slate-700',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    danger: 'bg-red-100 text-red-700',
    info: 'bg-blue-100 text-blue-700',
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
