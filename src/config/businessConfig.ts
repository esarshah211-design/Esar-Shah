/**
 * KS CAFE — Centralized Business Configuration
 *
 * IMPORTANT DATA INTEGRITY RULE:
 * As specified in the design brief, never invent business facts, phone numbers,
 * operating hours, prices, or customer reviews.
 *
 * This configuration clearly distinguishes between:
 * 1. Verified Production Information (confirmed by the business owner)
 * 2. Unverified Placeholders (labeled for the owner to update before public launch)
 * 3. Sample Demo Data (used strictly for layout demonstration when enabled)
 */

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  description: string;
  pricePKR: number | null; // null if unverified
  isPopular?: boolean;
  isVegetarian?: boolean;
  dietaryNote?: string;
  samplePlaceholder?: boolean; // true if this is demo preview
  imageCategory: 'espresso' | 'cappuccino' | 'iced_latte' | 'matcha' | 'croissant' | 'cake' | 'sandwich' | 'pour_over';
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
}

export interface DayHours {
  day: string;
  opens: string;
  closes: string;
  isClosed?: boolean;
  isPendingVerification?: boolean;
}

export interface BusinessConfig {
  businessName: string;
  businessCategory: string;
  tagline: string;
  shortDescription: string;
  fullStory: string;
  
  // Verification states
  isAddressVerified: boolean;
  fullAddress: string;
  locality: string;
  city: string;
  postalCode: string;
  country: string;
  coordinates: {
    lat: number;
    lng: number;
  } | null;

  // Contact Channels (null if unverified)
  isPhoneVerified: boolean;
  phoneNumber: string | null; // e.g. "+92 300 1234567"
  
  isWhatsAppVerified: boolean;
  whatsAppNumber: string | null; // international digits without symbols e.g. "923001234567"
  whatsAppDefaultMessage: string;

  isEmailVerified: boolean;
  emailAddress: string | null;

  // External Links
  googleBusinessProfileUrl: string;
  googleMapsDirectionsUrl: string;
  googleMapsEmbedQuery: string;

  socialLinks: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
  };

  // Operating Hours
  areHoursVerified: boolean;
  hours: DayHours[];

  // Confirmed Services
  services: {
    dineIn: boolean;
    takeaway: boolean;
    delivery: boolean;
    outdoorSeating: boolean;
    freeWifi: boolean;
    isPendingVerification: boolean;
  };

  // Menu Data
  isMenuVerified: boolean;
  menuCurrency: string;
  menuCategories: MenuCategory[];
  verifiedMenuItems: MenuItem[];
  sampleDemoMenuItems: MenuItem[];

  // Reviews
  isReviewsVerified: boolean;
  googleReviewInviteText: string;
}

