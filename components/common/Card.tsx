import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'large' | 'colored';
  hover?: boolean;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  hover = true,
  className = '',
  ...props
}) => {
  const variants = {
    default: 'bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-card)] p-4 sm:p-6 lg:p-8',
    large: 'bg-white rounded-[var(--radius-card-lg)] shadow-[var(--shadow-card)] p-4 sm:p-6 lg:p-8',
    colored: 'rounded-[var(--radius-card)] shadow-[var(--shadow-card)] p-4 sm:p-6 lg:p-8',
  };

  return (
    <div
      className={`${variants[variant]} ${hover ? 'hover:shadow-[var(--shadow-card-lg)] transition-all duration-300' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
