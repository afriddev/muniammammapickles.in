export type productDataType = {
  productId?: string;
  productName: string;
  isKgs?: boolean;
  isMl?: boolean;
  availability?: number;
  price: number;
  isAvailable: boolean;
  isOutOfStock: boolean;
  editedBy?: string;
  imageUrls?: string[];
  title: string;
  description: string;
  ingredients?: string[];
  others?: string[];
  createdAt: string;
  updatedAt: string;
};
