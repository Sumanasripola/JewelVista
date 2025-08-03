import React from 'react';
import { Diamond } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-4 px-6 md:px-12 lg:px-24 shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center space-x-2 group"
        >
          <Diamond className="h-7 w-7 text-amber-400 group-hover:text-amber-300 transition-colors duration-300" />
          <span className="text-2xl font-semibold tracking-tight">
            Jewel<span className="text-amber-400 group-hover:text-amber-300 transition-colors duration-300">Vista</span>
          </span>
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-amber-300 transition-colors duration-200">Home</Link>
          <Link to="/collection" className="hover:text-amber-300 transition-colors duration-200">Collection</Link>
          {/* NEW: Added link to the Virtual Mall */}
          <Link to="/mall" className="hover:text-amber-300 transition-colors duration-200">Virtual Mall</Link>
          <Link to="/about" className="hover:text-amber-300 transition-colors duration-200">About</Link>
          <Link to="/contact" className="hover:text-amber-300 transition-colors duration-200">Contact</Link>
        </nav>

        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;