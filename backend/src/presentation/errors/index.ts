import { DomainErrorType } from "../../domain/errors";

export interface FieldError {
	field: string;
	message: string;
}

export interface ErrorResponse {
	message: string;
	status: number;
	errors?: FieldError[] | undefined;
}

export const mapDomainErrorTypeToStatusCode: Record<DomainErrorType, number> = {
	[DomainErrorType.BAD_REQUEST]: 400,
	[DomainErrorType.NOT_FOUND]: 404,
};
