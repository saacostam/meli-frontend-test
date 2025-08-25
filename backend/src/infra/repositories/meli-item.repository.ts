import type { IItemRepository } from "../../app/repositories";
import { Item } from "../../domain/entities";

// TODO: Implement this when api integration is ready.

export class MeliItemRepository implements IItemRepository {
  getBySearchQuery(searchQuery: string): Item[] | Promise<Item[]> {
    return [
      new Item(
        "test",
        "test",
        "test",
        "test",
      )
    ]
  }

  getById(id: string): Promise<Item> | Item | undefined {
    return new Item(
      "test",
      "test",
      "test",
      "test",
    )
  }
}
