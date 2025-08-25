import { BaseDomainError, DomainErrorType } from "../../domain/errors";
import type { GetItemByIdAppRequestDto, GetItemsBySearchQueryAppRequestDto } from "../dtos";
import type { IItemRepository } from "../repositories";

export class ItemsUseCasesService {
  constructor(
    private readonly itemRepository: IItemRepository,
  ){}

  async getItemsBySearchQuery({ searchQuery }: GetItemsBySearchQueryAppRequestDto) {
    return this.itemRepository.getBySearchQuery(searchQuery);
  }

  async getItemById({ itemId }: GetItemByIdAppRequestDto) {
    const item = await this.itemRepository.getById(itemId);

    if (!item) throw new BaseDomainError(
      DomainErrorType.NOT_FOUND,
      `Couldn't find item with id ${itemId}`,
    )

    return item;
  }
}
