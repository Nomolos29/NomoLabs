import React from 'react';

interface ProgressBarProps {
  progress: number;
  color?: 'primary' | 'orange' | 'green';
  showPercentage?: boolean;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  color = 'primary',
  showPercentage = true,
  className = ''
}) => {
  const colors = {
    primary: 'bg-[var(--color-primary)]',
    orange: 'bg-[var(--color-accent-orange)]',
    green: 'bg-[var(--color-accent-green)]',
  };

  return (
    <div className={`w-full ${className}`}>
      {showPercentage && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-[var(--color-neutral-gray-900)]">
            {progress}%
          </span>
        </div>
      )}
      <div className="w-full h-2 bg-[var(--color-neutral-gray-100)] rounded-full overflow-hidden">
        <div
          className={`h-full ${colors[color]} transition-all duration-500 ease-out`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
