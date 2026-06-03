export type GalleryAltKey = "kitchen" | "exterior" | "dining" | "terrace";

export type GalleryItem = {
  src: string;
  altKey: GalleryAltKey;
};

/** Replace or extend this list when new photos are ready. */
export const galleryItems: GalleryItem[] = [
  { src: "/images/hero.png", altKey: "kitchen" },
  { src: "/images/restaurant.jpg", altKey: "exterior" },
  { src: "/images/hero.png", altKey: "dining" },
  { src: "/images/restaurant.jpg", altKey: "terrace" },
  { src: "/images/restaurant.jpg", altKey: "exterior" },
  { src: "/images/hero.png", altKey: "kitchen" },
];
