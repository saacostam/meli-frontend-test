import type { Item } from "./items.types";

export interface GetItemsBySearchQueryRequest {
  q: string;
}

export interface GetItemsBySearchQueryResponse {
  author: {
    name: string;
    lastname: string;
  };
  categories: string[];
  items: Item[];
}
