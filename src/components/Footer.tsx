import React from 'react';
import { Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-slate-200 py-12 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-amber-400 font-semibold text-lg mb-4">JewelVista</h3>
            <p className="text-slate-300 mb-4 max-w-md">
              Explore our exquisite 3D jewelry models showcasing the finest craftsmanship and design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-amber-400 font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#" className="text-slate-300 hover:text-amber-400 transition-colors">Collection</a></li>
              <li><a href="#" className="text-slate-300 hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-300 hover:text-amber-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-amber-400 font-semibold text-lg mb-4">Contact Us</h3>
            <address className="not-italic text-slate-300">
              <p className="flex items-center space-x-2 mb-2">
                <Mail size={16} />
                <span>contact@jewelvista.com</span>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; {currentYear} JewelVista. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;