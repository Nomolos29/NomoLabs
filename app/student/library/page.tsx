'use client';

import React, { useState } from 'react';
import { FileText, Download, Video, BookOpen, Search, Filter } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Card from '@/components/common/Card';
import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';

export default function StudentLibrary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const materials = [
    {
      id: '1',
      title: 'React Hooks Complete Guide',
      type: 'pdf',
      category: 'Web Development',
      size: '2.4 MB',
      downloadCount: 156,
      uploadDate: 'Oct 1, 2025',
      description: 'Comprehensive guide to React Hooks with examples',
    },
    {
      id: '2',
      title: 'JavaScript ES6+ Cheat Sheet',
      type: 'pdf',
      category: 'Web Development',
      size: '1.2 MB',
      downloadCount: 203,
      uploadDate: 'Sep 28, 2025',
      description: 'Quick reference for modern JavaScript features',
    },
    {
      id: '3',
      title: 'CSS Grid Layout Workshop',
      type: 'video',
      category: 'Web Development',
      size: '45.6 MB',
      downloadCount: 89,
      uploadDate: 'Sep 25, 2025',
      description: 'Live workshop recording on CSS Grid',
    },
    {
      id: '4',
      title: 'Project Setup Template',
      type: 'zip',
      category: 'Web Development',
      size: '5.8 MB',
      downloadCount: 134,
      uploadDate: 'Sep 22, 2025',
      description: 'Starter template for React projects',
    },
    {
      id: '5',
      title: 'API Integration Examples',
      type: 'pdf',
      category: 'Web Development',
      size: '3.1 MB',
      downloadCount: 98,
      uploadDate: 'Sep 20, 2025',
      description: 'Real-world API integration patterns',
    },
  ];

  const categories = ['all', 'Web Development', 'UI/UX Design', 'Content Writing'];

  const filteredMaterials = materials.filter(material => {
    const matchesSearch = material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         material.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || material.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'video':
        return Video;
      case 'pdf':
        return FileText;
      case 'zip':
        return BookOpen;
      default:
        return FileText;
    }
  };

  const getFileColor = (type: string) => {
    switch (type) {
      case 'video':
        return 'from-red-500 to-pink-500';
      case 'pdf':
        return 'from-blue-500 to-indigo-500';
      case 'zip':
        return 'from-green-500 to-emerald-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
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
          <h1 className="text-lg font-semibold text-slate-800">Study Library</h1>
        </div>

        {/* Search and Filter */}
        <Card className="mb-6 bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Search materials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                icon={Search}
              />
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'primary' : 'ghost'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === 'all' ? 'All' : category}
                </Button>
              ))}
            </div>
          </div>
        </Card>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredMaterials.map((material) => {
            const FileIcon = getFileIcon(material.type);
            const colorClass = getFileColor(material.type);
            
            return (
              <Card key={material.id} className="bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm hover:shadow-lg hover:border-slate-200 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${colorClass} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <FileIcon size={24} className="text-white" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-slate-800 truncate">{material.title}</h3>
                      <Badge variant="secondary">{material.type.toUpperCase()}</Badge>
                    </div>
                    
                    <p className="text-slate-600 text-sm mb-3 line-clamp-2">{material.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-xs text-slate-500 mb-4">
                      <div>Size: {material.size}</div>
                      <div>Downloads: {material.downloadCount}</div>
                      <div>Category: {material.category}</div>
                      <div>Added: {material.uploadDate}</div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="primary" size="sm">
                        <Download size={16} />
                        Download
                      </Button>
                      {material.type === 'video' && (
                        <Button variant="outline" size="sm">
                          <Video size={16} />
                          Watch
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {filteredMaterials.length === 0 && (
          <Card className="text-center py-12 border border-slate-200">
            <BookOpen size={48} className="mx-auto text-slate-400 mb-4" />
            <h3 className="text-lg font-semibold text-slate-600 mb-2">No materials found</h3>
            <p className="text-slate-500">Try adjusting your search or filter criteria</p>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}