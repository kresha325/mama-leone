import type { Language } from "./languages";

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

export type Translations = {
  nav: {
    home: string;
    about: string;
    menu: string;
    contact: string;
    reserve: string;
    cart: string;
    callNow: string;
    openMenu: string;
    closeMenu: string;
    language: string;
  };
  hero: {
    badge: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    statYears: string;
    statDishes: string;
    quote: string;
    imageAlt: string;
  };
  gallery: {
    badge: string;
    title: string;
    subtitle: string;
    scrollHint: string;
    alts: {
      kitchen: string;
      exterior: string;
      dining: string;
      terrace: string;
    };
  };
  contact: {
    location: string;
    hours: string;
    reservation: string;
    mapTitle: string;
    openMaps: string;
    openNow: string;
    closedNow: string;
    openUntil: string;
    opensAt: string;
    contactVia: string;
    whatsapp: string;
  };
  footer: {
    explore: string;
    contactTitle: string;
    atmosphere: string;
    watchYoutube: string;
    rights: string;
    motto: string;
    aboutText: string;
    phoneLabel: string;
  };
  menu: {
    badge: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    all: string;
    allergenFilter: string;
    noFilter: string;
    noResults: string;
    legendTitle: string;
    addToCart: string;
    added: string;
    spicy: string;
    specialty: string;
    tapHint: string;
  };
  cart: {
    title: string;
    empty: string;
    countOne: string;
    countMany: (n: number) => string;
    notesLabel: string;
    notesPlaceholder: string;
    total: string;
    waiter: string;
    sms: string;
    call: string;
    confirmTitle: string;
    confirmDesc: string;
    confirmBtn: string;
    cancel: string;
    confirmed: string;
    orderGreeting: string;
    orderIntro: string;
    orderNote: string;
    orderThanks: string;
    continueMenu: string;
  };
  audio: {
    loading: string;
    muteOn: string;
    muteOff: string;
  };
  meta: {
    homeTitle: string;
    menuTitle: string;
  };
  businessHours: {
    weekdays: string;
    schedule: string;
    closed: string;
  };
  allergens: Record<AllergenCode, string>;
  common: {
    with: string;
    specialtyLabel: string;
    tagline: string;
  };
};

function cartCountMany(n: number, singular: string, plural: string): string {
  return n === 1 ? singular : plural.replace("{n}", String(n));
}

const de: Translations = {
  nav: {
    home: "Start",
    about: "Über uns",
    menu: "Speisekarte",
    contact: "Kontakt",
    reserve: "Reservieren",
    cart: "Warenkorb",
    callNow: "Jetzt anrufen",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    language: "Sprache",
  },
  hero: {
    badge: "Ristorante · Meldorf",
    subtitle:
      "Authentische italienische Küche am Südermarkt — Pizza aus dem Ofen, hausgemachte Pasta und feine Antipasti in gemütlichem Ambiente.",
    cta: "Speisekarte & Bestellen",
  },
  about: {
    title: "La Dolce Vita in Meldorf",
    p1: "Im Herzen von Meldorf, am malerischen Südermarkt, empfängt Sie das Ristorante Mama Leone mit authentischer italienischer Küche in gemütlichem Ambiente. Unser Team verbindet traditionelle Rezepte mit frischen, sorgfältig ausgewählten Zutaten.",
    p2: "Ob entspanntes Mittagessen, romantisches Abendessen oder ein geselliger Abend mit Freunden — bei uns erleben Sie Italien mitten in Dithmarschen.",
    statYears: "Jahre Tradition",
    statDishes: "Gerichte",
    quote:
      "Italienische Gastfreundschaft im historischen Fachwerkhaus am Südermarkt.",
    imageAlt: "Mama Leone Restaurant Meldorf",
  },
  gallery: {
    badge: "Impressionen",
    title: "Galerie",
    subtitle: "Einblicke in unsere Küche, das Ambiente und den Südermarkt in Meldorf.",
    scrollHint: "← Wischen für mehr Fotos →",
    alts: {
      kitchen: "Küche bei Mama Leone",
      exterior: "Ristorante Mama Leone in Meldorf",
      dining: "Gastraum und Atmosphäre",
      terrace: "Außenbereich am Südermarkt",
    },
  },
  contact: {
    location: "Standort",
    hours: "Öffnungszeiten",
    reservation: "Reservierung",
    mapTitle: "Mama Leone Standort",
    openMaps: "In Google Maps öffnen",
    openNow: "Jetzt geöffnet",
    closedNow: "Geschlossen",
    openUntil: "Geöffnet bis {time} Uhr",
    opensAt: "Öffnet um {time} Uhr",
    contactVia: "Wie möchten Sie uns erreichen?",
    whatsapp: "WhatsApp",
  },
  footer: {
    explore: "Entdecken",
    contactTitle: "Kontakt",
    atmosphere: "Atmosphäre",
    watchYoutube: "Auf YouTube ansehen",
    rights: "Alle Rechte vorbehalten.",
    motto: "Buon appetito · Meldorf",
    aboutText:
      "Authentische italienische Küche im Herzen von Meldorf — Ristorante Pizzeria.",
    phoneLabel: "Tel.",
  },
  menu: {
    badge: "Digitale Speisekarte",
    title: "La Nostra Carta",
    subtitle:
      "Tippen Sie auf ein Gericht, um es in den Warenkorb zu legen und Ihre Bestellung selbst aufzugeben.",
    searchPlaceholder: "Gericht suchen…",
    all: "Alle",
    allergenFilter: "Allergen-Filter",
    noFilter: "Kein Filter",
    noResults: "Keine Gerichte gefunden.",
    legendTitle: "Allergen- & Zusatzstoffkennzeichnung",
    addToCart: "in den Warenkorb",
    added: "hinzugefügt",
    spicy: "pikant",
    specialty: "Spezialität",
    tapHint: "Tippen zum Hinzufügen",
  },
  cart: {
    title: "Warenkorb",
    empty:
      "Wählen Sie Gerichte aus der Speisekarte und fügen Sie sie hier hinzu.",
    countOne: "1 Artikel",
    countMany: (n) => cartCountMany(n, "1 Artikel", "{n} Artikel"),
    notesLabel: "Anmerkungen",
    notesPlaceholder: "z. B. ohne Zwiebeln, Tisch 5 …",
    total: "Gesamt",
    waiter: "Kellner informieren",
    sms: "Bestellung per SMS",
    call: "Anrufen",
    confirmTitle: "Bestellung bestätigen",
    confirmDesc:
      "Zeigen Sie diese Bestellung dem Kellner. Der Warenkorb wird danach geleert.",
    confirmBtn: "Bestätigen",
    cancel: "Abbrechen",
    confirmed: "Bestellung an den Kellner übermittelt",
    orderGreeting: "Guten Tag Mama Leone,",
    orderIntro: "ich möchte folgende Bestellung aufgeben:",
    orderNote: "Anmerkung:",
    orderThanks: "Vielen Dank!",
    continueMenu: "Zur Speisekarte",
  },
  audio: {
    loading: "Wird geladen…",
    muteOn: "Ton einschalten",
    muteOff: "Ton ausschalten",
  },
  meta: {
    homeTitle: "Mama Leone – Ristorante Pizzeria | Meldorf",
    menuTitle: "Speisekarte",
  },
  businessHours: {
    weekdays: "täglich",
    schedule: "12:00 – 21:00 Uhr",
    closed: "Dienstag Ruhetag",
  },
  allergens: {
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
  },
  common: {
    with: "Mit",
    specialtyLabel: "Spezialität",
    tagline: "Ristorante Pizzeria",
  },
};

