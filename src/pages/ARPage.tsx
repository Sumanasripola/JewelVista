import React, { useRef, useCallback } from 'react';
import VirtualTryOn, { VirtualTryOnHandle } from '../components/VirtualTryOn';
import { virtualJewels, VirtualJewelryItem } from '../data/virtualJewels';
import { useNavigate } from 'react-router-dom';

const ARPage: React.FC = () => {
  const virtualTryOnRef = useRef<VirtualTryOnHandle | null>(null);
  const navigate = useNavigate();

  const handleJewelrySelect = useCallback((item: VirtualJewelryItem) => {
    // ⬅️ Now we call the child component's method directly
    virtualTryOnRef.current?.updateJewelry(item);
  }, []);

  const handleBackClick = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 font-inter">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Virtual Jewelry Try-On</h1>
      
      <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden mb-6">
        {/* ⬅️ We pass the ref to the child component */}
        <VirtualTryOn ref={virtualTryOnRef} />
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button
          onClick={handleBackClick}
          className="px-6 py-3 rounded-full text-white font-semibold shadow-md transition-all duration-300 bg-red-500 hover:bg-red-600"
        >
          &larr; Back to Home
        </button>
      </div>

      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-xl">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Select Jewelry to Try On:</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {virtualJewels.map((item) => (
            <button
              key={item.id}
              onClick={() => handleJewelrySelect(item)}
              className="flex flex-col items-center p-3 rounded-lg border-2 transition-all duration-200"
            >
              <img
                src={`https://placehold.co/80x80/cccccc/333333?text=${item.name.replace(/\s/g, '+')}`}
                alt={item.name}
                className="w-20 h-20 object-contain mb-2 rounded-md"
              />
              <span className="text-sm font-medium text-gray-700 text-center">{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ARPage;