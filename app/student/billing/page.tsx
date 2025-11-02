'use client';

import React, { useState } from 'react';
import { CreditCard, Download, Calendar, CheckCircle, AlertCircle } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Card from '@/components/common/Card';
import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';

export default function StudentBilling() {
  const [activeTab, setActiveTab] = useState<'transactions' | 'invoices'>('transactions');

  const transactions = [
    {
      id: 'txn-001',
      description: 'Web Development Fundamentals - Cohort 5',
      amount: 50000,
      currency: 'NGN',
      status: 'completed',
      date: '2025-01-10',
      method: 'Card',
      reference: 'PAY-001-2025',
    },
    {
      id: 'txn-002',
      description: 'UI/UX Design Masterclass - Cohort 3',
      amount: 50000,
      currency: 'NGN',
      status: 'completed',
      date: '2025-01-12',
      method: 'Bank Transfer',
      reference: 'PAY-002-2025',
    },
    {
      id: 'txn-003',
      description: 'Course Bundle Discount',
      amount: -10000,
      currency: 'NGN',
      status: 'completed',
      date: '2025-01-12',
      method: 'Credit',
      reference: 'DISC-001-2025',
    },
  ];

  const invoices = [
    {
      id: 'inv-001',
      number: 'INV-2025-001',
      description: 'Web Development Fundamentals',
      amount: 50000,
      currency: 'NGN',
      status: 'paid',
      issueDate: '2025-01-10',
      dueDate: '2025-01-17',
    },
    {
      id: 'inv-002',
      number: 'INV-2025-002',
      description: 'UI/UX Design Masterclass',
      amount: 50000,
      currency: 'NGN',
      status: 'paid',
      issueDate: '2025-01-12',
      dueDate: '2025-01-19',
    },
  ];

  const totalSpent = transactions
    .filter(t => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <DashboardLayout
      userType="student"
      userName="David Okafor"
      userAvatar="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop"
      userEmail="david.okafor@example.com"
    >
      <div className="p-8 bg-slate-50 min-h-screen">
        <div className="mb-6">
          <h1 className="text-lg font-semibold text-slate-800">Billing & Payments</h1>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <CreditCard size={24} className="text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-800">{formatCurrency(totalSpent, 'NGN')}</p>
                <p className="text-slate-600">Total Spent</p>
              </div>
            </div>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <CheckCircle size={24} className="text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-800">{transactions.filter(t => t.status === 'completed').length}</p>
                <p className="text-slate-600">Completed Payments</p>
              </div>
            </div>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-lg flex items-center justify-center">
                <Calendar size={24} className="text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-800">2</p>
                <p className="text-slate-600">Active Courses</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <Button
            variant={activeTab === 'transactions' ? 'primary' : 'ghost'}
            onClick={() => setActiveTab('transactions')}
          >
            Transactions
          </Button>
          <Button
            variant={activeTab === 'invoices' ? 'primary' : 'ghost'}
            onClick={() => setActiveTab('invoices')}
          >
            Invoices
          </Button>
        </div>

        {/* Transactions Tab */}
        {activeTab === 'transactions' && (
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <Card key={transaction.id} className="bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm hover:shadow-lg hover:border-slate-200 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant={transaction.status === 'completed' ? 'success' : 'warning'}>
                        {transaction.status}
                      </Badge>
                      <Badge variant="secondary">{transaction.method}</Badge>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">{transaction.description}</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        {new Date(transaction.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2">
                        <CreditCard size={16} />
                        Ref: {transaction.reference}
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle size={16} />
                        {transaction.method}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className={`text-2xl font-bold ${transaction.amount > 0 ? 'text-slate-800' : 'text-green-600'}`}>
                      {transaction.amount > 0 ? '' : '+'}{formatCurrency(Math.abs(transaction.amount), transaction.currency)}
                    </p>
                    <Button variant="outline" size="sm" className="mt-2">
                      <Download size={16} />
                      Receipt
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Invoices Tab */}
        {activeTab === 'invoices' && (
          <div className="space-y-4">
            {invoices.map((invoice) => (
              <Card key={invoice.id} className="bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm hover:shadow-lg hover:border-slate-200 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant={invoice.status === 'paid' ? 'success' : 'warning'}>
                        {invoice.status}
                      </Badge>
                      <span className="text-sm text-slate-600">{invoice.number}</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">{invoice.description}</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        Issued: {new Date(invoice.issueDate).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2">
                        <AlertCircle size={16} />
                        Due: {new Date(invoice.dueDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-2xl font-bold text-slate-800">
                      {formatCurrency(invoice.amount, invoice.currency)}
                    </p>
                    <Button variant="outline" size="sm" className="mt-2">
                      <Download size={16} />
                      Download
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}