// src/data/virtualJewels.ts

export interface VirtualJewelryItem {
  id: string;
  name: string;
  type: 'earring' | 'bangle' | 'ring' | 'maang_tikka';
  modelPath: string;
  // These properties are crucial for AR positioning
  scale: number;
  offsetX?: number;
  offsetY?: number;
  offsetZ?: number;
  rotationX?: number;
  rotationY?: number;
  rotationZ?: number;
}

export const virtualJewels: VirtualJewelryItem[] = [
  // --- Earrings ---
  {
    id: "1",
    name: "Twisted Gold Hoop Earrings",
    type: "earring",
    modelPath: "/models/earring.glb",
    // NOTE: You MUST fine-tune these values
    scale: 0.005, 
    offsetX: 0.05, 
    offsetY: -0.05,
    rotationX: Math.PI / 2, 
    rotationY: Math.PI,
  },
  {
    id: "2",
    name: "Jhumka-A traditional design",
    type: "earring",
    modelPath: "/models/jhumka.glb",
    // NOTE: You MUST fine-tune these values
    scale: 0.008, 
    offsetX: 0.07,
    offsetY: -0.08,
    rotationX: Math.PI / 2,
    rotationY: Math.PI,
  },
  {
    id: "4",
    name: "Rose Petal Gem Earrings",
    type: "earring",
    modelPath: "/models/flower_earring.glb",
    // NOTE: You MUST fine-tune these values
    scale: 0.01,
    offsetX: 0.06,
    offsetY: -0.07,
    rotationX: Math.PI / 2,
    rotationY: Math.PI,
  },

  // --- Maang Tikka ---
  {
    id: "3",
    name: "Royal Radiance (Maang Tikka)",
    type: "maang_tikka",
    // NOTE: The model path "pendant1.glb" might be for a pendant. 
    // Verify this is the correct model for your maang tikka try-on.
    modelPath: "/models/pendant1.glb", 
    // NOTE: You MUST fine-tune these values
    scale: 0.02,
    offsetY: 0.2,
    rotationX: Math.PI / 2,
  },

  // --- Rings ---
  {
    id: "6",
    name: "Crystal Crown Ring",
    type: "ring",
    modelPath: "/models/ring1.glb",
    // NOTE: You MUST fine-tune these values
    scale: 0.01, 
    rotationX: -Math.PI / 2, 
  },
  {
    id: "7",
    name: "Golden Ring",
    type: "ring",
    modelPath: "/models/ring_blender.glb",
    // NOTE: You MUST fine-tune these values
    scale: 0.015,
    rotationX: -Math.PI / 2,
  },
  {
    id: "8",
    name: "Designer Ring",
    type: "ring",
    modelPath: "/models/ring2.glb",
    // NOTE: You MUST fine-tune these values
    scale: 0.01,
    rotationX: -Math.PI / 2,
  },
  {
    id: "12",
    name: "Royal Filigree Gold Ring",
    type: "ring",
    modelPath: "/models/gold ring.glb",
    // NOTE: You MUST fine-tune these values
    scale: 0.012,
    rotationX: -Math.PI / 2,
  },

  // --- Bracelets / Bangles ---
  {
    id: "9",
    name: "Twisted Elegance Bracelet",
    type: "bangle",
    modelPath: "/models/bracelet_blender.glb",
    // NOTE: You MUST fine-tune these values
    scale: 0.01,
    rotationY: Math.PI / 2,
  },
  {
    id: "10",
    name: "Pearl Bracelete",
    type: "bangle",
    modelPath: "/models/bracelete_sumana.glb",
    // NOTE: You MUST fine-tune these values
    scale: 0.015,
    rotationY: Math.PI / 2,
  },
  {
    id: "11",
    name: "Heritage Twist Bracelet",
    type: "bangle",
    modelPath: "/models/bracelete1.glb",
    // NOTE: You MUST fine-tune these values
    scale: 0.012,
    rotationY: Math.PI / 2,
  },

  // --- Note: Necklaces are not included for this initial implementation ---
  // A 'Pendant Chain' requires advanced neck tracking which is beyond the scope of this
  // initial guide. The current Mediapipe solution is best for face and hand tracking.
];