import type { IItemRepository } from "../../../app/repositories";
import type { Item } from "../../../domain/entities";
import { CATEGORIES, ITEMS } from "./meli-item.mock";

export class MeliItemRepository implements IItemRepository {
  getBySearchQuery(searchQuery: string): Item[] | Promise<Item[]> {
    return ITEMS.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }

  getById(id: string): Promise<Item> | Item | undefined {
    return ITEMS.find((item) => item.id === id);
  }

  getCategories(): string[] | Promise<string[]> {
    return CATEGORIES;
  }
}
