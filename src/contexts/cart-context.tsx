"use client";

import { createContext, useContext } from "react";
import { useCart } from "@/hooks/use-cart";

type CartContextType = ReturnType<typeof useCart>;

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const value = useCart();
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCartContext() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within CartProvider");
  }
  return context;
}