const en: Translations = {
  nav: {
    home: "Home",
    about: "About",
    menu: "Menu",
    contact: "Contact",
    reserve: "Reserve",
    cart: "Cart",
    callNow: "Call now",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
  },
  hero: {
    badge: "Ristorante · Meldorf",
    subtitle:
      "Authentic Italian cuisine at Südermarkt — wood-fired pizza, homemade pasta and fine antipasti in a cosy atmosphere.",
    cta: "Menu & Order",
  },
  about: {
    title: "La Dolce Vita in Meldorf",
    p1: "In the heart of Meldorf, on the picturesque Südermarkt, Ristorante Mama Leone welcomes you with authentic Italian cuisine in a warm, inviting setting. Our team combines traditional recipes with fresh, carefully selected ingredients.",
    p2: "Whether a relaxed lunch, a romantic dinner or an evening with friends — experience Italy right here in Dithmarschen.",
    statYears: "Years of tradition",
    statDishes: "Dishes",
    quote:
      "Italian hospitality in the historic half-timbered house on Südermarkt.",
    imageAlt: "Mama Leone Restaurant Meldorf",
  },
  gallery: {
    badge: "Impressions",
    title: "Gallery",
    subtitle: "A glimpse of our kitchen, atmosphere and Südermarkt in Meldorf.",
    scrollHint: "← Swipe for more photos →",
    alts: {
      kitchen: "Mama Leone kitchen",
      exterior: "Mama Leone restaurant in Meldorf",
      dining: "Dining room and atmosphere",
      terrace: "Outdoor seating at Südermarkt",
    },
  },
  contact: {
    location: "Location",
    hours: "Opening hours",
    reservation: "Reservation",
    mapTitle: "Mama Leone location",
    openMaps: "Open in Google Maps",
    openNow: "Open now",
    closedNow: "Closed",
    openUntil: "Open until {time}",
    opensAt: "Opens at {time}",
    contactVia: "How would you like to reach us?",
    whatsapp: "WhatsApp",
  },
  footer: {
    explore: "Explore",
    contactTitle: "Contact",
    atmosphere: "Atmosphere",
    watchYoutube: "Watch on YouTube",
    rights: "All rights reserved.",
    motto: "Buon appetito · Meldorf",
    aboutText:
      "Authentic Italian cuisine in the heart of Meldorf — Ristorante Pizzeria.",
    phoneLabel: "Tel.",
  },
  menu: {
    badge: "Digital menu",
    title: "La Nostra Carta",
    subtitle:
      "Tap a dish to add it to your cart and place your order yourself.",
    searchPlaceholder: "Search dishes…",
    all: "All",
    allergenFilter: "Allergen filter",
    noFilter: "No filter",
    noResults: "No dishes found.",
    legendTitle: "Allergen & additive labelling",
    addToCart: "to cart",
    added: "added",
    spicy: "spicy",
    specialty: "Specialty",
    tapHint: "Tap to add",
  },
  cart: {
    title: "Cart",
    empty: "Choose dishes from the menu and add them here.",
    countOne: "1 item",
    countMany: (n) => cartCountMany(n, "1 item", "{n} items"),
    notesLabel: "Notes",
    notesPlaceholder: "e.g. no onions, table 5 …",
    total: "Total",
    waiter: "Notify waiter",
    sms: "Order via SMS",
    call: "Call",
    confirmTitle: "Confirm order",
    confirmDesc:
      "Show this order to your waiter. The cart will be cleared afterwards.",
    confirmBtn: "Confirm",
    cancel: "Cancel",
    confirmed: "Order sent to the waiter",
    orderGreeting: "Hello Mama Leone,",
    orderIntro: "I would like to place the following order:",
    orderNote: "Note:",
    orderThanks: "Thank you!",
    continueMenu: "Back to menu",
  },
  audio: {
    loading: "Loading…",
    muteOn: "Turn sound on",
    muteOff: "Turn sound off",
  },
  meta: {
    homeTitle: "Mama Leone – Ristorante Pizzeria | Meldorf",
    menuTitle: "Menu",
  },
  businessHours: {
    weekdays: "daily",
    schedule: "12:00 – 21:00",
    closed: "Closed on Tuesdays",
  },
  allergens: {
    A: "Cereals containing gluten (wheat, rye, barley, oats, spelt)",
    B: "Crustaceans",
    C: "Eggs and egg products",
    D: "Fish and fish products",
    E: "Peanuts",
    F: "Soybeans",
    G: "Milk and milk products (lactose)",
    H: "Nuts (almonds, hazelnuts, walnuts …)",
    I: "Celery",
    J: "Mustard",
    K: "Sesame seeds",
    L: "Sulphur dioxide and sulphites",
    M: "Lupin",
    N: "Molluscs",
  },
  common: {
    with: "With",
    specialtyLabel: "Specialty",
    tagline: "Ristorante Pizzeria",
  },
};

