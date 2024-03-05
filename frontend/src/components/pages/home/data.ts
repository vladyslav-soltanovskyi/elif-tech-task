import { ISortItem } from "@types-app/sort";

export const sortIems: ISortItem[] = [
  { name: "newest products", type: "date", order: "asc" },
  { name: "oldest products", type: "date", order: "desc" },
  { name: "price: low to high", type: "price", order: "asc" },
  { name: "price: high to low", type: "price", order: "desc" },
  { name: "name: a-z", type: "name", order: "asc" },
  { name: "name: z-a", type: "name", order: "desc" },
];