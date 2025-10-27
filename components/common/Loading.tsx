import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingProps {
  fullPage?: boolean;
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

const Loading: React.FC<LoadingProps> = ({ fullPage = false, size = 'md', text }) => {
  const sizes = {
    sm: 24,
    md: 40,
    lg: 64,
  };

  const loader = (
    <div className="flex flex-col items-center justify-center gap-4">
      <Loader2
        size={sizes[size]}
        className="animate-spin text-[var(--color-primary)]"
      />
      {text && <p className="text-[var(--color-neutral-gray-500)]">{text}</p>}
    </div>
  );

  if (fullPage) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90 z-50">
        {loader}
      </div>
    );
  }

  return loader;
};

export default Loading;
