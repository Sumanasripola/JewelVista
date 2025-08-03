import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Stage } from '@react-three/drei';

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

interface ModelViewerProps {
  modelPath: string;
  onClose: () => void;
}

const ModelViewer: React.FC<ModelViewerProps> = ({ modelPath, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
      <div className="relative w-full h-full max-w-4xl max-h-[80vh] m-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Close
        </button>
        
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
          <Suspense fallback={null}>
            <Stage environment="city" intensity={0.6}>
              <Model url={modelPath} />
            </Stage>
          </Suspense>
          <OrbitControls autoRotate />
        </Canvas>
      </div>
    </div>
  );
};

export default ModelViewer;