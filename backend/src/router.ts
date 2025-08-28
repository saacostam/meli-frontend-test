import { Router } from "express";
import { errorHandlerMiddleware } from "./presentation/middlewares";
import { itemRouter } from "./presentation/routers";

export const mainRouter = Router();

mainRouter.use("/items", itemRouter);

mainRouter.use(errorHandlerMiddleware);
