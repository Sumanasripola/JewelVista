import React from 'react';
import Hero from '../components/Hero';
import JewelGallery from '../components/JewelGallery';
import About from '../components/About';
// The useNavigate hook is no longer needed since we are not navigating
// import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  // This function will now open a new window with your desired URL
  const handleARClick = () => {
    window.open('https://www.8thwall.com/arstud/jewelvi/studio', '_blank');
  };

  return (
    <>
      <Hero />
      <div id="collection">
        <JewelGallery />
      </div>

      <div className="flex flex-col items-center justify-center my-12">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4 text-center">
          AR Experience
        </h2>
        <button
          onClick={handleARClick}
          className="text-white bg-blue-600 hover:bg-blue-700 font-semibold py-3 px-6 rounded-full shadow-lg transition-colors duration-300"
        >
          Click to Experience
        </button>
      </div>

      <About />
    </>
  );
};

export default HomePage;