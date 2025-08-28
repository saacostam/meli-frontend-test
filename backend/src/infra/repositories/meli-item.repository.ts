import type { IItemRepository } from "../../app/repositories";
import { Item } from "../../domain/entities";

// TODO: Implement this when api integration is ready.

export class MeliItemRepository implements IItemRepository {
  getBySearchQuery(searchQuery: string): Item[] | Promise<Item[]> {
    return [
      new Item(
        "test-id",
        "test-title",
        {
          amount: 10,
          currency: "test-currency",
          decimals: 10,
        },
        "test",
        "test",
        false,
      )
    ]
  }

  getById(id: string): Promise<Item> | Item | undefined {
    return new Item(
      "test-id",
      "test-title",
      {
        amount: 10,
        currency: "test-currency",
        decimals: 10,
      },
      "test",
      "test",
      false,
    )
  }

  getCategories(): string[] | Promise<string[]> {
    return [
      "test-category-1",
      "test-category-2",
    ]
  }
}
