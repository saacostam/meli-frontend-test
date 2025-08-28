import { BaseDomainError, DomainErrorType } from "../../domain/errors";
import type { GetItemByIdAppRequestDto, GetItemByIdAppResponseDto, GetItemsBySearchQueryAppRequestDto, GetItemsBySearchQueryAppResponseDto } from "../dtos";
import type { IItemRepository } from "../repositories";

const AUTHOR = {
  name: "Santiago",
  lastname: "Acosta Meza",
};

export class ItemsUseCasesService {
  constructor(
    private readonly itemRepository: IItemRepository,
  ){}

  async getItemsBySearchQuery({ searchQuery }: GetItemsBySearchQueryAppRequestDto): Promise<GetItemsBySearchQueryAppResponseDto> {
    const [
      categories,
      items,
    ] = await Promise.all([
      this.itemRepository.getCategories(),
      this.itemRepository.getBySearchQuery(searchQuery),
    ]);

    return {
      author: AUTHOR,
      categories,
      items: items.splice(0, 4),
    }
  }

  async getItemById({ itemId }: GetItemByIdAppRequestDto): Promise<GetItemByIdAppResponseDto> {
    const item = await this.itemRepository.getById(itemId);

    if (!item) throw new BaseDomainError(
      DomainErrorType.NOT_FOUND,
      `Couldn't find item with id ${itemId}`,
    )

    return {
      author: AUTHOR,
      item,
    };
  }
}
