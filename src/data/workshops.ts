import { Workshop } from '../types/workshop';

export const upcomingWorkshops: Workshop[] = [
  {
    id: 'watercolor-wine',
    title: "Watercolor & Wine Evening",
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&q=80",
    price: "$125",
    date: "March 15, 2024",
    time: "6:30 PM - 9:00 PM",
    spots: 4,
    description: "An intimate evening of watercolor painting inspired by French gardens",
    longDescription: "Join us for an enchanting evening where the delicate art of watercolor meets the refined pleasure of wine tasting. Under soft lighting and surrounded by the ambiance of a Parisian atelier, you'll learn essential watercolor techniques while enjoying carefully selected French wines. Perfect for both beginners and intermediate artists looking to enhance their skills in a sophisticated, social setting.",
    materials: [
      "Professional watercolor paper",
      "Artist-grade watercolor paints",
      "Selection of brushes",
      "Wine and refreshments",
      "Take-home art kit"
    ],
    duration: "2.5 hours",
    skillLevel: "All levels welcome"
  },
  {
    id: 'flower-arranging',
    title: "Parisian Flower Arranging",
    image: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&q=80",
    price: "$145",
    date: "March 22, 2024",
    time: "2:00 PM - 4:30 PM",
    spots: 2,
    description: "Create stunning bouquets with seasonal blooms and French techniques",
    longDescription: "Immerse yourself in the art of French flower arranging. This workshop brings the essence of Parisian flower markets to Wellington. Learn professional techniques for creating stunning arrangements while enjoying champagne and macarons. You'll discover the secrets of color harmony, texture balance, and the perfect composition that makes French bouquets so distinctive.",
    materials: [
      "Premium seasonal flowers",
      "Professional florist tools",
      "Luxury vase",
      "Champagne and macarons",
      "Care guide and tips"
    ],
    duration: "2.5 hours",
    skillLevel: "Beginner to Intermediate"
  },
  {
    id: 'oil-painting',
    title: "Provence Oil Painting",
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&q=80",
    price: "$165",
    date: "March 29, 2024",
    time: "1:00 PM - 4:00 PM",
    spots: 6,
    description: "Capture the essence of Provence with oils on canvas",
    longDescription: "Transport yourself to the lavender fields of Provence in this immersive oil painting workshop. Under expert guidance, you'll learn the fundamentals of oil painting while creating your own masterpiece inspired by the French countryside. This workshop combines technical instruction with creative freedom, all while enjoying French music and refreshments.",
    materials: [
      "Professional oil paints",
      "Canvas",
      "Brushes and palette",
      "Apron",
      "French refreshments",
      "Take-home painting kit"
    ],
    duration: "3 hours",
    skillLevel: "Intermediate"
  }
];

export const pastWorkshops: Workshop[] = [
  {
    id: 'past-watercolor',
    title: "Winter Watercolor Soirée",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80",
    price: "$125",
    date: "February 15, 2024",
    time: "6:30 PM - 9:00 PM",
    spots: 0,
    description: "A magical evening of watercolor painting and French wine",
    longDescription: "This enchanting workshop combined the delicate art of watercolor with carefully selected French wines.",
    materials: [],
    duration: "2.5 hours",
    skillLevel: "All levels welcome"
  },
  {
    id: 'past-bouquet',
    title: "Valentine's Day Bouquets",
    image: "https://images.unsplash.com/photo-1455582916367-25f75bfc6710?auto=format&fit=crop&q=80",
    price: "$145",
    date: "February 14, 2024",
    time: "2:00 PM - 4:30 PM",
    spots: 0,
    description: "Special Valentine's Day flower arranging workshop",
    longDescription: "A romantic afternoon creating stunning bouquets with seasonal Valentine's blooms.",
    materials: [],
    duration: "2.5 hours",
    skillLevel: "Beginner"
  }
];

export const workshops = [...upcomingWorkshops, ...pastWorkshops];