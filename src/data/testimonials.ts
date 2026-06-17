export type TestimonialSource = "facebook" | "instagram";

export type TestimonialId =
  | "pizza"
  | "ambience"
  | "family"
  | "service"
  | "return"
  | "woodOven"
  | "carbonara"
  | "suedermarkt"
  | "weekend";

export type Testimonial = {
  id: TestimonialId;
  source: TestimonialSource;
  author: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  { id: "pizza", source: "facebook", author: "Sandra H.", rating: 5 },
  { id: "ambience", source: "facebook", author: "Michael R.", rating: 5 },
  { id: "family", source: "facebook", author: "Lisa & Marco", rating: 5 },
  { id: "service", source: "facebook", author: "Petra W.", rating: 5 },
  { id: "return", source: "facebook", author: "Jürgen B.", rating: 5 },
  { id: "woodOven", source: "instagram", author: "@foodie.meldorf", rating: 5 },
  { id: "carbonara", source: "instagram", author: "Anna K.", rating: 5 },
  { id: "suedermarkt", source: "instagram", author: "Marco P.", rating: 5 },
  { id: "weekend", source: "instagram", author: "@dithmarschen.eats", rating: 5 },
];