const it: Translations = {
  nav: {
    home: "Home",
    about: "Chi siamo",
    menu: "Menù",
    contact: "Contatti",
    reserve: "Prenota",
    cart: "Carrello",
    callNow: "Chiama ora",
    openMenu: "Apri menù",
    closeMenu: "Chiudi menù",
    language: "Lingua",
  },
  hero: {
    badge: "Ristorante · Meldorf",
    subtitle:
      "Autentica cucina italiana in Südermarkt — pizza al forno, pasta fatta in casa e raffinati antipasti in un ambiente accogliente.",
    cta: "Menù & Ordina",
  },
  about: {
    title: "La Dolce Vita a Meldorf",
    p1: "Nel cuore di Meldorf, sulla pittoresca Südermarkt, il Ristorante Mama Leone vi accoglie con autentica cucina italiana in un ambiente caloroso. Il nostro team unisce ricette tradizionali a ingredienti freschi e selezionati con cura.",
    p2: "Che si tratti di un pranzo rilassato, di una cena romantica o di una serata con amici — vivete l'Italia nel cuore del Dithmarschen.",
    statYears: "Anni di tradizione",
    statDishes: "Piatti",
    quote:
      "Ospitalità italiana nella storica casa a graticcio di Südermarkt.",
    imageAlt: "Ristorante Mama Leone Meldorf",
  },
  gallery: {
    badge: "Impressioni",
    title: "Galleria",
    subtitle: "Uno sguardo alla nostra cucina, all'atmosfera e al Südermarkt a Meldorf.",
    scrollHint: "← Scorri per altre foto →",
    alts: {
      kitchen: "Cucina di Mama Leone",
      exterior: "Ristorante Mama Leone a Meldorf",
      dining: "Sala e atmosfera",
      terrace: "Area esterna al Südermarkt",
    },
  },
  contact: {
    location: "Dove siamo",
    hours: "Orari",
    reservation: "Prenotazione",
    mapTitle: "Posizione Mama Leone",
    openMaps: "Apri in Google Maps",
    openNow: "Aperto ora",
    closedNow: "Chiuso",
    openUntil: "Aperto fino alle {time}",
    opensAt: "Apre alle {time}",
    contactVia: "Come desideri contattarci?",
    whatsapp: "WhatsApp",
  },
  footer: {
    explore: "Scopri",
    contactTitle: "Contatti",
    atmosphere: "Atmosfera",
    watchYoutube: "Guarda su YouTube",
    rights: "Tutti i diritti riservati.",
    motto: "Buon appetito · Meldorf",
    aboutText:
      "Autentica cucina italiana nel cuore di Meldorf — Ristorante Pizzeria.",
    phoneLabel: "Tel.",
  },
  menu: {
    badge: "Menù digitale",
    title: "La Nostra Carta",
    subtitle:
      "Tocca un piatto per aggiungerlo al carrello e inviare l'ordine autonomamente.",
    searchPlaceholder: "Cerca un piatto…",
    all: "Tutti",
    allergenFilter: "Filtro allergeni",
    noFilter: "Nessun filtro",
    noResults: "Nessun piatto trovato.",
    legendTitle: "Indicazione allergeni e additivi",
    addToCart: "al carrello",
    added: "aggiunto",
    spicy: "piccante",
    specialty: "Specialità",
    tapHint: "Tocca per aggiungere",
  },
  cart: {
    title: "Carrello",
    empty: "Scegli i piatti dal menù e aggiungili qui.",
    countOne: "1 articolo",
    countMany: (n) => cartCountMany(n, "1 articolo", "{n} articoli"),
    notesLabel: "Note",
    notesPlaceholder: "es. senza cipolla, tavolo 5 …",
    total: "Totale",
    waiter: "Avvisa il cameriere",
    sms: "Ordine via SMS",
    call: "Chiama",
    confirmTitle: "Conferma ordine",
    confirmDesc:
      "Mostra questo ordine al cameriere. Il carrello verrà svuotato in seguito.",
    confirmBtn: "Conferma",
    cancel: "Annulla",
    confirmed: "Ordine inviato al cameriere",
    orderGreeting: "Buongiorno Mama Leone,",
    orderIntro: "vorrei effettuare il seguente ordine:",
    orderNote: "Nota:",
    orderThanks: "Grazie!",
    continueMenu: "Torna al menù",
  },
  audio: {
    loading: "Caricamento…",
    muteOn: "Attiva audio",
    muteOff: "Disattiva audio",
  },
  meta: {
    homeTitle: "Mama Leone – Ristorante Pizzeria | Meldorf",
    menuTitle: "Menù",
  },
  businessHours: {
    weekdays: "tutti i giorni",
    schedule: "12:00 – 21:00",
    closed: "Chiuso il martedì",
  },
  allergens: {
    A: "Cereali contenenti glutine (grano, segale, orzo, avena, farro)",
    B: "Crostacei",
    C: "Uova e prodotti a base di uova",
    D: "Pesce e prodotti a base di pesce",
    E: "Arachidi",
    F: "Soia",
    G: "Latte e prodotti a base di latte (lattosio)",
    H: "Frutta a guscio (mandorle, nocciole, noci …)",
    I: "Sedano",
    J: "Senape",
    K: "Semi di sesamo",
    L: "Anidride solforosa e solfiti",
    M: "Lupini",
    N: "Molluschi",
  },
  common: {
    with: "Con",
    specialtyLabel: "Specialità",
    tagline: "Ristorante Pizzeria",
  },
};

const fr: Translations = {
  nav: {
    home: "Accueil",
    about: "À propos",
    menu: "Carte",
    contact: "Contact",
    reserve: "Réserver",
    cart: "Panier",
    callNow: "Appeler",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    language: "Langue",
  },
  hero: {
    badge: "Ristorante · Meldorf",
    subtitle:
      "Cuisine italienne authentique à Südermarkt — pizza au four, pâtes maison et antipasti raffinés dans une ambiance chaleureuse.",
    cta: "Carte & Commander",
  },
  about: {
    title: "La Dolce Vita à Meldorf",
    p1: "Au cœur de Meldorf, sur la pittoresque Südermarkt, le Ristorante Mama Leone vous accueille avec une cuisine italienne authentique dans une atmosphère conviviale. Notre équipe allie recettes traditionnelles et ingrédients frais soigneusement sélectionnés.",
    p2: "Que ce soit pour un déjeuner détendu, un dîner romantique ou une soirée entre amis — vivez l'Italie au cœur du Dithmarschen.",
    statYears: "Ans de tradition",
    statDishes: "Plats",
    quote:
      "Hospitalité italienne dans la maison à colombages historique de Südermarkt.",
    imageAlt: "Restaurant Mama Leone Meldorf",
  },
  gallery: {
    badge: "Impressions",
    title: "Galerie",
    subtitle: "Un aperçu de notre cuisine, de l'ambiance et du Südermarkt à Meldorf.",
    scrollHint: "← Faites défiler pour plus de photos →",
    alts: {
      kitchen: "Cuisine de Mama Leone",
      exterior: "Restaurant Mama Leone à Meldorf",
      dining: "Salle et ambiance",
      terrace: "Terrasse au Südermarkt",
    },
  },
  contact: {
    location: "Adresse",
    hours: "Horaires",
    reservation: "Réservation",
    mapTitle: "Emplacement Mama Leone",
    openMaps: "Ouvrir dans Google Maps",
    openNow: "Ouvert maintenant",
    closedNow: "Fermé",
    openUntil: "Ouvert jusqu'à {time}",
    opensAt: "Ouvre à {time}",
    contactVia: "Comment souhaitez-vous nous contacter ?",
    whatsapp: "WhatsApp",
  },
  footer: {
    explore: "Découvrir",
    contactTitle: "Contact",
    atmosphere: "Ambiance",
    watchYoutube: "Voir sur YouTube",
    rights: "Tous droits réservés.",
    motto: "Buon appetito · Meldorf",
    aboutText:
      "Cuisine italienne authentique au cœur de Meldorf — Ristorante Pizzeria.",
    phoneLabel: "Tél.",
  },
  menu: {
    badge: "Carte numérique",
    title: "La Nostra Carta",
    subtitle:
      "Appuyez sur un plat pour l'ajouter au panier et passer votre commande vous-même.",
    searchPlaceholder: "Rechercher un plat…",
    all: "Tous",
    allergenFilter: "Filtre allergènes",
    noFilter: "Aucun filtre",
    noResults: "Aucun plat trouvé.",
    legendTitle: "Indication des allergènes et additifs",
    addToCart: "au panier",
    added: "ajouté",
    spicy: "épicé",
    specialty: "Spécialité",
    tapHint: "Appuyer pour ajouter",
  },
  cart: {
    title: "Panier",
    empty: "Choisissez des plats dans la carte et ajoutez-les ici.",
    countOne: "1 article",
    countMany: (n) => cartCountMany(n, "1 article", "{n} articles"),
    notesLabel: "Remarques",
    notesPlaceholder: "p. ex. sans oignons, table 5 …",
    total: "Total",
    waiter: "Informer le serveur",
    sms: "Commander par SMS",
    call: "Appeler",
    confirmTitle: "Confirmer la commande",
    confirmDesc:
      "Montrez cette commande au serveur. Le panier sera vidé ensuite.",
    confirmBtn: "Confirmer",
    cancel: "Annuler",
    confirmed: "Commande transmise au serveur",
    orderGreeting: "Bonjour Mama Leone,",
    orderIntro: "je souhaite passer la commande suivante :",
    orderNote: "Remarque :",
    orderThanks: "Merci !",
    continueMenu: "Retour à la carte",
  },
  audio: {
    loading: "Chargement…",
    muteOn: "Activer le son",
    muteOff: "Couper le son",
  },
  meta: {
    homeTitle: "Mama Leone – Ristorante Pizzeria | Meldorf",
    menuTitle: "Carte",
  },
  businessHours: {
    weekdays: "tous les jours",
    schedule: "12:00 – 21:00",
    closed: "Fermé le mardi",
  },
  allergens: {
    A: "Céréales contenant du gluten (blé, seigle, orge, avoine, épeautre)",
    B: "Crustacés",
    C: "Œufs et produits à base d'œufs",
    D: "Poissons et produits à base de poisson",
    E: "Arachides",
    F: "Soja",
    G: "Lait et produits laitiers (lactose)",
    H: "Fruits à coque (amandes, noisettes, noix …)",
    I: "Céleri",
    J: "Moutarde",
    K: "Graines de sésame",
    L: "Anhydride sulfureux et sulfites",
    M: "Lupin",
    N: "Mollusques",
  },
  common: {
    with: "Avec",
    specialtyLabel: "Spécialité",
    tagline: "Ristorante Pizzeria",
  },
};

