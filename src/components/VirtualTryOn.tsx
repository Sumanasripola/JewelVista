import React, { useRef, useEffect, useCallback, forwardRef, useImperativeHandle, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { FaceMesh } from '@mediapipe/face_mesh';
import { Hands } from '@mediapipe/hands';
import Webcam from 'react-webcam';
import { VirtualJewelryItem } from '../data/virtualJewels';

export interface VirtualTryOnHandle {
  updateJewelry: (item: VirtualJewelryItem | null) => void;
}

const VirtualTryOn = forwardRef<VirtualTryOnHandle, {}>((props, ref) => {
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [webcamLoaded, setWebcamLoaded] = useState(false);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const gltfLoaderRef = useRef<GLTFLoader | null>(null);
  const jewelryObjectRef = useRef<THREE.Object3D | null>(null);

  const faceMeshRef = useRef<FaceMesh | null>(null);
  const handsRef = useRef<Hands | null>(null);
  const selectedJewelryRef = useRef<VirtualJewelryItem | null>(null);
  const animationFrameId = useRef<number | null>(null);
  const isInitialized = useRef(false); // New flag to track Mediapipe initialization

  // THREE.js setup
  useEffect(() => {
    const initThree = () => {
      if (!canvasRef.current) return;
      sceneRef.current = new THREE.Scene();
      cameraRef.current = new THREE.PerspectiveCamera(75, canvasRef.current.clientWidth / canvasRef.current.clientHeight, 0.1, 1000);
      rendererRef.current = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
      rendererRef.current.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
      rendererRef.current.setPixelRatio(window.devicePixelRatio);
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      sceneRef.current.add(ambientLight);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(0, 1, 1);
      sceneRef.current.add(directionalLight);
      gltfLoaderRef.current = new GLTFLoader();
      cameraRef.current.position.z = 5;
    };
    initThree();
  }, []);

  const loadJewelryModel = useCallback(async (item: VirtualJewelryItem | null) => {
    if (!gltfLoaderRef.current || !sceneRef.current) return;
    if (jewelryObjectRef.current) {
      sceneRef.current.remove(jewelryObjectRef.current);
      jewelryObjectRef.current.traverse((obj) => {
        if ((obj as THREE.Mesh).geometry) (obj as THREE.Mesh).geometry.dispose();
        if ((obj as THREE.Mesh).material) {
          if (Array.isArray((obj as THREE.Mesh).material)) {
            (obj as THREE.Mesh).material.forEach(m => m.dispose());
          } else {
            (obj as THREE.Mesh).material.dispose();
          }
        }
      });
      jewelryObjectRef.current = null;
    }
    if (!item) return;

    try {
      const gltf = await gltfLoaderRef.current.loadAsync(item.modelPath);
      jewelryObjectRef.current = gltf.scene;

      if (jewelryObjectRef.current) {
        if (item.scale) jewelryObjectRef.current.scale.setScalar(item.scale);
        if (item.rotationX !== undefined) jewelryObjectRef.current.rotation.x = item.rotationX;
        if (item.rotationY !== undefined) jewelryObjectRef.current.rotation.y = item.rotationY;
        if (item.rotationZ !== undefined) jewelryObjectRef.current.rotation.z = item.rotationZ;
        sceneRef.current.add(jewelryObjectRef.current);
      }
    } catch (error) {
      console.error(`Error loading GLB model ${item.modelPath}:`, error);
    }
  }, []);

  const onFaceMeshResults = useCallback((results: any) => {
    if (!sceneRef.current || !cameraRef.current || !rendererRef.current || !jewelryObjectRef.current) return;
    const currentJewelry = selectedJewelryRef.current;
    if (!currentJewelry || (currentJewelry.type !== 'earring' && currentJewelry.type !== 'maang_tikka')) {
      if (jewelryObjectRef.current) jewelryObjectRef.current.visible = false;
      rendererRef.current.render(sceneRef.current, cameraRef.current);
      return;
    }
    // ... (Your existing face mesh logic here) ...
    rendererRef.current.render(sceneRef.current, cameraRef.current);
  }, []);

  const onHandsResults = useCallback((results: any) => {
    if (!sceneRef.current || !cameraRef.current || !rendererRef.current || !jewelryObjectRef.current) return;
    const currentJewelry = selectedJewelryRef.current;
    if (!currentJewelry || (currentJewelry.type !== 'bangle' && currentJewelry.type !== 'ring')) {
      if (jewelryObjectRef.current) jewelryObjectRef.current.visible = false;
      rendererRef.current.render(sceneRef.current, cameraRef.current);
      return;
    }
    // ... (Your existing hands logic here) ...
    rendererRef.current.render(sceneRef.current, cameraRef.current);
  }, []);

  const initMediapipeAndProcessFrames = useCallback(async (item: VirtualJewelryItem | null) => {
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = null;
    }
    // Reset initialization flag
    isInitialized.current = false;
    
    if (faceMeshRef.current) { faceMeshRef.current.close(); faceMeshRef.current = null; }
    if (handsRef.current) { handsRef.current.close(); handsRef.current = null; }

    const video = webcamRef.current?.video;
    if (!video || !item) return;

    let mediaPipeInstance: FaceMesh | Hands | null = null;
    let onResultsCallback: ((results: any) => void) | null = null;

    if (item.type === 'earring' || item.type === 'maang_tikka') {
      mediaPipeInstance = new FaceMesh({
        locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,
      });
      (mediaPipeInstance as FaceMesh).setOptions({ maxNumFaces: 1, refineLandmarks: true, minDetectionConfidence: 0.5, minTrackingConfidence: 0.5 });
      onResultsCallback = onFaceMeshResults;
      faceMeshRef.current = mediaPipeInstance as FaceMesh;
    } else if (item.type === 'bangle' || item.type === 'ring') {
      mediaPipeInstance = new Hands({
        locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
      });
      (mediaPipeInstance as Hands).setOptions({ maxNumHands: 2, modelComplexity: 1, minDetectionConfidence: 0.5, minTrackingConfidence: 0.5 });
      onResultsCallback = onHandsResults;
      handsRef.current = mediaPipeInstance as Hands;
    }

    if (mediaPipeInstance && onResultsCallback) {
      mediaPipeInstance.onResults(onResultsCallback);
      try {
        await mediaPipeInstance.initialize();
        isInitialized.current = true; // Set flag to true after successful initialization
      } catch (e) {
        console.error("Failed to initialize MediaPipe instance", e);
        return; // Stop here if initialization fails
      }

      const processFrames = async () => {
        // Only send a frame if the instance is fully initialized
        if (video && mediaPipeInstance && isInitialized.current) {
          try {
            await mediaPipeInstance.send({ image: video });
          } catch (e) {
            console.error("Error sending image to MediaPipe", e);
            // We can choose to cancel the loop here if there is a persistent error
            // cancelAnimationFrame(animationFrameId.current);
            // animationFrameId.current = null;
          }
        }
        animationFrameId.current = requestAnimationFrame(processFrames);
      };
      animationFrameId.current = requestAnimationFrame(processFrames);
    }
  }, [onFaceMeshResults, onHandsResults]);

  useImperativeHandle(ref, () => ({
    updateJewelry: (item) => {
      selectedJewelryRef.current = item;
      loadJewelryModel(item);
      if (webcamLoaded) {
        initMediapipeAndProcessFrames(item);
      }
    },
  }));

  useEffect(() => {
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (faceMeshRef.current) faceMeshRef.current.close();
      if (handsRef.current) handsRef.current.close();
      if (rendererRef.current) rendererRef.current.dispose();
    };
  }, []);

  return (
    <>
      <Webcam
        ref={webcamRef}
        className="w-full h-auto object-cover transform scaleX(-1) rounded-lg"
        audio={false}
        mirrored={true}
        onUserMedia={() => setWebcamLoaded(true)}
        videoConstraints={{
          facingMode: "user"
        }}
      />
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      />
    </>
  );
});

export default VirtualTryOn;