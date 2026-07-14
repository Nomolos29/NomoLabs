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
  const baseStyles =
    'font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2';

  const variants = {
    primary:
      'bg-[var(--color-primary)] text-[var(--color-neutral-gray-900)] shadow-[var(--shadow-soft)] hover:bg-[var(--color-neutral-gray-900)] hover:text-white',
    secondary:
      'bg-[var(--color-secondary)] text-[var(--color-neutral-gray-900)] shadow-[var(--shadow-soft)] hover:bg-[var(--color-neutral-gray-900)] hover:text-white',
    outline:
      'border-2 border-[var(--color-neutral-gray-900)] text-[var(--color-neutral-gray-900)] hover:bg-[var(--color-neutral-gray-900)] hover:text-white',
    ghost:
      'text-[var(--color-neutral-gray-900)] hover:bg-[var(--color-neutral-bg-2)]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base',
    lg: 'px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${
        disabled || loading ? 'opacity-50 cursor-not-allowed' : ''
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