const sq: Translations = {
  nav: {
    home: "Kryefaqja",
    about: "Rreth nesh",
    menu: "Menyja",
    contact: "Kontakt",
    reserve: "Rezervo",
    cart: "Shporta",
    callNow: "Telefono tani",
    openMenu: "Hap menynë",
    closeMenu: "Mbyll menynë",
    language: "Gjuha",
  },
  hero: {
    badge: "Ristorante · Meldorf",
    subtitle:
      "Kuzhinë autentike italiane në Südermarkt — picë nga furrja, makarona shtëpiake dhe antipasti të shkëlqyera në një ambient të ngrohtë.",
    cta: "Menyja & Porosit",
  },
  about: {
    title: "La Dolce Vita në Meldorf",
    p1: "Në zemër të Meldorf-it, në Südermarkt piktoreske, Ristorante Mama Leone ju mirëpret me kuzhinë autentike italiane në një ambient të ngrohtë. Ekipi ynë bashkon receta tradicionale me përbërës të freskët dhe të zgjedhur me kujdes.",
    p2: "Qoftë drekë e relaksuar, darkë romantike apo mbrëmje me miq — përjetoni Italinë në zemër të Dithmarschen-it.",
    statYears: "Vite tradite",
    statDishes: "Pjata",
    quote:
      "Mikpritje italiane në shtëpinë historike me konstruksion druri në Südermarkt.",
    imageAlt: "Restoranti Mama Leone Meldorf",
  },
  gallery: {
    badge: "Impressione",
    title: "Galeria",
    subtitle: "Një vështrim në kuzhinën tonë, atmosferën dhe Südermarkt në Meldorf.",
    scrollHint: "← Rrëshqit për më shumë foto →",
    alts: {
      kitchen: "Kuzhina e Mama Leone",
      exterior: "Restoranti Mama Leone në Meldorf",
      dining: "Salla dhe atmosfera",
      terrace: "Terraca në Südermarkt",
    },
  },
  contact: {
    location: "Vendndodhja",
    hours: "Orari",
    reservation: "Rezervim",
    mapTitle: "Vendndodhja e Mama Leone",
    openMaps: "Hap në Google Maps",
    openNow: "Hapur tani",
    closedNow: "Mbyllur",
    openUntil: "Hapur deri në {time}",
    opensAt: "Hapet në {time}",
    contactVia: "Si dëshironi të na kontaktoni?",
    whatsapp: "WhatsApp",
  },
  footer: {
    explore: "Eksploro",
    contactTitle: "Kontakt",
    atmosphere: "Atmosfera",
    watchYoutube: "Shiko në YouTube",
    rights: "Të gjitha të drejtat e rezervuara.",
    motto: "Buon appetito · Meldorf",
    aboutText:
      "Kuzhinë autentike italiane në zemër të Meldorf-it — Ristorante Pizzeria.",
    phoneLabel: "Tel.",
  },
  menu: {
    badge: "Menyja digjitale",
    title: "La Nostra Carta",
    subtitle:
      "Prekni një pjatë për ta shtuar në shportë dhe për të porositur vetë.",
    searchPlaceholder: "Kërko pjatë…",
    all: "Të gjitha",
    allergenFilter: "Filtri i alergjenëve",
    noFilter: "Pa filtër",
    noResults: "Nuk u gjetën pjata.",
    legendTitle: "Etiketimi i alergjenëve dhe aditivëve",
    addToCart: "në shportë",
    added: "shtuar",
    spicy: "pikante",
    specialty: "Specialitet",
    tapHint: "Prekni për të shtuar",
  },
  cart: {
    title: "Shporta",
    empty: "Zgjidhni pjata nga menyja dhe shtojini këtu.",
    countOne: "1 artikull",
    countMany: (n) => cartCountMany(n, "1 artikull", "{n} artikuj"),
    notesLabel: "Shënime",
    notesPlaceholder: "p.sh. pa qepë, tavolina 5 …",
    total: "Totali",
    waiter: "Njofto kamarierin",
    sms: "Porosi me SMS",
    call: "Telefono",
    confirmTitle: "Konfirmo porosinë",
    confirmDesc:
      "Tregojeni këtë porosi kamarierit. Shporta do të pastrohet më pas.",
    confirmBtn: "Konfirmo",
    cancel: "Anulo",
    confirmed: "Porosia u dërgua te kamarieri",
    orderGreeting: "Përshëndetje Mama Leone,",
    orderIntro: "dëshiroj të bëj porosinë e mëposhtme:",
    orderNote: "Shënim:",
    orderThanks: "Faleminderit!",
    continueMenu: "Kthehu te menyja",
  },
  audio: {
    loading: "Duke u ngarkuar…",
    muteOn: "Ndize zërin",
    muteOff: "Fike zërin",
  },
  meta: {
    homeTitle: "Mama Leone – Ristorante Pizzeria | Meldorf",
    menuTitle: "Menyja",
  },
  businessHours: {
    weekdays: "çdo ditë",
    schedule: "12:00 – 21:00",
    closed: "Mbyllur të martën",
  },
  allergens: {
    A: "Drithëra që përmbajnë gluten (grurë, thekë, elb, tërshërë, speltë)",
    B: "Krustace",
    C: "Vezë dhe produkte nga vezët",
    D: "Peshk dhe produkte nga peshku",
    E: "Kikirikë",
    F: "Sojë",
    G: "Qumësht dhe produkte qumështi (laktozë)",
    H: "Fruta me lëvozhgë (bajame, lajthi, arra …)",
    I: "Selino",
    J: "Mustardë",
    K: "Farë susami",
    L: "Dioksid squfri dhe sulfit",
    M: "Lupin",
    N: "Molusqe",
  },
  common: {
    with: "Me",
    specialtyLabel: "Specialitet",
    tagline: "Ristorante Pizzeria",
  },
};

