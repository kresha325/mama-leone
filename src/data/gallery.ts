import { withBasePath } from "@/lib/base-path";

export type GalleryAltKey = "kitchen" | "exterior" | "dining" | "terrace";

export type GalleryItem = {
  src: string;
  altKey: GalleryAltKey;
};

const altRotation: GalleryAltKey[] = [
  "kitchen",
  "exterior",
  "dining",
  "terrace",
  "kitchen",
  "dining",
  "exterior",
  "terrace",
  "exterior",
];

export const galleryItems: GalleryItem[] = Array.from({ length: 9 }, (_, index) => ({
  src: withBasePath(`/images/gallery/mama${index + 1}.jpg`),
  altKey: altRotation[index],
}));
