"use client";

import { CartProvider } from "@/contexts/cart-context";
import { YoutubeAmbientProvider } from "@/contexts/youtube-ambient-context";
import { AmbientMusicButton } from "@/components/AmbientMusicButton";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <YoutubeAmbientProvider>
        {children}
        <AmbientMusicButton />
      </YoutubeAmbientProvider>
    </CartProvider>
  );
}