const sv: Translations = {
  nav: {
    home: "Hem",
    about: "Om oss",
    menu: "Meny",
    contact: "Kontakt",
    reserve: "Boka bord",
    cart: "Varukorg",
    callNow: "Ring nu",
    openMenu: "Öppna menyn",
    closeMenu: "Stäng menyn",
    language: "Språk",
  },
  hero: {
    badge: "Ristorante · Meldorf",
    subtitle:
      "Autentisk italiensk mat vid Südermarkt — pizza från ugnen, hemlagad pasta och fina antipasti i en mysig miljö.",
    cta: "Meny & Beställ",
  },
  about: {
    title: "La Dolce Vita i Meldorf",
    p1: "I hjärtat av Meldorf, vid den pittoreska Südermarkt, välkomnar Ristorante Mama Leone dig med autentisk italiensk mat i en varm och inbjudande miljö. Vårt team förenar traditionella recept med färska, noggrant utvalda råvaror.",
    p2: "Oavsett om det är en avslappnad lunch, en romantisk middag eller en kväll med vänner — upplev Italien mitt i Dithmarschen.",
    statYears: "År av tradition",
    statDishes: "Rätter",
    quote:
      "Italiensk gästfrihet i det historiska korsvirkeshuset vid Südermarkt.",
    imageAlt: "Mama Leone restaurang Meldorf",
  },
  gallery: {
    badge: "Impressioner",
    title: "Galleri",
    subtitle: "En glimt av vårt kök, atmosfären och Südermarkt i Meldorf.",
    scrollHint: "← Svep för fler bilder →",
    alts: {
      kitchen: "Kök på Mama Leone",
      exterior: "Mama Leone restaurang i Meldorf",
      dining: "Matsal och atmosfär",
      terrace: "Uteservering vid Südermarkt",
    },
  },
  contact: {
    location: "Plats",
    hours: "Öppettider",
    reservation: "Bokning",
    mapTitle: "Mama Leone plats",
    openMaps: "Öppna i Google Maps",
    openNow: "Öppet nu",
    closedNow: "Stängt",
    openUntil: "Öppet till {time}",
    opensAt: "Öppnar {time}",
    contactVia: "Hur vill du kontakta oss?",
    whatsapp: "WhatsApp",
  },
  footer: {
    explore: "Utforska",
    contactTitle: "Kontakt",
    atmosphere: "Atmosfär",
    watchYoutube: "Titta på YouTube",
    rights: "Alla rättigheter förbehållna.",
    motto: "Buon appetito · Meldorf",
    aboutText:
      "Autentisk italiensk mat i hjärtat av Meldorf — Ristorante Pizzeria.",
    phoneLabel: "Tel.",
  },
  menu: {
    badge: "Digital meny",
    title: "La Nostra Carta",
    subtitle:
      "Tryck på en rätt för att lägga till den i varukorgen och beställa själv.",
    searchPlaceholder: "Sök rätt…",
    all: "Alla",
    allergenFilter: "Allergifilter",
    noFilter: "Inget filter",
    noResults: "Inga rätter hittades.",
    legendTitle: "Allergen- och tillsatsmärkning",
    addToCart: "i varukorgen",
    added: "tillagd",
    spicy: "stark",
    specialty: "Specialitet",
    tapHint: "Tryck för att lägga till",
  },
  cart: {
    title: "Varukorg",
    empty: "Välj rätter från menyn och lägg till dem här.",
    countOne: "1 artikel",
    countMany: (n) => cartCountMany(n, "1 artikel", "{n} artiklar"),
    notesLabel: "Anmärkningar",
    notesPlaceholder: "t.ex. utan lök, bord 5 …",
    total: "Totalt",
    waiter: "Meddela servitören",
    sms: "Beställ via SMS",
    call: "Ring",
    confirmTitle: "Bekräfta beställning",
    confirmDesc:
      "Visa denna beställning för servitören. Varukorgen töms därefter.",
    confirmBtn: "Bekräfta",
    cancel: "Avbryt",
    confirmed: "Beställning skickad till servitören",
    orderGreeting: "Hej Mama Leone,",
    orderIntro: "jag vill lägga följande beställning:",
    orderNote: "Anmärkning:",
    orderThanks: "Tack!",
    continueMenu: "Till menyn",
  },
  audio: {
    loading: "Laddar…",
    muteOn: "Slå på ljud",
    muteOff: "Stäng av ljud",
  },
  meta: {
    homeTitle: "Mama Leone – Ristorante Pizzeria | Meldorf",
    menuTitle: "Meny",
  },
  businessHours: {
    weekdays: "dagligen",
    schedule: "12:00 – 21:00",
    closed: "Stängt på tisdagar",
  },
  allergens: {
    A: "Spannmål som innehåller gluten (vete, råg, korn, havre, spelt)",
    B: "Kräftdjur",
    C: "Ägg och äggprodukter",
    D: "Fisk och fiskprodukter",
    E: "Jordnötter",
    F: "Soja",
    G: "Mjölk och mjölkprodukter (laktos)",
    H: "Nötter (mandlar, hasselnötter, valnötter …)",
    I: "Selleri",
    J: "Senap",
    K: "Sesamfrön",
    L: "Svaveldioxid och sulfiter",
    M: "Lupin",
    N: "Blötdjur",
  },
  common: {
    with: "Med",
    specialtyLabel: "Specialitet",
    tagline: "Ristorante Pizzeria",
  },
};

