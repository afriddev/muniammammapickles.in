import type { addToCartProductType } from "@/types/product/ProductDataTypes";

export const CART_STORAGE_KEY = "mapCartItems";
export const CART_UPDATED_EVENT = "map-cart-updated";

export function readCartItems(): addToCartProductType[] {
  const rawCartItems = localStorage.getItem(CART_STORAGE_KEY);

  if (!rawCartItems) {
    return [];
  }

  try {
    const parsedCartItems = JSON.parse(rawCartItems) as addToCartProductType[];
    return Array.isArray(parsedCartItems) ? parsedCartItems : [];
  } catch {
    return [];
  }
}

export function writeCartItems(items: addToCartProductType[]) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event(CART_UPDATED_EVENT));
}

export function clearCartItems() {
  localStorage.removeItem(CART_STORAGE_KEY);
  window.dispatchEvent(new Event(CART_UPDATED_EVENT));
}

export function getCartCount() {
  return readCartItems().reduce(
    (totalCount, cartItem) => totalCount + (cartItem.quantity ?? 0),
    0
  );
}
