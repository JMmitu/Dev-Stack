// This file describes the "shape" of one technology object.
// TypeScript will use this to warn us if we ever forget a field
// or spell a field name wrong somewhere else in the app.
//
// "interface" is a TypeScript keyword — it doesn't create a real value,
// it's just a label for a shape that we can reuse (see "Technology" below).
export interface Technology {
  id: string;
  name: string;
  category: string; // e.g. "Frontend", "Backend", "Database"
  description: string;
  icon: string; // URL to the icon image
  rating: number; // e.g. 4.8
  difficulty: string; // "Beginner-Friendly" | "Intermediate" | "Advanced"
  badge: string; // e.g. "Popular", "Fast", "Essential"
}