const no: Translations = {
  nav: {
    home: "Hjem",
    about: "Om oss",
    menu: "Meny",
    contact: "Kontakt",
    reserve: "Reserver",
    cart: "Handlekurv",
    callNow: "Ring nå",
    openMenu: "Åpne meny",
    closeMenu: "Lukk meny",
    language: "Språk",
  },
  hero: {
    badge: "Ristorante · Meldorf",
    subtitle:
      "Autentisk italiensk mat ved Südermarkt — pizza fra ovnen, hjemmelaget pasta og fine antipasti i en koselig atmosfære.",
    cta: "Meny & Bestill",
  },
  about: {
    title: "La Dolce Vita i Meldorf",
    p1: "I hjertet av Meldorf, ved den pittoreske Südermarkt, ønsker Ristorante Mama Leone deg velkommen med autentisk italiensk mat i en varm og innbydende atmosfære. Vårt team kombinerer tradisjonelle oppskrifter med ferske, nøye utvalgte råvarer.",
    p2: "Enten det er en avslappet lunsj, en romantisk middag eller en kveld med venner — opplev Italia midt i Dithmarschen.",
    statYears: "År med tradisjon",
    statDishes: "Retter",
    quote:
      "Italiensk gjestfrihet i det historiske bindingsverkshuset ved Südermarkt.",
    imageAlt: "Mama Leone restaurant Meldorf",
  },
  gallery: {
    badge: "Inntrykk",
    title: "Galleri",
    subtitle: "Et glimt av kjøkkenet vårt, atmosfæren og Südermarkt i Meldorf.",
    scrollHint: "← Sveip for flere bilder →",
    alts: {
      kitchen: "Kjøkken hos Mama Leone",
      exterior: "Mama Leone restaurant i Meldorf",
      dining: "Spisesal og atmosfære",
      terrace: "Uteservering ved Südermarkt",
    },
  },
  contact: {
    location: "Beliggenhet",
    hours: "Åpningstider",
    reservation: "Reservasjon",
    mapTitle: "Mama Leone beliggenhet",
    openMaps: "Åpne i Google Maps",
    openNow: "Åpent nå",
    closedNow: "Stengt",
    openUntil: "Åpent til {time}",
    opensAt: "Åpner {time}",
    contactVia: "Hvordan vil du kontakte oss?",
    whatsapp: "WhatsApp",
  },
  footer: {
    explore: "Utforsk",
    contactTitle: "Kontakt",
    atmosphere: "Atmosfære",
    watchYoutube: "Se på YouTube",
    rights: "Alle rettigheter reservert.",
    motto: "Buon appetito · Meldorf",
    aboutText:
      "Autentisk italiensk mat i hjertet av Meldorf — Ristorante Pizzeria.",
    phoneLabel: "Tlf.",
  },
  menu: {
    badge: "Digital meny",
    title: "La Nostra Carta",
    subtitle:
      "Trykk på en rett for å legge den i handlekurven og bestille selv.",
    searchPlaceholder: "Søk rett…",
    all: "Alle",
    allergenFilter: "Allergifilter",
    noFilter: "Ingen filter",
    noResults: "Ingen retter funnet.",
    legendTitle: "Allergen- og tilsetningsstoffmerking",
    addToCart: "i handlekurven",
    added: "lagt til",
    spicy: "sterk",
    specialty: "Spesialitet",
    tapHint: "Trykk for å legge til",
  },
  cart: {
    title: "Handlekurv",
    empty: "Velg retter fra menyen og legg dem til her.",
    countOne: "1 vare",
    countMany: (n) => cartCountMany(n, "1 vare", "{n} varer"),
    notesLabel: "Merknader",
    notesPlaceholder: "f.eks. uten løk, bord 5 …",
    total: "Totalt",
    waiter: "Gi beskjed til kelneren",
    sms: "Bestill via SMS",
    call: "Ring",
    confirmTitle: "Bekreft bestilling",
    confirmDesc:
      "Vis denne bestillingen til kelneren. Handlekurven tømmes etterpå.",
    confirmBtn: "Bekreft",
    cancel: "Avbryt",
    confirmed: "Bestilling sendt til kelneren",
    orderGreeting: "Hei Mama Leone,",
    orderIntro: "jeg vil legge inn følgende bestilling:",
    orderNote: "Merknad:",
    orderThanks: "Takk!",
    continueMenu: "Til menyen",
  },
  audio: {
    loading: "Laster…",
    muteOn: "Slå på lyd",
    muteOff: "Slå av lyd",
  },
  meta: {
    homeTitle: "Mama Leone – Ristorante Pizzeria | Meldorf",
    menuTitle: "Meny",
  },
  businessHours: {
    weekdays: "daglig",
    schedule: "12:00 – 21:00",
    closed: "Stengt på tirsdager",
  },
  allergens: {
    A: "Korn som inneholder gluten (hvete, rug, bygg, havre, spelt)",
    B: "Skalldyr",
    C: "Egg og eggprodukter",
    D: "Fisk og fiskeprodukter",
    E: "Peanøtter",
    F: "Soya",
    G: "Melk og melkeprodukter (laktose)",
    H: "Nøtter (mandler, hasselnøtter, valnøtter …)",
    I: "Selleri",
    J: "Sennep",
    K: "Sesamfrø",
    L: "Svoveldioksid og sulfitter",
    M: "Lupin",
    N: "Bløtdyr",
  },
  common: {
    with: "Med",
    specialtyLabel: "Spesialitet",
    tagline: "Ristorante Pizzeria",
  },
};

const da: Translations = {
  nav: {
    home: "Hjem",
    about: "Om os",
    menu: "Menukort",
    contact: "Kontakt",
    reserve: "Reserver",
    cart: "Kurv",
    callNow: "Ring nu",
    openMenu: "Åbn menu",
    closeMenu: "Luk menu",
    language: "Sprog",
  },
  hero: {
    badge: "Ristorante · Meldorf",
    subtitle:
      "Autentisk italiensk mad ved Südermarkt — pizza fra ovnen, hjemmelavet pasta og fine antipasti i hyggelige omgivelser.",
    cta: "Menu & Bestil",
  },
  about: {
    title: "La Dolce Vita i Meldorf",
    p1: "I hjertet af Meldorf, ved den pittoreske Südermarkt, byder Ristorante Mama Leone dig velkommen med autentisk italiensk mad i en varm og indbydende atmosfære. Vores team forener traditionelle opskrifter med friske, omhyggeligt udvalgte råvarer.",
    p2: "Uanset om det er en afslappet frokost, en romantisk middag eller en aften med venner — oplev Italien midt i Dithmarschen.",
    statYears: "Års tradition",
    statDishes: "Retter",
    quote:
      "Italiensk gæstfrihed i det historiske bindingsværkshus ved Südermarkt.",
    imageAlt: "Mama Leone restaurant Meldorf",
  },
  gallery: {
    badge: "Indtryk",
    title: "Galleri",
    subtitle: "Et glimt af vores køkken, atmosfære og Südermarkt i Meldorf.",
    scrollHint: "← Swipe for flere billeder →",
    alts: {
      kitchen: "Køkken hos Mama Leone",
      exterior: "Mama Leone restaurant i Meldorf",
      dining: "Spisesal og atmosfære",
      terrace: "Udendørs siddepladser ved Südermarkt",
    },
  },
  contact: {
    location: "Beliggenhed",
    hours: "Åbningstider",
    reservation: "Reservation",
    mapTitle: "Mama Leone beliggenhed",
    openMaps: "Åbn i Google Maps",
    openNow: "Åbent nu",
    closedNow: "Lukket",
    openUntil: "Åbent til {time}",
    opensAt: "Åbner {time}",
    contactVia: "Hvordan vil du kontakte os?",
    whatsapp: "WhatsApp",
  },
  footer: {
    explore: "Udforsk",
    contactTitle: "Kontakt",
    atmosphere: "Atmosfære",
    watchYoutube: "Se på YouTube",
    rights: "Alle rettigheder forbeholdes.",
    motto: "Buon appetito · Meldorf",
    aboutText:
      "Autentisk italiensk mad i hjertet af Meldorf — Ristorante Pizzeria.",
    phoneLabel: "Tlf.",
  },
  menu: {
    badge: "Digital menu",
    title: "La Nostra Carta",
    subtitle:
      "Tryk på en ret for at tilføje den til kurven og bestille selv.",
    searchPlaceholder: "Søg ret…",
    all: "Alle",
    allergenFilter: "Allergifilter",
    noFilter: "Intet filter",
    noResults: "Ingen retter fundet.",
    legendTitle: "Allergen- og tilsætningsstofmærkning",
    addToCart: "til kurven",
    added: "tilføjet",
    spicy: "stærk",
    specialty: "Specialitet",
    tapHint: "Tryk for at tilføje",
  },
  cart: {
    title: "Kurv",
    empty: "Vælg retter fra menukortet og tilføj dem her.",
    countOne: "1 vare",
    countMany: (n) => cartCountMany(n, "1 vare", "{n} varer"),
    notesLabel: "Bemærkninger",
    notesPlaceholder: "f.eks. uden løg, bord 5 …",
    total: "I alt",
    waiter: "Giv besked til tjeneren",
    sms: "Bestil via SMS",
    call: "Ring",
    confirmTitle: "Bekræft bestilling",
    confirmDesc:
      "Vis denne bestilling til tjeneren. Kurven tømmes bagefter.",
    confirmBtn: "Bekræft",
    cancel: "Annuller",
    confirmed: "Bestilling sendt til tjeneren",
    orderGreeting: "Hej Mama Leone,",
    orderIntro: "jeg vil gerne afgive følgende bestilling:",
    orderNote: "Bemærkning:",
    orderThanks: "Tak!",
    continueMenu: "Til menukortet",
  },
  audio: {
    loading: "Indlæser…",
    muteOn: "Slå lyd til",
    muteOff: "Slå lyd fra",
  },
  meta: {
    homeTitle: "Mama Leone – Ristorante Pizzeria | Meldorf",
    menuTitle: "Menu",
  },
  businessHours: {
    weekdays: "dagligt",
    schedule: "12:00 – 21:00",
    closed: "Lukket om tirsdagen",
  },
  allergens: {
    A: "Korn, der indeholder gluten (hvede, rug, byg, havre, spelt)",
    B: "Krebsdyr",
    C: "Æg og ægprodukter",
    D: "Fisk og fiskeprodukter",
    E: "Jordnødder",
    F: "Soja",
    G: "Mælk og mælkeprodukter (laktose)",
    H: "Nødder (mandler, hasselnødder, valnødder …)",
    I: "Selleri",
    J: "Sennep",
    K: "Sesamfrø",
    L: "Svovldioxid og sulfitter",
    M: "Lupin",
    N: "Bløddyr",
  },
  common: {
    with: "Med",
    specialtyLabel: "Specialitet",
    tagline: "Ristorante Pizzeria",
  },
};

