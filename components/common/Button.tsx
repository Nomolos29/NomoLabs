import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2';

  const variants = {
    primary: 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-white shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-lg)] hover:-translate-y-0.5',
    secondary: 'bg-[var(--color-accent-orange)] text-white shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-lg)] hover:-translate-y-0.5',
    outline: 'border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white',
    ghost: 'text-[var(--color-primary)] hover:bg-[var(--color-primary-light)] hover:bg-opacity-10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${
        (disabled || loading) ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loader2 className="animate-spin" size={18} />}
      {children}
    </button>
  );
};

export default Button;
