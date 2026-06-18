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
  "kitchen",
  "dining",
];

/** Photos sourced from @mama_leone_meldorf on Instagram. */
export const galleryItems: GalleryItem[] = Array.from({ length: 10 }, (_, index) => ({
  src: withBasePath(`/images/gallery/${String(index + 1).padStart(2, "0")}.jpg`),
  altKey: altRotation[index],
}));
