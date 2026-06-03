export const business = {
  name: "Mama Leone",
  tagline: "Ristorante Pizzeria",
  address: {
    street: "Südermarkt 7",
    zip: "25704",
    city: "Meldorf",
    country: "Deutschland",
    full: "Südermarkt 7 • 25704 Meldorf",
  },
  phone: "0 48 32 / 97 87 888",
  phoneLink: "+4948329787888",
  email: "info@mama-leone.de",
  website: "www.mama-leone.de",
  coordinates: {
    lat: 54.0869,
    lng: 9.0722,
  },
  hours: {
    weekdays: "täglich",
    schedule: "12:00 – 21:00 Uhr",
    closed: "Dienstag Ruhetag",
  },
  whatsappLink: "https://wa.me/4948329787888",
  social: {
    googleMaps:
      "https://www.google.com/maps/place/Ristorante+Mama+Leone/@54.0897857,9.0714295,17z",
    googleMapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2340.095300245535!2d9.068854576812237!3d54.089785672514274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b3f34a8bd0cd27%3A0x8c209eec1624034c!2sRistorante%20Mama%20Leone!5e0!3m2!1sen!2sde!4v1780524700712!5m2!1sen!2sde",
  },
} as const;

export type AllergenCode =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N";

export const allergenLegend: Record<AllergenCode, string> = {
  A: "Glutenhaltiges Getreide (Weizen, Roggen, Gerste, Hafer, Dinkel)",
  B: "Krebstiere",
  C: "Eier und Eierzeugnisse",
  D: "Fisch und Fischerzeugnisse",
  E: "Erdnüsse",
  F: "Soja",
  G: "Milch und Milchprodukte (Laktose)",
  H: "Schalenfrüchte (Mandeln, Haselnüsse, Walnüsse …)",
  I: "Sellerie",
  J: "Senf",
  K: "Sesamsamen",
  L: "Schwefeldioxid und Sulfite",
  M: "Lupinen",
  N: "Weichtiere",
};

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  allergens?: (AllergenCode | string)[];
  spicy?: boolean;
  highlight?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  note?: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "zuppe",
    title: "Zuppe",
    items: [
      {
        id: 1,
        name: "Zuppa di Pomodoro",
        description: "Hausgemachte Tomatensuppe",
        price: 8.0,
        allergens: ["G", "1", "2"],
      },
      {
        id: 2,
        name: "Zuppa di Crostacei",
        description: "Hausgemachte Hummersuppe",
        price: 11.0,
        allergens: ["B", "1", "2", "3"],
      },
    ],
  },
  {
    id: "insalata",
    title: "Insalata",
    note: "Wir servieren alle Salate mit Brot und wahlweise Balsamicoessig / Öl oder Dressing (C, J, 3, 4)",
    items: [
      {
        id: 5,
        name: "Insalata Italia",
        description: "Gemischter Salat mit Tomaten, Gurken und Zwiebeln",
        price: 10.0,
      },
      {
        id: 6,
        name: "Insalata Francesce",
        description:
          "Gemischter Salat mit Schinken-Käseröllchen, Champignons, Thunfisch, Ei und Zwiebeln",
        price: 14.0,
        allergens: ["C", "D", "F", "G"],
      },
      {
        id: 7,
        name: "Insalata Pavarotti",
        description:
          "Gemischter Salat mit Putenstreifen, Mozzarella und Honigmelone",
        price: 15.0,
        allergens: ["G"],
      },
      {
        id: 8,
        name: "Insalata di Rucola",
        description:
          "Gemischter Rucolasalat mit Kirschtomaten, Rindfleischstreifen und Parmesan",
        price: 16.0,
        allergens: ["G", "H"],
      },
    ],
  },
  {
    id: "antipasti",
    title: "Antipasti",
    note: "Zu jeder Vorspeise wird Brot serviert (A)",
    items: [
      {
        id: 10,
        name: "Bruschetta",
        description:
          "Italienisches geröstetes Brot mit frischen Tomaten, Knoblauch und Rucola",
        price: 9.0,
        allergens: ["A"],
      },
      {
        id: 11,
        name: "Mozzarella Caprese",
        description:
          "Tomatenscheiben mit Mozzarella, Basilikum, Balsamicocreme und Olivenöl",
        price: 13.0,
        allergens: ["G"],
      },
      {
        id: 12,
        name: "Carpaccio di Manzo",
        description:
          "Rohe Rinderfiletscheiben mit Parmesan, Rucola und frischen Champignons",
        price: 16.0,
        allergens: ["G"],
      },
      {
        id: 13,
        name: "Vitello Tonnato",
        description: "Kalbfleisch mit Thunfischcreme",
        price: 15.0,
        allergens: ["D"],
      },
      {
        id: 14,
        name: "Antipasto della Casa",
        description: "Vom Buffet",
        price: 17.0,
        allergens: ["A", "C", "D", "G", "N", "1", "2", "3", "7"],
      },
    ],
  },
  {
    id: "pizza",
    title: "Pizza",
    note: "Unsere Pizzen werden mit hochwertiger Tomatensauce verfeinert und mit Käse und Oregano gewürzt. A, G, 2",
    items: [
      {
        id: 20,
        name: "Pizza Margherita",
        description: "Mit Tomaten und Käse",
        price: 9.5,
        allergens: ["A", "G"],
      },
      {
        id: 21,
        name: "Pizza Salami",
        description: "Mit Salami",
        price: 12.0,
      },
      {
        id: 22,
        name: "Pizza Hawaii",
        description: "Mit Schinken und Ananas",
        price: 14.0,
      },
      {
        id: 23,
        name: "Pizza Prosciutto e Funghi",
        description: "Mit Schinken und Champignons",
        price: 14.0,
      },
      {
        id: 24,
        name: "Pizza Occhio di Bue",
        description: "Mit Thunfisch und Zwiebeln",
        price: 14.5,
      },
      {
        id: 25,
        name: "Pizza al Bacio",
        description: "Mit Spinat, Schafskäse und Knoblauch",
        price: 14.5,
      },
      {
        id: 26,
        name: "Pizza Primavera",
        description: "Mit Salami, Schinken, Champignons und Paprika",
        price: 15.0,
      },
      {
        id: 27,
        name: "Pizza Calzone",
        description: "Gefüllte Pizza mit Salami, Schinken und Champignons",
        price: 15.0,
      },
      {
        id: 28,
        name: "Pizza Vulkano",
        description:
          "Mit pikanter italienischer Salami, frischen Champignons, frischer Paprika, Peperoni",
        price: 16.0,
        spicy: true,
      },
      {
        id: 29,
        name: "Pizza alla Flory special",
        description: "Mit Parmaschinken, Parmesankäse und Rucola",
        price: 16.0,
      },
      {
        id: 30,
        name: "Pizza Dithmarschen",
        description: "Mit Lachs, Nordseekrabben und Knoblauch",
        price: 17.0,
      },
      {
        id: 31,
        name: "Pizza Mama Leone",
        description:
          "Mit Rindfleischstreifen, Cherrytomaten, Parmesan und Rucola",
        price: 18.0,
        highlight: true,
      },
    ],
  },
  {
    id: "pasta",
    title: "Pasta",
    items: [
      {
        id: 40,
        name: "Spaghetti alla Bolognese",
        description: "Mit Hackfleischsauce",
        price: 13.0,
      },
      {
        id: 41,
        name: "Tortellini alla Panna e Prosciuto",
        description: "Mit Schinken, in Sahnesauce",
        price: 14.0,
      },
      {
        id: 42,
        name: "Spaghetti alla Carbonara",
        description: "Mit Speck, Eigelb, Parmesan, in Sahnesauce",
        price: 14.0,
      },
      {
        id: 43,
        name: "Spaghetti Mama Leone",
        description:
          "Mit Erbsen, Schinken, in Fleisch-Sahnesauce, mit Käse überbacken",
        price: 14.0,
        highlight: true,
      },
      {
        id: 44,
        name: "Lasagne al Forno",
        description: "Spezialität aus Nudeln mit Fleischragout-Füllung",
        price: 15.0,
      },
      {
        id: 45,
        name: "Penne alla Vicentina",
        description: "Kurze Nudeln mit Spinat, in Gorgonzolasauce",
        price: 15.0,
      },
      {
        id: 46,
        name: "Timballo al Forno",
        description:
          "Überbackene, verschiedene Nudeln mit Schinken, in Fleisch-Sahnesauce",
        price: 16.0,
      },
      {
        id: 47,
        name: "Bavette alla Amalfitana",
        description:
          "Bandnudeln mit Putenstreifen, Champignons, in Käse-Sahnesauce",
        price: 16.0,
      },
      {
        id: 48,
        name: "Spaghetti Aglio Olio e Gamberi",
        description: "Mit Garnelen und Knoblauch in Olivenöl",
        price: 16.5,
      },
      {
        id: 49,
        name: "Bavette alla Flory special",
        description:
          "Bandnudeln mit Lachs, Flusskrebsfleisch und Krabben, in Hummersauce",
        price: 18.0,
      },
      {
        id: 50,
        name: "Penne alla Boscaiola",
        description:
          "Kurze Nudeln mit Rinderfiletspitzen und Champignons, in Tomatensauce",
        price: 18.0,
        allergens: ["A", "G", "1", "2"],
      },
      {
        id: 51,
        name: "Tagliatelle alle Vongole",
        description:
          "Bandnudeln mit Venusmuscheln, Cherrytomaten und Knoblauch in Weißweinsauce",
        price: 18.0,
        allergens: ["A", "G", "1", "2"],
      },
      {
        id: 52,
        name: "Ravioli Ricotta e Porcini",
        description:
          "Ravioli mit Steinpilzen und Ricotta-Käsefüllung in Basilikum-Tomaten-Sahnesauce",
        price: 18.0,
        allergens: ["A", "F", "G", "J", "M"],
      },
      {
        id: 53,
        name: "Bavette al Tartufo",
        description: "Bandnudeln in Trüffelsauce und Parmesan",
        price: 20.0,
        allergens: ["A", "G", "2"],
      },
    ],
  },
  {
    id: "carne",
    title: "Carne",
    note: "Alle Fleischgerichte servieren wir mit Tagesbeilage",
    items: [
      {
        id: 55,
        name: "Bistecca alla Milanese",
        description: "Paniertes Schweineschnitzel mit Bratkartoffeln und Salat",
        price: 20.0,
        allergens: ["A", "G"],
      },
      {
        id: 56,
        name: "Tacchino alla Cacciatora",
        description: "Putenmedaillons mit Champignons in Pfeffer-Rahmsauce",
        price: 21.0,
        allergens: ["A", "G"],
      },
      {
        id: 57,
        name: "Medaglioni di Filetto ai Cantarelli",
        description:
          "Schweinemedaillons vom Filet mit Pfifferlingen in Kräutersauce",
        price: 24.0,
        allergens: ["A", "G", "I", "4"],
      },
      {
        id: 58,
        name: "Scaloppine alla Vivarium",
        description: "Rindermedaillons in Kräutersauce",
        price: 26.0,
        allergens: ["A", "G"],
      },
      {
        id: 59,
        name: "Grigliata di Carne Mista",
        description: "Verschiedene Fleischsorten vom Grill",
        price: 28.0,
      },
      {
        id: 60,
        name: "Bistecca Italia",
        description: "Rumpsteak mit grünem Pfeffer in Gorgonzolasauce",
        price: 30.0,
        allergens: ["A", "G"],
      },
      {
        id: 61,
        name: "Tagliata alla Furese",
        description: "Rumpsteak mit Kirschtomaten, Rucola und Parmesan",
        price: 29.0,
        allergens: ["G"],
      },
    ],
  },
  {
    id: "pesce",
    title: "Pesce",
    items: [
      {
        id: 65,
        name: "Frische Muscheln",
        description: "Nach Saison",
        price: 18.0,
        allergens: ["N"],
      },
      {
        id: 66,
        name: "Salmone alla Griglia",
        description:
          "Gegrilltes Lachsfilet auf Spinatbett mit Rosmarinkartoffeln und Salat",
        price: 27.0,
        allergens: ["D"],
      },
      {
        id: 67,
        name: "Calamari alla Griglia",
        description:
          "Gegrillte Calamari mit Petersilie, Rosmarinkartoffeln und Salat",
        price: 28.0,
        allergens: ["D"],
      },
    ],
  },
  {
    id: "bambini",
    title: "Bambini",
    items: [
      {
        id: 70,
        name: "Kinder-Pizza",
        description: "Mit Tomaten und Käse, wahlweise mit Salami oder Schinken",
        price: 9.0,
        allergens: ["A", "G", "1", "2", "3"],
      },
      {
        id: 71,
        name: "Kinderteller Spaghetti",
        description: "Mit Tomaten- oder Hackfleischsauce",
        price: 9.0,
        allergens: ["A", "I", "1", "4"],
      },
      {
        id: 72,
        name: "Kinder-Schnitzel Milanese Art",
        description: "Mit Pommes",
        price: 10.0,
        allergens: ["A", "C", "1", "3"],
      },
    ],
  },
  {
    id: "dessert",
    title: "Dessert",
    items: [
      {
        id: 75,
        name: "Tiramisu classico",
        description: "Hausgemachtes Tiramisu",
        price: 7.0,
        allergens: ["A", "C", "G", "9", "11"],
      },
      {
        id: 76,
        name: "Panna Cotta",
        description: "Cremiges Dessert mit Vanille",
        price: 7.0,
        allergens: ["G", "1", "2"],
      },
      {
        id: 77,
        name: "Crème Brûlée",
        description: "Klassische Vanillecreme mit karamellisierter Kruste",
        price: 7.0,
        allergens: ["G", "1", "2"],
      },
    ],
  },
];

export function formatPrice(price: number): string {
  return price.toFixed(2).replace(".", ",") + " €";
}
