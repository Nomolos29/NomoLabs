import React from 'react';
import { CreditCard, Building2, Shield } from 'lucide-react';
import Container from '../layout/Container';

const PaymentMethods = () => {
  return (
    <section className="py-12 bg-white">
      <Container>
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Secure Payment Options</h3>
          <p className="text-[var(--color-neutral-gray-500)]">
            Multiple payment methods powered by Paystack
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <div className="flex items-center gap-2">
            <CreditCard size={24} className="text-[var(--color-primary)]" />
            <span className="font-semibold">Visa</span>
          </div>
          <div className="flex items-center gap-2">
            <CreditCard size={24} className="text-[var(--color-primary)]" />
            <span className="font-semibold">Mastercard</span>
          </div>
          <div className="flex items-center gap-2">
            <Building2 size={24} className="text-[var(--color-primary)]" />
            <span className="font-semibold">Bank Transfer</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded font-bold text-sm">
              paystack
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-[var(--color-accent-green)]">
          <Shield size={20} />
          <span className="font-semibold">Secure payment powered by Paystack</span>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent-green)] bg-opacity-10 rounded-full">
            <Shield size={20} className="text-[var(--color-accent-green)]" />
            <span className="font-semibold text-[var(--color-accent-green)]">
              7-Day Money-Back Guarantee
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PaymentMethods;
