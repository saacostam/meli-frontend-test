import type { Item } from "../../domain/entities";

export interface GetItemsBySearchQueryAppRequestDto {
  searchQuery: string;
}

export interface GetItemsBySearchQueryAppResponseDto {
  author: {
    name: string;
    lastname: string;
  };
  categories: string[];
  items: Item[];
}

export interface GetItemByIdAppRequestDto {
  itemId: string;
}

export interface GetItemByIdAppResponseDto {
  author: {
    name: string;
    lastname: string;
  };
  categories: string[];
  item: Item;
}
