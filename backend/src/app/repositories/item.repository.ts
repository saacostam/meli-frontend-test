import type { Item } from "../../domain/entities";

export interface IItemRepository {
  getBySearchQuery(searchQuery: string): Item[] | Promise<Item[]>;
  getById(id: string): Promise<Item> | Item | undefined;
}
