import React, { useState, useEffect } from 'react';
import JewelCard from '../components/JewelCard';
import { Search, Filter } from 'lucide-react';
import { jewels, Jewel } from '../data/jewels';

const CollectionPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [filteredJewels, setFilteredJewels] = useState<Jewel[]>(jewels);
  
  const categories = Array.from(new Set(jewels.map(jewel => jewel.category)));
  
  useEffect(() => {
    let result = jewels;
    
    if (searchQuery) {
      result = result.filter(jewel => 
        jewel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        jewel.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (selectedCategory) {
      result = result.filter(jewel => jewel.category === selectedCategory);
    }
    
    setFilteredJewels(result);
  }, [searchQuery, selectedCategory]);
  
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen pt-24 pb-16 px-6 md:px-12">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-8 text-center">Our Collection</h1>
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search jewelry..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-amber-400 focus:border-transparent dark:bg-slate-800 dark:text-white"
            />
          </div>
          
          <div className="relative">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-slate-500 dark:text-slate-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-white rounded-lg p-3 focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredJewels.length > 0 ? (
            filteredJewels.map(jewel => (
              <JewelCard
                key={jewel.id}
                id={jewel.id}
                name={jewel.name}
                description={jewel.description}
                imageUrl={jewel.imageUrl}
                modelPath={jewel.modelPath}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-slate-600 dark:text-slate-300">No jewelry found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;