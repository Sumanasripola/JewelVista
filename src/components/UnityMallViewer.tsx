import React from 'react';

const UnityMallViewer: React.FC = () => {
  const unityMallUrl = "/unity-mall/index.html"; 

  return (
    // This container div will now make the iframe fill the entire viewport
    // without any overlay text.
    <div className="relative w-full h-screen overflow-hidden">
      <iframe
        src={unityMallUrl}
        title="Unity 3D Mall Experience"
        className="w-full h-full border-0"
        allowFullScreen
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default UnityMallViewer;
