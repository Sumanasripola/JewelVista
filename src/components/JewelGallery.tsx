import React, { useState } from 'react';
import JewelCard from './JewelCard';
import { Search } from 'lucide-react';
import { jewels } from '../data/jewels';

const JewelGallery: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredJewels = jewels.filter(jewel => 
    jewel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    jewel.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <section className="py-16 px-6 md:px-12 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-8 text-center">Our Collection</h2>
        
        <div className="relative max-w-md mx-auto mb-12">
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
    </section>
  );
};

export default JewelGallery;