const fi: Translations = {
  nav: {
    home: "Etusivu",
    about: "Meistä",
    menu: "Ruokalista",
    contact: "Yhteystiedot",
    reserve: "Varaa pöytä",
    cart: "Ostoskori",
    callNow: "Soita nyt",
    openMenu: "Avaa valikko",
    closeMenu: "Sulje valikko",
    language: "Kieli",
  },
  hero: {
    badge: "Ristorante · Meldorf",
    subtitle:
      "Aitoa italialaista ruokaa Südermarktilla — uunipizza, kotitekoinen pasta ja hienot antipastit kodikkaassa ympäristössä.",
    cta: "Ruokalista & Tilaa",
  },
  about: {
    title: "La Dolce Vita Meldorfissa",
    p1: "Meldorfin sydämessä, viehättävällä Südermarktilla, Ristorante Mama Leone toivottaa sinut tervetulleeksi aitoon italialaiseen keittiöön lämpimässä ja viihtyisässä ympäristössä. Tiimimme yhdistää perinteiset reseptit tuoreisiin, huolella valittuihin raaka-aineisiin.",
    p2: "Olipa kyseessä rento lounas, romanttinen illallinen tai ilta ystävien kanssa — koe Italia Dithmarschenin sydämessä.",
    statYears: "Vuotta perinnettä",
    statDishes: "Ruokalajia",
    quote:
      "Italialaista vieraanvaraisuutta historiallisessa Südermarktin puutalo talossa.",
    imageAlt: "Mama Leone -ravintola Meldorf",
  },
  gallery: {
    badge: "Vaikutelmia",
    title: "Galleria",
    subtitle: "Katsaus keittiöömme, tunnelmaan ja Südermarktiin Meldorfissa.",
    scrollHint: "← Pyyhkäise nähdäksesi lisää kuvia →",
    alts: {
      kitchen: "Mama Leonen keittiö",
      exterior: "Mama Leone -ravintola Meldorfissa",
      dining: "Sali ja tunnelma",
      terrace: "Terassi Südermarktilla",
    },
  },
  contact: {
    location: "Sijainti",
    hours: "Aukioloajat",
    reservation: "Varaus",
    mapTitle: "Mama Leonen sijainti",
    openMaps: "Avaa Google Mapsissa",
    openNow: "Avoinna nyt",
    closedNow: "Suljettu",
    openUntil: "Avoinna klo {time} asti",
    opensAt: "Avautuu klo {time}",
    contactVia: "Miten haluat ottaa yhteyttä?",
    whatsapp: "WhatsApp",
  },
  footer: {
    explore: "Tutustu",
    contactTitle: "Yhteystiedot",
    atmosphere: "Tunnelma",
    watchYoutube: "Katso YouTubessa",
    rights: "Kaikki oikeudet pidätetään.",
    motto: "Buon appetito · Meldorf",
    aboutText:
      "Aitoa italialaista ruokaa Meldorfin sydämessä — Ristorante Pizzeria.",
    phoneLabel: "Puh.",
  },
  menu: {
    badge: "Digitaalinen ruokalista",
    title: "La Nostra Carta",
    subtitle:
      "Napauta ruokalajia lisätäksesi sen ostoskoriin ja tehdäksesi tilauksen itse.",
    searchPlaceholder: "Etsi ruokalajia…",
    all: "Kaikki",
    allergenFilter: "Allergeenisuodatin",
    noFilter: "Ei suodatinta",
    noResults: "Ruokalajeja ei löytynyt.",
    legendTitle: "Allergeeni- ja lisäainemerkinnät",
    addToCart: "ostoskoriin",
    added: "lisätty",
    spicy: "tulinen",
    specialty: "Erikoisuus",
    tapHint: "Napauta lisätäksesi",
  },
  cart: {
    title: "Ostoskori",
    empty: "Valitse ruokalajeja listalta ja lisää ne tähän.",
    countOne: "1 tuote",
    countMany: (n) => cartCountMany(n, "1 tuote", "{n} tuotetta"),
    notesLabel: "Huomautukset",
    notesPlaceholder: "esim. ilman sipulia, pöytä 5 …",
    total: "Yhteensä",
    waiter: "Ilmoita tarjoilijalle",
    sms: "Tilaa tekstiviestillä",
    call: "Soita",
    confirmTitle: "Vahvista tilaus",
    confirmDesc:
      "Näytä tämä tilaus tarjoilijalle. Ostoskori tyhjennetään sen jälkeen.",
    confirmBtn: "Vahvista",
    cancel: "Peruuta",
    confirmed: "Tilaus välitetty tarjoilijalle",
    orderGreeting: "Hei Mama Leone,",
    orderIntro: "haluaisin tehdä seuraavan tilauksen:",
    orderNote: "Huomautus:",
    orderThanks: "Kiitos!",
    continueMenu: "Takaisin ruokalistaan",
  },
  audio: {
    loading: "Ladataan…",
    muteOn: "Kytke ääni päälle",
    muteOff: "Kytke ääni pois",
  },
  meta: {
    homeTitle: "Mama Leone – Ristorante Pizzeria | Meldorf",
    menuTitle: "Ruokalista",
  },
  businessHours: {
    weekdays: "päivittäin",
    schedule: "12:00 – 21:00",
    closed: "Suljettu tiistaisin",
  },
  allergens: {
    A: "Gluteenia sisältävät viljat (vehnä, ruis, ohra, kaura, speltti)",
    B: "Äyriäiset",
    C: "Kananmunat ja kananmunatuotteet",
    D: "Kala ja kalatuotteet",
    E: "Maapähkinät",
    F: "Soija",
    G: "Maito ja maitotuotteet (laktoosi)",
    H: "Pähkinät (mantelit, hasselpähkinät, saksanpähkinät …)",
    I: "Selleri",
    J: "Sinappi",
    K: "Seesaminsiemenet",
    L: "Riippihappo ja sulfiitit",
    M: "Lupiini",
    N: "Nilviäiset",
  },
  common: {
    with: "Kanssa",
    specialtyLabel: "Erikoisuus",
    tagline: "Ristorante Pizzeria",
  },
};

