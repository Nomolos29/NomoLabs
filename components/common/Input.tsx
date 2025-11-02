import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: LucideIcon;
}

const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  error,
  icon: Icon,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-semibold text-[var(--color-neutral-gray-900)] mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <Icon size={20} className="text-slate-400" />
          </div>
        )}
        <input
          type={type}
          className={`w-full ${Icon ? 'pl-12' : 'pl-4'} pr-4 py-3 rounded-lg border-2 ${
            error ? 'border-red-500' : 'border-[var(--color-neutral-gray-100)]'
          } focus:border-[var(--color-primary)] focus:outline-none transition-colors ${className}`}
          {...props}
        />
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
