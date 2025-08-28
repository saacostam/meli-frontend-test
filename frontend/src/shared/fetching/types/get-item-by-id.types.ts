import type { Item } from "./items.types";

export interface GetItemByIdRequest {
  id: string;
}

export interface GetItemByIdResponse {
  author: {
    name: string;
    lastname: string;
  };
  item: Item;
}
