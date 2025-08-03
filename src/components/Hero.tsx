import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-24 flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-1">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Explore Exquisite <span className="text-amber-400">3D Jewelry</span> Models
          </h1>
          
          <p className="text-xl text-slate-200 mb-8 opacity-0 animate-fade-in animation-delay-300">
            Discover stunning 3D visualizations of handcrafted jewelry pieces. Browse our collection and explore every intricate detail.
          </p>
          
          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in animation-delay-600">
            <a 
              href="#collection" 
              className="bg-amber-400 hover:bg-amber-500 text-slate-900 px-6 py-3 rounded-lg font-medium flex items-center group transition-colors"
            >
              View Collection
              <ChevronRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            
            <a 
              href="#about" 
              className="bg-transparent text-white border border-white hover:border-amber-400 hover:text-amber-400 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;