const is: Translations = {
  nav: {
    home: "Heim",
    about: "Um okkur",
    menu: "Matseðill",
    contact: "Samband",
    reserve: "Bóka borð",
    cart: "Karfa",
    callNow: "Hringja núna",
    openMenu: "Opna valmynd",
    closeMenu: "Loka valmynd",
    language: "Tungumál",
  },
  hero: {
    badge: "Ristorante · Meldorf",
    subtitle:
      "Ekta ítalsk matreiðsla við Südermarkt — pítsa úr ofni, heimagerð pasta og fínir antipasti í notalegu umhverfi.",
    cta: "Matseðill & Panta",
  },
  about: {
    title: "La Dolce Vita í Meldorf",
    p1: "Í hjarta Meldorf, við myndríka Südermarkt, tekur Ristorante Mama Leone á móti þér með ekta ítalskri matreiðslu í hlýju og notalegu umhverfi. Liðið okkar sameinar hefðbundnar uppskriftir og fersk, vandlega valin hráefni.",
    p2: "Hvort sem það er afslappaður hádegismatur, rómantísk kvöldmatur eða kvöld með vinum — upplifðu Ítalíu í hjarta Dithmarschen.",
    statYears: "Ár af hefð",
    statDishes: "Réttir",
    quote:
      "Ítalsk gestrisni í sögulegu timburhúsi við Südermarkt.",
    imageAlt: "Mama Leone veitingastaður Meldorf",
  },
  gallery: {
    badge: "Myndir",
    title: "Gallerí",
    subtitle: "Innsýn í eldhúsið okkar, andrúmsloftið og Südermarkt í Meldorf.",
    scrollHint: "← Strjúktu til að sjá fleiri myndir →",
    alts: {
      kitchen: "Eldhús Mama Leone",
      exterior: "Mama Leone veitingastaður í Meldorf",
      dining: "Salur og andrúmsloft",
      terrace: "Útisvæði við Südermarkt",
    },
  },
  contact: {
    location: "Staðsetning",
    hours: "Opnunartími",
    reservation: "Bókun",
    mapTitle: "Staðsetning Mama Leone",
    openMaps: "Opna í Google Maps",
    openNow: "Opið núna",
    closedNow: "Lokað",
    openUntil: "Opið til {time}",
    opensAt: "Opnar kl. {time}",
    contactVia: "Hvernig viltu hafa samband?",
    whatsapp: "WhatsApp",
  },
  footer: {
    explore: "Skoða",
    contactTitle: "Samband",
    atmosphere: "Andrúmsloft",
    watchYoutube: "Horfa á YouTube",
    rights: "Allur réttur áskilinn.",
    motto: "Buon appetito · Meldorf",
    aboutText:
      "Ekta ítalsk matreiðsla í hjarta Meldorf — Ristorante Pizzeria.",
    phoneLabel: "Sími",
  },
  menu: {
    badge: "Stafrænn matseðill",
    title: "La Nostra Carta",
    subtitle:
      "Ýttu á rétt til að bæta honum í körfuna og panta sjálfur.",
    searchPlaceholder: "Leita að rétt…",
    all: "Allt",
    allergenFilter: "Ofnæmis síun",
    noFilter: "Engin síun",
    noResults: "Engir réttir fundust.",
    legendTitle: "Ofnæmis- og aukefnamerking",
    addToCart: "í körfuna",
    added: "bætt við",
    spicy: "sterkur",
    specialty: "Sérstakur",
    tapHint: "Ýttu til að bæta við",
  },
  cart: {
    title: "Karfa",
    empty: "Veldu rétti af matseðlinum og bættu þeim hér.",
    countOne: "1 vara",
    countMany: (n) => cartCountMany(n, "1 vara", "{n} vörur"),
    notesLabel: "Athugasemdir",
    notesPlaceholder: "t.d. án lauk, borð 5 …",
    total: "Samtals",
    waiter: "Láta þjón vita",
    sms: "Panta með SMS",
    call: "Hringja",
    confirmTitle: "Staðfesta pöntun",
    confirmDesc:
      "Sýndu þessa pöntun þjóninum. Körfunni verður hreinsað eftir á.",
    confirmBtn: "Staðfesta",
    cancel: "Hætta við",
    confirmed: "Pöntun send til þjóns",
    orderGreeting: "Góðan dag Mama Leone,",
    orderIntro: "ég vil panta eftirfarandi:",
    orderNote: "Athugasemd:",
    orderThanks: "Takk fyrir!",
    continueMenu: "Aftur á matseðil",
  },
  audio: {
    loading: "Hleður…",
    muteOn: "Kveikja á hljóði",
    muteOff: "Slökkva á hljóði",
  },
  meta: {
    homeTitle: "Mama Leone – Ristorante Pizzeria | Meldorf",
    menuTitle: "Matseðill",
  },
  businessHours: {
    weekdays: "daglega",
    schedule: "12:00 – 21:00",
    closed: "Lokað á þriðjudögum",
  },
  allergens: {
    A: "Korn sem innihalda glúten (hveiti, rúg, bygg, hafrar, spelt)",
    B: "Krabbadýr",
    C: "Egg og eggvörur",
    D: "Fiskur og fiskvörur",
    E: "Hnetur",
    F: "Soja",
    G: "Mjólk og mjólkurvörur (laktósi)",
    H: "Hnetur (mandlar, heslihnetur, valhnetur …)",
    I: "Sellerí",
    J: "Sinnep",
    K: "Sesamfræ",
    L: "Brennisteinsdíoxíð og súlfít",
    M: "Lúpína",
    N: "Lindýr",
  },
  common: {
    with: "Með",
    specialtyLabel: "Sérstakur",
    tagline: "Ristorante Pizzeria",
  },
};

export const translations: Record<Language, Translations> = {
  de,
  en,
  it,
  fr,
  sq,
  sv,
  no,
  da,
  fi,
  is,
};

export function getTranslations(lang: Language): Translations {
  return translations[lang] ?? translations.de;
}
