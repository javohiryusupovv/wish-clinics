export interface Review {
  id: number;
  name: string;
  initials: string;
  serviceKey: string; // Masalan: "therapy", "esthetics"
  textKey: string;    // "review_1", "review_2"...
  rating: number;
}

export const reviewsData: Review[] = [
  { id: 1, name: "Артем Васильев", initials: "АВ", serviceKey: "therapy", textKey: "r1", rating: 5 },
  { id: 2, name: "Мария Козлова", initials: "МК", serviceKey: "esthetics", textKey: "r2", rating: 5 },
  { id: 3, name: "Сергей Николаев", initials: "СН", serviceKey: "pediatric", textKey: "r3", rating: 5 },
  { id: 4, name: "Elena Kim", initials: "EK", serviceKey: "orthodontics", textKey: "r4", rating: 5 },
  { id: 5, name: "Jasur Shukurov", initials: "JS", serviceKey: "implant", textKey: "r5", rating: 5 },
  { id: 6, name: "Anna Belova", initials: "AB", serviceKey: "therapy", textKey: "r6", rating: 5 },
  { id: 7, name: "Dmitry Larin", initials: "DL", serviceKey: "esthetics", textKey: "r7", rating: 5 },
  { id: 8, name: "Nigora Alieva", initials: "NA", serviceKey: "pediatric", textKey: "r8", rating: 5 },
  { id: 9, name: "Ivan Volkov", initials: "IV", serviceKey: "implant", textKey: "r9", rating: 5 },
  { id: 10, name: "Oksana Pak", initials: "OP", serviceKey: "orthodontics", textKey: "r10", rating: 5 },
];