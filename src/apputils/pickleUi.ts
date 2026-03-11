import type { productDataType } from "@/types/product/ProductDataTypes";

export type PickleProfile = {
  accent: string;
  panel: string;
  tag: string;
  pairWith: string;
  notes: string[];
};

const pickleProfiles: Record<string, PickleProfile> = {
  "Chicken-pickle-boneless": {
    accent: "#9c2f18",
    panel: "#f1d3bc",
    tag: "Best Seller",
    pairWith: "Hot rice and ghee",
    notes: ["Boneless cut", "Deep masala", "Glossy finish"],
  },
  "Chicken-pickle-bone": {
    accent: "#7a2416",
    panel: "#eed0c4",
    tag: "Rustic Cut",
    pairWith: "Paratha and chapati",
    notes: ["Bone-in flavour", "Pepper warmth", "Bold spice"],
  },
  "mango-pickle": {
    accent: "#9b7a11",
    panel: "#f2e4b1",
    tag: "Classic Avakaya",
    pairWith: "Curd rice and dosa",
    notes: ["Raw mango tang", "Mustard hit", "Long finish"],
  },
  "mutton-pickle": {
    accent: "#4d1c12",
    panel: "#e1c9be",
    tag: "Rich Reserve",
    pairWith: "Jeera rice and naan",
    notes: ["Slow-cooked depth", "Dark masala", "Festive richness"],
  },
  "pandu-mirchi-pickle": {
    accent: "#526039",
    panel: "#dce2bc",
    tag: "Spice Lover",
    pairWith: "Idli and upma",
    notes: ["Fermented heat", "Garlic edge", "Bright finish"],
  },
};

export function getPickleProfile(pickle: productDataType): PickleProfile {
  return (
    pickleProfiles[pickle.productId] ?? {
      accent: "#9c2f18",
      panel: "#f1d3bc",
      tag: "Signature Jar",
      pairWith: "Everyday meals",
      notes: ["Bold spice", "Homemade depth", "Meal-ready jar"],
    }
  );
}

export function getPicklePricePoints(price: number) {
  return [
    { label: "250g", value: Math.round(price / 4) },
    { label: "500g", value: Math.round(price / 2) },
    { label: "1kg", value: Math.round(price) },
  ];
}

export function getPickleLeadImage(productId: string, imageUrl: string) {
  switch (productId) {
    case "Chicken-pickle-boneless":
      return "/banner_mobile.png";
    case "Chicken-pickle-bone":
      return "/chicken/chicken_bone.webp";
    case "mango-pickle":
      return "/mango/mango_pickle.webp";
    case "mutton-pickle":
      return "/mutton/mutton_pickle.webp";
    case "pandu-mirchi-pickle":
      return "/pandu_mirchi/pandu_mirchi.webp";
    default:
      return imageUrl;
  }
}
