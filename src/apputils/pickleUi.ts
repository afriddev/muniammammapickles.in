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
    accent: "#8a4027",
    panel: "#ead7cf",
    tag: "Best Seller",
    pairWith: "Hot rice and ghee",
    notes: ["Boneless cut", "Deep masala", "Glossy finish"],
  },
  "Chicken-pickle-bone": {
    accent: "#6f3421",
    panel: "#e8d8d2",
    tag: "Rustic Cut",
    pairWith: "Paratha and chapati",
    notes: ["Bone-in flavour", "Pepper warmth", "Bold spice"],
  },
  "mango-pickle": {
    accent: "#8a6532",
    panel: "#ebe0cb",
    tag: "Classic Avakaya",
    pairWith: "Curd rice and dosa",
    notes: ["Raw mango tang", "Mustard hit", "Long finish"],
  },
  "mutton-pickle": {
    accent: "#5b3d30",
    panel: "#e2d6d0",
    tag: "Rich Reserve",
    pairWith: "Jeera rice and naan",
    notes: ["Slow-cooked depth", "Dark masala", "Festive richness"],
  },
  "pandu-mirchi-pickle": {
    accent: "#6a4e3b",
    panel: "#e5ddd3",
    tag: "Spice Lover",
    pairWith: "Idli and upma",
    notes: ["Fermented heat", "Garlic edge", "Bright finish"],
  },
};

export function getPickleProfile(pickle: productDataType): PickleProfile {
  return (
    pickleProfiles[pickle.productId] ?? {
      accent: "#8a4027",
      panel: "#ead7cf",
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
