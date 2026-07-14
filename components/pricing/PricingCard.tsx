import React from 'react';
import { Check } from 'lucide-react';
import Card from '../common/Card';
import Button from '../common/Button';
import Badge from '../common/Badge';

interface PricingCardProps {
  title: string;
  price: number;
  usdPrice: number;
  features: string[];
  popular?: boolean;
  discount?: string;
  ctaText?: string;
  onSelect: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  usdPrice,
  features,
  popular = false,
  discount,
  ctaText = 'Get Started',
  onSelect,
}) => {
  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="relative">
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <Badge variant="orange" className="px-4 py-2 text-sm">
            MOST POPULAR
          </Badge>
        </div>
      )}
      <Card
        className={`h-full flex flex-col ${
          popular ? 'border-2 border-[var(--color-primary)] shadow-[var(--shadow-card-lg)]' : ''
        }`}
      >
        <h3 className="text-xl sm:text-2xl font-bold mb-4">{title}</h3>

        <div className="mb-6">
          <div className="flex flex-wrap items-baseline gap-2">
            <p className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)]">
              {formatPrice(price)}
            </p>
            {discount && (
              <Badge variant="green" className="text-xs">
                {discount}
              </Badge>
            )}
          </div>
          <p className="text-[var(--color-neutral-gray-500)] mt-1">
            or ${usdPrice}
          </p>
        </div>

        <ul className="space-y-4 mb-8 flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check size={20} className="text-[var(--color-accent-green)] flex-shrink-0 mt-0.5" />
              <span className="text-[var(--color-neutral-gray-500)]">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          variant={popular ? 'primary' : 'secondary'}
          className="w-full"
          size="lg"
          onClick={onSelect}
        >
          {ctaText}
        </Button>
      </Card>
    </div>
  );
};

export default PricingCard;
