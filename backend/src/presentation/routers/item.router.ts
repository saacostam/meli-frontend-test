import { Router } from "express";
import { BaseDomainError, DomainErrorType } from "../../domain/errors";
import { itemUseCasesService } from "../../infra/di";

const itemRouter = Router();

itemRouter.get("/", async (req, res) => {
  const rawQueryString = req.query.q;
  if (!rawQueryString)
    throw new BaseDomainError(
      DomainErrorType.BAD_REQUEST,
      "Must include query-string field",
      [
        {
          field: "q",
          message: "Not found",
        },
      ],
    );

  const queryString = String(
    Array.isArray(rawQueryString)
      ? rawQueryString[rawQueryString.length - 1]
      : rawQueryString,
  );

  const response = await itemUseCasesService.getItemsBySearchQuery({
    searchQuery: queryString,
  });
  res.status(200).json(response);
});

itemRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  if (!id)
    throw new BaseDomainError(
      DomainErrorType.NOT_FOUND,
      "Must include id field",
      [
        {
          field: "id",
          message: "Not found",
        },
      ],
    );

  const response = await itemUseCasesService.getItemById({
    itemId: id,
  });
  return res.status(200).json(response);
});

export { itemRouter };
