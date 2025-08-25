import { ItemsUseCasesService } from "../../app/use-cases";
import { MeliItemRepository } from "../repositories";

export const itemUseCasesService = new ItemsUseCasesService(
  new MeliItemRepository(),
)
