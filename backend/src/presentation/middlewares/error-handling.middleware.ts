import type { NextFunction, Request, Response } from "express";
import { BaseDomainError } from "../../domain/errors";
import {
	type ErrorResponse,
	type FieldError,
	mapDomainErrorTypeToStatusCode,
} from "../errors";

export function errorHandlerMiddleware(
	err: unknown,
	_req: Request,
	res: Response,
	_next: NextFunction,
) {
	console.error(err);

	let statusCode = 500;
	let message = "Internal Server Error";
	let errors: FieldError[] | undefined;

	if (err instanceof BaseDomainError) {
		statusCode = mapDomainErrorTypeToStatusCode[err.type];
		message = err.message;
		errors = err.errors;
	} else if (err instanceof Error) {
		const errorWithStatus = err as unknown as { status: unknown };

		if (typeof errorWithStatus.status === "number") {
			statusCode = errorWithStatus.status;
		}
		message = err.message;
	}

	const errorResponse: ErrorResponse = {
		message: message,
		status: statusCode,
		errors: errors,
	};

	res.status(statusCode).json(errorResponse);
}
