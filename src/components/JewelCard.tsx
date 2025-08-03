import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import ModelViewer from './ModelViewer';

interface JewelCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  modelPath: string;
}

const JewelCard: React.FC<JewelCardProps> = ({ id, name, description, imageUrl, modelPath }) => {
  const [showModel, setShowModel] = useState(false);
  
  const handleViewModel = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowModel(true);
  };
  
  return (
    <>
      <div 
        className="group bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="relative overflow-hidden">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <a 
              href="#"
              onClick={handleViewModel}
              className="bg-amber-400 hover:bg-amber-500 text-slate-900 px-4 py-2 rounded-lg flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            >
              <ExternalLink size={16} />
              <span>View 3D Model</span>
            </a>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">{name}</h3>
          <p className="text-slate-600 dark:text-slate-300 text-sm">{description}</p>
        </div>
      </div>
      
      {showModel && (
        <ModelViewer
          modelPath={modelPath}
          onClose={() => setShowModel(false)}
        />
      )}
    </>
  );
};

export default JewelCard;