export const defaultBusinessConfig: BusinessConfig = {
  businessName: "KS CAFE",
  businessCategory: "Café & Coffee Bar",
  tagline: "Good Moments Start at KS CAFE",
  shortDescription: "A welcoming independent café offering handcrafted coffee, specialty refreshments, and an atmosphere made for good moments.",
  fullStory: "KS CAFE was founded on a simple passion: to create an inviting local destination where friends, families, and coffee lovers can gather over carefully prepared beverages and honest hospitality. We take pride in our warm space, thoughtful service, and dedication to community.",
  
  // Verified from Google Business Profile link provided: https://maps.app.goo.gl/ypch6kTP9UQMMmAE6
  isAddressVerified: false,
  fullAddress: "KS CAFE, Locality pending owner verification",
  locality: "Pending Owner Verification",
  city: "Islamabad / Rawalpindi Area",
  postalCode: "Pending",
  country: "Pakistan",
  coordinates: null,

  // Contact channels — left unverified as requested until confirmed by the owner
  isPhoneVerified: false,
  phoneNumber: null, // Set by owner e.g. "+92 300 0000000"

  isWhatsAppVerified: false,
  whatsAppNumber: null, // Set by owner e.g. "923000000000"
  whatsAppDefaultMessage: "Hello KS CAFE, I would like to enquire about your menu and visit hours.",

  isEmailVerified: false,
  emailAddress: null,

  // Provided verified Google Business Profile link
  googleBusinessProfileUrl: "https://maps.app.goo.gl/ypch6kTP9UQMMmAE6",
  googleMapsDirectionsUrl: "https://maps.app.goo.gl/ypch6kTP9UQMMmAE6",
  googleMapsEmbedQuery: "KS+CAFE",

  socialLinks: {
    instagram: "",
    facebook: "",
    tiktok: "",
  },

  areHoursVerified: false,
  hours: [
    { day: "Monday", opens: "08:00 AM", closes: "11:00 PM", isPendingVerification: true },
    { day: "Tuesday", opens: "08:00 AM", closes: "11:00 PM", isPendingVerification: true },
    { day: "Wednesday", opens: "08:00 AM", closes: "11:00 PM", isPendingVerification: true },
    { day: "Thursday", opens: "08:00 AM", closes: "11:00 PM", isPendingVerification: true },
    { day: "Friday", opens: "08:00 AM", closes: "12:00 AM", isPendingVerification: true },
    { day: "Saturday", opens: "08:00 AM", closes: "12:00 AM", isPendingVerification: true },
    { day: "Sunday", opens: "09:00 AM", closes: "11:00 PM", isPendingVerification: true },
  ],

  services: {
    dineIn: true,
    takeaway: true,
    delivery: false,
    outdoorSeating: true,
    freeWifi: true,
    isPendingVerification: true,
  },

  // Verified menu items: empty until the owner inputs them
  isMenuVerified: false,
  menuCurrency: "PKR",
  
  menuCategories: [
    { id: "hot-coffee", name: "Hot Brews & Espresso", description: "Carefully roasted beans extracted with precision and steamed milk." },
    { id: "iced-beverages", name: "Iced & Refreshers", description: "Chilled cold brews, blended frappes, and sparkling artisanal infusions." },
    { id: "specialty-tea", name: "Specialty Teas & Chai", description: "Traditional aromatic blends, green teas, and spiced infusions." },
    { id: "bakery-pastries", name: "Bakes & Pastries", description: "Buttery viennoiserie, decadent cakes, and artisanal pastries." },
    { id: "savory-fare", name: "Light Fare & Toasts", description: "Freshly made sandwiches, toasted paninis, and wholesome bites." }
  ],

  verifiedMenuItems: [],

  // Sample items shown ONLY when the user or owner enables the sample preview switch
  sampleDemoMenuItems: [
    {
      id: "demo-1",
      name: "Signature Spanish Latte",
      category: "hot-coffee",
      description: "Double ristretto blended with textured sweetened condensed milk and velvety whole milk.",
      pricePKR: 620,
      isPopular: true,
      samplePlaceholder: true,
      imageCategory: "espresso"
    },
    {
      id: "demo-2",
      name: "Artisan Caramel Macchiato",
      category: "hot-coffee",
      description: "Freshly steamed milk with vanilla syrup, marked with espresso and finished with house caramel drizzle.",
      pricePKR: 650,
      isPopular: true,
      samplePlaceholder: true,
      imageCategory: "cappuccino"
    },
    {
      id: "demo-3",
      name: "Single Origin Pour Over",
      category: "hot-coffee",
      description: "Clean, nuanced batch-brewed filter coffee with notes of dark chocolate and bergamot.",
      pricePKR: 580,
      samplePlaceholder: true,
      imageCategory: "pour_over"
    },
    {
      id: "demo-4",
      name: "Iced Shaken Brown Sugar Latte",
      category: "iced-beverages",
      description: "Espresso hand-shaken with brown sugar, organic cinnamon, and oat milk over crystal ice.",
      pricePKR: 680,
      isPopular: true,
      samplePlaceholder: true,
      imageCategory: "iced_latte"
    },
    {
      id: "demo-5",
      name: "Matcha Cloud Infusion",
      category: "iced-beverages",
      description: "Ceremonial Japanese Uji matcha poured over chilled vanilla milk with cold sweet cream foam.",
      pricePKR: 720,
      isVegetarian: true,
      samplePlaceholder: true,
      imageCategory: "matcha"
    },
    {
      id: "demo-6",
      name: "Artisanal Butter Croissant",
      category: "bakery-pastries",
      description: "Flaky, multi-layered French butter pastry baked fresh each morning with golden crispy edges.",
      pricePKR: 420,
      isVegetarian: true,
      samplePlaceholder: true,
      imageCategory: "croissant"
    },
    {
      id: "demo-7",
      name: "Belgian Chocolate Fudge Cake",
      category: "bakery-pastries",
      description: "Decadent dark cocoa sponge layered with silken dark chocolate ganache.",
      pricePKR: 540,
      isPopular: true,
      isVegetarian: true,
      samplePlaceholder: true,
      imageCategory: "cake"
    },
    {
      id: "demo-8",
      name: "Smoked Turkey & Pesto Panini",
      category: "savory-fare",
      description: "Sourdough pressed with seasoned smoked turkey, basil walnut pesto, and melted mozzarella.",
      pricePKR: 790,
      samplePlaceholder: true,
      imageCategory: "sandwich"
    }
  ],

  // Google Reviews invitation
  isReviewsVerified: false,
  googleReviewInviteText: "We value genuine feedback from our guests. Read verified reviews and see recent visitor photos directly on our official Google Business Profile."
};
