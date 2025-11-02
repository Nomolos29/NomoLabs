'use client';

import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Camera, Save } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Avatar from '@/components/common/Avatar';
import Alert from '@/components/common/Alert';

export default function StudentProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: 'David',
    lastName: 'Okafor',
    email: 'david.okafor@example.com',
    phone: '+234 801 234 5678',
    location: 'Lagos, Nigeria',
    bio: 'Aspiring full-stack developer passionate about creating innovative web solutions.',
    dateOfBirth: '1995-03-15',
    linkedIn: 'https://linkedin.com/in/davidokafor',
    github: 'https://github.com/davidokafor',
    portfolio: 'https://davidokafor.dev',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const learningStats = [
    { label: 'Courses Enrolled', value: '2' },
    { label: 'Courses Completed', value: '0' },
    { label: 'Total Study Hours', value: '45' },
    { label: 'Certificates Earned', value: '0' },
  ];

  return (
    <DashboardLayout
      userType="student"
      userName={`${formData.firstName} ${formData.lastName}`}
      userAvatar="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop"
      userEmail={formData.email}
    >
      <div className="p-8 bg-slate-50 min-h-screen">
        <div className="mb-6">
          <h1 className="text-lg font-semibold text-slate-800">Profile Settings</h1>
        </div>

        {showSuccess && (
          <div className="mb-6">
            <Alert type="success">
              Profile updated successfully!
            </Alert>
          </div>
        )}

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="xl:col-span-2">
            <Card className="bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-slate-800">Personal Information</h2>
                <Button
                  variant={isEditing ? 'secondary' : 'primary'}
                  onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                >
                  {isEditing ? <Save size={16} /> : <User size={16} />}
                  {isEditing ? 'Save Changes' : 'Edit Profile'}
                </Button>
              </div>

              {/* Avatar Section */}
              <div className="flex items-center gap-6 mb-8">
                <div className="relative">
                  <Avatar
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop"
                    alt={`${formData.firstName} ${formData.lastName}`}
                    size="xl"
                  />
                  {isEditing && (
                    <button className="absolute bottom-0 right-0 w-8 h-8 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white hover:bg-[var(--color-primary-dark)] transition-colors">
                      <Camera size={16} />
                    </button>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">{formData.firstName} {formData.lastName}</h3>
                  <p className="text-slate-600">Student</p>
                  <p className="text-sm text-slate-500 mt-1">Member since January 2025</p>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="First Name"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  disabled={!isEditing}
                  icon={User}
                />
                <Input
                  label="Last Name"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  disabled={!isEditing}
                  icon={User}
                />
                <Input
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  disabled={!isEditing}
                  icon={Mail}
                />
                <Input
                  label="Phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  disabled={!isEditing}
                  icon={Phone}
                />
                <Input
                  label="Location"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  disabled={!isEditing}
                  icon={MapPin}
                />
                <Input
                  label="Date of Birth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  disabled={!isEditing}
                  icon={Calendar}
                />
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">Bio</label>
                <textarea
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent disabled:bg-slate-100 disabled:text-slate-500"
                  rows={4}
                  value={formData.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                  disabled={!isEditing}
                  placeholder="Tell us about yourself..."
                />
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Social Links</h3>
                <div className="space-y-4">
                  <Input
                    label="LinkedIn"
                    value={formData.linkedIn}
                    onChange={(e) => handleInputChange('linkedIn', e.target.value)}
                    disabled={!isEditing}
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                  <Input
                    label="GitHub"
                    value={formData.github}
                    onChange={(e) => handleInputChange('github', e.target.value)}
                    disabled={!isEditing}
                    placeholder="https://github.com/yourusername"
                  />
                  <Input
                    label="Portfolio"
                    value={formData.portfolio}
                    onChange={(e) => handleInputChange('portfolio', e.target.value)}
                    disabled={!isEditing}
                    placeholder="https://yourportfolio.com"
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* Stats Sidebar */}
          <div className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Learning Stats</h3>
              <div className="space-y-4">
                {learningStats.map((stat, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-slate-600">{stat.label}</span>
                    <span className="font-semibold text-slate-800">{stat.value}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Account Settings</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  Change Password
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Notification Settings
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Privacy Settings
                </Button>
                <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
                  Delete Account
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}