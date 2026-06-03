"use client";

import { CartProvider } from "@/contexts/cart-context";
import { LanguageProvider } from "@/contexts/language-context";
import { YoutubeAmbientProvider } from "@/contexts/youtube-ambient-context";
import { AmbientMusicButton } from "@/components/AmbientMusicButton";
import { LanguageDocumentSync } from "@/components/LanguageDocumentSync";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <LanguageDocumentSync />
      <CartProvider>
        <YoutubeAmbientProvider>
          {children}
          <AmbientMusicButton />
        </YoutubeAmbientProvider>
      </CartProvider>
    </LanguageProvider>
  );
}
