import { IDeserializable } from "../ideserializable.model";

export class BaseResponse<T> implements IDeserializable {
	Data!: T | null;
	Status!: number;
	Message!: string | null;
	TransactionId!: string | null;

	deserialize(input: any): this {
		Object.assign(this, input);
		return this;
	}
}
