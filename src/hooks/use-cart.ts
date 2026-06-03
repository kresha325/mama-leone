"use client";

import { useEffect, useState } from "react";
import type { MenuItem } from "@/data/menu";

export interface CartItem extends MenuItem {
  quantity: number;
  categoryId: string;
  /** @deprecated legacy carts stored the German title */
  category?: string;
}

const CART_KEY = "ml_cart";
const NOTE_KEY = "ml_special_note";

function readCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(CART_KEY);
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    return [];
  }
}

function readNote(): string {
  if (typeof window === "undefined") return "";
  try {
    return window.localStorage.getItem(NOTE_KEY) || "";
  } catch {
    return "";
  }
}

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [note, setNote] = useState("");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setCart(readCart());
    setNote(readNote());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(NOTE_KEY, note);
  }, [note, hydrated]);

  const addToCart = (item: MenuItem, categoryId: string) => {
    setCart((prev) => {
      const existing = prev.find((entry) => entry.id === item.id);
      if (existing) {
        return prev.map((entry) =>
          entry.id === item.id
            ? { ...entry, quantity: entry.quantity + 1, categoryId }
            : entry
        );
      }
      return [...prev, { ...item, quantity: 1, categoryId }];
    });
  };

  const removeFromCart = (itemId: number) => {
    setCart((prev) => prev.filter((entry) => entry.id !== itemId));
  };

  const updateQuantity = (itemId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart((prev) =>
      prev.map((entry) =>
        entry.id === itemId ? { ...entry, quantity } : entry
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    setNote("");
  };

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return {
    cart,
    note,
    setNote,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    cartCount,
    hydrated,
  };
}
