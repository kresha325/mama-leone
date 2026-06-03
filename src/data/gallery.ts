import { withBasePath } from "@/lib/base-path";

export type GalleryAltKey = "kitchen" | "exterior" | "dining" | "terrace";

export type GalleryItem = {
  src: string;
  altKey: GalleryAltKey;
};

/** Replace or extend this list when new photos are ready. */
export const galleryItems: GalleryItem[] = [
  { src: withBasePath("/images/hero.png"), altKey: "kitchen" },
  { src: withBasePath("/images/restaurant.jpg"), altKey: "exterior" },
  { src: withBasePath("/images/hero.png"), altKey: "dining" },
  { src: withBasePath("/images/restaurant.jpg"), altKey: "terrace" },
  { src: withBasePath("/images/restaurant.jpg"), altKey: "exterior" },
  { src: withBasePath("/images/hero.png"), altKey: "kitchen" },
];
