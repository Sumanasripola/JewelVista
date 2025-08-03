import React from 'react';
import UnityMallViewer from '../components/UnityMallViewer';
import { useNavigate } from 'react-router-dom';

const MallPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/'); // Or navigate to a more appropriate previous page
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-900 pt-24 pb-16 px-6 md:px-12 flex flex-col items-center">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-2">
          Virtual Shopping Mall
        </h1>
        {/* Creative sentence added here, outside the Unity viewer */}
        <p className="text-xl text-gray-600 dark:text-slate-300 mb-6 text-center">
          Step into a new dimension of retail therapy!
        </p>

        {/* Instructions added here, also outside the Unity viewer */}
        <div className="flex flex-col items-center justify-center p-4 bg-gray-200 dark:bg-slate-800 rounded-lg shadow-md mb-8">
          <p className="text-xl font-bold mb-2 text-slate-800 dark:text-white">
            Instructions:
          </p>
          <ul className="text-md text-slate-600 dark:text-slate-400 list-disc list-inside text-left">
            <li>To view the mall, just right click anywhere on the mall so that the access moves to your mouse.</li>
            <li>To remove the control on the mouse, click on the "esc" button.</li>
            <li>If you are on full-screen mode, click "esc" 2 times i.e., one for exiting the full screen and another for removing the control from the mouse.</li>
            <li>If you want to scroll up to the header donot scroll on the mall.</li>
          </ul>
        </div>

        <UnityMallViewer />

        <div className="flex justify-center mt-8">
          <button
            onClick={handleBackClick}
            className="px-6 py-3 rounded-full text-white font-semibold shadow-md transition-all duration-300 bg-blue-600 hover:bg-blue-700"
          >
            &larr; Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default MallPage;
