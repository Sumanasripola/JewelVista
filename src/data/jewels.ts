export interface Jewel {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  modelPath: string;
  category: string;
}

export const jewels: Jewel[] = [
  {
    id: "1",
    name: "Twisted Gold Hoop Earrings",
    description: "These sculpted gold hoop earrings add a dramatic flair with their thick, fluid twist design.",
    imageUrl: "/images/earring.jpg",
    modelPath: "/models/earring.glb",
    category: "earrings"
  },
  {
    id: "2",
    name: "Jhumka-A traditional design",
    description: "Inspired by Indian jhumka earrings, this ring fuses golden domes and beaded accents for a standout look.",
    imageUrl: "/images/jhumka.jpg",
    modelPath: "/models/jhumka.glb",
    category: "earrings"
  },
  {
    id: "3",
    name: "Royal Radiance (Maang Tikka)",
    description: "A stunning maang tikka featuring deep blue stones that exude majestic charm.",
    imageUrl: "/images/pendent1.jpg",
    modelPath: "/models/pendant1.glb",
    category: "maang tikka"
  },
  {
    id: "4",
    name: "Rose Petal Gem Earrings",
    description: "Shaped like delicate pink roses with a gleaming gem center, these earrings bloom with feminine charm.",
    imageUrl: "/images/flower_earring.png",
    modelPath: "/models/flower_earring.glb",
    category: "earrings"
  },
  {
    id: "5",
    name: "Pendant Chain",
    description: "A sleek, minimal chain with a delicate pink pendant that adds soft sparkle to any outfit.",
    imageUrl: "/images/necklace.png",
    modelPath: "/models/Necklace03_(2)[1].glb",
    category: "necklace"
  },
  {
    id: "6",
    name: "Crystal Crown Ring",
    description: "A gold ring adorned with a full crown of shimmering gemstones, radiating elegance.",
    imageUrl: "/images/bracelete1.png",
    modelPath: "/models/ring1.glb",
    category: "rings"
  },
  {
    id: "7",
    name: "Golden Ring",
    description: "A sleek and modern gold ring designed with a brilliant-cut gem and fine detailing.",
    imageUrl: "/images/ring_blender.png",
    modelPath: "/models/ring_blender.glb",
    category: "rings"
  },
  {
    id: "8",
    name: "Designer Ring",
    description: "A bold, masculine ring with a textured surface—crafted to leave a lasting impression.",
    imageUrl: "/images/ring2.png",
    modelPath: "/models/ring2.glb",
    category: "rings"
  },
  {
    id: "9",
    name: "Twisted Elegance Bracelet",
    description: "A twisted gold bracelet with a detailed filigree pattern that blends tradition with modern sophistication.",
    imageUrl: "/images/bracelete_blender.png",
    modelPath: "/models/bracelet_blender.glb",
    category: "bracelets"
  },
  {
    id: "10",
    name: "Pearl Bracelete",
    description: " A traditional pearl necklace, perfect for adding elegance to any outfit.",
    imageUrl: "/images/bracelete_sumana.png",
    modelPath: "/models/bracelete_sumana.glb",
    category: "bracelets"
  },
  {
    id: "11",
    name: "Heritage Twist Bracelet",
    description: "A gold bracelet featuring twisted rope detailing and circular motifs, combining artisanal design with timeless appeal.",
    imageUrl: "/images/bracelete2.png",
    modelPath: "/models/bracelete1.glb",
    category: "bracelets"
  },
  {
    id: "12",
    name: "Royal Filigree Gold Ring",
    description: "Featuring intricate filigree work and a golden bow, this elegant ring speaks of regal sophistication.",
    imageUrl: "/images/gold ring.png",
    modelPath: "/models/gold ring.glb",
    category: "rings"
  }
   
];